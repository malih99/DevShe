import { useTranslation } from "react-i18next";
import { Sun, Moon, Globe2 } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [dark, setDark] = useState(false);
  const isFa = i18n.language === "fa";

  // Init theme + dir based on stored prefs
  useEffect(() => {
    const root = document.documentElement;

    // theme
    const storedTheme = localStorage.getItem("theme");
    const isDark = storedTheme
      ? storedTheme === "dark"
      : root.classList.contains("dark");
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
    setDark(isDark);

    // lang/dir
    const lang = localStorage.getItem("lang") || i18n.language || "en";
    applyLang(lang);
  }, []); // eslint-disable-line

  const applyLang = (lang) => {
    const root = document.documentElement;
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    root.lang = lang;
    root.dir = lang === "fa" ? "rtl" : "ltr";
  };

  const setLang = (lang) => {
    if (lang === i18n.language) return;
    applyLang(lang);
  };

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = !dark;
    if (next) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    setDark(next);
  };

  return (
    <header
      className="flex justify-between items-center px-6 py-4
      bg-white/80 dark:bg-gray-900/80 backdrop-blur
      border-b border-black/5 dark:border-white/10 sticky top-0 z-50"
    >
      {/* Brand */}
      <a href="/" className="font-extrabold tracking-tight text-lg">
        DevShe
      </a>

      {/* Nav */}
      <nav className="flex items-center gap-2">
        <a
          href="/"
          className="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10"
        >
          {t("nav_home")}
        </a>
        <a
          href="/about"
          className="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10"
        >
          {t("nav_about")}
        </a>
        <a
          href="/projects"
          className="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10"
        >
          {t("nav_projects")}
        </a>
        <a
          href="/contact"
          className="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10"
        >
          {t("nav_contact")}
        </a>

        {/* Theme button */}
        <button
          onClick={toggleTheme}
          className="ml-2 p-2 rounded-xl border border-black/10 dark:border-white/15
                     bg-white/60 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10
                     text-gray-800 dark:text-gray-200 flex items-center justify-center"
          aria-label="Toggle theme"
          title="Toggle theme"
        >
          {dark ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        {/* Language segmented control */}
        <div
          role="tablist"
          aria-label="Language"
          className="ml-2 inline-flex items-center gap-1 rounded-2xl px-1 py-1
                     border border-black/10 dark:border-white/15
                     bg-white/70 dark:bg-white/5"
        >
          <span className="sr-only">Language</span>
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
