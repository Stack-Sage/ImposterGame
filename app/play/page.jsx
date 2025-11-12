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
  const [showAll, setShowAll] = useState(false);
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
      className="glass p-8 flex flex-col gap-8 items-center w-full max-w-xl mx-auto mt-8"
    >
      <h2 className="h2 neon-text font-bold mb-2">Pass & Play</h2>
      <div className="text-cyan-300 text-center mb-2 font-semibold">
        {mode === "word"
          ? "Guess the common word. Imposter has a different or odd word!"
          : "Answer the question. Imposter has a secret or odd question!"}
      </div>
      <div className="w-full max-w-md">
        <div className="glass p-6 rounded-lg flex flex-col gap-6">
          <div className="text-sm text-sky-200/60">Turn {index + 1} of {list.length}</div>
          {showPass ? (
            <PassScreen player={player.name} onContinue={() => setShowPass(false)} />
          ) : (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-5">
              <div className="text-xs text-sky-300/70 mb-2">Secret for <span className="font-bold neon-text">{player.name}</span></div>
              <div className="h-24 w-full flex items-center justify-center rounded-xl bg-black/60 border-2 border-sky-500/20 shadow-lg">
                <div className="text-center w-full">
                  <div className="mt-2 text-2xl font-bold neon-text">{revealed ? player.prompt : "Tap reveal"}</div>
                </div>
              </div>
              {!revealed ? (
                <NeonButton onClick={() => setRevealed(true)}>Reveal</NeonButton>
              ) : (
                <NeonButton onClick={next}>Done</NeonButton>
              )}
            </motion.div>
          )}
        </div>
      </div>
      <div className="w-full flex justify-end">
        <NeonButton onClick={() => setShowAll((v) => !v)} type="button">
          {showAll ? "Hide All Prompts" : "Show All Prompts"}
        </NeonButton>
      </div>
      {showAll && (
        <div className="mt-4 w-full max-h-96 overflow-y-auto text-xs bg-black/40 rounded-xl p-4 border border-cyan-700/20">
          <div>
            <span className="font-bold text-cyan-400">Sample Words:</span>
            <span className="ml-2">{WORDS.slice(0, 50).join(", ")}...</span>
          </div>
          <div className="mt-2">
            <span className="font-bold text-cyan-400">Sample Imposter Words:</span>
            <span className="ml-2">{IMPOSTER_WORDS.slice(0, 30).join(", ")}...</span>
          </div>
          <div className="mt-2">
            <span className="font-bold text-cyan-400">Sample Questions:</span>
            <span className="ml-2">{QUESTIONS.slice(0, 30).join(", ")}...</span>
          </div>
          <div className="mt-2">
            <span className="font-bold text-cyan-400">Sample Imposter Questions:</span>
            <span className="ml-2">{IMPOSTER_QUESTIONS.slice(0, 30).join(", ")}...</span>
          </div>
        </div>
      )}
    </motion.div>
  );
}
