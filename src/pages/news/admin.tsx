"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type UploadState = "idle" | "loading" | "done";

export default function AdminPage() {
  const router = useRouter();

  // ── guard: if not logged in, send back to /news/g
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      localStorage.getItem("isAdmin") !== "true"
    ) {
      router.replace("/news/g");
    }
  }, [router]);

  // ── the rest is your BlogAdmin component…
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [saving, setSaving] = useState<UploadState>("idle");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!imageFile) {
      setImagePreview(null);
      return;
    }
    const url = URL.createObjectURL(imageFile);
    setImagePreview(url);
    return () => URL.revokeObjectURL(url);
  }, [imageFile]);

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
      const { url } = await upRes.json();
      coverImage = url;
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
  };

  const surroundSelection = (before: string, after = before) => {
    const el = textareaRef.current;
    if (!el) return;
    const { selectionStart: start, selectionEnd: end, value: text } = el;
    const selected = text.slice(start, end);
    const newText =
      text.slice(0, start) + before + selected + after + text.slice(end);
    setContent(newText);
    setTimeout(() => {
      el.focus();
      el.setSelectionRange(
        start + before.length,
        start + before.length + selected.length
      );
    }, 0);
  };

  const insertHeading2 = () => {
    const el = textareaRef.current;
    if (!el) return;
    const { selectionStart: start, value: text } = el;
    const lineStart = text.lastIndexOf("\n", start - 1) + 1;
    const newText =
      text.slice(0, lineStart) + "## " + text.slice(lineStart);
    setContent(newText);
    setTimeout(() => {
      el.focus();
      el.setSelectionRange(start + 3, start + 3);
    }, 0);
  };

  const insertLink = () => {
    const el = textareaRef.current;
    if (!el) return;
    const { selectionStart: start, selectionEnd: end, value: text } = el;
    const selected = text.slice(start, end) || "link text";
    const url = window.prompt("Enter URL", "https://");
    if (!url) return;
    const markdown = `[${selected}](${url})`;
    const newText = text.slice(0, start) + markdown + text.slice(end);
    setContent(newText);
    setTimeout(() => {
      el.focus();
      const cursor = start + markdown.length;
      el.setSelectionRange(cursor, cursor);
    }, 0);
  };

  return (
    <div className="flex min-h-screen bg-[#f6fafd]">
      <form
        onSubmit={handleSave}
        className="flex-1 max-w-3xl mx-auto my-10 bg-white border border-gray-200 rounded-2xl shadow-lg p-10 space-y-8 overflow-auto"
      >
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

        <label className="block">
          <span className="block mb-2 font-medium text-gray-700">
            Thumbnail Image
          </span>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
            className="block w-full text-sm text-gray-600
                       file:mr-4 file:rounded-lg
                       file:border-0 file:bg-[#47BDFF]
                       file:px-4 file:py-2 file:text-white
                       hover:file:bg-[#3aa8e6]"
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-4 h-40 w-full object-cover rounded-lg"
            />
          )}
        </label>

        <div>
          <span className="block mb-2 font-medium text-gray-700">
            Content
          </span>
          <div className="flex gap-2 mb-2">
            <button
              type="button"
              title="Bold"
              onClick={() => surroundSelection("**")}
              className="rounded border px-2 py-1 text-sm hover:bg-gray-100"
            >
              <b>B</b>
            </button>
            <button
              type="button"
              title="Italic"
              onClick={() => surroundSelection("_")}
              className="rounded border px-2 py-1 text-sm hover:bg-gray-100"
            >
              <i>I</i>
            </button>
            <button
              type="button"
              title="H2"
              onClick={insertHeading2}
              className="rounded border px-2 py-1 text-sm hover:bg-gray-100"
            >
              H2
            </button>
            <button
              type="button"
              title="Link"
              onClick={insertLink}
              className="rounded border px-2 py-1 text-sm hover:bg-gray-100"
            >
              🔗
            </button>
          </div>
          <textarea
            ref={textareaRef}
            id="blog-editor"
            className="h-60 w-full rounded-lg border border-gray-300 p-3 resize-y focus:ring-2 focus:ring-[#47BDFF] outline-none"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your blog post in Markdown…"
            required
          />
        </div>

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
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content || "Content preview…"}
          </ReactMarkdown>
        </div>
      </aside>
    </div>
  );
}
