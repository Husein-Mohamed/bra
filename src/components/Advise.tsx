// src/components/Advise.tsx
"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import {
  Link, Drama, TextSelect, IdCard, PhoneCall, MailWarning,
  SquareAsterisk, Landmark, School, UsersRound, ScanHeart, HelpCircle
} from "lucide-react";
import { Badge } from "./ui/badge";

/* ---------- Brand palette ---------- */
const BRAND = {
  navy:    "#080c2c",
  blue:    "#47BDFF",
  grayBg:  "#F7FAFC",
  cardBg:  "#FFFFFF",
};

/* ---------- One authoritative list of advice keys & icons ---------- */
const CARD_DEFS = [
  { k: "spamLinks",               icon: Link },
  { k: "identityTheft",           icon: Drama },
  { k: "spamText",                icon: TextSelect },
  { k: "keepingPersonalInfo",     icon: IdCard },
  { k: "nuisanceCalls",           icon: PhoneCall },
  { k: "phishingMessages",        icon: MailWarning },
  { k: "otp",                     icon: SquareAsterisk },
  { k: "handlingBankLines",       icon: Landmark },
  { k: "schoolIDandCerts",        icon: School },
  { k: "publicInfoSecurity",      icon: UsersRound },
  { k: "protectingHealthRecords", icon: ScanHeart },
] as const;

/* ---------- Component ---------- */
export default function Advise() {
  const { t } = useTranslation("advise");

  /* ---------- Build & de-duplicate cards ---------- */
  const uniqueCards = React.useMemo(() => {
    const seen = new Set<string>();            // use translated title as uniqueness key
    return CARD_DEFS
      .map(({ k, icon }) => ({
        icon,
        title: t(k),
        risk:  t(`${k}Risk`),
        tips:  t(`${k}Tips`, { returnObjects: true }) as string[],
      }))
      .filter(card => {
        if (seen.has(card.title)) return false;
        seen.add(card.title);
        return true;
      });
  }, [t]);

  return (
    <section className="w-full py-20" style={{ backgroundColor: BRAND.grayBg }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ---------- Header ---------- */}
        <div className="text-center space-y-3 mb-14">
          <Badge variant="outline" className="border-blue text-blue">
            {t("headerBadge")}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: BRAND.navy }}>
            {t("headerTitle")}
          </h2>
          <p className="text-lg" style={{ color: "#475569" }}>
            {t("headerSubtitle")}
          </p>
        </div>

        {/* ---------- Advice grid ---------- */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {uniqueCards.map(({ icon: Icon, title, risk, tips }, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-50">
                <Icon size={26} color={BRAND.blue} />
              </div>

              {/* Title */}
              <h3 className="mb-2 text-xl font-semibold" style={{ color: BRAND.navy }}>
                {title}
              </h3>

              {/* Risk (one-liner) */}
              <p className="text-base mb-4" style={{ color: "#475569" }}>
                {risk}
              </p>

              {/* Tips list */}
              <h4 className="font-medium mb-1" style={{ color: BRAND.navy }}>
                {t("howToProtect")}
              </h4>
              <ul className="list-disc pl-5 space-y-1" style={{ color: "#475569" }}>
                {tips.map((tip, idx) => (
                  <li key={idx}>{tip}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ---------- CTA panel ---------- */}
        <div className="mt-20 rounded-2xl bg-white p-8 shadow ring-1 ring-gray-200 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <HelpCircle size={32} color={BRAND.blue} />
          <div className="flex-1">
            <h4 className="text-xl font-semibold mb-1" style={{ color: BRAND.navy }}>
              {t("ctaTitle")}
            </h4>
            <p className="mb-4" style={{ color: "#475569" }}>
              {t("ctaDesc")}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:info@dpa.gov.so"
                className="text-sm font-medium"
                style={{ color: BRAND.blue }}
              >
                {t("emailLabel")} info@dpa.gov.so
              </a>
              <a
                href="https://dpa.gov.so"
                className="text-sm font-medium"
                style={{ color: BRAND.blue }}
              >
                {t("websiteLabel")} dpa.gov.so
              </a>
              <a
                href="https://dpa.gov.so/complaint"
                className="text-sm font-medium bg-blue px-4 py-2 rounded-lg text-white hover:bg-blue/90"
                style={{ backgroundColor: BRAND.blue }}
              >
                {t("fileComplaint")}
              </a>
              <a
                href="https://dpa.gov.so/report-breach"
                className="text-sm font-medium ring-1 ring-blue px-4 py-2 rounded-lg hover:bg-blue/10"
                style={{ color: BRAND.blue, borderColor: BRAND.blue }}
              >
                {t("reportBreach")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
