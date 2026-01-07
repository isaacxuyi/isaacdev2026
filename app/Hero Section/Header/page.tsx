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
    const mobileMenuLinksRef = useRef<HTMLDivElement>(null);
    
    // Timeline reference for cleanup
    const tl = useRef<gsap.core.Timeline | null>(null);

    const navItems = [
        { name: "Work", href: "/works" },
        { name: "About", href: "/about" },
        { name: "Lab", href: "/lab" },
    ];

    useGSAP(() => {
        // 1. Cleanup old animations
        if (tl.current) tl.current.kill();
        gsap.killTweensOf([mobileMenuRef.current, mobileMenuPathRef1.current, mobileMenuPathRef2.current, mobileMenuLinksRef.current]);

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
            document.body.style.overflow = "hidden"; // Lock scroll

            // Reset paths if starting fresh
            if (!mobileMenuRef.current?.classList.contains('is-animating')) {
                 gsap.set([mobileMenuPathRef1.current, mobileMenuPathRef2.current], { attr: { d: hiddenPath } });
                 gsap.set(mobileMenuLinksRef.current, { opacity: 0 });
            }
            mobileMenuRef.current?.classList.add('is-animating');

            tl.current
            // Wave 1
            .to(mobileMenuPathRef1.current, { attr: { d: curvePath }, duration: 0.8, ease: 'power3.in' })
            .to(mobileMenuPathRef1.current, { attr: { d: fullPath }, duration: 0.4, ease: 'power2.out' })
            // Wave 2
            .to(mobileMenuPathRef2.current, { attr: { d: curvePath }, duration: 0.8, ease: 'power3.in' }, "-=0.7")
            .to(mobileMenuPathRef2.current, { attr: { d: fullPath }, duration: 0.4, ease: 'power2.out' })
            // Links Fade In
            .to(mobileMenuLinksRef.current, { opacity: 1, duration: 0.5, ease: 'power3.out' }, "-=0.5");

        } else {
            // --- CLOSE ANIMATION ---
            document.body.style.overflow = ""; // Unlock scroll

            if (mobileMenuRef.current && mobileMenuRef.current.style.display !== 'none') {
                tl.current = gsap.timeline({ 
                    onComplete: () => {
                        gsap.set(mobileMenuRef.current, { display: 'none' });
                        mobileMenuRef.current?.classList.remove('is-animating');
                    }
                });

                tl.current
                .to(mobileMenuLinksRef.current, { opacity: 0, duration: 0.2, ease: 'power3.in' })
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
            {/* NAV CONTAINER: z-[101]
              This sits physically ABOVE the white overlay (z-[100]).
            */}
            <nav className='relative z-[101] px-[2rem] lg:px-[4rem] pt-[40px] pb-[30px]'>
                <div className='flex items-center justify-between relative'>

                    {/* --- LOGO --- */}
                    <Link href="/" className="group relative cursor-pointer">
                        {/* Text Color Logic:
                           - Always 'text-black' so it is visible against the WHITE menu background.
                           - If your home page is dark, you might want: ${isOpen ? 'text-black' : 'text-white'}
                        */}
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
                        className={`md:hidden flex items-center justify-center w-12 h-12 rounded-full border shadow-sm transition-all duration-300 active:scale-90 relative ${
                            // Logic: If open (white BG), button is black. If closed, button is black.
                            // If your site is dark mode, change 'border-black text-black' to 'border-white text-white' for the closed state.
                            isOpen ? 'border-black text-black' : 'border-black text-black'
                        }`}
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
            {/* z-[100] is BELOW the nav (z-[101]) */}
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

                {/* Navigation Links: BLACK */}
                <div ref={mobileMenuLinksRef} className="relative z-10 flex flex-col items-center justify-center h-full gap-8 pointer-events-auto opacity-0">
                    {navItems.map(item => (
                        <Link
                            key={item.name} 
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-2xl italic font-black uppercase text-black transition-colors duration-300 ${
                                pathname === item.href ? 'opacity-50' : 'hover:opacity-70'
                            }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;