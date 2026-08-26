"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { TrendingUp, Gauge, PiggyBank, Wallet } from "lucide-react";
import Velaris from "@/components/ui/velaris";
import { LoadingScreen } from "@/components/loading-screen";
import { IntroChooser } from "@/components/intro-chooser";
import { SkillHub } from "@/components/ui/skill-hub";
import { AiToolkit } from "@/components/ui/ai-toolkit";
import { SoftwareStack } from "@/components/ui/software-stack";
import { EXPERIENCE, PROFILE } from "@/lib/resume-data";
import { useLocale } from "@/lib/i18n/context";
import {
  hero,
  about,
  architecture,
  impact,
  aiToolkitSection,
  softwareSection,
  workSection,
  brandsSection,
  contact,
} from "@/lib/i18n/dictionary";
import { workTranslations, roleTranslations } from "@/lib/i18n/content";

const CookieConsent = dynamic(() =>
  import("@/components/ui/cookie-consent").then((m) => m.CookieConsent),
);

// code-split the heavy client components so their JS only loads once each
// section is reached, instead of bloating the initial page bundle
const LuminaInteractiveList = dynamic(() =>
  import("@/components/ui/lumina-interactive-list").then(
    (m) => m.LuminaInteractiveList,
  ),
);
const SkillArchitecture = dynamic(() =>
  import("@/components/ui/skill-architecture").then(
    (m) => m.SkillArchitecture,
  ),
);
const ContactForm = dynamic(() =>
  import("@/components/ui/contact-form").then((m) => m.ContactForm),
);

interface WorkItem {
  name: string;
  tag: string;
  blurb: string;
  image?: string;
}

const WORK_IMAGES = [
  "/work/pim-dam.png",
  "/work/sat.png",
  "/work/srm.png",
  "/work/ecommerce-cro.png",
  "/work/tradeshow-stand.png",
  "/work/point-of-sale.png",
  "/work/polivouga.png",
  "/work/yamaha.png",
  "/work/universal-support.png",
];

const ROLE_PROGRESSION = [
  { role: "Brand & Creative Manager", year: "2024 - Present" },
  { role: "Marketing Manager", year: "2022" },
  { role: "Communication & Design Manager", year: "2019" },
  { role: "Communication Designer", year: "2018" },
  { role: "Freelancer Designer", year: "2016" },
];

const BRANDS = [
  { name: "Yamaha", src: "/brands/yamaha.png", width: 176, height: 36 },
  { name: "KTM", src: "/brands/ktm.png", width: 92, height: 36 },
  { name: "Scott", src: "/brands/scott.png", width: 172, height: 36 },
  { name: "Decathlon", src: "/brands/decathlon.png", width: 181, height: 36 },
];

const CLUBS = [
  { name: "FC Porto", src: "/brands/fcporto.png", width: 48, height: 64 },
  { name: "Sporting CP", src: "/brands/sporting.png", width: 50, height: 64 },
  { name: "SL Benfica", src: "/brands/benfica.png", width: 65, height: 64 },
];

export default function Home() {
  const { locale } = useLocale();

  const STATS = [
    { value: "13+", label: hero.statYears[locale] },
    { value: "50+", label: hero.statProjects[locale] },
    { value: "5", label: hero.statIndustries[locale] },
    { value: "€370k", label: hero.statSaved[locale] },
  ];

  const WORK: WorkItem[] = WORK_IMAGES.map((image) => {
    const t = workTranslations[image];
    return {
      name: t.name[locale],
      tag: t.tag[locale],
      blurb: t.blurb[locale],
      image,
    };
  });

  const GALLERY_ITEMS = WORK.filter(
    (item): item is WorkItem & { image: string } => Boolean(item.image),
  ).map((item) => ({
    name: item.name,
    tag: item.tag,
    blurb: item.blurb,
    image: item.image,
  }));

  const IMPACT = [
    {
      icon: TrendingUp,
      value: "4x",
      label: impact.stat1Label[locale],
      spark: "M0 20 L15 17 L30 18 L45 12 L60 14 L75 6 L100 3",
    },
    {
      icon: Gauge,
      value: "80%",
      label: impact.stat2Label[locale],
      spark: "M0 18 L15 19 L30 14 L45 15 L60 8 L75 9 L100 2",
    },
    {
      icon: PiggyBank,
      value: "€370k",
      label: impact.stat3Label[locale],
      spark: "M0 16 L15 12 L30 15 L45 9 L60 11 L75 5 L100 4",
    },
    {
      icon: Wallet,
      value: "€67k",
      label: impact.stat4Label[locale],
      spark: "M0 19 L15 15 L30 16 L45 11 L60 13 L75 7 L100 5",
    },
  ];

  const ABOUT_PILLARS = [
    { label: about.pillar1Label[locale], description: about.pillar1Desc[locale] },
    { label: about.pillar2Label[locale], description: about.pillar2Desc[locale] },
    { label: about.pillar3Label[locale], description: about.pillar3Desc[locale] },
  ];

  return (
    <div className="flex flex-col">
      <LoadingScreen />
      <IntroChooser />
      <CookieConsent />
      <Velaris height="100vh">
        <div className="mx-auto flex h-full w-full max-w-5xl flex-col justify-center gap-6 px-6 pb-16 pt-24">
          <div className="flex items-center gap-3">
            <Image
              src="/marcos-leite.jpg"
              alt="Marcos Leite"
              width={64}
              height={64}
              priority
              className="h-8 w-8 rounded-full border border-white/20 object-cover"
            />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">
              Marcos Leite
            </span>
          </div>
          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            {hero.h1Prefix[locale]}{" "}
            <span className="text-green-400">{hero.h1Highlight[locale]}</span>{" "}
            {hero.h1Suffix[locale]}
          </h1>
          <p className="max-w-xl text-base text-white/70 sm:text-lg">
            {hero.subtitle[locale]}
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <a
              href="#work"
              data-cursor="View Work"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-white/85"
            >
              {hero.ctaWork[locale]}
            </a>
            <a
              href="/api/resume"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="Get Resume"
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              {hero.ctaResume[locale]}
            </a>
            <a
              href="#contact"
              data-cursor="Hire Me"
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              {hero.ctaContact[locale]}
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-6 border-t border-white/15 pt-8 sm:gap-x-10">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-semibold tracking-tight text-green-400">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wide text-white/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Velaris>

      <section id="about" className="border-t border-border bg-background px-6 py-24">
        <div className="mx-auto flex max-w-3xl flex-col gap-10 sm:flex-row">
          <div className="flex-none sm:w-52">
            <Image
              src="/marcos-leite.jpg"
              alt="Marcos Leite"
              width={200}
              height={200}
              className="h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32"
            />
            <div className="relative mt-6 flex flex-col gap-3 border-l border-border pl-4">
              {ROLE_PROGRESSION.map((item, index) => (
                <div key={item.role} className="relative">
                  <span
                    className={`absolute -left-[1.19rem] top-1 h-1.5 w-1.5 rounded-full ${
                      index === 0 ? "bg-green-400" : "bg-muted-foreground"
                    }`}
                  />
                  <div className="text-[10px] font-medium tabular-nums text-muted-foreground/60">
                    {item.year}
                  </div>
                  <div
                    className={`text-xs font-medium ${
                      index === 0 ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {roleTranslations[item.role]?.[locale] ?? item.role}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-2 border-t border-border pt-4">
              <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground/50">
                {about.experienceLabel[locale]}
              </span>
              {EXPERIENCE.map((item) => (
                <div key={`${item.company}-${item.role}`} className="text-[10px] leading-tight">
                  <div>
                    <span className="font-medium text-foreground/80">{item.company}</span>
                    <span className="text-muted-foreground"> &middot; {item.period}</span>
                  </div>
                  <div className="mt-0.5 text-muted-foreground/70">
                    {roleTranslations[item.role]?.[locale] ?? item.role}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-2 border-t border-border pt-4">
              <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground/50">
                {about.educationLabel[locale]}
              </span>
              <div className="text-[10px] leading-tight text-muted-foreground/70">
                {PROFILE.education}
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-green-400">
              {about.heading[locale]}
            </h2>
            <p className="mt-8 text-xl leading-snug tracking-tight text-foreground sm:text-2xl">
              {about.leadBefore[locale]}{" "}
              <span className="text-green-400">{about.leadHighlight[locale]}</span>{" "}
              {about.leadAfter[locale]}
            </p>
            <p className="mt-8 max-w-2xl text-sm text-muted-foreground">
              {about.secondary[locale]}
            </p>
            <div className="mt-10 grid max-w-2xl gap-5 sm:grid-cols-3">
              {ABOUT_PILLARS.map((pillar) => (
                <div
                  key={pillar.label}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <div className="text-xs font-medium uppercase tracking-[0.15em] text-green-400">
                    {pillar.label}
                  </div>
                  <p className="mt-3 text-xs leading-snug text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
            <blockquote className="mt-14 border-l-2 border-green-400/50 pl-5">
              <p className="text-base leading-snug tracking-tight text-foreground/90 sm:text-lg">
                {about.quote[locale]}
              </p>
              <footer className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">
                {about.quoteAuthor[locale]}
              </footer>
            </blockquote>
            <p className="mt-10 text-xs uppercase tracking-wide text-muted-foreground">
              {about.languages[locale]}
            </p>
          </div>
        </div>
      </section>

      <section id="architecture" className="border-t border-border bg-background px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-green-400">
            {architecture.heading[locale]}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-foreground/80">
            {architecture.subtitle[locale]}
          </p>
          <div className="mt-16">
            <SkillHub />
          </div>
          <div className="mt-16 mx-auto max-w-3xl">
            <SkillArchitecture />
          </div>
        </div>
      </section>

      <section id="impact" className="border-t border-border bg-background px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-green-400">
            {impact.heading[locale]}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-foreground/80">
            {impact.subtitle[locale]}
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {IMPACT.map((stat) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6"
              >
                <div className="card-glow pointer-events-none absolute inset-0 z-0" />
                <div className="relative z-10">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-400/10">
                    <stat.icon className="h-4 w-4 text-green-400" />
                  </div>
                  <div className="mt-4 text-4xl font-semibold tracking-tight text-foreground">
                    {stat.value}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {stat.label}
                  </p>
                  <svg
                    viewBox="0 0 100 24"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                    className="mt-4 h-6 w-full text-green-400/40"
                  >
                    <path
                      d={stat.spark}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ai" className="border-t border-border bg-background px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-green-400">
            {aiToolkitSection.heading[locale]}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-foreground/80">
            {aiToolkitSection.subtitle[locale]}
          </p>
          <div className="mt-12">
            <AiToolkit />
          </div>
        </div>
      </section>

      <section id="software" className="border-t border-border bg-background px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-green-400">
            {softwareSection.heading[locale]}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-foreground/80">
            {softwareSection.subtitle[locale]}
          </p>
          <div className="mt-12">
            <SoftwareStack />
          </div>
        </div>
      </section>

      <section id="work" className="border-t border-border bg-background">
        <div className="px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-green-400">
              {workSection.heading[locale]}
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-foreground/80">
              {workSection.subtitle[locale]}
            </p>
          </div>
        </div>
        <LuminaInteractiveList items={GALLERY_ITEMS} />
      </section>

      <section id="brands" className="border-t border-border bg-background px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-green-400">
            {brandsSection.heading[locale]}
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
            {BRANDS.map((brand) => (
              <Image
                key={brand.name}
                src={brand.src}
                alt={brand.name}
                width={brand.width}
                height={brand.height}
                style={{ width: brand.width, height: brand.height }}
                className="grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              />
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
            {CLUBS.map((club) => (
              <Image
                key={club.name}
                src={club.src}
                alt={club.name}
                width={club.width}
                height={club.height}
                style={{ width: club.width, height: club.height }}
                className="grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              />
            ))}
          </div>
        </div>
      </section>

      <Velaris height="min(70vh, 760px)" id="contact">
        <div
          data-cursor="Hire Me"
          className="mx-auto flex h-full w-full max-w-3xl flex-col justify-center gap-10 px-6 py-16 sm:flex-row sm:items-center sm:gap-16"
        >
          <div className="sm:flex-1">
            <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-green-400">
              {contact.heading[locale]}
            </h2>
            <p className="mt-6 max-w-sm text-2xl leading-relaxed tracking-tight text-white sm:text-3xl">
              {contact.pitch[locale]}
            </p>
            <a
              href="https://www.linkedin.com/in/marcos-leite-153bba194/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/80 underline underline-offset-4 hover:text-white"
            >
              {contact.linkedin[locale]}
            </a>
          </div>
          <div className="sm:flex-1">
            <ContactForm />
          </div>
        </div>
      </Velaris>
    </div>
  );
}
