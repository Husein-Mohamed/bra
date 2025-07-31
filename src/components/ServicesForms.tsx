// src/components/ServicesForms.tsx
"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  FileText,
  AlertTriangle,
  ClipboardList,
  ShieldCheck,
  ArrowRight,
  Upload,
} from "lucide-react";

const ICONS = { FileText, AlertTriangle, ClipboardList, ShieldCheck } as const;

export default function ServicesForms({ showUpload = false }) {
  const { t } = useTranslation("services");
  const forms = t("forms", { returnObjects: true }) as Array<{
    id: string;
    icon: keyof typeof ICONS;
    name: string;
    law: string;
    description: string;
    docs: string[];
    file: string;
    downloadCta: string;
  }> || [];

  // upload state omitted for brevity…

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 bg-[#f6fafd]">
      {/* … upload UI … */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {forms.map((f) => {
          const Icon = ICONS[f.icon];
          return (
            <div
              key={f.id}
              className="flex flex-col justify-between rounded-2xl border border-gray-300 bg-white shadow p-6"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Icon className="w-5 h-5 text-blue-500" />
                  <h3 className="text-lg font-bold uppercase">{f.name}</h3>
                </div>
                <p className="mb-1 text-xs text-gray-500">{f.law}</p>
                <p className="text-sm text-gray-800 mb-4">{f.description}</p>

                <p className="mb-2 text-sm font-semibold">
                  {t("requiredDocs", "Required Documentation:")}
                </p>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  {f.docs.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>

              <Link
                href={f.file}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#061829] text-white rounded-xl font-bold hover:bg-[#003366] transition"
              >
                {f.downloadCta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
