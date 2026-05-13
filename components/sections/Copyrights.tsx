"use client";

import { motion } from "framer-motion";

const copyrights = [
  {
    title: "Palm Oil Machine Analytics Dashboard Application",
    registrationNo: "001083032",
    date: "30 Dec 2025",
    organization: "Directorate General of Intellectual Property (DGIP), Indonesia",
    role: "Co-creator",
  },
  {
    title: "Barista Schedule Management System (Jadwal.in)",
    registrationNo: "000928976",
    date: "8 Jul 2025",
    organization: "Directorate General of Intellectual Property (DGIP), Indonesia",
    role: "Co-creator",
  },
  {
    title: "Attendance System (Hadir.In)",
    registrationNo: "000925259",
    date: "10 Jun 2025",
    organization: "Directorate General of Intellectual Property (DGIP), Indonesia",
    role: "Co-creator",
  },
];

export default function Copyrights() {
  return (
    <section id="copyrights" className="relative py-40 overflow-hidden">
      {/* Subtle ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-[#DA291C]/2 blur-[150px] rounded-full" />
      </div>

      <div className="mx-auto max-w-4xl px-6">
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
            Copyrights
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-5"
          >
            Protecting{' '}
            <span className="bg-linear-to-r from-[#DA291C] to-[#e64a3a] bg-clip-text text-transparent">
              innovation
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm text-zinc-500 max-w-xl"
          >
            Officially registered intellectual property contributions through the Directorate General of Intellectual Property, Indonesia
          </motion.p>
        </motion.div>

        {/* Copyrights List */}
        <div className="space-y-8">
          {copyrights.map((copyright, index) => (
            <motion.div
              key={copyright.registrationNo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Card */}
              <div
                className="relative rounded-2xl p-8 border transition-all duration-500 group-hover:border-white/8"
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

                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  {/* Date indicator */}
                  <div className="lg:w-40 shrink-0">
                    <span className="text-[10px] text-[#DA291C] uppercase tracking-[0.2em]">
                      {copyright.date}
                    </span>
                    <div className="mt-4">
                      <div
                        className="inline-flex px-3 py-1.5 rounded-full text-[10px] font-medium tracking-wide border"
                        style={{
                          backgroundColor: "rgba(218,41,28,0.08)",
                          borderColor: "rgba(218,41,28,0.2)",
                          color: "#DA291C",
                        }}
                      >
                        {copyright.role}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-xl font-semibold text-white mb-3 tracking-tight leading-tight"
                    >
                      {copyright.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.25 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-sm text-zinc-500 mb-3"
                    >
                      {copyright.organization}
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-xs text-zinc-600"
                    >
                      Registration No. {copyright.registrationNo}
                    </motion.p>
                  </div>
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