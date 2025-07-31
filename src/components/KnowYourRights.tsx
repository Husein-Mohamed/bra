"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { HeroVideoDialog } from "./ui/hero-video-dialog";
import { useTranslation } from "react-i18next";

// Brand colours
const BRAND = {
  blue:   "#47BDFF",
  indigo: "#003366",
};

export default function KnowYourRights() {
  const { t } = useTranslation("knowYourRights");

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };
  const headerVariant = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { delay: 0.1, staggerChildren: 0.05 } },
  };
  const charVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 lg:py-30 bg-white">
      <div className="container mx-auto px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariant}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8"
        >
          <div className="flex flex-col justify-center">
            <Badge variant="outline" className="text-zinc-700 justify-center">
              {t("knowYourRights")}
            </Badge>

            <motion.h1
              className="mt-4 font-bold tracking-wide text-slate-900"
              style={{ fontSize: "2.5rem", lineHeight: 1.2 }}
              variants={headerVariant}
            >
              {t("titleLine1")
                .split("")
                .map((ch, i) => (
                  <motion.span key={`l1-${i}`} variants={charVariant}>
                    {ch === " " ? "\u00A0" : ch}
                  </motion.span>
                ))}
              <br />
              {t("titleLine2")
                .split("")
                .map((ch, i) => (
                  <motion.span key={`l2-${i}`} variants={charVariant}>
                    {ch === " " ? "\u00A0" : ch}
                  </motion.span>
                ))}
            </motion.h1>

            <p className="mt-6 text-lg text-slate-700 max-w-xl">
              {t("description")}
            </p>
          </div>

          <div className="flex items-center justify-center">
            <HeroVideoDialog
              className="block"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/Zqwynk2okxQ?si=AP2IWNG1fkoXF3si"
              thumbnailSrc="/images/Covers/img-3.jpg"
              thumbnailAlt={t("knowYourRights")}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
