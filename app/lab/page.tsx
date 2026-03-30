"use client";

import React, { useRef, useEffect } from 'react';
import Header from "@/app/Hero Section/Header/page";
import Footer from "@/app/componets/Footer/page";
import { gsap } from 'gsap';

const Page = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const bubblesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Entrance animation for the text content
    gsap.fromTo(
      [titleRef.current, subtitleRef.current],
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.5, // Delay to allow page transition to settle
      }
    );

    // Continuous animation for the "bubbles"
    if (bubblesContainerRef.current) {
      const bubbles = Array.from(bubblesContainerRef.current.children);
      bubbles.forEach((bubble) => {
        gsap.set(bubble, {
          y: '100%',
          opacity: 0,
        });

        gsap.to(bubble, {
          y: '-200%', // Move up and out of view
          opacity: Math.random() * 0.4 + 0.1, // Random opacity for variety
          duration: Math.random() * 8 + 4, // Random duration between 4 and 12 seconds
          ease: 'none',
          repeat: -1,
          delay: Math.random() * 5, // Random start delay
          onRepeat: function() {
            // Reset position to the bottom when it repeats to ensure continuous flow
            gsap.set(this.targets()[0], { y: '100%' });
          }
        });
      });
    }
  }, []);

  return (
    <div className="bg-white w-full">
      <Header finishedLoading={true} />
      
      <section 
        ref={containerRef}
        className="relative flex flex-col items-center justify-center min-h-[calc(100vh-250px)] text-center px-6 overflow-hidden"
      >
        {/* Bubbles Background */}
        <div 
          ref={bubblesContainerRef}
          className="absolute inset-0 z-0"
        >
          {Array.from({ length: 20 }).map((_, i) => {
            const size = Math.random() * 50 + 15; // size between 15px and 65px
            return (
              <div 
                key={i}
                className="absolute bottom-0 bg-gray-100 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  transform: 'translateX(-50%)',
                }}
              />
            );
          })}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          <h1 
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold text-black tracking-tight mb-4"
          >
            The Lab is Brewing
          </h1>
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            New experiments and creative projects are currently in the works. 
            Check back soon to see what's cooking on the way.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Page;