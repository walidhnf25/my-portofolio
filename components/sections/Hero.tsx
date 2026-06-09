"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { LinkedinIcon, GraduationCapIcon, MailIcon, MessageCircleIcon } from "@/components/icons";
import Button from "@/components/ui/Button";
import { socialLinks } from "@/lib/data";

export default function Hero() {
  const socialIcons: Record<string, React.ElementType> = {
    linkedin: LinkedinIcon,
    scholar: GraduationCapIcon,
    email: MailIcon,
    whatsapp: MessageCircleIcon,
  };

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section id="home" className="relative min-h-screen pt-16 overflow-hidden bg-[#FAF8F5]">
      {/* Newspaper texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiLy4KPC9zdmc+')] bg-repeat" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Masthead */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          {/* Top bar */}
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-[10px] sm:tracking-[0.15em] tracking-[0.08em] uppercase text-[#2a2a2a] border-b-2 border-black pb-2 mb-2">
            <span>{currentDate}</span>
            <span className="font-medium">Digital Edition</span>
            <span>Vol. MMXXVI</span>
          </div>

          {/* Masthead */}
          <div className="border-b-4 border-black pb-3">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-black leading-none">
              WALID HANIF
              <br />
              <span className="text-[#DA291C]">ATAULLAH</span>
            </h1>
          </div>

          {/* Subheader */}
          <div className="flex items-center justify-center gap-4 text-[11px] tracking-[0.2em] uppercase text-[#444] mt-3">
            <span>Software Engineer</span>
            <span className="w-1 h-1 rounded-full bg-[#DA291C]" />
            <span>ML/DL Enthusiast</span>
            <span className="w-1 h-1 rounded-full bg-[#DA291C]" />
            <span>IoT Explorer</span>
          </div>

          {/* Edition info */}
          <div className="border-t border-dashed border-[#999] mt-3 pt-2">
            <p className="text-[10px] tracking-widest uppercase text-[#666]">
              Special Feature &bull; Profile Edition &bull; First Publication
            </p>
          </div>
        </motion.header>

        {/* Main Headline Section */}
        <div className="grid grid-cols-12 gap-6 mt-8">
          {/* Left column - Main story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="col-span-12 lg:col-span-7"
          >
            {/* Category tag */}
            <div className="inline-block">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase bg-[#DA291C] text-white px-3 py-1">
                Featured Profile
              </span>
            </div>

            {/* Main headline */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-black leading-[1.05] text-black mt-4 mb-4">
              The Future of{" "}
              <span className="italic text-[#DA291C]">Intelligent</span>
              <br />
              Systems, One
              <br />
              <span className="underline decoration-4 underline-offset-4">Algorithm</span>{" "}
              at a Time
            </h2>

            {/* Subheadline */}
            <p className="font-serif text-lg md:text-xl text-[#444] leading-relaxed border-l-4 border-[#DA291C] pl-4 italic">
              From machine learning breakthroughs to IoT innovations, meet the
              visionary shaping tomorrow&apos;s technology landscape.
            </p>

            {/* Drop cap paragraph */}
            <div className="mt-6">
              <p className="font-serif text-[15px] leading-[1.75] text-[#333] first-letter:text-5xl first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#DA291C] first-letter:leading-[0.8]">
                Bachelor&apos;s graduate in Software Engineering with proven expertise
                in Information Technology Adoption, Machine Learning, Deep Learning,
                and Internet of Things. Passionate about developing intelligent
                systems that bridge the gap between human needs and technological
                solutions.
              </p>
            </div>

            {/* Call to action */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                variant="primary"
                size="lg"
                icon={<Download className="w-4 h-4" />}
                className="bg-black hover:!bg-[#DA291C] text-white border-black"
              >
                Download CV
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-black text-black hover:!bg-black hover:!text-white"
              >
                Read More
              </Button>
            </div>
          </motion.div>

          {/* Right column - Stats & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="col-span-12 lg:col-span-5"
          >
            {/* Stats box */}
            <div className="bg-black text-white p-6 mb-6">
              <h3 className="text-[10px] tracking-[0.3em] uppercase text-[#999] mb-4 pb-2 border-b border-[#333]">
                By The Numbers
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="font-serif text-3xl md:text-4xl font-black text-[#DA291C]">3+</p>
                  <p className="text-[10px] tracking-[0.15em] uppercase text-[#999] mt-1">Publications</p>
                </div>
                <div className="text-center border-x border-[#333]">
                  <p className="font-serif text-3xl md:text-4xl font-black text-[#DA291C]">5+</p>
                  <p className="text-[10px] tracking-[0.15em] uppercase text-[#999] mt-1">Research Projects</p>
                </div>
                <div className="text-center">
                  <p className="font-serif text-3xl md:text-4xl font-black text-[#DA291C]">15+</p>
                  <p className="text-[10px] tracking-[0.15em] uppercase text-[#999] mt-1">Technologies</p>
                </div>
              </div>
            </div>

            {/* Expertise box */}
            <div className="border-2 border-black p-5">
              <h3 className="text-xs tracking-[0.3em] uppercase font-bold text-black border-b-2 border-black pb-3 mb-4">
                Areas of Expertise
              </h3>
              <ul className="space-y-2">
                {[
                  "Information Technology Adoption",
                  "Machine Learning & Deep Learning",
                  "Internet of Things (IoT)",
                  "Software Engineering",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-[#DA291C] font-serif text-xl">&bull;</span>
                    <span className="font-serif text-sm text-[#333]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quote box */}
            <div className="mt-6 p-5 bg-[#f5f3f0] border-l-4 border-[#DA291C]">
              <p className="font-serif text-lg italic text-[#333] leading-relaxed">
                &ldquo;Innovation is not about technology alone, but about how we
                apply it to solve real-world problems.&rdquo;
              </p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#666] mt-3">
                — Walid Hanif Ataullah
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom section - Contact bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 border-t-4 border-b-2 border-black py-6"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h4 className="font-serif text-lg font-bold text-black">
                Connect With The Author
              </h4>
              <p className="text-[13px] text-[#666] mt-1">
                Follow the journey and stay updated with latest research
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {Object.entries(socialLinks).map(([key, url]) => {
                const Icon = socialIcons[key] || MailIcon;
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-black text-white hover:bg-[#DA291C] transition-colors duration-300"
                    title={key.charAt(0).toUpperCase() + key.slice(1)}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Footer ornament */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="w-16 h-px bg-[#999]" />
            <span className="text-[#DA291C] text-2xl font-serif">&diams;</span>
            <span className="w-16 h-px bg-[#999]" />
          </div>
        </div>
      </div>
    </section>
  );
}
