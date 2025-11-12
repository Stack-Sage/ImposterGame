"use client";
import React from "react";

export default function AnswerList({ answers }) {
  return (
    <div className="flex flex-col gap-6 mt-8 w-full">
      {answers.map((ans, i) => (
        <div key={i} className="relative glass p-6 rounded-2xl flex items-center gap-6 hover:shadow-lg transition-all text-2xl border-2 border-cyan-700/20 bg-gradient-to-r from-sky-900/40 via-cyan-900/40 to-blue-900/40">
          <span className="font-bold text-cyan-100">{ans.player}</span>
          <span className="text-cyan-300">{ans.answer}</span>
        </div>
      ))}
    </div>
  );
}
