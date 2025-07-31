"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

function AnimatedHero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => ["Data", "Rights"], []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex flex-col gap-4 py-8 md:py-20 items-start justify-start">
          <span className="text-base sm:text-lg md:text-xl leading-relaxed text-zinc-300 max-w-2xl text-left">
            Safeguarding Your Privacy
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold max-w-3xl tracking-normal text-left leading-tight">
            <span className="relative flex w-full justify-start text-left min-h-[2.5em] md:min-h-[3.2em]">
              {titles.map((title, index) => (
                <motion.span
                  key={index}
                  className="absolute font-semibold"
                  initial={{ opacity: 0, y: "-100" }}
                  transition={{ type: "spring", stiffness: 50 }}
                  animate={
                    titleNumber === index
                      ? {
                          y: 0,
                          opacity: 1,
                        }
                      : {
                          y: titleNumber > index ? -80 : 80,
                          opacity: 0,
                        }
                  }
                >
                  Your {title}
                </motion.span>
              ))}
            </span>
            <span className="font-semibold block mt-2">
              Our <span className="text-[#47BDFF]">Responsibility</span>
            </span>
          </h1>
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
