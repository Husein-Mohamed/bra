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

export default function DirectMarketingPage() {
  const { t } = useTranslation("directMarketing");

  return (
    <>
      {/* Hero */}
      <Banner
        title={<span style={{ color: BRAND.blue }}>{t("pageTitle")}</span>}
        subtitle={t("pageSubtitle")}
      />

      {/* Content */}
      <section className="mil-Bg py-32">
        <div className="container mx-auto px-8 space-y-16">
          <div className="space-y-6">
            <h1
              className="text-4xl md:text-5xl font-bold"
              style={{ color: BRAND.indigo }}
            >
              {t("mainTitle")}
            </h1>
            <p className="text-lg font-medium text-slate-700">
              {t("mainIntro")}
            </p>
          </div>

          {/* Opt‑In / Opt‑Out */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {["optIn", "optOut"].map((section) => (
              <div key={section} className="space-y-6">
                <h2
                  className="text-3xl font-bold"
                  style={{ color: BRAND.indigo }}
                >
                  {t(`${section}.title`)}
                </h2>
                {(t(`${section}.points`, { returnObjects: true }) as any[]).map(
                  (point, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <Check
                        className="w-5 h-5 mt-1.5"
                        style={{ color: BRAND.blue }}
                      />
                      <div>
                        <p className="text-lg font-semibold">{point.title}</p>
                        <p className="text-lg font-medium text-slate-700">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            ))}
          </div>

          {/* Online Data Collection */}
          <div className="space-y-6">
            <h2
              className="text-3xl font-bold"
              style={{ color: BRAND.indigo }}
            >
              {t("onlineData.title")}
            </h2>
            <p className="text-lg font-medium text-slate-700">
              {t("onlineData.intro")}
            </p>
          </div>

          {/* Types & Best Practices */}
          {["types", "bestPractices"].map((block) => (
            <div key={block} className="space-y-6">
              <h3
                className="text-3xl font-bold"
                style={{ color: BRAND.indigo }}
              >
                {t(`onlineData.${block}Title`)}
              </h3>
              {(t(`onlineData.${block}`, { returnObjects: true }) as any[]).map(
                (item, i) => (
                  <div key={i} className="flex items-start gap-4">
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
                )
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
