// pages/index.tsx  (or app/page.tsx)
"use client";
import HeroArea from "../components/Hero";
import About from "../components/About";
import ServicesForms from "../components/ServicesForms";
import YourData from "../components/YouData";
import AboutAi from "../components/AboutAi";
import Partners from "../components/Partners";
import LatestNewsDemo from "@/components/LatestNewsDemo";
import WhyDataProtectionMatters from "../components/WhyDataProtectionMatters";
export default function Home() {
  return (
    <>
      <HeroArea />
      <WhyDataProtectionMatters />    
      <About />
      <ServicesForms />
      <YourData />
      {/* <AboutAi /> */}
      <Partners />
      {/* <LatestNewsDemo /> */}
    </>
  );
}
