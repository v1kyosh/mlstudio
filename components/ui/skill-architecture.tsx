"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Folder, FileCode2 } from "lucide-react";
import { useLocale } from "@/lib/i18n/context";
import { architecture } from "@/lib/i18n/dictionary";
import { architectureNotes } from "@/lib/i18n/content";

interface ArchSubItem {
  name: string;
}

interface ArchFile {
  name: string;
  subitems: ArchSubItem[];
}

interface ArchFolder {
  name: string;
  files: ArchFile[];
}

const ARCHITECTURE: ArchFolder[] = [
  {
    name: "strategy/",
    files: [
      {
        name: "brand-positioning.ts",
        subitems: [{ name: "competitive-mapping" }, { name: "value-proposition" }],
      },
      {
        name: "go-to-market.ts",
        subitems: [{ name: "launch-sequencing" }, { name: "stakeholder-alignment" }],
      },
      {
        name: "budget-planning.ts",
        subitems: [{ name: "channel-mix" }, { name: "forecast-tracking" }],
      },
      {
        name: "market-research.ts",
        subitems: [{ name: "trend-scanning" }, { name: "audience-interviews" }],
      },
    ],
  },
  {
    name: "brand-design/",
    files: [
      {
        name: "identity-systems.ts",
        subitems: [{ name: "logo-systems" }, { name: "brand-guidelines" }],
      },
      {
        name: "packaging-design.ts",
        subitems: [{ name: "structural-design" }, { name: "shelf-impact" }],
      },
      {
        name: "product-design.ts",
        subitems: [{ name: "concept-sketching" }, { name: "3d-prototyping" }],
      },
      {
        name: "motion-graphics.ts",
        subitems: [{ name: "social-cuts" }, { name: "product-animation" }],
      },
    ],
  },
  {
    name: "marketing/",
    files: [
      {
        name: "campaign-strategy.ts",
        subitems: [{ name: "creative-briefs" }, { name: "channel-orchestration" }],
      },
      {
        name: "content-marketing.ts",
        subitems: [{ name: "editorial-calendar" }, { name: "copywriting" }],
      },
      {
        name: "technical-seo.ts",
        subitems: [{ name: "site-audits" }, { name: "keyword-mapping" }],
      },
      {
        name: "paid-media.ts",
        subitems: [{ name: "campaign-setup" }, { name: "budget-optimization" }],
      },
      {
        name: "lifecycle-email.ts",
        subitems: [{ name: "flow-design" }, { name: "segmentation" }],
      },
    ],
  },
  {
    name: "ecommerce/",
    files: [
      {
        name: "platform-ops.ts",
        subitems: [{ name: "catalog-management" }, { name: "platform-admin" }],
      },
      {
        name: "conversion-funnels.ts",
        subitems: [
          { name: "landing-page-design" },
          { name: "checkout-optimization" },
        ],
      },
      {
        name: "analytics-reporting.ts",
        subitems: [{ name: "dashboarding" }, { name: "performance-reviews" }],
      },
    ],
  },
  {
    name: "ai-ops/",
    files: [
      {
        name: "workflow-automation.ts",
        subitems: [{ name: "process-mapping" }, { name: "automation-builds" }],
      },
      {
        name: "pim.ts",
        subitems: [{ name: "data-modeling" }, { name: "catalog-sync" }],
      },
      {
        name: "dam.ts",
        subitems: [{ name: "asset-pipelines" }, { name: "access-control" }],
      },
      {
        name: "srm.ts",
        subitems: [{ name: "vendor-tracking" }, { name: "order-visibility" }],
      },
      {
        name: "ai-assisted-dev.ts",
        subitems: [
          { name: "prompt-engineering" },
          { name: "full-stack-shipping" },
        ],
      },
    ],
  },
];

export function SkillArchitecture() {
  const { locale } = useLocale();
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
    <div className="rounded-2xl border border-border bg-card/50 p-6 font-mono text-sm sm:overflow-x-auto sm:p-8">
      <div className="mb-8 max-w-2xl">
        <div className="text-xs text-muted-foreground/50 sm:whitespace-nowrap">
          {architecture.readmeComment[locale]}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-foreground/70">
          {architecture.readmeText[locale]}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {ARCHITECTURE.map((folder, index) => {
          const isOpen = openFolders.includes(folder.name);
          const isPulsing = pulseIndex === index;
          return (
            <div key={folder.name} className="sm:min-w-max">
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
                <span className="hidden text-muted-foreground/50 sm:inline">
                  // {architectureNotes.folders[folder.name as keyof typeof architectureNotes.folders][locale]}
                </span>
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
                            <span className="hidden text-muted-foreground/50 sm:inline">
                              // {architectureNotes.files[file.name as keyof typeof architectureNotes.files][locale]}
                            </span>
                          </div>
                          <div className="mt-1 flex flex-col gap-1 border-l border-border/60 pl-5">
                            {file.subitems.map((sub) => (
                              <div key={sub.name} className="flex items-baseline gap-2">
                                <span className="text-muted-foreground/40">-</span>
                                <span className="text-foreground/60">{sub.name}</span>
                                <span className="hidden text-muted-foreground/40 sm:inline">
                                  // {architectureNotes.subitems[sub.name as keyof typeof architectureNotes.subitems][locale]}
                                </span>
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
