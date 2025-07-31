"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import * as Lucide from "lucide-react";

/* ---------- Brand colors ---------- */
const BRAND = {
  navy:  "#080c2c",
  blue:  "#47BDFF",
  indigo: "#003366"
};

export default function CitizenRightsPage() {
  const { t } = useTranslation("citizenRights");

  /* ----- Rights ----- */
  const rights = t("rights", { returnObjects: true }) as {
    icon?: string;
    title: string;
    desc: string;
    article: string;
  }[];

  /* ----- Tips (optional) ----- */
  const tipsRaw = t("tips", { returnObjects: true });
  const tips: string[] = Array.isArray(tipsRaw) ? tipsRaw : [];

  /* ----- Guides (link to pages, not PDFs) ----- */
  const guides = [
    { label: t("publicGuide", "For The Public – Know Your Rights"), href: "/ftp" },
    { label: t("orgGuide", "For Organizations – Know Your Obligations"), href: "/fto" }
  ];

  /* ----- Forms list ----- */
  const formsRaw = t("forms", { returnObjects: true });
  const forms: string[] = Array.isArray(formsRaw) ? formsRaw : [];

  /* ---------- Render ---------- */
  return (
    <main className="bg-gradient-to-br from-blue-50 via-slate-50 to-purple-100 min-h-screen pt-[90px] pb-20">

      {/* HERO */}
      <section className="w-full" style={{ background: BRAND.navy }}>
        <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              <span className="text-white">{t("hero.white", "Citizen")}</span>{" "}
              <span style={{ color: BRAND.blue }}>
                {t("hero.blue", "Rights")}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80">{t("subtitle")}</p>
          </div>

          {/* decorative icon */}
          <Lucide.IdCard className="w-32 h-24 text-indigo-200 mt-10 md:mt-0 md:ml-8" />
        </div>
      </section>

      {/* RIGHTS GRID */}
      <section className="max-w-6xl mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {rights.map((r) => {
            const Icon = (Lucide as any)[r.icon ?? ""] ?? Lucide.FileText;
            return (
              <article
                key={r.title}
                className="flex gap-5 bg-white rounded-2xl p-6 border border-gray-200 shadow hover:shadow-lg hover:-translate-y-[2px] transition-all"
              >
                <span className="rounded-xl p-3 bg-gray-100 flex items-center justify-center">
                  <Icon className="w-9 h-9" style={{ color: BRAND.blue }} />
                </span>
                <div>
                  <h2 className="font-bold text-lg mb-1 text-slate-900">{r.title}</h2>
                  <p className="text-slate-700 mb-0.5">{r.desc}</p>
                  <span className="text-sm text-gray-500">{r.article}</span>
                </div>
              </article>
            );
          })}
        </div>

        {/* TIPS + GUIDES */}
        <div className="grid gap-10 md:grid-cols-2 mb-20">
          {/* -- Privacy Tips card -- */}
          {tips.length > 0 && (
            <section className="rounded-2xl shadow-lg border border-indigo-100 overflow-hidden bg-white">
              {/* header gradient */}
              <header
                className="px-6 py-4 flex items-center gap-3"
                style={{ background: `linear-gradient(135deg, ${BRAND.blue} 0%, ${BRAND.indigo} 100%)` }}
              >
                <Lucide.Shield className="w-6 h-6 text-white" />
                <h3 className="font-bold text-lg text-white tracking-tight">{t("tipsTitle")}</h3>
              </header>

              <ul className="px-6 py-5 space-y-2">
                {tips.map((tip) => (
                  <li key={tip} className="flex items-start gap-3">
                    <Lucide.CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: BRAND.blue }} />
                    <span className="text-gray-800">{tip}</span>
                  </li>
                ))}
              </ul>

              {/* quick links */}
              <footer className="px-6 pb-5 flex flex-wrap gap-3">
                {guides.map((g) => (
                  <Link key={g.href} href={g.href}>
                    <span
                      className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-[color:var(--tw-gradient-from)] text-[color:var(--tw-gradient-stops)] font-medium hover:shadow-md hover:-translate-y-0.5 transition"
                      style={{ backgroundColor: `${BRAND.blue}1A`, color: BRAND.blue }}
                    >
                      {g.label}
                      <Lucide.ArrowUpRight className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
              </footer>
            </section>
          )}

          {/* -- Guides card -- */}
          <section className="rounded-2xl shadow-lg border border-indigo-100 bg-white flex flex-col">
            <header className="px-6 py-4 flex items-center gap-3 border-b border-gray-100">
              <Lucide.BookOpen className="w-6 h-6" style={{ color: BRAND.indigo }} />
              <h3 className="font-bold text-lg">{t("guidesTitle")}</h3>
            </header>

            <div className="flex-1 px-6 py-5">
              <ul className="space-y-4">
                {guides.map((g) => (
                  <li key={g.href}>
                    <Link href={g.href}>
                      <span className="group inline-flex items-center gap-2 text-[color:var(--tw-gradient-stops)] hover:underline"
                            style={{ color: BRAND.blue }}>
                        <Lucide.FileText className="w-5 h-5 group-hover:scale-110 transition" />
                        {g.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <footer className="px-6 pb-6 mt-auto">
              <Link href="/resources">
                <button
                  className="w-full py-2 rounded-md font-semibold text-white hover:shadow-lg transition"
                  style={{ background: BRAND.indigo }}
                >
                  {t("resourcesLink")}
                </button>
              </Link>
            </footer>
          </section>
        </div>

        {/* ASSISTANCE BAR */}
        <section className="flex flex-col md:flex-row md:items-center md:justify-between bg-white rounded-2xl px-8 py-6 shadow-md border border-indigo-100">
          <div>
            <div className="font-bold text-base" style={{ color: BRAND.indigo }}>
              {t("assistanceTitle")}
            </div>
            <a href="mailto:rights@dpa.gov.so" className="underline" style={{ color: BRAND.blue }}>
              rights@dpa.gov.so
            </a>

            {forms.length > 0 && (
              <div className="mt-4">
                <div className="font-medium">{t("formsTitle")}</div>
                <ul className="list-disc pl-5 text-gray-700">
                  {forms.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-3 mt-6 md:mt-0">


            <Link href="/resources">
              <span className="underline font-medium" style={{ color: BRAND.blue }}>
                {t("resourcesLink")}
              </span>
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
