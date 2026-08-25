import { Logo } from "@/components/logo";

const FOOTER_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#ai", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Logo className="h-4 w-auto text-foreground" />
          <p className="mt-2 text-sm text-muted-foreground">
            Full Stack Marketeer - Brand, Product &amp; Growth.
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
          Connect on LinkedIn
        </a>
      </div>
      <div className="mx-auto mt-8 max-w-5xl border-t border-border pt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Marcos Leite. All rights reserved.
      </div>
    </footer>
  );
}
