"use client";
import { FiX } from "react-icons/fi";
import React from "react";

export default function PlayerList({ players, onRemove }) {
  function handleRemove(i) {
    try {
      onRemove(i);
    } catch {}
  }

  if (!Array.isArray(players)) {
    return (
      <div className="text-red-400 text-xl text-center py-8 font-bold">
        Error loading players.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10 mt-6 mb-6 w-full">
      {players.length === 0 && (
        <div className="text-sky-400 text-xl text-center py-8 font-bold mb-4">
          No players yet
        </div>
      )}
      {players.map((p, i) => (
        <div
          key={i}
          className="glass px-10 py-8 rounded-2xl flex flex-row items-center justify-between bg-gradient-to-r from-sky-900/60 via-cyan-900/60 to-blue-900/60 hover:scale-105 hover:shadow-lg transition-all text-xl font-bold text-sky-100 mb-2"
        >
          <div className="flex-1 min-w-0 truncate">{p}</div>
          <button
            onClick={() => handleRemove(i)}
            className="p-4 rounded-md hover:bg-cyan-800/40 focus:outline-none focus:ring-2 focus:ring-sky-400 ml-6 text-gray-900 text-xl"
            aria-label={`Remove ${p}`}
            tabIndex={0}
          >
            <FiX size={32} className="text-gray-900" />
          </button>
        </div>
      ))}
    </div>
  );
}
