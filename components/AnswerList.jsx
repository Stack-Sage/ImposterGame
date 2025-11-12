"use client";
import React from "react";

export default function AnswerList({ answers }) {
  return (
    <div className="flex flex-col gap-6 mt-8 w-full">
      {answers.map((ans, i) => (
        <div
          key={i}
          className="glass p-6 rounded-2xl flex flex-row items-center justify-between hover:shadow-lg transition-all text-2xl border-2 border-cyan-700/20 bg-gradient-to-r from-sky-900/40 via-cyan-900/40 to-blue-900/40"
        >
          <div className="flex flex-col flex-1 min-w-0">
            <span className="font-bold text-cyan-100 text-lg mb-1 truncate">Player</span>
            <span className="font-bold text-cyan-100 text-2xl truncate">{ans.player}</span>
          </div>
          <div className="w-px h-12 bg-cyan-700/30 mx-6 rounded"></div>
          <div className="flex flex-col flex-1 min-w-0 items-end">
            <span className="text-cyan-300 text-lg mb-1 truncate">Answer</span>
            <span className="text-cyan-300 text-2xl truncate">{ans.answer}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
