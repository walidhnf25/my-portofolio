"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className,
  delay = 0,
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, margin: "-30px" }}
      className={cn(
        "relative bg-[#0a0a0a] rounded-xl border border-white/6",
        hover && "transition-all duration-300 hover:border-white/10 hover:bg-[#0c0c0c]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}