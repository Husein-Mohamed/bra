"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const Docs = () => {
  const { t } = useTranslation("docs");

  const pageVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={pageVariant}
      className="w-full py-20 lg:py-30"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-16">
          {/* ACT */}
          <div className="flex flex-col overflow-clip rounded-xl border border-gray-300 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
            <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
              <img
                src="/images/Awareness Campaign-01.png"
                alt="Awareness Campaign"
                className="aspect-[16/9] h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4 px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <Badge variant="outline" className="text-zinc-700 font-medium">
                {t("actBadge")}
              </Badge>
              <h3 className="text-lg font-semibold md:text-2xl">{t("actTitle")}</h3>
              <p className="text-muted-foreground text-justify lg:text-lg">
                {t("actDescription")}
              </p>
              <div className="flex flex-row space-x-8">
                <a href="/docs/act/Somalia Data Protection Act-2.pdf" download>
                  <Button size="lg" className="group gap-4">
                    <span>{t("downloadEnglish")}</span>
                    <ArrowDown
                      className="opacity-60 group-hover:translate-y-0.5"
                      size={16}
                    />
                  </Button>
                </a>
                <a
                  href="/docs/act/Soo Gudbin Qaraar Gole ( Ansixinta Sharciga Dhowrista Xogta Dadweynaha )_0001.pdf"
                  download
                >
                  <Button size="lg" variant="outline" className="group gap-4">
                    <span>{t("downloadSomali")}</span>
                    <ArrowDown
                      className="opacity-60 group-hover:translate-y-0.5"
                      size={16}
                    />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* REGULATIONS */}
          <div className="flex flex-col-reverse overflow-clip rounded-xl border border-gray-300 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
            <div className="flex flex-col justify-center space-y-4 px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <Badge variant="outline" className="text-zinc-700 font-medium">
                {t("regBadge")}
              </Badge>
              <h3 className="text-lg font-semibold md:text-2xl">{t("regTitle")}</h3>
              <p className="text-muted-foreground text-justify lg:text-lg">
                {t("regDescription")}
              </p>
              <div className="flex flex-row space-x-8">
                <a href="/docs/regulations/DPA implementation.pdf" download>
                  <Button size="lg" className="group gap-4">
                    <span>{t("downloadEnglish")}</span>
                    <ArrowDown
                      className="opacity-60 group-hover:translate-y-0.5"
                      size={16}
                    />
                  </Button>
                </a>
              </div>
            </div>
            <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
              <img
                src="/images/Enforcement and Compliance-01.png"
                alt="Enforcement and Compliance"
                className="aspect-[16/9] h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* PROCEDURES */}
          <div className="flex flex-col overflow-clip rounded-xl border border-gray-300 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
            <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
              <img
                src="/images/Regulation-01.png"
                alt="Regulation Procedures"
                className="aspect-[16/9] h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4 px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <Badge variant="outline" className="text-zinc-700 font-medium">
                {t("procBadge")}
              </Badge>
              <h3 className="text-lg font-semibold md:text-2xl">{t("procTitle")}</h3>
              <p className="text-muted-foreground text-justify lg:text-lg">
                {t("procDescription")}
              </p>
              <div className="flex flex-row space-x-8">
                <a href="/docs/procedures/ADR PROCEDURE .pdf" download>
                  <Button size="lg" className="group gap-4">
                    <span>{t("downloadEnglish")}</span>
                    <ArrowDown
                      className="opacity-60 group-hover:translate-y-0.5"
                      size={16}
                    />
                  </Button>
                </a>
                <a href="/docs/procedures/xalinta khilaafaadyada.pdf" download>
                  <Button size="lg" variant="outline" className="group gap-4">
                    <span>{t("downloadSomali")}</span>
                    <ArrowDown
                      className="opacity-60 group-hover:translate-y-0.5"
                      size={16}
                    />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Docs;
