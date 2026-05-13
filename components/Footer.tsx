"use client";

import { motion } from "framer-motion";
import { LinkedinIcon, GraduationCapIcon, MailIcon, MessageCircleIcon } from "@/components/icons";
import { socialLinks } from "@/lib/data";

const socialIcons: Record<string, React.ElementType> = {
  linkedin: LinkedinIcon,
  scholar: GraduationCapIcon,
  email: MailIcon,
  whatsapp: MessageCircleIcon,
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04]">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold">
              <span className="gradient-text-accent">Walid Hanif Ataullah</span>
            </h3>
            <p className="mt-1 text-sm text-zinc-600">Software Engineer & ML/DL Enthusiast</p>
          </div>

          <div className="flex items-center gap-2">
            {Object.entries(socialLinks).map(([key, url]) => {
              const Icon = socialIcons[key] || MailIcon;
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/[0.02] border border-white/[0.04] text-zinc-500 hover:text-white hover:bg-white/[0.05] hover:border-white/[0.08] transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-zinc-700">© 2025 Walid Hanif Ataullah</p>
          <p className="text-xs text-zinc-700">Built with Next.js & Tailwind</p>
        </div>
      </div>
    </footer>
  );
}