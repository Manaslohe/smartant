"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "./text-reveal-card";

const TextRevealSection = () => {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["0% 0%", "140% start"] // Increased to 140% for longer transition
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 25, // Reduced for smoother transition
    damping: 18,
    restDelta: 0.001
  });

  const overlayOpacity = useTransform(
    smoothProgress,
    [0.2, 0.9], // Adjusted timing
    [0, 1]
  );

  const textColor = useTransform(
    smoothProgress,
    [0, 0.2, 0.4], // Earlier text color change
    ["rgb(255, 255, 255)", "rgb(255, 255, 255)", "rgb(0, 0, 0)"]
  );

  return (
    <>
      <motion.section 
        ref={sectionRef}
        className="relative bg-black py-10 md:py-20 transform-gpu"
      >
        <motion.div 
          className="absolute inset-0 bg-white pointer-events-none"
          style={{ opacity: overlayOpacity }}
        />
        
        <div className="container mx-auto relative z-10">
          <div className="mt-8 md:mt-32 mb-6 md:mb-20 px-4 md:px-0">
            <motion.div 
              style={{ 
                opacity: useTransform(smoothProgress, [0, 0.3], [1, 0])
              }}
              className="flex items-center justify-center h-[24rem] sm:h-[28rem] md:h-[40rem] rounded-xl md:rounded-2xl w-full transform-gpu"
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
