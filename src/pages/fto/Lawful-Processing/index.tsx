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

export default function LawfulProcessingPage() {
  const { t } = useTranslation("lawfulProcessing");

  const basisList        = t("basisList",        { returnObjects: true }) as string[];
  const transparencyList = t("transparencyList", { returnObjects: true }) as string[];

  return (
    <>
      <Banner
        title={<span style={{ color: BRAND.blue }}>{t("banner.title")}</span>}
        subtitle={t("banner.subtitle")}
      />

      <section className="mil-Bg py-32">
        <div className="container mx-auto px-8 space-y-16">

          {/* Page Title */}
          <h1
            className="text-4xl md:text-5xl font-bold"
            style={{ color: BRAND.indigo }}
          >
            {t("pageTitle")}
          </h1>

          {/* Lawful Basis Section */}
          <div className="space-y-6">
            <h2
              className="text-3xl font-bold"
              style={{ color: BRAND.indigo }}
            >
              {t("basisSection.title")}
            </h2>
            <p className="text-lg font-medium text-slate-700">
              {t("basisSection.intro")}
            </p>
          </div>

          {/* Lawful Grounds */}
          <div className="space-y-6 border-b border-dotted border-indigo-100 pb-6">
            {basisList.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <Check
                  className="w-5 h-5 mt-1.5"
                  style={{ color: BRAND.blue }}
                />
                <p className="text-lg font-medium text-slate-700">{item}</p>
              </div>
            ))}
          </div>

          {/* Transparency Section */}
          <div className="space-y-6">
            <h2
              className="text-3xl font-bold"
              style={{ color: BRAND.indigo }}
            >
              {t("transparencySection.title")}
            </h2>
            <p className="text-lg font-medium text-slate-700">
              {t("transparencySection.intro")}
            </p>
          </div>

          {/* Transparency Checklist */}
          <div className="space-y-6 border-b border-dotted border-indigo-100 pb-6">
            {transparencyList.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <Check
                  className="w-5 h-5 mt-1.5"
                  style={{ color: BRAND.blue }}
                />
                <p className="text-lg font-medium text-slate-700">{item}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
