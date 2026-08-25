"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Velaris from "@/components/ui/velaris";
import {
  LOADING_DURATION_MS,
  LOADING_FADE_OUT_MS,
} from "@/components/loading-screen";

const GRAYSCALE_COLORS = ["#e5e5e5", "#a3a3a3", "#525252", "#000000"];

export function IntroChooser() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    // Appear the moment the loading screen *starts* fading out, so this
    // covers the page before any of the real content underneath is
    // revealed through that fade.
    const timer = setTimeout(
      () => setReady(true),
      LOADING_DURATION_MS - LOADING_FADE_OUT_MS,
    );
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Locks scroll for this component's whole lifetime (loading screen
    // included, since this mounts alongside it) - position:fixed on body
    // is used instead of just overflow:hidden because it can't be
    // silently overridden by another component, and it also blocks
    // touch/wheel scroll bleed-through on mobile that overflow alone
    // sometimes misses.
    const scrollY = window.scrollY;
    const { style } = document.body;
    const prev = {
      position: style.position,
      top: style.top,
      width: style.width,
      overflow: style.overflow,
    };
    style.position = "fixed";
    style.top = `-${scrollY}px`;
    style.width = "100%";
    style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      style.position = prev.position;
      style.top = prev.top;
      style.width = prev.width;
      style.overflow = prev.overflow;
      document.documentElement.style.overflow = "";
      window.scrollTo(0, scrollY);
    };
  }, []);

  function enterFullPortfolio() {
    setFadingOut(true);
    setTimeout(() => setDismissed(true), 400);
  }

  function goToSummary() {
    setFadingOut(true);
    setTimeout(() => router.push("/summary"), 300);
  }

  if (!ready || dismissed) return null;

  return (
    <div
      aria-hidden={!ready}
      className={`fixed inset-0 z-[100] flex flex-col transition-opacity duration-[400ms] sm:flex-row ${
        fadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex-1 border-b border-white/15 sm:border-b-0 sm:border-r">
        <Velaris height="100%" colors={GRAYSCALE_COLORS}>
          <button
            type="button"
            onClick={goToSummary}
            data-cursor="Quick Summary"
            className="group flex h-full w-full flex-col items-center justify-center gap-3 px-8 py-16 text-center transition-colors hover:bg-white/5"
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
            <span className="mt-2 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
              Open Quick Summary &rarr;
            </span>
          </button>
        </Velaris>
      </div>

      <div className="relative flex-1">
        <Velaris height="100%">
          <button
            type="button"
            onClick={enterFullPortfolio}
            data-cursor="Full Portfolio"
            className="group flex h-full w-full flex-col items-center justify-center gap-3 px-8 py-16 text-center transition-colors hover:bg-white/5"
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
        </Velaris>
      </div>
    </div>
  );
}
