"use client";
import Link from "next/link";
import ModeToggle from "../components/ModeToggle";
import NeonButton from "../components/NeonButton";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [mode, setMode] = useState("word");

  useEffect(() => {
    const saved = typeof window !== "undefined" && localStorage.getItem("mode");
    if (saved) setMode(saved);
  }, []);

  function start() {
    localStorage.setItem("mode", mode);
    window.location.href = "/setup";
  }

  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-gradient-to-br from-sky-100/40 via-cyan-200/40 to-blue-200/40">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass p-10 flex flex-col gap-10 items-center justify-center mx-2 md:mx-10 w-full max-w-md"
      >
        <div className="flex flex-col items-center gap-2">
          <h1 className="h1 font-extrabold text-sky-600 text-center drop-shadow-lg">Guys the Imposter</h1>
          <p className="text-lg text-cyan-700 text-center font-semibold">Find the imposter among your friends!</p>
        </div>
        <div className="flex flex-col gap-4 w-full items-center">
          <h2 className="h2 font-bold text-cyan-500 text-center">Choose a Mode</h2>
          <ModeToggle mode={mode} setMode={setMode} />
        </div>
        <div className="flex flex-col gap-4 w-full items-center">
          <NeonButton onClick={start}>Start Game</NeonButton>
          <Link href="/setup" className="text-base text-cyan-600 underline hover:text-sky-500 transition text-center">Setup Players</Link>
        </div>
        <div className="mt-6 text-sm text-cyan-400 text-center font-medium">
          <span>Installable PWA • Offline & Online • Mobile-first</span>
        </div>
        <div className="mt-2 text-xs text-blue-400 text-center">
          <span>Made with Next.js, Tailwind CSS, Framer Motion</span>
        </div>
      </motion.div>
    </div>
  );
}
