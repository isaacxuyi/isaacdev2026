"use client";

import React, { useEffect, useRef, useState } from 'react';

const OffTheGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Trigger only once
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.disconnect();
    };
  }, []);

  const items = [
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Technology & AI",
      description: "I'm fascinated by emerging technologies and their potential to reshape how we interact with digital products. I experiment with AI tools, explore new frameworks, and stay ahead of tech trends that could influence the future of design."
    },
    {
      src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Videogames",
      description: "Gaming has been my gateway to understanding interaction design and user engagement. From analyzing MMO interfaces to studying game mechanics, I draw inspiration from how games create compelling, intuitive experiences that keep users coming back."
    },
    {
      src: "https://images.unsplash.com/photo-1524613032530-449a5d94c285?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Travel",
      description: "Traveling opens my mind to different cultures, design philosophies, and ways of solving problems. Each destination teaches me something new about human behavior and local design approaches that I bring back to my work."
    }
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Off the grid
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            When I'm not designing, I'm usually exploring new technologies, getting lost in virtual worlds, or discovering how different cultures solve problems. These passions constantly feed back into my design work.
          </p>
        </div>

        {/* Content Row
            - Mobile: flex-row with horizontal scroll
            - Desktop (lg): flex-row, centered, with larger gaps
        */}
        <div 
          ref={sectionRef}
          className="flex flex-row gap-6 overflow-x-auto snap-x snap-mandatory pb-4 lg:pb-0 lg:overflow-visible lg:justify-center lg:gap-12"
        >
          {items.map((item, index) => (
            <div 
              key={index}
              className={`flex-shrink-0 w-80 snap-center lg:w-full lg:max-w-sm lg:flex-shrink-1 transition-all duration-700 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="mb-6 relative h-64 w-full rounded-2xl overflow-hidden shadow-sm">
                {/* Replaced Next.js Image with standard img tag to fix config error */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffTheGrid;