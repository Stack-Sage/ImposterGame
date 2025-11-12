"use client";
import React from "react";

export default function AnswerList({ answers }) {
  return (
    <div className="flex flex-col gap-12 mt-12 mb-12 w-full">
      {answers.map((ans, i) => (
        <div
          key={i}
          className="p-8 rounded-xl flex flex-row items-center justify-between hover:shadow transition-all text-xl border border-cyan-700/20 bg-gradient-to-r from-sky-900/40 via-cyan-900/40 to-blue-900/40 mb-4"
        >
          <div className="flex flex-col flex-1 min-w-0 gap-2">
            <span className="font-bold text-cyan-100 text-lg mb-1 truncate">Player</span>
            <span className="font-bold text-cyan-100 text-xl truncate">{ans.player}</span>
          </div>
          <div className="w-px h-16 bg-cyan-700/30 mx-8 rounded"></div>
          <div className="flex flex-col flex-1 min-w-0 items-end gap-2">
            <span className="text-cyan-300 text-lg mb-1 truncate">Answer</span>
            <span className="text-gray-900 text-xl truncate">{ans.answer}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
