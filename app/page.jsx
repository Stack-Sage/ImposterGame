"use client";
import Link from "next/link";
import ModeToggle from "../components/ModeToggle";
import NeonButton from "../components/NeonButton";
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-[#00111f] to-[#001a33] px-4 text-cyan-200 overflow-x-hidden">
      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md bg-[#021420]/70 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-10 shadow-[0_0_50px_#00e0ff22] flex flex-col items-center gap-14"
        style={{ minHeight: "80vh" }}
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-6 text-center mb-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-sky-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_#00e0ff80]"
          >
            Guys the Imposter
          </motion.h1>
          <p className="text-base md:text-lg text-cyan-300/80 font-medium">
            Find the imposter among your friends!
          </p>
        </div>

        {/* Mode Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full flex flex-col items-center gap-8 border-t border-b border-cyan-500/10 py-8 my-2"
        >
          <h2 className="text-xl font-semibold text-sky-400">Choose Game Mode</h2>
          <ModeToggle mode={mode} setMode={setMode} />
        </motion.div>

        {/* Start Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center gap-8 w-full mt-4 mb-4"
        >
          <NeonButton
            onClick={start}
            className="w-full py-3 text-lg font-bold text-gray-900 bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full shadow-[0_0_30px_#00e0ff99] transition-transform duration-200 hover:scale-105 active:scale-95 hover:shadow-[0_0_50px_#00e0ffdd]"
          >
            Start Game
          </NeonButton>
          <Link
            href="/setup"
            className="text-sm text-sky-300 hover:text-pink-400 underline transition-all active:scale-95"
          >
            Setup Players
          </Link>
        </motion.div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-xs text-cyan-400/70 flex flex-col gap-2 mt-8 mb-2"
        >
          <p className="hover:text-sky-300 transition">Installable PWA • Online & Offline • Mobile-first</p>
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
