"use client";
import React from 'react';
import { motion } from 'framer-motion';

const CustomFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-[95%] md:w-[90%] mx-auto mb-4 rounded-[20px] overflow-hidden 
        bg-black/90 backdrop-blur-[30px] backdrop-saturate-[200%] backdrop-brightness-[1.1]
        border border-white/10
        shadow-lg shadow-black/10"
    >
      <div className="container mx-auto px-2 sm:px-8 py-4">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-2 sm:gap-4 mb-4">
          {/* Logo Section */}
          <div className="flex items-center justify-center">
            <motion.img
              whileHover={{ scale: 1.1 }}
              src="/logo.png"
              alt="Smart Ant Logo"
              className="h-12 sm:h-16 w-auto mr-2 sm:mr-4 drop-shadow-lg"
            />
            <span 
              className="text-2xl sm:text-3xl md:text-4xl tracking-wide text-black dark:text-white"
              style={{ 
                fontFamily: 'Eras Light ITC',
                letterSpacing: '0.05em',
                fontWeight: '300',
                fontStyle: 'italic'
              }}
            >
              SmartAnt
            </span>
          </div>

          {/* Navigation Links - Modified for mobile */}
          <nav className="flex gap-3 sm:gap-6 justify-center">
            {['About', 'Projects', 'Contact', 'Privacy'].map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                whileHover={{
                  scale: 1.05
                }}
                className="text-xs sm:text-sm md:text-base transition-all duration-300 px-1 sm:px-2 py-1 rounded-md 
                  text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white whitespace-nowrap"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '500'
                }}
              >
                {link}
              </motion.a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px w-full my-3 bg-black/[0.2] dark:bg-white/[0.2]"
          animate={{
            scaleX: [0, 1],
            opacity: [0.5, 1]
          }}
          transition={{
            duration: 1,
            ease: "easeInOut"
          }}
        />

        {/* Copyright */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span 
            className="text-sm md:text-base tracking-wide text-neutral-700 dark:text-neutral-200"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '400'
            }}
          >
            © {currentYear} Smart Ant™. All rights reserved.
          </span>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default CustomFooter;