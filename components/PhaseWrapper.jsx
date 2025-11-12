"use client";
import { motion } from "framer-motion";
import React from "react";

export default function PhaseWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.4 }}
      className="w-full flex flex-col items-center justify-center p-12 bg-gradient-to-br from-sky-950/60 via-cyan-950/60 to-blue-950/60"
    >
      {children}
    </motion.div>
  );
}
