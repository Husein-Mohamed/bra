"use client";

import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";
import { motion } from "framer-motion";

type SliderHandle = {
  slideNext: () => void;
  slidePrev: () => void;
};

const BackgroundSlider = forwardRef<SliderHandle>((_props, ref) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Define multiple segments you want to play in order
  const segments = [
    { start: 0, end: 5 },   // segment 1
    { start: 73, end: 86 },  // segment 2
    { start: 102, end: 109 },   // segment 3
    { start: 120, end: 130 },  // segment 4
    { start: 231, end: 234 },  // segment 5
    { start: 340, end: 342 },  // segment 5
  ];

  const [currentSegment, setCurrentSegment] = useState(0);

  useImperativeHandle(ref, () => ({
    slideNext: () => {
      setCurrentSegment((prev) => {
        const next = (prev + 1) % segments.length;
        const video = videoRef.current;
        if (video) {
          video.currentTime = segments[next].start;
          video.play();
        }
        return next;
      });
    },
    slidePrev: () => {
      setCurrentSegment((prev) => {
        const next = (prev - 1 + segments.length) % segments.length;
        const video = videoRef.current;
        if (video) {
          video.currentTime = segments[next].start;
          video.play();
        }
        return next;
      });
    },
  }));

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const start = segments[currentSegment].start;

    const handleLoaded = () => {
      video.currentTime = start;
      video.play();
    };

    const handleTimeUpdate = () => {
      const { end } = segments[currentSegment];

      // When this segment ends, move to the next
      if (video.currentTime >= end) {
        const nextIndex = (currentSegment + 1) % segments.length;
        setCurrentSegment(nextIndex);
        video.currentTime = segments[nextIndex].start;
        video.play();
      }
    };

    video.addEventListener("loadedmetadata", handleLoaded);
    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoaded);
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [currentSegment]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <motion.video
        ref={videoRef}
        src="/images/mv.mp4"
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.3 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex items-center justify-center h-full text-white">
       
      </div>
    </div>
  );
});

export default BackgroundSlider;
