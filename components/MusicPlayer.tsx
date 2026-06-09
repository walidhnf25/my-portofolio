"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const animationRef = useRef<number | null>(null);

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
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("splashComplete", handleSplashComplete);
    };
  }, []);

  // Update progress based on currentTime
  useEffect(() => {
    if (isPlaying && audioRef.current) {
      const updateProgress = () => {
        if (audioRef.current) {
          const { currentTime, duration } = audioRef.current;
          if (duration > 0) {
            const progressValue = (currentTime / duration) * 100;
            setProgress(progressValue);
          }
        }
        animationRef.current = requestAnimationFrame(updateProgress);
      };
      animationRef.current = requestAnimationFrame(updateProgress);

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    } else if (!isPlaying) {
      setProgress(0);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }
  }, [isPlaying]);

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

  // Calculate stroke-dashoffset for circular progress
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <button
      onClick={togglePlay}
      className="group relative flex items-center justify-center w-9 h-9 bg-white rounded-full hover:shadow-lg transition-all duration-300"
      title={isPlaying ? "Pause Music" : "Play Music"}
    >
      {/* Progress ring - SVG circular border */}
      <svg
        className="absolute inset-0 w-full h-full -rotate-90"
        viewBox="0 0 40 40"
      >
        {/* Background circle */}
        <circle
          cx="20"
          cy="20"
          r={radius}
          fill="none"
          stroke="#000"
          strokeWidth="2"
          className="opacity-30"
        />
        {/* Progress circle */}
        <circle
          cx="20"
          cy="20"
          r={radius}
          fill="none"
          stroke={isPlaying ? "#DA291C" : "#000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-100 ease-linear"
          style={{
            transformOrigin: "center",
            transform: "rotate(-90deg)",
          }}
        />
      </svg>

      {/* Play/Pause Icon */}
      <div className="relative flex items-center justify-center z-10">
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
          // Play Icon - Triangle
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

        {/* Playing indicator - pulsing dot */}
        {isPlaying && (
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#DA291C] rounded-full animate-pulse" />
        )}
      </div>
    </button>
  );
}