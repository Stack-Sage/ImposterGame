"use client";
import { useEffect, useState } from "react";
import NeonButton from "../../components/NeonButton";
import PassScreen from "../../components/PassScreen";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { WORDS, IMPOSTER_WORDS, QUESTIONS, IMPOSTER_QUESTIONS } from "../../data/prompts";

export default function PlayPage() {
  const router = useRouter();
  const [list, setList] = useState([]);
  const [index, setIndex] = useState(0);
  const [showPass, setShowPass] = useState(true);
  const [revealed, setRevealed] = useState(false);
  const [mode, setMode] = useState("word");

  useEffect(() => {
    const g = typeof window !== "undefined" && localStorage.getItem("gameState");
    if (!g) { router.push("/setup"); return; }
    const state = JSON.parse(g);
    setMode(state.mode || "word");
    const players = state.players.map((n) => ({ name: n }));
    const imp = Math.floor(Math.random() * players.length);
    players.forEach((p, i) => {
      p.role = i === imp ? "imposter" : "player";
    });
    if (state.mode === "word") {
      const word = WORDS[Math.floor(Math.random() * WORDS.length)];
      const impostWord = IMPOSTER_WORDS[Math.floor(Math.random() * IMPOSTER_WORDS.length)];
      players.forEach(p => {
        p.prompt = p.role === "imposter" ? impostWord : word;
      });
    } else {
      const q = QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];
      const impQ = IMPOSTER_QUESTIONS[Math.floor(Math.random() * IMPOSTER_QUESTIONS.length)];
      players.forEach(p => p.prompt = p.role === "imposter" ? impQ : q);
    }
    setList(players);
    localStorage.setItem("roundAssignment", JSON.stringify(players));
  }, [router]);

  if (list.length === 0) return null;

  function next() {
    setRevealed(false);
    setShowPass(true);
    setIndex((i) => {
      const nextIdx = i + 1;
      if (nextIdx >= list.length) {
        router.push("/discuss");
        return i;
      }
      return nextIdx;
    });
  }

  const player = list[index];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass p-16 flex flex-col gap-16 space-y-10 items-center w-full max-w-xl mx-auto mt-16 mb-12"
      style={{ minHeight: "80vh" }}
    >
      <h2 className="h2 neon-text font-bold mb-4">Pass & Play</h2>
      <div className="text-cyan-300 text-center mb-6 font-semibold text-3xl">
        {mode === "word"
          ? "Guess the common word. Imposter has a different or odd word!"
          : "Answer the question. Imposter has a secret or odd question!"}
      </div>
      <div className="w-full max-w-md mb-12">
        <div className="glass p-12 rounded-lg flex flex-col gap-12 space-y-8">
          <div className="text-sm text-sky-200/60 mb-2">Turn {index + 1} of {list.length}</div>
          {showPass ? (
            <PassScreen player={player.name} onContinue={() => setShowPass(false)} />
          ) : (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-5">
              <div className="text-xs text-sky-300/70 mb-2">Secret for <span className="font-bold neon-text">{player.name}</span></div>
              <div className="h-24 w-full flex items-center justify-center rounded-xl bg-black/60 border-2 border-sky-500/20 shadow-lg">
                <div className="text-center w-full">
                  <div className="mt-2 text-3xl md:text-4xl font-bold neon-text">{revealed ? player.prompt : "Tap reveal"}</div>
                </div>
              </div>
              {!revealed ? (
                <NeonButton
                  onClick={() => setRevealed(true)}
                  className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-md text-3xl font-bold px-6 py-3 shadow-lg hover:scale-105 active:scale-95 transition-all"
                >
                  <span className="text-black text-3xl" style={{ color: "#111" }}>Reveal</span>
                </NeonButton>
              ) : (
                <NeonButton
                  onClick={next}
                  className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-md text-3xl font-bold px-6 py-3 shadow-lg hover:scale-105 active:scale-95 transition-all"
                >
                  <span className="text-black text-3xl" style={{ color: "#111" }}>Done</span>
                </NeonButton>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
