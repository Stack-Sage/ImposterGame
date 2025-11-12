"use client";
import React, { useRef } from "react";

const clickSoundUrl = "/sounds/click.mp3"; // Place a short click sound in public/sounds/click.mp3

export default function NeonButton({ children, onClick, disabled, type = "button" }) {
  const audioRef = useRef();

  function handleClick(e) {
    if (disabled) return;
    try {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    } catch (err) {
      // fail silently if sound can't play
    }
    if (onClick) onClick(e);
  }

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      aria-disabled={disabled}
      className={`bg-gradient-to-r from-sky-400 via-[#00BFFF] to-[#7B61FF] animate-gradient text-white font-semibold px-6 py-3 rounded-2xl shadow-[0_0_20px_#00bfff66] hover:shadow-[0_0_35px_#00bfff] hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-sky-400 text-lg tracking-wide ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      style={{ minWidth: 160, minHeight: 56, letterSpacing: "0.05em" }}
    >
      <audio ref={audioRef} src={clickSoundUrl} preload="auto" />
      {children}
    </button>
  );
}
