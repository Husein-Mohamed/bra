"use client";

import {
  Activity,
  Component,
  HomeIcon,
  Mail,
  Package,
  ScrollText,
  SunMoon,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Dock, DockIcon, DockItem, DockLabel } from "./ui/dock";

export function AppleStyleDock() {
  const { t } = useTranslation("dock");

  const data = [
    {
      title: t("home"),
      icon: <HomeIcon className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: t("products"),
      icon: <Package className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: t("components"),
      icon: <Component className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: t("activity"),
      icon: <Activity className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: t("changelog"),
      icon: <ScrollText className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: t("email"),
      icon: <Mail className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: t("theme"),
      icon: <SunMoon className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      href: "#",
    },
  ];

  return (
    <div className="absolute bottom-2 left-1/2 max-w-full -translate-x-1/2">
      <Dock className="items-end pb-3">
        {data.map((item, idx) => (
          <DockItem
            key={idx}
            className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800"
          >
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>{item.icon}</DockIcon>
          </DockItem>
        ))}
      </Dock>
    </div>
  );
}
