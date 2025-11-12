"use client";
import { motion } from "framer-motion";
import NeonButton from "./NeonButton";
import React from "react";

export default function PassScreen({ player, onContinue }) {
  function handleContinue() {
    onContinue();
  }

  return (
    <motion.div
      initial={{ opacity:0, scale:0.95 }}
      animate={{ opacity:1, scale:1 }}
      className="flex flex-col items-center gap-14 space-y-8 py-20 mb-8"
    >
      <div className="text-2xl text-cyan-200 font-bold">Pass the device to</div>
      <div className="text-4xl font-extrabold text-cyan-100 mb-2 animate-pulse">{player}</div>
      <div className="text-xl text-cyan-300 italic mb-4">Keep screen hidden from others</div>
      <NeonButton onClick={handleContinue}>
        <span className="text-gray-900 text-xl">I'm ready</span>
      </NeonButton>
    </motion.div>
  );
}
