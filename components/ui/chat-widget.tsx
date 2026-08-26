"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { PROFILE } from "@/lib/resume-data";
import { useLocale } from "@/lib/i18n/context";
import { chat } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/locales";

interface Message {
  role: "bot" | "user";
  text: string;
}

interface FaqEntry {
  keywords: string[];
  answer: (locale: Locale) => string;
}

function fill(template: string, vars: Record<string, string>): string {
  return Object.entries(vars).reduce(
    (acc, [key, value]) => acc.replaceAll(`{${key}}`, value),
    template,
  );
}

const FAQ: FaqEntry[] = [
  {
    keywords: ["hi", "hello", "hey", "ola", "olá", "yo", "hola"],
    answer: (l) => chat.faqGreeting[l],
  },
  {
    keywords: ["who", "about you", "about marcos", "yourself", "quem", "quién"],
    answer: (l) => chat.faqWho[l],
  },
  {
    keywords: [
      "service",
      "offer",
      "what do you do",
      "what does he do",
      "help with",
      "serviço",
      "servicio",
    ],
    answer: (l) => chat.faqServices[l],
  },
  {
    keywords: ["contact", "hire", "email", "reach", "touch", "work with", "contacto"],
    answer: (l) => fill(chat.faqContact[l], { email: PROFILE.email }),
  },
  {
    keywords: ["resume", "cv", "download", "currículo", "currículum"],
    answer: (l) => chat.faqResume[l],
  },
  {
    keywords: ["experience", "years", "how long", "experiência", "experiencia"],
    answer: (l) => chat.faqExperience[l],
  },
  {
    keywords: ["work", "portfolio", "project", "case stud", "trabalho", "proyecto"],
    answer: (l) => chat.faqWork[l],
  },
  {
    keywords: ["ai", "claude", "tool", "tech stack", "agent", "ia", "ferramenta"],
    answer: (l) => chat.faqAi[l],
  },
  {
    keywords: ["price", "cost", "rate", "budget", "preço", "precio"],
    answer: (l) => fill(chat.faqPrice[l], { email: PROFILE.email }),
  },
  {
    keywords: ["language", "speak", "idioma", "fala", "habla"],
    answer: (l) => fill(chat.faqLanguage[l], { languages: PROFILE.languages }),
  },
  {
    keywords: ["flama", "current", "company", "job", "empresa"],
    answer: (l) => chat.faqCompany[l],
  },
];

function findAnswer(input: string, locale: Locale): string {
  const q = input.toLowerCase();
  const hit = FAQ.find((entry) => entry.keywords.some((k) => q.includes(k)));
  return hit
    ? hit.answer(locale)
    : fill(chat.fallback[locale], { email: PROFILE.email });
}

export function ChatWidget() {
  const { locale } = useLocale();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: chat.greeting[locale] },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, typing]);

  function ask(question: string, answer: string) {
    setMessages((prev) => [...prev, { role: "user", text: question }]);
    setTyping(true);
    setTimeout(
      () => {
        setMessages((prev) => [...prev, { role: "bot", text: answer }]);
        setTyping(false);
      },
      500 + Math.min(question.length * 15, 800),
    );
  }

  function handleTldr() {
    ask("TL;DR", chat.tldrAnswer[locale]);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const question = input.trim();
    if (!question) return;
    setInput("");
    ask(question, findAnswer(question, locale));
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex h-[28rem] w-[calc(100vw-3rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div>
              <div className="text-sm font-medium text-foreground">
                {chat.assistantName[locale]}
              </div>
              <div className="text-xs text-muted-foreground">
                {chat.repliesInstantly[locale]}
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={chat.closeChat[locale]}
              className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div
            ref={listRef}
            className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-green-400 text-black"
                      : "bg-accent text-foreground"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1 rounded-2xl bg-accent px-3.5 py-2.5">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" />
                </div>
              </div>
            )}
            {messages.length === 1 && !typing && (
              <button
                type="button"
                onClick={handleTldr}
                className="rounded-full border border-green-400/40 px-3.5 py-1.5 text-xs font-medium text-green-400 transition-colors hover:bg-green-400/10"
              >
                {chat.tldrButton[locale]}
              </button>
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-border p-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={chat.askQuestion[locale]}
              className="flex-1 rounded-full border border-border bg-background px-3.5 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-green-400"
            />
            <button
              type="submit"
              aria-label={chat.send[locale]}
              className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-green-400 text-black transition-colors hover:bg-green-400/85 disabled:opacity-50"
              disabled={!input.trim()}
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? chat.closeChat[locale] : chat.openChat[locale]}
        data-cursor={open ? undefined : chat.askQuestionCursor[locale]}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-400 text-black shadow-lg transition-transform hover:scale-105"
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>
    </div>
  );
}
