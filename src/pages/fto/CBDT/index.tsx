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

export default function CrossBorderPage() {
  const { t } = useTranslation("crossBorder");

  const renderBullet = (path: string) => (
    <div key={path} className="flex items-start gap-4">
      <Check className="w-5 h-5 mt-1.5" style={{ color: BRAND.blue }} />
      <div>
        <p className="text-lg font-semibold">{t(`${path}.title`)}</p>
        <p className="text-lg font-medium text-slate-700">{t(`${path}.desc`)}</p>
      </div>
    </div>
  );

  return (
    <>
      <Banner
        title={<span style={{ color: BRAND.blue }}>{t("banner.title")}</span>}
        subtitle={t("banner.subtitle")}
      />

      <section className="mil-Bg py-32">
        <div className="container mx-auto px-8">
          <div className="flex flex-col space-y-16">

            {/* Intro */}
            <h1
              className="text-5xl md:text-6xl font-bold"
              style={{ color: BRAND.indigo }}
            >
              {t("intro.title")}
            </h1>

            {/* Section 1 */}
            <div className="space-y-6">
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ color: BRAND.indigo }}
              >
                {t("section1.title")}
              </h2>
              <p className="text-lg font-medium text-slate-700">
                {t("section1.desc")}
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-6">
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ color: BRAND.indigo }}
              >
                {t("section2.title")}
              </h2>
              <p className="text-lg font-medium text-slate-700">
                {t("section2.desc")}
              </p>
            </div>

            {/* Section 2 items */}
            <div className="space-y-6 border-b border-dotted border-indigo-100 pb-6">
              {["section2.item1","section2.item2","section2.item3","section2.item4"].map(renderBullet)}
            </div>

            {/* Section 3 */}
            <div className="space-y-6">
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ color: BRAND.indigo }}
              >
                {t("section3.title")}
              </h2>
              <p className="text-lg font-medium text-slate-700">
                {t("section3.desc")}
              </p>
            </div>

            {/* Section 3 items */}
            <div className="space-y-6 border-b border-dotted border-indigo-100 pb-6">
              {["section3.item1","section3.item2","section3.item3","section3.item4"].map(renderBullet)}
            </div>

            {/* Section 4 */}
            <div className="space-y-6">
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ color: BRAND.indigo }}
              >
                {t("section4.title")}
              </h2>
              <p className="text-lg font-medium text-slate-700">
                {t("section4.desc")}
              </p>
            </div>

            {/* Section 4 items */}
            <div className="space-y-6 border-b border-dotted border-indigo-100 pb-6">
              {["section4.item1","section4.item2","section4.item3","section4.item4","section4.item5"].map(renderBullet)}
            </div>

            {/* Section 5 */}
            <div className="space-y-6">
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ color: BRAND.indigo }}
              >
                {t("section5.title")}
              </h2>
              <p className="text-lg font-medium text-slate-700">
                {t("section5.desc")}
              </p>
            </div>

            {/* Section 5 items */}
            <div className="space-y-6 border-b border-dotted border-indigo-100 pb-6">
              {["section5.item1","section5.item2","section5.item3","section5.item4"].map(renderBullet)}
            </div>

            {/* Section 6 */}
            <div className="space-y-6 border-b border-dotted border-indigo-100 pb-6">
              <h2
                className="text-2xl md:text-3xl font-bold"
                style={{ color: BRAND.indigo }}
              >
                {t("section6.title")}
              </h2>
              {["section6.item1","section6.item2","section6.item3","section6.item4","section6.item5"].map(renderBullet)}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
