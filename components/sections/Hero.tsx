"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { LinkedinIcon, GraduationCapIcon, MailIcon, MessageCircleIcon } from "@/components/icons";
import Button from "@/components/ui/Button";
import GridBackground from "@/components/backgrounds/GridBackground";
import AuroraBackground from "@/components/backgrounds/AuroraBackground";
import { socialLinks } from "@/lib/data";

export default function Hero() {
  const socialIcons: Record<string, React.ElementType> = {
    linkedin: LinkedinIcon,
    scholar: GraduationCapIcon,
    email: MailIcon,
    whatsapp: MessageCircleIcon,
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <GridBackground />
      <AuroraBackground />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-xs text-zinc-500">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              Available for collaborations
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tight leading-[0.95]"
          >
            <span className="block text-white">Walid Hanif</span>
            <span className="block gradient-text-accent mt-1">Ataullah</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-lg md:text-xl text-zinc-500 tracking-wide"
          >
            Software Engineer <span className="text-zinc-600 mx-2">·</span> AI Researcher <span className="text-zinc-600 mx-2">·</span> IoT Innovator
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-5 text-base text-zinc-600 max-w-lg leading-relaxed"
          >
            Bachelor&apos;s graduate in Software Engineering with expertise in Information Technology Adoption, Machine Learning, Deep Learning, and Internet of Things.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex items-center gap-4"
          >
            <Button variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              View Research
            </Button>
            <Button variant="secondary" size="lg" icon={<Download className="w-4 h-4" />}>
              Download CV
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 flex items-center gap-3"
          >
            {Object.entries(socialLinks).map(([key, url]) => {
              const Icon = socialIcons[key] || MailIcon;
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/[0.03] border border-white/[0.06] text-zinc-500 hover:text-white hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] text-zinc-600 tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-0.5 h-1.5 rounded-full bg-white/30"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}