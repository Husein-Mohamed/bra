"use client";

import Link from "next/link";
import { useTranslation, Trans } from "react-i18next";
import { Check, Link as LinkIcon, Mail, ShieldCheck } from "lucide-react";
import React from "react";

export default function PrivacyPolicyPage() {
  const { t } = useTranslation("privacyPolicy");

  const toc = t("toc", { returnObjects: true }) as Record<string, string>;
  const sections = [
    "consent","information","use","cookies","links","security",
    "optout","comments","children","changes","contact",
    "rights","retention","transfers","dpo"
  ];

  return (
    <main className="scroll-smooth bg-[#f7f7f8]">
      {/* Hero */}
      <header
        id="top"
        className="relative isolate overflow-hidden bg-gradient-to-r from-[#061829] via-[#0F4C75] to-[#47BDFF] text-white"
      >
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

      {/* Content */}
      <section className="mx-auto max-w-7xl px-4 pb-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
          {/* TOC Sidebar */}
          <aside className="sticky top-28 hidden self-start lg:block">
            <nav className="rounded-2xl border border-gray-200 bg-white p-6 shadow">
              <h2 className="mb-4 text-lg font-semibold text-[#061829]">
                <ShieldCheck className="inline h-5 w-5 mr-1 text-[#061829]" />
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

          {/* Body */}
          <article className="prose prose-lg max-w-none space-y-12 rounded-2xl border border-gray-200 bg-white p-6 shadow md:p-10 lg:space-y-14 prose-headings:text-[#061829] prose-a:text-[#47BDFF]">
            {/* Intro */}
            {t("intro", { returnObjects: true }).map((line, i) => (
              <p key={i} className="text-base">
                <Trans
                  i18nKey={`intro.${i}`}
                  t={t}
                  components={{
                    1: <Link href="https://dpa.gov.so" className="underline" target="_blank" rel="noreferrer" />,
                    13: <a href="mailto:info@dpa.gov.so" className="underline" />
                  }}
                />
              </p>
            ))}

            {/* Sections */}
            {sections.map((id) => (
              <section id={id} key={id} className="scroll-mt-28 space-y-4">
                <h2 className="text-xl font-bold">{toc[id]}</h2>
                {renderSectionContent(id, t)}
              </section>
            ))}
          </article>
        </div>
      </section>
    </main>
  );
}

/** Renders either a paragraph or an icon-bulleted list */
function renderSectionContent(id: string, t: any) {
  const data = t(id, { returnObjects: true });

  // If the JSON entry is an array, render an icon-bulleted list
  if (Array.isArray(data)) {
    return (
      <ul className="space-y-2 list-none">
        {data.map((item: string, i: number) => (
          <li key={i} className="flex items-start gap-2">
            <Check className="h-5 w-5 mt-1 text-[#47BDFF]" />
            <Trans
              i18nKey={`${id}.${i}`}
              t={t}
              components={{
                0: <strong />,
                2: <strong />,
                4: <em />,
                3: <Link href="/cookie-policy" className="underline" />
              }}
            />
          </li>
        ))}
      </ul>
    );
  }

  // Otherwise render as a single paragraph
  return <p className="text-base">{data}</p>;
}
