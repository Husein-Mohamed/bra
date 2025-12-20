// src/components/Milestones.tsx
"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import {
  Scroll,
  ShieldCheck,
  Megaphone,
  Handshake,
  BookOpen,
  FileText,
} from "lucide-react";

/* ---------- Brand palette ---------- */
const BRAND = {
  navy:   "#080c2c",
  blue:   "#47BDFF",
  indigo: "#003366",
};

/* ---------- Timeline & references ---------- */
const milestones = [
  { icon: Scroll,       key: "milestones.law" },
  { icon: ShieldCheck,  key: "milestones.firstControllers" },
  { icon: Megaphone,    key: "milestones.campaigns" },
  { icon: Handshake,    key: "milestones.partnerships" },
];

const references = [
  { icon: BookOpen, key: "references.act",         href: "#" },
  { icon: FileText, key: "references.regulations", href: "#" },
  { icon: FileText, key: "references.guide",       href: "#" },
];

export default function Milestones() {
  const { t } = useTranslation("milestones");

  return (
    <section
      className="w-full py-20 lg:py-24"
      style={{ backgroundColor: BRAND.indigo }}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8 text-white">
        {/* ---------- Header ---------- */}
        <header className="mb-12 text-center space-y-4">
          <Badge variant="outline" className="mx-auto border-white text-white">
            {t("badge")}
          </Badge>
          <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
            {t("since")}
          </h2>
        </header>

        {/* ---------- Milestones ---------- */}
        <ul className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {milestones.map(({ icon: Icon, key }) => (
            <li
              key={key}
              className="flex items-start gap-4 rounded-xl bg-white/5 p-6 backdrop-blur"
            >
              <Icon className="h-6 w-6 shrink-0" style={{ color: BRAND.blue }} />
              <span className="text-sm font-medium">{t(key)}</span>
            </li>
          ))}
        </ul>

        {/* ---------- References ---------- */}
        <h3 className="mb-6 text-2xl font-semibold">
          {t("referencesTitle")}
        </h3>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {references.map(({ icon: Icon, key, href }) => (
            <li
              key={key}
              className="flex items-start gap-3 rounded-lg bg-white/5 p-4"
            >
              <Icon
                className="h-5 w-5 shrink-0"
                style={{ color: BRAND.blue }}
              />
              <Link href={href} className="hover:underline">
                {t(key)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
