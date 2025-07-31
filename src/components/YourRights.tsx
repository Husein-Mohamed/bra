"use client";

import React from "react";
import { Badge } from "./ui/badge";
import {
  ScanFace,
  BookOpenCheck,
  FileWarning,
  Eraser,
  FolderX,
  CheckCheck,
  Scale,
} from "lucide-react";
import { useTranslation } from "react-i18next";

// Brand colours
const BRAND = {
  blue:   "#47BDFF",
  indigo: "#003366",
};

const features = [
  { key: "rightOfAccess", icon: <ScanFace size={32} /> },
  { key: "rightToRectification", icon: <BookOpenCheck size={32} /> },
  { key: "rightToObject", icon: <FileWarning size={32} /> },
  { key: "rightToErasure", icon: <Eraser size={32} /> },
  { key: "rightToRestrictProcessing", icon: <FolderX size={32} /> },
  { key: "rightToDataPortability", icon: <CheckCheck size={32} /> },
  { key: "rightsInRelationToAutomatedDecisionMaking", icon: <Scale size={32} /> },
];

export default function YourRights() {
  const { t } = useTranslation("yourRights");

  return (
    <section className="pb-20 lg:pb-30 bg-white">
      <div className="container mx-auto px-8 space-y-8">
        <Badge variant="outline" className="text-neutral-700 justify-center">
          {t("yourDataYourRights")}
        </Badge>

        <h2
          className="text-4xl font-bold text-slate-900"
          style={{ color: BRAND.indigo }}
        >
          {t("yourRightsTitle")}
        </h2>

        <p className="text-lg text-slate-700 max-w-prose">
          {t("yourRightsDescription")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((f, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div
                className="flex items-center justify-center rounded-full p-3"
                style={{ backgroundColor: "#F0F4FF" }}
              >
                {React.cloneElement(f.icon, { color: BRAND.blue })}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {t(`features.${f.key}.title`)}
                </h3>
                <p className="mt-1 text-base text-slate-700">
                  {t(`features.${f.key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
