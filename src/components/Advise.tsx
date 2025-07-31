"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Link, Drama, TextSelect, IdCard, PhoneCall, MailWarning, SquareAsterisk, Landmark, School, UsersRound, ScanHeart } from "lucide-react";
import { Badge } from "./ui/badge";

// Brand colours
const BRAND = {
  blue:   "#47BDFF",
  indigo: "#003366",
  grayBg:"#F7FAFC",
  cardBg:"#FFFFFF",
};

export default function Advise() {
  const { t } = useTranslation("advise");

  const advises = [
    { title: t("spamLinks"),              description: t("spamLinksDesc"),              icon: <Link size={28} color={BRAND.blue}/> },
    { title: t("identityTheft"),          description: t("identityTheftDesc"),          icon: <Drama size={28} color={BRAND.blue}/> },
    { title: t("spamText"),               description: t("spamTextDesc"),               icon: <TextSelect size={28} color={BRAND.blue}/> },
    { title: t("keepingPersonalInfo"),    description: t("keepingPersonalInfoDesc"),    icon: <IdCard size={28} color={BRAND.blue}/> },
    { title: t("nuisanceCalls"),         description: t("nuisanceCallsDesc"),         icon: <PhoneCall size={28} color={BRAND.blue}/> },
    { title: t("phishingMessages"),       description: t("phishingMessagesDesc"),       icon: <MailWarning size={28} color={BRAND.blue}/> },
    { title: t("otp"),                    description: t("otpDesc"),                    icon: <SquareAsterisk size={28} color={BRAND.blue}/> },
    { title: t("handlingBankLines"),      description: t("handlingBankLinesDesc"),      icon: <Landmark size={28} color={BRAND.blue}/> },
    { title: t("schoolIDandCertifications"), description: t("schoolIDandCertificationsDesc"), icon: <School size={28} color={BRAND.blue}/> },
    { title: t("publicInfoSecurity"),     description: t("publicInfoSecurityDesc"),     icon: <UsersRound size={28} color={BRAND.blue}/> },
    { title: t("protectingHealthRecords"),description: t("protectingHealthRecordsDesc"),icon: <ScanHeart size={28} color={BRAND.blue}/> },
  ];

  return (
    <section className="w-full py-20 bg-[var(--bg)]" style={{ backgroundColor: BRAND.grayBg }}>
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge variant="outline" className="text-zinc-700 justify-center">
            {t("yourDataYourRights")}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: BRAND.indigo }}>
            {t("advices")}
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {advises.map((adv, idx) => (
            <div
              key={idx}
              className="bg-[var(--card-bg)] rounded-2xl p-6 shadow hover:shadow-lg transition"
              style={{ backgroundColor: BRAND.cardBg }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow mb-4 mx-auto">
                {adv.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-2" style={{ color: BRAND.indigo }}>
                {adv.title}
              </h3>
              <p className="text-center text-slate-700 leading-relaxed">{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
