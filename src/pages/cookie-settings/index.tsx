// src/pages/cookie-settings/index.tsx
"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";

export default function CookiePolicyPage() {
  const { t } = useTranslation("cookiePolicy");

  /* ── table-of-contents order ── */
  const toc = t("toc", { returnObjects: true }) as Record<string, string>;
  const sections = Object.keys(toc) as Array<keyof typeof toc>;

  return (
    <main className="scroll-smooth bg-[#f7f7f8]">
      {/* Hero */}
      <header className="relative isolate overflow-hidden bg-gradient-to-r from-[#061829] via-[#0F4C75] to-[#47BDFF] text-white">
        <div className="mx-auto max-w-4xl px-4 py-24 text-center lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            {t("hero.heading")}
          </h1>
          <p className="mt-4 text-lg/relaxed opacity-90">{t("hero.subtitle")}</p>
        </div>
        <svg className="absolute bottom-0 left-0 h-12 w-full text-[#f7f7f8]" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,181.3C672,171,768,117,864,112C960,107,1056,149,1152,165.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L0,320Z" />
        </svg>
      </header>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-4 pb-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
          {/* TOC */}
          <aside className="sticky top-28 hidden self-start lg:block">
            <nav className="rounded-2xl border border-gray-200 bg-white p-6 shadow">
              <h2 className="mb-4 text-lg font-semibold text-[#061829]">{t("contents", "Contents")}</h2>
              <ul className="space-y-1 text-sm leading-snug">
                {sections.map((id) => (
                  <li key={id}>
                    <a href={`#${id}`} className="text-[#47BDFF] transition-colors hover:text-[#0F4C75] hover:underline">
                      {toc[id]}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Body */}
          <article className="prose prose-lg max-w-none space-y-12 rounded-2xl border border-gray-200 bg-white p-6 shadow md:p-10 lg:space-y-14 prose-headings:text-[#061829] prose-a:text-[#47BDFF]">
            {sections.map((id) => (
              <section key={id} id={id} className="scroll-mt-28 space-y-4">
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

/* ── section renderer ─────────────────────────────────────────────── */
function renderSectionContent(id: string, t: any) {
  /* 1. single-paragraph description */
  if (id === "what") {
    return <Trans t={t} i18nKey="what" components={{ 1: <strong />, 3: <em /> }} />;
  }

  /* 2. list-plus-note (why / choices) */
  if (id === "why" || id === "choices") {
    const list = t(`${id}.list`, { returnObjects: true }) as string[];
    return (
      <>
        <ul className="list-disc pl-6 space-y-1">
          {list.map((li) => (
            <li key={li}>{li}</li>
          ))}
        </ul>
        <Trans
          t={t}
          i18nKey={`${id}.note`}
          components={{ 0: <Link href="/privacy-policy" /> }}
        />
      </>
    );
  }

  /* 3. table (types) */
  if (id === "types") {
    const header = t("types.header", { returnObjects: true }) as string[];
    const rows = t("types.rows", { returnObjects: true }) as string[][];
    return (
      <table className="not-prose w-full text-sm border-collapse">
        <thead>
          <tr className="bg-gray-50 text-left">
            {header.map((h) => (
              <th key={h} className="border px-3 py-2 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r[0]} className={i % 2 ? "bg-gray-50" : ""}>
              {r.map((cell) => (
                <td key={cell} className="border px-3 py-2">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  /* 4. bullet-arrays OR single paragraph (legal / review) */
  if (id === "legal" || id === "review") {
    const data = t(id, { returnObjects: true });
    if (Array.isArray(data)) {
      return (
        <ul className="list-disc pl-6 space-y-1">
          {data.map((_, i) => (
            <li key={i}>
              <Trans
                t={t}
                i18nKey={`${id}.${i}`}
                components={{ 0: <strong />, 2: <em /> }}
              />
            </li>
          ))}
        </ul>
      );
    }
    /* it's a plain string */
    return <p>{data}</p>;
  }

  /* 5. third-party (plain string with markup) */
  if (id === "third") {
    return <Trans t={t} i18nKey="third" components={{ 0: <strong />, 2: <em /> }} />;
  }

  /* 6. contact (special markup) */
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
          className="underline text-[#47BDFF]"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("contact.url")}
        </a>
      </>
    );
  }

  return null;
}
