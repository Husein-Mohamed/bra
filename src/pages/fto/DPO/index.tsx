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

export default function DpoPage() {
  const { t } = useTranslation("dpo");

  const responsibilities = t("keyResponsibilities", { returnObjects: true }) as Array<{
    title: string;
    summaries: string[];
  }>;
  const qualifications = t("qualifications", { returnObjects: true }) as Array<{
    title: string;
    summary: string;
  }>;

  return (
    <>
      <Banner
        title={<span style={{ color: BRAND.blue }}>{t("bannerTitle")}</span>}
        subtitle={t("bannerSubtitle")}
      />

      <section className="mil-Bg py-32">
        <div className="container mx-auto px-8 space-y-16">

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl font-bold" style={{ color: BRAND.indigo }}>
            {t("mainTitle")}
          </h1>

          {/* Understanding DPO */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold" style={{ color: BRAND.indigo }}>
              {t("understandingDpoTitle")}
            </h2>
            <p className="text-lg font-medium text-slate-700">{t("understandingDpoParagraph1")}</p>
            <p className="text-lg font-medium text-slate-700">{t("understandingDpoParagraph2")}</p>
          </div>

          {/* Key Responsibilities */}
          <div className="space-y-6 border-b border-dotted border-indigo-100 pb-6">
            <h3 className="text-2xl font-bold" style={{ color: BRAND.indigo }}>
              {t("keyResponsibilitiesTitle")}
            </h3>
            {responsibilities.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <Check className="w-5 h-5 mt-1.5" style={{ color: BRAND.blue }} />
                <div>
                  <p className="text-lg font-semibold">{item.title}</p>
                  {item.summaries.map((line, i) => (
                    <p key={i} className="text-lg font-medium text-slate-700">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Role of the DPO */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold" style={{ color: BRAND.indigo }}>
              {t("roleOfDpoTitle")}
            </h2>
            <p className="text-lg font-medium text-slate-700">{t("roleOfDpoParagraph1")}</p>
            <p className="text-lg font-medium text-slate-700">{t("roleOfDpoParagraph2")}</p>
          </div>

          {/* Qualifications */}
          <div className="space-y-6 border-b border-dotted border-indigo-100 pb-6">
            <h3 className="text-2xl font-bold" style={{ color: BRAND.indigo }}>
              {t("qualificationsTitle")}
            </h3>
            {qualifications.map((q, i) => (
              <div key={i} className="flex items-start gap-4">
                <Check className="w-5 h-5 mt-1.5" style={{ color: BRAND.blue }} />
                <div>
                  <p className="text-lg font-semibold">{q.title}</p>
                  <p className="text-lg font-medium text-slate-700">{q.summary}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
