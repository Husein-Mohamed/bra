// src/components/ServicesPage.tsx
"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  FileText,
  AlertTriangle,
  ClipboardList,
  ShieldCheck,
  Globe,
  ArrowDownToLine,
  Upload,
} from "lucide-react";

const ICONS = { FileText, AlertTriangle, ClipboardList, ShieldCheck, Globe } as const;

/* ---------- Types ---------- */
type FormFile = { label: string; file: string };

type FormItem = {
  id: string;
  icon: keyof typeof ICONS;
  name: string;
  law?: string;
  description: string;
  docs: string[];
  files: FormFile[];
  downloadCta: string;
};

type Awareness = {
  title: string;
  desc: string;
  items: string[];
  requiredDocsTitle: string;
  docs: string[];
  docsNote: string;
  contactText: string;
};

type LegalLink = { label: string; href: string; description: string };

/* ---------- Component ---------- */
export default function ServicesPage() {
  const { t } = useTranslation("services");

  const badge           = t("badge");
  const heading         = t("heading");
  const forms           = t("forms",       { returnObjects: true }) as FormItem[];
  const aw              = t("awareness",   { returnObjects: true }) as Awareness;
  const legalLinks      = t("legal.links", { returnObjects: true }) as LegalLink[];
  const legalTitle      = t("legal.title");
  const legalPurpose    = t("legal.purpose");
  const legalFooterNote = t("legal.footerNote");

  return (
    <main className="bg-white min-h-screen pt-[110px] pb-20">
      <Hero badge={badge} heading={heading} />

      <section className="max-w-7xl mx-auto px-4 space-y-16">
        {/* FORMS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {forms.map((f) => (
            <FormCard key={f.id} item={f} />
          ))}
        </div>

        {/* TRAINING SECTION */}
        <TrainingBlock aw={aw} />

        {/* LEGAL NOTICES */}
        <LegalNotices
          title={legalTitle}
          purpose={legalPurpose}
          links={legalLinks}
          footerNote={legalFooterNote}
        />
      </section>
    </main>
  );
}

/* ---------- Hero ---------- */
function Hero({ badge, heading }: { badge: string; heading: string }) {
  return (
    <section className="relative w-full h-[250px] md:h-[300px] bg-[#080c2c] flex items-center justify-center mb-10 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-[#080c2c]/80 backdrop-blur-sm" />

      {/* Text */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-2">
        {/* line 1 ─ badge */}
        <span className="uppercase tracking-widest text-sm font-semibold text-white">
          {badge}
        </span>

        {/* line 2 ─ heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-blue-400 drop-shadow-lg">
          {heading}
        </h1>
      </div>
    </section>
  );
}

/* ---------- Form card ---------- */
function FormCard({ item }: { item: FormItem }) {
  const { t } = useTranslation("services");
  const Icon = ICONS[item.icon]!;
  const fileInput = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  /* ----- handle upload ----- */
  async function handleSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setLoading(true);
    setDone(false);
    try {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("serviceId", item.id);
      const res = await fetch("/api/forms/upload", { method: "POST", body: fd });
      if (!res.ok) throw new Error();
      setDone(true);
    } catch {
      alert("Upload failed");
    } finally {
      setLoading(false);
      if (fileInput.current) fileInput.current.value = "";
    }
  }

  return (
    <div className="flex flex-col justify-between bg-[#f6fafd] border border-gray-300 rounded-2xl shadow p-6 min-h-[360px]">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Icon className="w-5 h-5 text-blue-500" />
          <h3 className="font-semibold text-base uppercase">{item.name}</h3>
        </div>

        {item.law && <p className="text-xs text-gray-500 mb-2">{item.law}</p>}
        <p className="text-sm text-gray-800 mb-4">{item.description}</p>

        {item.docs.length > 0 && (
          <>
            <p className="font-semibold text-sm mb-1">{t("requiredDocs")}</p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {item.docs.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </>
        )}
      </div>

      {/* ----- CTA buttons ----- */}
      <div className="mt-4 flex flex-wrap gap-2 items-center">
        {item.files.map((f) => (
          <a
            key={f.file}
            href={f.file}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1.5 bg-[#061829] text-white rounded-md text-xs font-semibold hover:bg-[#003366] transition"
          >
            <ArrowDownToLine className="w-4 h-4" />
            {item.downloadCta || f.label}
          </a>
        ))}

        <button
          type="button"
          disabled={loading}
          onClick={() => fileInput.current?.click()}
          className="px-3 py-1.5 bg-blue-500 text-white rounded-md text-xs font-semibold disabled:opacity-50 hover:bg-blue-600 transition"
        >
          <Upload className="w-4 h-4 inline-block mr-1" />
          {loading ? "Uploading…" : t("cta.upload")}
        </button>
        {done && <span className="text-green-600 text-xs ml-2">Uploaded!</span>}
      </div>

      <input
        ref={fileInput}
        type="file"
        accept="*/*"
        className="hidden"
        onChange={handleSelect}
      />
    </div>
  );
}

/* ---------- Training block ---------- */
function TrainingBlock({ aw }: { aw: Awareness }) {
  return (
    <section className="bg-[#f6fafd] rounded-2xl p-8 shadow mt-16 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-600 mb-2">{aw.title}</h2>
      <p className="text-gray-700 mb-2">{aw.desc}</p>
      <p className="text-gray-600 italic mb-4">{aw.docsNote}</p>
      <ul className="list-disc list-inside text-gray-800 mb-4 space-y-1">
        {aw.items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <p className="font-semibold text-sm mb-1">{aw.requiredDocsTitle}</p>
      <ul className="list-disc list-inside text-sm text-gray-700 mb-4 space-y-1">
        {aw.docs.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
      <p className="text-sm text-blue-600 font-semibold">{aw.contactText}</p>
    </section>
  );
}

/* ---------- Legal notices ---------- */
function LegalNotices({
  title,
  purpose,
  links,
  footerNote,
}: {
  title: string;
  purpose: string;
  links: LegalLink[];
  footerNote: string;
}) {
  return (
    <section className="bg-[#f6fafd] rounded-2xl p-8 shadow mt-12 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-600 mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{purpose}</p>
      <ul className="space-y-3 mb-4">
        {links.map((link) => (
          <li key={link.href} className="flex items-start gap-2 text-gray-800">
            <span className="mt-1">📘</span>
            <Link href={link.href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {link.label}
            </Link>{" "}
            – {link.description}
          </li>
        ))}
      </ul>
      <p className="text-gray-600 text-sm">{footerNote}</p>
    </section>
  );
}
