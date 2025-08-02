"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Blog = {
  title: string;
  content: string;
  coverImage?: string;  // ← NEW  (may be "")
  date: string;
};

export default function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  /* load posts once on mount */
  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then(setBlogs)
      .catch(console.error);
  }, []);

  /* empty-state */
  if (blogs.length === 0) {
    return (
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500">
          No blog posts yet.
        </div>
      </section>
    );
  }

  /* list */
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#080c2c]">Our Blogs</h2>
          <p className="text-gray-600">Insights and updates from our team</p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((b, i) => (
            <article
              key={i}
              className="flex flex-col bg-[#f6fafd] border border-gray-300 rounded-2xl shadow p-0 overflow-hidden"
            >
              {/* thumbnail (if present) */}
              {b.coverImage && (
                <img
                  src={b.coverImage}
                  alt={b.title}
                  className="h-40 w-full object-cover"
                />
              )}

              {/* text content */}
              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2 text-[#080c2c]">
                  {b.title}
                </h3>
                <time className="text-sm text-gray-500 mb-4">
                  {new Date(b.date).toLocaleDateString()}
                </time>
                <p className="text-gray-800 mb-6 line-clamp-3">{b.content}</p>

                {/* read-more */}
                <Link
                  href={`/blog/${i}`}
                  className="mt-auto inline-block w-full text-center bg-[#47BDFF] text-white font-bold px-4 py-3 rounded-xl hover:bg-opacity-90 transition"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
