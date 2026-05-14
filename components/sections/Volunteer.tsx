"use client";

import { motion } from "framer-motion";

const volunteerExperiences = [
  {
    organization: "Al-Fath Telkom University",
    role: "Head of Public Relations Division",
    event: "Twilight Spectrum Festival",
    period: "Aug 2023 – Dec 2023",
    type: "Event",
    responsibilities: [
      "Managed external communications and promotional strategies",
      "Coordinated stakeholder engagement to enhance event visibility and participation",
    ],
    accentColor: "#DA291C",
  },
  {
    organization: "Bidikmisi Student Forum, Telkom University",
    role: "Chief Organizer",
    event: "Journal of Training for Internal Scholarship Students",
    period: "Dec 2022 – Jan 2023",
    type: "Event",
    responsibilities: [
      "Led planning and execution of academic writing training for scholarship recipients",
      "Coordinated speakers, participants, and program activities",
    ],
    accentColor: "#DA291C",
  },
  {
    organization: "SMAN 5 Kabupaten Tangerang",
    role: "Head of Scientific Research Club",
    event: "Kelompok Ilmiah Remaja (KIR)",
    period: "Nov 2019 – Oct 2020",
    type: "Organization",
    responsibilities: [
      "Led student research activities and scientific discussions",
      "Promoted academic curiosity through research-based programs and collaborative learning",
    ],
    accentColor: "#FFD700",
  },
  {
    organization: "SMAN 5 Kabupaten Tangerang",
    role: "Head of Skills & Entrepreneurship Division",
    event: "Student Council (OSIS)",
    period: "Nov 2019 – Oct 2020",
    type: "Organization",
    responsibilities: [
      "Organized skill development and entrepreneurship programs for students",
      "Fostered creativity, leadership, and practical skills through structured initiatives",
    ],
    accentColor: "#FFD700",
  },
];

export default function Volunteer() {
  return (
    <section id="volunteer" className="relative py-40 overflow-hidden">
      {/* Subtle ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-[#DA291C]/2 blur-[150px] rounded-full" />
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
            Volunteer
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-5"
          >
            Leading with{' '}
            <span className="bg-linear-to-r from-[#DA291C] to-[#e64a3a] bg-clip-text text-transparent">
              purpose
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm text-zinc-500 max-w-xl"
          >
            Leadership roles in organizations and events that shaped my journey in community engagement and teamwork
          </motion.p>
        </motion.div>

        {/* Volunteer experiences grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {volunteerExperiences.map((vol, index) => (
            <motion.div
              key={`${vol.organization}-${vol.role}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Card */}
              <div
                className="relative rounded-2xl p-6 sm:p-8 border transition-all duration-500 group-hover:border-white/8 h-full"
                style={{
                  background: "linear-gradient(145deg, rgba(10,10,10,0.85), rgba(6,6,6,0.95))",
                  borderColor: "rgba(255,255,255,0.04)",
                }}
              >
                {/* Subtle glow on hover */}
                <div
                  className="absolute -inset-6 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${vol.accentColor}06, transparent 60%)`,
                  }}
                />

                <div className="space-y-5">
                  {/* Period & Type badge */}
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className="text-[10px] font-medium tracking-[0.15em] uppercase"
                      style={{ color: vol.accentColor }}
                    >
                      {vol.period}
                    </span>
                    <div
                      className="shrink-0 px-2.5 py-1 rounded-full text-[9px] font-medium tracking-wide border"
                      style={{
                        backgroundColor: `${vol.accentColor}08`,
                        borderColor: `${vol.accentColor}20`,
                        color: vol.accentColor,
                      }}
                    >
                      {vol.type}
                    </div>
                  </div>

                  {/* Role */}
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="text-lg md:text-xl font-semibold text-white tracking-tight leading-tight"
                  >
                    {vol.role}
                  </motion.h3>

                  {/* Organization & Event */}
                  <div className="space-y-1">
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                      viewport={{ once: true }}
                      className="text-sm text-zinc-400"
                    >
                      {vol.organization}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.25 + index * 0.05 }}
                      viewport={{ once: true }}
                      className="text-xs text-zinc-600"
                    >
                      {vol.event}
                    </motion.p>
                  </div>

                  {/* Responsibilities */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    {vol.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div
                          className="w-1 h-1 rounded-full mt-2 shrink-0"
                          style={{ backgroundColor: vol.accentColor }}
                        />
                        <p className="text-xs text-zinc-500 leading-relaxed">
                          {resp}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                </div>
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