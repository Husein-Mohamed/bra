// src/components/LatestNewsDemo.tsx
"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function LatestNewsDemo() {
  const { t } = useTranslation("latestNews");

  const posts = t("posts", { returnObjects: true }) as Array<{
    id: string;
    title: string;
    summary: string;
    published: string;
    href: string;
    image: string;
  }>;

  return (
    <section className="bg-[#F6FAFD] py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div className="space-y-3">
            <Badge
              variant="outline"
              className="border-[#003366] text-[#003366] font-semibold"
            >
              {t("newsBadge")}
            </Badge>
            <h1 className="text-4xl font-bold text-[#010B2B] md:text-5xl lg:text-6xl">
              {t("newsTitle")}
            </h1>
          </div>
          <Link href="/news" passHref>
            <Button
              variant="default"
              className="bg-[#003366] text-white hover:bg-[#00254d] transition"
            >
              {t("seeMore")}
              <ArrowRight className="ml-2 text-white" size={16} />
            </Button>
          </Link>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              {/* Image */}
              <div className="aspect-[3/2] w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-xl font-semibold text-[#010B2B] mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4 flex-1">
                  {post.summary}
                </p>
                <div className="mt-auto flex items-center justify-between text-xs text-[#003366] font-medium">
                  <time dateTime={post.published}>{post.published}</time>
                  <Link
                    href={post.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    Read <ArrowRight className="ml-1" size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
