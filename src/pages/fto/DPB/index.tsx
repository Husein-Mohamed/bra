"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Banner from "@/components/Banner";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

/* Brand colours */
const BRAND = {
  blue:   "#47BDFF",
  indigo: "#003366"
};

export default function DataProtectionBasics() {
  const { t } = useTranslation("dataProtectionBasics");

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
          <div className="space-y-8">
            <h1
              className="text-4xl md:text-5xl font-normal"
              style={{ color: BRAND.indigo }}
            >
              {t("mainTitle")}
            </h1>
            <p className="text-lg font-medium text-slate-700">
              {t("description")}
            </p>
          </div>

          <div className="flex justify-end">
            <a href="/docs/Data Protection Basics.pdf" download>
              <Button size="lg" className="group gap-4">
                <span className="text-md">{t("downloadLabel")}</span>
                <ArrowDown
                  className="opacity-60 transition-transform group-hover:translate-y-0.5"
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
