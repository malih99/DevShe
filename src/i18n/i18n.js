import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import fa from "./fa.json";

function getInitialLang() {
  if (typeof window === "undefined") return "en";
  try {
    const stored = localStorage.getItem("lang");
    if (stored) return stored;
  } catch {}
  return "en";
}

function syncHtmlLangDir(lang) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.lang = lang;
  root.dir = lang === "fa" ? "rtl" : "ltr";
}

const initialLang = getInitialLang();

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fa: { translation: fa },
  },
  lng: initialLang,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

syncHtmlLangDir(i18n.language);

i18n.on("languageChanged", (lang) => {
  syncHtmlLangDir(lang);
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem("lang", lang);
    } catch {}
  }
});

export default i18n;
