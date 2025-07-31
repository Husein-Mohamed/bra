// src/components/FeaturesSectionWithHoverEffects.tsx
"use client";

import { useTranslation } from "react-i18next";
import { cn } from "../../lib/utils";

import { GoLaw } from "react-icons/go";
import { DiGhostSmall } from "react-icons/di";
import { MdDataObject } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";
import { BsDatabaseDash } from "react-icons/bs";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GrInsecure } from "react-icons/gr";
import { GiFairyWings } from "react-icons/gi";

export function FeaturesSectionWithHoverEffects() {
  const { t } = useTranslation("features");

  // define keys & icons in order
  const raw = [
    { key: "storageLimitation", icon: <BsDatabaseDash className="w-8 h-8 text-[#47BDFF]" /> },
    { key: "purposeLimitation", icon: <DiGhostSmall className="w-8 h-8 text-[#47BDFF]" /> },
    { key: "dataAccuracy", icon: <TiTickOutline className="w-8 h-8 text-[#47BDFF]" /> },
    { key: "lawfulness", icon: <GoLaw className="w-8 h-8 text-[#47BDFF]" /> },
    { key: "dataMinimization", icon: <MdDataObject className="w-8 h-8 text-[#47BDFF]" /> },
    { key: "fairnessAccountability", icon: <GiFairyWings className="w-8 h-8 text-[#47BDFF]" /> },
    { key: "confidentialitySecurity", icon: <GrInsecure className="w-8 h-8 text-[#47BDFF]" /> },
  ];

  const features = raw.map(({ key, icon }, index) => ({
    title: t(`${key}.title`),
    description: t(`${key}.description`),
    icon,
    index,
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((f) => (
        <Feature key={f.title} {...f} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => (
  <div
    className={cn(
      "flex flex-col lg:border-r border-gray-300/60 py-10 relative group/feature dark:border-neutral-800",
      (index === 0 || index === 4) && "lg:border-l",
      index < 4 && "lg:border-b"
    )}
  >
    {/* hover gradient */}
    <div
      className={cn(
        "opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0",
        index < 4
          ? "bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent"
          : "bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent"
      )}
    />

    <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
      {icon}
    </div>
    <div className="text-lg font-bold mb-2 relative z-10 px-10">
      <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200" />
      <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
        {title}
      </span>
    </div>
    <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
      {description}
    </p>
  </div>
);
