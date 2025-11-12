"use client";
import React, { useState } from "react";
import NeonButton from "./NeonButton";

export default function VotePanel({ players, onVote }) {
  const [selected, setSelected] = useState(null);

  function handleVote() {
    if (selected) onVote(selected);
  }

  return (
    <div className="flex flex-col gap-14 mt-14 mb-8 items-center w-full">
      <div className="text-2xl text-cyan-300 mb-6 text-center font-bold">Who is the imposter?</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 w-full mb-8">
        {players.map((p, i) => (
          <button
            key={i}
            onClick={() => setSelected(p)}
            className={`glass p-10 rounded-2xl font-bold text-2xl transition-all w-full flex flex-col items-center justify-center mb-2
              ${selected === p ? "border-4 border-cyan-400 bg-cyan-900/30 scale-105 animate-pulse text-cyan-100" : "border border-cyan-700/20 text-cyan-300"}
              bg-gradient-to-r from-sky-900/40 via-cyan-900/40 to-blue-900/40`}
          >
            <span className="truncate">{p}</span>
            {selected === p && <span className="mt-4 text-cyan-400 text-base font-bold">Selected</span>}
          </button>
        ))}
      </div>
      <NeonButton onClick={handleVote} disabled={!selected}>
        <span className="text-gray-900 text-xl">Vote</span>
      </NeonButton>
    </div>
  );
}
