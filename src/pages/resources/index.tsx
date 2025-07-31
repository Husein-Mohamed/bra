"use client";

import {
  FileText,
  FileStack,
  ArrowDownToLine,
  Users,
  ShieldCheck,
  ClipboardList,
  Lock,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import FaqSection from "@/components/ui/faq-section"; // adjust the import path!

export default function ResourcesPage() {
  const { t } = useTranslation("resources");

  const categories = [
    {
      title: t("registrationLicensing.title"),
      cards: [
        {
          icon: <FileStack className="w-9 h-9 text-[#080c2c]" />,
          title: t("registrationForm.title"),
          desc: t("registrationForm.desc"),
          hint: t("registrationForm.hint"),
          link: "/docs/forms/registration.pdf",
        },
        // Prior Authorization removed
      ],
    },
    {
      title: t("authorizationNotification.title"),
      cards: [
        {
          icon: <ShieldCheck className="w-9 h-9 text-[#080c2c]" />,
          title: t("authNotifForm2.title"),
          desc: t("authNotifForm2.desc"),
          hint: t("authNotifForm2.hint"),
          link: "/docs/forms/authorization2.pdf",
        },
      ],
    },
    {
      title: t("incidentsComplaints.title"),
      cards: [
        {
          icon: <ClipboardList className="w-9 h-9 text-[#080c2c]" />,
          title: t("rightsRequestForm.title"),
          desc: t("rightsRequestForm.desc"),
          hint: t("rightsRequestForm.hint"),
          link: "/docs/forms/rights-request.pdf",
        },
      ],
    },
    {
      title: t("dataRightsAndTools.title"),
      cards: [
        {
          icon: <FileText className="w-9 h-9 text-[#080c2c]" />,
          title: t("dpiaTemplate.title"),
          desc: t("dpiaTemplate.desc"),
          hint: t("dpiaTemplate.hint"),
          link: "/docs/forms/dpia-template.pdf",
        },
        {
          icon: <FileText className="w-9 h-9 text-[#080c2c]" />,
          title: t("riskTools.title"),
          desc: t("riskTools.desc"),
          hint: t("riskTools.hint"),
          link: "/docs/forms/ropa.xlsx",
        },
      ],
    },
    {
      title: t("guidance.title"),
      cards: [
        {
          icon: <Users className="w-9 h-9 text-[#080c2c]" />,
          title: t("orgComplianceGuide.title"),
          desc: t("orgComplianceGuide.desc"),
          hint: t("orgComplianceGuide.hint"),
          link: "/docs/forms/compliance-guide.pdf",
        },
        {
          icon: <Users className="w-9 h-9 text-[#080c2c]" />,
          title: t("publicGuide.title"),
          desc: t("publicGuide.desc"),
          hint: t("publicGuide.hint"),
          link: "/docs/forms/public-guide.pdf",
        },
      ],
    },
  ];

  // ---- FAQ data from faq namespace ----
  const { t: tf } = useTranslation("faq");
  const faqItems = tf("faqs", { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <main className="bg-[#f8fafc] min-h-screen pb-16 font-sans pt-[110px]">
      {/* Hero */}
      <section className="w-full bg-[#080c2c] pt-14 pb-10 mb-1">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
              <span className="text-white">Resources</span>{" "}
              <span className="text-blue-400">Center</span>
            </h1>
            <p className="text-lg text-white/90 max-w-2xl font-medium">
              {t("subtitle")}
            </p>
          </div>
          <div className="flex-shrink-0 flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              <FileText className="w-32 h-24 text-white/20" />
              <Lock className="w-14 h-14 text-blue-300/40 absolute bottom-0 right-0 translate-x-3 translate-y-2 bg-white rounded-full p-1 border" />
            </div>
          </div>
        </div>
      </section>

      {/* Resources by Category */}
      <section className="max-w-7xl mx-auto px-4 pt-8">
        {categories.map((cat, catIdx) => (
          <div key={catIdx} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-400">
              {cat.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {cat.cards.map((card, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-[0_2px_12px_0_rgba(90,114,255,0.06)] border border-gray-100 p-6 flex flex-col gap-2 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex gap-4 items-start">
                    {card.icon}
                    <div>
                      <div className="font-semibold text-lg text-[#0d122b]">
                        {card.title}
                      </div>
                      <div className="text-sm text-gray-600">{card.desc}</div>
                      {card.hint && (
                        <div className="text-xs text-gray-400">{card.hint}</div>
                      )}
                    </div>
                  </div>
                  <a
                    href={card.link}
                    className="ml-auto mt-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="border-2 px-5 py-1.5 rounded-lg text-sm flex items-center gap-2 font-semibold transition text-white bg-[#080c2c] hover:bg-[#003366] hover:text-white hover:border-[#003366]">
                      <ArrowDownToLine className="w-4 h-4" />
                      {t("downloadBtn")}
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* FAQ Section */}
      <section className="bg-[#f2f2f2] mt-10">
        <div className="max-w-7xl mx-auto px-4 py-20 lg:py-30">
          <FaqSection
            title={tf("faqTitle")}
            description={tf("faqDescription")}
            items={faqItems}
            contactInfo={{
              title: tf("stillHaveQuestionsTitle"),
              description: tf("stillHaveQuestionsDescription"),
              buttonText: tf("contactSupportButton"),
              onContact: () => console.log("Contact support clicked"),
            }}
          />
        </div>
      </section>
    </main>
  );
}
