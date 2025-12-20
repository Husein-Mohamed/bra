"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Badge } from "./ui/badge";
import { TransitionPanel } from "./ui/transition-panel";
import { TfiTarget } from "react-icons/tfi";
import { FiEye, FiCheck } from "react-icons/fi";
import { IoDiamondOutline } from "react-icons/io5";

const THEME = {
  navy: "#080c2c",
  blue: "#47BDFF",
  indigo: "#003366",
};

export default function AboutTheInsti() {
  const { t } = useTranslation("aboutTheInsti");
  const [activeIndex, setActiveIndex] = useState(0);

  const raw = t("items", { returnObjects: true });
  const ITEMS = Array.isArray(raw)
    ? raw.map((item: any, i: number) => ({
        title: item.title,
        subtitle: item.subtitle,
        content: item.content,
        icon:
          i === 0
            ? <TfiTarget className="w-6 h-6" />
            : i === 1
            ? <FiEye className="w-6 h-6" />
            : <IoDiamondOutline className="w-6 h-6" />,
      }))
    : [];

  const textV   = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
  const headerV = { hidden: { opacity: 1 },            visible: { opacity: 1, transition: { staggerChildren: 0.05 } } };
  const charV   = { hidden: { opacity: 0, y: 20 },     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

  const line1 = t("heading.line1");
  const line2 = t("heading.line2");
  const description = t("description");

  return (
    <section className="w-full py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" animate="visible" variants={textV} className="grid gap-12 lg:grid-cols-2">

          {/* LEFT */}
          <div className="flex flex-col gap-10">
            <Badge variant="outline" className="text-zinc-700 self-start">{t("badge")}</Badge>

            <motion.h1 variants={headerV} className="text-3xl md:text-5xl font-bold" style={{ color: THEME.navy }}>
              {line1.split("").map((c, i) => (
                <motion.span key={`l1-${i}`} variants={charV}>{c === " " ? "\u00A0" : c}</motion.span>
              ))}
              <br/>
              {line2.split("").map((c, i) => (
                <motion.span key={`l2-${i}`} variants={charV}>{c === " " ? "\u00A0" : c}</motion.span>
              ))}
            </motion.h1>

            <div className="flex flex-wrap gap-3 mb-6">
              {ITEMS.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
                    activeIndex === idx
                      ? "bg-[#47BDFF] text-white"
                      : "bg-white text-[#003366] hover:bg-[#47BDFF]/20"
                  }`}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </button>
              ))}
            </div>

            <div className="overflow-hidden border-t border-dashed border-gray-200">
              <TransitionPanel
                activeIndex={activeIndex}
                transition={{ duration: 0.3 }}
                variants={{
                  enter:  { opacity: 0, y: -30, filter: "blur(4px)" },
                  center: { opacity: 1, y: 0,  filter: "blur(0px)" },
                  exit:   { opacity: 0, y: 30,  filter: "blur(4px)" },
                }}
              >
                {ITEMS.map((item, idx) => (
                  <div key={idx} className="py-4">
                    <h3 className="mb-2 text-xl font-semibold" style={{ color: THEME.indigo }}>
                      {item.subtitle}
                    </h3>
                    {Array.isArray(item.content) ? (
                      <ul className="space-y-2">
                        {item.content.map((val: string, j: number) => (
                          <li key={j} className="flex items-center gap-2 text-gray-700">
                            <FiCheck className="text-[#47BDFF]" />
                            <span>{val}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-700">{item.content}</p>
                    )}
                  </div>
                ))}
              </TransitionPanel>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-center lg:items-center">
            {/* move logo slightly right with margin */}
            <div className="relative w-80 h-80 mb-6 ml-12">
              <Image
                src="/images/Logo/BRALOGO.jpg"
                alt="DPA Logo"
                width={360}
                height={360}
                priority
              />
            </div>

            <motion.p variants={textV} className="max-w-lg text-justify text-gray-800 leading-relaxed text-lg">
              {description}
            </motion.p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
