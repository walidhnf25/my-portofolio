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
    <section id="certifications" className="relative py-40 overflow-hidden">
      {/* Subtle ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/3 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-[#DA291C]/2 blur-[150px] rounded-full" />
      </div>

      <div className="mx-auto max-w-4xl px-6">
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
            Certifications
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-5"
          >
            Validating{' '}
            <span className="bg-linear-to-r from-[#DA291C] to-[#e64a3a] bg-clip-text text-transparent">
              expertise
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm text-zinc-500 max-w-xl"
          >
            Professional certifications from leading platforms demonstrating technical proficiency and continuous learning
          </motion.p>
        </motion.div>

        {/* Certifications List */}
        <div className="space-y-5 sm:space-y-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={`${cert.provider}-${cert.title}`}
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
                    background: "radial-gradient(ellipse at top left, rgba(218,41,28,0.06), transparent 60%)",
                  }}
                />

                {/* Date & Mode */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4">
                  <span className="text-[10px] text-[#DA291C] uppercase tracking-[0.2em]">
                    {cert.date}
                  </span>
                  <span className="text-xs text-zinc-600 sm:hidden">{cert.mode}</span>
                  <span className="hidden sm:inline text-zinc-600">·</span>
                  <span className="hidden sm:inline text-xs text-zinc-600">
                    {cert.mode}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-lg sm:text-xl font-semibold text-white mb-2 tracking-tight leading-tight"
                  >
                    {cert.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-sm text-zinc-500 mb-4"
                  >
                    {cert.provider}
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-sm text-zinc-400 leading-relaxed"
                  >
                    {cert.description}
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