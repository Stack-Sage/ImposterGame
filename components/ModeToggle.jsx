"use client";
import React from "react";

export default function ModeToggle({ mode, setMode }) {
  return (
    <div className="flex gap-12 space-x-10">
      <button
        onClick={() => { setMode("word"); localStorage.setItem("mode","word"); }}
        className={`px-10 py-6 rounded-md glass text-gray-900 text-3xl md:text-4xl ${mode==="word" ? "shadow-neon border border-sky-400/40 neon-text" : "border border-sky-300/10"}`}
      >
        Word Mode
      </button>
      <button
        onClick={() => { setMode("question"); localStorage.setItem("mode","question"); }}
        className={`px-10 py-6 rounded-md glass text-gray-900 text-3xl md:text-4xl ${mode==="question" ? "shadow-neon border border-sky-400/40 neon-text" : "border border-sky-300/10"}`}
      >
        Question Mode
      </button>
    </div>
  );
}
