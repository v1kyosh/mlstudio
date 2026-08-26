"use client";

import type { ReactNode } from "react";
import { PROFILE } from "@/lib/resume-data";
import { useLocale } from "@/lib/i18n/context";
import { privacyPage } from "@/lib/i18n/dictionary";

const LAST_UPDATED = "August 2026";

/** Splits a template string like "a {x} b {y} c" into text/placeholder
 * chunks so JSX links can be substituted in for specific placeholders. */
function renderTemplate(
  template: string,
  replacements: Record<string, ReactNode>,
): ReactNode[] {
  const parts = template.split(/(\{[a-zA-Z]+\})/g);
  return parts.map((part, i) => {
    const match = /^\{([a-zA-Z]+)\}$/.exec(part);
    if (match && replacements[match[1]] !== undefined) {
      return <span key={i}>{replacements[match[1]]}</span>;
    }
    return <span key={i}>{part}</span>;
  });
}

export function PrivacyContent() {
  const { locale } = useLocale();
  const t = privacyPage;

  const contactFormLink = (
    <a
      href="/#contact"
      className="text-green-400 underline-offset-2 hover:underline"
    >
      {t.contactFormLink[locale]}
    </a>
  );

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <a
        href="/"
        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        {t.backToSite[locale]}
      </a>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {t.title[locale]}
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {t.lastUpdated[locale]} {LAST_UPDATED}
      </p>

      <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-foreground/80">
        <section>
          <h2 className="text-base font-medium text-foreground">
            {t.s1Title[locale]}
          </h2>
          <p className="mt-2">
            {renderTemplate(t.s1Body[locale], {
              name: PROFILE.name,
              contactForm: contactFormLink,
            })}
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium text-foreground">
            {t.s2Title[locale]}
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              <span className="text-foreground">{t.s2Item1Label[locale]}</span>{" "}
              {t.s2Item1[locale]}
            </li>
            <li>
              <span className="text-foreground">{t.s2Item2Label[locale]}</span>{" "}
              {t.s2Item2[locale]}
            </li>
          </ul>
          <p className="mt-2">{t.s2Body[locale]}</p>
        </section>

        <section>
          <h2 className="text-base font-medium text-foreground">
            {t.s3Title[locale]}
          </h2>
          <p className="mt-2">{t.s3Body[locale]}</p>
        </section>

        <section>
          <h2 className="text-base font-medium text-foreground">
            {t.s4Title[locale]}
          </h2>
          <p className="mt-2">
            {renderTemplate(t.s4Body[locale], { name: PROFILE.name })}
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium text-foreground">
            {t.s5Title[locale]}
          </h2>
          <p className="mt-2">{t.s5Body[locale]}</p>
        </section>

        <section>
          <h2 className="text-base font-medium text-foreground">
            {t.s6Title[locale]}
          </h2>
          <p className="mt-2">{t.s6Body[locale]}</p>
        </section>

        <section>
          <h2 className="text-base font-medium text-foreground">
            {t.s7Title[locale]}
          </h2>
          <p className="mt-2">
            {renderTemplate(t.s7Body[locale], {
              contactForm: contactFormLink,
              cnpd: (
                <a
                  href="https://www.cnpd.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 underline-offset-2 hover:underline"
                >
                  CNPD
                </a>
              ),
            })}
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium text-foreground">
            {t.s8Title[locale]}
          </h2>
          <p className="mt-2">{t.s8Body[locale]}</p>
        </section>
      </div>
    </main>
  );
}
