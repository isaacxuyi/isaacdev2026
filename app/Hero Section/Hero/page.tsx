"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';

interface HeroProps {
    finishedLoading: boolean;
}

const Hero = ({ finishedLoading }: HeroProps) => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.8, 
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
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
            animate={finishedLoading ? "visible" : "hidden"}
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

                <motion.div 
                    variants={itemVariants}
                    className='flex flex-wrap justify-center gap-5 pt-10'
                >
                    {/* Primary Button */}
                    <button className='group relative overflow-hidden bg-black text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 active:scale-95 shadow-lg hover:shadow-xl'>
                        <span className='relative z-10 transition-colors duration-300 group-hover:text-black'>
                            See my work
                        </span>
                        {/* Changed to -101% to prevent the white sliver from peeking */}
                        <div className='absolute inset-0 z-0 h-full w-full -translate-x-[101%] bg-white transition-transform duration-300 ease-out group-hover:translate-x-0' />
                    </button>

                    {/* Secondary Button */}
                    <button className='group relative overflow-hidden bg-gray-200 text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 active:scale-95'>
                        <span className='relative z-10 transition-colors duration-300 group-hover:text-white'>
                            Send me an email.
                        </span>
                        {/* Applied the same fix here just in case */}
                        <div className='absolute inset-0 z-0 h-full w-full -translate-x-[101%] bg-black transition-transform duration-300 ease-out group-hover:translate-x-0' />
                    </button>
                </motion.div>

            </div>
        </motion.div>
    );
};

export default Hero;