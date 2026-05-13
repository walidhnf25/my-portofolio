"use client";

import { motion } from "framer-motion";
import { CloudIcon, MonitorIcon, DatabaseIcon, LineChartIcon } from "@/components/icons";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";

const projects = [
  {
    title: "IoT Air Quality Monitoring",
    category: "IoT / Machine Learning",
    description: "Real-time air quality monitoring using ML algorithms for pollution prediction.",
    technologies: ["Python", "TensorFlow", "ESP32"],
    status: "Completed",
    icon: CloudIcon,
    color: "#DA291C",
  },
  {
    title: "Semantic Segmentation for Smoke Detection",
    category: "Deep Learning / Computer Vision",
    description: "Detecting cigarette and vape smoke using semantic segmentation models.",
    technologies: ["Python", "PyTorch", "React"],
    status: "Thesis",
    icon: MonitorIcon,
    color: "#FFD700",
  },
  {
    title: "E-Government Adoption Analysis",
    category: "Information Systems Research",
    description: "TAM and ISSM analysis for e-government adoption in Indonesia.",
    technologies: ["Python", "SPSS", "SEM"],
    status: "Published",
    icon: DatabaseIcon,
    color: "#DA291C",
  },
  {
    title: "AI Health Application Acceptance",
    category: "AI Research",
    description: "Factors affecting user acceptance of AI-based digital health apps.",
    technologies: ["Python", "R", "MLR"],
    status: "Published",
    icon: LineChartIcon,
    color: "#FFD700",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 bg-[#050505]">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          title="Projects"
          subtitle="Technical work solving real problems"
          align="center"
        />

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-6 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="p-3 rounded-lg shrink-0"
                    style={{ backgroundColor: `${project.color}15` }}
                  >
                    <project.icon
                      className="w-6 h-6"
                      style={{ color: project.color }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                    <p className="text-xs text-zinc-600 mt-0.5">{project.category}</p>
                  </div>
                </div>

                <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="default" className="text-[10px]">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <Badge variant={project.status === "Completed" ? "accent" : project.status === "Thesis" ? "gold" : "default"}>
                  {project.status}
                </Badge>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}