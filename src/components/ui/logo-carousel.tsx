// src/components/LogoCarousel.tsx
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

/* -------------- types ---------------- */
interface Logo {
  id: number;
  name: string;
  src: string;
}
interface LogoColumnProps {
  logos: Logo[];
  columnIndex: number;
  currentTime: number;
}

/* -------------- main component ---------------- */
export function LogoCarousel() {
  const [columns, setColumns] = useState(4);
  const [logoColumns, setLogoColumns] = useState<Logo[][]>([]);
  const [time, setTime] = useState(0);
  const CYCLE_DURATION = 2000; // 2 s per logo

  /* partner logos (place files in /public/images/partners) */
  const logos = useMemo<Logo[]>(
    () => [
      { id: 1, name: "Somali DPA", src: "/images/partners/dpa.svg" },
      { id: 2, name: "Nigeria NDPC", src: "/images/partners/ndpc.svg" },
      { id: 3, name: "Kenya ODPC", src: "/images/partners/odpc.svg" },
      { id: 4, name: "NADPA", src: "/images/partners/nadpa.svg" },

      /* duplicates to keep each column same length */
      { id: 5, name: "Somali DPA", src: "/images/partners/dpa.svg" },
      { id: 6, name: "Nigeria NDPC", src: "/images/partners/ndpc.svg" },
      { id: 7, name: "Kenya ODPC", src: "/images/partners/odpc.svg" },
      { id: 8, name: "NADPA", src: "/images/partners/nadpa.svg" },
    ],
    []
  );

  /* responsive column count */
  useEffect(() => {
    const updateColumns = () => {
      if (innerWidth >= 1024) setColumns(4);
      else if (innerWidth >= 768) setColumns(3);
      else setColumns(2);
    };
    updateColumns();
    addEventListener("resize", updateColumns);
    return () => removeEventListener("resize", updateColumns);
  }, []);

  /* distribute logos evenly across columns */
  const distributeLogos = useCallback(
    (all: Logo[]) => {
      const shuffled = [...all].sort(() => Math.random() - 0.5);
      const cols: Logo[][] = Array.from({ length: columns }, () => []);
      shuffled.forEach((logo, i) => cols[i % columns].push(logo));

      const maxLen = Math.max(...cols.map((c) => c.length));
      cols.forEach((c) => {
        while (c.length < maxLen) {
          c.push(shuffled[Math.floor(Math.random() * shuffled.length)]);
        }
      });
      return cols;
    },
    [columns]
  );

  useEffect(() => {
    setLogoColumns(distributeLogos(logos));
  }, [logos, distributeLogos]);

  /* timer to advance logos */
  useEffect(() => {
    const id = setInterval(() => setTime((t) => t + 100), 100);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative flex flex-wrap justify-center gap-12 lg:gap-20 xl:gap-32 w-full h-full">
      {logoColumns.map((col, i) => (
        <LogoColumn key={i} logos={col} columnIndex={i} currentTime={time} />
      ))}
    </div>
  );
}

/* -------------- column component ---------------- */
function LogoColumn({ logos, columnIndex, currentTime }: LogoColumnProps) {
  const CYCLE_DURATION = 2000;
  const columnDelay = columnIndex * 200;
  const adjustedTime =
    (currentTime + columnDelay) % (CYCLE_DURATION * logos.length);
  const currentIndex = Math.floor(adjustedTime / CYCLE_DURATION);
  const currentLogo = logos[currentIndex];

  return (
    <motion.div
      className="relative h-32 w-44 overflow-hidden md:h-24 md:w-48"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: columnIndex * 0.1, duration: 0.5, ease: "easeOut" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${currentLogo.id}-${currentIndex}`}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ y: "10%", opacity: 0 }}
          animate={{
            y: "0%",
            opacity: 1,
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
          exit={{ y: "-20%", opacity: 0, transition: { duration: 0.3 } }}
        >
          <Image
            src={currentLogo.src}
            alt={currentLogo.name}
            width={120}
            height={40}
            priority
            className="max-h-[80%] max-w-[80%] object-contain"
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
