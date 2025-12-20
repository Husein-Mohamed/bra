// src/components/KnowYourRights.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { HeroVideoDialog } from "./ui/hero-video-dialog";
import { useTranslation } from "react-i18next";
import { User, Phone, Mail, CreditCard, Banknote, Info } from "lucide-react";

/* ---------- Brand colours ---------- */
const BRAND = {
  blue:   "#47BDFF",
  indigo: "#003366",
};

export default function KnowYourRights() {
  const { t } = useTranslation("knowYourRights");

  // get list of personal-data items from translation
  const dataItems: string[] = t("dataList", { returnObjects: true });

  const textAnim = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 text-slate-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* --- Left: Text --- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textAnim}
            className="space-y-6"
          >
            <Badge
              variant="outline"
              className="px-4 py-1 font-medium"
              style={{ borderColor: "#47BDF", color: "#47BDF" }}
            >
              {t("knowYourRights")}
            </Badge>

            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
              {t("titleLine1")}<br />
              {t("titleLine2")}
            </h1>

            <ul className="space-y-3">
              {dataItems.map((item, idx) => {
                const icons = [User, Phone, Mail, CreditCard, Banknote, Info];
                const Icon = icons[idx % icons.length];
                return (
                  <li key={idx} className="flex items-start gap-3">
                    <Icon
                      className="shrink-0 mt-1"
                      size={20}
                      style={{ color: BRAND.blue }}
                    />
                    <span className="text-lg leading-snug">{item}</span>
                  </li>
                );
              })}
            </ul>

            <p className="mt-6 text-lg leading-relaxed">
              {t("lawInfo")}
            </p>
          </motion.div>

          {/* --- Right: Video --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <HeroVideoDialog
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/Zqwynk2okxQ?si=AP2IWNG1fkoXF3si"
              thumbnailSrc="/images/Covers/img-3.jpg"
              thumbnailAlt={t("knowYourRights")}
              className="rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
