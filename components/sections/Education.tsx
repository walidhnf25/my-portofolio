"use client";

import { motion } from "framer-motion";
import { GraduationCapIcon, AwardIcon } from "@/components/icons";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import { Calendar, MapPin } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="relative py-32 bg-[#050505]">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          title="Education"
          subtitle="Academic foundation shaping my approach"
          align="center"
        />

        <div className="mt-16 space-y-6">
          <GlassCard className="p-8">
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-xl bg-[#DA291C]/10 shrink-0">
                <GraduationCapIcon className="w-7 h-7 text-[#DA291C]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Bachelor of Software Engineering</h3>
                    <p className="text-[#DA291C] font-medium">Telkom University</p>
                  </div>
                  <Badge variant="accent">GPA: 3.79 Cum Laude</Badge>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-zinc-500 mb-5">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>2021 – 2025</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    <span>Bandung, Indonesia</span>
                  </div>
                </div>

                <p className="text-sm text-zinc-500 leading-relaxed">
                  Specialized in Software Engineering with focus on AI, Deep Learning, and IoT systems. Thesis: &quot;Web Design Using Agile Method for Monitoring Detection of Cigarette and Vape Smoke with Semantic Segmentation&quot;
                </p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-8">
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-xl bg-[#FFD700]/10 shrink-0">
                <AwardIcon className="w-7 h-7 text-[#FFD700]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Mathematics and Natural Science</h3>
                    <p className="text-[#FFD700] font-medium">SMAN 5 Kabupaten Tangerang</p>
                  </div>
                  <Badge variant="gold">Grade: 86.46</Badge>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-zinc-500 mb-5">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>2018 – 2021</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    <span>Tangerang, Indonesia</span>
                  </div>
                </div>

                <p className="text-sm text-zinc-500 leading-relaxed">
                  Strong foundation in mathematics and sciences, establishing the groundwork for analytical thinking and problem-solving in technology.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}