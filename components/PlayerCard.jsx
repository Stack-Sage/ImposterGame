"use client";
import React from "react";

export default function PlayerCard({ name, score, avatarUrl }) {
  return (
    <div className="glass flex items-center gap-5 p-5 rounded-2xl shadow-md hover:scale-105 transition-transform w-full bg-gradient-to-r from-sky-900/40 via-cyan-900/40 to-blue-900/40">
      <img
        src={avatarUrl || `https://api.dicebear.com/7.x/bottts/svg?seed=${name}`}
        alt={name}
        className="w-14 h-14 rounded-full border-4 border-cyan-400 shadow-lg"
      />
      <div>
        <div className="font-extrabold text-cyan-100 text-xl">{name}</div>
        <div className="text-lg text-cyan-300">Score: {score ?? 0}</div>
      </div>
    </div>
  );
}
