"use client";

import { motion } from "framer-motion";

const experience = [
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
    accentColor: "#DA291C",
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
    accentColor: "#DA291C",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-16 overflow-hidden bg-[#FAF8F5]">
      {/* Newspaper texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiLy4KPC9zdmc+')] bg-repeat" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Newspaper Masthead Style */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          {/* Category tag */}
          <div className="inline-block mb-3">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase bg-[#DA291C] text-white px-3 py-1">
              Professional Journey
            </span>
          </div>

          {/* Section title */}
          <div className="border-b-4 border-black pb-3">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-black leading-none">
              WHERE SKILLS
              <br />
              <span className="text-[#DA291C]">MEET IMPACT</span>
            </h2>
          </div>

          {/* Subheader */}
          <div className="flex items-center justify-center gap-4 text-[10px] tracking-[0.2em] uppercase text-[#666] mt-3">
            <span>Real-World Experience</span>
            <span className="w-1 h-1 rounded-full bg-[#DA291C]" />
            <span>Production Applications</span>
            <span className="w-1 h-1 rounded-full bg-[#DA291C]" />
            <span>Research Solutions</span>
          </div>
        </motion.header>

        {/* Main Content */}
        <div className="grid grid-cols-12 gap-8">
          {/* Left Column - Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-8"
          >
            {/* Main headline */}
            <h3 className="font-serif text-2xl sm:text-3xl font-black text-black mb-2 leading-tight">
              Real-world experience building production applications and contributing to research-driven solutions
            </h3>

            {/* Byline */}
            <div className="flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase text-[#666] border-b border-dashed border-[#999] pb-3 mb-6">
              <span>By Career Desk</span>
              <span className="w-1 h-1 rounded-full bg-[#DA291C]" />
              <span>Experience Section</span>
            </div>

            {/* Experience entries */}
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.article
                  key={`${exp.company}-${exp.role}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Article number */}
                  <div className="absolute -left-4 top-0 font-serif text-6xl font-black text-[#DA291C]/10 leading-none">
                    0{index + 1}
                  </div>

                  {/* Card */}
                  <div className="border-2 border-black p-6 bg-white relative">
                    {/* Red accent bar */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#DA291C]" />

                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#DA291C]">
                            {exp.period}
                          </p>
                          <span className="w-1 h-1 rounded-full bg-[#999]" />
                          <span className="text-[10px] tracking-widest uppercase text-[#666]">
                            {exp.type}
                          </span>
                        </div>
                        <h4 className="font-serif text-xl sm:text-2xl font-black text-black leading-tight">
                          {exp.role}
                        </h4>
                      </div>
                    </div>

                    {/* Company & Location */}
                    <div className="mb-4">
                      <p className="font-serif text-base text-black font-semibold">
                        {exp.company}
                      </p>
                      <p className="text-[11px] tracking-widest uppercase text-[#666]">
                        {exp.location}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="font-serif text-sm text-[#444] leading-relaxed border-l-2 border-[#DA291C] pl-4 mb-4">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="text-[10px] px-3 py-1 border border-[#ddd] text-[#333] hover:border-[#DA291C] hover:text-[#DA291C] transition-colors"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-4"
          >
            {/* Career Stats */}
            <div className="bg-black text-white p-6 mb-6">
              <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#999] mb-4 pb-2 border-b border-[#333]">
                Career Statistics
              </h4>
              <div className="space-y-4">
                <div className="text-center">
                  <p className="font-serif text-4xl font-black text-[#DA291C]">4+</p>
                  <p className="text-[10px] tracking-widest uppercase text-[#999] mt-1">
                    Positions Held
                  </p>
                </div>
                <div className="border-t border-[#333] pt-4 grid grid-cols-2 gap-3">
                  <div className="text-center">
                    <p className="text-xl font-bold text-white">2</p>
                    <p className="text-[10px] uppercase text-[#666]">Internships</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-white">2</p>
                    <p className="text-[10px] uppercase text-[#666]">Part-Time</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="border-2 border-black p-5">
              <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-black border-b-2 border-black pb-2 mb-4">
                Technologies Used
              </h4>
              <ul className="space-y-2">
                {[
                  "Flutter & Mobile Development",
                  "Angular & Astro Framework",
                  "Laravel & MySQL",
                  "Serverless Architecture",
                  "IoT Integration",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#DA291C] font-serif">•</span>
                    <span className="font-serif text-sm text-[#333]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Notable Projects */}
            <div className="mt-6 border border-[#ddd] p-5">
              <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-black mb-3">
                Featured Projects
              </h4>
              <div className="space-y-3">
                {[
                  { name: "APJ Gate", type: "IoT Monitoring" },
                  { name: "Prabayar Pintar", type: "Smart Energy" },
                  { name: "Jadwal.in", type: "Scheduling System" },
                  { name: "SIMONA", type: "Government MIS" },
                ].map((project, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="font-serif text-sm text-black">{project.name}</span>
                    <span className="text-[10px] text-[#DA291C]">{project.type}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Work Environment */}
            <div className="mt-6 p-4 bg-[#f5f3f0] border-l-4 border-[#DA291C]">
              <p className="text-[10px] tracking-widest uppercase text-[#DA291C] mb-1">
                Work Environment
              </p>
              <p className="font-serif text-sm text-black leading-snug">
                Experience across government institutions, research centers, and
                technology companies with diverse project requirements.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom section - Decorative line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 border-t-4 border-black pt-6"
        >
          <div className="flex items-center justify-center gap-4">
            <span className="w-20 h-px bg-[#999]" />
            <span className="text-[#DA291C] text-2xl font-serif">&diams;</span>
            <span className="w-20 h-px bg-[#999]" />
          </div>
        </motion.div>

        {/* Edition footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-4 text-center"
        >
          <p className="text-[10px] tracking-widest uppercase text-[#666]">
            End of Section &bull; Experience &bull; Vol. MMXXVI
          </p>
        </motion.div>
      </div>
    </section>
  );
}