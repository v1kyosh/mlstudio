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

const WORK: WorkItem[] = [
  {
    name: "In-House PIM + DAM Platform",
    tag: "Internal AI Platform",
    image: "/work/pim-dam.png",
    blurb:
      "In-house Product Information Management and Digital Asset Management platform, built via AI-assisted development - flagship of a broader initiative automating repetitive work across departments. Numbers below.",
  },
  {
    name: "SAT Repair Platform",
    tag: "Internal AI Platform",
    image: "/work/sat.png",
    blurb:
      "In-house repair service (SAT) platform, built via AI-assisted development - manages the full repair lifecycle from request to ready-to-ship, with technician workload, parts inventory, and turnaround-time tracking built in.",
  },
  {
    name: "In-House SRM Platform",
    tag: "Internal AI Platform",
    image: "/work/srm.png",
    blurb:
      "In-house Supplier Relationship Management (SRM) platform, built via AI-assisted development - centralizes supplier onboarding, contracts, purchase orders, and risk scoring in one system instead of scattered spreadsheets.",
  },
  {
    name: "Conversion Growth Engine",
    tag: "Ecommerce & CRO",
    image: "/work/ecommerce-cro.png",
    blurb:
      "End-to-end e-commerce optimization platform tracking funnels, on-site conversion, and paid campaign performance in one dashboard - real-time visibility from visit to purchase.",
  },
  {
    name: "Trade-Show Stand System",
    tag: "Exhibition Design",
    image: "/work/tradeshow-stand.png",
    blurb:
      "Modular exhibition stand design for industry trade fairs - structure, branded graphics, product display, and lighting planned as one system, built to be reused show after show.",
  },
  {
    name: "Point-of-Sale Display System",
    tag: "Retail Design",
    image: "/work/point-of-sale.png",
    blurb:
      "In-store display system for retail rollout - shelf units, counter displays, and wayfinding designed to keep the brand consistent from stand to shelf.",
  },
  {
    name: "Polivouga",
    tag: "Marketing Ecosystem",
    image: "/work/polivouga.png",
    blurb:
      "End-to-end brand refresh for a 5-factory industrial packaging manufacturer: identity, packaging, web, social, and trade-show presence.",
  },
  {
    name: "Yamaha Racing Sports Bottles",
    tag: "Product Design",
    image: "/work/yamaha.png",
    blurb:
      "Licensed sports-bottle line (550ml / 750ml) for Yamaha Racing, including an engineered nozzle redesign for improved water flow.",
  },
  {
    name: "Universal Support",
    tag: "Product Design",
    image: "/work/universal-support.png",
    blurb:
      "Concept-to-pitch design for a modular bike-mount accessory system, iterated from an isolated hardware render into a full lifestyle deck.",
  },
];

const STATS = [
  { value: "13+", label: "Years of Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "5", label: "Industries" },
  { value: "€370k", label: "Saved via In-House AI Tools" },
];

// gallery components are Client Components - only pass plain, serializable
// data across that boundary (the PIM/DAM item's `icon` is a component reference)
const GALLERY_ITEMS = WORK.filter(
  (item): item is WorkItem & { image: string } => Boolean(item.image),
).map((item) => ({
  name: item.name,
  tag: item.tag,
  blurb: item.blurb,
  image: item.image,
}));

const ROLE_PROGRESSION = [
  { role: "Brand & Creative Manager", year: "2024 - Present" },
  { role: "Marketing Manager", year: "2022" },
  { role: "Communication & Design Manager", year: "2019" },
  { role: "Communication Designer", year: "2018" },
  { role: "Freelancer Designer", year: "2016" },
];

const IMPACT = [
  {
    icon: TrendingUp,
    value: "4x",
    label:
      "Communication & sales output growth from the right platforms and AI agents",
    spark: "M0 20 L15 17 L30 18 L45 12 L60 14 L75 6 L100 3",
  },
  {
    icon: Gauge,
    value: "80%",
    label: "Less repetitive work across 6 automated department workflows",
    spark: "M0 18 L15 19 L30 14 L45 15 L60 8 L75 9 L100 2",
  },
  {
    icon: PiggyBank,
    value: "€370k",
    label:
      "Saved in setup cost across the PIM, DAM, Ticketing, SAT & SRM suite",
    spark: "M0 16 L15 12 L30 15 L45 9 L60 11 L75 5 L100 4",
  },
  {
    icon: Wallet,
    value: "€67k",
    label: "Saved every year versus buying a SaaS equivalent",
    spark: "M0 19 L15 15 L30 16 L45 11 L60 13 L75 7 L100 5",
  },
];

const ABOUT_PILLARS = [
  {
    label: "Brand & Creative",
    description:
      "Positioning, creative direction, and identity systems - from first concept to signed guidelines.",
  },
  {
    label: "Growth & Ecommerce",
    description:
      "Technical SEO, landing pages, conversion funnels, and the lifecycle email that turn attention into revenue.",
  },
  {
    label: "AI-Native Architecture",
    description:
      "Software built and shipped in-house with Claude and AI coding agents - scoped to the job, not licensed off the shelf.",
  },
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
            The <span className="text-green-400">Full Stack</span> Marketeer.
          </h1>
          <p className="max-w-xl text-base text-white/70 sm:text-lg">
            Brand strategy, product design, and the growth systems that sell
            them - under one roof. 13 years turning ideas into shipped,
            selling products.
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <a
              href="#work"
              data-cursor="View Work"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-white/85"
            >
              View Selected Work
            </a>
            <a
              href="/api/resume"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="Get Resume"
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              data-cursor="Hire Me"
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Get in Touch
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
                    {item.role}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-2 border-t border-border pt-4">
              <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground/50">
                Experience
              </span>
              {EXPERIENCE.map((item) => (
                <div key={`${item.company}-${item.role}`} className="text-[10px] leading-tight">
                  <div>
                    <span className="font-medium text-foreground/80">{item.company}</span>
                    <span className="text-muted-foreground"> &middot; {item.period}</span>
                  </div>
                  <div className="mt-0.5 text-muted-foreground/70">{item.role}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-2 border-t border-border pt-4">
              <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground/50">
                Education
              </span>
              <div className="text-[10px] leading-tight text-muted-foreground/70">
                {PROFILE.education}
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-green-400">
              About
            </h2>
            <p className="mt-8 text-xl leading-snug tracking-tight text-foreground sm:text-2xl">
              Since 2013, I&apos;ve worked the{" "}
              <span className="text-green-400">full stack of marketing</span> -
              from hand-built brand identities to injection-molded product
              design to the campaigns that move them off the shelf. I
              approach every brand as one system: the object, the packaging,
              the page, and the campaign all have to agree with each other.
            </p>
            <p className="mt-8 max-w-2xl text-sm text-muted-foreground">
              I plan the strategy and execute the campaign - the two rarely
              sit in different hands.
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
                &quot;Never surrender. Every problem has a solution - you just
                haven&apos;t found the right angle yet.&quot;
              </p>
              <footer className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">
                &mdash; Marcos Leite
              </footer>
            </blockquote>
            <p className="mt-10 text-xs uppercase tracking-wide text-muted-foreground">
              Languages: Portuguese &middot; English &middot; Spanish
            </p>
          </div>
        </div>
      </section>

      <section id="architecture" className="border-t border-border bg-background px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-green-400">
            Full Stack Architecture
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-foreground/80">
            Everything I&apos;m able to cover, mapped like a codebase - one
            system, not five separate hires.
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
            Impact
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-foreground/80">
            The measurable side of building brand, product, and internal
            tools in-house.
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
            AI Toolkit
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-foreground/80">
            Full-stack marketing now means full-stack AI fluency - the
            models and tools built into how I work. The real shift
            isn&apos;t which platform I use, it&apos;s that I build my
            own: Claude and AI coding agents as the engineering team,
            instead of a SaaS vendor.
          </p>
          <div className="mt-12">
            <AiToolkit />
          </div>
        </div>
      </section>

      <section id="software" className="border-t border-border bg-background px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-green-400">
            Software &amp; Tools
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-foreground/80">
            The rest of the stack - design, 3D, data, and paid media.
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
              Selected Work
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-foreground/80">
              A first pass on real projects - full case studies in progress.
            </p>
          </div>
        </div>
        <LuminaInteractiveList items={GALLERY_ITEMS} />
      </section>

      <section id="brands" className="border-t border-border bg-background px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-green-400">
            Some Brands I Worked With
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
              Contact
            </h2>
            <p className="mt-6 max-w-sm text-2xl leading-relaxed tracking-tight text-white sm:text-3xl">
              Open to Head of Marketing, Head of Growth, and CMO
              conversations.
            </p>
            <a
              href="https://www.linkedin.com/in/marcos-leite-153bba194/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/80 underline underline-offset-4 hover:text-white"
            >
              Connect on LinkedIn
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
