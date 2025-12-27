import { useTranslation } from "react-i18next";
import { Sun, Moon, Globe2 } from "lucide-react";
import { NavLink } from "react-router-dom";
import useThemeStore from "../store/themeStore";

export default function Header() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useThemeStore();
  const isFa = i18n.language === "fa";
  const isDark = theme === "dark";

  const navClass = ({ isActive }) =>
    [
      "px-3 py-2 rounded-xl transition",
      isActive
        ? "bg-black/10 dark:bg-white/10 font-semibold"
        : "hover:bg-black/5 dark:hover:bg-white/10",
    ].join(" ");

  const setLang = (lang) => {
    if (lang === i18n.language) return;
    i18n.changeLanguage(lang);
  };

  return (
    <header
      className="flex justify-between items-center px-6 py-4
      bg-white/80 dark:bg-gray-900/80 backdrop-blur
      border-b border-black/5 dark:border-white/10 sticky top-0 z-50"
    >
      {/* Brand */}
      <NavLink to="/" className="font-extrabold tracking-tight text-lg">
        DevShe
      </NavLink>

      {/* Nav */}
      <nav className="flex items-center gap-2">
        <NavLink to="/" className={navClass}>
          {t("nav_home")}
        </NavLink>
        <NavLink to="/about" className={navClass}>
          {t("nav_about")}
        </NavLink>
        <NavLink to="/projects" className={navClass}>
          {t("nav_projects")}
        </NavLink>
        <NavLink to="/contact" className={navClass}>
          {t("nav_contact")}
        </NavLink>

        {/* Theme button (from store) */}
        <button
          onClick={toggleTheme}
          className="ml-2 p-2 rounded-xl border border-black/10 dark:border-white/15
                     bg-white/60 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10
                     text-gray-800 dark:text-gray-200 flex items-center justify-center"
          aria-label="Toggle theme"
          title="Toggle theme"
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        {/* Language segmented control */}
        <div
          role="tablist"
          aria-label="Language"
          className="ml-2 inline-flex items-center gap-1 rounded-2xl px-1 py-1
                     border border-black/10 dark:border-white/15
                     bg-white/70 dark:bg-white/5"
        >
          <Globe2
            size={14}
            className="mx-1.5 opacity-70 text-gray-700 dark:text-gray-300"
            aria-hidden="true"
          />

          <button
            role="tab"
            aria-selected={!isFa}
            onClick={() => setLang("en")}
            className={[
              "px-2.5 py-1 text-[11px] font-medium rounded-xl transition",
              !isFa
                ? "bg-gray-900 text-white dark:bg-white/90 dark:text-gray-900 shadow-sm"
                : "text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10",
            ].join(" ")}
          >
            EN
          </button>

          <button
            role="tab"
            aria-selected={isFa}
            onClick={() => setLang("fa")}
            className={[
              "px-2.5 py-1 text-[11px] font-medium rounded-xl transition",
              isFa
                ? "bg-gray-900 text-white dark:bg-white/90 dark:text-gray-900 shadow-sm"
                : "text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10",
            ].join(" ")}
          >
            FA
          </button>
        </div>
      </nav>
    </header>
  );
}
