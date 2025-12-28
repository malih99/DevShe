import { create } from "zustand";

function safeGet(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {}
}

function getInitialTheme() {
  if (typeof window === "undefined") return "light";

  const stored = safeGet("theme");
  if (stored === "light" || stored === "dark") return stored;

  return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches
    ? "dark"
    : "light";
}

function applyTheme(t) {
  if (typeof document === "undefined") return;

  // dark class on <html>
  document.documentElement.classList.toggle("dark", t === "dark");

  // native form controls styling
  document.documentElement.style.colorScheme = t;

  // favicon swap (optional)
  const link = document.querySelector("link#app-favicon");
  if (link) {
    link.setAttribute(
      "href",
      t === "dark" ? "/favicon-dark.svg" : "/favicon-light.svg"
    );
  }

  // theme-color meta for mobile browsers (optional)
  let meta = document.querySelector('meta[name="theme-color"][data-managed]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", "theme-color");
    meta.setAttribute("data-managed", "true");
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", t === "dark" ? "#0c0f18" : "#ffffff");
}

const initial = getInitialTheme();
if (typeof window !== "undefined") applyTheme(initial);

const useThemeStore = create((set, get) => ({
  theme: initial,

  setTheme: (newTheme) => {
    const t = newTheme === "dark" ? "dark" : "light";
    safeSet("theme", t);
    applyTheme(t);
    set({ theme: t });
  },

  toggleTheme: () => {
    const next = get().theme === "light" ? "dark" : "light";
    safeSet("theme", next);
    applyTheme(next);
    set({ theme: next });
  },
}));

export default useThemeStore;
export { useThemeStore };
