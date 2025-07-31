// src/pages/accountability‑obligation/index.tsx
"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Banner from "@/components/Banner";
import { Check } from "lucide-react";

/* ---------- Brand palette (keep in sync) ---------- */
const BRAND = {
  blue:   "#47BDFF",
  indigo: "#003366"
};

export default function AccountabilityObligationPage() {
  const { t } = useTranslation("accountabilityObligation");

  return (
    <>
      {/* hero banner */}
      <Banner
        title={<span style={{ color: BRAND.blue }}>{t("banner.title")}</span>}
        subtitle={t("banner.subtitle")}
      />

      {/* main section */}
      <section className="mil-Bg py-32">
        <div className="container mx-auto px-8">
          <div className="flex flex-col space-y-16">

            {/* Section 1 */}
            <div className="flex flex-col space-y-6">
              <h1
                className="text-4xl md:text-5xl font-bold"
                style={{ color: BRAND.indigo }}
              >
                {t("section1.title")}
              </h1>
              <p className="text-lg font-medium text-slate-700">
                {t("section1.desc")}
              </p>
            </div>

            {/* Bullet list */}
            <div className="flex flex-col space-y-6 border-b border-dotted border-indigo-100 pb-6">
              {["item1", "item2", "item3", "item4"].map((k) => (
                <div key={k} className="flex items-start gap-4">
                  <Check className="w-5 h-5 mt-1.5" style={{ color: BRAND.blue }} />
                  <p className="text-lg font-medium text-slate-700">
                    {t(`section2.${k}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
