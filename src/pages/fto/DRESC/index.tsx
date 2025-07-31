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

export default function Index() {
  const { t } = useTranslation("dataRights");

  const keyAspects     = t("keyAspects",     { returnObjects: true }) as any[];
  const bestPractices  = t("bestPractices",  { returnObjects: true }) as string[];
  const checklist      = t("checklist",      { returnObjects: true }) as any[];

  return (
    <>
      <Banner
        title={<span style={{ color: BRAND.blue }}>{t("bannerTitle")}</span>}
        subtitle={t("bannerSubtitle")}
      />

      <section className="mil-Bg py-32">
        <div className="container mx-auto px-8 space-y-16">

          {/* Main Title */}
          <div className="space-y-6">
            <h1
              className="text-4xl md:text-5xl font-bold"
              style={{ color: BRAND.indigo }}
            >
              {t("mainTitle")}
            </h1>
            <p className="text-lg font-medium text-slate-700">
              {t("mainParagraph")}
            </p>
          </div>

          {/* Data Rights */}
          <div className="space-y-6">
            <h2
              className="text-3xl font-bold"
              style={{ color: BRAND.indigo }}
            >
              {t("dataRightsTitle")}
            </h2>
            <p className="text-lg font-medium text-slate-700">
              {t("dataRightsParagraph")}
            </p>
          </div>

          {/* Key Aspects */}
          <div className="space-y-6 border-b border-dotted border-indigo-100 pb-6">
            <h3
              className="text-2xl font-bold"
              style={{ color: BRAND.indigo }}
            >
              {t("keyAspectsTitle")}
            </h3>
            {keyAspects.map((aspect, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <Check className="w-5 h-5 mt-1.5" style={{ color: BRAND.blue }} />
                <div>
                  <p className="text-lg font-semibold">{aspect.title}</p>
                  <p className="text-lg font-medium text-slate-700">
                    {aspect.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Challenges */}
          <div className="space-y-6">
            <h2
              className="text-3xl font-bold"
              style={{ color: BRAND.indigo }}
            >
              {t("challengesTitle")}
            </h2>
            <p className="text-lg font-medium text-slate-700">
              {t("challengesParagraph")}
            </p>
          </div>

          {/* Best Practices */}
          <div className="space-y-6 border-b border-dotted border-indigo-100 pb-6">
            <h3
              className="text-2xl font-bold"
              style={{ color: BRAND.indigo }}
            >
              {t("bestPracticesTitle")}
            </h3>
            {bestPractices.map((practice, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <Check className="w-5 h-5 mt-1.5" style={{ color: BRAND.blue }} />
                <p className="text-lg font-medium text-slate-700">
                  {practice}
                </p>
              </div>
            ))}
          </div>

          {/* Self-Assessment */}
          <div className="space-y-6">
            <h2
              className="text-2xl font-bold"
              style={{ color: BRAND.indigo }}
            >
              {t("selfAssessmentTitle")}
            </h2>
            <p className="text-lg font-medium text-slate-700">
              {t("selfAssessmentParagraph")}
            </p>
          </div>

          {/* Checklist Details */}
          <div className="space-y-6 border-b border-dotted border-indigo-100 pb-6">
            <h3
              className="text-2xl font-bold"
              style={{ color: BRAND.indigo }}
            >
              {t("checklistTitle")}
            </h3>
            {checklist.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <Check className="w-5 h-5 mt-1.5" style={{ color: BRAND.blue }} />
                <div>
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-lg font-medium text-slate-700">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
