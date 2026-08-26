"use client";

import {
  Box,
  Aperture,
  Layers,
  FileSpreadsheet,
  BarChart3,
  TrendingUp,
  Target,
  Users,
  Clapperboard,
  Shapes,
  Database,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { useLocale } from "@/lib/i18n/context";
import { softwareToolBlurbs } from "@/lib/i18n/content";

interface ToolItem {
  name: string;
  icon: LucideIcon;
}

const TOOLS: ToolItem[] = [
  { name: "SolidWorks", icon: Box },
  { name: "KeyShot", icon: Aperture },
  { name: "Adobe Creative Cloud", icon: Layers },
  { name: "Office", icon: FileSpreadsheet },
  { name: "Power BI", icon: BarChart3 },
  { name: "Semrush", icon: TrendingUp },
  { name: "Google Ads", icon: Target },
  { name: "Meta Ads", icon: Users },
  { name: "Higgsfield", icon: Clapperboard },
  { name: "Blender", icon: Shapes },
  { name: "Power Query", icon: Database },
  { name: "Power Automate", icon: Zap },
];

export function SoftwareStack() {
  const { locale } = useLocale();

  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
      {TOOLS.map((tool) => {
        const t = softwareToolBlurbs[tool.name];
        return (
          <div
            key={tool.name}
            className="group relative flex flex-col gap-3 overflow-hidden bg-background p-6 transition-colors hover:bg-card"
          >
            <div className="card-glow pointer-events-none absolute inset-0 z-0" />
            <tool.icon className="relative z-10 h-5 w-5 text-muted-foreground" />
            <div className="relative z-10">
              <h3 className="text-sm font-semibold text-foreground">
                {tool.name}
              </h3>
              <span className="text-xs uppercase tracking-wide text-muted-foreground">
                {t.category[locale]}
              </span>
            </div>
            <p className="relative z-10 text-xs leading-relaxed text-muted-foreground">
              {t.blurb[locale]}
            </p>
          </div>
        );
      })}
    </div>
  );
}
