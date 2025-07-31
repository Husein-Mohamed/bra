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

export default function DataBreachPage() {
  const { t } = useTranslation("dataBreach");

  const sections = [
    "understanding",
    "types",
    "causes",
    "prevention",
    "impact",
    "response",
  ];

  return (
    <>
      <Banner
        title={<span style={{ color: BRAND.blue }}>{t("bannerTitle")}</span>}
        subtitle={t("bannerSubtitle")}
      />

      <section className="mil-Bg py-32">
        <div className="container mx-auto px-8 space-y-16">
          {/* Page Title */}
          <h1
            className="text-4xl md:text-5xl font-bold"
            style={{ color: BRAND.indigo }}
          >
            {t("title")}
          </h1>

          {/* Sections */}
          {sections.map((sec) => {
            const paras = t(`${sec}.paragraphs`, { returnObjects: true }) as string[];
            const bullets = t(`${sec}.bullets`, { returnObjects: true }) as { label: string; desc: string }[];

            return (
              <div
                key={sec}
                className="space-y-6 border-b border-dotted border-indigo-100 pb-6"
              >
                <h2
                  className="text-3xl font-bold"
                  style={{ color: BRAND.indigo }}
                >
                  {t(`${sec}.heading`)}
                </h2>

                {/* Paragraphs */}
                {Array.isArray(paras) &&
                  paras.map((p, i) => (
                    <p key={i} className="text-lg font-medium text-slate-700">
                      {p}
                    </p>
                  ))}

                {/* Bullets */}
                {Array.isArray(bullets) &&
                  bullets.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <Check
                        className="w-5 h-5 mt-1.5"
                        style={{ color: BRAND.blue }}
                      />
                      <div>
                        <p className="text-lg font-semibold">{item.label}</p>
                        <p className="text-lg font-medium text-slate-700">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
