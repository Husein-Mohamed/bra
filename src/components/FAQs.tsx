"use client";

import { useTranslation } from "react-i18next";
import FaqSection from "./ui/faq-section";

export function FAQs() {
  const { t } = useTranslation("faq");

  // pull the array of FAQs from translations
  const items = t("faqs", { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <div className="bg-[#f2f2f2] w-full py-20 lg:py-30">
      <FaqSection
        title={t("faqTitle")}
        description={t("faqDescription")}
        items={items}
        contactInfo={{
          title: t("stillHaveQuestionsTitle"),
          description: t("stillHaveQuestionsDescription"),
          buttonText: t("contactSupportButton"),
          onContact: () => console.log("Contact support clicked"),
        }}
      />
    </div>
  );
}
