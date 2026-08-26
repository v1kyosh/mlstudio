import type { Metadata } from "next";
import { SummaryContent } from "@/components/summary-content";

export const metadata: Metadata = {
  title: "Quick Summary - Marcos Leite",
  description: "The 30-second version of Marcos Leite's background.",
};

export default function SummaryPage() {
  return <SummaryContent />;
}
