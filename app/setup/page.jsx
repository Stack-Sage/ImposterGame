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

  useEffect(() => {
    const saved = typeof window !== "undefined" && localStorage.getItem("players");
    if (saved) setPlayers(JSON.parse(saved));
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("players", JSON.stringify(players));
  }, [players]);

  function add() {
    if (!name.trim()) return;
    setPlayers((p) => [...p, name.trim()]);
    setName("");
  }
  function remove(idx) {
    setPlayers((p) => p.filter((_, i) => i !== idx));
  }

  function startRound() {
    if (players.length < 3) {
      alert("Add at least 3 players");
      return;
    }
    const mode = localStorage.getItem("mode") || "word";
    localStorage.setItem("gameState", JSON.stringify({
      players,
      mode,
      round: 1,
      scores: players.map(() => 0)
    }));
    router.push("/play");
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass p-8 flex flex-col gap-8 items-center justify-center max-w-xl mx-auto"
    >
      <h2 className="h2 font-bold neon-text text-center mb-2">Add Players</h2>
      <div className="flex gap-6 w-full justify-center">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 p-5 rounded-3xl bg-black/40 border border-sky-400/20 neon-text text-xl focus:outline-none focus:ring-4 focus:ring-sky-400"
          placeholder="Player name"
          maxLength={20}
        />
        <NeonButton onClick={add}>Add</NeonButton>
      </div>
      <PlayerList players={players} onRemove={remove} />
      <div className="mt-8 flex justify-center w-full">
        <NeonButton onClick={startRound}>Start Round</NeonButton>
      </div>
    </motion.div>
  );
}
