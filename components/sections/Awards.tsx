"use client";

import { motion } from "framer-motion";

const awards = [
  {
    title: "Outstanding Graduate Award",
    organization: "School of Computing, Telkom University",
    date: "21 Oct 2025",
    description:
      "Awarded as the best graduate for outstanding academic and non-academic achievements in Bachelor of Software Engineering.",
    type: "Achievement",
    accentColor: "#DA291C",
  },
  {
    title: "TEKNOFEST 2023 Finalist",
    organization: "TEKNOFEST",
    date: "19 Apr 2023",
    description:
      "Finalist in the International Unmanned Aerial Vehicles Competition, with a search-and-rescue UAV featuring first aid delivery.",
    type: "Competition",
    accentColor: "#FFD700",
  },
  {
    title: "3rd Place - National English Olympiad",
    organization: "EDSA UNESA & Lembaga Bina Prestasi",
    date: "2 Dec 2023",
    description:
      "Awarded 3rd place in the English category at the Indonesian Youth Language and Spatial Orientation Olympiad, University Level.",
    type: "Competition",
    accentColor: "#FFD700",
  },
  {
    title: "2nd Place - National Poster Competition",
    organization: "PUSDIMA FIS UNJ",
    date: "20 Nov 2022",
    description:
      "Awarded 2nd place in the Poster category at the National Public Discussion Competition with poster titled \"Langkah Pemilih Pemula Melawan Politik Uang Dalam Pemilu\".",
    type: "Competition",
    accentColor: "#FFD700",
  },
  {
    title: "Bronze Medal - Pateron Championship",
    organization: "Pateron Indonesia",
    date: "10 Oct 2022",
    description:
      "Awarded Bronze Medal in the Mathematics category at the Pateron Championship Competition Premiere, University Level.",
    type: "Competition",
    accentColor: "#FFD700",
  },
  {
    title: "Top 200 Teams - Indonesia Digital Tribe",
    organization: "Indonesia Digital Tribe (IDT)",
    date: "4 Apr 2022",
    description:
      "Selected as part of the Top 200 Teams in the national digital innovation program, with a calorie and protein calculator application.",
    type: "Competition",
    accentColor: "#FFD700",
  },
  {
    title: "2nd Place - Antar Bangsa Competition",
    organization: "STMIK Antar Bangsa",
    date: "15 Mar 2021",
    description:
      "Awarded 2nd place in the Mathematics category at the Inter-Nation Competition, Senior High School Level.",
    type: "Competition",
    accentColor: "#FFD700",
  },
  {
    title: "3rd Place - Indonesian Student Olympic League",
    organization: "Club Olimpiade & FMIPA USU",
    date: "7 Jun 2020",
    description:
      "Awarded 3rd place in the Physics category at the 14th Indonesian Student Olympic League, Senior High School Level.",
    type: "Competition",
    accentColor: "#FFD700",
  },
  {
    title: "Finalist - Nuclear Smart Competition",
    organization: "STTN-BATAN",
    date: "10 Nov 2019",
    description:
      "Finalist in the Olympiad category at the Nuclear Smart Competition (NSC 2019), Senior High School Level.",
    type: "Competition",
    accentColor: "#FFD700",
  },
];

export default function Awards() {
  return (
    <section id="awards" className="relative py-40 overflow-hidden">
      {/* Subtle ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-[#DA291C]/2 blur-[150px] rounded-full" />
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
            Awards
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-5"
          >
            Recognition of{' '}
            <span className="bg-linear-to-r from-[#DA291C] to-[#e64a3a] bg-clip-text text-transparent">
              excellence
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm text-zinc-500 max-w-xl"
          >
            Honoring achievements in competitions, research, and academic excellence throughout my journey
          </motion.p>
        </motion.div>

        {/* Awards Grid - 3 columns for better visibility */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Card */}
              <div
                className="relative rounded-2xl p-6 border transition-all duration-500 group-hover:border-white/8 h-full"
                style={{
                  background: "linear-gradient(145deg, rgba(10,10,10,0.85), rgba(6,6,6,0.95))",
                  borderColor: "rgba(255,255,255,0.04)",
                }}
              >
                {/* Subtle glow on hover */}
                <div
                  className="absolute -inset-6 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"
                  style={{
                    background: `radial-gradient(ellipse at top, ${award.accentColor}06, transparent 60%)`,
                  }}
                />

                <div className="space-y-4">
                  {/* Type badge & Date */}
                  <div className="flex items-center justify-between">
                    <span
                      className="px-2.5 py-1 rounded-full text-[9px] font-medium tracking-wide border"
                      style={{
                        backgroundColor: `${award.accentColor}08`,
                        borderColor: `${award.accentColor}20`,
                        color: award.accentColor,
                      }}
                    >
                      {award.type}
                    </span>
                    <span className="text-[10px] text-zinc-600 uppercase tracking-[0.1em]">
                      {award.date}
                    </span>
                  </div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="text-base font-semibold text-white tracking-tight leading-tight"
                  >
                    {award.title}
                  </motion.h3>

                  {/* Organization */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="text-xs text-zinc-500"
                  >
                    {award.organization}
                  </motion.p>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="text-xs text-zinc-600 leading-relaxed line-clamp-3"
                  >
                    {award.description}
                  </motion.p>
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