"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { PROFILE } from "@/lib/resume-data";

interface Message {
  role: "bot" | "user";
  text: string;
}

interface FaqEntry {
  keywords: string[];
  answer: string;
}

const FAQ: FaqEntry[] = [
  {
    keywords: ["hi", "hello", "hey", "ola", "olá", "yo"],
    answer:
      "Hey! Ask me about Marcos's work, skills, experience, or how to get in touch.",
  },
  {
    keywords: ["who", "about you", "about marcos", "yourself"],
    answer:
      "Marcos Leite is a Full Stack Marketeer - he runs brand, product, and growth as one system instead of three separate hires. 13+ years across brand identity, product design, and AI-driven growth. Check the About section above for the full story.",
  },
  {
    keywords: ["service", "offer", "what do you do", "what does he do", "help with"],
    answer:
      "He covers brand strategy & creative direction, product design, ecommerce & CRO, technical SEO, lifecycle email, and AI-native internal tooling - building software with Claude and AI agents instead of buying SaaS. See the Full Stack Architecture section for the full breakdown.",
  },
  {
    keywords: ["contact", "hire", "email", "reach", "touch", "work with"],
    answer: `You can reach Marcos directly at ${PROFILE.email}, via LinkedIn, or the contact form at the bottom of this page.`,
  },
  {
    keywords: ["resume", "cv", "download"],
    answer: "You can download his resume as a PDF from the \"Download Resume\" button at the top of the page, or via /api/resume.",
  },
  {
    keywords: ["experience", "years", "how long"],
    answer:
      "13+ years of experience - from hands-on graphic and editorial design to leading brand, marketing, and product functions end-to-end.",
  },
  {
    keywords: ["work", "portfolio", "project", "case stud"],
    answer:
      "Scroll down to Selected Work for real projects - from an in-house AI platform suite to trade-show stands and product design for Yamaha Racing.",
  },
  {
    keywords: ["ai", "claude", "tool", "tech stack", "agent"],
    answer:
      "He builds AI-native internal tooling using Claude and AI coding agents - PIM, DAM, SRM, ticketing, and repair systems built in-house instead of licensed SaaS. See the AI Toolkit section.",
  },
  {
    keywords: ["price", "cost", "rate", "budget"],
    answer: `Rates depend on scope - the fastest way to get a real answer is to reach out directly at ${PROFILE.email}.`,
  },
  {
    keywords: ["language", "speak"],
    answer: `He speaks ${PROFILE.languages}.`,
  },
  {
    keywords: ["flama", "current", "company", "job"],
    answer:
      "He's currently Brand & Creative Manager at FLAMA S.A., leading brand, product, and the AI-native growth engine behind it.",
  },
];

const FALLBACK_ANSWER = `I don't have a canned answer for that - the fastest way to get a real answer is to email Marcos directly at ${PROFILE.email} or use the contact form below.`;

const GREETING: Message = {
  role: "bot",
  text: "Hi, I'm Marcos's assistant. Ask me about his work, skills, or how to get in touch.",
};

const TLDR_ANSWER =
  "13+ years running brand, product, and growth as one system - not three separate hires. Most recently: built an in-house AI platform suite (PIM, DAM, SRM, repairs, ticketing) with Claude and AI agents instead of buying SaaS, saving an estimated €370k in setup and €67k/year. Hire him if you want someone who can set the strategy, design the brand, and ship the software behind it - without three handoffs in between.";

function findAnswer(input: string): string {
  const q = input.toLowerCase();
  const hit = FAQ.find((entry) => entry.keywords.some((k) => q.includes(k)));
  return hit ? hit.answer : FALLBACK_ANSWER;
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
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
    ask("TL;DR", TLDR_ANSWER);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const question = input.trim();
    if (!question) return;
    setInput("");
    ask(question, findAnswer(question));
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex h-[28rem] w-[calc(100vw-3rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div>
              <div className="text-sm font-medium text-foreground">
                Marcos's Assistant
              </div>
              <div className="text-xs text-muted-foreground">
                Usually replies instantly
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
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
                TL;DR - too lazy to read?
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
              placeholder="Ask a question..."
              className="flex-1 rounded-full border border-border bg-background px-3.5 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-green-400"
            />
            <button
              type="submit"
              aria-label="Send"
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
        aria-label={open ? "Close chat" : "Open chat"}
        data-cursor={open ? undefined : "Ask a question"}
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
