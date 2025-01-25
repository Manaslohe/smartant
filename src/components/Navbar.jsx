"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from '../context/ThemeContext';

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

// Add this SVG logo component at the top of the file
const TempLogo = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-8 w-8 text-blue-600"
    fill="currentColor"
  >
    <path d="M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2zm0 2.84L20.16 12H18v7h-4v-6H8v6H4v-7H1.84L12 4.84z" />
  </svg>
);

export const MenuItem = ({
  setActive,
  active,
  item,
  children
}) => {
  return (
    (<div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white">
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}>
          {active === item && (
            <div
              className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                // layoutId ensures smooth animation
                layoutId="active"
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl">
                <motion.div
                  // layout ensures smooth animation
                  layout
                  className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>)
  );
};

export const Menu = ({
  setActive,
  children
}) => {
  return (
    (<nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-[20px] border 
        bg-white/80 dark:bg-zinc-900/80 backdrop-blur-[8px]
        border-white/20 dark:border-zinc-800/20
        shadow-lg dark:shadow-zinc-800/20
        flex items-center justify-between px-8 py-4 
        w-full max-w-7xl mx-auto
        transition-all duration-300 ease-in-out"
    >
      {children}
    </nav>)
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src
}) => {
  return (
    (<a href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl" />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </a>)
  );
};

export const HoveredLink = ({
  children,
  ...rest
}) => {
  return (
    (<a
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black ">
      {children}
    </a>)
  );
};

const Navbar = () => {
  const [active, setActive] = useState(null);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    // Add a background blur effect to the container
    <div className="fixed top-0 w-full z-[100] px-4 py-4">
      <Menu setActive={setActive}>
        {/* Logo Section with updated colors */}
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <TempLogo />
            <span className="text-xl font-bold text-zinc-800 dark:text-white transition-colors duration-300">
              Smart Ant
            </span>
          </a>
        </div>

        {/* Navigation Items with theme-aware hover states */}
        <div className="flex items-center space-x-8">
          <MenuItem setActive={setActive} active={active} item="Home">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="#home">Home</HoveredLink>
              <HoveredLink href="#features">Features</HoveredLink>
              <HoveredLink href="#about">About Us</HoveredLink>
            </div>
          </MenuItem>
          
          <MenuItem setActive={setActive} active={active} item="Projects">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="#projects">Our Work</HoveredLink>
              <HoveredLink href="#case-studies">Case Studies</HoveredLink>
              <HoveredLink href="#testimonials">Testimonials</HoveredLink>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="#web-dev">Web Development</HoveredLink>
              <HoveredLink href="#mobile-dev">Mobile Apps</HoveredLink>
              <HoveredLink href="#automation">Automation</HoveredLink>
              <HoveredLink href="#consulting">Consulting</HoveredLink>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Contact">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="#contact">Get in Touch</HoveredLink>
              <HoveredLink href="#support">Support</HoveredLink>
            </div>
          </MenuItem>

          {/* Theme Toggle Button with glass effect */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full 
              bg-zinc-100/50 dark:bg-zinc-800/50
              hover:bg-zinc-200/50 dark:hover:bg-zinc-700/50
              backdrop-blur-[4px]
              transition-all duration-300 ease-in-out
              transform hover:scale-110"
          >
            <motion.div
              initial={false}
              animate={{ rotate: theme === 'light' ? 0 : 180 }}
              transition={{ duration: 0.3 }}
            >
              {theme === 'light' ? (
                <FiMoon className="w-5 h-5 text-zinc-800 dark:text-white" />
              ) : (
                <FiSun className="w-5 h-5 text-zinc-800 dark:text-white" />
              )}
            </motion.div>
          </button>
        </div>
      </Menu>
    </div>
  );
};

export default Navbar;
