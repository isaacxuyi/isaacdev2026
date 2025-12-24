'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const ExperienceLogos = () => {
  const experiences = [
    {
      id: 1,
      src: '/Assets/images/toptal-logo.png', // Replace with your actual paths
      alt: 'Toptal Logo',
      label: 'Member of the Toptal Community',
    },
    {
      id: 2,
      src: '/Assets/images/persona-logo.png',
      alt: 'Persona Logo',
      label: 'Founder of Persona',
    },
    {
      id: 3,
      src: '/Assets/images/cssfox-logo.png',
      alt: 'CSSFox Logo',
      label: 'Judge of CSSFox',
    },
  ];

  // Animation variants for the individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8 + i * 0.2, // Starts after the previous hero animations
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="w-full py-24 px-16">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {experiences.map((item, index) => (
          <motion.div
            key={item.id}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            className="flex flex-col items-center gap-4 text-center max-w-[200px]"
          >
            {/* Logo Container */}
            <div className="relative w-20 h-20 md:w-24 md:h-24">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-contain"
              />
            </div>
            
            {/* Label */}
            <p className="text-gray-600 text-sm md:text-base font-medium leading-tight">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ExperienceLogos