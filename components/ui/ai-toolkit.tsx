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

interface ToolItem {
  name: string;
  category: string;
  blurb: string;
  icon: LucideIcon;
}

const TOOLS: ToolItem[] = [
  {
    name: "ChatGPT",
    category: "Strategy & Copy",
    blurb: "Campaign strategy drafts, copy variants, and rapid ideation.",
    icon: Bot,
  },
  {
    name: "Claude",
    category: "Writing & Code",
    blurb: "Long-form writing, reasoning, and this site's own build.",
    icon: Sparkles,
  },
  {
    name: "Perplexity",
    category: "Research",
    blurb: "Real-time market research and competitive intelligence.",
    icon: Search,
  },
  {
    name: "Nano Banana",
    category: "Image Generation",
    blurb: "Fast, on-brand image generation and edits (Gemini).",
    icon: ImageIcon,
  },
  {
    name: "Midjourney",
    category: "Concept Art",
    blurb: "Moodboards and concept visuals for creative direction.",
    icon: Palette,
  },
  {
    name: "Runway",
    category: "Video",
    blurb: "AI video generation and editing for campaign content.",
    icon: Video,
  },
  {
    name: "ElevenLabs",
    category: "Voice & Audio",
    blurb: "Voiceover and sound for video and social content.",
    icon: Mic,
  },
  {
    name: "Cursor",
    category: "Development",
    blurb: "AI-assisted development across this portfolio and beyond.",
    icon: Code2,
  },
  {
    name: "Suno",
    category: "Music",
    blurb: "Original audio scoring for brand and social work.",
    icon: Music,
  },
  {
    name: "n8n",
    category: "Automation",
    blurb: "Wiring AI models into real marketing automation workflows.",
    icon: Workflow,
  },
];

export function AiToolkit() {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
      {TOOLS.map((tool) => (
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
              {tool.category}
            </span>
          </div>
          <p className="relative z-10 text-xs leading-relaxed text-muted-foreground">
            {tool.blurb}
          </p>
        </div>
      ))}
    </div>
  );
}
