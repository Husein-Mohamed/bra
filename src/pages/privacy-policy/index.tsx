"use client";

import Link from "next/link";
import { useTranslation, Trans } from "react-i18next";
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
        <svg className="absolute bottom-0 left-0 h-12 w-full text-[#f7f7f8]"
             viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,224L48,208…" />
        </svg>
      </header>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-4 pb-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
          {/* TOC */}
          <aside className="sticky top-28 hidden self-start lg:block">
            <nav className="rounded-2xl border border-gray-200 bg-white p-6 shadow">
              <h2 className="mb-4 text-lg font-semibold text-[#061829]">
                {t("tocTitle", "Contents")}
              </h2>
              <ul className="space-y-1 text-sm leading-snug">
                {sections.map((id) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="text-[#47BDFF] transition-colors hover:text-[#0F4C75] hover:underline"
                    >
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
              <Trans
                key={i}
                i18nKey={`intro.${i}`}
                components={{
                  1: <strong />, 3: <a href="https://dpa.gov.so" target="_blank" rel="noreferrer noopener" />,
                  5: <strong />, 7: <strong />, 9: <em />, 11: <strong />,
                  13: <a href="mailto:info@dpa.gov.so" />
                }}
              />
            ))}

            {/* Sections */}
            {sections.map((id) => (
              <section id={id} key={id} className="scroll-mt-28 space-y-4">
                <h2>{toc[id]}</h2>
                {renderSectionContent(id, t)}
              </section>
            ))}
          </article>
        </div>
      </section>
    </main>
  );
}

/* Helper renders each section’s body from JSON */
function renderSectionContent(id: string, t: any) {
  const data = t(id, { returnObjects: true });
  if (Array.isArray(data)) {
    return (
      <>
        {data.map((item: string, i: number) => (
          <Trans
            t={t}
            key={i}
            i18nKey={`${id}.${i}`}
            components={{
              0: <strong />,
              2: <strong />,
              4: <em />,
              6: <strong />,
              3: <a href="/cookie-policy" />,
              5: <em />,
              13: <a href="mailto:info@dpa.gov.so" />
            }}
          />
        ))}
      </>
    );
  }
  // single string
  return <p>{data}</p>;
}
