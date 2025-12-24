"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredPath, setHoveredPath] = useState<string | null>(null);

    const navItems = [
        { name: "Work", href: "#" },
        { name: "About", href: "#" },
        { name: "lab", href: "#" },
    ];

    return (
        // 1. Initial "Fall Down" animation for the whole header
        <motion.header 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
                                
                                {/* The Sliding Underline */}
                                <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-black origin-left transition-transform duration-300 ease-out ${
                                    hoveredPath === item.name ? "scale-x-100" : "scale-x-0"
                                }`} />
                            </li>
                        ))}

                        {/* Contact Button with your existing logic or the sliding effect */}
                        <button className='group relative overflow-hidden bg-black text-white px-[32px] py-[14px] rounded-full font-semibold active:scale-95 transition-all duration-300'>
                           <span className='relative z-10'>Contact me</span>
                           <div className='absolute inset-0 z-0 h-full w-full translate-y-[100%] bg-gray-600 transition-transform duration-300 ease-out group-hover:translate-y-0' />
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            {isOpen ? <path d="M18 6L6 18M6 6l12 12"/> : <path d="M4 7H20M4 12H20M4 17H20"/>}
                        </svg>
                    </button>
                </ul>
            </nav>
        </motion.header>
    );
};

export default Header;