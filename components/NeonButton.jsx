"use client";
import React, { useRef } from "react";

const clickSoundUrl = "/sounds/click.mp3"; // Place a short click sound in public/sounds/click.mp3

export default function NeonButton({ children, onClick, disabled }) {
  const audioRef = useRef();

  function handleClick(e) {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
    if (onClick) onClick(e);
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-700 text-white font-bold px-10 py-5 rounded-2xl shadow-md hover:shadow-lg transition-all active:scale-98 text-xl tracking-wide focus:outline-none focus:ring-2 focus:ring-cyan-400 ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      style={{ minWidth: 180, minHeight: 56, letterSpacing: "0.05em" }}
    >
      <audio ref={audioRef} src={clickSoundUrl} preload="auto" />
      {children}
    </button>
  );
}
