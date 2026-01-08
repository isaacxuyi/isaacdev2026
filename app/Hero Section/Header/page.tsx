"use client";
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

interface HeaderProps {
    finishedLoading?: boolean;
}

const Header = ({ finishedLoading }: HeaderProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredPath, setHoveredPath] = useState<string | null>(null);
    const pathname = usePathname();

    const headerRef = useRef<HTMLElement>(null);
    const toggleRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const mobileMenuPathRef1 = useRef<SVGPathElement>(null);
    const mobileMenuPathRef2 = useRef<SVGPathElement>(null);
    const mobileMenuSvgRef = useRef<SVGSVGElement>(null);
    const mobileMenuContentRef = useRef<HTMLDivElement>(null);
    
    // Timeline reference for cleanup
    const tl = useRef<gsap.core.Timeline | null>(null);

    const navItems = [
        { name: "Work", href: "/works" },
        { name: "About", href: "/about" },
        { name: "Lab", href: "/lab" },
    ];

    const socialLinks = [
        "Behance", "Dribbble", "Instagram", "Linkedin", "X (Twitter)"
    ];

    useGSAP(() => {
        // 1. Cleanup old animations
        if (tl.current) tl.current.kill();
        gsap.killTweensOf([mobileMenuRef.current, mobileMenuPathRef1.current, mobileMenuPathRef2.current, mobileMenuContentRef.current]);

        // 2. Animate Hamburger Rotation
        gsap.to(toggleRef.current, {
            rotation: isOpen ? 90 : 0,
            duration: 0.3,
            ease: 'power2.out'
        });

        // 3. Define Wave Paths
        const hiddenPath = "M 0 0 L 100 0 L 100 0 Q 50 0 0 0 Z"; 
        const curvePath = "M 0 0 L 100 0 L 100 100 Q 50 30 0 100 Z"; 
        const fullPath = "M 0 0 L 100 0 L 100 100 Q 50 100 0 100 Z"; 

        tl.current = gsap.timeline();

        if (isOpen) {
            // --- OPEN ANIMATION ---
            gsap.set(mobileMenuRef.current, { display: "block" });
            document.body.style.overflow = "hidden"; 

            // Reset paths if starting fresh
            if (!mobileMenuRef.current?.classList.contains('is-animating')) {
                 gsap.set([mobileMenuPathRef1.current, mobileMenuPathRef2.current], { attr: { d: hiddenPath } });
                 gsap.set(mobileMenuContentRef.current, { opacity: 0, y: 20 });
            }
            mobileMenuRef.current?.classList.add('is-animating');

            tl.current
            // Wave 1
            .to(mobileMenuPathRef1.current, { attr: { d: curvePath }, duration: 0.8, ease: 'power3.in' })
            .to(mobileMenuPathRef1.current, { attr: { d: fullPath }, duration: 0.4, ease: 'power2.out' })
            // Wave 2
            .to(mobileMenuPathRef2.current, { attr: { d: curvePath }, duration: 0.8, ease: 'power3.in' }, "-=0.7")
            .to(mobileMenuPathRef2.current, { attr: { d: fullPath }, duration: 0.4, ease: 'power2.out' })
            // Content Fade In (Staggered slightly)
            .to(mobileMenuContentRef.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, "-=0.4");

        } else {
            // --- CLOSE ANIMATION ---
            document.body.style.overflow = ""; 

            if (mobileMenuRef.current && mobileMenuRef.current.style.display !== 'none') {
                tl.current = gsap.timeline({ 
                    onComplete: () => {
                        gsap.set(mobileMenuRef.current, { display: 'none' });
                        mobileMenuRef.current?.classList.remove('is-animating');
                    }
                });

                tl.current
                .to(mobileMenuContentRef.current, { opacity: 0, y: -20, duration: 0.2, ease: 'power3.in' })
                // Wave 1 Retreat
                .to(mobileMenuPathRef1.current, { attr: { d: curvePath }, duration: 0.4, ease: 'power2.in' })
                .to(mobileMenuPathRef1.current, { attr: { d: hiddenPath }, duration: 0.8, ease: 'power3.out' })
                // Wave 2 Retreat
                .to(mobileMenuPathRef2.current, { attr: { d: curvePath }, duration: 0.4, ease: 'power2.in' }, "-=1.1")
                .to(mobileMenuPathRef2.current, { attr: { d: hiddenPath }, duration: 0.8, ease: 'power3.out' });
            }
        }
    }, { dependencies: [isOpen] });

    return (
        <header 
            ref={headerRef}
            className="w-full z-50 relative"
        >
            <nav className='relative z-[101] px-[2rem] lg:px-[9rem] pt-[70px] pb-[30px]'>
                <div className='flex items-center justify-between relative'>

                    {/* --- LOGO --- */}
                    <Link href="/" className="group relative cursor-pointer">
                        <div className="text-4xl font-black text-black transition-all duration-500 ease-in-out group-hover:scale-x-50 group-hover:opacity-0">
                            UI
                        </div>
                        <div className="absolute inset-0 flex items-center justify-start whitespace-nowrap text-xl font-bold tracking-tighter opacity-0 transition-all duration-500 ease-in-out group-hover:scale-x-105 group-hover:tracking-normal group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto text-black">
                            ISAAC UHUNMWANGHO
                        </div>
                    </Link>

                    {/* --- NAV ITEMS (Desktop) --- */}
                    <div className="hidden md:flex gap-[2rem] items-center">
                        {navItems.map((item) => (
                            <div
                                key={item.name}
                                className="relative group"
                                onMouseEnter={() => setHoveredPath(item.name)}
                                onMouseLeave={() => setHoveredPath(null)}
                            >
                                <Link
                                    href={item.href}
                                    className={`text-[21px] font-medium transition-opacity duration-300 ${
                                        hoveredPath && hoveredPath !== item.name ? "opacity-30" : "opacity-100"
                                    }`}
                                >
                                    {item.name}
                                </Link>
                                <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-black origin-left transition-transform duration-300 ease-out ${
                                    hoveredPath === item.name ? "scale-x-100" : "scale-x-0"
                                }`} />
                            </div>
                        ))}

                        <button className='group relative overflow-hidden bg-black text-white px-[32px] py-[14px] rounded-full font-semibold active:scale-95 transition-all duration-300 border border-black'>
                            <span className='relative z-10 transition-colors duration-300 group-hover:text-black'>
                                Contact me
                            </span>
                            <div className='absolute inset-0 z-0 h-full w-full -translate-x-full bg-white transition-transform duration-300 ease-out group-hover:translate-x-0' />
                        </button>
                    </div>

                    {/* --- MOBILE TOGGLE BUTTON --- */}
                    <button 
                        className="md:hidden flex items-center justify-center w-12 h-12 rounded-full border border-black text-black shadow-sm transition-all duration-300 active:scale-90 relative"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div
                            ref={toggleRef}
                            className="flex items-center justify-center"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                {isOpen ? (
                                    <path d="M18 6L6 18M6 6l12 12"/> 
                                ) : (
                                    <path d="M4 8H20M4 16H20"/> 
                                )}
                            </svg>
                        </div>
                    </button>
                </div>
            </nav>

            {/* --- MOBILE MENU OVERLAY --- */}
            <div 
                ref={mobileMenuRef} 
                style={{ display: 'none' }} 
                className="fixed inset-0 z-[100] h-dvh w-full bg-transparent pointer-events-none"
            >
                {/* SVG Background: WHITE */}
                <svg ref={mobileMenuSvgRef} className="absolute inset-0 w-full h-full pointer-events-auto" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path ref={mobileMenuPathRef2} className="fill-white" />
                    <path ref={mobileMenuPathRef1} className="fill-white drop-shadow-[0_20px_20px_rgba(0,0,0,0.1)]" />
                </svg>

                {/* --- MENU CONTENT --- */}
                <div ref={mobileMenuContentRef} className="relative z-10 flex flex-col justify-between h-full w-full pointer-events-auto px-6 pt-32 pb-8">
                    
                    {/* 1. Main Navigation */}
                    <div className="flex flex-col items-center gap-6">
                        {navItems.map(item => (
                            <Link
                                key={item.name} 
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                // Added 'font-serif' and 'italic' to match the image style
                                className={`text-5xl font-serif italic text-black transition-colors duration-300 ${
                                    pathname === item.href ? 'opacity-50' : 'hover:opacity-70'
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        {/* 'Contact me' added manually to list to match image layout */}
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="text-5xl font-serif italic text-black hover:opacity-70 transition-colors duration-300"
                        >
                            Contact me
                        </Link>
                    </div>

                    {/* 2. Social Links */}
                    <div className="flex flex-col items-center gap-3 mt-8">
                        {socialLinks.map((link) => (
                            <a 
                                key={link} 
                                href="#" 
                                className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
                            >
                                {link}
                            </a>
                        ))}
                    </div>

                    {/* 3. Footer (Play Reel / Get in Touch) */}
                    <div className="flex items-end justify-between w-full mt-auto">
                        <span className="text-gray-500 text-sm font-medium cursor-pointer hover:text-black">
                            Play Reel
                        </span>
                        
                        <div className="flex items-center gap-3 cursor-pointer group">
                            <span className="text-black font-bold text-lg">Get in touch</span>
                            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7 17L17 7"/>
                                    <path d="M7 7h10v10"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;