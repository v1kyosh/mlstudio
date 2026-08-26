"use client";

import Image from "next/image";
import {
  Target,
  Megaphone,
  ShoppingCart,
  Sparkles,
  Workflow,
  Palette,
  type LucideIcon,
} from "lucide-react";
import { useLocale } from "@/lib/i18n/context";
import { skillHub } from "@/lib/i18n/dictionary";

interface HubNode {
  label: string;
  icon: LucideIcon;
  x: number;
  y: number;
}

export function SkillHub() {
  const { locale } = useLocale();

  const NODES: HubNode[] = [
    { label: skillHub.strategy[locale], icon: Target, x: 50, y: 8 },
    { label: skillHub.marketing[locale], icon: Megaphone, x: 86.4, y: 29 },
    { label: skillHub.ecommerce[locale], icon: ShoppingCart, x: 86.4, y: 71 },
    { label: skillHub.aiSystems[locale], icon: Sparkles, x: 50, y: 92 },
    { label: skillHub.automation[locale], icon: Workflow, x: 13.6, y: 71 },
    { label: skillHub.brandDesign[locale], icon: Palette, x: 13.6, y: 29 },
  ];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-xl">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {NODES.map((node) => (
          <line
            key={node.label}
            x1={50}
            y1={50}
            x2={node.x}
            y2={node.y}
            stroke="currentColor"
            strokeWidth="0.4"
            className="text-border"
          />
        ))}
      </svg>

      <div
        className="absolute flex flex-col items-center gap-2"
        style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
      >
        <div className="h-16 w-16 overflow-hidden rounded-full ring-2 ring-green-400/50 sm:h-20 sm:w-20">
          <Image
            src="/marcos-leite.jpg"
            alt="Marcos Leite"
            width={80}
            height={80}
            className="h-full w-full object-cover"
          />
        </div>
        <span className="text-xs font-medium text-foreground">
          Marcos Leite
        </span>
      </div>

      {NODES.map((node) => (
        <div
          key={node.label}
          className="absolute flex flex-col items-center gap-2"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background sm:h-14 sm:w-14">
            <div className="card-glow pointer-events-none absolute inset-0 -z-10 rounded-full" />
            <node.icon className="relative z-10 h-5 w-5 text-muted-foreground" />
          </div>
          <span className="max-w-[6rem] text-center text-[11px] font-medium leading-tight text-muted-foreground sm:max-w-[7rem]">
            {node.label}
          </span>
        </div>
      ))}
    </div>
  );
}
