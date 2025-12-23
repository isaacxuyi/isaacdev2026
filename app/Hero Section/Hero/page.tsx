import React from 'react';

const Hero = () => {
    return (
        <div className=''>
            <div className='flex justify-center flex-col'>
            <p className='text-[6rem] w-[100%] text-center leading-1.28 font-bold max-w-2xl mx-auto hero-title'>
                Crafted Digital
                Experiences
            </p>
                <p className='text-[1.3rem] w-[100%] text-center leading-1.28 max-w-2/3xl mx-auto px-5 lg:max-w-3xl'>
                    Hey, I'm Luca, a Senior UX/UI Designer crafting digital experiences and solving complex problems for over a decade.
                    Specializing in Web Applications, SaaS Platforms, and Mobile Experiences
                </p>

                <div className='flex justify-center flex-row gap-5 pt-3 pb-5'>
                    <div className='bg-gray-200 accent-black px-[32px] py-[16px] rounded-4xl font-semibold hover:bg-black
                     transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-gray-500'>See my work</div>

                    <div className=' bg-gray-200 accent-black px-[32px] py-[16px]  rounded-4xl font-semibold hover:bg-gray-500
                     transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-gray-500'>Send me an email</div>
                </div>



            </div>
        </div>
    );
};

export default Hero;