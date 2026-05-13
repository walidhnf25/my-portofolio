"use client";

import { motion } from "framer-motion";
import { GlobeIcon, QuoteIcon } from "@/components/icons";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";

const publications = [
  {
    title: "Analysis of Technology Acceptance Model (TAM) and Information System Success Model (ISSM) on Intention to Use E-Government in Indonesia",
    year: "2024",
    status: "Published",
    journal: "Procedia Computer Science",
    tags: ["E-Government", "TAM", "Information Systems"],
  },
  {
    title: "Acceptance of AI-Based Application for Digital Health: A Study of Factors Affecting Intention to Use",
    year: "2024",
    status: "Published",
    journal: "IEEE Conference",
    tags: ["AI", "Digital Health", "Technology Acceptance"],
  },
  {
    title: "Machine Learning Approach for IoT-Based Air Quality Monitoring System",
    year: "2025",
    status: "Under Review",
    journal: "Sensors",
    tags: ["Machine Learning", "IoT", "Air Quality"],
  },
];

export default function Research() {
  return (
    <section id="research" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          title="Research"
          subtitle="Contributing to scientific knowledge and innovation"
          align="center"
        />

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-zinc-600">{pub.year}</span>
                  <Badge variant={pub.status === "Published" ? "accent" : "outline"}>
                    {pub.status}
                  </Badge>
                </div>

                <h3 className="text-base font-semibold text-white leading-snug mb-3 line-clamp-3">
                  {pub.title}
                </h3>

                <div className="flex items-center gap-1.5 mb-4">
                  <GlobeIcon className="w-3.5 h-3.5 text-zinc-600" />
                  <span className="text-xs text-zinc-600">{pub.journal}</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {pub.tags.map((tag) => (
                    <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.03] text-zinc-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 p-8 rounded-xl bg-[#0a0a0a] border border-white/[0.06]"
        >
          <div className="flex items-start gap-5">
            <div className="p-3 rounded-lg bg-[#DA291C]/10 shrink-0">
              <QuoteIcon className="w-6 h-6 text-[#DA291C]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Research Philosophy</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                I believe in conducting research that bridges theoretical frameworks with practical applications, focusing on understanding technology adoption in diverse contexts and leveraging AI and IoT to address real-world challenges.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}