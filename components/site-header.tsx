"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import Velaris from "@/components/ui/velaris";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#architecture", label: "Architecture" },
  { href: "#ai", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setScrolled(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 overflow-hidden border-b border-white/10 ${
        scrolled ? "" : "bg-black/20 backdrop-blur-md"
      }`}
    >
      {scrolled && (
        <div className="absolute inset-0">
          <Velaris height="100%" speed={1.4} grain={0.25} />
        </div>
      )}
      <nav className="relative z-10 mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="/" aria-label="Marcos Leite" className="text-white">
          <Logo className="h-3.5 w-auto sm:h-4" />
        </a>
        <ul className="flex items-center gap-5 sm:gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-medium text-white/70 transition-colors hover:text-white sm:text-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
