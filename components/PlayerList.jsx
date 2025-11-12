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
      <div className="text-red-400 text-base text-center py-4 font-bold">
        Error loading players.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 sm:gap-8 mt-4 sm:mt-6 mb-4 sm:mb-6 w-full text-cyan-100">
      {players.length === 0 && (
        <div className="text-sky-300 text-lg sm:text-xl text-center py-4 sm:py-6 font-bold mb-2">
          No players yet
        </div>
      )}
      {players.map((p, i) => (
        <div
          key={i}
          className="px-4 sm:px-8 py-4 sm:py-6 rounded-xl flex flex-row items-center justify-between bg-gradient-to-r from-sky-900/60 via-cyan-900/60 to-blue-900/60 hover:scale-105 hover:shadow transition-all text-lg sm:text-xl font-bold mb-2"
        >
          <div className="flex-1 min-w-0 truncate">{p}</div>
          <button
            onClick={() => handleRemove(i)}
            className="p-2 sm:p-4 rounded hover:bg-pink-700/40 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400 ml-2 sm:ml-4 text-cyan-100 text-lg sm:text-xl active:scale-95 transition"
            aria-label={`Remove ${p}`}
            tabIndex={0}
          >
            <FiX size={20} className="sm:hidden text-cyan-100" />
            <FiX size={28} className="hidden sm:inline text-cyan-100" />
          </button>
        </div>
      ))}
    </div>
  );
}
