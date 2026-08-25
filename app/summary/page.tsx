import type { Metadata } from "next";
import Image from "next/image";
import { PROFILE } from "@/lib/resume-data";

export const metadata: Metadata = {
  title: "Quick Summary - Marcos Leite",
  description: "The 30-second version of Marcos Leite's background.",
};

const STATS = [
  { value: "13+", label: "Years" },
  { value: "4x", label: "Growth Driven" },
  { value: "50+", label: "Projects" },
  { value: "€370k", label: "Saved via AI Tools" },
];

export default function SummaryPage() {
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
          I run brand, product, and growth as one system instead of three
          separate hires. Most recently: I built an in-house AI platform
          suite - PIM, DAM, SRM, ticketing, and repairs - with Claude and AI
          coding agents instead of buying SaaS.
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
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-white/85"
          >
            Download Resume
          </a>
          <a
            href="/#contact"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Get in Touch
          </a>
        </div>

        <a
          href="/"
          className="mt-10 text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          Want the full story? See the complete portfolio &rarr;
        </a>
      </div>
    </main>
  );
}
