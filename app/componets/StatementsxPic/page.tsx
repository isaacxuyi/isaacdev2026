'use client' // Required for Framer Motion in Next.js App Router
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const page = () => {
  const text = "HELLO I'M LUCA";
  
  // Splitting text into individual characters
  const letters = Array.from(text);

  // Framer Motion Variants for Text
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
    }),
  };

 const childVariants = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const, // Added 'as const'
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.5,
    },
  };

  return (
    <div className='flex justify-center items-center min-h-screen'>
         <div className='w-[327.333px] h-fit pt-12 px-6 lg:w-316.75 lg:h-216.75 lg:pt-24 lg:px-16'>

            <div className='grid grid-cols-1 gap-16 w-full h-full lg:grid-cols-2 lg:gap-34'>
                <div className='flex flex-col gap-12 lg:gap-10'>
                    
                    {/* Animated Text Container */}
                    <motion.div 
                        style={{ display: 'flex', overflow: 'hidden', fontWeight: 'bold'}}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="font-medium text-2xl"
                    >
                        {letters.map((letter, index) => (
                            <motion.span
                                key={index}
                                variants={childVariants}
                                style={{ display: 'inline-block', whiteSpace: 'pre' }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </motion.div>

                    <p className='text-[16px] lg:text-[18px]'>I'm a UX/UI Designer passionate about creating digital experiences that solve real problems. Over 10 years of helping companies transform complex challenges into user-centered Solutions. Rome-based, globally minded.</p>

                    {/* IMAGE ANIMATION ADDED HERE */}
                  <motion.div 
                        className='w-[320px] h-[325.729px] ...'
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ 
                            type: "spring" as const, // Added 'as const'
                            stiffness: 100, 
                            damping: 15,
                            delay: 0.6 
                        }}
                    >
                        <Image
                            src="/Assets/images/luca-profile.jpg"
                            alt="Luca Profile"
                            width={327}
                            height={325}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </motion.div>
                </div>
                

               <div className='flex flex-col gap-12 lg:gap-10'>
                        <blockquote className='text-[20px] lg:text-[24px]'>"I thought I wanted to be a developer until I discovered something more exciting: understanding why users click what they click. What started as a computer science degree became a fascination with human behaviour and interface design. Turns out, I was meant to build bridges between people and technology, not just write code."</blockquote>
                        <p className='text-[16px] lg:text-[18px]'>I'm an award-winning product designer specializing in UX/UI, based in Rome, Italy, where I've been working as a freelancer for about 7 years. I've partnered with companies like HCL and IBM to create web applications and platforms that solve real business challenges.</p>
                        <p className='text-[16px] lg:text-[18px]'>I'm also the founder of Persona team, a collective of curious minds focused on design and development. My work has been featured in 'Interactive Design for Screen' by Sandu Publishing, and I've been recognized by leading design communities worldwide.</p>
                        
                        {/* UPDATED DOWNLOAD RESUME DIV */}
                        <motion.div 
                            whileHover="hover"
                            initial="initial"
                            className='relative bg-gray-100 rounded-full p-4 w-fit border border-gray-200 overflow-hidden cursor-pointer group'
                        >
                            {/* Sliding Background */}
                            <motion.div 
                                variants={{
                                    initial: { width: 0 },
                                    hover: { width: '100%' }
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className='absolute inset-0 bg-black z-0'
                            />
                            
                            {/* Text with Color Transition */}
                            <a href="#" className='relative z-10 block'>
                                <motion.span 
                                    variants={{
                                        initial: { color: "#374151" }, // text-gray-700
                                        hover: { color: "#ffffff" }
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className='font-medium text-[15px] block px-2'
                                >
                                    Download Resume
                                </motion.span>
                            </a>
                        </motion.div>
               </div>
               
            </div>
        </div>
    </div>
  )
}

export default page