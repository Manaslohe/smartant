import React from 'react';
import { motion } from 'framer-motion';
import { LampContainer } from './ui/lamp';
import { HoverEffect } from './ui/card-hover-effect';

const AboutSection = () => {
  const features = [
    {
      title: "Project Management",
      description: "10 years of comprehensive experience across diverse sectors",
      link: "#",
      icon: "📊"
    },
    {
      title: "Impact Driven",
      description: "From women's education to cutting-edge tech solutions",
      link: "#",
      icon: "🎯"
    },
    {
      title: "Innovation",
      description: "Leveraging latest technology to solve complex challenges",
      link: "#",
      icon: "💡"
    },
    {
      title: "Process Excellence",
      description: "Optimizing systems for organizational success",
      link: "#",
      icon: "⚡"
    }
  ];

  return (
    <section id="about" className="w-full bg-[#171818] relative z-40 py-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-[#171818]"
      />

      {/* Content container */}
      <div className="relative z-10 w-full min-h-screen flex flex-col justify-center">
        <LampContainer className="relative pt-72">
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 pt-40 bg-gradient-to-r from-gray-100 to-gray-200 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            About SmartAnt
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 max-w-6xl mx-auto px-4"
          >
            <div className="text-center space-y-12">
              <p className="text-xl md:text-2xl text-gray-300/90 max-w-3xl mx-auto leading-relaxed">
                At SmartAnt, we bring a decade of expertise in transforming organizations through innovative project management and technology solutions.
              </p>
              
              <div className="max-w-6xl mx-auto">
                <HoverEffect items={features} className="gap-6 md:gap-8" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="relative group"
              >
                <div className="p-8 lg:p-10 rounded-2xl backdrop-blur-md bg-white/[0.03] border border-white/[0.08] relative overflow-hidden max-w-4xl mx-auto">
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="text-xl md:text-2xl lg:text-[1.7rem] text-gray-200 leading-relaxed tracking-wide font-light relative z-10"
                  >
                    Our journey has been one of{' '}
                    <span className="text-[#00c8e8] font-normal">consistent growth</span> and{' '}
                    <span className="text-[#00c8e8] font-normal">adaptation</span>, driven by a passion for{' '}
                    <span className="text-[#00c8e8] font-normal">improving systems</span> and ensuring communities thrive through{' '}
                    <span className="text-[#00c8e8] font-normal">innovative solutions</span>.
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </LampContainer>
      </div>

      {/* Update to match Home background */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-[#171818]" />
    </section>
  );
};

export default AboutSection;