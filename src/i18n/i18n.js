import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import fa from "./fa.json";

export function normalizeLang(lang = "en") {
  const l = String(lang || "en").toLowerCase();
  return l.startsWith("fa") ? "fa" : "en";
}

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
  interpolation: { escapeValue: false },
});

syncHtmlLangDir(normalizeLang(i18n.language));

i18n.on("languageChanged", (lang) => {
  const normalized = normalizeLang(lang);
  syncHtmlLangDir(normalized);
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem("lang", normalized);
    } catch {}
  }
});

export function getText(value, lang = "en") {
  if (!value) return "";
  if (typeof value === "string") return value;

  const normalized = normalizeLang(lang);
  return value?.[normalized] || value?.en || value?.fa || "";
}

export function getArray(value, lang = "en") {
  const v = getText(value, lang);
  if (Array.isArray(v)) return v;
  return v ? [v] : [];
}

export default i18n;
