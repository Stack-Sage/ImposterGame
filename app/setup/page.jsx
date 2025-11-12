"use client";
import { useState, useEffect } from "react";
import NeonButton from "../../components/NeonButton";
import PlayerList from "../../components/PlayerList";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function SetupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const saved = typeof window !== "undefined" && localStorage.getItem("players");
      if (saved) setPlayers(JSON.parse(saved));
    } catch {
      setPlayers([]);
    }
  }, []);

  useEffect(() => {
    try {
      if (typeof window !== "undefined") localStorage.setItem("players", JSON.stringify(players));
    } catch {}
  }, [players]);

  function add() {
    const trimmed = name.trim();
    if (!trimmed) {
      setError("Player name cannot be empty.");
      return;
    }
    if (players.includes(trimmed)) {
      setError("Player name already exists.");
      return;
    }
    if (trimmed.length > 20) {
      setError("Player name too long.");
      return;
    }
    setPlayers((p) => [...p, trimmed]);
    setName("");
    setError("");
  }
  function remove(idx) {
    setPlayers((p) => p.filter((_, i) => i !== idx));
  }

  function startRound() {
    if (players.length < 3) {
      setError("Add at least 3 players.");
      return;
    }
    setError("");
    try {
      const mode = localStorage.getItem("mode") || "word";
      localStorage.setItem("gameState", JSON.stringify({
        players,
        mode,
        round: 1,
        scores: players.map(() => 0)
      }));
      router.push("/play");
    } catch {
      setError("Failed to start round. Try again.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-screen sm:max-w-md mx-1 sm:mx-auto p-4 sm:p-8 flex flex-col gap-4 sm:gap-8 items-center justify-center rounded-xl shadow"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-2 sm:mb-4 text-cyan-400">Add Players</h2>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full justify-center mb-2 sm:mb-4">
          <input
            value={name}
            onChange={(e) => { setName(e.target.value); setError(""); }}
            className="flex-1 p-2 sm:p-4 rounded-xl bg-[#12161C] border border-sky-400/30 text-base sm:text-xl focus:outline-none focus:ring-2 focus:ring-sky-400"
            placeholder="Player name"
            maxLength={20}
            aria-label="Player name"
            autoComplete="off"
          />
          <NeonButton onClick={add}>
            <span className="text-gray-900 text-base sm:text-xl">Add</span>
          </NeonButton>
        </div>
        {error && (
          <div className="text-base sm:text-xl text-red-400 font-bold text-center mt-1 sm:mt-2 mb-1 sm:mb-2">{error}</div>
        )}
        <div className="w-full mt-2 sm:mt-4 mb-2 sm:mb-4">
          <PlayerList players={players} onRemove={remove} />
        </div>
        <div className="mt-2 sm:mt-4 flex justify-center w-full">
          <NeonButton onClick={startRound}>
            <span className="text-gray-900 text-base sm:text-xl">Start Round</span>
          </NeonButton>
        </div>
      </motion.div>
    </div>
  );
}
