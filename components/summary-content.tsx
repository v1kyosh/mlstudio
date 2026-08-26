"use client";

import Image from "next/image";
import { PROFILE } from "@/lib/resume-data";
import { useLocale } from "@/lib/i18n/context";
import { summaryPage } from "@/lib/i18n/dictionary";

export function SummaryContent() {
  const { locale } = useLocale();
  const t = summaryPage;

  const STATS = [
    { value: "13+", label: t.statYears[locale] },
    { value: "4x", label: t.statGrowth[locale] },
    { value: "50+", label: t.statProjects[locale] },
    { value: "€370k", label: t.statSaved[locale] },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-20">
      <div className="flex w-full max-w-lg flex-col items-center text-center">
        <Image
          src="/marcos-leite.jpg"
          alt={PROFILE.name}
          width={96}
          height={96}
          className="h-20 w-20 rounded-full object-cover"
        />
        <h1 className="mt-5 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {PROFILE.name}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {PROFILE.title} - {PROFILE.tagline}
        </p>

        <p className="mt-6 text-base leading-relaxed text-foreground/80">
          {t.pitch[locale]}
        </p>

        <div className="mt-8 grid w-full grid-cols-2 gap-4 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-card p-4"
            >
              <div className="text-xl font-semibold tracking-tight text-green-400">
                {stat.value}
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-wide text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/api/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:opacity-85"
          >
            {t.downloadResume[locale]}
          </a>
          <a
            href="/#contact"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            {t.getInTouch[locale]}
          </a>
          <a
            href="/"
            className="rounded-full bg-green-400 px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-green-400/85"
          >
            {t.viewFullPortfolio[locale]}
          </a>
        </div>
      </div>
    </main>
  );
}
