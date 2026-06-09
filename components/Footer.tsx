"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { LinkedinIcon, GraduationCapIcon, MailIcon, MessageCircleIcon } from "@/components/icons";
import { socialLinks } from "@/lib/data";

const socialIcons: Record<string, React.ElementType> = {
  linkedin: LinkedinIcon,
  scholar: GraduationCapIcon,
  email: MailIcon,
  whatsapp: MessageCircleIcon,
};

export default function Footer() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#FAF8F5] border-t-4 border-black overflow-hidden">
      {/* Newspaper texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiLy4KPC9zdmc+')] bg-repeat" />

      <div className="relative z-10">
        {/* Top masthead strip */}
        <div className="border-b-2 border-black bg-black text-white py-2 px-4">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-[9px] tracking-[0.2em] uppercase">
            <span>Digital Edition</span>
            <span className="text-[#DA291C] font-bold">WALID HANIF ATAULLAH</span>
            <span>Portfolio &bull; {currentYear}</span>
          </div>
        </div>

        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-12 gap-6">
            {/* Left column - About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="col-span-12 md:col-span-6 lg:col-span-5"
            >
              <div className="border-2 border-black p-5 bg-white">
                <h3 className="font-serif text-lg font-black text-black border-b-2 border-black pb-2 mb-4">
                  ABOUT THE AUTHOR
                </h3>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-[#DA291C] text-white flex items-center justify-center shrink-0">
                    <span className="font-serif text-2xl font-black">WH</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-black text-black">
                      Walid Hanif Ataullah
                    </h4>
                    <p className="font-serif text-xs text-[#555] italic mt-1">
                      Software Engineer, ML/DL Enthusiast, & IoT Explorer
                    </p>
                    <p className="font-serif text-xs text-[#666] mt-2 leading-relaxed">
                      Bachelor&apos;s graduate in Software Engineering with expertise in
                      Information Technology Adoption, Machine Learning, Deep Learning,
                      and Internet of Things.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick contact box */}
              <div className="mt-4 p-4 border border-dashed border-[#999] bg-[#f5f3f0]">
                <p className="font-serif text-xs text-[#555] leading-relaxed">
                  <span className="font-bold text-black">Location:</span> Tangerang, Indonesia
                </p>
                <p className="font-serif text-xs text-[#555] mt-1 leading-relaxed">
                  <span className="font-bold text-black">Email:</span> walidhnf12@gmail.com
                </p>
                <p className="font-serif text-xs text-[#555] mt-1 leading-relaxed">
                  <span className="font-bold text-black">Status:</span>{" "}
                  <span className="text-[#DA291C] font-bold italic">Open to opportunities</span>
                </p>
              </div>
            </motion.div>

            {/* Middle column - Quick Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="col-span-12 md:col-span-3 lg:col-span-3"
            >
              <div className="border-2 border-black p-5 bg-white">
                <h3 className="font-serif text-base font-black text-black border-b-2 border-black pb-2 mb-4">
                  NAVIGATION
                </h3>
                <ul className="space-y-2">
                  {[
                    { label: "Home", href: "#home" },
                    { label: "About", href: "#about" },
                    { label: "Experience", href: "#experience" },
                    { label: "Projects", href: "#projects" },
                    { label: "Skills", href: "#skills" },
                    { label: "Publications", href: "#publications" },
                    { label: "Contact", href: "#contact" },
                  ].map((item) => (
                    <li key={item.label} className="flex items-center gap-2">
                      <span className="text-[#DA291C] font-serif">&#x2022;</span>
                      <a
                        href={item.href}
                        className="font-serif text-sm text-[#333] hover:text-[#DA291C] transition-colors"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right column - Connect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="col-span-12 md:col-span-3 lg:col-span-4"
            >
              <div className="border-2 border-black p-5 bg-white">
                <h3 className="font-serif text-base font-black text-black border-b-2 border-black pb-2 mb-4">
                  CONNECT
                </h3>
                <p className="font-serif text-xs text-[#555] mb-4 leading-relaxed">
                  Follow the journey and stay updated with latest research, projects, and collaborations.
                </p>

                {/* Social links grid */}
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(socialLinks).map(([key, url]) => {
                    const Icon = socialIcons[key] || MailIcon;
                    const labels: Record<string, string> = {
                      linkedin: "LinkedIn",
                      scholar: "Google Scholar",
                      email: "Email",
                      whatsapp: "WhatsApp",
                    };
                    const isHovered = hoveredCard === key;
                    return (
                      <a
                        key={key}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => setHoveredCard(key)}
                        onMouseLeave={() => setHoveredCard(null)}
                        className={`flex items-center gap-3 p-4 border-2 transition-colors duration-300 ${
                          isHovered
                            ? 'border-black bg-black'
                            : 'border-black bg-white'
                        }`}
                      >
                        <div className={`p-2 shrink-0 transition-colors duration-300 ${
                          isHovered ? 'bg-white' : 'bg-[#DA291C]'
                        }`}>
                          <Icon className={`w-4 h-4 transition-colors duration-300 ${
                            isHovered ? 'text-[#DA291C]' : 'text-white'
                          }`} />
                        </div>
                        <span className={`font-serif text-sm font-bold transition-colors duration-300 ${
                          isHovered ? 'text-white' : 'text-black'
                        }`}>
                          {labels[key]}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t-4 border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <div className="text-center sm:text-left">
                <p className="font-serif text-xs text-[#555]">
                  <span className="text-[#DA291C]">&copy;</span> {currentYear} Walid Hanif Ataullah. All rights reserved.
                </p>
                <p className="font-serif text-[10px] text-[#999] mt-1 tracking-wider">
                  REPRODUCTION WITHOUT PERMISSION PROHIBITED
                </p>
              </div>

              {/* Tech stack */}
              <div className="flex items-center gap-3">
                <span className="font-serif text-[10px] tracking-[0.15em] uppercase text-[#666]">
                  Built with
                </span>
                <div className="flex items-center gap-2">
                  {["Next.js", "React", "Tailwind"].map((tech) => (
                    <span
                      key={tech}
                      className="font-serif text-[10px] px-2 py-1 bg-black text-white tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Final flourish */}
            <div className="mt-6 flex items-center justify-center gap-4">
              <span className="w-20 h-px bg-[#ccc]" />
              <span className="text-[#DA291C] text-xl font-serif">&diams;</span>
              <span className="w-20 h-px bg-[#ccc]" />
            </div>

            {/* Colophon */}
            <p className="text-center mt-4 font-serif text-[9px] tracking-[0.2em] uppercase text-[#999]">
              Colophon: Set in digital serif &bull; Composed with care &bull; Vol. MMXXVI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}