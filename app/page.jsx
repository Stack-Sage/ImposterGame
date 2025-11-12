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
        className="w-full max-w-xl bg-[#021420]/70 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-16 shadow-[0_0_50px_#00e0ff22] flex flex-col items-center gap-20 space-y-14 my-16"
        style={{ minHeight: "80vh" }}
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-10 space-y-6 text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-sky-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_#00e0ff80] mb-4"
          >
            Guys the Imposter
          </motion.h1>
          <p className="text-2xl md:text-3xl text-cyan-300/80 font-medium">
            Find the imposter among your friends!
          </p>
        </div>

        {/* Mode Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full flex flex-col items-center gap-12 space-y-8 border-t border-b border-cyan-500/10 py-14 my-6"
        >
          <h2 className="text-4xl font-semibold text-sky-400 mb-2">
            Choose Game Mode
          </h2>
          <ModeToggle mode={mode} setMode={setMode} />
        </motion.div>

        {/* Start Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center gap-12 space-y-8 w-full mt-10 mb-10"
        >
          <NeonButton
            onClick={start}
            className="w-full py-5 text-3xl font-bold rounded-full shadow-[0_0_30px_#00e0ff99] transition-transform duration-200  bg-black hover:scale-105 active:scale-95 hover:shadow-[0_0_50px_#00e0ffdd]"
          >
            <span className="text-black  text-3xl">Start Game</span>
          </NeonButton>
          <Link
            href="/setup"
            className="text-xl text-sky-300 hover:text-pink-400 underline transition-all active:scale-95"
          >
            Setup Players
          </Link>
        </motion.div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-xl text-cyan-400/70 flex flex-col gap-6 space-y-4 mt-16 mb-6"
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
