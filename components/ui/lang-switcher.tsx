"use client";

import { useEffect, useRef, useState } from "react";
import { Globe } from "lucide-react";
import { useLocale } from "@/lib/i18n/context";
import { LOCALES } from "@/lib/i18n/locales";

export function LangSwitcher({ dark = true }: { dark?: boolean }) {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const textClass = dark
    ? "text-white/70 hover:text-white"
    : "text-muted-foreground hover:text-foreground";
  const borderClass = dark ? "border-white/25" : "border-border";
  const panelClass = dark
    ? "border-white/15 bg-black/80 backdrop-blur-md"
    : "border-border bg-card";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Change language"
        aria-expanded={open}
        className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${borderClass} ${textClass}`}
      >
        <Globe className="h-3.5 w-3.5" />
        {locale.toUpperCase()}
      </button>
      {open && (
        <div
          className={`absolute right-0 top-full z-50 mt-2 flex flex-col overflow-hidden rounded-xl border shadow-2xl ${panelClass}`}
        >
          {LOCALES.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => {
                setLocale(l.code);
                setOpen(false);
              }}
              className={`px-4 py-2 text-left text-xs font-medium transition-colors ${
                l.code === locale
                  ? "bg-green-400 text-black"
                  : `${textClass} hover:bg-white/10`
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
