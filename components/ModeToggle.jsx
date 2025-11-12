"use client";
import React from "react";

export default function ModeToggle({ mode, setMode }) {
  return (
    <div className="flex gap-8">
      <button
        onClick={() => { setMode("word"); localStorage.setItem("mode","word"); }}
        className={`px-8 py-4 rounded-xl text-cyan-100 text-2xl font-semibold transition
          ${mode==="word" ? "border-2 border-sky-400/40 bg-sky-900" : "border border-sky-300/10 bg-gray-900"}
          hover:bg-sky-800 hover:text-white active:scale-95`}
      >
        Word Mode
      </button>
      <button
        onClick={() => { setMode("question"); localStorage.setItem("mode","question"); }}
        className={`px-8 py-4 rounded-xl text-cyan-100 text-2xl font-semibold transition
          ${mode==="question" ? "border-2 border-sky-400/40 bg-sky-900" : "border border-sky-300/10 bg-gray-900"}
          hover:bg-sky-800 hover:text-white active:scale-95`}
      >
        Question Mode
      </button>
    </div>
  );
}
