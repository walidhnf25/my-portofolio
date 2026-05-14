"use client";

import { motion } from "framer-motion";

const publications = [
  {
    title: "Analysis of Technology Acceptance Model (TAM) and Information System Success Model (ISSM) on Intention to Use E-Government in Indonesia",
    year: "2024",
    journal: "Procedia Computer Science",
    tags: ["E-Government", "TAM", "Information Systems"],
  },
  {
    title: "Acceptance of AI-Based Application for Digital Health: A Study of Factors Affecting Intention to Use",
    year: "2024",
    journal: "IEEE Conference",
    tags: ["AI", "Digital Health", "Technology Acceptance"],
  },
  {
    title: "Machine Learning Approach for IoT-Based Air Quality Monitoring System",
    year: "2025",
    journal: "Sensors",
    tags: ["Machine Learning", "IoT", "Air Quality"],
  },
];

export default function Research() {
  return (
    <section id="research" className="relative py-40 overflow-hidden">
      {/* Subtle ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2 w-125 h-100 bg-[#DA291C]/2 blur-[150px] rounded-full" />
      </div>

      <div className="mx-auto max-w-5xl px-6">
        {/* Section Header */}
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
            Research
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-5"
          >
            Pushing the boundaries of{' '}
            <span className="bg-linear-to-r from-[#DA291C] to-[#e64a3a] bg-clip-text text-transparent">
              knowledge
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm text-zinc-500 max-w-xl"
          >
            Contributing to scientific knowledge through interdisciplinary research in AI, machine learning, and information systems
          </motion.p>
        </motion.div>

        {/* Publications List */}
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Card */}
              <div
                className="relative rounded-2xl p-6 sm:p-8 border transition-all duration-500 group-hover:border-white/8"
                style={{
                  background: "linear-gradient(145deg, rgba(10,10,10,0.85), rgba(6,6,6,0.95))",
                  borderColor: "rgba(255,255,255,0.04)",
                }}
              >
                {/* Subtle glow on hover */}
                <div
                  className="absolute -inset-6 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"
                  style={{
                    background: "radial-gradient(ellipse at left, rgba(218,41,28,0.06), transparent 60%)",
                  }}
                />

                {/* Year indicator - stacked on mobile, row on desktop */}
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <span className="text-2xl sm:text-3xl font-bold text-[#DA291C] tracking-tight">
                    {pub.year}
                  </span>
                  <div className="w-8 sm:w-12 h-px bg-[#DA291C]/30" />
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                    Published
                  </span>
                </div>

                {/* Content */}
                <div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-lg sm:text-xl font-semibold text-white mb-3 tracking-tight leading-tight"
                  >
                    {pub.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-sm text-zinc-500 mb-4 sm:mb-5"
                  >
                    {pub.journal}
                  </motion.p>

                  {/* Tags */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.35 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2"
                  >
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-3 py-1 rounded-full bg-white/3 border border-white/6 text-zinc-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Research Philosophy Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 relative"
        >
          <div
            className="relative rounded-2xl p-8 sm:p-10 border"
            style={{
              background: "linear-gradient(145deg, rgba(10,10,10,0.9), rgba(6,6,6,0.95))",
              borderColor: "rgba(255,255,255,0.04)",
            }}
          >
            {/* Decorative quote mark */}
            <div className="absolute top-6 left-6 sm:top-8 sm:left-8 text-5xl sm:text-6xl font-serif text-[#DA291C]/20 leading-none select-none">
              &ldquo;
            </div>

            <div className="relative pl-10 sm:pl-12">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-base sm:text-lg md:text-xl text-white font-light leading-relaxed mb-5 sm:mb-6"
              >
                I believe in conducting research that bridges theoretical frameworks with practical applications, focusing on understanding technology adoption in diverse contexts and leveraging AI and IoT to address real-world challenges.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="w-6 sm:w-8 h-px bg-[#DA291C]/40" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                  Research Philosophy
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom flourish */}
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