"use client";

import { motion } from "framer-motion";

const publications = [
  {
    title: "Pose-Based Action Recognition in Tennis Using MediaPipe and LSTM",
    year: "2025",
    journal: "IJoICT (International Journal on Information and Communication Technology), Vol. 11, No. 2, pp. 118–135",
    publisher: "Telkom University",
    authors: "Walid Hanif Ataullah, Isa Mulia Insan, Sheina Fathur Rahman",
    role: "1st Author",
    indexing: "SINTA 3",
    tags: ["MediaPipe", "LSTM", "Pose Recognition"],
    link: "https://journals.telkomuniversity.ac.id/ijoict/article/view/9622",
  },
  {
    title: "Optimizing Barista Shift Scheduling in Multi-Branches Through System Development Using Design Thinking",
    year: "2025",
    journal: "ICoSEIT 2025",
    publisher: "IEEE",
    authors: "Walid Hanif Ataullah, Rahmat Yasirandi, Rahmat Panji Wirayudha, Arga Ramadhana, Rahmat Indra Pratama Anom, Kobthong Ladkoom",
    role: "1st Author & Presenter",
    indexing: "Scopus",
    tags: ["Design Thinking", "Scheduling", "SUS Score 87.3"],
    link: "https://ieeexplore.ieee.org/abstract/document/11290953",
  },
  {
    title: "Optimized Semantic Segmentation for Fish Detection Using DeepLabV3 and MobileNetV3 on Resource-Constrained Systems",
    year: "2025",
    journal: "ICSECS 2025",
    publisher: "IEEE",
    authors: "Jonathan Arya Wibowo, Walid Hanif Ataullah, Isa Mulia Insan, Sheina Fathur Rahman, Muhammad Al Makky, Rio Guntur Utomo",
    role: "2nd Author & Presenter",
    indexing: "Scopus",
    tags: ["DeepLabV3", "MobileNetV3", "Semantic Segmentation", "Dice 0.6853"],
    link: "https://ieeexplore.ieee.org/abstract/document/11279067",
  },
  {
    title: "Frontend Design and Implementation of a Research Dashboard for the PPM Directorate Using the Agile Scrum Methodology",
    year: "2025",
    journal: "ICoSEIT 2025",
    publisher: "IEEE",
    authors: "Sheina Fathur Rahman, Walid Hanif Ataullah, Rahmat Yasirandi, Jonathan Arya Wibowo, Isa Mulia Insan, Muhamad Al Makky",
    role: "2nd Author",
    indexing: "Scopus",
    tags: ["Agile Scrum", "Research Dashboard", "Frontend"],
    link: "https://ieeexplore.ieee.org/abstract/document/11290847",
  },
  {
    title: "A Digital Solution for Zoo Health Management: Ensuring Continuity of Care Without In-House Veterinarians",
    year: "2025",
    journal: "ICoSEIT 2025",
    publisher: "IEEE",
    authors: "Sheina Fathur Rahman, Fernando Putra Silalahi, Rahmat Yasirandi, Muhammad Al Makky, Noor Alamsyah, Walid Hanif Ataullah",
    role: "6th Author",
    indexing: "Scopus",
    tags: ["Zoo Health", "Mobile App", "Animal Health Monitoring"],
    link: "https://ieeexplore.ieee.org/abstract/document/11290765/",
  },
  {
    title: "Design and Implementation of Real-Time Monitoring System for Bird Tracking Applications",
    year: "2025",
    journal: "ICSECS 2025",
    publisher: "IEEE",
    authors: "Jonathan Arya Wibowo, Muharman Lubis, Rio Guntur Utomo, Walid Hanif Ataullah, Sheina Fathur Rahman, Isa Mulia Insan",
    role: "4th Author",
    indexing: "Scopus",
    tags: ["GPS Tracking", "Bird Monitoring", "GSM Module"],
    link: "https://ieeexplore.ieee.org/abstract/document/11279236",
  },
  {
    title: "Performance and Reliability Analysis of 4G-Based Flight Controllers in UAV Control",
    year: "2025",
    journal: "ICCTEIE 2025",
    publisher: "IEEE",
    authors: "Riska Yucha Septiyanti, Rendy Munadi, Basuki Rahmat, Walid Hanif Ataullah, Athif Fadheel Atharahman, Jonathan Arya Wibowo",
    role: "4th Author",
    indexing: "Scopus",
    tags: ["4G LTE", "UAV", "MAVLink", "Latency Analysis"],
    link: "https://ieeexplore.ieee.org/abstract/document/11341803",
  },
  {
    title: "Multi-Purpose Security Camera for E-Cigarette Smoke Detection With Semantic Segmentation",
    year: "2024",
    journal: "ICOIACT 2024",
    publisher: "IEEE",
    authors: "Walid Hanif Ataullah, Aji Gautama Putrada, Villy Satria Praditha",
    role: "1st Author & Presenter",
    indexing: "Scopus",
    tags: ["DeepLabV3", "MobileNetV2", "Smoke Detection", "AUC 0.90"],
    link: "https://ieeexplore.ieee.org/abstract/document/10913184",
  },
];

export default function Publications() {
  return (
    <section id="publications" className="relative py-40 overflow-hidden">
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
            Publications
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
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-2xl sm:text-3xl font-bold text-[#DA291C] tracking-tight">
                    {pub.year}
                  </span>
                  <div className="w-8 sm:w-12 h-px bg-[#DA291C]/30" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                    {pub.publisher}
                  </span>
                  {pub.indexing && (
                    <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#DA291C]/10 border border-[#DA291C]/20 text-[#DA291C]">
                      {pub.indexing}
                    </span>
                  )}
                  {pub.role && (
                    <span className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-zinc-400">
                      {pub.role}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-lg sm:text-xl font-semibold text-white mb-2 tracking-tight leading-tight"
                  >
                    {pub.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-sm text-zinc-500 mb-1"
                  >
                    {pub.journal}
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.35 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-xs text-zinc-600 mb-4"
                  >
                    {pub.authors}
                  </motion.p>

                  {/* Tags */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
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

                  {/* Link */}
                  {pub.link && (
                    <motion.a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.45 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="inline-flex items-center gap-2 mt-4 text-xs text-[#DA291C] hover:text-[#e64a3a] transition-colors"
                    >
                      View Publication
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Publications Philosophy Quote */}
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