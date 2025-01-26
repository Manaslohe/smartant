"use client";
import React, { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronsDown } from 'react-icons/fi';
import { HoverBorderGradient } from './HoverBorderGradient';

const ExploreButton = memo(({ onClick }) => {
  return (
    <div className="relative w-full flex flex-col items-center">
      <HoverBorderGradient
        containerClassName="rounded-full p-[3px]"
        as="button"
        onClick={onClick}
        className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center space-x-4 min-w-[200px] py-4"
      >
        <span className="font-medium text-xl">Explore</span>
        <AnimatedArrows />
      </HoverBorderGradient>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-6"
      >
        <motion.span 
          className="text-black/80 dark:text-white/80 text-sm uppercase tracking-widest whitespace-nowrap"
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Scroll Down
        </motion.span>
      </motion.div>
    </div>
  );
});

// Removed ExploreIcon component as it's no longer needed

// Updated AnimatedArrows for better visibility with larger button
const AnimatedArrows = memo(() => (
  <div className="relative w-7 h-7 overflow-hidden">
    <motion.div
      animate={{
        y: [0, 6, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        repeatDelay: 0.5,
      }}
    >
      {/* Increased arrow size to match new button scale */}
      <FiChevronsDown className="w-6 h-6 text-black dark:text-white" />
    </motion.div>
  </div>
));

ExploreButton.displayName = 'ExploreButton';
AnimatedArrows.displayName = 'AnimatedArrows';

export default ExploreButton;