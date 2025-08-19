import { useTranslation } from "react-i18next";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const { t, i18n } = useTranslation();

  const switchLang = () => {
    const newLang = i18n.language === "en" ? "fa" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <header
      className="flex justify-between items-center px-6 py-4
      bg-white/80 dark:bg-gray-900/80 backdrop-blur
        border-b border-black/10 dark:border-white/10
      text-gray-900 dark:text-white"
    >
      <h1 className="text-xl font-bold text-gray-900 dark:text-white">
        DevShe
      </h1>

      <nav className="flex items-center gap-4">
        <a
          href="/"
          className="hover:underline text-gray-700 dark:text-gray-200"
        >
          {t("home")}
        </a>
        <a
          href="/about"
          className="hover:underline text-gray-700 dark:text-gray-200"
        >
          {t("about")}
        </a>
        <a
          href="/projects"
          className="hover:underline text-gray-700 dark:text-gray-200"
        >
          {t("projects")}
        </a>
        <a
          href="/contact"
          className="hover:underline text-gray-700 dark:text-gray-200"
        >
          {t("contact")}
        </a>

        <ThemeToggle className="ml-2" />

        <button
          onClick={switchLang}
          className="ml-2 text-xs px-2.5 py-1 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 text-gray-800 dark:text-gray-200"
        >
          {i18n.language === "en" ? "FA" : "EN"}
        </button>
      </nav>
    </header>
  );
}
