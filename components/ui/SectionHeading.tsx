"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  className,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const alignments = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, margin: "-30px" }}
      className={cn("max-w-2xl", alignments[align], className)}
    >
      <h2 className={cn(
        "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]",
        light ? "text-white" : "gradient-text"
      )}>
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-zinc-500 leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}