// src/components/AboutAi.tsx
"use client";

import { useTranslation } from "react-i18next";
import { SplineScene } from "./ui/splite";
import { Card } from "./ui/card";
import { Spotlight } from "./ui/spotlight";

export default function AboutAi() {
  const { t } = useTranslation("aboutAi");

  return (
    <Card className="w-full h-[540px] bg-[#010B2B] relative overflow-hidden border-none shadow-2xl rounded-3xl">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#47BDFF"
        style={{ opacity: 0.2 }}
      />

      <div className="flex flex-col p-8 md:flex-row h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1
            className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-[#7DD3FC] to-blue-100 drop-shadow mb-4"
            style={{ fontFamily: '"Inter","Segoe UI",Arial,sans-serif' }}
          >
            {t("heading")}
          </h1>
          <p className="mt-2 text-blue-100 max-w-xl text-lg leading-relaxed font-medium text-justify drop-shadow" style={{ letterSpacing: ".01em" }}>
            {t("description")}
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative h-64 md:h-full">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  );
}
