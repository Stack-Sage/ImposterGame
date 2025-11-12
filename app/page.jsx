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
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass p-6 flex flex-col gap-6"
    >
      <div>
        <h2 className="h2 font-bold neon-text">Choose a mode</h2>
        <p className="text-sky-200/60 text-sm">Word Imposter or Question Imposter</p>
      </div>
      <ModeToggle mode={mode} setMode={setMode} />
      <div className="flex gap-3">
        <NeonButton onClick={start}>Start Game</NeonButton>
        <Link href="/setup" className="ml-2 self-center text-sm text-sky-300/70 underline">or setup players</Link>
      </div>
      <div className="mt-6 text-xs text-sky-400/40 text-center">
        <span className="neon-text">Installable PWA • Offline & Online</span>
      </div>
    </motion.div>
  );
}
