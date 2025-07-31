// src/components/Services.tsx
"use client";
import { useTranslation } from "react-i18next";
import { BentoCard, BentoGrid } from "./ui/bento-grid";
import { Badge } from "./ui/badge";
import {
  FileText,
  AlertTriangle,
  ClipboardList,
  ShieldCheck,
} from "lucide-react";

const ICONS = { FileText, AlertTriangle, ClipboardList, ShieldCheck } as const;

export default function Services() {
  const { t } = useTranslation("services");
  const cards = t("cards", { returnObjects: true }) as Array<{
    id: string;
    icon: keyof typeof ICONS;
    name: string;
    description: string;
    href: string;
    cta: string;
  }> || [];

  return (
    <section className="bg-white py-20 lg:py-30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-4 mb-12">
          <Badge variant="outline" className="text-zinc-700 font-medium">
            {t("badge")}
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight">
            {t("heading")}
          </h1>
        </div>

        <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {cards.map((card) => {
            const Icon = ICONS[card.icon] || FileText;
            return (
              <BentoCard
                key={card.id}
                Icon={Icon}
                name={card.name}
                description={card.description}
                href={card.href}
                cta={card.cta}
              />
            );
          })}
        </BentoGrid>
      </div>
    </section>
  );
}
