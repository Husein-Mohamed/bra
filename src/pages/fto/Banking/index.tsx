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

export default function BankingCompliancePage() {
  const { t } = useTranslation("bankingCompliance");

  return (
    <>
      <Banner
        title={<span style={{ color: BRAND.blue }}>{t("banner.title")}</span>}
        subtitle={t("banner.subtitle")}
      />

      <section className="mil-Bg py-32">
        <div className="container mx-auto px-8">
          <div className="flex flex-col space-y-16">

            {/* Section 1 */}
            <div className="flex flex-col space-y-6">
              <h1
                className="text-3xl md:text-4xl font-bold"
                style={{ color: BRAND.indigo }}
              >
                {t("section1.title")}
              </h1>
              <p className="text-lg font-medium text-slate-700">
                {t("section1.desc")}
              </p>
            </div>

            {/* Section 2 */}
            <div className="flex flex-col space-y-6">
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

            {/* Section 3: items */}
            <div className="flex flex-col space-y-6 border-b border-dotted border-indigo-100 pb-6">
              <h2
                className="text-2xl md:text-3xl font-bold"
                style={{ color: BRAND.indigo }}
              >
                {t("section3.title")}
              </h2>

              {["item1","item2","item3","item4","item5","item6"].map((key) => (
                <div key={key} className="flex items-start gap-4">
                  <Check className="w-5 h-5 mt-1.5" style={{ color: BRAND.blue }} />
                  <div>
                    <p className="text-lg font-semibold">{t(`section3.${key}.title`)}</p>
                    <p className="text-lg font-medium text-slate-700">
                      {t(`section3.${key}.desc`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Section 4: benefits */}
            <div className="flex flex-col space-y-6 border-b border-dotted border-indigo-100 pb-6">
              <h2
                className="text-2xl md:text-3xl font-bold"
                style={{ color: BRAND.indigo }}
              >
                {t("section4.title")}
              </h2>

              {["benefit1","benefit2","benefit3"].map((key) => (
                <div key={key} className="flex items-start gap-4">
                  <Check className="w-5 h-5 mt-1.5" style={{ color: BRAND.blue }} />
                  <p className="text-lg font-medium text-slate-700">
                    {t(`section4.${key}`)}
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
