import { create } from "zustand";

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem("theme");
  if (stored) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(t) {
  if (typeof document === "undefined") return;
  // کلاس دارک روی html
  document.documentElement.classList.toggle("dark", t === "dark");
  // color-scheme برای کامپوننت‌های بومی
  document.documentElement.style.colorScheme = t;

  // --- تغییر favicon بر اساس تم ---
  const link = document.querySelector("link#app-favicon");
  if (link) {
    link.setAttribute(
      "href",
      t === "dark" ? "/favicon-dark.svg" : "/favicon-light.svg"
    );
  }

  // (اختیاری) تغییر theme-color (نوار آدرس موبایل)
  let themeMeta = document.querySelector(
    'meta[name="theme-color"][data-managed]'
  );
  if (!themeMeta) {
    themeMeta = document.createElement("meta");
    themeMeta.setAttribute("name", "theme-color");
    themeMeta.setAttribute("data-managed", "true");
    document.head.appendChild(themeMeta);
  }
  themeMeta.setAttribute("content", t === "dark" ? "#0c0f18" : "#ffffff");
}

const initial = getInitialTheme();
if (typeof window !== "undefined") applyTheme(initial);

export const useThemeStore = create((set, get) => ({
  theme: initial,
  setTheme: (newTheme) => {
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
    set({ theme: newTheme });
  },
  toggleTheme: () => {
    const next = get().theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", next);
    applyTheme(next);
    set({ theme: next });
  },
}));

export default useThemeStore;
