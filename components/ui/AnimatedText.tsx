"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  variant?: "fade" | "slide" | "scale";
}

export default function AnimatedText({
  text,
  className = "",
  delay = 0,
  stagger = 0.04,
  variant = "slide",
}: AnimatedTextProps) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setInView(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  const getVariants = (): Variants => {
    const base = {
      hidden: { opacity: 0 },
      visible: (i: number) => ({
        opacity: 1,
        transition: { delay: delay + i * stagger, duration: 0.5 },
      }),
    };

    if (variant === "slide") {
      return {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
          opacity: 1,
          y: 0,
          transition: { delay: delay + i * stagger, duration: 0.5 },
        }),
      };
    }

    if (variant === "scale") {
      return {
        hidden: { opacity: 0, scale: 0.9 },
        visible: (i: number) => ({
          opacity: 1,
          scale: 1,
          transition: { delay: delay + i * stagger, duration: 0.5 },
        }),
      };
    }

    return base;
  };

  return (
    <span className={cn("inline-block", className)}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          custom={index}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={getVariants()}
          className="inline-block"
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </span>
  );
}