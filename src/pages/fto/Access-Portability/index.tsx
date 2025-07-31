// src/pages/access‑portability/index.tsx
"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Banner from "@/components/Banner";
import { Check } from "lucide-react";
import Link from "next/link"; // in case you later need CTAs

/* ---------- Brand palette (keep in sync) ---------- */
const BRAND = {
  navy:   "#080c2c",
  blue:   "#47BDFF",
  indigo: "#003366"
};

export default function AccessPortabilityPage() {
  const { t } = useTranslation("accessPortability");

  return (
    <>
      {/* hero banner */}
      <Banner
        title={<span style={{ color: BRAND.blue }}>{t("banner.title")}</span>}
        subtitle={t("banner.subtitle")}
      />

      {/* main content */}
      <section className="mil-Bg py-32">
        <div className="container mx-auto px-8">
          <div className="flex flex-col space-y-16">

            {/* SECTION 1 */}
            <SectionBlock
              title={t("section1.title")}
              desc={t("section1.desc")}
            />

            {/* SECTION 2 + steps */}
            <SectionBlock
              title={t("section2.title")}
              desc={t("section2.desc")}
            />
            <StepsList
              steps={[t("section2.step1"), t("section2.step2"), t("section2.step3")]}
            />

            {/* SECTION 3 – four paragraphs */}
            <ParagraphList
              paragraphs={[
                t("section3.p1"),
                t("section3.p2"),
                t("section3.p3"),
                t("section3.p4")
              ]}
            />

            {/* SECTION 4 */}
            <div className="flex flex-col space-y-6 border-b border-dotted border-indigo-100 pb-6">
              <h2 className="text-2xl md:text-3xl font-bold" style={{ color: BRAND.indigo }}>
                {t("section4.title")}
              </h2>
              <p className="text-lg text-slate-700 font-medium">
                {t("section4.desc")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------- Helpers ---------- */

function SectionBlock({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex flex-col space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold" style={{ color: BRAND.indigo }}>
        {title}
      </h2>
      <p className="text-lg text-slate-700 font-medium">{desc}</p>
    </div>
  );
}

function StepsList({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-col space-y-6 border-b border-dotted border-indigo-100 pb-6">
      {steps.map((step) => (
        <div key={step} className="flex items-start gap-4">
          <Check className="w-5 h-5 mt-1.5" style={{ color: BRAND.blue }} />
          <p className="text-lg text-slate-700 font-medium">{step}</p>
        </div>
      ))}
    </div>
  );
}

function ParagraphList({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="flex flex-col space-y-6 border-b border-dotted border-indigo-100 pb-6">
      {paragraphs.map((p, i) => (
        <p key={i} className="text-lg text-slate-700 font-medium">
          {p}
        </p>
      ))}
    </div>
  );
}
