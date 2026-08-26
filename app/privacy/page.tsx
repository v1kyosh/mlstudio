import type { Metadata } from "next";
import { PrivacyContent } from "@/components/privacy-content";

export const metadata: Metadata = {
  title: "Privacy Policy - Marcos Leite",
  description: "How this site collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
