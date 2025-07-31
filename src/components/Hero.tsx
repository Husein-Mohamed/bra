"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import BackgroundSlider from "./ui/BackgroundSlider";
import AnimatedHero from "./ui/animated-hero";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  const sliderRef = useRef<{
    slideNext: () => void;
    slidePrev: () => void;
  } | null>(null);

  const containerVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 1, 0.5, 1],
        delay: 0.1, // Slight delay for better sync
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  return (
    <div className="relative w-full h-screen">
      {/* Background Slider */}
      <BackgroundSlider ref={sliderRef} />

      {/* Content Overlay */}
      <motion.div
        className="absolute inset-0 flex flex-col md:flex-row items-center md:items-end justify-end md:justify-between px-6 md:px-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center md:items-end justify-end md:justify-between h-full z-20">
          {/* Left Section (Text and CTA) */}
          <motion.div
            className="w-full md:w-3/5 text-white pb-10 md:pb-0"
            variants={containerVariants}
          >
            <AnimatedHero />
            {/* Navigation Buttons Section */}
            <motion.div
              className="flex flex-row gap-6 items-center md:items-end pb-10 md:pb-20 px-4"
              variants={buttonVariants}
            >
              <Button
                onClick={() => sliderRef.current?.slidePrev()}
                className="group text-slate-200 font-medium"
                variant="ghost"
              >
                <ArrowLeft
                  className="me-2 transition-transform opacity-60 group-hover:scale-105 group-hover:-translate-x-1"
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
                Prev
              </Button>
              <Button
                onClick={() => sliderRef.current?.slideNext()}
                className="group text-slate-200 font-medium"
                variant="ghost"
              >
                Next
                <ArrowRight
                  className="ms-2 opacity-60 transition-transform group-hover:scale-105 group-hover:translate-x-1"
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
