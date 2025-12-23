"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    return (
        <motion.div 
            className='min-h-[80vh] flex items-center justify-center'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className='flex justify-center flex-col items-center w-full'>
                
                <motion.h1 
                    variants={itemVariants}
                    className='text-[4rem] md:text-[6rem] w-full text-center leading-[1.1] font-bold max-w-4xl mx-auto text-black'
                >
                    Crafted Digital <br /> Experiences
                </motion.h1>

                <motion.p 
                    variants={itemVariants}
                    className='text-[1.1rem] md:text-[1.3rem] w-full text-center leading-relaxed max-w-2xl mx-auto px-5 mt-6 text-black/70'
                >
                    Hey, I'm Luca, a Senior UX/UI Designer crafting digital experiences and solving complex problems for over a decade.
                </motion.p>

                {/* Buttons Container */}
                <motion.div 
                    variants={itemVariants}
                    className='flex flex-wrap justify-center gap-5 pt-10'
                >
                    {/* Primary Button: Sliding Black over Brown */}
                    <button className='group relative overflow-hidden bg-[#402d2d] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 active:scale-95 shadow-lg'>
                        <span className='relative z-10'>See my work</span>
                        <div className='absolute inset-0 z-0 h-full w-full translate-x-[-100%] bg-black transition-transform duration-300 ease-out group-hover:translate-x-0' />
                    </button>

                    {/* Secondary Button: Sliding Dark Gray over Light Gray */}
                    <button className='group relative overflow-hidden bg-gray-200 text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 active:scale-95'>
                        <span className='relative z-10 transition-colors duration-300 group-hover:text-white'>Send me an email</span>
                        <div className='absolute inset-0 z-0 h-full w-full translate-x-[-100%] bg-gray-600 transition-transform duration-300 ease-out group-hover:translate-x-0' />
                    </button>
                </motion.div>

            </div>
        </motion.div>
    );
};

export default Hero;