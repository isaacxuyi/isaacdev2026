"use client";
import React from 'react';
import Hero from "@/app/Hero Section/Hero/page";
import Header from "@/app/Hero Section/Header/page";
import './HeroSection.css';
// import Footer from "../components/Footer/page"; // Removed if not used inside HeroSection specifically

interface HeroSectionProps {
    finishedLoading: boolean;
}

export default function HeroSection({ finishedLoading }: HeroSectionProps) {
    return ( 
        <section className="hero-layout-wrapper">
            {/* The video sits here, behind the children */}
            <video autoPlay muted loop playsInline className="background-video">
                <source src="Assets/videos/Clip.mp4" type="video/mp4" />
            </video>

            {/* The components sit on top, receiving the loading state */}
            <Header finishedLoading={finishedLoading} />
            <Hero finishedLoading={finishedLoading} />
        </section>
    );
}