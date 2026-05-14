"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "IoT Air Quality Monitoring",
    category: "IoT / Machine Learning",
    description:
      "Real-time air quality monitoring using ML algorithms for pollution prediction and environmental analysis.",
    technologies: ["Python", "TensorFlow", "ESP32"],
    status: "Production",
    year: "2025",
  },
  {
    title: "Semantic Segmentation for Smoke Detection",
    category: "Deep Learning / Computer Vision",
    description:
      "Detecting cigarette and vape smoke using advanced semantic segmentation models for public health monitoring.",
    technologies: ["Python", "PyTorch", "React"],
    status: "Thesis",
    year: "2025",
  },
  {
    title: "E-Government Adoption Analysis",
    category: "Information Systems Research",
    description:
      "TAM and ISSM analysis for e-government adoption in Indonesia through quantitative research methodology.",
    technologies: ["Python", "SPSS", "SEM"],
    status: "Production",
    year: "2024",
  },
  {
    title: "AI Health Application Acceptance",
    category: "AI Research",
    description:
      "Investigating factors affecting user acceptance of AI-based digital health applications in healthcare.",
    technologies: ["Python", "R", "MLR"],
    status: "Production",
    year: "2024",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-40 overflow-hidden">
      {/* Subtle ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-125 h-100 bg-[#DA291C]/2 blur-[150px] rounded-full" />
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
            Projects
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-5"
          >
            Building solutions that{' '}
            <span className="bg-linear-to-r from-[#DA291C] to-[#e64a3a] bg-clip-text text-transparent">
              matter
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm text-zinc-500 max-w-xl"
          >
            Technical work solving real-world problems through innovation, research, and practical applications
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {projects.map((projects, index) => (
            <motion.div
              key={projects.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
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
                    background: "radial-gradient(ellipse at top left, rgba(218,41,28,0.06), transparent 60%)",
                  }}
                />

                {/* Header row with status */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5 sm:mb-6">
                  <div>
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-[10px] text-zinc-600 uppercase tracking-widest"
                    >
                      {projects.category}
                    </motion.span>
                  </div>

                  {/* Status badge */}
                  <div
                    className="px-3 py-1 rounded-full text-[10px] font-medium tracking-wide border shrink-0"
                    style={{
                      backgroundColor:
                        projects.status === "Production"
                          ? "rgba(218,41,28,0.08)"
                          : "rgba(255,215,0,0.08)",
                      borderColor:
                        projects.status === "Production"
                          ? "rgba(218,41,28,0.2)"
                          : "rgba(255,215,0,0.2)",
                      color: projects.status === "Production" ? "#DA291C" : "#FFD700",
                    }}
                  >
                    {projects.status}
                  </div>
                </div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 tracking-tight leading-tight"
                >
                  {projects.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-sm text-zinc-500 leading-relaxed mb-4 sm:mb-5"
                >
                  {projects.description}
                </motion.p>

                {/* Technologies */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.35 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2"
                >
                  {projects.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-3 py-1 rounded-full bg-white/3 border border-white/6 text-zinc-500"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

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