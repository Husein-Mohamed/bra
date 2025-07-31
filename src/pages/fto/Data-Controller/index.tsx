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

export default function DataControllerPage() {
  const { t } = useTranslation("dataController");
  const responsibilities = t("responsibilities", { returnObjects: true }) as Array<{
    title: string;
    summary: string;
  }>;
  const duties = t("keyDuties", { returnObjects: true }) as Array<{
    title: string;
    summary: string;
  }>;

  return (
    <>
      <Banner
        title={<span style={{ color: BRAND.blue }}>{t("dataControllerTitle")}</span>}
        subtitle={t("dataControllerSubtitle")}
      />

      <section className="mil-Bg py-32">
        <div className="container mx-auto px-8 space-y-16">
          {/* Intro */}
          <div className="space-y-6">
            <h1
              className="text-4xl md:text-5xl font-bold"
              style={{ color: BRAND.indigo }}
            >
              {t("dataControllerTitle")}
            </h1>
            <p className="text-lg font-medium text-slate-700">
              {t("dataControllerIntro")}
            </p>
          </div>

          {/* Responsibilities */}
          <div className="space-y-6 border-b border-dotted border-indigo-100 pb-6">
            <h2
              className="text-2xl font-bold"
              style={{ color: BRAND.indigo }}
            >
              {t("responsibilitiesTitle")}
            </h2>
            {Array.isArray(responsibilities) &&
              responsibilities.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <Check
                    className="w-5 h-5 mt-1.5"
                    style={{ color: BRAND.blue }}
                  />
                  <div>
                    <p className="text-lg font-semibold">{item.title}</p>
                    <p className="text-lg font-medium text-slate-700">
                      {item.summary}
                    </p>
                  </div>
                </div>
              ))}
          </div>

          {/* Key Duties */}
          <div className="space-y-6">
            <h2
              className="text-3xl font-bold"
              style={{ color: BRAND.indigo }}
            >
              {t("keyDutiesTitle")}
            </h2>
            <p className="text-lg font-medium text-slate-700">
              {t("keyDutiesIntro")}
            </p>
          </div>

          <div className="space-y-6 border-b border-dotted border-indigo-100 pb-6">
            {Array.isArray(duties) &&
              duties.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <Check
                    className="w-5 h-5 mt-1.5"
                    style={{ color: BRAND.blue }}
                  />
                  <div>
                    <p className="text-lg font-semibold">{item.title}</p>
                    <p className="text-lg font-medium text-slate-700">
                      {item.summary}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
