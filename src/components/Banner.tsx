"use client";

import React, { ReactNode } from "react";

interface BannerProps {
  title?: ReactNode; // JSX or string
  subtitle?: string;
}

// Brand colours
const BRAND = {
  navy:   "#080c2c",
  blue:   "#47BDFF",
  indigo: "#003366",
};

function Banner({ title = "Get in", subtitle = "Touch" }: BannerProps) {
  return (
    <div
      className="mil-Banner pt-[105px] lg:pt-[106px]"
      style={{ backgroundColor: BRAND.navy }}
    >
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-12 md:py-0 md:h-[300px]">
          <div className="text-center md:text-left">
            <h1 className="mb-3 text-lg font-extrabold" style={{ color: BRAND.blue }}>
              {title}
            </h1>
            <h4
              className="text-2xl sm:text-3xl lg:text-[40px] lg:!leading-[50px] font-extrabold"
              style={{ color: BRAND.blue }}
            >
              {subtitle}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
