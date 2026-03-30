"use client";
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import emailjs from '@emailjs/browser';
import Header from "@/app/Hero Section/Header/page";
import Footer from "@/app/components/Footer/page";

const ContactAndProjects = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ message: '' });
  
  // Form submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLFormElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP Entrance Animations
    const tl = gsap.timeline();
    if (leftColRef.current) {
      tl.fromTo(leftColRef.current.children, 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" }
      );
    }
    if (rightColRef.current) {
      tl.fromTo(rightColRef.current.children, 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" },
        "-=0.6" 
      );
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error dynamically as user types
    if (name === 'message' && value.length >= 10) {
        setErrors({ message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (formData.message.length < 10) {
        setErrors({ message: 'Please provide more details about your project (at least 10 characters)' });
        return;
    }

    setIsSubmitting(true);

    // Generate current time for your {{time}} template variable
    const currentTime = new Date().toLocaleString();

    try {
      await emailjs.send(
        'service_kphbr0n',
        'template_rzepd5l',
        {
          name: formData.name,       // Matches {{name}}
          time: currentTime,         // Matches {{time}}
          message: formData.message, // Matches {{message}}
          email: formData.email,     // Use this for the "Reply-To" setting in EmailJS
        },
        '5PLXW0OP8qOux0pkt'
      );

      // Reset form on success
      setFormData({ name: '', email: '', message: '' });
      setIsSuccess(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
      
    } catch (error) {
      console.error('FAILED...', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('uhuisaac1@gmail.com'); 
    alert("Email copied to clipboard!");
  };

  // Content Data
  const projects = [
    {
      title: "Photoshoot Rome",
      subtitle: "Travel Photography Platform",
      description: "Rome-focused platform connecting tourists with professional photographers through engaging visuals and streamlined booking process",
      image: "/path-to-your-photoshoot-image.jpg" // Replace with actual image path
    },
    {
      title: "Sherd",
      subtitle: "Historical Adventure Mobile App",
      description: "Mobile app that transforms real city locations into interactive historical experiences through GPS-guided missions and gamification",
      image: "/path-to-your-sherd-image.jpg" // Replace with actual image path
    }
  ];

  const socialLinks = ['X (Twitter)', 'Instagram', 'Linkedin', 'Dribbble', 'Behance'];

  return (
    <main ref={containerRef} className="w-full bg-white">
      <Header finishedLoading={true} />
      
      {/* --- GET IN TOUCH SECTION --- */}
      <section className='pt-32 pb-20 px-6 flex items-center justify-center w-full'>
        <div className='w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24'>
          
          {/* Left Column: Text & Socials */}
          <div ref={leftColRef} className='flex flex-col items-start'>
            <h1 className='text-5xl md:text-6xl font-semibold mb-4 text-black tracking-tight'>
              Get in touch
            </h1>
            <h2 className='text-3xl md:text-4xl text-gray-500 mb-8'>
              Have a project in mind?
            </h2>
            <p className='text-gray-600 text-[17px] mb-8 max-w-md leading-relaxed'>
              I'd love to hear about your project and explore how we can work together. Whether you need a complete product design, interface improvements, or strategic design consultation, let's discuss how to bring your vision to life.
            </p>
            <button 
              onClick={copyEmailToClipboard} 
              type="button" 
              className='bg-[#f4f4f5] hover:bg-[#e4e4e7] text-gray-800 px-6 py-3 rounded-full font-medium transition-colors duration-300 mb-12'
            >
              Copy my email
            </button>
            <p className='text-gray-600 text-[17px] mb-8 max-w-md leading-relaxed'>
              Follow my work and connect with me on these platforms where I share design insights, project updates, and industry thoughts.
            </p>
            <ul className="flex flex-col gap-4 w-full">
              {socialLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-600 hover:text-black text-[17px] transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Contact Form */}
          <form ref={rightColRef} onSubmit={handleSubmit} className='flex flex-col gap-10 lg:mt-8 w-full'>
            <div className='w-full'>
              <input 
                type='text' 
                name='name' 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="What's your name?" 
                className='w-full pb-3 bg-transparent border-b border-gray-300 focus:outline-none focus:border-black transition-colors duration-300 placeholder:text-gray-500 text-[17px]' 
                required 
                disabled={isSubmitting}
              />
            </div>
            <div className='w-full'>
              <input 
                type='email' 
                name='email' 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="What's your email?" 
                className='w-full pb-3 bg-transparent border-b border-gray-300 focus:outline-none focus:border-black transition-colors duration-300 placeholder:text-gray-500 text-[17px]' 
                required 
                disabled={isSubmitting}
              />
            </div>
            <div className='w-full flex flex-col'>
              <textarea 
                name='message' 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Tell me more about the project" 
                rows={5} 
                className={`w-full p-4 bg-transparent border focus:outline-none transition-colors duration-300 placeholder:text-gray-500 text-[17px] resize-none ${errors.message ? 'border-red-400' : 'border-gray-200 hover:border-gray-300 focus:border-black'}`} 
                required 
                disabled={isSubmitting} 
              />
              {errors.message && <span className="text-red-500 text-sm mt-2">{errors.message}</span>}
            </div>
            
            <div className="flex flex-col gap-3 self-start mt-2">
              <button 
                type='submit' 
                disabled={isSubmitting} 
                className='bg-[#0a0a0a] hover:bg-black disabled:bg-gray-400 text-white px-8 py-3.5 rounded-full font-medium transition-colors duration-300'
              >
                {isSubmitting ? 'Sending...' : 'Send message'}
              </button>
              
              {isSuccess && (
                <span className="text-green-600 font-medium text-sm">
                  Message sent successfully! I'll get back to you soon.
                </span>
              )}
            </div>
          </form>

        </div>
      </section>

      {/* --- FEATURED PROJECTS SECTION --- */}
      <section ref={projectsRef} className='py-24 px-6 w-full flex flex-col items-center justify-center bg-white'>
        <div className='w-full max-w-6xl flex flex-col items-center'>
            <div className="text-center mb-16 max-w-2xl">
                <h2 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight text-black">
                  Featured Projects
                </h2>
                <p className="text-xl text-gray-500 leading-relaxed">
                  Strategic design solutions that solve real problems and deliver measurable results
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 lg:gap-12 mb-16 w-full">
                {projects.map((project, index) => (
                    <div key={index} className="flex flex-col group cursor-pointer w-full">
                        <div className="w-full aspect-[4/3] bg-gray-100 rounded-3xl overflow-hidden mb-8 relative">
                            {/* Remember to swap these with Next.js <Image /> tags if you are using them! */}
                            <img 
                              src={project.image} 
                              alt={project.title} 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                            />
                        </div>
                        <div className="flex flex-col px-2">
                            <h3 className="text-3xl font-semibold mb-2 text-black">{project.title}</h3>
                            <h4 className="text-[17px] font-medium text-gray-500 mb-4">{project.subtitle}</h4>
                            <p className="text-gray-500 text-[16px] leading-relaxed">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className='bg-[#f4f4f5] hover:bg-[#e4e4e7] text-black px-8 py-3.5 rounded-full font-medium transition-colors duration-300'>
              View all works
            </button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactAndProjects;