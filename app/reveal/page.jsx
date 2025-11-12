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
    <div className="flex justify-center w-full min-h-screen items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass p-10 flex flex-col gap-10 items-center justify-center w-full max-w-xl mx-auto bg-gradient-to-br from-sky-950/60 via-cyan-950/60 to-blue-950/60"
      >
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale:1, opacity:1 }} className="text-center">
          <h2 className="h2 font-extrabold text-cyan-100 mb-6">Imposter Revealed</h2>
          <div className="mt-4 p-8 rounded-3xl bg-gradient-to-r from-sky-900/40 via-cyan-900/40 to-blue-900/40 border-4 border-cyan-700/20 shadow-lg">
            <div className="text-2xl text-cyan-200 mb-2 font-bold">The imposter was</div>
            <div className="mt-2 text-4xl font-bold text-cyan-100">{imp.name}</div>
            <div className="mt-4 text-2xl text-cyan-300 font-bold">Prompt: <span className="font-semibold text-cyan-100">{imp.prompt}</span></div>
          </div>
        </motion.div>
        <RevealConfetti />
        <div className="flex gap-6 mt-8 justify-center">
          <NeonButton onClick={() => { window.location.href = "/setup"; }}>Play Again</NeonButton>
        </div>
      </motion.div>
    </div>
  );
}
