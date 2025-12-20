"use client";

import React from "react";
import Link from "next/link";
import { useTranslation, Trans } from "react-i18next";
import {
  Check,
  Link as LinkIcon,
  ShieldCheck,
  Mail,
} from "lucide-react";

export default function TermsPage() {
  const { t } = useTranslation("terms");

  /* ── table-of-contents order ── */
  const toc = t("toc", { returnObjects: true }) as Record<string, string>;
  const sections = [
    "ownership",
    "acceptance",
    "definitions",
    "externalLinks",
    "liability",
    "responsibilities",
    "termination",
    "law",
    "changes",
    "contact",
  ] as const;

  return (
    <main className="scroll-smooth bg-[#f7f7f8]">
      {/* ── Hero ───────────────────────────────────────────── */}
      <header className="relative isolate overflow-hidden bg-gradient-to-r from-[#061829] via-[#0F4C75] to-[#47BDFF] text-white">
        <div className="mx-auto max-w-4xl px-4 py-24 text-center lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            {t("hero.heading")}
          </h1>
          <p className="mt-4 text-lg/relaxed opacity-90">
            {t("hero.subtitle")}
          </p>
        </div>
        <svg
          className="absolute bottom-0 left-0 h-12 w-full text-[#f7f7f8]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,181.3C672,171,768,117,864,112C960,107,1056,149,1152,165.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L0,320Z"
          />
        </svg>
      </header>

      {/* ── Content ────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 pb-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
          {/* TOC */}
          <aside className="sticky top-28 hidden self-start lg:block">
            <nav className="rounded-2xl border border-gray-200 bg-white p-6 shadow">
              <h2 className="mb-4 text-lg font-semibold text-[#061829]">
                <ShieldCheck className="inline h-5 w-5 mr-1" />
                {t("tocTitle", "Contents")}
              </h2>
              <ul className="space-y-2 text-sm">
                {sections.map((id) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="flex items-center gap-1 text-[#47BDFF] hover:text-[#0F4C75] hover:underline"
                    >
                      <LinkIcon className="h-4 w-4" />
                      {toc[id]}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Article */}
          <article className="prose prose-lg max-w-none space-y-12 rounded-2xl border border-gray-200 bg-white p-6 shadow md:p-10 lg:space-y-14 prose-headings:text-[#061829] prose-a:text-[#47BDFF]">
            {/* Intro paragraphs */}
            {t("intro", { returnObjects: true }).map((line: string, i: number) => (
              <p key={i} className="text-base">
                <Trans i18nKey={`intro.${i}`} t={t} />
              </p>
            ))}

            {/* Sections */}
            {sections.map((id) => (
              <section id={id} key={id} className="scroll-mt-28 space-y-4">
                <h2 className="text-xl font-bold">{toc[id]}</h2>
                {renderSection(id, t)}
              </section>
            ))}
          </article>
        </div>
      </section>
    </main>
  );
}

/* ── helper: list vs paragraph ───────────────────────────── */
function renderSection(id: string, t: any) {
  const data = t(id, { returnObjects: true });

  if (Array.isArray(data)) {
    return (
      <ul className="space-y-2 list-none">
        {data.map((line: string, i: number) => (
          <li key={i} className="flex items-start gap-2">
            <Check className="h-5 w-5 mt-0.5 text-[#47BDFF]" />
            <Trans i18nKey={`${id}.${i}`} t={t} />
          </li>
        ))}
      </ul>
    );
  }

  /* contact section: make email & url clickable */
  if (id === "contact") {
    return (
      <>
        <div className="flex items-center gap-2">
          <Mail className="h-5 w-5 text-[#061829]" />
          <a href={`mailto:${t("contact.email")}`} className="underline">
            {t("contact.email")}
          </a>
        </div>
        <a
          href={t("contact.url")}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          {t("contact.url")}
        </a>
      </>
    );
  }

  return <p>{data}</p>;
}
