"use client";
import { FiX } from "react-icons/fi";
import React, { useRef } from "react";

const clickSoundUrl = "/sounds/click.mp3";

export default function PlayerList({ players, onRemove }) {
  const audioRef = useRef();

  function handleRemove(i) {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
    onRemove(i);
  }

  return (
    <div className="flex flex-col gap-6 mt-4 w-full">
      <audio ref={audioRef} src={clickSoundUrl} preload="auto" />
      {players.length === 0 && (
        <div className="text-cyan-300 text-xl text-center py-6 font-bold">
          No players yet
        </div>
      )}
      {players.map((p, i) => (
        <div
          key={i}
          className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-sky-900/60 via-cyan-900/60 to-blue-900/60 rounded-2xl glass hover:scale-105 hover:shadow-lg transition-all text-xl font-bold text-cyan-100"
        >
          <div>{p}</div>
          <button
            onClick={() => handleRemove(i)}
            className="p-3 rounded-full hover:bg-cyan-800/40 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label={`Remove ${p}`}
          >
            <FiX size={28} />
          </button>
        </div>
      ))}
    </div>
  );
}
