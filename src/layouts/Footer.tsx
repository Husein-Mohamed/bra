// // src/components/Footer.tsx
// "use client";

// import * as React from "react";
// import Link from "next/link";
// import { useTranslation } from "react-i18next";
// import { Button } from "../components/ui/button";
// import { Input } from "../components/ui/input";
// import {
//   CenterUnderline,
//   ComesInGoesOutUnderline,
// } from "../components/ui/underline-animation";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "../components/ui/tooltip";
// import { Send } from "lucide-react";
// import { TbBrandX } from "react-icons/tb";
// import { FiFacebook } from "react-icons/fi";
// import { FaInstagram } from "react-icons/fa";
// import { LuLinkedin } from "react-icons/lu";

// export default function Footer() {
//   const { t, i18n } = useTranslation("footer");
//   const L = t("links", { returnObjects: true }) as Record<string, string>;
//   const A = t("address", { returnObjects: true }) as Record<string, string>;

//   const openCookieModal = () => {
//     const cc = (window as any)._ccInstance;
//     if (cc && typeof cc.openSettingsModal === "function") {
//       cc.openSettingsModal();
//     }
//   };

//   return (
//     <footer className="relative border-t border-gray-700 bg-[#061829] text-white transition-colors duration-300">
//       <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">

//         {/* MAIN GRID */}
//         <div className="grid gap-12 md:grid-cols-3 lg:grid-cols-5">

//           {/* ================= QUICK LINKS ================= */}
//           <div>
//             <h3 className="mb-4 text-lg font-semibold">{t("quickLinks")}</h3>
//             <nav className="space-y-2 text-sm">
//               <a href="/" className="block">
//                 <CenterUnderline label={L.home} />
//               </a>
//               <a href="/about" className="block">
//                 <CenterUnderline label={L.about} />
//               </a>
//               <a href="/news" className="block">
//                 <CenterUnderline label={L.news} />
//               </a>
//               <a href="/" className="block">
//                 <CenterUnderline label={L.services} />
//               </a>
//               <a href="/contact" className="block">
//                 <CenterUnderline label={L.contact} />
//               </a>
//             </nav>
//           </div>

//           {/* ================= RESOURCES ================= */}
//           {/*
//           <div>
//             <h3 className="mb-4 text-lg font-semibold">{t("resources")}</h3>
//             <nav className="space-y-2 text-sm">
//               <a href="/docs" className="block">
//                 <CenterUnderline label={L.regulations} />
//               </a>
//               <a href="/ftp" className="block">
//                 <CenterUnderline label={L.public} />
//               </a>
//               <a href="/fto" className="block">
//                 <CenterUnderline label={L.orgs} />
//               </a>
//               <a href="/faqs" className="block">
//                 <CenterUnderline label={L.faqs} />
//               </a>
//             </nav>
//           </div>
//           */}

//           {/* ================= CONTACT US ================= */}
//           <div>
//             <h3 className="mb-4 text-lg font-semibold">{t("contactUs")}</h3>
//             <address className="not-italic space-y-2 text-sm">
//               <p>{A.line1}</p>
//               <p>{A.line2}</p>
//               <p>{A.email}</p>
//               <p>{A.phone}</p>
//             </address>
//           </div>

//           {/* ================= SPACER ================= */}
//           <div className="hidden lg:block"></div>

//           {/* ================= LOGO + SOCIAL + SUBSCRIBE (RIGHT SIDE) ================= */}
//           <div className="relative flex flex-col items-start lg:items-end text-right">

//             <img
//               src="/images/Logo/BRALOGO.PNG"
//               alt="Footer Logo"
//               className="max-w-[210px] sm:max-w-[150px] xs:max-w-[150px]"
//             />

//             <div className="mt-6 mb-6 flex space-x-4 lg:justify-end">
//               {/* Facebook */}
//               <TooltipProvider>
//                 <Tooltip>
//                   <TooltipTrigger asChild>
//                     <a
//                       href="https://www.facebook.com/GobolBanadir"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <Button
//                         size="icon"
//                         className="rounded-full bg-white text-[#061829] shadow-sm"
//                       >
//                         <FiFacebook className="h-4 w-4" />
//                         <span className="sr-only">Facebook</span>
//                       </Button>
//                     </a>
//                   </TooltipTrigger>
//                   <TooltipContent>
//                     <p className="text-black">{t("followUs")} Facebook</p>
//                   </TooltipContent>
//                 </Tooltip>
//               </TooltipProvider>

//               {/* X */}
//               <TooltipProvider>
//                 <Tooltip>
//                   <TooltipTrigger asChild>
//                     <a
//                       href="https://www.facebook.com/GobolBanadir"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <Button
//                         size="icon"
//                         className="rounded-full bg-white text-[#061829] shadow-sm"
//                       >
//                         <TbBrandX className="h-4 w-4" />
//                         <span className="sr-only">X</span>
//                       </Button>
//                     </a>
//                   </TooltipTrigger>
//                   <TooltipContent>
//                     <p className="text-black">{t("followUs")} X</p>
//                   </TooltipContent>
//                 </Tooltip>
//               </TooltipProvider>

//               {/* Instagram */}
//               <TooltipProvider>
//                 <Tooltip>
//                   <TooltipTrigger asChild>
//                     <a
//                       href="https://www.facebook.com/GobolBanadir"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <Button
//                         size="icon"
//                         className="rounded-full bg-white text-[#061829] shadow-sm"
//                       >
//                         <FaInstagram className="h-4 w-4" />
//                         <span className="sr-only">Instagram</span>
//                       </Button>
//                     </a>
//                   </TooltipTrigger>
//                   <TooltipContent>
//                     <p className="text-black">{t("followUs")} Instagram</p>
//                   </TooltipContent>
//                 </Tooltip>
//               </TooltipProvider>

//               {/* LinkedIn */}
//               <TooltipProvider>
//                 <Tooltip>
//                   <TooltipTrigger asChild>
//                     <a
//                       href="https://www.facebook.com/GobolBanadir"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <Button
//                         size="icon"
//                         className="rounded-full bg-white text-[#061829] shadow-sm"
//                       >
//                         <LuLinkedin className="h-4 w-4" />
//                         <span className="sr-only">LinkedIn</span>
//                       </Button>
//                     </a>
//                   </TooltipTrigger>
//                   <TooltipContent>
//                     <p className="text-black">{t("followUs")} LinkedIn</p>
//                   </TooltipContent>
//                 </Tooltip>
//               </TooltipProvider>
//             </div>

//             <form className="relative w-full max-w-xs">
//               <Input
//                 type="email"
//                 placeholder={t("links.contact")}
//                 className="pr-12 bg-transparent border border-white text-white placeholder-gray-300 focus:ring-white focus:border-white"
//               />
//               <Button
//                 type="submit"
//                 size="icon"
//                 className="absolute right-1 top-1 h-8 w-8 rounded-full bg-[#47BDFF] text-white hover:scale-105"
//               >
//                 <Send className="h-4 w-4" />
//                 <span className="sr-only">Subscribe</span>
//               </Button>
//             </form>

//           </div>

//         </div>

//         {/* ================= LEGAL LINKS ================= */}
//         <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
//           <p className="text-sm text-gray-300">{t("copyright")}</p>

//           <nav className="flex gap-4 text-sm">
//             <Link href="/privacy-policy" className="text-gray-300 hover:text-white">
//               <ComesInGoesOutUnderline label={L.privacy} />
//             </Link>

//             <Link href="/terms-of-service" className="text-gray-300 hover:text-white">
//               <ComesInGoesOutUnderline label={L.terms} />
//             </Link>

//             <button
//               onClick={openCookieModal}
//               className="text-gray-300 hover:text-white focus:outline-none"
//             >
//               <ComesInGoesOutUnderline label={L.cookies} />
//             </button>
//           </nav>
//         </div>

//       </div>
//     </footer>
//   );
// }


// src/components/Footer.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  CenterUnderline,
  ComesInGoesOutUnderline,
} from "../components/ui/underline-animation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";
import { Send } from "lucide-react";
import { TbBrandX } from "react-icons/tb";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";

export default function Footer() {
  const { t } = useTranslation("footer");
  const L = t("links", { returnObjects: true }) as Record<string, string>;

  // Updated BRA contact info
  const addressLines = {
    line1: "Aqalka Dowladda Hoose Xamarweyne",
    line2: "Mogadishu, Banaadir, Somalia"
  };

  const openCookieModal = () => {
    const cc = (window as any)._ccInstance;
    if (cc && typeof cc.openSettingsModal === "function") {
      cc.openSettingsModal();
    }
  };

  return (
    <footer className="relative border-t border-gray-700 bg-[#061829] text-white transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 grid-cols-1 md:grid-cols-3 lg:grid-cols-5">

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("quickLinks")}</h3>
            <nav className="space-y-2 text-sm">
              <a href="/" className="block"><CenterUnderline label={L.home} /></a>
              <a href="/about" className="block"><CenterUnderline label={L.about} /></a>
              <a href="/news" className="block"><CenterUnderline label={L.news} /></a>
              <a href="/" className="block"><CenterUnderline label={L.services} /></a>
              <a href="/contact" className="block"><CenterUnderline label={L.contact} /></a>
            </nav>
          </div>

          {/* Contact / Address */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("contactUs")}</h3>
            <address className="not-italic space-y-2 text-sm">
              <p>{addressLines.line1}</p>
              <p>{addressLines.line2}</p>
            </address>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block"></div>

          {/* Logo + Social + Subscribe (Right Side) */}
          <div className="flex flex-col items-start lg:items-end text-right">
            <img
              src="/images/Logo/BRALOGO.png"
              alt="BRA Logo"
              className="max-w-[210px] sm:max-w-[150px] xs:max-w-[150px]"
            />

            <div className="mt-6 mb-6 flex space-x-4 lg:justify-end">
              {/* ... social icons ... */}
              <TooltipProvider><Tooltip>
                <TooltipTrigger asChild>
                  <a href="https://www.facebook.com/GobolBanadir" target="_blank" rel="noopener noreferrer">
                    <Button size="icon" className="rounded-full bg-white text-[#061829] shadow-sm">
                      <FiFacebook className="h-4 w-4" /><span className="sr-only">Facebook</span>
                    </Button>
                  </a>
                </TooltipTrigger>
                <TooltipContent><p className="text-black">{t("followUs")} Facebook</p></TooltipContent>
              </Tooltip></TooltipProvider>

              <TooltipProvider><Tooltip>
                <TooltipTrigger asChild>
                  <a href="https://www.facebook.com/GobolBanadir" target="_blank" rel="noopener noreferrer">
                    <Button size="icon" className="rounded-full bg-white text-[#061829] shadow-sm">
                      <TbBrandX className="h-4 w-4" /><span className="sr-only">X</span>
                    </Button>
                  </a>
                </TooltipTrigger>
                <TooltipContent><p className="text-black">{t("followUs")} X</p></TooltipContent>
              </Tooltip></TooltipProvider>

              <TooltipProvider><Tooltip>
                <TooltipTrigger asChild>
                  <a href="https://www.facebook.com/GobolBanadir" target="_blank" rel="noopener noreferrer">
                    <Button size="icon" className="rounded-full bg-white text-[#061829] shadow-sm">
                      <FaInstagram className="h-4 w-4" /><span className="sr-only">Instagram</span>
                    </Button>
                  </a>
                </TooltipTrigger>
                <TooltipContent><p className="text-black">{t("followUs")} Instagram</p></TooltipContent>
              </Tooltip></TooltipProvider>

              <TooltipProvider><Tooltip>
                <TooltipTrigger asChild>
                  <a href="https://www.facebook.com/GobolBanadir" target="_blank" rel="noopener noreferrer">
                    <Button size="icon" className="rounded-full bg-white text-[#061829] shadow-sm">
                      <LuLinkedin className="h-4 w-4" /><span className="sr-only">LinkedIn</span>
                    </Button>
                  </a>
                </TooltipTrigger>
                <TooltipContent><p className="text-black">{t("followUs")} LinkedIn</p></TooltipContent>
              </Tooltip></TooltipProvider>
            </div>

            <form className="relative w-full max-w-xs">
              <Input
                type="email"
                placeholder={t("links.contact")}
                className="pr-12 bg-transparent border border-white text-white placeholder-gray-300 focus:ring-white focus:border-white"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-[#47BDFF] text-white hover:scale-105"
              >
                <Send className="h-4 w-4" /><span className="sr-only">Subscribe</span>
              </Button>
            </form>
          </div>

        </div>

        {/* Legal Links */}
        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-300">{t("copyright")}</p>

          <nav className="flex gap-4 text-sm">
            <Link href="/privacy-policy" className="text-gray-300 hover:text-white">
              <ComesInGoesOutUnderline label={L.privacy} />
            </Link>
            <Link href="/terms-of-service" className="text-gray-300 hover:text-white">
              <ComesInGoesOutUnderline label={L.terms} />
            </Link>
            <button
              onClick={openCookieModal}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <ComesInGoesOutUnderline label={L.cookies} />
            </button>
          </nav>
        </div>
      </div>
    </footer>
  );
}
