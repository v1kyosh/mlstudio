"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Globe } from "lucide-react";
import { useLocale } from "@/lib/i18n/context";
import { LOCALES } from "@/lib/i18n/locales";

export function LangSwitcher({ dark = true }: { dark?: boolean }) {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ top: 0, right: 0 });
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as Node;
      if (
        buttonRef.current?.contains(target) ||
        panelRef.current?.contains(target)
      ) {
        return;
      }
      setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  function toggleOpen() {
    if (!open && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPos({
        top: rect.bottom + 8,
        right: window.innerWidth - rect.right,
      });
    }
    setOpen((v) => !v);
  }

  const textClass = dark
    ? "text-white/70 hover:text-white"
    : "text-muted-foreground hover:text-foreground";
  const borderClass = dark ? "border-white/25" : "border-border";
  const panelClass = dark
    ? "border-white/15 bg-black/90 backdrop-blur-md"
    : "border-border bg-card";

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={toggleOpen}
        aria-label="Change language"
        aria-expanded={open}
        className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${borderClass} ${textClass}`}
      >
        <Globe className="h-3.5 w-3.5" />
        {locale.toUpperCase()}
      </button>
      {mounted &&
        open &&
        createPortal(
          <div
            ref={panelRef}
            style={{ top: pos.top, right: pos.right }}
            className={`fixed z-[200] flex flex-col overflow-hidden rounded-xl border shadow-2xl ${panelClass}`}
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
          </div>,
          document.body,
        )}
    </>
  );
}
