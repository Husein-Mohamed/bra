"use client";

import { useState, forwardRef, useImperativeHandle } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// Make sure these exact files exist in your public/images folder with these extensions!
const productImages = [
  "/images/home-page-01.jpg",
  "/images/home-page-02.jpg",
  "/images/home-page-03.jpg",
];

const BackgroundSlider = forwardRef((_, ref) => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);

  useImperativeHandle(ref, () => ({
    slideNext: () => swiperRef?.slideNext(),
    slidePrev: () => swiperRef?.slidePrev(),
  }));

  return (
    <div className="relative w-full h-screen bg-black">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 5000 }}
        onSwiper={(swiper) => setSwiperRef(swiper)}
        className="w-full h-full"
      >
        {productImages.map((image, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="w-full h-full relative"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "black",
              }}
              initial={{ scale: 1.3, opacity: 1 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 1 }}
              transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            >
              <div className="mil-overlay absolute inset-0 pointer-events-none" />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});

BackgroundSlider.displayName = "BackgroundSlider";

export default BackgroundSlider;
