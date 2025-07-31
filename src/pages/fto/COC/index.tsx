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

function renderTranslationList(list: unknown) {
  if (!Array.isArray(list)) return null;
  return list
    .filter((item): item is string => typeof item === "string")
    .map((item, index) => (
      <div key={index} className="flex items-start gap-4">
        <Check className="w-5 h-5 mt-1.5" style={{ color: BRAND.blue }} />
        <p className="text-lg font-medium text-slate-700">{item}</p>
      </div>
    ));
}

export default function CodeOfConductPage() {
  const { t } = useTranslation("cocRegistration");
  const principles = t("principlesList", { returnObjects: true });
  const benefits   = t("benefitsList",    { returnObjects: true });
  const requirements = t("requirementsList", { returnObjects: true });

  return (
    <>
      <Banner
        title={<span style={{ color: BRAND.blue }}>{t("forOrganizations")}</span>}
        subtitle={t("knowYourObligations")}
      />

      <section className="mil-Bg py-32">
        <div className="container mx-auto px-8 space-y-16">
          {/* Main intro */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold" style={{ color: BRAND.indigo }}>
              {t("mainTitle")}
            </h1>
            <p className="text-lg font-medium text-slate-700">{t("mainDesc")}</p>
          </div>

          {/* Code title */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold" style={{ color: BRAND.indigo }}>
              {t("codeTitle")}
            </h2>
            <p className="text-lg font-medium text-slate-700">{t("codeDesc")}</p>
          </div>

          {/* Principles */}
          <div className="space-y-6 border-b border-dotted border-indigo-100 pb-6">
            <h3 className="text-2xl font-bold" style={{ color: BRAND.indigo }}>
              {t("principles")}
            </h3>
            {renderTranslationList(principles)}
          </div>

          {/* Benefits */}
          <div className="space-y-6 border-b border-dotted border-indigo-100 pb-6">
            <h3 className="text-2xl font-bold" style={{ color: BRAND.indigo }}>
              {t("benefits")}
            </h3>
            {renderTranslationList(benefits)}
          </div>

          {/* Registration description */}
          <div className="space-y-6 border-b border-dotted border-indigo-100 pb-6">
            <h3 className="text-2xl font-bold" style={{ color: BRAND.indigo }}>
              {t("registration")}
            </h3>
            <p className="text-lg font-medium text-slate-700">
              {t("registrationDesc")}
            </p>
          </div>

          {/* Requirements */}
          <div className="space-y-6 border-b border-dotted border-indigo-100 pb-6">
            <h3 className="text-2xl font-bold" style={{ color: BRAND.indigo }}>
              {t("requirements")}
            </h3>
            {renderTranslationList(requirements)}
          </div>
        </div>
      </section>
    </>
  );
}
