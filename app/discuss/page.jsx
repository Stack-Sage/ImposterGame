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
        className="glass p-12 flex flex-col gap-14 items-center justify-center mx-2 md:mx-10 w-full max-w-lg rounded-3xl shadow-xl bg-gradient-to-br from-sky-100/40 via-cyan-200/40 to-blue-200/40"
        style={{ minHeight: "80vh" }}
      >
        <h2 className="h2 font-bold text-cyan-100 text-center mb-4">Discuss & Vote</h2>
        <p className="text-2xl text-cyan-200 text-center mb-10 font-bold">Discuss who the imposter is.<br />When ready, reveal.</p>
        <NeonButton onClick={() => router.push("/reveal")}>
          <span className="text-gray-900 text-xl">Reveal Imposter</span>
        </NeonButton>
      </motion.div>
    </div>
  );
}
