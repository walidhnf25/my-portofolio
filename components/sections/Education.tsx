"use client";

import { motion } from "framer-motion";

const educationData = [
  {
    institution: "Telkom University",
    location: "Bandung, Indonesia",
    degree: "Bachelor of Software Engineering",
    period: "2021 – 2025",
    description:
      "Focused on Information Technology Adoption, Machine Learning, Deep Learning, and Internet of Things through academic research and intelligent system development projects.",
    badge: "GPA 3.79 · Cum Laude",
    accentColor: "#DA291C",
  },
  {
    institution: "SMAN 5 Kabupaten Tangerang",
    location: "Tangerang, Indonesia",
    degree: "Mathematics & Natural Science",
    period: "2018 – 2021",
    description:
      "Developed strong foundations in mathematics, analytical thinking, and science-oriented problem solving.",
    badge: "Final Grade 86.46",
    accentColor: "#FFD700",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-40 overflow-hidden">
      {/* Subtle ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-[#DA291C]/2 blur-[150px] rounded-full" />
      </div>

      <div className="mx-auto max-w-5xl px-6">
        {/* Section Header - Consistent with all sections */}
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
            Education
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-5"
          >
            The journey of{' '}
            <span className="bg-linear-to-r from-[#DA291C] to-[#e64a3a] bg-clip-text text-transparent">
              growth
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm text-zinc-500 max-w-xl"
          >
            Academic foundation shaping my approach to technology, research, and innovation
          </motion.p>
        </motion.div>

        {/* Education Timeline - Journey style matching Experience */}
        <div className="relative">
          {/* Journey line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 -translate-x-1/2 hidden md:block">
            <div className="relative h-full w-px bg-linear-to-b from-[#DA291C]/30 via-[#DA291C]/15 to-[#FFD700]/15" />

            {/* Nodes */}
            {educationData.map((_, index) => (
              <div
                key={index}
                className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2"
                style={{
                  top: `${20 + index * 40}%`,
                  backgroundColor: educationData[index].accentColor,
                  borderColor: educationData[index].accentColor,
                  boxShadow: `0 0 12px ${educationData[index].accentColor}66`,
                }}
              />
            ))}
          </div>

          {/* Education cards */}
          <div className="space-y-16 md:space-y-24">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative ${index === 0 ? "md:pr-[52%]" : "md:pl-[52%] md:text-right"}`}
              >
                {/* Timeline node for mobile */}
                <div
                  className="absolute left-8 top-0 -translate-y-1 w-3 h-3 rounded-full border-2 md:hidden"
                  style={{
                    backgroundColor: edu.accentColor,
                    borderColor: edu.accentColor,
                  }}
                />

                {/* Card */}
                <div
                  className="relative ml-12 md:ml-0 rounded-2xl p-8 border transition-all duration-500 hover:border-white/8"
                  style={{
                    background: "linear-gradient(145deg, rgba(10,10,10,0.85), rgba(6,6,6,0.95))",
                    borderColor: "rgba(255,255,255,0.04)",
                  }}
                >
                  {/* Subtle glow on hover */}
                  <div
                    className="absolute -inset-6 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-700 -z-10"
                    style={{
                      background: `radial-gradient(ellipse at ${index === 0 ? "left" : "right"}, ${edu.accentColor}06, transparent 60%)`,
                    }}
                  />

                  <div className={`space-y-5 ${index === 0 ? "" : "md:text-right"}`}>
                    {/* Period */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span
                        className="text-[10px] font-medium tracking-[0.2em] uppercase"
                        style={{ color: edu.accentColor }}
                      >
                        {edu.period}
                      </span>
                    </motion.div>

                    {/* Degree */}
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.25 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-xl md:text-2xl font-semibold text-white tracking-tight leading-tight"
                    >
                      {edu.degree}
                    </motion.h3>

                    {/* Institution & Location */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className={`space-y-1 ${index === 0 ? "" : "md:items-end"}`}
                    >
                      <p className="text-sm text-zinc-400">{edu.institution}</p>
                      <p className="text-xs text-zinc-600">{edu.location}</p>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.35 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-sm text-zinc-500 leading-relaxed"
                    >
                      {edu.description}
                    </motion.p>

                    {/* Badge */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className={`${index === 0 ? "" : "md:flex md:justify-end"}`}
                    >
                      <div
                        className="inline-flex px-4 py-1.5 rounded-full text-[10px] font-medium tracking-wide border"
                        style={{
                          backgroundColor: `${edu.accentColor}08`,
                          borderColor: `${edu.accentColor}20`,
                          color: edu.accentColor,
                        }}
                      >
                        {edu.badge}
                      </div>
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
          className="mt-24 flex justify-center"
        >
          <div className="h-px w-24 bg-linear-to-r from-transparent via-[#DA291C]/25 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}