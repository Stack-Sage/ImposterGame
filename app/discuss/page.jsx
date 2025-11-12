"use client";
import NeonButton from "../../components/NeonButton";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function DiscussPage() {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass p-10 flex flex-col gap-10 items-center justify-center max-w-2xl mx-auto"
    >
      <h2 className="h2 neon-text font-bold text-center mb-2">Discuss & Vote</h2>
      <p className="text-2xl text-sky-200/80 text-center mb-6">Discuss who the imposter is.<br />When ready, reveal.</p>
      <NeonButton onClick={() => router.push("/reveal")}>Reveal Imposter</NeonButton>
    </motion.div>
  );
}
