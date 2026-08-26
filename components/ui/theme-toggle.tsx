"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/theme/context";

export function ThemeToggle({ dark = true }: { dark?: boolean }) {
  const { theme, toggleTheme } = useTheme();

  const textClass = dark
    ? "text-white/70 hover:text-white"
    : "text-muted-foreground hover:text-foreground";
  const borderClass = dark ? "border-white/25" : "border-border";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className={`flex h-[26px] w-[26px] items-center justify-center rounded-full border transition-colors ${borderClass} ${textClass}`}
    >
      {theme === "dark" ? (
        <Sun className="h-3.5 w-3.5" />
      ) : (
        <Moon className="h-3.5 w-3.5" />
      )}
    </button>
  );
}
