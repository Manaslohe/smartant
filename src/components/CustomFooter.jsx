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
        bg-gradient-to-r from-[#1a1b1c]/95 to-[#1e1f20]/95 backdrop-blur-[30px]
        border border-[#252628]/50
        shadow-lg shadow-black/20"
    >
      <div className="container mx-auto px-2 sm:px-8 py-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-4">
          {/* Logo Section */}
          <div className="flex items-center justify-center">
            <motion.img
              whileHover={{ scale: 1.1 }}
              src="/logo.png"
              alt="Smart Ant Logo"
              className="h-12 sm:h-14 w-auto mr-2 sm:mr-4 drop-shadow-lg"
            />
            <span 
              className="text-2xl sm:text-3xl tracking-wide bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
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

          {/* Navigation Links */}
          <nav className="flex gap-4 sm:gap-7 justify-center">
            {['About', 'Projects', 'Approach', 'Contact'].map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                whileHover={{
                  scale: 1.05,
                  color: "#00c8e8"
                }}
                className="text-sm sm:text-base transition-all duration-300 px-1 sm:px-2 py-1 rounded-md 
                  text-gray-300 hover:text-[#00c8e8] whitespace-nowrap"
                style={{
                  fontFamily: 'Inter, sans-serif',
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
          className="h-px w-full my-3 bg-gradient-to-r from-transparent via-gray-700/50 to-transparent"
          animate={{
            scaleX: [0, 1],
            opacity: [0.5, 1]
          }}
          transition={{
            duration: 1,
            ease: "easeInOut"
          }}
        />

        {/* Contact Info & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <div className="flex items-center space-x-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#00c8e8]"></div>
              <span className="text-sm text-gray-400">+91 7391052849</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#00c8e8]"></div>
              <span className="text-sm text-gray-400">smartantpmc@gmail.com</span>
            </div>
          </div>
          
          <motion.div
            className="text-center mt-4 md:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span 
              className="text-sm tracking-wide text-gray-400"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: '400'
              }}
            >
              © {currentYear} Smart Ant™. All rights reserved.
            </span>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default CustomFooter;