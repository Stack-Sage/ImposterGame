"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RevealConfetti() {
  const [show, setShow] = useState(true);
  useEffect(()=> {
    const t = setTimeout(()=> setShow(false), 3500);
    return ()=> clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} className="w-full flex justify-center mt-6 pointer-events-none">
          <div className="relative w-[480px] h-40">
            {Array.from({length:40}).map((_,i)=>(
              <motion.span key={i} initial={{y:-30, opacity:0}} animate={{y: Math.random()*160, opacity:1}} transition={{duration:1.2, delay: i*0.03}} style={{left: `${(i/40)*100}%`}} className="absolute top-0 w-4 h-8 bg-gradient-to-br from-sky-400 to-cyan-400 rounded"></motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
