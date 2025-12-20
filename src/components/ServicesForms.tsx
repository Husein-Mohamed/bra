"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";

type FormItem = {
  id: string;
  icon: string;
  name: string;
  description: string;
  docs: string[];
};

export default function ServicesForms() {
  const { t } = useTranslation("services");

  const badge = t("badge");
  const heading = t("heading");

  const forms =
    (t("forms", {
      returnObjects: true,
    }) as FormItem[]) || [];

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-24 bg-white overflow-hidden">
      {/* LEFT SHAPE */}
      <div className="absolute left-0 top-0 h-full w-[350px] opacity-30 blur-sm pointer-events-none">
        <svg viewBox="0 0 300 800" className="w-full h-full">
          <defs>
            <linearGradient id="gradLeft" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6b0303ff" />
              <stop offset="100%" stopColor="#5f0101ff" />
            </linearGradient>
          </defs>
          <path
            d="
              M0 0
              C160 140, 220 260, 130 430
              C40 600, 110 710, 240 800
              L0 800 Z
            "
            fill="url(#gradLeft)"
          />
        </svg>
      </div>

      {/* RIGHT SHAPE */}
      <div className="absolute right-0 top-0 h-full w-[350px] opacity-30 blur-sm pointer-events-none">
        <svg viewBox="0 0 300 800" className="w-full h-full">
          <defs>
            <linearGradient id="gradRight" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0a1150" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </linearGradient>
          </defs>
          <path
            d="
              M300 0
              C140 140, 80 260, 160 430
              C240 600, 170 710, 40 800
              L300 800 Z
            "
            fill="url(#gradRight)"
          />
        </svg>
      </div>

      {/* HEADING */}
      <div className="relative max-w-7xl mx-auto mb-14">
        <p className="text-xs font-semibold uppercase tracking-widest text-red-900">
          {badge}
        </p>

        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-blue-900 drop-shadow-sm">
          {heading}
        </h2>
      </div>

      {/* CARDS */}
      <div
        className="
          relative
          max-w-6xl mx-auto
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-8
        "
      >
        {forms.map((f) => (
          <Link
            key={f.id}
            href={`/services#${f.id}`}
            className="
              group
              bg-[#080C2C]
              border border-[#1e3555]
              rounded-2xl p-6
              min-h-[220px]
              shadow-[0_0_15px_rgba(0,0,0,0.25)]
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-[0_0_25px_rgba(185,28,28,0.4)]
              hover:border-red-900
              flex flex-col justify-between
            "
          >
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wide text-white mb-3">
                {f.name}
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed">
                {f.description}
              </p>
            </div>

            <span
              className="
                mt-6
                inline-flex items-center justify-center w-fit gap-2 px-4 py-2
                bg-red-900 text-white
                font-medium rounded-md
                shadow-md
                group-hover:shadow-[0_0_10px_rgba(185,28,28,0.6)]
                transition-all text-xs
              "
            >
              {t("cta.viewMore", "View More")}
              <ArrowRight className="w-3 h-3" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
