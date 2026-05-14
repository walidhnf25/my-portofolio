"use client";

import { motion } from "framer-motion";
import { TrendingUpIcon, AwardIcon, CodeIcon, FileBadgeIcon, GraduationCapIcon } from "@/components/icons";

const stats = [
  { icon: CodeIcon, value: "12+", label: "Projects" },
  { icon: AwardIcon, value: "8+", label: "Awards" },
  { icon: FileBadgeIcon, value: "2+", label: "Copyrights" },
  { icon: GraduationCapIcon, value: "2+", label: "Certifications" },
  { icon: TrendingUpIcon, value: "7+", label: "Publications" },
];

export default function About() {
  return (
    <section id="about" className="relative py-40 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-[#DA291C]/2 blur-[150px] rounded-full" />
      </div>

      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-[10px] text-[#DA291C] uppercase tracking-[0.3em] mb-4"
          >
            About
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-5"
          >
            Building the future through{' '}
            <span className="bg-linear-to-r from-[#DA291C] to-[#e64a3a] bg-clip-text text-transparent">
              intelligent systems
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm text-zinc-500 max-w-xl"
          >
            Bachelor&apos;s graduate in Software Engineering with strong academic and research experience in AI, machine learning, and information systems
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="space-y-5 text-sm sm:text-base text-zinc-400 leading-relaxed">
              <p>
                Actively contributed to multiple Scopus-indexed publications and developed data-driven and AI-based solutions through interdisciplinary research and real-world projects.
              </p>
              <p>
                Highly motivated to pursue advanced studies and contribute to the development of impactful, technology-driven solutions for societal and industrial challenges.
              </p>
            </div>

            <div className="mt-10">
              <p className="text-[10px] text-zinc-600 uppercase tracking-widest mb-5">
                Research Interests
              </p>
              <div className="flex flex-wrap gap-2">
                {["Information Technology Adoption", "Machine Learning", "Deep Learning", "Internet of Things"].map((interest, i) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/3 border border-white/6 text-zinc-400 hover:border-[#DA291C]/30 hover:text-white transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  viewport={{ once: true }}
                  className="group relative p-5 sm:p-6 rounded-2xl border transition-all duration-300"
                  style={{
                    background: "linear-gradient(145deg, rgba(10,10,10,0.85), rgba(6,6,6,0.95))",
                    borderColor: "rgba(255,255,255,0.04)",
                  }}
                >
                  <stat.icon className="w-5 h-5 text-[#DA291C] mb-3 sm:mb-4" />
                  <p className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-[10px] sm:text-[11px] text-zinc-500 uppercase tracking-widest">{stat.label}</p>

                  <div
                    className="absolute -inset-6 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                    style={{
                      background: "radial-gradient(ellipse at center, rgba(218,41,28,0.06), transparent 60%)",
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <div className="h-px w-24 bg-linear-to-r from-transparent via-[#DA291C]/25 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}