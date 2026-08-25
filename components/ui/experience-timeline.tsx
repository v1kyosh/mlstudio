"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/resume-data";

export function ExperienceTimeline() {
  return (
    <div className="divide-y divide-border border-y border-border">
      {EXPERIENCE.map((item) => (
        <motion.div
          key={`${item.company}-${item.role}`}
          className="group relative overflow-hidden px-2 py-10 sm:px-4"
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          <motion.div
            className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r ${item.accent}`}
            variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          <div className="card-glow pointer-events-none absolute inset-0 -z-10" />
          <div className="relative flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {item.company}
              </h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                {item.role}
              </p>
            </div>
            <span className="text-sm font-medium tabular-nums text-muted-foreground">
              {item.period}
            </span>
          </div>
          {item.highlights.length > 1 ? (
            <ul className="mt-4 max-w-2xl space-y-2">
              {item.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-2 h-1 w-1 flex-none rounded-full bg-muted-foreground" />
                  {highlight}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {item.highlights[0]}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  );
}
