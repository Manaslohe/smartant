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
      backgroundColor: 'rgba(0, 120, 255, 0.15)' 
    }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`px-4 py-2 rounded-lg transition-all duration-300 
      font-medium tracking-wider
      ${isActive 
        ? 'text-[#00a5ff] bg-[#0066cc]/10 shadow-inner shadow-[#0066cc]/20' 
        : 'text-gray-100 hover:text-[#00a5ff]'}`}
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
        className="hidden md:block fixed top-0 w-full z-[100] px-6 py-5"
      >
        <div className="relative rounded-[22px] border 
          bg-gradient-to-r from-[#141516]/70 to-[#1f2123]/70 backdrop-blur-xl
          border-[#303234]/50
          shadow-lg shadow-black/30
          flex items-center justify-between px-8 py-4 
          w-full max-w-7xl mx-auto
          transition-all duration-300 ease-in-out
          hover:shadow-[#00a5ff]/10 hover:border-[#00a5ff]/20"
        >
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3 group">
              <Logo />
              <span className="text-xl font-eras text-gray-100 transition-colors duration-300 group-hover:text-[#00a5ff]">
                SmartAnt
              </span>
            </a>
          </div>

          <div className="flex items-center space-x-3">
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
        <div className="flex justify-between items-center 
          bg-gradient-to-r from-[#141516]/70 to-[#1f2123]/70 backdrop-blur-xl
          border border-[#303234]/50
          rounded-[18px] p-4 shadow-lg shadow-black/30">
          <div className="flex items-center space-x-3">
            <Logo />
            <span className="text-xl font-eras text-gray-100">
              SmartAnt
            </span>
          </div>
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            className="text-gray-200 hover:text-[#00a5ff] bg-[#1a1e2d]/80 p-2 rounded-lg
              transition-colors duration-200"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute top-20 left-4 right-4 
                bg-gradient-to-b from-[#1f2123]/90 to-[#141516]/90 backdrop-blur-xl
                border border-[#303234]/50
                rounded-[18px] shadow-xl shadow-[#00a5ff]/5
                p-6 flex flex-col space-y-4"
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