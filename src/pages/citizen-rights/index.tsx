"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import * as Lucide from "lucide-react";

/* ---------- Brand colors ---------- */
const BRAND = {
  blue: "#47BDFF",
  indigo: "#003366",
};

export default function CitizenRightsPage() {
  const { t } = useTranslation("citizenRights");

  /* ----- Hero text ----- */
  const { title, subtitle1, subtitle2, slogan } = t("hero", {
    returnObjects: true,
  }) as {
    title: string;
    slogan: string;
    subtitle1: string;
    subtitle2: string;
  };

  /* ----- Rights grid ----- */
  const rights = t("rights", { returnObjects: true }) as {
    icon: string;
    title: string;
    desc: string;
    article: string;
  }[];

  /* ----- Tips & More-links ----- */
  const tips = t("tips", { returnObjects: true }) as string[];
  const moreCards = t("moreCards", { returnObjects: true }) as {
    icon: string;
    title: string;
    desc: string;
    link: string;
  }[];

  return (
    <main className="bg-gradient-to-br from-blue-50 via-slate-50 to-purple-100 min-h-screen pt-[90px] pb-20">
      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="w-full" style={{ background: BRAND.indigo }}>
        <div className="max-w-6xl mx-auto px-4 py-16 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
            {title}
          </h1>

          {/* Mini slogan */}
          <p className="text-lg md:text-xl font-semibold text-blue-200 mb-4">
            {slogan}
          </p>

          <p className="text-lg md:text-xl opacity-80 mb-1">{subtitle1}</p>
          <p className="text-lg md:text-xl opacity-80">{subtitle2}</p>
        </div>
      </section>

      {/* ── RIGHTS GRID ───────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rights.map((r) => {
            const Icon = (Lucide as any)[r.icon] || Lucide.FileText;
            return (
              <article
                key={r.title}
                className="flex gap-5 bg-white rounded-2xl p-6 border border-gray-200 shadow hover:shadow-lg hover:-translate-y-[2px] transition-all"
              >
                <span
                  className="rounded-xl p-3 bg-gray-100 flex items-center justify-center"
                  style={{ color: BRAND.blue }}
                >
                  <Icon className="w-9 h-9" />
                </span>
                <div>
                  <h2 className="font-bold text-lg mb-1 text-slate-900">
                    {r.title}
                  </h2>
                  <p className="text-slate-700 mb-1">{r.desc}</p>
                  <span className="text-sm text-gray-500">{r.article}</span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── ACTION CARDS ──────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Tips box */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-4" style={{ color: BRAND.indigo }}>
            {t("tipsTitle")}
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </div>

        {/* More-info links */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-4" style={{ color: BRAND.indigo }}>
            More Information
          </h3>
          <div className="space-y-4">
            {moreCards.map((c) => {
              const Icon = (Lucide as any)[c.icon] || Lucide.FileText;
              return (
                <Link
                  key={c.title}
                  href={c.link}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <Icon className="w-8 h-8" style={{ color: BRAND.blue }} />
                  <div>
                    <h4 className="font-semibold text-lg">{c.title}</h4>
                    <p className="text-gray-600">{c.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ASSISTANCE BAR ───────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 mt-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-white rounded-2xl px-8 py-6 shadow-md border border-indigo-100">
          <div>
            <div className="font-bold text-base mb-2" style={{ color: BRAND.indigo }}>
              {t("assistanceTitle")}
            </div>
            <Link href="mailto:rights@dpa.gov.so" className="underline" style={{ color: BRAND.blue }}>
              rights@dpa.gov.so
            </Link>

            <div className="mt-4">
              <div className="font-medium">{t("formsTitle")}</div>
              <ul className="list-disc pl-5 text-gray-700">
                {(t("forms", { returnObjects: true }) as string[]).map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          </div>

          <Link href="/resources" className="underline font-medium mt-6 md:mt-0" style={{ color: BRAND.blue }}>
            {t("resourcesLink")}
          </Link>
        </div>
      </section>
    </main>
  );
}
