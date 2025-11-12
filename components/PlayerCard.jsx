"use client";
import React from "react";

export default function PlayerCard({ name, score }) {
  const displayName = name || "Unknown";
  return (
    <div
      className="glass flex flex-row items-center gap-10 p-10 rounded-2xl shadow-md hover:scale-105 transition-transform w-full bg-gradient-to-r from-sky-900/40 via-cyan-900/40 to-blue-900/40 mb-4"
      style={{ minHeight: "80vh" }}
    >
      <img
        src={avatarUrl || `https://api.dicebear.com/7.x/bottts/svg?seed=${displayName}`}
        alt={displayName}
        className="w-20 h-20 rounded-full border-4 border-cyan-400 shadow-lg"
      />
      <div className="flex flex-col flex-1 min-w-0 gap-2">
        <span className="font-extrabold text-cyan-100 text-2xl truncate">{displayName}</span>
        <span className="text-xl text-gray-900 mt-1">Score: <span className="font-bold">{score ?? 0}</span></span>
      </div>
    </div>
  );
}
