"use client";
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { HoverBorderGradient } from './HoverBorderGradient';

const ExploreButton = memo(({ onClick }) => {
  return (
    <div className="relative w-full flex flex-col items-center">
      <HoverBorderGradient
        containerClassName="rounded-full p-[3px]"
        as="button"
        onClick={onClick}
        className="bg-[#1d1e1f] text-gray-100 flex items-center justify-center min-w-[180px] py-3.5 hover:bg-[#242526] transition-colors duration-300"
      >
        <span className="font-medium text-lg tracking-wide px-4">Explore</span>
      </HoverBorderGradient>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-6"
      >
        <motion.span 
          className="text-gray-300 text-sm uppercase tracking-widest whitespace-nowrap"
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

ExploreButton.displayName = 'ExploreButton';

export default ExploreButton;