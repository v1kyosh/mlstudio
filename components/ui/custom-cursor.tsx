"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [label, setLabel] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    document.body.classList.add("custom-cursor-active");

    function handleMove(e: MouseEvent) {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    }
    function handleLeave() {
      setIsVisible(false);
    }
    function handleOver(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest("[data-cursor]");
      setLabel(target ? target.getAttribute("data-cursor") : null);
    }

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseover", handleOver);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseover", handleOver);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[999]"
      style={{ x: mouseX, y: mouseY }}
    >
      <motion.div
        animate={{
          width: label ? "auto" : 10,
          height: label ? 34 : 10,
          paddingLeft: label ? 16 : 0,
          paddingRight: label ? 16 : 0,
        }}
        transition={{ duration: 0.08, ease: "easeOut" }}
        className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center whitespace-nowrap rounded-full bg-green-400 text-xs font-semibold text-black"
      >
        {label}
      </motion.div>
    </motion.div>
  );
}
