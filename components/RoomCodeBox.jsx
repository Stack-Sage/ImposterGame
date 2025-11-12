"use client";
import React, { useState } from "react";
import { FiCopy } from "react-icons/fi";

export default function RoomCodeBox({ code }) {
  const [copied, setCopied] = useState(false);
  function copy() {
    if (!code) return;
    try {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  }
  if (!code) {
    return (
      <div className="p-4 rounded-lg text-center text-base text-red-400 font-bold">
        No room code provided.
      </div>
    );
  }
  return (
    <div className="relative p-4 sm:p-8 rounded-xl flex items-center gap-4 sm:gap-8 justify-center text-cyan-100 text-2xl sm:text-3xl mb-4 sm:mb-8 border border-cyan-400/30 bg-gradient-to-r from-sky-900/40 via-cyan-900/40 to-blue-900/40">
      <span className="font-mono tracking-widest text-xl sm:text-2xl">{code}</span>
      <button onClick={copy} className="ml-2 sm:ml-4 p-2 sm:p-4 rounded-full hover:bg-sky-700/40 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-cyan-400 text-cyan-100 active:scale-95">
        <FiCopy size={20} className="sm:hidden" />
        <FiCopy size={28} className="hidden sm:inline" />
      </button>
      {copied && <span className="text-cyan-300 text-base sm:text-lg ml-2 sm:ml-4">Copied!</span>}
      <span className="absolute inset-0 rounded-xl pointer-events-none animate-pulse bg-gradient-to-r from-sky-400/10 via-blue-600/10 to-sky-400/10 opacity-30"></span>
    </div>
  );
}
