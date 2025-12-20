// src/pages/ResourcesPage.tsx
"use client";

import {
  FileText,
  FileStack,
  ArrowDownToLine,
  Users,
  ClipboardList,
  Lock,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import FaqSection from "@/components/ui/faq-section";

type LinkPair = { en: string; so: string };

interface Card {
  icon: React.ReactNode;
  title: string;
  desc: string;
  hint?: string;
  isRegistration?: boolean;
  links?: LinkPair;
  controllerLinks?: LinkPair;
  processorLinks?: LinkPair;
}

interface Category {
  title: string;
  cards: Card[];
}

export default function ResourcesPage() {
  const { t, i18n } = useTranslation("resources");
  const lang = i18n.language as "en" | "so";

  const categories: Category[] = [
    // Registration & Licensing
    {
      title: t("registrationLicensing.title"),
      cards: [
        {
          icon: <FileStack className="w-9 h-9 text-[#080c2c]" />,
          title: t("registrationForm.title"),
          desc: t("registrationForm.desc"),
          hint: t("registrationForm.hint"),
          isRegistration: true,
          controllerLinks: {
            en: "/docs/forms/Data Controller Form English.pdf",
            so: "/docs/forms/Somali Data Controller Form.pdf",
          },
          processorLinks: {
            en: "/docs/forms/Data Processor Form English.pdf",
            so: "/docs/forms/Somali Data Processor Form.pdf",
          },
        },
      ],
    },

    // Incident & Complaint
    {
      title: t("incidentsComplaints.title"),
      cards: [
        {
          icon: <ClipboardList className="w-9 h-9 text-[#080c2c]" />,
          title: t("rightsRequestForm.title"),
          desc: t("rightsRequestForm.desc"),
          hint: t("rightsRequestForm.hint"),
          links: {
            en: "/docs/forms/Data_Subject_Complaint_Form[1].pdf",
            so: "/docs/forms/Somali COMPLIANT FORM.pdf",
          },
        },
      ],
    },

    // Data Rights & Tools
    {
      title: t("dataRightsAndTools.title"),
      cards: [
        {
          icon: <FileText className="w-9 h-9 text-[#080c2c]" />,
          title: t("dpiaTemplate.title"),
          desc: t("dpiaTemplate.desc"),
          hint: t("dpiaTemplate.hint"),
          links: {
            en: "/docs/forms/DPIA.pdf",
            so: "/docs/forms/DPIA.pdf",
          },
        },
        {
          icon: <FileText className="w-9 h-9 text-[#080c2c]" />,
          title: t("riskTools.title"),
          desc: t("riskTools.desc"),
          hint: t("riskTools.hint"),
          links: {
            en: "/docs/forms/ropa.xlsx",
            so: "/docs/forms/ropa.xlsx",
          },
        },
      ],
    },

    // Guidance Documents
    {
      title: t("guidance.title"),
      cards: [
        // existing guides
        {
          icon: <Users className="w-9 h-9 text-[#080c2c]" />,
          title: t("orgComplianceGuide.title"),
          desc: t("orgComplianceGuide.desc"),
          hint: t("orgComplianceGuide.hint"),
          links: {
            en: "/docs/forms/Data Protection Compliance Guide For Organizations - Download Document.pdf",
            so: "/docs/forms/Data Protection Compliance Guide For Organizations - Download Document.pdf",
          },
        },
        {
          icon: <Users className="w-9 h-9 text-[#080c2c]" />,
          title: t("publicGuide.title"),
          desc: t("publicGuide.desc"),
          hint: t("publicGuide.hint"),
          links: {
            en: "/docs/forms/Data Protection Guide For Public - Download Document.pdf",
            so: "/docs/forms/Data Protection Guide For Public - Download Document.pdf",
          },
        },
        // newly detailed guidance documents
        {
          icon: <FileText className="w-9 h-9 text-[#080c2c]" />,
          title: t("guidanceNoteRegistration.title"),
          desc:  t("guidanceNoteRegistration.desc"),
          hint: t("guidanceNoteRegistration.hint"),
          links: {
            en: "/docs/forms/GUIDANCE NOTE ON REGISTRATION OF DATA CONTROLLERS AND DATA PROCESSORS.pdf",
            so: "/docs/forms/GUIDANCE NOTE ON REGISTRATION OF DATA CONTROLLERS AND DATA PROCESSORS.pdf",
          },
        },
        {
          icon: <FileText className="w-9 h-9 text-[#080c2c]" />,
          title: t("dpaGuidance.title"),
          desc:  t("dpaGuidance.desc"),
          hint: t("dpaGuidance.hint"),
          links: {
            en: "/docs/forms/DPA Guidance.pdf",
            so: "/docs/forms/Guidlines Af Soomaali.pdf",
          },
        },
        {
          icon: <FileText className="w-9 h-9 text-[#080c2c]" />,
          title: t("adrForDataProtection.title"),
          desc:  t("adrForDataProtection.desc"),
          hint: t("adrForDataProtection.hint"),
          links: {
            en: "/docs/forms/ADR PROCEDURE .pdf",
            so: "/docs/forms/ADR PROCEDURE .pdf",
          },
        },
        {
          icon: <FileText className="w-9 h-9 text-[#080c2c]" />,
          title: t("dpaImplementation.title"),
          desc:  t("dpaImplementation.desc"),
          hint: t("dpaImplementation.hint"),
          links: {
            en: "/docs/forms/DPA implementation.pdf",
            so: "/docs/forms/DPA implementation.pdf",
          },
        },
        {
          icon: <FileText className="w-9 h-9 text-[#080c2c]" />,
          title: t("dataProtectionAct.title"),
          desc:  t("dataProtectionAct.desc"),
          hint: t("dataProtectionAct.hint"),
          links: {
            en: "/docs/forms/the_data_protection_act_003_2023_en.pdf",
            so: "/docs/forms/the_data_protection_act_003_2023_so.pdf",
          },
        },
      ],
    },

    // Data Protection by Design & Default
    {
      title: t("designDefault.title"),
      cards: [
        {
          icon: <FileText className="w-9 h-9 text-[#080c2c]" />,
          title: t("designDefaultDoc.title"),
          desc: t("designDefaultDoc.desc"),
          links: {
            en: "/docs/forms/DP By Design and By Default.pdf",
            so: "/docs/forms/DP By Design and By Default.pdf",
          },
        },
      ],
    },

    // Data Breach & Notifications
    {
      title: t("breachNotification.title"),
      cards: [
        {
          icon: <FileText className="w-9 h-9 text-[#080c2c]" />,
          title: t("breachNotificationDoc.title"),
          desc: t("breachNotificationDoc.desc"),
          links: {
            en: "/docs/forms/Data-Breach-Report-and-Notification.pdf",
            so: "/docs/forms/Data-Breach-Report-and-Notification.pdf",
          },
        },
      ],
    },

    // Complaints & Z-Cards
    {
      title: t("complaintsZcards.title"),
      cards: [
        {
          icon: <FileText className="w-9 h-9 text-[#080c2c]" />,
          title: t("complaintFormDoc.title"),
          desc: t("complaintFormDoc.desc"),
          links: {
            en: "/docs/forms/Data_Subject_Complaint_Form[1].pdf",
            so: "/docs/forms/Data_Subject_Complaint_Form[1].pdf",
          },
        },
        {
          icon: <FileText className="w-9 h-9 text-[#080c2c]" />,
          title: t("zcardSubjects.title"),
          desc: t("zcardSubjects.desc"),
          links: {
            en: "/docs/forms/Data-Subjects-Rights-and-Complaints-Procedure.-Z-Card.pdf",
            so: "/docs/forms/Data-Subjects-Rights-and-Complaints-Procedure.-Z-Card.pdf",
          },
        },
        {
          icon: <FileText className="w-9 h-9 text-[#080c2c]" />,
          title: t("zcardControllers.title"),
          desc: t("zcardControllers.desc"),
          links: {
            en: "/docs/forms/Data-Controllers-360-Degrees-Compliance-Requirements.-Z-Card.pdf",
            so: "/docs/forms/Data-Controllers-360-Degrees-Compliance-Requirements.-Z-Card.pdf",
          },
        },
      ],
    },
  ];

  // FAQ
  const { t: tf } = useTranslation("faq");
  const faqItems = tf("faqs", { returnObjects: true }) as {
    question: string;
    answer: string;
  }[];

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
              <FileStack className="w-32 h-24 text-white/20" />
              <Lock className="w-14 h-14 text-blue-300/40 absolute bottom-0 right-0 translate-x-3 translate-y-2 bg-white rounded-full p-1 border" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 pt-8">
        {categories.map((cat, idx) => (
          <div key={idx} className="mb-12">
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
                    <div className="flex-1">
                      <div className="font-semibold text-lg text-[#0d122b]">
                        {card.title}
                      </div>
                      <div className="text-sm text-gray-600">{card.desc}</div>
                      {card.hint && (
                        <div className="text-xs text-gray-400">{card.hint}</div>
                      )}
                    </div>
                  </div>

                  {/* Registration: two buttons */}
                  {card.isRegistration ? (
                    <div className="mt-4 flex gap-4">
                      <a
                        href={card.controllerLinks![lang]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <button className="w-full border-2 px-5 py-1.5 rounded-lg text-sm font-semibold text-white bg-[#080c2c] hover:bg-[#003366] transition">
                          {t("registrationForm.controllerBtn")}
                        </button>
                      </a>
                      <a
                        href={card.processorLinks![lang]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <button className="w-full border-2 px-5 py-1.5 rounded-lg text-sm font-semibold text-white bg-[#080c2c] hover:bg-[#003366] transition">
                          {t("registrationForm.processorBtn")}
                        </button>
                      </a>
                    </div>
                  ) : (
                    <a
                      href={card.links![lang]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto mt-4"
                    >
                      <button className="border-2 px-5 py-1.5 rounded-lg text-sm flex items-center gap-2 font-semibold transition text-white bg-[#080c2c] hover:bg-[#003366] hover:border-[#003366]">
                        <ArrowDownToLine className="w-4 h-4" />
                        {t("downloadBtn")}
                      </button>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* FAQ */}
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
