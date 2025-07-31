// src/components/About.tsx
"use client";

import { useTranslation } from "react-i18next";
import { AboutText } from "./ui/aboutText";
import type { PillProps } from "./ui/aboutText";

export default function About() {
  const { t } = useTranslation("about");
  // Cast pill translation into PillProps
  const pill = t("pill", { returnObjects: true }) as PillProps;
  // Get disclosure as plain string
  const disclosureText = t("disclosure");

  return (
    <div className="w-full py-20 lg:py-30">
      <div className="container mx-auto grid grid-cols-1 gap-8 items-stretch lg:grid-cols-2">
        {/* Left column (Profile image) */}
        <div className="relative">
          <div className="bg-zinc-100 rounded-md aspect-square dark:bg-zinc-800 overflow-hidden">
            <img
              src="/images/PNG/DG-01.png"
              alt={`${t("heading.title")} ${t("heading.highlight")}`}
              className="w-full h-full object-cover"
            />
          </div>
          <img
            src="/images/Logo/DPA LOGO-01.png"
            alt="Company Logo"
            className="
              absolute
              top-full
              -mt-[50px]
              -right-10
              w-20
              h-20
              object-contain
              rounded-md
              shadow-md
              bg-white
              animate-bounce
            "
          />
        </div>

        {/* Right column */}
        <div className="flex flex-col">
          {/* AboutText (heading + description) */}
          <AboutText
            pill={pill}
            content={{
              title: t("heading.title"),
              titleHighlight: t("heading.highlight"),
              description: t("description"),
            }}
          />

          {/* Styled disclosure text */}
          <div className="mt-8 px-4 md:px-8 lg:px-12">
            <p
              className="bg-blue-50/80 p-6 rounded-xl border border-blue-200 shadow text-black font-semibold whitespace-pre-line"
              style={{
                fontFamily: '"Times New Roman", Times, serif',
                fontSize: "1.19rem",
                lineHeight: "2.1rem",
                letterSpacing: "0.01em",
              }}
            >
              {disclosureText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
