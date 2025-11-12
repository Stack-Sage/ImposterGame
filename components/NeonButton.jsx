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
      onClick={handleClick}
      className={`bg-gradient-to-r from-sky-900 via-cyan-900 to-blue-900
        text-cyan-100 text-base font-semibold px-6 py-3 rounded-lg border border-sky-400
        shadow hover:shadow-xl hover:bg-sky-800 hover:text-white
        active:scale-95 transition-all duration-150
        focus:outline-none focus:ring-2 focus:ring-sky-400 my-2
        ${props.disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      {children}
    </button>
  );
}
