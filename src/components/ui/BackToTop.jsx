"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowUpCircle } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 
            bg-zinc-800/90 backdrop-blur-[12px] 
            border border-zinc-700/30
            text-[#00c8e8] 
            p-3 rounded-full 
            shadow-lg shadow-zinc-900/30
            hover:bg-zinc-700/90 
            transition-all duration-300 
            cursor-pointer group"
          whileHover={{ 
            scale: 1.1,
            backgroundColor: 'rgba(0, 200, 232, 0.2)'
          }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUpCircle 
            size={24} 
            className="group-hover:animate-pulse" 
            strokeWidth={1.5}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;