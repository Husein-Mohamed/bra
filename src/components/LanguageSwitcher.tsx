// src/components/LanguageSwitcher.tsx
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const LANGS = [
  { code: "en", label: "English" },
  { code: "so", label: "Somali" },
];

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = LANGS.find((l) => i18n.language.startsWith(l.code)) || LANGS[0];

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="lg"
          variant="outline"
          aria-label="Open language menu"
          className="flex items-center gap-2 px-3"
        >
          <Globe className="h-6 w-4" strokeWidth={1.3} aria-hidden="true" />
          <span className="font-semibold lowercase text-base">{currentLang.code}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-64 p-2 bg-white border-gray-200/60">
        <DropdownMenuGroup>
          {LANGS.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={currentLang.code === lang.code ? "font-semibold bg-gray-50" : ""}
            >
              {lang.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LanguageSwitcher;
