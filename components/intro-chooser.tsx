"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Velaris from "@/components/ui/velaris";
import { LOADING_DURATION_MS } from "@/components/loading-screen";

export function IntroChooser() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), LOADING_DURATION_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (ready) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [ready]);

  function enterFullPortfolio() {
    setFadingOut(true);
    setTimeout(() => {
      setDismissed(true);
      document.body.style.overflow = "";
    }, 400);
  }

  function goToSummary() {
    setFadingOut(true);
    setTimeout(() => {
      document.body.style.overflow = "";
      router.push("/summary");
    }, 300);
  }

  if (!ready || dismissed) return null;

  return (
    <div
      aria-hidden={!ready}
      className={`fixed inset-0 z-[100] transition-opacity duration-[400ms] ${
        fadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <Velaris height="100%">
        <div className="relative flex h-full w-full flex-col sm:flex-row">
          <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-white/15 sm:inset-y-0 sm:inset-x-auto sm:left-1/2 sm:top-0 sm:h-full sm:w-px" />

          <button
            type="button"
            onClick={goToSummary}
            data-cursor="Quick Summary"
            className="group flex flex-1 flex-col items-center justify-center gap-3 px-8 py-16 text-center transition-colors hover:bg-white/5"
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
              Short on time?
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Quick Summary
            </h2>
            <p className="max-w-xs text-sm text-white/70">
              The 30-second version - who I am, what I do, and the numbers
              that matter.
            </p>
            <span className="mt-2 text-sm font-medium text-green-400 opacity-0 transition-opacity group-hover:opacity-100">
              Open Quick Summary &rarr;
            </span>
          </button>

          <button
            type="button"
            onClick={enterFullPortfolio}
            data-cursor="Full Portfolio"
            className="group flex flex-1 flex-col items-center justify-center gap-3 px-8 py-16 text-center transition-colors hover:bg-white/5"
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
              Got a few minutes?
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Full Portfolio
            </h2>
            <p className="max-w-xs text-sm text-white/70">
              The complete story - work samples, the AI-native systems I&apos;ve
              built, and the full architecture behind it.
            </p>
            <span className="mt-2 text-sm font-medium text-green-400 opacity-0 transition-opacity group-hover:opacity-100">
              Enter Full Portfolio &rarr;
            </span>
          </button>
        </div>
      </Velaris>
    </div>
  );
}
