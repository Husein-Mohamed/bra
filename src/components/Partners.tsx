// src/components/Partners.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";

interface Partner {
  id: number;
  name: string;
  src: string;
  blurb: string;
}

export default function Partners() {
  const { t } = useTranslation("partners");
  // pull in the array from translation JSON
  const partners = t<Partner[]>("partners", { returnObjects: true }) || [];

  const [index, setIndex] = useState(0);

  // autoplay
  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % partners.length),
      4000
    );
    return () => clearInterval(id);
  }, [partners.length]);

  if (!partners.length) return null;
  const active = partners[index % partners.length];

  return (
    <section className="relative isolate overflow-visible bg-gradient-to-r from-sky-50 via-white to-indigo-50 py-20 lg:py-32">
      {/* background title */}
      <h2 className="pointer-events-none absolute inset-0 flex items-center justify-center text-6xl lg:text-8xl font-serif font-bold text-slate-300/10">
        {t("partnersTitle", "PARTNERS")}
      </h2>

      <div className="relative z-10 mx-auto max-w-6xl flex flex-col items-center">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <AnimatePresence mode="wait">
            {/* logo */}
            <motion.div
              key={active.id}
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="flex-none"
            >
              <div className="relative before:absolute before:inset-0 before:rounded-3xl before:bg-[radial-gradient(var(--tw-gradient-stops))] before:from-sky-300/50 before:to-transparent before:blur-xl">
                <div className="relative rounded-3xl bg-white/90 backdrop-blur-lg shadow-2xl ring-2 ring-slate-100 p-8 lg:p-12">
                  <Image
                    src={active.src}
                    alt={active.name}
                    width={320}
                    height={140}
                    priority
                    className="object-contain w-[260px] lg:w-[320px] h-auto"
                  />
                </div>
              </div>
            </motion.div>

            {/* blurb */}
            <motion.div
              key={`blurb-${active.id}`}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="flex-none"
            >
              <div className="rounded-3xl bg-white/85 backdrop-blur-md shadow-xl p-6 lg:p-10 max-w-md">
                <p className="text-lg lg:text-2xl font-semibold text-slate-800 leading-relaxed">
                  {active.blurb}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="h-16 lg:h-20" />

        {/* dots */}
        <div className="flex gap-3">
          {partners.map((p, i) => (
            <button
              key={p.id}
              aria-label={t("showPartner", { name: p.name })}
              onClick={() => setIndex(i)}
              className={`h-3 w-3 rounded-full transition-colors ${
                i === index ? "bg-blue-600" : "bg-slate-400/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* wave behind */}
      <svg
        className="absolute bottom-0 left-0 w-full -z-10"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0 0h1440v80c-120 40-240 60-360 60s-240-20-360-60S720 20 600 20 360 40 240 80 120 80 0 40z"
          fill="#ffffff"
        />
      </svg>
    </section>
  );
}
