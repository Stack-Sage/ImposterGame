"use client";
import React, { useState } from "react";
import { FiCopy } from "react-icons/fi";

export default function RoomCodeBox({ code }) {
  const [copied, setCopied] = useState(false);
  function copy() {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }
  return (
    <div className="relative glass p-6 rounded-2xl flex items-center gap-4 justify-center text-cyan-100 text-3xl mb-4 border-2 border-cyan-400/30 bg-gradient-to-r from-sky-900/40 via-cyan-900/40 to-blue-900/40">
      <span className="font-mono tracking-widest text-4xl">{code}</span>
      <button onClick={copy} className="ml-2 p-3 rounded-full hover:bg-cyan-800/30 transition focus:outline-none focus:ring-2 focus:ring-cyan-400">
        <FiCopy size={32} />
      </button>
      {copied && <span className="text-cyan-400 text-lg ml-2">Copied!</span>}
      <span className="absolute inset-0 rounded-2xl pointer-events-none animate-pulse bg-gradient-to-r from-sky-400/10 via-blue-600/10 to-sky-400/10 opacity-30"></span>
    </div>
  );
}
