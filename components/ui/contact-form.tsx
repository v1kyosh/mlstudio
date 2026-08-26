"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PROFILE } from "@/lib/resume-data";
import { useLocale } from "@/lib/i18n/context";
import { contactForm, footer } from "@/lib/i18n/dictionary";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const { locale } = useLocale();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Request failed");
      }
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <Label htmlFor="name" className="text-white/70">
          {contactForm.name[locale]}
        </Label>
        <Input
          id="name"
          required
          maxLength={200}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={contactForm.namePlaceholder[locale]}
          className="border-white/20 bg-white/5 text-white placeholder:text-white/40 focus-visible:border-white/40 focus-visible:ring-white/20"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email" className="text-white/70">
          {contactForm.email[locale]}
        </Label>
        <Input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={contactForm.emailPlaceholder[locale]}
          className="border-white/20 bg-white/5 text-white placeholder:text-white/40 focus-visible:border-white/40 focus-visible:ring-white/20"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="message" className="text-white/70">
          {contactForm.message[locale]}
        </Label>
        <Textarea
          id="message"
          required
          maxLength={5000}
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={contactForm.messagePlaceholder[locale]}
          className="border-white/20 bg-white/5 text-white placeholder:text-white/40 focus-visible:border-white/40 focus-visible:ring-white/20"
        />
      </div>
      <p className="text-xs text-white/50">
        {contactForm.consentPrefix[locale]}{" "}
        <a href="/privacy" className="underline hover:text-white/70">
          {footer.privacy[locale]}
        </a>
        .
      </p>
      <Button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 w-fit rounded-full bg-white px-6 text-black hover:bg-white/85 disabled:opacity-60"
      >
        {status === "sending" ? contactForm.sending[locale] : contactForm.send[locale]}
      </Button>
      {status === "sent" && (
        <p className="text-sm text-green-400">{contactForm.sent[locale]}</p>
      )}
      {status === "error" && (
        <p className="text-sm text-white/70">
          {errorMessage || contactForm.errorGeneric[locale]}{" "}
          {contactForm.errorEmailDirect[locale]}{" "}
          <a href={`mailto:${PROFILE.email}`} className="underline">
            {PROFILE.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
