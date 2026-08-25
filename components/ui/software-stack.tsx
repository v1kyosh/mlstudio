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

interface ToolItem {
  name: string;
  category: string;
  blurb: string;
  icon: LucideIcon;
}

const TOOLS: ToolItem[] = [
  {
    name: "SolidWorks",
    category: "3D CAD",
    blurb: "Parametric modeling for product design and engineering.",
    icon: Box,
  },
  {
    name: "KeyShot",
    category: "3D Rendering",
    blurb: "Photorealistic rendering for product visualization.",
    icon: Aperture,
  },
  {
    name: "Adobe Creative Cloud",
    category: "Design Suite",
    blurb:
      "Photoshop, Illustrator, InDesign, After Effects, and Premiere for design and motion.",
    icon: Layers,
  },
  {
    name: "Office",
    category: "Productivity",
    blurb: "Word, Excel, and PowerPoint for reporting and documentation.",
    icon: FileSpreadsheet,
  },
  {
    name: "Power BI",
    category: "Data & Analytics",
    blurb: "Dashboards and reporting for marketing and business data.",
    icon: BarChart3,
  },
  {
    name: "Semrush",
    category: "SEO & Research",
    blurb: "Keyword research, technical SEO, and competitor tracking.",
    icon: TrendingUp,
  },
  {
    name: "Google Ads",
    category: "Paid Search",
    blurb: "Search and shopping campaigns across the funnel.",
    icon: Target,
  },
  {
    name: "Meta Ads",
    category: "Paid Social",
    blurb: "Paid social campaigns across Facebook and Instagram.",
    icon: Users,
  },
  {
    name: "Higgsfield",
    category: "AI Video",
    blurb: "AI-generated video for campaigns and social content.",
    icon: Clapperboard,
  },
  {
    name: "Blender",
    category: "3D & Motion",
    blurb: "3D modeling, rendering, and motion graphics.",
    icon: Shapes,
  },
  {
    name: "Power Query",
    category: "Data Transformation",
    blurb: "Data transformation and ETL for reporting pipelines.",
    icon: Database,
  },
  {
    name: "Power Automate",
    category: "Automation",
    blurb: "Automating workflows across Microsoft 365 and beyond.",
    icon: Zap,
  },
];

export function SoftwareStack() {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
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
