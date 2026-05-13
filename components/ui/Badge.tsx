"use client";

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent" | "gold" | "outline";
}

export default function Badge({
  children,
  className,
  variant = "default",
}: BadgeProps) {
  const variants = {
    default: "bg-white/[0.04] text-zinc-400 border border-white/[0.08]",
    accent: "bg-[#DA291C]/10 text-[#DA291C] border border-[#DA291C]/20",
    gold: "bg-[#FFD700]/10 text-[#FFD700] border border-[#FFD700]/20",
    outline: "bg-transparent text-zinc-300 border border-white/10",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}