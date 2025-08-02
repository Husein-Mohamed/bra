"use client";

import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  FileText,
  ShieldCheck,
  Globe,
  AlertTriangle,
  ClipboardList,
  ArrowDownToLine,
  Upload
} from "lucide-react";

const ICONS = { FileText, ShieldCheck, Globe, AlertTriangle, ClipboardList };

type FormFile = { label: string; file: string };

type FormItem = {
  id: string;
  icon: keyof typeof ICONS;
  name: string;
  law: string;
  description: string;
  docs: string[];
  files: FormFile[];
  downloadCta: string;
};

type Awareness = {
  title: string;
  lawRef: string;
  desc: string;
  items: string[];
  docs: string[];
  docsNote: string;
  email: string;
  viewCalendar: string;
  calendarHref: string;
};

type LegalLink = { label: string; href: string };

export default function ServicesPage() {
  const { t } = useTranslation("services");

  const forms = t("forms", { returnObjects: true }) as FormItem[];
  const aw = t("awareness", { returnObjects: true }) as Awareness;
  const legalLinks = t("legal.links", { returnObjects: true }) as LegalLink[];

  return (
    <main className="bg-white min-h-screen pt-[110px] pb-20">
      <Hero badge={t("badge")} heading={t("heading")} />

      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {forms.map((f) => (
            <FormCard key={f.id} item={f} uploadLabel={t("cta.upload")} />
          ))}
        </div>

        <TrainingBlock aw={aw} />

        <LegalBlock
          links={legalLinks}
          legalTitle={t("legal.title")}
          legalPurpose={t("legal.purpose")}
        />
      </section>
    </main>
  );
}

function Hero({ badge, heading }: { badge: string; heading: string }) {
  return (
    <section className="relative w-full h-[250px] md:h-[300px] bg-[#080c2c] flex items-center justify-center mb-10 overflow-hidden">
      <div
        className="absolute inset-0 bg-[url('/some-image.png')] bg-cover bg-center opacity-20"
      />
      <div className="absolute inset-0 bg-[#080c2c]/80 backdrop-blur-sm" />
      <h1 className="relative z-10 text-3xl md:text-4xl font-bold text-center drop-shadow-lg">
        <span className="text-white">{badge}</span>{" "}
        <span className="text-blue-400">{heading}</span>
      </h1>
    </section>
  );
}

function FormCard({
  item,
  uploadLabel
}: {
  item: FormItem;
  uploadLabel: string;
}) {
  const Icon = ICONS[item.icon] ?? FileText;
  const fileInput = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

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
    <div className="flex flex-col justify-between bg-[#f6fafd] border border-gray-300 rounded-2xl shadow p-7 min-h-[360px]">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Icon className="w-6 h-6 text-blue-500" />
          <h3 className="font-bold text-lg uppercase tracking-tight">
            {item.name}
          </h3>
        </div>
        <p className="text-sm text-gray-500 mb-2">{item.law}</p>
        <p className="text-gray-800">{item.description}</p>

        {item.docs.length > 0 && (
          <>
            <p className="font-semibold text-sm mt-4 mb-1">
              Required Documentation:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {item.docs.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </>
        )}
      </div>

      {/* Downloads & Upload */}
      <div className="mt-6">
        {/* multiple download buttons, wrap on small screens */}
        <div className="flex flex-wrap gap-3">
          {item.files.map((f) => (
            <a
              key={f.file}
              href={f.file}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-auto flex items-center justify-center gap-2 px-4 py-3 bg-[#061829] text-white rounded-xl font-bold hover:bg-[#003366]"
            >
              <ArrowDownToLine className="w-4 h-4" /> {f.label}
            </a>
          ))}
        </div>

        {/* upload button */}
        <div className="mt-4">
          <button
            type="button"
            disabled={loading}
            onClick={() => fileInput.current?.click()}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 text-white rounded-xl font-bold disabled:opacity-50"
          >
            <Upload className="w-4 h-4" /> {loading ? "Uploading…" : uploadLabel}
          </button>
          {done && (
            <p className="text-green-600 text-xs text-center mt-2">
              Uploaded successfully.
            </p>
          )}
        </div>
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

function TrainingBlock({ aw }: { aw: Awareness }) {
  return (
    <section className="bg-gray-50 rounded-2xl p-8 shadow mt-16">
      <h2 className="text-2xl font-bold mb-1">{aw.title}</h2>
      <p className="text-sm text-gray-500 mb-3">{aw.lawRef}</p>
      <p className="text-gray-700 mb-4">{aw.desc}</p>
      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
        {aw.items.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <p className="font-semibold text-sm mb-1">Required Documentation:</p>
      <ul className="list-disc list-inside text-sm text-gray-700 mb-4 space-y-1">
        {aw.docs.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
      <p className="text-sm text-gray-600 mb-6">
        Contact:{" "}
        <a className="underline" href={`mailto:${aw.email}`}>
          {aw.email}
        </a>{" "}
        — {aw.docsNote}
      </p>
      <a
        href={aw.calendarHref}
        className="inline-block border-2 px-5 py-2 rounded-lg text-sm font-semibold text-white bg-[#080c2c] hover:bg-[#003366]"
      >
        {aw.viewCalendar}
      </a>
    </section>
  );
}

function LegalBlock({
  links,
  legalTitle,
  legalPurpose
}: {
  links: LegalLink[];
  legalTitle: string;
  legalPurpose: string;
}) {
  return (
    <section className="bg-gray-50 rounded-2xl p-8 shadow mt-12">
      <h2 className="text-2xl font-bold mb-2">{legalTitle}</h2>
      <p className="text-gray-700 mb-4">{legalPurpose}</p>
      <ul className="text-blue-600 space-y-2">
        {links.map((l) => (
          <li key={l.label}>
            📘{" "}
            <a href={l.href} target="_blank" rel="noopener noreferrer">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
