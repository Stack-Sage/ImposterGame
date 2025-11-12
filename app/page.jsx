"use client";
import Link from "next/link";
import ModeToggle from "../components/ModeToggle";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [mode, setMode] = useState("word");

  useEffect(() => {
    const saved = localStorage.getItem("mode");
    if (saved) setMode(saved);
  }, []);

  function start() {
    localStorage.setItem("mode", mode);
    window.location.href = "/setup";
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-[#00111f] to-[#001a33] px-1 sm:px-2 text-cyan-200 overflow-x-hidden">
      {/* Glass Card */}
      <motion.div
        className="w-screen md:max-w-2xl lg:max-w-3xl mx-1 sm:mx-auto bg-[#021420]/70 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-4 sm:p-8 shadow flex flex-col items-center gap-4 sm:gap-8 my-4 sm:my-8 text-white"
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-2 sm:gap-4 text-center mb-2 sm:mb-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-sky-600 bg-clip-text text-transparent drop-shadow mb-1 sm:mb-2"
          >
            Guys the Imposter
          </motion.h1>
          <p className="text-base sm:text-xl text-cyan-300/80 font-medium">
            Find the imposter among your friends!
          </p>
        </div>

        {/* Mode Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full flex flex-col items-center gap-2 sm:gap-4 border-t border-b border-cyan-500/10 py-2 sm:py-4 my-1 sm:my-2"
        >
          <h2 className="text-lg sm:text-2xl font-semibold text-sky-200 mb-0.5 sm:mb-1">
            Choose Game Mode
          </h2>
          <ModeToggle mode={mode} setMode={setMode} />
        </motion.div>

        {/* Start Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center gap-2 sm:gap-4 w-full mt-2 sm:mt-4 mb-2 sm:mb-4"
        >
          <button
            onClick={start}
            className="w-full px-4 sm:px-8 py-2 sm:py-4 text-lg sm:text-2xl font-bold rounded-full border border-gray-900 bg-gray-950 shadow hover:bg-sky-900 hover:text-cyan-200 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400 my-1 sm:my-2 text-white tracking-wide"
          >
            Start Game
          </button>
          <Link
            href="/setup"
            className="text-base sm:text-xl text-cyan-200 hover:text-pink-300 underline transition-all active:scale-95"
          >
            Setup Players
          </Link>
        </motion.div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-xs sm:text-lg text-cyan-200 flex flex-col gap-1 sm:gap-2 mt-2 sm:mt-4 mb-1 sm:mb-2"
        >
          <p className="hover:text-sky-300 transition">
            Installable PWA • Online & Offline • Mobile-first
          </p>
          <p className="text-gray-400 hover:text-sky-300 transition">
            Built with Next.js • Tailwind • Framer Motion
          </p>
        </motion.div>
      </motion.div>

      {/* Floating Glow Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15),transparent_70%)] pointer-events-none"
      />
    </div>
  );
}
