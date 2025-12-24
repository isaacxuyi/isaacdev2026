import React from 'react';
// Import the PARENT component, not the individual pieces
import HeroSection from "@/app/Hero Section/page";
import VideoArea from "@/app/componets/videoArea/page";
import Footer from "@/app/componets/Footer/page";
import Selectedworks from './componets/Selectedworks/page';

const Page = () => {
    return (
        <div>
            {/* This one component now contains your video, header, and hero info */}
            <HeroSection />
            <VideoArea />
            <Selectedworks />
            <Footer />


            {/* Rest of your page content goes here */}
        </div>
    );
};

export default Page;