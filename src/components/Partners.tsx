// src/components/Partners.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

interface Partner {
  id: number;
  name: string;
  src: string;
}

export default function Partners() {
  const { t } = useTranslation("partners");
  const partners = (t("partners", { returnObjects: true }) as Partner[]) || [];

  if (!Array.isArray(partners) || partners.length === 0) return null;

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-r from-sky-50 via-white to-indigo-50 py-20 lg:py-28">

      {/* Background Title */}
      <h2 className="pointer-events-none absolute inset-0 flex items-center justify-center 
      text-6xl lg:text-8xl font-serif font-bold text-slate-300/10">
        {t("partnersTitle", "PARTNERS")}
      </h2>

      {/* Visible Title */}
      <h3 className="text-center text-3xl lg:text-4xl font-bold text-slate-800 mb-12 relative z-10">
        {t("partnersTitle", "Our Partners")}
      </h3>

      <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            reverseDirection: false,
            disableOnInteraction: false,
          }}
          speed={7000} // Smooth + Slow
          loop
          slidesPerView={3}
          spaceBetween={40}
          centeredSlides={false}
          style={{ paddingBottom: "40px" }}
        >
          {partners.map((p) => (
            <SwiperSlide key={p.id}>
              <div className="flex items-center justify-center w-full">

                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="
                    w-[220px] h-[130px]
                    bg-white/90 
                    backdrop-blur-md
                    rounded-2xl
                    border border-slate-200
                    shadow-lg
                    flex items-center justify-center
                  "
                >
                  <Image
                    src={p.src}
                    alt={p.name}
                    width={160}
                    height={70}
                    className="object-contain w-[150px] h-auto"
                  />
                </motion.div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      {/* Wave Background */}
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
