// src/hooks/header.tsx
"use client";

import React, { ReactNode, useState } from "react";
import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Mail, Menu, Building, Users, Target, MessageSquare, Heart, BookOpen, FileText, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useTranslation } from "react-i18next";

/* ---------- Brand palette ---------- */
const BRAND = {
  navy: "#080c2c",
  blue: "#47BDFF",
};

type MenuItem = { title: string; icon: ReactNode; href: string };

export default function Header() {
  const { t, i18n } = useTranslation("header");
  const [mobileOpen, setMobileOpen] = useState(false);
  const isSo = i18n.language === "so";

  /* ---------- Sub-menu: Authority ---------- */
  const subMenuAuthority: MenuItem[] = [
    { title: t("aboutUs"), icon: <Building className="w-5 h-5" />, href: "/about" },
    { title: t("contactUs"), icon: <Mail className="w-5 h-5" />, href: "/contact" },
  ];

  /* ---------- Sub-menu: Departments ---------- */
  const subMenuDepartments: MenuItem[] = [
    { title: "Admin & Finance", icon: <Building className="w-5 h-5" />, href: "/departments/admin-finance" },
    { title: "HRM", icon: <Users className="w-5 h-5" />, href: "/departments/hrm" },
    { title: "Planning", icon: <Target className="w-5 h-5" />, href: "/departments/planning" },
    { title: "Media & Communication", icon: <MessageSquare className="w-5 h-5" />, href: "/departments/media-communication" },
    { title: "Health & Human Service", icon: <Heart className="w-5 h-5" />, href: "/departments/health-human-service" },
    { title: "Education", icon: <BookOpen className="w-5 h-5" />, href: "/departments/education" },
    // { title: "URF", icon: <FileText className="w-5 h-5" />, href: "/departments/urf" },
    // { title: "INF", icon: <ClipboardList className="w-5 h-5" />, href: "/departments/inf" },
  ];

  /* Main links */
  const navLinks = [
    { key: "services", slug: "services" },
    { key: "Projects", slug: "projects" },
    { key: "Gallery", slug: "gallery" },
    { key: "newsAndMedia", slug: "news" },
  ];

  /* Typography adjustments */
  const navWrapperClasses = isSo ? "px-3 py-1 text-[11px] sm:text-xs" : "px-4 md:px-8 py-3";
  const linkPadding = isSo ? "px-2 py-1 text-[11px] sm:text-sm" : "px-3 py-2 text-xs md:text-sm";

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full bg-white shadow">

      {/* ---------- Main nav ---------- */}
      <div className="w-full">
        <div className={`max-w-7xl mx-auto flex items-center justify-between ${navWrapperClasses}`}>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src="/images/Logo/BRALOGO.png"
              alt="BRA Logo"
              className={isSo ? "w-10 md:w-15" : "w-10 md:w-15 xl:w-20 mr-40 pl-4"}
              loading="lazy"
            />
          </Link>

          {/* ---------- Desktop Navigation ---------- */}
          <nav className="hidden lg:block flex-1">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-1">

                {/* Home */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/"
                    className={`${linkPadding} whitespace-nowrap text-[${BRAND.navy}] hover:text-[${BRAND.blue}]`}
                  >
                    {t("home")}
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* ---------- The Authority Dropdown ---------- */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`${linkPadding} whitespace-nowrap text-[${BRAND.navy}] hover:text-[${BRAND.blue}]`}
                  >
                    {t("theAuthority")}
                  </NavigationMenuTrigger>

                  <NavigationMenuContent className="!w-[200px]">
                    {subMenuAuthority.map(({ title, href, icon }) => (
                      <NavigationMenuLink
                        key={title}
                        href={href}
                        className={`flex items-center gap-2 px-3 py-2 text-[${BRAND.navy}] hover:text-[${BRAND.blue}]`}
                      >
                        {icon} <span>{title}</span>
                      </NavigationMenuLink>
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* ---------- Departments Dropdown ---------- */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`${linkPadding} whitespace-nowrap text-[${BRAND.navy}] hover:text-[${BRAND.blue}]`}
                  >
                    {t("Departments")}
                  </NavigationMenuTrigger>

                  <NavigationMenuContent className="!w-[240px]">
                    {subMenuDepartments.map(({ title, href, icon }) => (
                      <NavigationMenuLink
                        key={title}
                        href={href}
                        className={`flex items-center gap-2 px-3 py-2 text-[${BRAND.navy}] hover:text-[${BRAND.blue}]`}
                      >
                        {icon} <span>{title}</span>
                      </NavigationMenuLink>
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* ---------- Remaining Single Links ---------- */}
                {navLinks.map(({ key, slug }) => (
                  <NavigationMenuItem key={key}>
                    <NavigationMenuLink
                      href={`/${slug}`}
                      className={`${linkPadding} whitespace-nowrap text-[${BRAND.navy}] hover:text-[${BRAND.blue}]`}
                    >
                      {t(key as any)}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}

              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* ---------- Desktop Actions ---------- */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            <LanguageSwitcher />
          </div>

          {/* ---------- Mobile Menu ---------- */}
          <div className="lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu size={20} />
                </Button>
              </SheetTrigger>

              <SheetContent className="bg-white dark:bg-zinc-900">
                <SheetHeader>
                  <SheetTitle>
                    <img src="/images/Logo/BRALOGO.jpg" alt="BRA Logo" className="w-24" />
                  </SheetTitle>
                </SheetHeader>

                {/* ---------- Mobile Links ---------- */}
                <div className="mt-4 flex flex-col gap-2 text-[13px]">

                  <Link href="/" onClick={() => setMobileOpen(false)} className="px-2 py-1">
                    {t("home")}
                  </Link>

                  {/* Authority Accordion */}
                  <Accordion type="single" collapsible>
                    <AccordionItem value="authority">
                      <AccordionTrigger className="py-0">{t("theAuthority")}</AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-1">
                        {subMenuAuthority.map(({ title, href }) => (
                          <Link
                            key={title}
                            href={href}
                            onClick={() => setMobileOpen(false)}
                            className="px-2 py-1"
                          >
                            {title}
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  {/* Departments Accordion */}
                  <Accordion type="single" collapsible>
                    <AccordionItem value="departments">
                      <AccordionTrigger className="py-0">{t("Departments")}</AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-1">
                        {subMenuDepartments.map(({ title, href }) => (
                          <Link
                            key={title}
                            href={href}
                            onClick={() => setMobileOpen(false)}
                            className="px-2 py-1"
                          >
                            {title}
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  {/* Remaining links */}
                  {navLinks.map(({ key, slug }) => (
                    <Link
                      key={key}
                      href={`/${slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="px-2 py-1"
                    >
                      {t(key as any)}
                    </Link>
                  ))}
                </div>

                {/* Footer Buttons */}
                <div className="mt-4 flex flex-col gap-2">
                  <LanguageSwitcher />
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  );
}