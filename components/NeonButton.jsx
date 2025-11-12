"use client";
import React from "react";

export default function NeonButton({ children, ...props }) {
  function handleClick(e) {
    if (props.disabled) return;
    if (props.onClick) props.onClick(e);
  }

  return (
    <button
      {...props}
      aria-disabled={props.disabled}
      className={`bg-gradient-to-r from-sky-400 via-[#00BFFF] to-[#7B61FF] animate-gradient font-semibold px-6 py-3 rounded-md shadow-[0_0_20px_#00bfff66] hover:shadow-[0_0_35px_#00bfff] hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-sky-400 tracking-wide ${props.disabled ? "opacity-50 cursor-not-allowed" : ""} text-gray-900 text-xl`}
      style={{ minWidth: 160, minHeight: 56, letterSpacing: "0.05em" }}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
