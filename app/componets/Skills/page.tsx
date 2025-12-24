"use client";

import React, { useEffect, useRef, useState } from 'react';

const MySkills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Custom hook logic for scroll detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: disconnect if you want it to happen only once
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.disconnect();
    };
  }, []);

  const skillCategories = [
    {
      title: "Design",
      skills: ["UI Design", "UX Design", "Product Design", "Prototyping & Testing", "Visual Design", "Mobile App Design", "Web Design", "Interaction Design"]
    },
    {
      title: "Prototyping",
      skills: ["Figma", "Sketch", "Principle", "Flinto", "inVision", "MarvelApp", "Axure"]
    },
    {
      title: "Product",
      skills: ["Jira", "ClickUp", "Trello", "Notion"]
    },
    {
      title: "Development",
      skills: ["HTML5 / CSS3", "Javascript", "Svelte", "Tweenmax GSAP", "PHP", "MySQL", "Wordpress"]
    }
  ];

  return (
    <div className="bg-[#0f0f0f] text-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section (No Animation) */}
        <div className="mb-16 md:mb-24 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-center">
            My Skills
          </h2>
          
          <p className="text-gray-400 text-center max-w-2xl text-base md:text-lg leading-relaxed">
            10+ years of hands-on experience across design, prototyping, and development. 
            This technical background helps me create designs that are not just visually 
            compelling, but actually buildable.
          </p>
        </div>

        {/* Skills Grid Section (With Scale Animation) */}
        <div 
          ref={sectionRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 transition-all duration-1000 ease-out transform
            ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10'}`}
        >
          {skillCategories.map((category, index) => (
            // Stagger animation slightly for each column using inline style delay
            <div 
              key={index} 
              className="flex flex-col"
              style={{ transitionDelay: `${index * 100}ms` }} 
            >
              <h3 className="text-xl font-bold mb-6 text-white tracking-wide">
                {category.title}
              </h3>
              
              <ul className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="text-gray-400 hover:text-white transition-colors duration-200 text-sm md:text-base font-light">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default MySkills;