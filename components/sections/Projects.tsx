"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "APJ Gate",
    date: "14 Apr 2026 – 23 Apr 2026",
    description: "A web-based monitoring and management system for public street lighting, designed to support operational control, energy optimization, and maintenance efficiency.",
    responsibilities: [
      "Designed and developed the executive energy audit feature using Angular and Serverless Framework (Node.js) to analyze energy consumption, cost efficiency, and environmental impact",
      "Implemented calculation logic for technical analysis & efficiency, investment and TCOO (12 year), and environmental impact (ESG) metrics",
    ],
    technologies: ["Angular", "Node.js", "Serverless"],
    link: "https://console-dev.stroomer.co.id/sign-in",
  },
  {
    title: "Prabayar Pintar (Prapin)",
    date: "1 Apr 2026 – 3 May 2026",
    description: "A mobile-based application designed to monitor, manage, and optimize household electricity usage through real-time tracking, smart device integration, and seamless token top-up functionality.",
    responsibilities: [
      "Enhanced a mobile-based energy management system using Flutter with RESTful API integration by restructuring the device onboarding workflow",
      "Enhanced the manual top-up feature into an interactive Your Meter utility",
      "Implemented IoT device connectivity features including Bluetooth pairing, Wi-Fi configuration, and handshaking protocols",
    ],
    technologies: ["Flutter", "REST API", "IoT", "Bluetooth", "OpenWeather API"],
    link: "https://play.google.com/store/apps/details?id=id.co.stroomer.mobile",
  },
  {
    title: "Transformer Advanced Commissioning (Trafacomm)",
    date: "24 Dec 2025 – 30 Mar 2026",
    description: "A mobile-based application designed to support transformer monitoring, tracking, and installation activities in the field through structured and integrated workflows for asset management.",
    responsibilities: [
      "Developed a mobile frontend using Flutter with RESTful API integration to support real-time transformer monitoring and field operations",
      "Implemented structured workflows for transformer installation, configuration, and real-time monitoring",
    ],
    technologies: ["Flutter", "REST API", "Asset Management"],
    link: "https://play.google.com/store/apps/details?id=id.stroomer.trafacomm.up3",
  },
  {
    title: "GPS Tracker",
    date: "5 Feb 2026 – 25 Feb 2026",
    description: "A web-based dashboard designed to monitor and track device locations in real-time, allowing users to manage multiple devices, view location history, and filter tracking data.",
    responsibilities: [
      "Designed and developed a web-based GPS tracking system using Serverless Framework (Node.js) and Angular",
      "Implemented real-time location tracking, multi-device monitoring, and historical data filtering",
    ],
    technologies: ["Angular", "Node.js", "Serverless", "GPS"],
    link: "https://gpstracker.stroomer.co.id",
  },
  {
    title: "Stroomer Company Website",
    date: "16 Dec 2025 – 23 Dec 2025",
    description: "A web-based corporate website designed to promote company services and provide information about products, solutions, company profiles, contact, and career opportunities.",
    responsibilities: [
      "Enhanced contact form features using Astro, Serverless Framework (Node.js), and Sanity CMS",
      "Designed and developed recruitment features including job listings and career pages",
      "Implemented job application workflows including CV upload and email automation",
    ],
    technologies: ["Astro", "Node.js", "Sanity CMS", "Nodemailer"],
    link: "https://stroomer.co.id",
  },
  {
    title: "Palm Oil Machine Analytics Dashboard",
    date: "12 Jan 2025 – 22 Aug 2025",
    description: "A web-based analytics dashboard designed for real-time and historical monitoring of palm oil processing machines, integrating computer vision to analyze operational parameters.",
    responsibilities: [
      "Designed and developed a real-time analytics dashboard using Laravel with computer vision integration",
      "Implemented monitoring of machine parameters through data ingestion and visualization to support anomaly detection",
    ],
    technologies: ["Laravel", "Computer Vision", "MySQL"],
    link: "https://jurnalptpn.teluapp.org",
  },
  {
    title: "E-Laman Hati",
    date: "25 May 2025 – 25 Jul 2025",
    description: "A mobile-based digital platform developed in collaboration with DKPP Bandung City to support animal health data management, including registration, monitoring, vaccination tracking, and public reporting.",
    responsibilities: [
      "Led redevelopment of a mobile animal health management system, coordinating a student development team using Agile Scrum methodology",
      "Implemented animal health registration, monitoring, and reporting features",
    ],
    technologies: ["Flutter", "Agile Scrum", "Mobile"],
    link: "https://bit.ly/e-lamanhatiapk",
  },
  {
    title: "Kacir FnB",
    date: "20 May 2025 – 20 Jul 2025",
    description: "A mobile-based point-of-sale (POS) application designed to streamline sales transactions, payment processing, and business operations, featuring integrated reporting and multi-outlet management.",
    responsibilities: [
      "Led the development of a mobile POS system, coordinating a student development team using Agile Scrum methodology",
      "Implemented transaction processing, sales reporting, and multi-outlet management features",
    ],
    technologies: ["Flutter", "Agile Scrum", "POS"],
    link: "https://bit.ly/kacirfnbapk",
  },
  {
    title: "Attendance System (Hadir.In)",
    date: "13 May 2025 – 10 Jun 2025",
    description: "A web-based platform designed to streamline meeting and attendance management within organizations, enabling form submission, attendance tracking, and real-time participation monitoring.",
    responsibilities: [
      "Enhanced a web-based attendance management system using Laravel and MySQL",
      "Implemented configurable forms and automated PDF reporting",
    ],
    technologies: ["Laravel", "MySQL", "PDF"],
    link: "https://hadirin.teluapp.org/login",
  },
  {
    title: "DKPP Store",
    date: "12 Mar 2025 – 20 Apr 2025",
    description: "A web-based application portal developed for DKPP Bandung City to manage, distribute, and showcase digital innovation solutions in agriculture and food security.",
    responsibilities: [
      "Designed and developed a web-based application portal using Laravel and MySQL",
      "Implemented centralized access for public and stakeholders to explore agricultural and food security applications",
    ],
    technologies: ["Laravel", "MySQL"],
    link: "https://dkpp-store.teluapp.org",
  },
  {
    title: "E-Buruan Sae Dashboard",
    date: "28 Dec 2024 – 6 Mar 2025",
    description: "A web-based dashboard developed for DKPP Bandung City to manage agricultural data, including harvest recording, prediction, and distribution tracking for urban farming programs.",
    responsibilities: [
      "Enhanced a web-based dashboard using CodeIgniter and MySQL for agricultural data management",
      "Implemented harvest prediction and distribution tracking features",
    ],
    technologies: ["CodeIgniter", "MySQL", "Prediction"],
    link: "https://buruansae-dashboard.matradipti.org/login",
  },
  {
    title: "Barista Schedule Management (Jadwal.in)",
    date: "16 Sep 2024 – 8 Jan 2025",
    description: "A web-based scheduling system designed for multi-outlet workforce management, enabling flexible shift planning, approval workflows, and real-time coordination.",
    responsibilities: [
      "Designed and developed a web-based scheduling system using Laravel and MySQL for multi-outlet workforce management",
      "Implemented real-time shift coordination and improved workforce planning efficiency",
    ],
    technologies: ["Laravel", "MySQL", "Scheduling"],
    link: "https://shift.matradipti.org",
  },
  {
    title: "Non-ASN Employee Management (SIMONA)",
    date: "15 Jul 2024 – 30 Aug 2024",
    description: "A web-based employee management system developed for local government in Tangerang Regency to manage non-civil servant (Non-ASN) workforce data.",
    responsibilities: [
      "Designed and developed a web-based employee management system using Laravel and MySQL",
      "Implemented employee data and profile management features to improve administrative efficiency",
    ],
    technologies: ["Laravel", "MySQL", "Employee Management"],
    link: "https://simona.tangerangkab.my.id/panel",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
          {projects.map((projects, index) => (
            <motion.div
              key={projects.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group flex"
            >
              {/* Card */}
              <div
                className="relative rounded-2xl p-6 sm:p-8 border transition-all duration-500 group-hover:border-white/8 w-full h-full flex flex-col"
                style={{
                  background: "linear-gradient(145deg, rgba(10,10,10,0.85), rgba(6,6,6,0.95))",
                  borderColor: "rgba(255,255,255,0.04)",
                }}
              >
                {/* Content wrapper with flex-1 to push link to bottom */}
                <div className="flex flex-col h-full">
                {/* Subtle glow on hover */}
                <div
                  className="absolute -inset-6 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"
                  style={{
                    background: "radial-gradient(ellipse at top left, rgba(218,41,28,0.06), transparent 60%)",
                  }}
                />

                {/* Date */}
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-3.5 h-3.5 text-zinc-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-[11px] text-zinc-500">{projects.date}</span>
                </div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-lg sm:text-xl font-semibold text-white mb-3 tracking-tight leading-tight"
                >
                  {projects.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-sm text-zinc-500 leading-relaxed mb-4"
                >
                  {projects.description}
                </motion.p>

                {/* Key Responsibilities */}
                {projects.responsibilities && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.35 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="mb-4 space-y-1.5"
                  >
                    <span className="text-[10px] text-[#DA291C] uppercase tracking-wider font-medium">Key Responsibilities</span>
                    <ul className="space-y-1">
                      {projects.responsibilities.map((resp, i) => (
                        <li key={i} className="text-xs text-zinc-400 leading-relaxed pl-3 border-l border-white/10">
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {/* Technologies */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2 mb-4"
                >
                  {projects.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2.5 py-1 rounded-full bg-white/3 border border-white/6 text-zinc-500"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

                {/* Link */}
                {projects.link && (
                  <motion.a
                    href={projects.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.45 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 text-xs text-[#DA291C] hover:text-[#e64a3a] transition-colors mt-auto"
                  >
                    View Project
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