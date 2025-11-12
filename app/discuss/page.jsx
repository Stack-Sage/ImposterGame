"use client";
import NeonButton from "../../components/NeonButton";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function DiscussPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-screen md:max-w-2xl lg:max-w-3xl mx-1 sm:mx-auto p-4 sm:p-8 flex flex-col gap-4 sm:gap-8 items-center justify-center rounded-xl shadow bg-gradient-to-br from-sky-100/40 via-cyan-200/40 to-blue-200/40"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-cyan-400 text-center mb-1 sm:mb-2">Discuss & Vote</h2>
        <p className="text-base sm:text-xl text-cyan-200 text-center mb-2 sm:mb-4 font-bold">Discuss who the imposter is.<br />When ready, reveal.</p>
        <NeonButton onClick={() => router.push("/reveal")}>
          <span className="text-black text-base sm:text-xl" style={{ color: "#111" }}>Reveal Imposter</span>
        </NeonButton>
      </motion.div>
    </div>
  );
}
