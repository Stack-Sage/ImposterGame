"use client";
import React from "react";

export default function ModeToggle({ mode, setMode }) {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => { setMode("word"); localStorage.setItem("mode","word"); }}
        className={`px-4 py-2 rounded glass ${mode==="word" ? "shadow-neon border border-sky-400/40 neon-text" : "border border-sky-300/10"}`}
      >
        Word Mode
      </button>
      <button
        onClick={() => { setMode("question"); localStorage.setItem("mode","question"); }}
        className={`px-4 py-2 rounded glass ${mode==="question" ? "shadow-neon border border-sky-400/40 neon-text" : "border border-sky-300/10"}`}
      >
        Question Mode
      </button>
    </div>
  );
}
