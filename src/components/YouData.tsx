// src/components/YourData.tsx
"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import {
  Eye,
  Edit2,
  Trash2,
  Slash,
  Lock,
  ArrowsRightLeft,
  Cpu,
  AlertCircle,
  KeyRound,
  Share2Off,
  CheckCircle2,
  WifiOff,
  FileText,
  UserPlus,
  AlertTriangle,
  Mail,
} from "lucide-react";

const ICONS = {
  Eye,
  Edit2,
  Trash2,
  Slash,
  Lock,
  ArrowsRightLeft,
  Cpu,
  AlertCircle,
  KeyRound,
  Share2Off,
  CheckCircle2,
  WifiOff,
};

const ACTION_ICONS = {
  "file-text": FileText,
  "user-plus": UserPlus,
  "alert-triangle": AlertTriangle,
  mail: Mail,
};

function pickIcon<M extends Record<string, React.ComponentType<any>>>(
  map: M,
  key: string,
  fallback: React.ComponentType<any>
) {
  return map[key] ?? fallback;
}

export default function YourData() {
  const { t } = useTranslation("yourData");

  // ---- Hero ribbon ----
  const badgeHero = t("badge");
  const headingHero = t("heading");
  const intro1 = t("intro1");
  const intro2 = t("intro2");

  // ---- Rights grid ----
  const rights = t<{ icon: keyof typeof ICONS; label: string }[]>(
    "rights",
    { returnObjects: true }
  );
  const learnMore = t("learnMore");

  // ---- Digital safety tips ----
  const tipsHeading = t("tipsHeading");
  const tipsIntro = t("tipsIntro");
  const tips = t<{ icon: keyof typeof ICONS; label: string }[]>(
    "tips",
    { returnObjects: true }
  );

  // ---- Take Action cards ----
  const actionsBlock = t<{
    badge: string;
    heading: string;
    items: Array<{
      icon: string;
      label: string;
      desc: string;
      link: string;
    }>;
    cta: string;
  }>("actions", { returnObjects: true });

  const { badge: badgeActions, heading: headingActions, items: actions, cta: actionCta } = actionsBlock;

  return (
    <section className="bg-white dark:bg-[#080C2C] text-[#010B2B] dark:text-gray-200">

      {/* Hero */}
      <div className="bg-[#080c2c] text-white py-16 text-center">
        <span className="block text-sm uppercase opacity-80">{badgeHero}</span>
        <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">{headingHero}</h2>
        <p className="mt-4 text-lg opacity-90">{intro1}</p>
        <p className="opacity-80">{intro2}</p>
      </div>

      {/* Rights grid */}
      <div className="container mx-auto px-4 pt-16 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {rights.map(({ icon, label }) => {
            const Icon = pickIcon(ICONS, icon, Eye);
            return (
              <div
                key={label}
                className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white dark:bg-[#0f173b]
                           border border-blue-100/70 dark:border-[#1E2552]/60 shadow-sm"
              >
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E8F1FF] dark:bg-[#13204a]">
                  <Icon className="w-5 h-5 text-blue-500" />
                </span>
                <p className="text-center text-sm font-medium">{label}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/citizen-rights"
            className="inline-block px-6 py-3 rounded-full bg-[#003366] hover:bg-[#00254d] text-white font-semibold transition"
          >
            {learnMore}
          </Link>
        </div>
      </div>

      {/* Take Action cards */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <span className="block text-sm uppercase opacity-80">{badgeActions}</span>
          <h3 className="mt-2 text-3xl font-extrabold">{headingActions}</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map(({ icon, label, desc, link }) => {
            const AIcon = pickIcon(ACTION_ICONS, icon, FileText);
            return (
              <Link
                key={label}
                href={link}
                className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white dark:bg-[#0f173b]
                           border border-gray-200 dark:border-[#1E2552] shadow-sm hover:shadow-md transition"
              >
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E8F1FF] dark:bg-[#13204a]">
                  <AIcon className="w-5 h-5 text-blue-500" />
                </span>
                <h4 className="text-lg font-semibold text-center">{label}</h4>
                <p className="text-center text-sm text-gray-600 dark:text-gray-300">{desc}</p>
                <span className="mt-auto inline-block px-4 py-2 text-sm font-semibold text-white bg-[#003366] rounded-full hover:bg-[#00254d] transition">
                  {actionCta}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Digital safety tips */}
      <div className="bg-gradient-to-b from-[#F9FBFF] to-[#E6EEFF] dark:from-[#111a40] dark:to-[#0e1538] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#010B2B] dark:text-white">
              {tipsHeading}
            </h3>
            <p className="mt-3 text-gray-700 dark:text-gray-300">{tipsIntro}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map(({ icon, label }) => {
              const Icon = pickIcon(ICONS, icon, Eye);
              return (
                <div
                  key={label}
                  className="flex flex-col items-center gap-4 p-6 rounded-3xl bg-white/70 dark:bg-[#1b264d]/70
                             backdrop-blur-md shadow-lg border border-white/60 dark:border-white/[0.08]
                             hover:-translate-y-1 hover:shadow-xl transition"
                >
                  <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E8F1FF] dark:bg-[#2a3470]">
                    <Icon className="w-5 h-5 text-blue-500" />
                  </span>
                  <p className="text-center text-sm font-medium">{label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
