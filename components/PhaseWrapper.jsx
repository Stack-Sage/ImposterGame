"use client";
import { motion } from "framer-motion";
import React from "react";

export default function PhaseWrapper({ children }) {
  return <div style={{ minHeight: "80vh" }}>{children}</div>;
}
