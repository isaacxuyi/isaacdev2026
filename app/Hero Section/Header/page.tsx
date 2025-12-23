"use client";

import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <nav className='px-[4rem] pt-[53px] pb-[48px]'>
                <ul className='flex items-center justify-between relative'>

                    {/* --- START OF LOGO IMPLEMENTATION --- */}
                    <div className="group relative cursor-pointer">
                        {/* The 'UI' Text */}
                        <div className="text-4xl font-black transition-all duration-500 ease-in-out group-hover:scale-x-50 group-hover:opacity-0">
                            UI
                        </div>

                        {/* The Full Name - Absolute positioned to sit exactly over the UI */}
                        <div className="absolute inset-0 flex items-center justify-start whitespace-nowrap text-xl font-bold tracking-tighter opacity-0 transition-all duration-500 ease-in-out group-hover:scale-x-105 group-hover:tracking-normal group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
                            UHUNMWANGHI ISAAC
                        </div>
                    </div>
                    {/* --- END OF LOGO IMPLEMENTATION --- */}

                    <div className={`header-items flex gap-[2rem] items-center ${isOpen ? 'active' : ''}`}>
                        <li><a>Work</a></li>
                        <li><a>About</a></li>
                        <li><a>Lab</a></li>
                        <button className=' bg-white accent-black px-[32px] py-[16px]  rounded-4xl hover:bg-gray-500
                     transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-gray-500'>Contact me</button>
                    </div>

                    <button
                        className={`mobile-menu-btn md:hidden ${isOpen ? 'active' : ''}`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="menu-icon"
                        >
                            {isOpen ? (
                                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            ) : (
                                <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            )}
                        </svg>
                    </button>
                </ul>
            </nav>
        </div>
    );
};

export default Header;