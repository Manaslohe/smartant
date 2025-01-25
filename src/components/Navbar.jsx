"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

const Logo = () => (
  <img
    src="/logo.png"
    alt="Smart Ant Logo"
    className="h-8 w-auto md:h-10 transition-transform hover:scale-105"
  />
);

const MenuItem = ({ setActive, active, item, children }) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

const Menu = ({ setActive, children }) => {
  return (
    <nav
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
    </nav>
  );
};

const Navbar = () => {
  const [active, setActive] = useState(null);
  
  const navItems = [
    { 
      name: "Home", 
      submenu: [
        { name: "Home", href: "#home" },
        { name: "Features", href: "#features" },
        { name: "About Us", href: "#about" }
      ]
    },
    { 
      name: "About Us", 
      submenu: [
        { name: "Our Story", href: "#about-us" },
        { name: "Team", href: "#team" }
      ]
    },
    { 
      name: "Projects", 
      submenu: [
        { name: "Our Work", href: "#projects" },
        { name: "Case Studies", href: "#case-studies" }
      ]
    },
    { 
      name: "Contact", 
      submenu: [
        { name: "Get in Touch", href: "#contact" },
        { name: "Support", href: "#support" }
      ]
    }
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:block fixed top-0 w-full z-[100] px-4 py-4">
        <Menu setActive={setActive}>
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3">
              <Logo />
              <span className="text-xl font-eras text-white transition-colors duration-300">
                SmartAnt
              </span>
            </a>
          </div>

          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <MenuItem 
                key={item.name}
                setActive={setActive} 
                active={active} 
                item={item.name}
              >
                <div className="flex flex-col space-y-4 text-sm">
                  {item.submenu.map((subitem) => (
                    <a
                      key={subitem.href}
                      href={subitem.href}
                      className="text-neutral-700 dark:text-neutral-200 hover:text-black"
                    >
                      {subitem.name}
                    </a>
                  ))}
                </div>
              </MenuItem>
            ))}
          </div>
        </Menu>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 w-full z-[100] px-4 py-4">
        <nav className="flex justify-between items-center bg-white/80 dark:bg-zinc-900/80 backdrop-blur-[8px] rounded-[20px] p-4">
          <a href="/" className="flex items-center">
            <Logo />
          </a>
          <div className="flex items-center space-x-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.submenu[0].href}
                className="text-sm text-black dark:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;