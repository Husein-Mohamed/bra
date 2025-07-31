"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Banner from "@/components/Banner";
import { Check } from "lucide-react";

/* Brand colours */
const BRAND = {
  blue:   "#47BDFF",
  indigo: "#003366",
};

export default function DPIAPage() {
  const { t } = useTranslation("dpiaPrivacy");

  const checklistItems = t("checklist",   { returnObjects: true }) as Array<{ title: string; summary: string }>;
  const requirements   = t("requirements",{ returnObjects: true }) as Array<{ title: string; summary: string }>;
  const bestPractices  = t("bestPractices",{ returnObjects: true }) as string[];
  const challenges     = t("challenges",   { returnObjects: true }) as string[];

  return (
    <>
      <Banner
        title={<span style={{ color: BRAND.blue }}>{t("bannerTitle")}</span>}
        subtitle={t("bannerSubtitle")}
      />

      <section className="mil-Bg py-32">
        <div className="container mx-auto px-8 space-y-16">

          {/* Intro */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold" style={{ color: BRAND.indigo }}>
              {t("mainTitle")}
            </h1>
            <p className="text-lg font-medium text-slate-700">{t("mainDescription")}</p>
          </div>

          {/* What is a DPIA */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold" style={{ color: BRAND.indigo }}>
              {t("dpiaTitle")}
            </h2>
            <p className="text-lg font-medium text-slate-700">{t("dpiaDescription")}</p>
          </div>

          {/* Requirements */}
          <div className="space-y-6 border-b border-dotted border-indigo-100 pb-6">
            <h3 className="text-2xl font-bold" style={{ color: BRAND.indigo }}>
              {t("requirementsTitle")}
            </h3>
            {requirements.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <Check className="w-5 h-5 mt-1.5" style={{ color: BRAND.blue }} />
                <div>
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-lg font-medium text-slate-700">{item.summary}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Challenges */}
          <div className="space-y-6 border-b border-dotted border-indigo-100 pb-6">
            <h3 className="text-2xl font-bold" style={{ color: BRAND.indigo }}>
              {t("challengesTitle")}
            </h3>
            {challenges.map((c, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <Check className="w-5 h-5 mt-1.5" style={{ color: BRAND.blue }} />
                <p className="text-lg font-medium text-slate-700">{c}</p>
              </div>
            ))}
          </div>

          {/* Best Practices */}
          <div className="space-y-6 border-b border-dotted border-indigo-100 pb-6">
            <h3 className="text-2xl font-bold" style={{ color: BRAND.indigo }}>
              {t("bestPracticesTitle")}
            </h3>
            {bestPractices.map((p, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <Check className="w-5 h-5 mt-1.5" style={{ color: BRAND.blue }} />
                <p className="text-lg font-medium text-slate-700">{p}</p>
              </div>
            ))}
          </div>

          {/* Self‑assessment intro */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold" style={{ color: BRAND.indigo }}>
              {t("selfAssessmentTitle")}
            </h3>
            <p className="text-lg font-medium text-slate-700">{t("selfAssessmentDescription")}</p>
          </div>

          {/* Checklist */}
          <div className="space-y-6 border-b border-dotted border-indigo-100 pb-6">
            <h3 className="text-2xl font-bold" style={{ color: BRAND.indigo }}>
              {t("checklistTitle")}
            </h3>
            {checklistItems.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <Check className="w-5 h-5 mt-1.5" style={{ color: BRAND.blue }} />
                <div>
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-lg font-medium text-slate-700">{item.summary}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
