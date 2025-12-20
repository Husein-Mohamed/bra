"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

type UploadState = "idle" | "loading" | "done";

export default function AdminPage() {
  const router = useRouter();
  const editorRef = useRef<HTMLDivElement>(null);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [saving, setSaving] = useState<UploadState>("idle");

  // ── guard: if not logged in or session expired, send back to /news/g
  useEffect(() => {
    if (typeof window === "undefined") return;

    const isAdmin = localStorage.getItem("isAdmin");
    const loginTime = parseInt(localStorage.getItem("adminLoginTime") || "0", 10);
    const FIVE_HOURS = 5 * 3600 * 1000;

    if (isAdmin !== "true" || Date.now() - loginTime > FIVE_HOURS) {
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("adminLoginTime");
      document.cookie = "isAdmin=; Path=/; Max-Age=0;";
      router.replace("/news/g");
    }
  }, [router]);

  // image preview
  useEffect(() => {
    if (!imageFile) {
      setImagePreview(null);
      return;
    }
    const url = URL.createObjectURL(imageFile);
    setImagePreview(url);
    return () => URL.revokeObjectURL(url);
  }, [imageFile]);

  // live-update content on input
  const handleEditorInput = () => {
    if (!editorRef.current) return;
    setContent(editorRef.current.innerHTML);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving("loading");
    let coverImage = "";

    if (imageFile) {
      const fd = new FormData();
      fd.append("file", imageFile);
      const upRes = await fetch("/api/upload", { method: "POST", body: fd });
      if (!upRes.ok) {
        alert("Image upload failed");
        setSaving("idle");
        return;
      }
      coverImage = (await upRes.json()).url;
    }

    await fetch("/api/blogs/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, coverImage }),
    });

    setSaving("done");
    setTitle("");
    setContent("");
    setImageFile(null);
    if (editorRef.current) editorRef.current.innerHTML = "";
  };

  // Inline font-size
  const wrapSize = (percent: number) => {
    const sel = window.getSelection()?.toString() || "";
    if (!sel.trim()) return;
    document.execCommand(
      "insertHTML",
      false,
      `<span style="font-size:${percent}%;">${sel}</span>`
    );
    handleEditorInput();
  };

  // Insert link
  const insertLink = () => {
    const url = window.prompt("Enter URL", "https://");
    if (!url) return;
    const text = window.getSelection()?.toString() || "link text";
    document.execCommand("insertText", false, `[${text}](${url})`);
    handleEditorInput();
  };

  // Strip empty spans on blur
  const handleEditorBlur = () => {
    if (!editorRef.current) return;
    const html = editorRef.current.innerHTML;
    const cleaned = html.replace(
      /<span style="font-size:\s*\d+%;?">\s*<\/span>/g,
      ""
    );
    setContent(cleaned);
  };

  return (
    <div className="flex min-h-screen bg-[#f6fafd]">
      <form
        onSubmit={handleSave}
        className="flex-1 max-w-3xl mx-auto my-10 bg-white border border-gray-200 rounded-2xl shadow-lg p-10 space-y-8 overflow-auto"
      >
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/images/Logo/DPA LOGO-01.png"
            alt="DPA logo"
            width={120}
            height={120}
            className="rounded-full"
          />
        </div>

        <h1 className="text-3xl font-bold text-[#080c2c] text-center">
          Blog Editor
        </h1>

        {/* Title */}
        <label className="block">
          <span className="block mb-2 font-medium text-gray-700">Title</span>
          <input
            type="text"
            className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-[#47BDFF] outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter blog title"
            required
          />
        </label>

        {/* Thumbnail */}
        <label className="block">
          <span className="block mb-2 font-medium text-gray-700">
            Thumbnail Image
          </span>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
            className="block w-full text-sm text-gray-600 file:mr-4 file:rounded-lg file:border-0 file:bg-[#47BDFF] file:px-4 file:py-2 hover:file:bg-[#3aa8e6]"
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-4 h-40 w-full object-cover rounded-lg"
            />
          )}
        </label>

        {/* Markdown Toolbar */}
        <div>
          <span className="block mb-2 font-medium text-gray-700">
            Content
          </span>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <button
              type="button"
              onClick={() => {
                document.execCommand("bold", false);
                handleEditorInput();
              }}
              className="rounded border px-2 py-1 text-sm hover:bg-gray-100"
            >
              <b>B</b>
            </button>
            <button
              type="button"
              onClick={() => {
                document.execCommand("italic", false);
                handleEditorInput();
              }}
              className="rounded border px-2 py-1 text-sm hover:bg-gray-100"
            >
              <i>I</i>
            </button>
            <button
              type="button"
              onClick={() => wrapSize(150)}
              className="rounded border px-2 py-1 text-sm hover:bg-gray-100"
            >
              H1
            </button>
            <button
              type="button"
              onClick={() => wrapSize(125)}
              className="rounded border px-2 py-1 text-sm hover:bg-gray-100"
            >
              H2
            </button>
            <button
              type="button"
              onClick={() => wrapSize(100)}
              className="rounded border px-2 py-1 text-sm hover:bg-gray-100"
            >
              H3
            </button>
            <button
              type="button"
              onClick={insertLink}
              className="rounded border px-2 py-1 text-sm hover:bg-gray-100"
            >
              🔗
            </button>
          </div>

          {/* contentEditable */}
          <div
            ref={editorRef}
            contentEditable
            suppressContentEditableWarning
            className="h-60 w-full rounded-lg border border-gray-300 p-3 resize-y focus:ring-2 focus:ring-[#47BDFF] outline-none prose prose-a:text-blue-600 prose-a:underline prose-a:hover:text-blue-800"
            onInput={handleEditorInput}
            onBlur={handleEditorBlur}
          />
        </div>

        {/* Save */}
        <button
          type="submit"
          className="w-full bg-[#47BDFF] hover:bg-[#3aa8e6] text-white font-semibold py-3 rounded-xl transition disabled:opacity-50"
          disabled={saving === "loading"}
        >
          {saving === "loading" ? "Saving…" : "Save Post"}
        </button>
        {saving === "done" && (
          <p className="text-center text-green-600">Blog saved successfully!</p>
        )}
      </form>

      {/* Preview */}
      <aside className="hidden xl:block w-1/2 border-l border-gray-200 bg-white overflow-auto p-10">
        <h2 className="mb-6 text-2xl font-bold text-[#080c2c]">Preview</h2>
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="mb-6 w-full h-60 object-cover rounded-lg"
          />
        )}
        <h3 className="text-xl font-bold mb-4">
          {title || "Title preview…"}
        </h3>
        <div className="prose max-w-full">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            skipHtml={false}
            components={{
              a: ({ node, ...props }) => (
                <a {...props} className="text-blue-600 underline hover:text-blue-800" />
              ),
            }}
          >
            {content || "Content preview…"}
          </ReactMarkdown>
        </div>
      </aside>
    </div>
  );
}
