"use client";

import { Globe } from "@/components/ui/globe";

export function GlobeDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  bg-transparent px-40 pb-40 pt-8 md:pb-60">
      <Globe />
      <div className="pointer-events-none absolute inset-0 h-full " />
    </div>
  );
}
