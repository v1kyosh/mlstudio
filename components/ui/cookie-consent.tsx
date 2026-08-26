"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/lib/i18n/context";
import { cookieConsent } from "@/lib/i18n/dictionary";

const STORAGE_KEY = "cookie-consent";

export function CookieConsent() {
  const { locale } = useLocale();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // localStorage unavailable (e.g. private browsing) - skip silently
    }
  }, []);

  function respond(choice: "accepted" | "declined") {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // ignore write failures
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-4 bottom-24 z-40 mx-auto max-w-xl rounded-2xl border border-border bg-card p-5 shadow-2xl sm:bottom-28">
      <p className="text-sm leading-relaxed text-foreground/80">
        {cookieConsent.text[locale]}{" "}
        <a
          href="/privacy"
          className="text-green-400 underline-offset-2 hover:underline"
        >
          {cookieConsent.policyLink[locale]}
        </a>{" "}
        {cookieConsent.forDetails[locale]}
      </p>
      <div className="mt-4 flex justify-end gap-3">
        <button
          type="button"
          onClick={() => respond("declined")}
          className="rounded-full border border-border px-4 py-2 text-xs font-medium text-foreground transition-colors hover:bg-accent"
        >
          {cookieConsent.decline[locale]}
        </button>
        <button
          type="button"
          onClick={() => respond("accepted")}
          className="rounded-full bg-green-400 px-4 py-2 text-xs font-medium text-black transition-colors hover:bg-green-400/85"
        >
          {cookieConsent.accept[locale]}
        </button>
      </div>
    </div>
  );
}
