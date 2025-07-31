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

function Language() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang); // This will switch the language
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="lg" variant="outline" aria-label="Open account menu">
          <Globe className="h-6 w-4" strokeWidth={1.3} aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-64 p-2 bg-white border-gray-200/60">
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => handleLanguageChange("en")}>
            English
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleLanguageChange("so")}>
            Somali
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Language;
