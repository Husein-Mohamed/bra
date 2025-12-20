/* ────────────────────────────────────────────────────────────
   Cookie Policy page – Somali Data Protection Authority
   Automatically bolds any text wrapped in **double-asterisks**.
   ─────────────────────────────────────────────────────────── */

"use client";

import Link from "next/link";
import { Mail, Check } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";

/* ── Markdown-mini bold helper ────────────────────────────── */
/** Split a string on **bold** fragments and wrap them in <strong>. */
function md(raw: string) {
  return raw.split(/(\*\*[^*]+\*\*)/g).map((chunk, i) =>
    chunk.startsWith("**") ? (
      <strong key={i}>{chunk.slice(2, -2)}</strong>
    ) : (
      chunk
    )
  );
}

/* ── Page component ───────────────────────────────────────── */
export default function CookiePolicyPage() {
  const { t } = useTranslation("cookiePolicy");

  /** Locked section order for TOC + article */
  const toc = t("toc", { returnObjects: true }) as Record<string, string>;
  const sections: Array<keyof typeof toc> = [
    "what",
    "why",
    "types",
    "legal",
    "third",
    "choices",
    "review",
    "contact",
  ];

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
          {/* Sidebar TOC */}
          <aside className="sticky top-28 hidden self-start lg:block">
            <nav className="rounded-2xl border border-gray-200 bg-white p-6 shadow">
              <h2 className="mb-4 text-lg font-semibold text-[#061829]">
                {t("contents")}
              </h2>
              <ul className="space-y-1 text-sm leading-snug">
                {sections.map((id) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="font-medium text-[#47BDFF] transition-colors hover:text-[#0F4C75] hover:underline"
                    >
                      {toc[id]}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main article */}
          <article className="prose prose-lg max-w-none space-y-14 rounded-2xl border border-gray-200 bg-white px-6 py-10 shadow md:px-10 prose-headings:text-[#061829] prose-a:text-[#47BDFF]">
            {sections.map((id) => (
              <section key={id} id={id} className="scroll-mt-28 space-y-4">
                <h2 className="text-xl font-bold tracking-tight">{toc[id]}</h2>
                {renderSectionContent(id, t)}
              </section>
            ))}
          </article>
        </div>
      </section>
    </main>
  );
}

/* ── Section renderer ─────────────────────────────────────── */
function renderSectionContent(id: string, t: any) {
  /* 1. WHAT paragraph (keeps <strong>/<em> tokens from JSON) */
  if (id === "what") {
    return (
      <Trans
        t={t}
        i18nKey="what"
        components={{ 1: <strong />, 3: <em /> }}
      />
    );
  }

  /* 2. WHY or CHOICES – bullet list + note */
  if (id === "why" || id === "choices") {
    const list = t(`${id}.list`, { returnObjects: true }) as string[];
    return (
      <>
        <ul className="space-y-2">
          {list.map((li) => (
            <li key={li} className="flex items-start gap-2">
              <Check className="h-4 w-4 mt-0.5 text-[#47BDFF]" />
              <span>{md(li)}</span>
            </li>
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

  /* 3. TYPES – table */
  if (id === "types") {
    const header = t("types.header", { returnObjects: true }) as string[];
    const rows = t("types.rows", { returnObjects: true }) as string[][];
    return (
      <table className="not-prose w-full text-base border-collapse">
        <thead>
          <tr className="bg-gray-50 text-left">
            {header.map((h) => (
              <th key={h} className="border px-4 py-3 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr
              key={r[0]}
              className={i % 2 ? "bg-gray-50" : "bg-white"}
            >
              {r.map((cell) => (
                <td key={cell} className="border px-4 py-3">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  /* 4. LEGAL list or REVIEW single paragraph */
  if (id === "legal" || id === "review") {
    const data = t(id, { returnObjects: true });
    /* LEGAL – array of bullets */
    if (Array.isArray(data)) {
      return (
        <ul className="space-y-2">
          {data.map((str: string) => (
            <li key={str} className="flex items-start gap-2">
              <Check className="h-4 w-4 mt-0.5 text-[#47BDFF]" />
              <span>{md(str)}</span>
            </li>
          ))}
        </ul>
      );
    }
    /* REVIEW – plain paragraph */
    return <p>{md(data as string)}</p>;
  }

  /* 5. THIRD-PARTY – keeps strong/em tokens from JSON */
  if (id === "third") {
    return (
      <Trans
        t={t}
        i18nKey="third"
        components={{ 0: <strong />, 2: <em /> }}
      />
    );
  }

  /* 6. CONTACT – email + URL */
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
