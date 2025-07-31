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

export default function DataTransferPage() {
  const { t } = useTranslation("dataTransfer");

  const points = (key: string) =>
    (t(key, { returnObjects: true }) as Array<{ title: string; description: string }>);

  return (
    <>
      <Banner
        title={<span style={{ color: BRAND.blue }}>{t("pageTitle")}</span>}
        subtitle={t("subtitle")}
      />

      <section className="mil-Bg py-32">
        <div className="container mx-auto px-8 space-y-16">
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl font-bold" style={{ color: BRAND.indigo }}>
            {t("mainTitle")}
          </h1>

          {/* Understanding */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold" style={{ color: BRAND.indigo }}>
              {t("understandingTitle")}
            </h2>
            <p className="text-lg font-medium text-slate-700">{t("understandingText")}</p>
          </div>

          {/* Importance */}
          <div className="space-y-6 border-b border-dotted border-indigo-100 pb-6">
            <h2 className="text-3xl font-bold" style={{ color: BRAND.indigo }}>
              {t("importanceTitle")}
            </h2>
            <p className="text-lg font-medium text-slate-700">{t("importanceText")}</p>
            {points("importancePoints").map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <Check className="w-5 h-5 mt-1.5" style={{ color: BRAND.blue }} />
                <div>
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-lg font-medium text-slate-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Practices */}
          <div className="space-y-6 border-b border-dotted border-indigo-100 pb-6">
            <h2 className="text-3xl font-bold" style={{ color: BRAND.indigo }}>
              {t("practicesTitle")}
            </h2>
            <p className="text-lg font-medium text-slate-700">{t("practicesIntro")}</p>
            {points("practices").map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <Check className="w-5 h-5 mt-1.5" style={{ color: BRAND.blue }} />
                <div>
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-lg font-medium text-slate-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Duties */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold" style={{ color: BRAND.indigo }}>
              {t("dutiesTitle")}
            </h2>
            <p className="text-lg font-medium text-slate-700">{t("dutiesText")}</p>
          </div>

          {/* Compliance */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold" style={{ color: BRAND.indigo }}>
              {t("complianceTitle")}
            </h2>
            <p className="text-lg font-medium text-slate-700">{t("complianceText")}</p>
          </div>

          {/* Advice */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold" style={{ color: BRAND.indigo }}>
              {t("adviceTitle")}
            </h2>
            <p className="text-lg font-medium text-slate-700">{t("adviceText")}</p>
          </div>
        </div>
      </section>
    </>
  );
}
