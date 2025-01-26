"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

const Logo = () => (
  <motion.img
    src="/logo.png"
    alt="Smart Ant Logo"
    initial={{ scale: 1 }}
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="h-8 w-auto md:h-10"
  />
);

const NavItem = ({ name, href, onClick, isActive }) => (
  <motion.button
    initial={{ scale: 1, backgroundColor: 'transparent' }}
    whileHover={{ 
      scale: 1.05,
      backgroundColor: 'rgba(0, 200, 232, 0.2)' 
    }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`px-3 py-2 rounded-lg transition-all duration-300 
      font-medium tracking-wider
      ${isActive 
        ? 'text-[#00c8e8] bg-[#00c8e8]/20' 
        : 'text-gray-200 hover:text-[#00c8e8]'}`}
  >
    {name}
  </motion.button>
);

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  const navItems = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" }
  ];

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    setIsVisible(latest <= prev || latest < 100);
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => 
        document.getElementById(item.href)
      ).filter(Boolean);

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let section of sections) {
        if (section.offsetTop <= scrollPosition && 
            section.offsetTop + section.offsetHeight > scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setMobileMenuOpen(false);
      setActiveSection(id);
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ 
          y: isVisible ? 0 : -100,
          transition: { 
            type: "spring", 
            stiffness: 300, 
            damping: 30 
          }
        }}
        className="hidden md:block fixed top-0 w-full z-[100] px-4 py-4"
      >
        <div className="relative rounded-[20px] border 
          bg-zinc-800/90 backdrop-blur-[12px]
          border-zinc-700/30
          shadow-lg shadow-zinc-900/30
          flex items-center justify-between px-8 py-4 
          w-full max-w-7xl mx-auto
          transition-all duration-300 ease-in-out"
        >
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3">
              <Logo />
              <span className="text-xl font-eras text-gray-200 transition-colors duration-300">
                SmartAnt
              </span>
            </a>
          </div>

          <div className="flex items-center space-x-2">
            {navItems.map((item) => (
              <NavItem 
                key={item.name} 
                {...item} 
                isActive={activeSection === item.href}
                onClick={() => scrollToSection(item.href)} 
              />
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ 
          y: isVisible ? 0 : -100,
          transition: { 
            type: "spring", 
            stiffness: 300, 
            damping: 30 
          }
        }}
        className="md:hidden fixed top-0 w-full z-[100] px-4 py-4"
      >
        <div className="flex justify-between items-center bg-zinc-800/90 backdrop-blur-[12px] rounded-[20px] p-4">
          <div className="flex items-center space-x-3">
            <Logo />
            <span className="text-xl font-eras text-gray-200">
              SmartAnt
            </span>
          </div>
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            className="text-gray-200 hover:text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="absolute top-20 left-4 right-4 bg-zinc-800/90 
                backdrop-blur-[12px] rounded-[20px] shadow-lg p-6 flex flex-col space-y-4"
            >
              {navItems.map((item) => (
                <NavItem 
                  key={item.name} 
                  {...item} 
                  isActive={activeSection === item.href}
                  onClick={() => scrollToSection(item.href)} 
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;