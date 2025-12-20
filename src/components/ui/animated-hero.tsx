"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

function AnimatedHero() {
  // 0=English, 1=Somali, 2=Arabic (comment out Arabic block below to disable)
  const [langIndex, setLangIndex] = useState(0);

  const languages = useMemo(
    () => [
      {
        lines: ["NABBAD", "NADAAFAD"],
        subtitle: "CAASIMADDA SOOMAALIYA",
        description:
          "Ku soo Dhowow Caasimadda dalka Soomaaliya.",
      },
      {
        lines: ["Waan Dhismeynaa", "Waan dhaqaaqeynaa"],
        subtitle: "MAGAALO MADAXDA DALKA",
        description:
          " inaad maamusho macluumaadkaaga shakhsiyeed, iyo hubinta in si kasta loo ilaaliyo.",
      },
      //  //To disable Arabic, just comment out this block:
      // {
      //   lines: ["بياناتك", "حقوقك"],
      //   subtitle: "مسؤوليتنا",
      //   description:
      //     "حماية خصوصيتك بنزاهة، وتمكينك من التحكم في معلوماتك الشخصية، وضمان حمايتها في كل خطوة.",
      // },
      
    ],
    []
  );

  // Rotate entire language pack every 3s
  useEffect(() => {
    const langTimer = setInterval(() => {
      setLangIndex((prev) => (prev + 1) % languages.length);
    }, 3000);
    return () => clearInterval(langTimer);
  }, [languages]);

  const { lines, subtitle, description } = languages[langIndex];

  // Still animate line-by-line every 2s
  const [lineIndex, setLineIndex] = useState(0);
  useEffect(() => {
    const lineTimer = setTimeout(() => {
      setLineIndex((prev) =>
        prev === lines.length - 1 ? 0 : prev + 1
      );
    }, 2000);
    return () => clearTimeout(lineTimer);
  }, [lineIndex, lines]);

  return (
    <div className="w-full">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex flex-col gap-4 py-8 md:py-20 items-start">
          {/* <span className="text-base sm:text-lg md:text-xl leading-relaxed text-zinc-300 max-w-2xl text-left">
            Safeguarding Your Privacy
          </span> */}

          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold max-w-3xl tracking-normal text-left leading-tight">
            <span className="relative flex w-full min-h-[3em]">
              {lines.map((text, idx) => (
                <motion.span
                  key={idx}
                  className="absolute font-semibold"
                  initial={{ opacity: 0, y: "-100%" }}
                  transition={{ type: "spring", stiffness: 50 }}
                  animate={
                    lineIndex === idx
                      ? { y: "0%", opacity: 1 }
                      : { y: lineIndex > idx ? "-100%" : "100%", opacity: 0 }
                  }
                >
                  {text}
                </motion.span>
              ))}
            </span>
            <span className="block mt-2 font-semibold text-red-700 text-extra-bold">
              {subtitle}
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl text-zinc-300">
            {description}
          </p>

          {/* <p className="text-sm sm:text-base md:text-lg leading-relaxed text-zinc-300 max-w-2xl text-left">
            Safeguarding your privacy with integrity, empowering you to take
            control of your personal information, and ensuring it is protected
            every step of the way.
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default AnimatedHero;
