"use client";

import { motion } from "framer-motion";
import { TrendingUpIcon, AwardIcon, CodeIcon, FileBadgeIcon, GraduationCapIcon } from "@/components/icons";
import Badge from "@/components/ui/Badge";

const stats = [
  { icon: CodeIcon, value: "12+", label: "Projects" },
  { icon: AwardIcon, value: "8+", label: "Awards" },
  { icon: FileBadgeIcon, value: "2+", label: "Copyrights" },
  { icon: GraduationCapIcon, value: "2+", label: "Certifications" },
  { icon: TrendingUpIcon, value: "7+", label: "Publications" },
];

export default function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-12 gap-16 items-start"
        >
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-[11px] text-[#DA291C] uppercase tracking-[0.2em] mb-4"
            >
              About
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-8"
            >
              Building the future through{' '}
              <span className="bg-gradient-to-r from-[#DA291C] to-[#e64a3a] bg-clip-text text-transparent">
                intelligent systems
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-5 text-sm sm:text-base text-zinc-400 leading-relaxed"
            >
              <p>
                Bachelor&apos;s graduate in Software Engineering with strong academic and research experience in Information Technology Adoption, Machine Learning, Deep Learning, and Internet of Things.
              </p>
              <p>
                Actively contributed to multiple Scopus-indexed publications and developed data-driven and AI-based solutions through interdisciplinary research and real-world projects, with a strong ability to translate research concepts into practical applications.
              </p>
              <p>
                Highly motivated to pursue advanced studies and contribute to the development of impactful, technology-driven solutions for societal and industrial challenges.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <p className="text-[11px] text-zinc-600 uppercase tracking-[0.15em] mb-5">
                Research Interests
              </p>
              <div className="flex flex-wrap gap-2">
                {["Information Technology Adoption", "Machine Learning", "Deep Learning", "Internet of Things"].map((interest, i) => (
                  <motion.span
                    key={interest}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.35 + i * 0.05 }}
                    viewport={{ once: true }}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:border-[#DA291C]/30 hover:text-white transition-colors"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  viewport={{ once: true }}
                  className="group relative p-6 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.06] hover:border-white/[0.1] transition-all duration-300"
                >
                  <stat.icon className="w-5 h-5 text-[#DA291C] mb-4" />
                  <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-[11px] text-zinc-500 uppercase tracking-wide">{stat.label}</p>

                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#DA291C]/0 via-[#DA291C]/0 to-[#DA291C]/0 group-hover:from-[#DA291C]/5 group-hover:via-transparent group-hover:to-transparent transition-all duration-500" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}