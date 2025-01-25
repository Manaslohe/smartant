import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import { BackgroundLines } from './BackgroundLines'
import ProjectSection from './ProjectSection'
import TestimonialSection from './TestimonialSection'
import ContactForm from './ContactForm'

const Home = () => {
  return (
    <div className="w-full">
      <Navbar />
      
    {/* Hero Section with BackgroundLines */}
        <section className="relative min-h-screen">
          <BackgroundLines 
            svgOptions={{ duration: 10 }}
            className="absolute inset-0 w-full h-full"
          >
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative z-10 container mx-auto px-6 pt-32 pb-20"
            >
            <div className="flex flex-col items-center justify-center h-[calc(100vh-120px)]">
              <h1 className="text-8xl font-bold mb-6 text-gray-900 dark:text-white">
                Smart Ant
              </h1>
              <p className="text-xl mb-8 text-center max-w-2xl text-gray-700 dark:text-gray-200">
                Empowering businesses with cutting-edge web solutions and automation technology
              </p>
              <button className="relative inline-flex h-16 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-lg font-medium text-white backdrop-blur-3xl">
                Get Started
                </span>
              </button>
            </div>
            </motion.div>
          </BackgroundLines>
        </section>

        {/* Updated Project Section */}
        <ProjectSection />
      
      <TestimonialSection />

      {/* Contact Section with New Form */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
