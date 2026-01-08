'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Template({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const pathRef1 = useRef<SVGPathElement>(null)
  const pathRef2 = useRef<SVGPathElement>(null)

  useGSAP(() => {
    // 1. Define the curve states
    const startPath = "M 0 0 L 100 0 L 100 100 Q 50 100 0 100 Z"
    const curvePath = "M 0 0 L 100 0 L 100 100 Q 50 30 0 100 Z" 
    const flatPath = "M 0 0 L 100 0 L 100 0 Q 50 0 0 0 Z"

    const tl = gsap.timeline()

    // Ensure initial state
    gsap.set([pathRef1.current, pathRef2.current], { attr: { d: startPath } })

    tl
    // --- WAVE 1 (Top Layer) ---
    .to(pathRef1.current, {
      attr: { d: curvePath },
      duration: 1.2, 
      ease: 'power2.in', 
    })
    .to(pathRef1.current, {
      attr: { d: flatPath },
      duration: 0.8, 
      ease: 'power2.out', 
    })

    // --- WAVE 2 (Bottom Layer) ---
    .to(pathRef2.current, {
      attr: { d: curvePath },
      duration: 1.2, 
      ease: 'power2.in', 
    }, "-=1") // Starts while Wave 1 is flattening
    
    .to(pathRef2.current, {
      attr: { d: flatPath },
      duration: 0.8,
      ease: 'power2.out', 
    })
    
    // --- CONTENT ---
    // The content fade-in is timed to start just as the first wave begins to retract.
    // This ensures that entry animations on the new page are visible during the reveal.
    .fromTo(containerRef.current, {
      y: 50, 
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 1.2, // Slightly increased for a smoother blend with the reveal
      ease: 'power3.out'
    }, 1.3) // Starts at 1.3s, just after the top wave starts retracting (at 1.2s)
  })

  return (
    <>
      <svg
        className="fixed inset-0 w-full h-[120vh] z-[9999] pointer-events-none" 
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ top: '-10vh' }}
      >
        {/* Layer 2: Bottom wave (Pure Black) */}
        <path ref={pathRef2} className="fill-black" />

        {/* Layer 1: Top wave (Pure Black + Shadow) */}
        {/* The shadow is necessary to see the separation between the two black layers */}
        <path 
          ref={pathRef1} 
          className="fill-black drop-shadow-[0_20px_20px_rgba(255,255,255,0.15)]" 
        />
        {/* Note: I slightly adjusted the shadow color to be a faint white glow (rgba 255)
            because a black shadow on a black background is invisible. 
            If you prefer a dark shadow, you can switch it back to rgba(0,0,0,0.8),
            but on a black screen, a subtle light rim is usually needed to see the edge. */}
      </svg>
      
      <div ref={containerRef} className="min-h-screen">
        {children}
      </div>
    </>
  )
}