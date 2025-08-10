import { Moon, Sun } from "lucide-react";
import useThemeStore from "../store/themeStore";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      aria-label={
        theme === "light" ? "Switch to dark mode" : "Switch to light mode"
      }
      className={`inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition ${className}`}
      title={theme === "light" ? "Dark Mode" : "Light Mode"}
    >
      {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
