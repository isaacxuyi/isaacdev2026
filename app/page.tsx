"use client";
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import HeroSection from "@/app/Hero Section/page";
import VideoArea from "@/app/components/videoArea/page";
import Footer from "@/app/components/Footer/page";
import Selectedworks from './components/Selectedworks/page';
import Preloader from './components/Preloader';

const Page = () => {
    const [isLoading, setIsLoading] = useState(true);

    // Prevent scrolling while loading
    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isLoading]);

    return (
        <main>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <Preloader key="loader" setLoading={setIsLoading} />
                )}
            </AnimatePresence>

            {/* Main Content */}
            {/* We pass !isLoading so components know when to start animating */}
            <div className="relative">
                <HeroSection finishedLoading={!isLoading} />
                <VideoArea />
                <Selectedworks />
                <Footer />
            </div>
        </main>
    );
};

export default Page;