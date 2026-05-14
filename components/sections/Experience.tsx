"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "PT. Harapan Energie Indonesia",
    location: "Tangerang City, Indonesia",
    role: "Fullstack Developer",
    type: "Internship",
    period: "Dec 2025 – Jun 2026",
    description:
      "Developed mobile and web-based applications including APJ Gate, Prabayar Pintar (Prapin), Trafacomm, GPS Tracker, and Stroomer Company Website using Flutter, Angular, Astro, and Serverless Framework.",
    highlights: [
      "IoT monitoring & smart energy management",
      "Field operation workflows & digital services",
      "Real-time tracking & smart device connectivity",
    ],
    accentColor: "#DA291C",
  },
  {
    company: "Center of Excellence for Technological Society (CAATIS)",
    location: "Telkom University, Bandung",
    role: "Research Assistant",
    type: "Part-Time",
    period: "Dec 2024 – Jul 2025",
    description:
      "Conducted applied research and developed mobile and web-based applications including E-Laman Hati, Kacir FnB, DKPP Store, and E-Buruan Sae Dashboard.",
    highlights: [
      "Agile Scrum methodology",
      "Data management & monitoring systems",
      "Operational workflow optimization",
    ],
    accentColor: "#DA291C",
  },
  {
    company: "Center of Excellence for Technological Society (CAATIS)",
    location: "Telkom University, Bandung",
    role: "Fullstack Developer",
    type: "Internship",
    period: "Sep 2024 – Jan 2025",
    description:
      "Designed and developed a web-based Barista Scheduling System (Jadwal.in) using Laravel and MySQL for multi-branch operations.",
    highlights: [
      "Shift planning optimization",
      "Real-time scheduling features",
      "Multi-branch operational efficiency",
    ],
    accentColor: "#FFD700",
  },
  {
    company: "Department of Communication and Informatics",
    location: "Tangerang Regency, Indonesia",
    role: "Fullstack Developer",
    type: "Internship",
    period: "Jul 2024 – Aug 2024",
    description:
      "Designed and developed a web-based Non-ASN Employee Management Information System (SIMONA) using Laravel and MySQL for local government.",
    highlights: [
      "Workforce administration",
      "Integrated employee data management",
      "Government digital transformation",
    ],
    accentColor: "#FFD700",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-40 overflow-hidden">
      {/* Subtle ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-[#DA291C]/2 blur-[150px] rounded-full" />
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
            Experience
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-5"
          >
            Where{' '}
            <span className="bg-linear-to-r from-[#DA291C] to-[#e64a3a] bg-clip-text text-transparent">
              skills
            </span>{' '}
            meet impact
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm text-zinc-500 max-w-xl"
          >
            Real-world experience building production applications and contributing to research-driven solutions
          </motion.p>
        </motion.div>

        {/* Experience Cards - Clean layout on mobile, journey style on desktop */}
        <div className="relative">
          {/* Journey line - only visible on lg */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 -translate-x-1/2 hidden lg:block">
            <div className="relative h-full w-px bg-linear-to-b from-[#DA291C]/30 via-[#DA291C]/15 to-[#FFD700]/15" />

            {/* Nodes */}
            {experiences.map((_, index) => (
              <div
                key={index}
                className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2"
                style={{
                  top: `${12 + index * 24}%`,
                  backgroundColor: index < 2 ? "#DA291C" : "#FFD700",
                  borderColor: index < 2 ? "#DA291C" : "#FFD700",
                  boxShadow: `0 0 12px ${index < 2 ? "rgba(218,41,28,0.4)" : "rgba(255,215,0,0.4)"}`,
                }}
              />
            ))}
          </div>

          {/* Experience cards */}
          <div className="space-y-6 lg:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${
                  index % 2 === 0
                    ? "lg:pr-[52%]"
                    : "lg:pl-[52%] lg:text-right"
                }`}
              >
                {/* Card - clean on mobile */}
                <div
                  className="relative rounded-2xl p-6 sm:p-8 border transition-all duration-500 hover:border-white/8"
                  style={{
                    background: "linear-gradient(145deg, rgba(10,10,10,0.85), rgba(6,6,6,0.95))",
                    borderColor: "rgba(255,255,255,0.04)",
                  }}
                >
                  {/* Subtle glow on hover */}
                  <div
                    className="absolute -inset-6 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-700 -z-10"
                    style={{
                      background: `radial-gradient(ellipse at ${index % 2 === 0 ? "left" : "right"}, ${exp.accentColor}06, transparent 60%)`,
                    }}
                  />

                  <div className="space-y-5">
                    {/* Period & Type */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className="text-[10px] font-medium tracking-[0.2em] uppercase"
                        style={{ color: exp.accentColor }}
                      >
                        {exp.period}
                      </span>
                      <div className="w-8 h-px bg-zinc-700 hidden sm:block" />
                      <span className="text-[10px] text-zinc-600 uppercase tracking-widest">
                        {exp.type}
                      </span>
                    </div>

                    {/* Role */}
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.25 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-xl md:text-2xl font-semibold text-white tracking-tight leading-tight"
                    >
                      {exp.role}
                    </motion.h3>

                    {/* Company & Location */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-1"
                    >
                      <p className="text-sm text-zinc-400">{exp.company}</p>
                      <p className="text-xs text-zinc-600">{exp.location}</p>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.35 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-sm text-zinc-500 leading-relaxed"
                    >
                      {exp.description}
                    </motion.p>

                    {/* Highlights */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex flex-wrap gap-2"
                    >
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="text-[10px] px-3 py-1 rounded-full bg-white/3 border border-white/6 text-zinc-500"
                        >
                          {highlight}
                        </span>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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