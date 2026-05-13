"use client";

import { motion } from "framer-motion";
import { BrainIcon, TrendingUpIcon } from "@/components/icons";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import { researchInterests } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <SectionHeading
              title="About Me"
              subtitle="Building the future through intelligent systems and research"
            />

            <div className="space-y-5 text-base text-zinc-500 leading-relaxed">
              <p>
                Bachelor&apos;s graduate in Software Engineering with expertise in Information Technology Adoption, Machine Learning, Deep Learning, and Internet of Things.
              </p>
              <p>
                Contributed to multiple Scopus-indexed publications and developed AI-based solutions through interdisciplinary research and real-world projects.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {researchInterests.map((interest) => (
                <Badge key={interest} variant="accent">{interest}</Badge>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            <GlassCard className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-[#DA291C]/10">
                  <TrendingUpIcon className="w-6 h-6 text-[#DA291C]" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">3+</p>
                  <p className="text-sm text-zinc-500">Publications</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-[#DA291C]/10">
                  <BrainIcon className="w-6 h-6 text-[#DA291C]" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">10+</p>
                  <p className="text-sm text-zinc-500">Collaborations</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}