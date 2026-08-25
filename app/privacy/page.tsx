import type { Metadata } from "next";
import { PROFILE } from "@/lib/resume-data";

export const metadata: Metadata = {
  title: "Privacy Policy - Marcos Leite",
  description: "How this site collects, uses, and protects your data.",
};

const LAST_UPDATED = "August 2026";

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <a
        href="/"
        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        &larr; Back to site
      </a>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Privacy &amp; Cookies Policy
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Last updated: {LAST_UPDATED}
      </p>

      <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-foreground/80">
        <section>
          <h2 className="text-base font-medium text-foreground">
            1. Who is responsible for your data
          </h2>
          <p className="mt-2">
            This site (the &quot;Site&quot;) is operated by {PROFILE.name},
            acting as the data controller for the personal data described
            below. For any privacy-related question or request, use the{" "}
            <a
              href="/#contact"
              className="text-green-400 underline-offset-2 hover:underline"
            >
              contact form
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium text-foreground">
            2. What data is collected
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              <span className="text-foreground">Contact form:</span> the
              name, email address, and message you choose to submit through
              the Contact section.
            </li>
            <li>
              <span className="text-foreground">Technical/server data:</span>{" "}
              basic request logs (such as IP address and timestamp)
              collected automatically by the hosting provider as part of
              normal web server operation.
            </li>
          </ul>
          <p className="mt-2">
            The Site does not use analytics scripts, advertising pixels, or
            login/account systems, so no other personal data is collected
            beyond what is listed above.
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium text-foreground">
            3. Why this data is processed
          </h2>
          <p className="mt-2">
            Contact form data is processed solely to respond to your
            message. Server logs are processed for security, abuse
            prevention, and to keep the Site running reliably. The legal
            basis is your consent (submitting the form) and legitimate
            interest (operating and securing the Site).
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium text-foreground">
            4. Who this data is shared with
          </h2>
          <p className="mt-2">
            Contact form submissions are delivered using a third-party
            email-delivery service, solely to transmit your message to{" "}
            {PROFILE.name}. The Site is hosted on a cloud hosting provider,
            which processes server logs as part of providing hosting
            infrastructure. Both providers act as data processors, are
            bound by their own privacy and data-protection terms, and are
            named in full on request. Your data is never sold or used for
            advertising.
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium text-foreground">
            5. How long data is kept
          </h2>
          <p className="mt-2">
            Contact form messages are kept only as long as needed to handle
            your inquiry, and are deleted on request. Server logs are
            retained by the hosting provider for a limited period for
            security purposes, per their own retention policy.
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium text-foreground">
            6. Cookies
          </h2>
          <p className="mt-2">
            This Site does not use cookies, local storage, or any similar
            tracking technology to identify or track visitors. If that ever
            changes (for example, if analytics are added in the future),
            this page will be updated and, where required, a consent
            banner will be added.
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium text-foreground">
            7. Your rights
          </h2>
          <p className="mt-2">
            Under the GDPR, you have the right to access, correct, delete,
            restrict, or object to the processing of your personal data,
            and to request a copy of it in a portable format. To exercise
            any of these rights, use the{" "}
            <a
              href="/#contact"
              className="text-green-400 underline-offset-2 hover:underline"
            >
              contact form
            </a>
            . You also have the right to lodge a complaint with your local
            data protection authority (in Portugal, the{" "}
            <a
              href="https://www.cnpd.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 underline-offset-2 hover:underline"
            >
              CNPD
            </a>
            ).
          </p>
        </section>

        <section>
          <h2 className="text-base font-medium text-foreground">
            8. Changes to this policy
          </h2>
          <p className="mt-2">
            This policy may be updated from time to time to reflect changes
            to the Site. The &quot;Last updated&quot; date at the top of
            this page will always reflect the latest version.
          </p>
        </section>
      </div>
    </main>
  );
}
