// src/components/LanguageToggle.tsx
import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const current = i18n.language;

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => i18n.changeLanguage("en")}
        className={`px-2 py-1 rounded ${
          current === "en" ? "bg-blue-600 text-white" : "bg-gray-200"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => i18n.changeLanguage("so")}
        className={`px-2 py-1 rounded ${
          current === "so" ? "bg-blue-600 text-white" : "bg-gray-200"
        }`}
      >
        SO
      </button>
    </div>
  );
}
