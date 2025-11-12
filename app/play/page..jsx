"use client";
import { useEffect, useState } from "react";
import NeonButton from "../../components/NeonButton";
import PassScreen from "../../components/PassScreen";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const WORDS = [
  "Pizza", "Rocket", "Bank", "Piano", "Dragon", "Coffee", "Castle", "Robot", "Galaxy",
  "Forest", "Diamond", "Submarine", "Mountain", "Cactus", "Rainbow", "Library", "Tiger", "Chocolate", "Volcano", "Spaceship"
];
const IMPOSTER_WORDS = [
  "You are the imposter", "Alien", "Spy", "Blank", "Saboteur", "Detective", "Ghost", "Pirate", "Ninja", "Secret"
];
const QUESTIONS = [
  "What's your favorite movie?",
  "What's your dream job?",
  "What's your favorite food?",
  "Where would you travel next?",
  "What's your favorite animal?",
  "What's your favorite color?",
  "What's your favorite sport?",
  "What's your favorite hobby?",
  "What's your favorite book?",
  "What's your favorite game?"
];
const IMPOSTER_QUESTIONS = [
  "What's your secret identity?",
  "What's a lie you've told?",
  "What's something nobody knows?",
  "What's your code name?",
  "What's your favorite villain?",
  "What's your secret talent?",
  "What's your least favorite food?",
  "What's your least favorite color?",
  "What's your least favorite animal?",
  "What's your least favorite sport?"
];

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
      className="glass p-10 flex flex-col gap-10 items-center justify-center max-w-2xl mx-auto"
    >
      <h2 className="h2 neon-text font-bold text-center mb-2">Pass & Play</h2>
      <div className="w-full max-w-xl flex flex-col items-center">
        <div className="glass p-10 rounded-3xl flex flex-col gap-8 w-full items-center">
          <div className="text-2xl text-sky-200/80 text-center">Turn <span className="font-bold">{index + 1}</span> of <span className="font-bold">{list.length}</span></div>
          {showPass ? (
            <PassScreen player={player.name} onContinue={() => setShowPass(false)} />
          ) : (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-8 w-full">
              <div className="text-2xl text-sky-300/80 mb-2">Secret for <span className="font-bold neon-text">{player.name}</span></div>
              <div className="h-32 w-full flex items-center justify-center rounded-3xl bg-black/70 border-4 border-sky-500/20 shadow-neon">
                <div className="text-center w-full">
                  <div className="mt-2 text-3xl font-bold neon-text">{revealed ? player.prompt : "Tap reveal"}</div>
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
