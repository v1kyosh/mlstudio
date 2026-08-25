"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Folder, FileCode2 } from "lucide-react";

interface ArchSubItem {
  name: string;
  note: string;
}

interface ArchFile {
  name: string;
  note: string;
  subitems: ArchSubItem[];
}

interface ArchFolder {
  name: string;
  note: string;
  files: ArchFile[];
}

const ARCHITECTURE: ArchFolder[] = [
  {
    name: "strategy/",
    note: "brand & go-to-market thinking",
    files: [
      {
        name: "brand-positioning.ts",
        note: "defining who the brand is for and why it wins",
        subitems: [
          { name: "competitive-mapping", note: "sizing up category leaders and finding white space" },
          { name: "value-proposition", note: "translating research into a message that sticks" },
        ],
      },
      {
        name: "go-to-market.ts",
        note: "launch plans from concept to shelf",
        subitems: [
          { name: "launch-sequencing", note: "timing channels, retail, and press around one date" },
          { name: "stakeholder-alignment", note: "briefing sales, ops, and partners before day one" },
        ],
      },
      {
        name: "budget-planning.ts",
        note: "allocating spend across channels for ROI",
        subitems: [
          { name: "channel-mix", note: "splitting spend across paid, organic, and retail" },
          { name: "forecast-tracking", note: "reconciling planned spend against actual return" },
        ],
      },
      {
        name: "market-research.ts",
        note: "reading the category, competitors, and audience",
        subitems: [
          { name: "trend-scanning", note: "tracking category shifts before they hit mainstream" },
          { name: "audience-interviews", note: "validating assumptions directly with real buyers" },
        ],
      },
    ],
  },
  {
    name: "brand-design/",
    note: "identity, product, and motion",
    files: [
      {
        name: "identity-systems.ts",
        note: "logos, guidelines, and visual language",
        subitems: [
          { name: "logo-systems", note: "building marks that scale from favicon to billboard" },
          { name: "brand-guidelines", note: "documenting rules so the identity survives without me" },
        ],
      },
      {
        name: "packaging-design.ts",
        note: "structural and graphic packaging design",
        subitems: [
          { name: "structural-design", note: "engineering the physical pack, not just the label" },
          { name: "shelf-impact", note: "designing for standout at actual point of sale" },
        ],
      },
      {
        name: "product-design.ts",
        note: "concept, prototyping, and 3D renders",
        subitems: [
          { name: "concept-sketching", note: "moving from brief to first viable form" },
          { name: "3d-prototyping", note: "CAD models and renders before a unit is tooled" },
        ],
      },
      {
        name: "motion-graphics.ts",
        note: "video and animated brand assets",
        subitems: [
          { name: "social-cuts", note: "short-form video edited for feed and story formats" },
          { name: "product-animation", note: "3D product spins and feature explainers" },
        ],
      },
    ],
  },
  {
    name: "marketing/",
    note: "campaigns that move product",
    files: [
      {
        name: "campaign-strategy.ts",
        note: "360-degree campaigns across digital, social, and retail",
        subitems: [
          { name: "creative-briefs", note: "turning strategy into a brief a team can execute" },
          { name: "channel-orchestration", note: "sequencing digital, social, and retail around one idea" },
        ],
      },
      {
        name: "content-marketing.ts",
        note: "organic content built to grow visibility",
        subitems: [
          { name: "editorial-calendar", note: "planning content around real search and social demand" },
          { name: "copywriting", note: "writing for the channel, not just the brand" },
        ],
      },
      {
        name: "technical-seo.ts",
        note: "on-site SEO and search performance",
        subitems: [
          { name: "site-audits", note: "finding and fixing what's actually blocking rankings" },
          { name: "keyword-mapping", note: "matching pages to the terms buyers actually search" },
        ],
      },
      {
        name: "paid-media.ts",
        note: "search, social, and shopping campaigns",
        subitems: [
          { name: "campaign-setup", note: "structuring accounts for clean, attributable data" },
          { name: "budget-optimization", note: "reallocating spend toward what's actually converting" },
        ],
      },
      {
        name: "lifecycle-email.ts",
        note: "retention and CRM automation",
        subitems: [
          { name: "flow-design", note: "building the automated sequences that run without me" },
          { name: "segmentation", note: "targeting messages by real behavior, not guesswork" },
        ],
      },
    ],
  },
  {
    name: "ecommerce/",
    note: "the mechanics that convert",
    files: [
      {
        name: "platform-ops.ts",
        note: "managing the storefront and product catalog",
        subitems: [
          { name: "catalog-management", note: "keeping product data clean across every listing" },
          { name: "platform-admin", note: "running the storefront day to day" },
        ],
      },
      {
        name: "conversion-funnels.ts",
        note: "landing pages and checkout optimization",
        subitems: [
          { name: "landing-page-design", note: "building pages built to convert, not just look good" },
          { name: "checkout-optimization", note: "removing friction between cart and paid order" },
        ],
      },
      {
        name: "analytics-reporting.ts",
        note: "dashboards and performance tracking",
        subitems: [
          { name: "dashboarding", note: "turning raw data into a report leadership actually reads" },
          { name: "performance-reviews", note: "tying results back to what actually moved them" },
        ],
      },
    ],
  },
  {
    name: "ai-ops/",
    note: "building instead of licensing",
    files: [
      {
        name: "workflow-automation.ts",
        note: "automating repetitive work across departments",
        subitems: [
          { name: "process-mapping", note: "finding the repetitive work worth automating" },
          { name: "automation-builds", note: "shipping the automation, not just the plan" },
        ],
      },
      {
        name: "pim.ts",
        note: "in-house Product Information Management platform",
        subitems: [
          { name: "data-modeling", note: "structuring product data so every channel pulls from one source" },
          { name: "catalog-sync", note: "keeping listings consistent across every sales channel" },
        ],
      },
      {
        name: "dam.ts",
        note: "in-house Digital Asset Management platform",
        subitems: [
          { name: "asset-pipelines", note: "organizing and versioning creative at scale" },
          { name: "access-control", note: "making the right asset findable by the right team" },
        ],
      },
      {
        name: "srm.ts",
        note: "in-house Supplier Relationship Management tool",
        subitems: [
          { name: "vendor-tracking", note: "centralizing supplier data and communication" },
          { name: "order-visibility", note: "tracking POs and lead times without a spreadsheet" },
        ],
      },
      {
        name: "ai-assisted-dev.ts",
        note: "shipping internal tools with Claude, React, and Node.js",
        subitems: [
          { name: "prompt-engineering", note: "directing AI tools to ship production-ready code" },
          { name: "full-stack-shipping", note: "React front end, Node back end, shipped end to end" },
        ],
      },
    ],
  },
];

export function SkillArchitecture() {
  const [openFolders, setOpenFolders] = useState<string[]>(["strategy/"]);
  const [pulseIndex, setPulseIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseIndex(Math.floor(Math.random() * ARCHITECTURE.length));
      const timeout = setTimeout(() => setPulseIndex(null), 900);
      return () => clearTimeout(timeout);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  function toggleFolder(name: string) {
    setOpenFolders((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name],
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-card/50 p-6 font-mono text-sm sm:p-8">
      <div className="mb-8 max-w-2xl">
        <div className="whitespace-nowrap text-xs text-muted-foreground/50">
          // marcos-leite/full-stack-marketer/README.md
        </div>
        <p className="mt-3 text-sm leading-relaxed text-foreground/70">
          Brand, product, and growth usually sit in three separate hires
          who don&apos;t talk to each other. I run all three as one system
          - so nothing gets lost in the handoff, and you&apos;re not
          paying the coordination tax between departments.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {ARCHITECTURE.map((folder, index) => {
          const isOpen = openFolders.includes(folder.name);
          const isPulsing = pulseIndex === index;
          return (
            <div key={folder.name} className="min-w-max">
              <button
                type="button"
                onClick={() => toggleFolder(folder.name)}
                className="flex w-full items-baseline gap-2 rounded-md py-1 text-left transition-colors hover:bg-card"
              >
                <ChevronRight
                  className={`relative top-0.5 h-3.5 w-3.5 flex-none text-muted-foreground/60 transition-transform ${
                    isOpen ? "rotate-90" : ""
                  }`}
                />
                <Folder
                  className={`relative top-0.5 h-4 w-4 flex-none transition-all duration-300 ${
                    isPulsing
                      ? "text-green-400 drop-shadow-[0_0_6px_rgba(74,222,128,0.9)]"
                      : "text-green-400/70"
                  }`}
                />
                <span className="font-semibold text-foreground">{folder.name}</span>
                <span className="text-muted-foreground/50">// {folder.note}</span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-1 flex flex-col gap-3 border-l border-border py-1 pl-6">
                      {folder.files.map((file) => (
                        <div key={file.name}>
                          <div className="flex items-baseline gap-2">
                            <FileCode2 className="relative top-0.5 h-3.5 w-3.5 flex-none text-muted-foreground/60" />
                            <span className="text-foreground/90">{file.name}</span>
                            <span className="text-muted-foreground/50">// {file.note}</span>
                          </div>
                          <div className="mt-1 flex flex-col gap-1 border-l border-border/60 pl-5">
                            {file.subitems.map((sub) => (
                              <div key={sub.name} className="flex items-baseline gap-2">
                                <span className="text-muted-foreground/40">-</span>
                                <span className="text-foreground/60">{sub.name}</span>
                                <span className="text-muted-foreground/40">// {sub.note}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
