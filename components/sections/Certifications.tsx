"use client";

import { motion } from "framer-motion";

const certifications = [
  {
    title: "Software Engineer Role Certification",
    provider: "HackerRank",
    date: "1 Mar 2026",
    description:
      "Completed the HackerRank Software Engineer role certification, demonstrating proficiency in problem solving, SQL, and REST API development.",
    mode: "Online",
    accentColor: "#DA291C",
  },
  {
    title: "Deep Learning Specialization",
    provider: "DeepLearning.AI (via Coursera)",
    date: "2 Feb 2026",
    description:
      "Completed comprehensive training in deep learning, including neural network architecture design, model optimization, and implementation of CNNs and RNNs for computer vision and NLP tasks using TensorFlow and transformer models.",
    mode: "Online",
    accentColor: "#DA291C",
  },
  {
    title: "Machine Learning Specialization",
    provider: "DeepLearning.AI & Stanford University (via Coursera)",
    date: "29 Jan 2026",
    description:
      "Completed comprehensive training in machine learning, covering supervised and unsupervised learning, neural networks, ensemble methods, recommender systems, and reinforcement learning using scikit-learn and TensorFlow.",
    mode: "Online",
    accentColor: "#DA291C",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-16 overflow-hidden bg-[#FAF8F5]">
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
              Professional Credentials
            </span>
          </div>

          {/* Section title */}
          <div className="border-b-4 border-black pb-3">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-black leading-none">
              VALIDATING
              <br />
              <span className="text-[#DA291C]">EXPERTISE</span>
            </h2>
          </div>

          {/* Subheader */}
          <div className="flex items-center justify-center gap-4 text-[10px] tracking-[0.2em] uppercase text-[#666] mt-3">
            <span>Professional Certifications</span>
            <span className="w-1 h-1 rounded-full bg-[#DA291C]" />
            <span>Technical Proficiency</span>
            <span className="w-1 h-1 rounded-full bg-[#DA291C]" />
            <span>Continuous Learning</span>
          </div>
        </motion.header>

        {/* Main Content */}
        <div className="grid grid-cols-12 gap-8">
          {/* Left Column - Certifications List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-8"
          >
            {/* Main headline */}
            <h3 className="font-serif text-2xl sm:text-3xl font-black text-black mb-2 leading-tight">
              Professional certifications from leading platforms demonstrating technical proficiency and continuous learning
            </h3>

            {/* Byline */}
            <div className="flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase text-[#666] border-b border-dashed border-[#999] pb-3 mb-6">
              <span>By Credentials Desk</span>
              <span className="w-1 h-1 rounded-full bg-[#DA291C]" />
              <span>Certifications Section</span>
            </div>

            {/* Certifications List */}
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.article
                  key={`${cert.provider}-${cert.title}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Card */}
                  <div className="border-2 border-black p-5 bg-white relative hover:border-[#DA291C] transition-colors">
                    {/* Red accent bar */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#DA291C]" />

                    {/* Article number */}
                    <div className="absolute top-2 right-2 font-serif text-5xl font-black text-[#DA291C]/10 leading-none">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Header */}
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-[10px] tracking-widest uppercase text-[#DA291C] font-bold">
                        {cert.date}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-[#999]" />
                      <span className="text-[9px] font-bold tracking-wider uppercase bg-black text-white px-2 py-1">
                        {cert.mode}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="font-serif text-lg sm:text-xl font-black text-black leading-tight mb-2 pr-12">
                      {cert.title}
                    </h4>

                    {/* Provider */}
                    <p className="font-serif text-sm text-[#444] mb-3 font-semibold">
                      {cert.provider}
                    </p>

                    {/* Description */}
                    <p className="font-serif text-sm text-[#555] leading-relaxed border-l-2 border-[#DA291C] pl-4">
                      {cert.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Learning Commitment */}
            <div className="mt-8 p-5 bg-[#f5f3f0] border-l-4 border-[#DA291C]">
              <p className="font-serif text-sm text-[#333] leading-relaxed">
                Committed to continuous professional development through online learning platforms and industry-recognized certifications to stay current with evolving technologies.
              </p>
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
            {/* Certification Stats */}
            <div className="bg-black text-white p-6 mb-6">
              <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#999] mb-4 pb-2 border-b border-[#333]">
                Credentials Summary
              </h4>
              <div className="space-y-4">
                <div className="text-center">
                  <p className="font-serif text-4xl font-black text-[#DA291C]">3</p>
                  <p className="text-[10px] tracking-widest uppercase text-[#999] mt-1">
                    Certifications
                  </p>
                </div>
                <div className="border-t border-[#333] pt-4 grid grid-cols-2 gap-3">
                  <div className="text-center">
                    <p className="text-xl font-bold text-white">3</p>
                    <p className="text-[9px] uppercase text-[#666]">Online</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-white">2</p>
                    <p className="text-[9px] uppercase text-[#666]">Specializations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certification Providers */}
            <div className="border-2 border-black p-5">
              <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-black border-b-2 border-black pb-2 mb-4">
                Certification Providers
              </h4>
              <ul className="space-y-2">
                {[
                  "DeepLearning.AI",
                  "Stanford University",
                  "HackerRank",
                  "Coursera",
                ].map((provider, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#DA291C] font-serif">•</span>
                    <span className="font-serif text-sm text-[#333]">{provider}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills Verified */}
            <div className="mt-6 border border-[#ddd] p-5">
              <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-black mb-3">
                Skills Verified
              </h4>
              <div className="space-y-3">
                {[
                  { skill: "Deep Learning", level: "Advanced" },
                  { skill: "Machine Learning", level: "Advanced" },
                  { skill: "Software Engineering", level: "Professional" },
                  { skill: "REST API Development", level: "Proficient" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-serif text-sm text-black">{item.skill}</span>
                      <span className="text-[9px] text-[#DA291C]">{item.level}</span>
                    </div>
                    <div className="w-full h-1 bg-[#ddd]">
                      <div
                        className="h-full bg-[#DA291C]"
                        style={{ width: item.level === "Advanced" ? "90%" : item.level === "Professional" ? "80%" : "70%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Technologies */}
            <div className="mt-6 p-5 bg-[#f5f3f0] border-l-4 border-[#DA291C]">
              <p className="text-[10px] tracking-widest uppercase text-[#DA291C] mb-2">
                Key Technologies Covered
              </p>
              <div className="flex flex-wrap gap-2">
                {["TensorFlow", "scikit-learn", "CNNs", "RNNs", "Transformers", "SQL", "REST API"].map((tech, i) => (
                  <span key={i} className="text-[9px] px-2 py-1 bg-white border border-[#ddd] text-[#444]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Learning Platforms */}
            <div className="mt-6 p-4 border border-[#ddd]">
              <h4 className="text-[10px] tracking-widest uppercase font-bold text-black mb-3">
                Learning Platforms
              </h4>
              <div className="space-y-2">
                {[
                  { platform: "Coursera", certs: "2 Specializations" },
                  { platform: "HackerRank", certs: "1 Certification" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="font-serif text-sm text-black">{item.platform}</span>
                    <span className="text-[10px] text-[#DA291C]">{item.certs}</span>
                  </div>
                ))}
              </div>
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
            End of Section &bull; Certifications &bull; Vol. MMXXVI
          </p>
        </motion.div>
      </div>
    </section>
  );
}