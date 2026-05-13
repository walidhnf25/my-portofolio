"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  icon?: ReactNode;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  disabled = false,
  icon,
}: ButtonProps) {
  const variants = {
    primary: cn(
      "bg-[#DA291C] text-white",
      "hover:bg-[#e83025]",
      "shadow-[0_0_20px_rgba(218,41,28,0.15)]"
    ),
    secondary: cn(
      "bg-white/5 border border-white/10",
      "text-white",
      "hover:bg-white/10 hover:border-white/15"
    ),
    ghost: cn(
      "text-zinc-400",
      "hover:text-white hover:bg-white/5"
    ),
    outline: cn(
      "bg-transparent border border-[#DA291C]/30",
      "text-white",
      "hover:border-[#DA291C]/50 hover:bg-[#DA291C]/5"
    ),
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3 text-sm",
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300",
        "disabled:opacity-40 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </motion.button>
  );
}