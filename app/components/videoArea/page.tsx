"use client"
import React from 'react'

const VideoArea = () => {
  const logos = [
    { name: 'IBM', url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
    { name: 'Meta', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
    { name: 'Cisco', url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' },
    { name: 'Coursera', url: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg' },
    { name: 'Microsoft Azure', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg' },
  ]

  // Doubled array ONLY for the mobile animation
  const infiniteLogos = [...logos, ...logos];

  return (
    <div>
      <section className='flex flex-col items-center justify-start min-h-screen bg-white pt-10 pb-20 px-4'>
        
        <div className='w-full max-w-4xl aspect-video shadow-lg rounded-lg overflow-hidden md:mt-[-1rem]'>
          <iframe 
            className='w-full h-full'
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>

        <p className='text-2xl md:text-3xl text-center mt-[4rem] font-medium text-gray-700'>
          Trusted by innovative companies worldwide
        </p>

        <div className='mt-10 w-full max-w-5xl overflow-hidden'>
          
          {/* MOBILE SLIDER: Visible only on mobile (hidden on md and up) */}
          <div className='flex items-center gap-12 w-max animate-scroll md:hidden'>
            {infiniteLogos.map((logo, index) => (
              <div key={`mobile-${index}`} className='flex-shrink-0 grayscale'>
                <img src={logo.url} alt={logo.name} className='h-8 w-auto object-contain' />
              </div>
            ))}
          </div>

          {/* DESKTOP STATIC: Visible only on desktop (md and up) */}
          <div className='hidden md:flex items-center justify-center flex-wrap gap-12 w-full'>
            {logos.map((logo, index) => (
              <div key={`desktop-${index}`} className='flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300'>
                <img src={logo.url} alt={logo.name} className='h-10 w-auto object-contain' />
              </div>
            ))}
          </div>

        </div>
      </section>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default VideoArea