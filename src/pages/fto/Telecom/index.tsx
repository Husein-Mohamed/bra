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

export default function TelecomUserDataProtection() {
  const { t } = useTranslation("telecomDataProtection");

  const bestPractices = t("bestPractices", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;
  const benefits = t("benefits", { returnObjects: true }) as string[];

  return (
    <>
      {/* Hero */}
      <Banner
        title={<span style={{ color: BRAND.blue }}>{t("bannerTitle")}</span>}
        subtitle={t("bannerSubtitle")}
      />

      {/* Content */}
      <section className="mil-Bg py-32">
        <div className="container mx-auto px-8 space-y-16">

          {/* Introduction */}
          <div className="space-y-6">
            <h1
              className="text-4xl md:text-5xl font-bold"
              style={{ color: BRAND.indigo }}
            >
              {t("mainTitle")}
            </h1>
            <p className="text-lg font-medium text-slate-700">
              {t("mainDescription")}
            </p>
          </div>

          {/* Data Collection Section */}
          <div className="space-y-6">
            <h2
              className="text-3xl font-bold"
              style={{ color: BRAND.indigo }}
            >
              {t("collectionTitle")}
            </h2>
            <p className="text-lg font-medium text-slate-700">
              {t("collectionDescription")}
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
            {bestPractices.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <Check
                  className="w-5 h-5 mt-1.5"
                  style={{ color: BRAND.blue }}
                />
                <div>
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-lg font-medium text-slate-700">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="space-y-6 border-b border-dotted border-indigo-100 pb-6">
            <h3
              className="text-2xl font-bold"
              style={{ color: BRAND.indigo }}
            >
              {t("benefitsTitle")}
            </h3>
            {benefits.map((b, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <Check
                  className="w-5 h-5 mt-1.5"
                  style={{ color: BRAND.blue }}
                />
                <p className="text-lg font-medium text-slate-700">{b}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
