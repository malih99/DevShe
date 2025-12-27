import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import { Sun, Moon, Globe2, Menu, X } from "lucide-react";
import useThemeStore from "../store/themeStore";

export default function Header() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useThemeStore();
  const location = useLocation();

  const isFa = i18n.language === "fa";
  const isDark = theme === "dark";

  const [mobileOpen, setMobileOpen] = useState(false);
  const panelRef = useRef(null);

  const toggleLang = () => {
    const next = isFa ? "en" : "fa";
    i18n.changeLanguage(next);
  };

  const navClass = ({ isActive }) =>
    [
      "px-3 py-2 rounded-xl text-sm font-medium whitespace-nowrap",
      "transition-colors",
      "text-slate-700 dark:text-slate-200",
      isActive
        ? "bg-white/70 dark:bg-white/10 ring-1 ring-black/10 dark:ring-white/10"
        : "hover:bg-white/60 dark:hover:bg-white/10",
    ].join(" ");

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Close mobile menu on outside click + ESC
  useEffect(() => {
    const onDown = (e) => {
      if (!panelRef.current) return;
      if (!panelRef.current.contains(e.target)) setMobileOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 dark:border-white/10 bg-white/55 dark:bg-[#0b1220]/55 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3">
        {/* Desktop: 3-column grid / Mobile: flex */}
        <div className="flex items-center justify-between gap-3 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center">
          {/* Brand */}
          <div
            className={isFa ? "md:justify-self-end" : "md:justify-self-start"}
          >
            <NavLink
              to="/"
              className="font-extrabold tracking-tight text-lg text-slate-900 dark:text-white"
            >
              DevShe
            </NavLink>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:block md:justify-self-center">
            <div className="flex items-center gap-1 sm:gap-2 rounded-2xl border border-black/5 dark:border-white/10 bg-white/50 dark:bg-white/5 px-1.5 py-1.5 shadow-[0_12px_30px_-20px_rgba(0,0,0,0.55)]">
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
            </div>
          </nav>

          {/* Controls */}
          <div
            className={[
              "flex items-center gap-2",
              isFa ? "md:justify-self-start" : "md:justify-self-end",
            ].join(" ")}
          >
            {/* Mobile menu button */}
            <button
              className="md:hidden h-10 w-10 inline-flex items-center justify-center rounded-2xl
                         border border-black/10 dark:border-white/15
                         bg-white/60 dark:bg-white/5
                         text-slate-800 dark:text-slate-200
                         hover:bg-white/80 dark:hover:bg-white/10 transition
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

            {/* Theme */}
            <button
              onClick={toggleTheme}
              className="h-10 w-10 inline-flex items-center justify-center rounded-2xl
                         border border-black/10 dark:border-white/15
                         bg-white/60 dark:bg-white/5
                         text-slate-800 dark:text-slate-200
                         hover:bg-white/80 dark:hover:bg-white/10 transition
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* NEW: Compact Language Toggle (Stable width, no layout shift) */}
            <button
              onClick={toggleLang}
              className="h-10 w-[88px] inline-flex items-center justify-center gap-2 rounded-2xl
                         border border-black/10 dark:border-white/15
                         bg-white/60 dark:bg-white/5
                         text-slate-800 dark:text-slate-200
                         hover:bg-white/80 dark:hover:bg-white/10 transition
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60"
              aria-label="Toggle language"
              title={isFa ? "Switch to English" : "Switch to فارسی"}
            >
              <Globe2 size={16} className="opacity-80" />
              {/* Fixed-width label to avoid shifting */}
              <span className="text-xs font-bold tracking-wide w-6 text-center">
                {isFa ? "FA" : "EN"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Panel */}
        <div
          className={[
            "md:hidden",
            mobileOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0",
            "transition-all duration-200 overflow-hidden",
          ].join(" ")}
          aria-hidden={!mobileOpen}
        >
          <div
            ref={panelRef}
            className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-2 shadow-[0_14px_40px_-25px_rgba(0,0,0,0.7)]"
          >
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
          </div>
        </div>
      </div>
    </header>
  );
}
