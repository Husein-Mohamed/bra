// pages/debug.tsx
"use client";

import { useState, useRef } from "react";

export default function DebugEditor() {
  const [html, setHtml] = useState("<p>Edit me…</p>");
  const editorRef = useRef<HTMLDivElement>(null);

  const onBlur = () => {
    const cur = editorRef.current;
    console.log("BLUR HTML:", cur?.innerHTML);
    setHtml(cur?.innerHTML || "");
  };

  function wrapSelectionWithSpan(fontSize: number) {
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) return;
    const range = sel.getRangeAt(0);
    if (range.collapsed) return; // nothing selected

    // Extract the selected content
    const frag = range.extractContents();
    // Create a wrapper <span>
    const span = document.createElement("span");
    span.style.fontSize = `${fontSize}%`;
    span.appendChild(frag);
    // Insert it back
    range.insertNode(span);

    // Move caret after inserted span
    range.setStartAfter(span);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
  }

  return (
    <div style={{ padding: 20, marginTop: "5rem" }}>
      <h2>Debug ContentEditable</h2>
      <div style={{ marginBottom: 10 }}>
        <button onClick={() => wrapSelectionWithSpan(150)}>H1 (150%)</button>{" "}
        <button onClick={() => wrapSelectionWithSpan(125)}>H2 (125%)</button>{" "}
        <button onClick={() => wrapSelectionWithSpan(100)}>H3 (100%)</button>
      </div>
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        onBlur={onBlur}
        style={{
          border: "1px solid #ccc",
          minHeight: 100,
          padding: 10,
          fontFamily: "sans-serif",
        }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
