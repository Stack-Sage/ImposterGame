"use client";
import { useEffect, useState } from "react";
import NeonButton from "../../components/NeonButton";
import PassScreen from "../../components/PassScreen";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const WORDS = ["Pizza", "Rocket", "Bank", "Piano", "Dragon", "Coffee", "Castle", "Robot", "Galaxy"];
const IMPOSTER_WORDS = ["You are the imposter", "Alien", "Spy", "Blank", "Saboteur"];

export default function PlayPage() {
  const router = useRouter();
  const [list, setList] = useState([]);
  const [index, setIndex] = useState(0);
  const [showPass, setShowPass] = useState(true);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const g = typeof window !== "undefined" && localStorage.getItem("gameState");
    if (!g) { router.push("/setup"); return; }
    const state = JSON.parse(g);
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
      const q = "What's your favorite movie?";
      const impQ = "What's your secret identity?";
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
      className="glass p-6 flex flex-col gap-6 items-center"
    >
      <h2 className="h2 neon-text font-bold">Pass & Play</h2>
      <div className="w-full max-w-md">
        <div className="glass p-6 rounded-lg flex flex-col gap-4">
          <div className="text-sm text-sky-200/60">Turn {index + 1} of {list.length}</div>
          {showPass ? (
            <PassScreen player={player.name} onContinue={() => setShowPass(false)} />
          ) : (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-3">
              <div className="text-xs text-sky-300/70">Secret for</div>
              <div className="h-20 w-full flex items-center justify-center rounded-md bg-black/60 border border-sky-500/10">
                <div className="text-center">
                  <div className="font-semibold neon-text">{player.name}</div>
                  <div className="mt-2 text-lg font-bold neon-text">{revealed ? player.prompt : "Tap reveal"}</div>
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
    </motion.div>
  );
}
