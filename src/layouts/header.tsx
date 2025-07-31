"use client";
import type { ReactNode } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  DatabaseZap,
  Facebook,
  FileText,
  FolderSearch,
  Instagram,
  Landmark,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircleWarning,
  Phone,
  UserPenIcon,
  Users,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TbBrandX } from "react-icons/tb";
import { Button } from "../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components/ui/navigation-menu";

type MenuItem = {
  title: string;
  icon: ReactNode;
  href: string;
};

export default function Header() {
  const { t } = useTranslation("header");
  const [mobileOpen, setMobileOpen] = useState(false);

  const subMenuAuthority = [
    {
      title: t("aboutUs"),
      icon: <Landmark className="size-5 shrink-0" />,
      href: "/about",
    },
    {
      title: t("contactUs"),
      icon: <Mail className="size-5 shrink-0" />,
      href: "/contact",
    },
  ];

  const subMenuResources: MenuItem[] = [];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow">
      {/* Top Info Bar */}
      <div className="bg-[#080c2c] w-full">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 md:px-8 py-2 text-xs sm:text-sm text-white gap-2">
          <div className="flex items-center gap-3">
            <Mail size={16} />
            <span>info@dpa.gov.so</span>
            <MapPin size={16} className="ml-4" />
            <span>Mogadisho, Soomaaliya , Wadada Garoonka Aden Adde</span>
          </div>
          <div className="flex items-center gap-3 mt-2 sm:mt-0">
            <a href="https://www.facebook.com/dpasomalia" target="_blank" rel="noopener">
              <Facebook size={18} className="hover:opacity-80" />
            </a>
            <a href="https://www.instagram.com/dpa.somalia?igsh=MXF3OXV0dGhwMWdhZw==" target="_blank" rel="noopener">
              <Instagram size={18} className="hover:opacity-80" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener">
              <Linkedin size={18} className="hover:opacity-80" />
            </a>
            <a href="https://x.com/DPASomalia?t=3dOIvSz32hqJKCc9tcABZA&s=09" target="_blank" rel="noopener">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-none bg-transparent text-white hover:opacity-80 hover:text-[#061829]"
              >
                <TbBrandX className="h-4 w-4" />
                <span className="sr-only">X (Twitter)</span>
              </Button>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener">
              <Youtube size={18} className="hover:opacity-80" />
            </a>
            {/* CALL US next to social media */}
            <div className="flex items-center text-gray-200 ml-2 whitespace-nowrap">
              <Phone size={16} />
              <span className="text-sm font-medium ml-2">452</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 md:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/images/Logo/DPA LOGO-01.png"
              alt="DPA logo"
              className="w-28 md:w-32 xl:w-36"
              loading="lazy"
              draggable={false}
              style={{ imageRendering: "auto" }}
            />
          </Link>
          {/* Desktop Nav */}
          <nav className="relative hidden lg:flex items-center gap-3 flex-1 justify-center">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-3">
                {/* Home */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/"
                    className="px-3 py-2 text-xs md:text-sm font-medium rounded-md transition hover:bg-gray-100 whitespace-nowrap"
                  >
                    {t("home")}
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* The Authority dropdown (About + Contact only) */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-xs md:text-sm font-medium whitespace-nowrap">
                    {t("theAuthority") || "The Authority"}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="!w-[300px] p-2">
                    <div className="flex flex-col gap-1">
                      {subMenuAuthority.map((item) => (
                        <NavigationMenuLink
                          key={item.title}
                          href={item.href}
                          className="flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-50 whitespace-nowrap"
                        >
                          {item.icon}
                          <span className="whitespace-nowrap">
                            {item.title}
                          </span>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Services as a top-level link (NO DROPDOWN!) */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/services"
                    className="px-3 py-2 text-xs md:text-sm font-medium rounded-md transition hover:bg-gray-100 whitespace-nowrap"
                  >
                    {t("services")}
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Resources as a top-level link */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/resources"
                    className="px-3 py-2 text-xs md:text-sm font-medium rounded-md transition hover:bg-gray-100 whitespace-nowrap"
                  >
                    {t("resources")}
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Laws & Policies (top-level link) */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/laws-policies"
                    className="px-3 py-2 text-xs md:text-sm font-medium rounded-md transition hover:bg-gray-100 whitespace-nowrap"
                  >
                    {t("lawsAndPolicies")}
                  </NavigationMenuLink>
                </NavigationMenuItem>
                {/* Citizen Rights (top-level link) */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/citizen-rights"
                    className="px-3 py-2 text-xs md:text-sm font-medium rounded-md transition hover:bg-gray-100 whitespace-nowrap"
                  >
                    {t("citizenRights")}
                  </NavigationMenuLink>
                </NavigationMenuItem>
                {/* News & Media */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/news"
                    className="px-3 py-2 text-xs md:text-sm font-medium rounded-md transition hover:bg-gray-100 whitespace-nowrap"
                  >
                    {t("newsAndMedia")}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button size="sm" variant="outline" className="whitespace-nowrap">
              {t("reportABreach")}
            </Button>
            <Button
              size="sm"
              className="bg-[#061829] text-white whitespace-nowrap"
            >
              {t("registerNow")}
            </Button>
          </div>
          {/* LanguageSwitcher always at far right */}
          <div className="hidden lg:flex items-center ml-4">
            <LanguageSwitcher />
          </div>
          {/* Mobile Nav Button */}
          <div className="lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline">
                  <Menu size={22} />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-white overflow-y-auto">
                <SheetHeader className="border-b border-gray-200 pb-4">
                  <SheetTitle>
                    <img
                      src="/images/Logo/DPA LOGO-01.png"
                      alt="DPA logo"
                      className="w-auto max-w-[140px]"
                    />
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-6 flex flex-col gap-4">
                  <Link
                    href="/"
                    className="font-medium"
                    onClick={() => setMobileOpen(false)}
                  >
                    {t("home")}
                  </Link>
                  {/* The Authority dropdown - mobile */}
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="theAuthority">
                      <AccordionTrigger className="py-0 text-md font-medium">
                        {t("theAuthority") || "The Authority"}
                      </AccordionTrigger>
                      <AccordionContent className="mt-2 flex flex-col gap-2">
                        {subMenuAuthority.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className={cn(
                              "flex gap-3 items-center rounded-md p-2 hover:bg-accent hover:text-accent-foreground whitespace-nowrap"
                            )}
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.icon}
                            <span className="text-sm">{item.title}</span>
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  {/* Services as a top-level link, not dropdown */}
                  <Link
                    href="/services"
                    className="font-medium"
                    onClick={() => setMobileOpen(false)}
                  >
                    {t("services")}
                  </Link>
                  {/* Resources as a top-level link, not dropdown */}
                  <Link
                    href="/resources"
                    className="font-medium"
                    onClick={() => setMobileOpen(false)}
                  >
                    {t("resources")}
                  </Link>
                  {/* Standalone links */}
                  <Link
                    href="/laws-policies"
                    className="font-medium"
                    onClick={() => setMobileOpen(false)}
                  >
                    {t("lawsAndPolicies")}
                  </Link>
                  <Link
                    href="/citizen-rights"
                    className="font-medium"
                    onClick={() => setMobileOpen(false)}
                  >
                    {t("citizenRights")}
                  </Link>
                  <Link
                    href="/news"
                    className="font-medium"
                    onClick={() => setMobileOpen(false)}
                  >
                    {t("newsAndMedia")}
                  </Link>
                </div>
                {/* Mobile Action Buttons */}
                <div className="border-t border-gray-300 py-4 mt-4 flex flex-col gap-3">
                  <Link href="/contact" onClick={() => setMobileOpen(false)}>
                    <Button variant="outline" className="w-full">
                      {t("getInTouch")}
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="w-full whitespace-nowrap"
                  >
                    {t("reportABreach")}
                  </Button>
                  <Button className="bg-[#061829] text-white w-full whitespace-nowrap">
                    {t("registerNow")}
                  </Button>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <LanguageSwitcher />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
