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
      <div className="glass p-6 rounded-2xl text-center text-xl text-red-400 font-bold">
        No room code provided.
      </div>
    );
  }
  return (
    <div className="relative glass p-10 rounded-2xl flex items-center gap-12 justify-center text-cyan-100 text-4xl mb-12 border-2 border-cyan-400/30 bg-gradient-to-r from-sky-900/40 via-cyan-900/40 to-blue-900/40">
      <span className="font-mono tracking-widest text-4xl">{code}</span>
      <button onClick={copy} className="ml-4 p-4 rounded-full hover:bg-cyan-800/30 transition focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-900">
        <FiCopy size={32} />
      </button>
      {copied && <span className="text-cyan-400 text-lg ml-4">Copied!</span>}
      <span className="absolute inset-0 rounded-2xl pointer-events-none animate-pulse bg-gradient-to-r from-sky-400/10 via-blue-600/10 to-sky-400/10 opacity-30"></span>
    </div>
  );
}
