"use client";
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

const Selectedworks = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (backgroundRef.current) gsap.set(backgroundRef.current, { x: "-101%" });
    if (textRef.current) gsap.set(textRef.current, { color: "#171717" });
  }, []);

  const handleMouseEnter = () => {
    if (backgroundRef.current) gsap.to(backgroundRef.current, { x: 0, duration: 0.4, ease: "power2.out" });
    if (textRef.current) gsap.to(textRef.current, { color: "#ffffff", duration: 0.3 });
  };

  const handleMouseLeave = () => {
    if (backgroundRef.current) gsap.to(backgroundRef.current, { x: "-101%", duration: 0.4, ease: "power2.out" });
    if (textRef.current) gsap.to(textRef.current, { color: "#171717", duration: 0.3 });
  };

  const works = [
    { 
      id: 1, 
      title: "Project One", 
      category: "UI/UX", 
      description: "A deep dive into modern minimalist interfaces.",
      color: "#e2e2e2",
      boxHeight: "h-[400px] md:h-[500px]", // Responsive height
      gridClass: "" 
    },
    { 
      id: 2, 
      title: "Project Two", 
      category: "Web Dev", 
      description: "Building scalable systems for the next generation of web.",
      color: "#d1d1d1",
      boxHeight: "h-[400px] md:h-[650px]", 
      gridClass: "" 
    },
    { 
      id: 3, 
      title: "Project Three", 
      category: "Full Stack", 
      description: "A comprehensive platform that combines seamless design with powerful backend architecture.",
      color: "#c4c4c4",
      boxHeight: "h-[400px] md:h-[550px]", 
      gridClass: "md:col-span-2" 
    },
    { 
      id: 4, 
      title: "Project Four", 
      category: "Product", 
      description: "Exploring the intersection of physical and digital products.",
      color: "#e2e2e2",
      boxHeight: "h-[400px] md:h-[650px]", 
      gridClass: "" 
    },
    { 
      id: 5, 
      title: "Project Five", 
      category: "Branding", 
      description: "Visual identity for a forward-thinking tech startup.",
      color: "#d1d1d1",
      boxHeight: "h-[400px] md:h-[500px]", 
      gridClass: "" 
    }
  ];

  return (
    <section className='flex justify-center flex-col items-center w-full px-6 py-12 md:py-20 bg-white'>
      
      {/* Header: Adjusted for mobile (text-4xl) and desktop (text-6xl) */}
      <h1 className='text-4xl md:text-6xl font-black pt-10 pb-6 md:py-[3rem] font-manrope text-center'>
        Selected works
      </h1>

      {/* Description: Reduced size and margin for mobile */}
      <p className='text-lg md:text-[21px] font-normal max-w-[1100px] text-center mb-16 md:mb-24 font-manrope leading-relaxed opacity-80'>
        Every project starts with understanding the real problem. Here's how I transform user
        needs and business goals into digital experiences that deliver results.
      </p>

      {/* Works Display Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-24 w-full max-w-[1200px] items-start mb-24">
        {works.map((work) => (
          <div key={work.id} className={`flex flex-col gap-4 md:gap-6 ${work.gridClass}`}>
            <div
              onMouseEnter={(e) => gsap.to(e.currentTarget, { y: -12, duration: 0.4, ease: "power2.out" })}
              onMouseLeave={(e) => gsap.to(e.currentTarget, { y: 0, duration: 0.4, ease: "power2.out" })}
              className={`relative overflow-hidden rounded-3xl cursor-pointer w-full ${work.boxHeight}`}
              style={{ backgroundColor: work.color }}
            />

            <div className="px-1 md:px-2">
              <div className="flex justify-between items-baseline mb-2">
                {/* Responsive title size */}
                <h3 className="text-2xl md:text-3xl font-bold font-manrope tracking-tight">{work.title}</h3>
                <span className="text-[10px] md:text-sm font-inter uppercase tracking-widest opacity-50 ml-2">{work.category}</span>
              </div>
              <p className="text-base md:text-lg font-normal opacity-70 font-manrope max-w-[800px]">{work.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden px-8 py-3 rounded-full font-manrope font-semibold text-sm cursor-pointer bg-[#f0f0f0]"
      >
        <div
          ref={backgroundRef}
          className="absolute inset-0 bg-black"
        />
        <span
          ref={textRef}
          className="relative z-10"
        >
          View more works
        </span>
      </button>
    </section>
  )
}

export default Selectedworks