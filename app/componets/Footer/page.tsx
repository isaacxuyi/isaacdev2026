"use client";
import React, { useState } from 'react';

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // Helper to apply the "gray out" and underline logic to any link
  const renderLink = (name: string, href: string, external = false) => (
    <li className="list-none">
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onMouseEnter={() => setHoveredLink(name)}
        onMouseLeave={() => setHoveredLink(null)}
        className={`relative inline-block text-lg transition-all duration-300 ease-in-out ${
          hoveredLink && hoveredLink !== name ? "opacity-40" : "opacity-100"
        }`}
      >
        {name}
        {/* The Animated Underline */}
        <span
          className={`absolute -bottom-1 left-0 h-[1.5px] bg-white transition-all duration-300 ease-out ${
            hoveredLink === name ? "w-full" : "w-0"
          }`}
        />
      </a>
    </li>
  );

  return (
    <footer className="w-full bg-black text-white px-8 py-16 md:px-[4rem] md:py-[80px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Left Side: CTA & Branding */}
        <div className="flex flex-col gap-6 max-w-md">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Ready to start your <br /> next project?
            </h2>
            <p className="text-gray-400 mt-4 text-lg">
              Let's create something amazing together.
            </p>
            <div className="mt-6">
               {renderLink("Let's talk", "mailto:uhuisaac1@gmail.com")}
            </div>
          </div>
          
          <div className="md:mt-auto">
            <p className="text-sm text-gray-500 mb-5 mt-10">
              © 2025 ISAAC UHUNMWANGHO
            </p>
            <div className="text-4xl font-black mb-2 tracking-tighter cursor-default">UI</div>
          </div>
        </div>

        {/* Right Side: Links */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          
          {/* Navigation */}
          <div>
            <p className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-6">
              Explore
            </p>
            <ul className="flex flex-col gap-4">
              {renderLink("About", "#about")}
              {renderLink("Work", "#work")}
              {renderLink("Lab", "#lab")}
              {renderLink("Contact", "#contact")}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-6">
              Socials
            </p>
            <ul className="flex flex-col gap-4">
              {renderLink("LinkedIn", "https://linkedin.com", true)}
              {renderLink("Twitter / X", "https://twitter.com", true)}
              {renderLink("GitHub", "https://github.com", true)}
              {renderLink("Instagram", "https://instagram.com", true)}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-6">
              legal 
            </p>
            <ul className="flex flex-col gap-4">
              {renderLink("Privacy & cookies", "#privacy")}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;