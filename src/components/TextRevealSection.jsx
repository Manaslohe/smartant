"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "./text-reveal-card";

const TextRevealSection = () => {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["20% 0%", "160% start"] // Delayed start, longer scroll distance
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 30,
    damping: 15, // Reduced damping for faster completion
    restDelta: 0.001
  });

  const overlayOpacity = useTransform(
    smoothProgress,
    [0.4, 0.8], // Compressed transition window
    [0, 1]
  );

  const textColor = useTransform(
    smoothProgress,
    [0.3, 0.5, 0.6], // Faster color transition
    ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(0, 0, 0)"]
  );

  const whyChooseUsItems = [
    {
      title: "Expertise",
      description: "Over a decade of experience delivering innovative and practical solutions across multiple domains",
      gradient: "from-blue-500/30 via-blue-400/20 to-cyan-400/30",
      borderGradient: "from-blue-400 via-blue-500 to-cyan-400",
      translateY: useTransform(smoothProgress, [0, 0.8], [0, -20])
    },
    {
      title: "Tailored Solutions",
      description: "Custom-crafted solutions perfectly aligned with your unique objectives and business challenges",
      gradient: "from-purple-400/20 to-pink-400/20",
      borderGradient: "from-purple-400 to-pink-400",
      translateY: useTransform(smoothProgress, [0, 0.8], [0, -20])
    },
    {
      title: "End-to-End Support",
      description: "Comprehensive support throughout your project lifecycle, from initial concept to deployment",
      gradient: "from-amber-400/20 to-orange-400/20",
      borderGradient: "from-amber-400 to-orange-400",
      translateY: useTransform(smoothProgress, [0, 0.8], [0, -20])
    },
    {
      title: "Quality First",
      description: "Unwavering commitment to delivering solutions that exceed industry standards",
      gradient: "from-green-400/20 to-emerald-400/20",
      borderGradient: "from-green-400 to-emerald-400",
      translateY: useTransform(smoothProgress, [0, 0.8], [0, -20])
    }
  ];

  return (
    <>
      <motion.section 
        ref={sectionRef}
        className="relative bg-black py-10 md:py-20 transform-gpu overflow-hidden"
      >
        <motion.div 
          className="absolute inset-0 bg-white pointer-events-none"
          style={{ opacity: overlayOpacity }}
        />
        
        <motion.div 
          className="absolute inset-0 opacity-40"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(25, 25, 25, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%)"
          }}
        />
        
        <div className="container mx-auto relative z-10">
          {/* Why Choose Us Section */}
          <div className="mb-20 px-4 md:px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold text-center text-white mb-4 tracking-tight"
            >
              Why Choose Us?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-center max-w-2xl mx-auto mb-16 text-lg"
            >
              We bring expertise and innovation to every project
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {whyChooseUsItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  style={{ y: item.translateY }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.borderGradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />
                  <div className={`relative h-full bg-gradient-to-br ${item.gradient} backdrop-blur-sm rounded-2xl p-[1px] hover:scale-[1.03] transition-all duration-300 ease-out`}>
                    <div className="h-full bg-slate-950/90 rounded-2xl p-8 backdrop-blur-sm">
                      <h3 className="text-xl font-semibold text-white mb-4 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                        {item.title}
                      </h3>
                      <p className="text-slate-300 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Existing Text Reveal Content */}
          <div className="mb-6 md:mb-20 px-4 md:px-0">
            <motion.div 
              style={{ 
                opacity: useTransform(smoothProgress, [0.3, 0.5], [1, 0])
              }}
              className="flex items-center justify-center h-[24rem] sm:h-[24rem] md:h-[40rem] rounded-xl md:rounded-2xl w-full transform-gpu pb-60"
            >
              <TextRevealCard 
                text="Building Digital Excellence" 
                revealText="Crafting Future Solutions"
                className="w-[100%] sm:w-[90vw] md:w-[60rem] max-w-[90vw]"
                style={{ willChange: "transform" }}
              >
                <motion.div style={{ color: textColor }}>
                  <TextRevealCardTitle className="text-xl sm:text-2xl md:text-3xl px-4 md:px-0">
                    Transform Your Vision Into Reality
                  </TextRevealCardTitle>
                  <TextRevealCardDescription className="max-w-[85vw] sm:max-w-[90vw] md:max-w-2xl text-sm sm:text-base md:text-lg px-4 md:px-0">
                    From concept to deployment, we create innovative digital solutions 
                    that drive business growth. Our expertise in modern web technologies 
                    ensures your project stands out in today's competitive landscape.
                  </TextRevealCardDescription>
                </motion.div>
              </TextRevealCard>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default TextRevealSection;
