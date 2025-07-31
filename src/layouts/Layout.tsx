// src/components/Layout.tsx
"use client";

import { ReactNode, Children, isValidElement } from "react";
import Header from "./header";
import Footer from "./Footer";
import LanguageToggle from "@/components/LanguageToggle";
import ClientOnly from "@/components/ClientOnly";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  // Turn children into an array, pull out the first (HeroArea)
  const childArray = Children.toArray(children);
  const [hero, ...rest] = childArray;

  return (
    <>
      <ClientOnly>
        <Header />
        <div className="flex justify-end p-4 bg-gray-50 border-b">
          <LanguageToggle />
        </div>
      </ClientOnly>

      {/* Full‑width Hero */}
      <div>{hero}</div>

      {/* Everything else inside a max‑width container */}
      <main className="max-w-7xl mx-auto px-4 py-8 min-h-[80vh]">
        {rest.map((c, i) =>
          // preserve element type & props
          isValidElement(c) ? (
            <div key={i}>{c}</div>
          ) : (
            <div key={i}>{c}</div>
          )
        )}
      </main>

      <Footer />
    </>
  );
}
