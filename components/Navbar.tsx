"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const sections = navItems.map((item) => item.href.replace("#", ""));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 80 && rect.bottom >= 80;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
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
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "py-4" : "py-5"
        )}
      >
        <div className={cn(
          "transition-all duration-500",
          isScrolled ? "glass" : "bg-transparent"
        )}>
          <div className="mx-auto max-w-5xl px-6">
            <div className="flex items-center justify-between">
              <button
                onClick={() => scrollToSection("#home")}
                className="text-lg font-bold tracking-tight"
              >
                <span className="gradient-text-accent">WHA</span>
              </button>

              <div className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "relative text-sm font-medium tracking-wide transition-colors duration-300",
                      activeSection === item.href.replace("#", "")
                        ? "text-white"
                        : "text-zinc-500 hover:text-white"
                    )}
                  >
                    {item.name}
                    {activeSection === item.href.replace("#", "") && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-px bg-[#DA291C]"
                      />
                    )}
                  </button>
                ))}
              </div>

              <motion.a
                href="mailto:walidhanif25@gmail.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="hidden md:inline-flex px-5 py-2 text-sm font-medium rounded-full bg-[#DA291C] text-white hover:bg-[#e83025] transition-colors duration-300"
              >
                Contact
              </motion.a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-white"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 glass md:hidden"
          >
            <div className="mx-auto max-w-5xl px-6 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium tracking-wide rounded-lg text-left transition-colors",
                    activeSection === item.href.replace("#", "")
                      ? "text-white bg-white/5"
                      : "text-zinc-500 hover:text-white hover:bg-white/5"
                  )}
                >
                  {item.name}
                </button>
              ))}
              <a
                href="mailto:walidhanif25@gmail.com"
                className="mt-2 px-4 py-3 text-sm font-medium rounded-lg text-center bg-[#DA291C] text-white"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}