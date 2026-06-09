"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen({
  onComplete,
}: {
  onComplete?: () => void;
}) {
  const [isVisible, setIsVisible] = useState(true);
  const [isEntering, setIsEntering] = useState(false);

  const handleEnter = () => {
    setIsEntering(true);
    setTimeout(() => {
      setIsVisible(false);
      window.dispatchEvent(new Event("splashComplete"));
      onComplete?.();
    }, 600);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isEntering ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] bg-[#FAF8F5] flex items-center justify-center"
        >
          {/* Top decorative line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-black" />

          {/* Bottom decorative line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black" />

          {/* Center content */}
          <div className="text-center px-8 max-w-4xl">
            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[10px] tracking-[0.5em] uppercase text-[#888] font-mono mb-8"
            >
              Portfolio Exhibition
            </motion.p>

            {/* Main Name */}
            <div className="mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
                className="text-7xl md:text-9xl font-black font-serif text-black leading-none tracking-tight"
              >
                WALID
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
                className="text-7xl md:text-9xl font-black font-serif text-black leading-none tracking-tight"
              >
                HANIF
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
                className="text-7xl md:text-9xl font-black font-serif text-[#DA291C] leading-none tracking-tight"
              >
                ATAULLAH
              </motion.h1>
            </div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex items-center justify-center gap-4 mb-8"
            >
              <div className="w-20 h-px bg-black" />
              <div className="w-1.5 h-1.5 bg-black rotate-45" />
              <div className="w-20 h-px bg-black" />
            </motion.div>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="text-sm tracking-[0.4em] uppercase text-[#555] font-serif mb-2"
            >
              Software Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-[10px] tracking-[0.25em] uppercase text-[#888] font-mono"
            >
              ML / DL &bull; IoT &bull; Research
            </motion.p>

            {/* Enter Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              onClick={handleEnter}
              className="group relative mt-12 inline-block"
            >
              <div className="px-10 py-4 bg-black text-white group-hover:bg-[#DA291C] transition-colors duration-500">
                <span className="text-[11px] tracking-[0.3em] uppercase font-bold font-mono">
                  Enter
                </span>
              </div>
            </motion.button>
          </div>

          {/* Bottom text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="absolute bottom-6 left-0 right-0 text-center"
          >
            <p className="text-[9px] tracking-[0.3em] uppercase text-[#aaa] font-mono">
              {new Date().toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}