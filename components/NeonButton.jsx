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
      className={`bg-gradient-to-r from-gray-900 via-blue-900 to-sky-900
        font-bold text-white text-3xl px-12 py-6 rounded-full border-2 border-sky-400
        shadow-[0_0_24px_#38bdf8] hover:shadow-[0_0_48px_#38bdf8]
        hover:from-pink-900 hover:to-sky-900
        active:scale-95 transition-all duration-200
        focus:outline-none focus:ring-4 focus:ring-sky-400
        tracking-wide my-8
        ${props.disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
