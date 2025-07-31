import React from "react";
import { useTranslation } from "react-i18next";
import { FileText, Scale, Globe, PlusCircle } from "lucide-react";

export default function LawsAndPoliciesPage() {
  const { t } = useTranslation("lawsPolicies");
  const docs = t("docs", { returnObjects: true }) as any[];

  // Updated icon styles: all black
  const icons = [
    <FileText className="w-10 h-10 text-black" />,
    <Scale className="w-10 h-10 text-black" />,
    <FileText className="w-10 h-10 text-black" />,
    <Scale className="w-10 h-10 text-black" />,
    <FileText className="w-10 h-10 text-black" />,
    <Globe className="w-10 h-10 text-black" />,
    <Globe className="w-10 h-10 text-black" />,
    <PlusCircle className="w-10 h-10 text-black" />,
  ];

  return (
    <main className="bg-[#f7f7f8] min-h-screen pt-[92px] pb-10">
      {/* Hero section */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="bg-[#080c2c] rounded-xl py-16 px-6 md:px-24 mb-10 flex flex-col items-center justify-center text-center shadow-sm">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">
            <span className="text-white">{t("heroTitle").split(" ")[0]}</span>{" "}
            <span className="text-blue-400">{t("heroTitle").split(" ").slice(1).join(" ")}</span>
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">{t("heroSubtitle")}</p>
        </div>

        <h2 className="text-2xl font-bold mb-6">{t("keyLegal")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {docs.map((doc, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-white rounded-xl border border-gray-200 p-6 shadow hover:shadow-lg transition"
            >
              <div className="pt-2">{icons[i % icons.length]}</div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">{doc.title}</h3>
                <p className="text-gray-700 text-sm mb-3">{doc.desc}</p>
                <div className="flex gap-2">
                  {doc.enPdf && (
                    <a
                      href={doc.enPdf}
                      download
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center px-3 py-1.5 rounded text-white bg-[#080c2c] hover:bg-[#1e293b] text-xs font-semibold shadow-sm transition"
                    >
                      EN
                    </a>
                  )}
                  {doc.soPdf && (
                    <a
                      href={doc.soPdf}
                      download
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center px-3 py-1.5 rounded text-white bg-[#003366] hover:bg-[#1e40af] text-xs font-semibold shadow-sm transition"
                    >
                      SO
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold mb-3">{t("internationalStandards")}</h2>
        <p className="mb-8 text-gray-800">{t("internationalStandardsDesc")}</p>
        <hr className="my-8" />
        <p className="mb-4 text-gray-700">{t("formsFooter")}</p>
      </section>
    </main>
  );
}
