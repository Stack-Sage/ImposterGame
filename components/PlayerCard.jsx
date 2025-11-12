"use client";
import React from "react";

export default function PlayerCard({ name, score, avatarUrl }) {
  return (
    <div className="glass flex flex-row items-center gap-6 p-5 rounded-2xl shadow-md hover:scale-105 transition-transform w-full bg-gradient-to-r from-sky-900/40 via-cyan-900/40 to-blue-900/40">
      <img
        src={avatarUrl || `https://api.dicebear.com/7.x/bottts/svg?seed=${name}`}
        alt={name}
        className="w-16 h-16 rounded-full border-4 border-cyan-400 shadow-lg"
      />
      <div className="flex flex-col flex-1 min-w-0">
        <span className="font-extrabold text-cyan-100 text-xl truncate">{name}</span>
        <span className="text-lg text-cyan-300 mt-1">Score: <span className="font-bold">{score ?? 0}</span></span>
      </div>
    </div>
  );
}
