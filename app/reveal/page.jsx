"use client";
import { useEffect, useState } from "react";
import RevealConfetti from "../../components/RevealConfetti";
import NeonButton from "../../components/NeonButton";
import { motion } from "framer-motion";

export default function RevealPage() {
  const [imp, setImp] = useState(null);

  useEffect(() => {
    const r = typeof window !== "undefined" && localStorage.getItem("roundAssignment");
    if (!r) return;
    const players = JSON.parse(r);
    const p = players.find(x => x.role === "imposter");
    setImp(p || null);
  }, []);

  if (!imp) return <div className="glass p-8 text-center text-lg">No round data</div>;

  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-screen sm:max-w-md mx-1 sm:mx-auto p-4 sm:p-8 flex flex-col gap-4 sm:gap-8 items-center justify-center rounded-xl shadow bg-gradient-to-br from-sky-100/40 via-cyan-200/40 to-blue-200/40"
      >
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale:1, opacity:1 }} className="text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-1 sm:mb-2">Imposter Revealed</h2>
          <div className="mt-1 sm:mt-2 p-2 sm:p-4 rounded-xl bg-gradient-to-r from-sky-100/30 via-cyan-100/30 to-blue-100/30 border border-cyan-700/20 shadow">
            <div className="text-base sm:text-xl text-cyan-200 mb-0.5 sm:mb-1 font-bold">The imposter was</div>
            <div className="mt-0.5 sm:mt-1 text-xl sm:text-2xl font-bold text-cyan-100">{imp.name}</div>
            <div className="mt-1 sm:mt-2 text-base sm:text-xl text-cyan-300 font-bold">Prompt: <span className="font-semibold text-cyan-100">{imp.prompt}</span></div>
          </div>
        </motion.div>
        <RevealConfetti />
        <div className="flex gap-2 sm:gap-4 mt-2 sm:mt-4 justify-center">
          <NeonButton onClick={() => { window.location.href = "/setup"; }}>
            <span className="text-gray-900 text-base sm:text-xl">Play Again</span>
          </NeonButton>
        </div>
      </motion.div>
    </div>
  );
}
