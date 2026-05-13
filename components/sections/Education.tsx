"use client";

import { motion } from "framer-motion";

const educationData = [
  {
    year: "2021 — 2025",
    title: "Bachelor of Software Engineering",
    institution: "Telkom University",
    location: "Bandung, Indonesia",
    description:
      "Focused on Information Technology Adoption, Machine Learning, Deep Learning, and Internet of Things through academic research and intelligent system development projects.",
    badge: "GPA 3.79 · Cum Laude",
    accentColor: "#DA291C",
  },
  {
    year: "2018 — 2021",
    title: "Mathematics & Natural Science",
    institution: "SMAN 5 Kabupaten Tangerang",
    location: "Tangerang, Indonesia",
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-225 h-125 bg-[#DA291C]/2 blur-[150px] rounded-full" />
      </div>

      <div className="mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-[10px] text-[#DA291C] uppercase tracking-[0.3em] mb-5"
          >
            Education
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white"
          >
            The path of{' '}
            <span className="bg-linear-to-r from-[#DA291C] to-[#e64a3a] bg-clip-text text-transparent">
              evolution
            </span>
          </motion.h2>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-[1fr_40px_1fr] gap-8 lg:gap-4">
          {/* Left column - First education card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <EducationCard item={educationData[0]} alignment="right" />
          </motion.div>

          {/* Center column - Journey line with nodes */}
          <div className="relative hidden lg:flex justify-center">
            <div className="relative h-full">
              {/* Ultra-thin architectural line */}
              <div className="absolute left-1/2 top-8 bottom-8 -translate-x-1/2 w-px bg-linear-to-b from-[#DA291C]/20 via-[#DA291C]/10 to-[#FFD700]/20" />

              {/* Top node - Advanced stage */}
              <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Core */}
                  <div className="w-2 h-2 rounded-full bg-[#DA291C]" />
                  {/* Soft glow */}
                  <div className="absolute inset-0 w-2 h-2 rounded-full bg-[#DA291C]/30 blur-sm" />
                </motion.div>
              </div>

              {/* Bottom node - Foundation */}
              <div className="absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Core */}
                  <div className="w-2 h-2 rounded-full bg-[#FFD700]" />
                  {/* Soft glow */}
                  <div className="absolute inset-0 w-2 h-2 rounded-full bg-[#FFD700]/30 blur-sm" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right column - Second education card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative lg:pt-45"
          >
            <EducationCard item={educationData[1]} alignment="left" />
          </motion.div>
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 flex justify-center"
        >
          <div className="h-px w-32 bg-linear-to-r from-transparent via-[#DA291C]/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

interface EducationCardProps {
  item: (typeof educationData)[0];
  alignment: "left" | "right";
}

function EducationCard({ item, alignment }: EducationCardProps) {
  return (
    <div
      className={`relative group ${alignment === "right" ? "lg:text-right" : "lg:text-left"}`}
    >
      {/* Subtle glow on hover */}
      <div
        className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"
        style={{
          background: `radial-gradient(ellipse at center, ${item.accentColor}08, transparent 70%)`,
        }}
      />

      {/* Card */}
      <div
        className="relative rounded-2xl p-8 border transition-all duration-500"
        style={{
          background: "linear-gradient(145deg, rgba(10,10,10,0.8), rgba(6,6,6,0.9))",
          borderColor: "rgba(255,255,255,0.04)",
        }}
      >
        {/* Year indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <span
            className="text-[11px] font-medium tracking-[0.15em] uppercase"
            style={{ color: item.accentColor }}
          >
            {item.year}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl font-semibold text-white mb-2 tracking-tight"
        >
          {item.title}
        </motion.h3>

        {/* Institution */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-sm text-zinc-500 mb-5"
        >
          {item.institution}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          viewport={{ once: true }}
          className="text-sm text-zinc-400 leading-relaxed mb-6"
        >
          {item.description}
        </motion.p>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className={`${alignment === "right" ? "lg:flex lg:justify-end" : ""}`}
        >
          <div
            className="inline-flex px-4 py-1.5 rounded-full text-[11px] font-medium tracking-wide border"
            style={{
              backgroundColor: `${item.accentColor}08`,
              borderColor: `${item.accentColor}25`,
              color: item.accentColor,
            }}
          >
            {item.badge}
          </div>
        </motion.div>
      </div>

      {/* Location */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.55 }}
        viewport={{ once: true }}
        className={`mt-4 text-xs text-zinc-600 ${alignment === "right" ? "lg:text-right" : ""}`}
      >
        {item.location}
      </motion.p>
    </div>
  );
}