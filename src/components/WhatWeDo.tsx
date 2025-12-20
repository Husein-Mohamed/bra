// src/components/WhatWeDo.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";

/* ---------- Brand colours ---------- */
const BRAND = {
  navy:   "#080c2c",
  blue:   "#47BDFF",
  indigo: "#003366",
};

/* ---------- Post meta ---------- */
const posts = [
  {
    id: "post-1",
    titleKey: "posts.post1.title",
    summaryKey: "posts.post1.summary",
    image: "/images/Regulation-01.png",
  },
  {
    id: "post-2",
    titleKey: "posts.post2.title",
    summaryKey: "posts.post2.summary",
    image: "/images/Awareness Campaign-01.png",
  },
  {
    id: "post-3",
    titleKey: "posts.post3.title",
    summaryKey: "posts.post3.summary",
    image: "/images/Enforcement and Compliance-01.png",
  },
];

export default function WhatWeDo() {
  const { t } = useTranslation("whoWeAre");

  return (
    <section
      className="w-full py-20 lg:py-24"
      style={{ backgroundColor: BRAND.navy }}          /* deep-navy backdrop */
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* ---------- Header ---------- */}
        <header className="mb-16 flex flex-col gap-4 text-center text-white">
          <Badge variant="outline" className="mx-auto border-white text-white">
            {t("badge")}
          </Badge>

          <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
            {t("mainTitle")}
          </h2>
        </header>

        {/* ---------- Card grid ---------- */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.id}
              href="#"
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-48 w-full sm:h-56 lg:h-48">
                <Image
                  src={post.image}
                  alt={t(post.titleKey)}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center transition group-hover:scale-105"
                  priority
                />
                {/* subtle overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col gap-6 px-6 py-8 text-white">
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-[color:var(--brand-blue)]">
                    {t(post.titleKey)}
                  </h3>
                  <div className="mt-3 h-0.5 w-16 rounded-full bg-[color:var(--brand-blue)] opacity-0 transition group-hover:opacity-100" />
                </div>

                <p className="text-sm leading-relaxed text-white/80">
                  {t(post.summaryKey)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
