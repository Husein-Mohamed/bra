"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import AboutBadge from "./about-badge";

const ease = [0.16, 1, 0.3, 1];

interface AboutContentProps {
  title: string;
  titleHighlight?: string;
  description: string;
}

function AboutContent({
  title,
  titleHighlight,
  description,
}: AboutContentProps) {
  return (
    <div className="flex flex-col space-y-4">
      <motion.h1
        className="text-5xl font-bold tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
      >
        {title}{" "}
        {titleHighlight && (
          <span className="text-primary">{titleHighlight}</span>
        )}
      </motion.h1>
      <motion.p
        className="max-w-[42rem] leading-normal text-justify font-extralight text-zinc-500 text-lg sm:text-lg sm:leading-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.8, ease }}
      >
        {description}
      </motion.p>
    </div>
  );
}

interface AboutProps {
  pill?: {
    href?: string;
    text: string;
    icon?: React.ReactNode;
    endIcon?: React.ReactNode;
    variant?: "default" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    className?: string;
  };
  content: AboutContentProps;
  preview?: React.ReactNode;
}

const AboutText = ({ pill, content, preview }: AboutProps) => {
  return (
    <div className="container relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center py-8 px-4 md:px-8 lg:px-12">
        <div className="flex flex-col gap-4 w-full lg:max-w-2xl">
          {pill && <AboutBadge {...pill} />}
          <AboutContent {...content} />
        </div>
        {preview && (
          <div className="w-full lg:max-w-xl lg:pl-16 mt-12 lg:mt-0">
            {preview}
          </div>
        )}
      </div>
    </div>
  );
};
export type PillProps = {
  href?: string;
  text: string;
  icon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
};
export { AboutText };
