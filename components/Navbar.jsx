import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="glass w-full max-w-3xl mx-auto flex items-center justify-between px-8 py-5 rounded-3xl mt-8 mb-8 shadow-2xl bg-gradient-to-r from-sky-900/60 via-cyan-900/60 to-blue-900/60 border border-sky-400/30 backdrop-blur-xl">
      <div className="flex items-center gap-4">
        <div>
          <span className="h1 font-extrabold neon-text text-cyan-300 drop-shadow block">Imposter Game</span>
          <span className="text-xs text-cyan-200 font-semibold tracking-wide block mt-1">Find the imposter among your friends</span>
        </div>
      </div>
      <div className="flex gap-6">
        <Link
          href="/"
          className="px-6 py-3 rounded-2xl font-bold text-gray-900 border-2 border-sky-400 bg-gradient-to-r from-sky-700/60 to-blue-800/60 hover:from-sky-400 hover:to-pink-300 hover:shadow-[0_0_24px_#38bdf8] active:scale-95 transition duration-150 focus:outline-none focus:ring-2 focus:ring-sky-400 shadow-lg text-lg tracking-wide"
        >
          Home
        </Link>
        <Link
          href="/setup"
          className="px-6 py-3 rounded-2xl font-bold text-gray-900 border-2 border-cyan-400 bg-gradient-to-r from-cyan-700/60 to-blue-800/60 hover:from-cyan-400 hover:to-pink-300 hover:shadow-[0_0_24px_#38bdf8] active:scale-95 transition duration-150 focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-lg text-lg tracking-wide"
        >
          Setup
        </Link>
      </div>
    </nav>
  );
}
