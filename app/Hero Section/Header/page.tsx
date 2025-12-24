"use client";
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';

interface HeaderProps {
    finishedLoading: boolean;
}

const Header = ({ finishedLoading }: HeaderProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredPath, setHoveredPath] = useState<string | null>(null);

    const navItems = [
        { name: "Work", href: "#" },
        { name: "About", href: "/about" },
        { name: "lab", href: "#" },
    ];

    const headerVariants: Variants = {
        hidden: { y: -100, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1],
                delay: 0.5 
            } 
        }
    };

    return (
        <motion.header 
            variants={headerVariants}
            initial="hidden"
            animate={finishedLoading ? "visible" : "hidden"}
            className="w-full z-50 relative"
        >
            <nav className='px-[2rem] lg:px-[4rem] pt-[40px] pb-[30px]'>
                <ul className='flex items-center justify-between relative'>

                    {/* --- LOGO --- */}
                    <div className="group relative cursor-pointer">
                        <div className="text-4xl font-black transition-all duration-500 ease-in-out group-hover:scale-x-50 group-hover:opacity-0">
                            UI
                        </div>
                        <div className="absolute inset-0 flex items-center justify-start whitespace-nowrap text-xl font-bold tracking-tighter opacity-0 transition-all duration-500 ease-in-out group-hover:scale-x-105 group-hover:tracking-normal group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
                            ISAAC UHUNMWANGHO
                        </div>
                    </div>

                    {/* --- NAV ITEMS --- */}
                    <div className={`flex gap-[2rem] items-center ${isOpen ? 'flex' : 'hidden md:flex'}`}>
                        {navItems.map((item) => (
                            <li 
                                key={item.name} 
                                className="list-none relative group"
                                onMouseEnter={() => setHoveredPath(item.name)}
                                onMouseLeave={() => setHoveredPath(null)}
                            >
                                <a 
                                    href={item.href}
                                    className={`text-[21px] font-medium transition-opacity duration-300 ${
                                        hoveredPath && hoveredPath !== item.name ? "opacity-30" : "opacity-100"
                                    }`}
                                >
                                    {item.name}
                                </a>
                                <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-black origin-left transition-transform duration-300 ease-out ${
                                    hoveredPath === item.name ? "scale-x-100" : "scale-x-0"
                                }`} />
                            </li>
                        ))}

                        {/* Updated Horizontal Slide Button */}
                        <button className='group relative overflow-hidden bg-black text-white px-[32px] py-[14px] rounded-full font-semibold active:scale-95 transition-all duration-300 border border-black'>
    {/* Text color transitions from white to black on hover */}
    <span className='relative z-10 transition-colors duration-300 group-hover:text-black'>
        Contact me
    </span>
    
    {/* Sliding Background: White background, slides from left (-full) to right (0) */}
    <div className='absolute inset-0 z-0 h-full w-full -translate-x-full bg-white transition-transform duration-300 ease-out group-hover:translate-x-0' />
</button>
                    </div>

                    {/* Mobile Toggle */}
                    <button 
                        className='md:hidden flex items-center justify-center w-12 h-12 rounded-full border border-black shadow-sm transition-all duration-300 active:scale-90' 
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <motion.div
                            animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center justify-center"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                {isOpen ? (
                                    <path d="M18 6L6 18M6 6l12 12"/> 
                                ) : (
                                    <path d="M4 8H20M4 16H20"/> 
                                )}
                            </svg>
                        </motion.div>
                    </button>
                </ul>
            </nav>
        </motion.header>
    );
};

export default Header;