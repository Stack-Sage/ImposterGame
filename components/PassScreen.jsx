"use client";
import { motion } from "framer-motion";
import NeonButton from "./NeonButton";
import React, { useRef } from "react";

const clickSoundUrl = "/sounds/click.mp3";

export default function PassScreen({ player, onContinue }) {
  const audioRef = useRef();

  function handleContinue() {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
    onContinue();
  }

  return (
    <motion.div
      initial={{ opacity:0, scale:0.95 }}
      animate={{ opacity:1, scale:1 }}
      className="flex flex-col items-center gap-8 py-12"
    >
      <audio ref={audioRef} src={clickSoundUrl} preload="auto" />
      <div className="text-2xl text-cyan-200 font-bold">Pass the device to</div>
      <div className="text-4xl font-extrabold text-cyan-100 mb-2 animate-pulse">{player}</div>
      <div className="text-xl text-cyan-300 italic mb-4">Keep screen hidden from others</div>
      <NeonButton onClick={handleContinue}>I'm ready</NeonButton>
    </motion.div>
  );
}
