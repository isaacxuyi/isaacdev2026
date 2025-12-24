"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["Think", "Solve", "Design"];

const Preloader = ({ setLoading }: { setLoading: (val: boolean) => void }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === words.length - 1) {
      // Small delay on the last word before the curtain raises
      setTimeout(() => setLoading(false), 1000);
      return;
    }
    const timeout = setTimeout(() => setIndex(index + 1), 800);
    return () => clearTimeout(timeout);
  }, [index, setLoading]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#171717] text-white"
    >
      <div className="relative overflow-hidden h-[80px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={words[index]}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="text-5xl font-manrope font-bold"
          >
            {words[index]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Minimal loading white line */}
      <div className="absolute bottom-10 w-[150px] h-[1px] bg-white/20">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="h-full bg-white origin-left"
        />
      </div>
    </motion.div>
  );
};

export default Preloader;