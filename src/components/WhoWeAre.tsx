"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Badge } from "./ui/badge";
import { TransitionPanel } from "./ui/transition-panel";
import { TfiTarget } from "react-icons/tfi";
import { FiEye } from "react-icons/fi";
import { IoDiamondOutline } from "react-icons/io5";

export default function AboutTheInsti() {
  const { t } = useTranslation("aboutTheInsti");
  const [activeIndex, setActiveIndex] = useState(0);

  // Safely read items as an array
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

  // animation variants
  const textV = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };
  const headerV = { hidden: { opacity: 1 }, visible: { opacity: 1, transition: { delay: 0.1, staggerChildren: 0.05 } } };
  const charV =    { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

  const line1 = t("heading.line1");
  const line2 = t("heading.line2");
  const description = t("description");

  return (
    <section className="w-full py-20 lg:py-30">
      <div className="container mx-auto">
        <motion.div initial="hidden" animate="visible" variants={textV}
                    className="grid p-8 grid-cols-1 gap-8 lg:grid-cols-2 dark:border-zinc-800">

          {/* Left */}
          <div className="flex flex-col gap-12">
            <motion.div variants={textV}>
              <Badge variant="outline" className="text-zinc-700 justify-center">
                {t("badge")}
              </Badge>
            </motion.div>

            <motion.h1 variants={headerV}
                       className="xl:text-5xl lg:text-4xl md:text-5xl text-3xl font-bold tracking-wide">
              {line1.split("").map((c, i) => (
                <motion.span key={`l1-${i}`} variants={charV}>
                  {c === " " ? "\u00A0" : c}
                </motion.span>
              ))}
              <br />
              {line2.split("").map((c, i) => (
                <motion.span key={`l2-${i}`} variants={charV}>
                  {c === " " ? "\u00A0" : c}
                </motion.span>
              ))}
            </motion.h1>

            <motion.div variants={textV}>
              <div className="mb-4 flex space-x-2">
                {ITEMS.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`rounded-md px-3 py-1 lg:px-6 lg:py-4 flex items-center space-x-2 font-medium ${
                      activeIndex === idx
                        ? "bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
                        : "bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400"
                    }`}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </button>
                ))}
              </div>

              <div className="overflow-hidden border-t border-dashed border-zinc-200 dark:border-zinc-700">
                <TransitionPanel
                  activeIndex={activeIndex}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  variants={{
                    enter:  { opacity: 0, y: -50, filter: "blur(4px)" },
                    center: { opacity: 1, y: 0,  filter: "blur(0px)" },
                    exit:   { opacity: 0, y: 50,  filter: "blur(4px)" },
                  }}
                >
                  {ITEMS.map((item, idx) => (
                    <div key={idx} className="py-2">
                      <h3 className="mb-2 text-black dark:text-zinc-100">
                        {item.subtitle}
                      </h3>
                      {Array.isArray(item.content) ? (
                        <ul className="list-disc pl-5 text-zinc-600 dark:text-zinc-400">
                          {item.content.map((pt, j) => <li key={j}>{pt}</li>)}
                        </ul>
                      ) : (
                        <p className="text-zinc-600 dark:text-zinc-400">{item.content}</p>
                      )}
                    </div>
                  ))}
                </TransitionPanel>
              </div>
            </motion.div>
          </div>

          {/* Right */}
          <div className="flex flex-col py-10">
            <p className="max-w-[42rem] leading-normal text-justify text-black text-lg sm:leading-8">
              {description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
