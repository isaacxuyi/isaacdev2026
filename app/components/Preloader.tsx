"use client";
import { gsap } from 'gsap';
import { useEffect, useState, useRef } from "react";

const words = ["Think", "Solve", "Design"];

const Preloader = ({ setLoading }: { setLoading: (val: boolean) => void }) => {
  const [index, setIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[0]);

  const preloaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Bar animation on mount
    if (barRef.current) {
      gsap.fromTo(barRef.current, { scaleX: 0 }, { scaleX: 1, duration: 2.5, ease: "power1.inOut" });
    }
  }, []);

  useEffect(() => {
    if (index === 0) {
      // Initial text animation
      if (textRef.current) {
        gsap.fromTo(textRef.current, { y: "100%" }, { y: 0, duration: 0.5, ease: "circOut" });
      }
    } else if (index < words.length) {
      // Animate out current word, then in new
      if (textRef.current) {
        gsap.to(textRef.current, { y: "-100%", duration: 0.5, ease: "circOut", onComplete: () => {
          setCurrentWord(words[index]);
          gsap.set(textRef.current, { y: "100%" });
          gsap.to(textRef.current, { y: 0, duration: 0.5, ease: "circOut" });
        }});
      }
    }

    if (index === words.length - 1) {
      // After last word, wait 1s then animate out
      setTimeout(() => {
        if (preloaderRef.current) {
          gsap.to(preloaderRef.current, { y: "-100%", duration: 0.8, ease: "power2.inOut", onComplete: () => setLoading(false) });
        }
      }, 1000);
      return;
    }

    const timeout = setTimeout(() => setIndex(index + 1), 800);
    return () => clearTimeout(timeout);
  }, [index, setLoading]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#171717] text-white"
    >
      <div className="relative overflow-hidden h-[80px] flex items-center justify-center">
        <p
          ref={textRef}
          className="text-5xl font-manrope font-bold"
        >
          {currentWord}
        </p>
      </div>

      {/* Minimal loading white line */}
      <div className="absolute bottom-10 w-[150px] h-[1px] bg-white/20">
        <div
          ref={barRef}
          className="h-full bg-white origin-left"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>
    </div>
  );
};

export default Preloader;