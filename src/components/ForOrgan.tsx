// src/components/ForOrgan.tsx
"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";

/* ---------- Brand colours (keep in sync) ---------- */
const BRAND = { navy: "#080c2c", blue: "#47BDFF", indigo: "#003366" };

export default function ForOrgan() {
  const { t } = useTranslation("forOrgan");
  const [openObl, setOpenObl] = useState(false);
  const [openKnow, setOpenKnow] = useState(false);

  const cards = (t("cards", { returnObjects: true }) as any[]) || [];
  const obligationsLinks =
    (t("obligationsDialog.links", { returnObjects: true }) as any[]) || [];
  const knowDataLinks =
    (t("knowDataDialog.links", { returnObjects: true }) as any[]) || [];

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }
  };

  return (
    <section className="mil-Bg py-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="container mx-auto px-8"
      >
        {/* Badge + title */}
        <div className="flex flex-col space-y-6">
          <Badge
            variant="outline"
            className="justify-center border-[color:var(--tw-gradient-stops)] text-zinc-700"
            style={{ borderColor: BRAND.blue }}
          >
            {t("badge")}
          </Badge>
          <h1 className="xl:text-5xl lg:text-4xl md:text-5xl text-3xl font-bold tracking-wide">
            {t("heading")}
          </h1>
        </div>

        {/* Cards */}
        <div className="mt-20 grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.id}
              className="rounded-xl border border-indigo-100 bg-white/90 p-6 shadow-sm transition hover:shadow-lg"
            >
              {(card.id === "obligations" || card.id === "knowData") ? (
                <button
                  type="button"
                  onClick={() =>
                    card.id === "obligations" ? setOpenObl(true) : setOpenKnow(true)
                  }
                  className="group flex h-full w-full text-left"
                >
                  <CardInner {...card} />
                </button>
              ) : (
                <a href={card.href} className="group flex h-full">
                  <CardInner {...card} />
                </a>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Dialogs */}
      <InfoDialog
        open={openObl}
        onOpenChange={setOpenObl}
        title={t("obligationsDialog.title")}
        intro={t("obligationsDialog.intro")}
        links={obligationsLinks}
        cancelLabel={t("obligationsDialog.cancel")}
      />
      <InfoDialog
        open={openKnow}
        onOpenChange={setOpenKnow}
        title={t("knowDataDialog.title")}
        intro={t("knowDataDialog.intro")}
        links={knowDataLinks}
        cancelLabel={t("knowDataDialog.cancel")}
      />
    </section>
  );
}

/* ---------- Card inner ---------- */
function CardInner({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex w-full items-start gap-5">
      <span
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--tw-gradient-stops)] transition group-hover:rotate-[360deg]"
        style={{ background: BRAND.indigo }}
      >
        <FaArrowRight color="white" size={18} />
      </span>
      <div className="flex flex-col">
        <h2 className="text-lg font-extrabold group-hover:text-[color:var(--tw-gradient-stops)]"
            style={{ color: BRAND.indigo }}>
          {title}
        </h2>
        <p className="text-slate-700">{description}</p>
      </div>
    </div>
  );
}

/* ---------- Dialog ---------- */
function InfoDialog({
  open,
  onOpenChange,
  title,
  intro,
  links,
  cancelLabel
}: {
  open: boolean;
  onOpenChange: (o: boolean) => void;
  title: string;
  intro: string;
  links: { text: string; href: string }[];
  cancelLabel: string;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex flex-col p-0 sm:max-h-[80vh] sm:max-w-lg [&>button:last-child]:hidden rounded-2xl overflow-hidden">
        {/* top bar gradient */}
        <header
          className="px-6 py-5"
          style={{ background: `linear-gradient(135deg, ${BRAND.blue} 0%, ${BRAND.indigo} 100%)` }}
        >
          <DialogTitle className="text-2xl text-white">{title}</DialogTitle>
        </header>

        <div className="overflow-y-auto px-6 py-8 space-y-10">
          <p className="text-base">{intro}</p>
          <div className="flex flex-col space-y-6">
            {links.map((lnk) => (
              <a key={lnk.href} href={lnk.href}>
                <Button
                  size="lg"
                  variant="link"
                  className="group gap-4 px-0 text-lg font-semibold text-[color:var(--tw-gradient-stops)]"
                  style={{ color: BRAND.indigo }}
                >
                  {lnk.text}
                  <ArrowRight className="ms-1 transition-transform group-hover:translate-x-1" size={16} />
                </Button>
              </a>
            ))}
          </div>
        </div>

        <DialogFooter className="flex justify-end bg-gray-50 px-6 py-4">
          <DialogClose asChild>
            <Button
              size="lg"
              className="text-white"
              style={{ background: BRAND.indigo }}
            >
              {cancelLabel}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
