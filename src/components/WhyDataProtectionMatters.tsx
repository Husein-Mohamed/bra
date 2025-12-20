"use client";

import { useTranslation } from "react-i18next";
import { Building, Landmark, BadgeCheck, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyDataProtectionMatters() {
  const { t } = useTranslation("whyDataProtection");

  const items = t("items", { returnObjects: true }) as string[];

  // Icons matched to content order
  const icons = [Building, Landmark, BadgeCheck, Users];

  return (
    <section
      className="
        relative overflow-hidden

        /* STRONG light blue & grey mixed background */
        bg-gradient-to-b
        from-[#DDEEFF]
        via-[#C7DAEC]
        to-[#E0E4EA]
      "
    >
      {/* ============= MOGADISHU HISTORIC BUILDING FOOTER SKETCH (BRA COLORS) ============= */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[220px] opacity-[0.18] overflow-hidden">
        <svg
          viewBox="0 0 1600 350"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMax slice"
          className="w-full h-full"
        >
          <g
            fill="none"
            stroke="#1E3A8A"   // BRA deep blue
            strokeWidth="1"
            strokeLinejoin="round"
            strokeLinecap="round"
          >
            {/* City base skyline */}
            <path d="
              M0 260 
              H120 V210 H200 V230 H260 V190 
              H360 V240 H440 V180 H520 V230 
              H620 V200 H700 V225
              H800 V185 H860 V240
              H960 V215 H1040 V230
              H1140 V180 H1220 V240
              H1340 V200 H1420 V225
              H1600 V210
            " />

            {/* Cathedral cross spire */}
            <path d="
              M430 180
              V80
              H470
              V180
            " />
            <line x1="450" y1="80" x2="450" y2="45" />
            <line x1="435" y1="60" x2="465" y2="60" />

            {/* Mosque dome */}
            <path d="
              M780 180
              V120
              H840
              V180
            " />
            <path d="
              M810 120
              Q780 90 810 70
              Q840 90 810 120
            " />

            {/* Minaret tower */}
            <path d="
              M1085 185
              V95
              H1120
              V185
            " />
            <line x1="1102" y1="95" x2="1102" y2="60" />

            {/* Italian arch windows */}
            {Array.from({ length: 20 }).map((_, i) => (
              <path
                key={`arc-${i}`}
                d={`
                  M${110 + i * 68} 230
                  Q${125 + i * 68} 215 ${140 + i * 68} 230
                `}
              />
            ))}
          </g>

          {/* Subtle BRA red accent duplicates */}
          <g
            stroke="#991B1B"
            strokeWidth="0.6"
            opacity="0.4"
            fill="none"
          >
            <path d="
              M0 270
              H200 V255 H400 V270
              H600 V255 H800 V270
              H1000 V255 H1200 V270
              H1400 V255 H1600 V270
            " />
          </g>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 py-20 lg:py-28 text-white">

        {/* ================= HERO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
            <span className="block text-red-800">
              {t("title.part1")}
            </span>

            <span className="block text-blue-900">
              {t("title.part2")}
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 bg-blue-700 rounded-full"></div>

          {/* BLACK INTRO TEXT */}
          <p className="mt-6 text-base sm:text-lg text-black max-w-4xl mx-auto">
            {t("intro")}
          </p>
        </motion.div>

        {/* ================= DIRECTOR / CITIZEN PANEL ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="
            mt-12
            max-w-4xl
            mx-auto
            bg-[#101C3F]/80
            border border-blue-400/30
            shadow-[0_0_0_2px_rgba(71,189,255,0.10),0_0_20px_rgba(10,26,63,0.7)]
            rounded-2xl
            p-8 sm:p-12
            backdrop-blur
          "
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 text-white">
            {t("heading")}
          </h3>

          <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
            {t("subIntro")}
          </p>
        </motion.div>

        {/* ================= FEATURE GRID ================= */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {items.map((text, idx) => {
            const Icon = icons[idx] ?? Building;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="
                  group
                  bg-[#0E1735]
                  border border-white/10
                  hover:border-blue-400
                  rounded-xl
                  p-6
                  shadow-lg
                  transition-all
                "
              >
                {/* ICON CIRCLE BADGE */}
                <div
                  className="
                    mb-4 
                    flex h-14 w-14 items-center justify-center 
                    rounded-full
                    bg-[#080C2C]
                    ring-2 ring-red-800/30
                    shadow-[0_0_12px_rgba(185,28,28,0.5)]
                    transition-transform
                    group-hover:scale-110
                  "
                >
                  <Icon className="w-6 h-6 text-blue-300" />
                </div>

                {/* TEXT */}
                <p className="text-sm sm:text-base leading-relaxed text-gray-200">
                  {text}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
