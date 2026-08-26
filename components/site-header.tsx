"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import Velaris from "@/components/ui/velaris";
import { LangSwitcher } from "@/components/ui/lang-switcher";
import { useLocale } from "@/lib/i18n/context";
import { nav } from "@/lib/i18n/dictionary";

export function SiteHeader() {
  const { locale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const NAV_LINKS = [
    { href: "#about", label: nav.about[locale] },
    { href: "#architecture", label: nav.architecture[locale] },
    { href: "#ai", label: nav.skills[locale] },
    { href: "#work", label: nav.work[locale] },
    { href: "#contact", label: nav.contact[locale] },
  ];

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
        <ul className="hidden items-center gap-8 sm:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <LangSwitcher dark />
          </li>
        </ul>
        <div className="flex items-center gap-3 sm:hidden">
          <LangSwitcher dark />
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? nav.closeMenu[locale] : nav.openMenu[locale]}
            aria-expanded={mobileOpen}
            className="text-white"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>
      {mobileOpen && (
        <ul className="relative z-10 flex flex-col gap-1 border-t border-white/10 bg-black/40 px-6 py-4 backdrop-blur-md sm:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
