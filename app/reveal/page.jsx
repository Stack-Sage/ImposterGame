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
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass p-10 flex flex-col gap-10 items-center justify-center max-w-2xl mx-auto"
    >
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale:1, opacity:1 }} className="text-center">
        <h2 className="h2 neon-text font-extrabold mb-6">Imposter Revealed</h2>
        <div className="mt-4 p-8 rounded-3xl bg-black/70 border-4 border-sky-500/20 shadow-neon">
          <div className="text-2xl text-sky-200/80 mb-2">The imposter was</div>
          <div className="mt-2 text-4xl font-bold neon-text">{imp.name}</div>
          <div className="mt-4 text-2xl text-sky-100/80">Prompt: <span className="font-semibold neon-text">{imp.prompt}</span></div>
        </div>
      </motion.div>
      <RevealConfetti />
      <div className="flex gap-6 mt-8 justify-center">
        <NeonButton onClick={() => { window.location.href = "/setup"; }}>Play Again</NeonButton>
      </div>
    </motion.div>
  );
}
