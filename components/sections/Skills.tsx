"use client";

import { motion } from "framer-motion";

const skills = [
  {
    title: "Programming & Data",
    skills: ["Python", "Golang", "JavaScript", "PHP", "TypeScript", "SQL", "C", "C++", "C#", "R", "JSON"],
    accentColor: "#DA291C",
  },
  {
    title: "Fullstack Development",
    skills: ["Flask", "Node.js", "Laravel", "CodeIgniter", "React", "Angular", "Astro", "Flutter", "MySQL", "PostgreSQL", "MongoDB", "Sanity.io"],
    accentColor: "#DA291C",
  },
  {
    title: "Machine Learning & Deep Learning",
    skills: ["PyTorch", "TensorFlow", "CNN", "LSTM", "DeepLab", "MobileNet", "Computer Vision", "Semantic Segmentation", "Model Development", "Training", "Evaluation", "Optimization"],
    accentColor: "#FFD700",
  },
  {
    title: "Internet of Things & Intelligent Systems",
    skills: ["Embedded Programming", "Sensor-Based Data Acquisition", "IoT-Cloud Integration", "Real-Time Monitoring Systems"],
    accentColor: "#FFD700",
  },
  {
    title: "Cloud, DevOps & Tools",
    skills: ["Google Cloud", "AWS", "Firebase", "Docker", "Git", "Android Studio", "Arduino IDE", "Google Colab", "Jupyter", "Postman"],
    accentColor: "#DA291C",
  },
  {
    title: "Software Engineering",
    skills: ["Agile", "Scrum", "Kanban", "Waterfall", "Design Thinking", "System Design", "Unit Testing", "Integration Testing", "Performance Testing"],
    accentColor: "#FFD700",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-40 overflow-hidden">
      {/* Subtle ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 bg-[#DA291C]/2 blur-[150px] rounded-full" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
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
            Skills
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-5"
          >
            Technical{' '}
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
            Comprehensive skill set spanning fullstack development, machine learning, and software engineering
          </motion.p>
        </motion.div>

        {/* Skills Grid - Modern staggered layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {skills.map((skills, index) => (
            <motion.div
              key={skills.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Card */}
              <div
                className="relative rounded-2xl p-7 border transition-all duration-500 group-hover:border-white/8 flex flex-col h-full"
                style={{
                  background: "linear-gradient(145deg, rgba(10,10,10,0.9), rgba(6,6,6,0.95))",
                  borderColor: "rgba(255,255,255,0.04)",
                }}
              >
                {/* Subtle glow on hover */}
                <div
                  className="absolute -inset-6 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"
                  style={{
                    background: `radial-gradient(ellipse at top, ${skills.accentColor}08, transparent 60%)`,
                  }}
                />

                {/* Category Title */}
                <h3
                  className="text-sm font-semibold tracking-tight mb-5"
                  style={{ color: skills.accentColor }}
                >
                  {skills.title}
                </h3>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {skills.skills.map((skills) => (
                    <span
                      key={skills}
                      className="text-[11px] px-3 py-1.5 rounded-lg bg-white/3 border border-white/6 text-zinc-400 hover:border-white/10 hover:text-white hover:bg-white/6 transition-all duration-300"
                    >
                      {skills}
                    </span>
                  ))}
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