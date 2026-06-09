"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.src = "/music/coldplay-vivalavida.mp3";
    audioRef.current.loop = true;

    // Play after splash screen interaction
    const tryPlay = () => {
      audioRef.current?.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});
    };

    // Try immediately first (in case splash already done)
    tryPlay();

    // Also listen for splash completion
    const handleSplashComplete = () => {
      tryPlay();
    };

    window.addEventListener("splashComplete", handleSplashComplete);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      window.removeEventListener("splashComplete", handleSplashComplete);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          console.log("Audio playback requires user interaction");
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <button
      onClick={togglePlay}
      className="group relative flex items-center justify-center w-9 h-9 bg-white border-2 border-black rounded-full hover:border-[#DA291C] hover:shadow-lg transition-all duration-300"
      title={isPlaying ? "Pause Music" : "Play Music"}
    >
      {/* Inner border decoration */}
      <div className="absolute inset-[3px] border border-black/10 rounded-full group-hover:border-[#DA291C]/30 transition-colors duration-300 pointer-events-none" />

      {/* Play/Pause Icon - Premium Design */}
      <div className="relative flex items-center justify-center">
        {isPlaying ? (
          // Pause Icon - Two bars
          <motion.svg
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="w-4 h-4 text-[#DA291C]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </motion.svg>
        ) : (
          // Play Icon - Triangle with shine
          <motion.svg
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="w-4 h-4 text-black group-hover:text-[#DA291C] transition-colors duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </motion.svg>
        )}

        {/* Playing indicator - pulsing ring */}
        {isPlaying && (
          <>
            <motion.span
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
              className="absolute w-3 h-3 bg-[#DA291C]/30 rounded-full"
            />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#DA291C] rounded-full animate-pulse" />
          </>
        )}
      </div>
    </button>
  );
}