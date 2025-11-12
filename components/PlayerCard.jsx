"use client";
import React from "react";

export default function PlayerCard({ name, score }) {
  const displayName = name || "Unknown";
  const avatarUrl = `https://api.dicebear.com/7.x/bottts/svg?seed=${displayName}`;
  return (
    <div
      className="flex flex-row items-center gap-4 sm:gap-8 p-4 sm:p-8 rounded-xl shadow-md hover:scale-105 transition-transform w-full bg-gradient-to-r from-sky-900/40 via-cyan-900/40 to-blue-900/40 mb-4 text-cyan-100"
    >
      <img
        src={avatarUrl}
        alt={displayName}
        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-cyan-400 shadow"
      />
      <div className="flex flex-col flex-1 min-w-0 gap-1 sm:gap-2">
        <span className="font-bold text-cyan-100 text-xl sm:text-2xl truncate">{displayName}</span>
        <span className="text-base sm:text-xl text-cyan-200 mt-1">{`Score: `}<span className="font-bold">{score ?? 0}</span></span>
      </div>
    </div>
  );
}
