import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import { BackgroundLines } from './BackgroundLines'
import ProjectSection from './ProjectSection'
import ContactForm from './ContactForm'
import CustomFooter from './CustomFooter'
import AboutSection from './AboutSection'
import TextRevealSection from './TextRevealSection'
import { FiArrowRight } from 'react-icons/fi'

const Home = () => {
  return (
    <div className="w-full relative">
      <Navbar />
      
      <section className="relative min-h-screen">
        <BackgroundLines 
          svgOptions={{ duration: 10 }}
          className="absolute inset-0"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 container mx-auto px-4 sm:px-6 pt-32 pb-20"
          >
            <div className="flex flex-col items-center justify-center h-[calc(100vh-120px)] space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-center relative"
              >
                <h1 className="font-playfair text-7xl sm:text-8xl md:text-[12rem] font-bold mb-2 text-gray-900 dark:text-white leading-none tracking-tight">
                  Smart<span className="text-blue-700">Ant</span>
                </h1>
                <h2 className="font-raleway text-2xl sm:text-3xl md:text-4xl text-gray-600 dark:text-gray-300 tracking-wide mt-6 mb-8">
                  A Product Management Company
                </h2>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-poppins text-xl sm:text-2xl max-w-3xl text-center px-4 text-gray-700 dark:text-gray-200 leading-relaxed"
              >
                Empowering businesses with cutting-edge web solutions 
                <br className="hidden sm:block" />
                and automation technology
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-12"
              >
                <button className="group relative inline-flex items-center justify-center h-16 sm:h-18 overflow-hidden rounded-full p-[3px] focus:outline-none hover:scale-105 transition-all duration-300">
                  <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3B82F6_0%,#60A5FA_50%,#3B82F6_100%)]" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-12 py-2 text-xl font-medium text-white backdrop-blur-3xl transition-all duration-300 group-hover:bg-opacity-90">
                    Get Started
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        </BackgroundLines>
      </section>
      <AboutSection />
      <div className="relative z-10">
        <ProjectSection />
        <TextRevealSection />
        <ContactForm />
        <CustomFooter />
      </div>
    </div>
  )
}

export default Home
