"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/data";
import MusicPlayer from "@/components/MusicPlayer";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10);

      const sections = navItems.map((item) => item.href.replace("#", ""));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#FAF8F5]/98 backdrop-blur-sm shadow-md" : "bg-transparent"
        }`}
        style={{
          borderBottom: isScrolled ? "2px solid #000" : "2px solid #000",
        }}
      >
        <div className="relative mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 sm:h-14">
            {/* Logo - Custom Logo */}
            <button
              onClick={() => scrollToSection("#home")}
              className="group"
            >
              <img
                src="/logo.png"
                alt="WHA Logo"
                className="h-10 sm:h-15 w-auto object-contain group-hover:opacity-80 transition-opacity"
              />
            </button>

            {/* Desktop Navigation - Newspaper style */}
            <div className="hidden lg:flex items-center">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-2 sm:px-3 py-2 text-[10px] sm:text-[11px] font-medium tracking-wide uppercase transition-colors duration-200 whitespace-nowrap font-serif ${
                    activeSection === item.href.replace("#", "")
                      ? "text-[#DA291C] border-b-2 border-[#DA291C]"
                      : "text-[#444] hover:text-[#DA291C]"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-1 sm:gap-2">
              <MusicPlayer />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-1 sm:p-1.5 text-black hover:text-[#DA291C] transition-colors lg:hidden"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-4 h-4" />
                ) : (
                  <Menu className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Edition line below nav */}
        <div className="hidden lg:block bg-black text-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="flex items-center justify-between text-[8px] sm:text-[9px] tracking-[0.15em] sm:tracking-[0.2em] uppercase py-0.5 sm:py-1">
              <span className="hidden sm:inline">Software Engineer &bull; ML/DL Enthusiast &bull; IoT Explorer</span>
              <span>{new Date().toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" })}</span>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed top-12 sm:top-14 left-0 right-0 z-50 bg-[#FAF8F5] border-b-2 sm:border-b-4 border-black md:hidden"
            >
              <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
                <div className="grid grid-cols-2 gap-1 sm:gap-1.5">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.02 }}
                      onClick={() => scrollToSection(item.href)}
                      className={`flex items-center px-3 sm:px-4 py-2 sm:py-3 text-sm font-serif font-medium transition-colors text-left border border-transparent hover:border-[#DA291C] ${
                        activeSection === item.href.replace("#", "")
                          ? "text-[#DA291C] bg-black/5"
                          : "text-[#333] hover:bg-black/5"
                      }`}
                    >
                      <span className="text-[9px] sm:text-[10px] tracking-[0.1em] sm:tracking-[0.15em] uppercase mr-1.5 sm:mr-2">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item.name}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}