"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Banner from "@/components/Banner";
import { Check } from "lucide-react";

/* Brand colours */
const BRAND = {
  blue:   "#47BDFF",
  indigo: "#003366"
};

export default function ComplianceChecklist() {
  const { t } = useTranslation("complianceChecklist");

  const renderChecklist = (key: string) => {
    const items = t(key, { returnObjects: true }) as Array<{
      title: string;
      desc: string;
    }>;
    return items.map((item, idx) => (
      <div key={idx} className="flex items-start gap-4">
        <Check className="w-5 h-5 mt-1.5" style={{ color: BRAND.blue }} />
        <div>
          <p className="text-lg font-semibold">{item.title}</p>
          <p className="text-lg font-medium text-slate-700">{item.desc}</p>
        </div>
      </div>
    ));
  };

  return (
    <>
      <Banner
        title={<span style={{ color: BRAND.blue }}>{t("bannerTitle")}</span>}
        subtitle={t("bannerSubtitle")}
      />

      <section className="mil-Bg py-32">
        <div className="container mx-auto px-8 space-y-16">
          {/* Main intro */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold" style={{ color: BRAND.indigo }}>
              {t("mainTitle")}
            </h1>
            <p className="text-lg font-medium text-slate-700">{t("mainDescription")}</p>
          </div>

          {/* Checklist header */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold" style={{ color: BRAND.indigo }}>
              {t("checklistTitle")}
            </h2>
            <p className="text-lg font-medium text-slate-700">{t("checklistSubtitle")}</p>
          </div>

          {/* Checklist items */}
          <div className="space-y-6 border-b border-dotted border-indigo-100 pb-6">
            <h3 className="text-2xl font-bold" style={{ color: BRAND.indigo }}>
              {t("checklistHeader")}
            </h3>
            {renderChecklist("checklist")}
          </div>

          {/* Risk management */}
          <div className="space-y-6 border-b border-dotted border-indigo-100 pb-6">
            <h3 className="text-2xl font-bold" style={{ color: BRAND.indigo }}>
              {t("riskManagementTitle")}
            </h3>
            <p className="text-lg font-medium text-slate-700">
              {t("riskManagementDescription")}
            </p>
          </div>

          {/* Components */}
          <div className="space-y-6 border-b border-dotted border-indigo-100 pb-6">
            <h3 className="text-2xl font-bold" style={{ color: BRAND.indigo }}>
              {t("componentsTitle")}
            </h3>
            {renderChecklist("components")}
          </div>

          {/* Steps */}
          <div className="space-y-6 border-b border-dotted border-indigo-100 pb-6">
            <h3 className="text-2xl font-bold" style={{ color: BRAND.indigo }}>
              {t("stepsTitle")}
            </h3>
            {renderChecklist("steps")}
          </div>

          {/* Importance */}
          <div className="space-y-6 border-b border-dotted border-indigo-100 pb-6">
            <h3 className="text-2xl font-bold" style={{ color: BRAND.indigo }}>
              {t("importanceTitle")}
            </h3>
            {renderChecklist("importance")}
          </div>

          {/* Challenges */}
          <div className="space-y-6 border-b border-dotted border-indigo-100 pb-6">
            <h3 className="text-2xl font-bold" style={{ color: BRAND.indigo }}>
              {t("challengesTitle")}
            </h3>
            {renderChecklist("challenges")}
          </div>
        </div>
      </section>
    </>
  );
}
