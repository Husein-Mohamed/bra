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

export default function DataProcessorPage() {
  const { t } = useTranslation("dataProcessor");
  const list = t("responsibilitiesList", { returnObjects: true }) as Array<{
    heading: string;
    body: string;
  }>;

  return (
    <>
      <Banner
        title={<span style={{ color: BRAND.blue }}>{t("pageTitle")}</span>}
        subtitle={t("responsibilitiesSection.title")}
      />

      <section className="mil-Bg py-32">
        <div className="container mx-auto px-8 space-y-16">
          {/* Title & Intro */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold" style={{ color: BRAND.indigo }}>
              {t("pageTitle")}
            </h1>
            <p className="text-lg font-medium text-slate-700">
              {t("intro")}
            </p>
          </div>

          {/* Responsibilities */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold" style={{ color: BRAND.indigo }}>
              {t("responsibilitiesSection.title")}
            </h2>
            <p className="text-lg font-medium text-slate-700">
              {t("responsibilitiesSection.intro")}
            </p>

            <div className="space-y-6 border-b border-dotted border-indigo-100 pb-6">
              {list.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <Check className="w-5 h-5 mt-1.5" style={{ color: BRAND.blue }} />
                  <div>
                    <p className="text-lg font-semibold">{item.heading}</p>
                    <p className="text-lg font-medium text-slate-700">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
