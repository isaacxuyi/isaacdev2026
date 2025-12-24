"use client";
import React from 'react'
import { motion } from 'framer-motion'

const Selectedworks = () => {
  const works = [
    { 
      id: 1, 
      title: "Project One", 
      category: "UI/UX Design", 
      description: "A deep dive into modern minimalist interfaces.",
      color: "#e2e2e2",
      boxHeight: "h-[500px]",
      gridClass: "" 
    },
    { 
      id: 2, 
      title: "Project Two", 
      category: "Web Development", 
      description: "Building scalable systems for the next generation of web.",
      color: "#d1d1d1",
      boxHeight: "h-[650px]", // Taller box, bottoms will be staggered
      gridClass: "" 
    },
    { 
      id: 3, 
      title: "Project Three", 
      category: "Full Stack", 
      description: "A comprehensive platform that combines seamless design with powerful backend architecture.",
      color: "#c4c4c4",
      boxHeight: "h-[500px]", 
      gridClass: "md:col-span-2" // Spans the full width
    }
  ];

  return (
    <section className='flex justify-center flex-col items-center w-full px-6 py-20'>
      <h1 className='text-6xl font-black py-[3rem] font-manrope'>Selected works</h1>
      <p className='text-[21px] font-normal max-w-[1100px] text-center mb-24'>
        Every project starts with understanding the real problem. Here's how I transform user
        needs and business goals into digital experiences that deliver results.
      </p>

      {/* Works Display Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 w-full max-w-[1200px] items-start">
        {works.map((work) => (
          <div key={work.id} className={`flex flex-col gap-6 ${work.gridClass}`}>
            {/* The Animated Box */}
            <motion.div
              whileHover={{ 
                y: -12, 
                transition: { duration: 0.4, ease: "easeOut" } 
              }}
              className={`relative overflow-hidden rounded-3xl cursor-pointer w-full ${work.boxHeight}`}
              style={{ backgroundColor: work.color }}
            >
              {/* Content goes here */}
            </motion.div>

            {/* Title and Description */}
            <div className="px-2">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-3xl font-bold font-manrope tracking-tight">
                  {work.title}
                </h3>
                <span className="text-sm font-inter uppercase tracking-widest opacity-50">
                  {work.category}
                </span>
              </div>
              <p className="text-lg font-normal opacity-70 font-manrope max-w-[800px]">
                {work.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Selectedworks