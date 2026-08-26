"use client";

import { Logo } from "@/components/logo";
import { useLocale } from "@/lib/i18n/context";
import { nav, footer } from "@/lib/i18n/dictionary";

export function SiteFooter() {
  const { locale } = useLocale();

  const FOOTER_LINKS = [
    { href: "#about", label: nav.about[locale] },
    { href: "#experience", label: nav.experience[locale] },
    { href: "#ai", label: nav.skills[locale] },
    { href: "#work", label: nav.work[locale] },
    { href: "#contact", label: nav.contact[locale] },
  ];

  return (
    <footer className="border-t border-border bg-background px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Logo className="h-4 w-auto text-foreground" />
          <p className="mt-2 text-sm text-muted-foreground">
            {footer.tagline[locale]}
          </p>
        </div>
        <ul className="flex flex-wrap gap-6">
          {FOOTER_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://www.linkedin.com/in/marcos-leite-153bba194/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
        >
          {footer.linkedin[locale]}
        </a>
      </div>
      <div className="mx-auto mt-8 flex max-w-5xl flex-wrap items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground">
        <span>
          © {new Date().getFullYear()} Marcos Leite. {footer.rights[locale]}
        </span>
        <a href="/privacy" className="transition-colors hover:text-foreground">
          {footer.privacy[locale]}
        </a>
      </div>
    </footer>
  );
}
