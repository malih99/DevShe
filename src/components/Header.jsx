import { useTranslation } from "react-i18next";
import useThemeStore from "../store/themeStore";
import { Moon, Sun } from "lucide-react";

export default function Header() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useThemeStore();

  const switchLang = () => {
    const newLang = i18n.language === "en" ? "fa" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 shadow-md">
      <h1 className="text-xl font-bold">DevShe</h1>
      <nav className="flex items-center gap-4">
        <a href="/" className="hover:underline">
          {t("home")}
        </a>
        <a href="/about" className="hover:underline">
          {t("about")}
        </a>
        <a href="/projects" className="hover:underline">
          {t("projects")}
        </a>
        <a href="/contact" className="hover:underline">
          {t("contact")}
        </a>

        <button onClick={toggleTheme} className="ml-4">
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        <button onClick={switchLang} className="ml-2 text-sm">
          {i18n.language === "en" ? "FA" : "EN"}
        </button>
      </nav>
    </header>
  );
}
