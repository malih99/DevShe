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

export function normalizeLang(lang = "en") {
  const l = String(lang || "en").toLowerCase();
  return l.startsWith("fa") ? "fa" : "en";
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
  const n = normalizeLang(lang);
  syncHtmlLangDir(n);
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem("lang", n);
    } catch {}
  }
});

export default i18n;

export function getText(value, lang = "en") {
  if (!value) return "";
  if (typeof value === "string") return value;

  const n = normalizeLang(lang);
  const v = value?.[n] ?? value?.en ?? value?.fa ?? "";

  if (Array.isArray(v)) return v.join(" • ");
  return typeof v === "string" ? v : "";
}

export function getArray(value, lang = "en") {
  if (!value) return [];
  if (Array.isArray(value)) return value;

  const n = normalizeLang(lang);
  const v = value?.[n] ?? value?.en ?? value?.fa;

  if (Array.isArray(v)) return v;
  if (typeof v === "string" && v.trim()) return [v];
  return [];
}
