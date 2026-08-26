"use client";

import {
  Bot,
  Sparkles,
  Search,
  Image as ImageIcon,
  Palette,
  Video,
  Mic,
  Code2,
  Music,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { useLocale } from "@/lib/i18n/context";
import { aiToolBlurbs } from "@/lib/i18n/content";

interface ToolItem {
  name: string;
  icon: LucideIcon;
}

const TOOLS: ToolItem[] = [
  { name: "ChatGPT", icon: Bot },
  { name: "Claude", icon: Sparkles },
  { name: "Perplexity", icon: Search },
  { name: "Nano Banana", icon: ImageIcon },
  { name: "Midjourney", icon: Palette },
  { name: "Runway", icon: Video },
  { name: "ElevenLabs", icon: Mic },
  { name: "Cursor", icon: Code2 },
  { name: "Suno", icon: Music },
  { name: "n8n", icon: Workflow },
];

export function AiToolkit() {
  const { locale } = useLocale();

  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
      {TOOLS.map((tool) => {
        const t = aiToolBlurbs[tool.name];
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
