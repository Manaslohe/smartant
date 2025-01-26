"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { TypewriterEffectSmooth } from './ui/type-writter';
import ExploreButton from './ui/ExploreButton';
import Navbar from './Navbar';
import { BackgroundLines } from './BackgroundLines';
import ProjectSection from './ProjectSection';
import ContactForm from './ContactForm';
import CustomFooter from './CustomFooter';
import AboutSection from './AboutSection';
import TextRevealSection from './TextRevealSection';
import Approach from './Approach';
import BackToTop from './ui/BackToTop';

const Home = () => {
  const words = [
    { text: "A", className: "text-gray-300 font-medium" },
    { text: "Project", className: "text-gray-300 font-medium ml-3" },
    { text: "Management", className: "text-gray-300 font-medium ml-3" },
    { text: "Company", className: "text-[#00c8e8] font-medium ml-3" }
  ];

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full relative">
      <Navbar />
      
      <section id="home" className="relative min-h-[100svh]">
        <BackgroundLines 
          svgOptions={{ duration: 10 }}
          className="absolute inset-0"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 container mx-auto px-4 sm:px-6 pt-16 sm:pt-32 pb-12 sm:pb-20"
          >
            <div className="flex flex-col items-center justify-center min-h-[calc(100svh-64px)] space-y-8 sm:space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-center relative w-full"
              >
                <h1 className="font-playfair text-6xl sm:text-7xl md:text-8xl lg:text-[12rem] font-bold mb-4 sm:mb-2 text-gray-900 dark:text-white leading-none tracking-tight">
                  Smart<span className="text-[#00c8e8]">Ant</span>
                </h1>
                <div className="mt-6 sm:mt-8 mb-8 sm:mb-10">
                  <TypewriterEffectSmooth 
                    words={words}
                    className="font-inter tracking-wide text-lg sm:text-xl md:text-2xl lg:text-3xl"
                  />
                </div>
              </motion.div>
              <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 sm:mt-12">
                <ExploreButton onClick={scrollToAbout} />
              </motion.div>
            </div>
          </motion.div>
        </BackgroundLines>
      </section>
     
      <AboutSection />
      <Approach />
      <div className="relative z-10">
        <section id="projects">
          <ProjectSection />
        </section>
        <section id="features">
        <TextRevealSection />
      </section>
        <section id="contact">
          <ContactForm />
        </section>
        <CustomFooter />
      </div>
      <BackToTop />
    </div>
  );
};

export default Home;
