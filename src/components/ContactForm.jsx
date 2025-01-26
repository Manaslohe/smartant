"use client";
import React, { useRef } from 'react';
import { Phone, Mail, ExternalLink } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const ContactFormAndInfo = () => {
  const formRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: formRef,
    offset: ["start end", "start center"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 30,
    damping: 20,
    restDelta: 0.001
  });

  const formOpacity = useTransform(
    smoothProgress,
    [0, 1],
    [0, 1]
  );

  const formScale = useTransform(
    smoothProgress,
    [0, 1],
    [0.8, 1]
  );

  return (
    <motion.div 
      ref={formRef}
      style={{ 
        opacity: formOpacity,
        scale: formScale
      }}
      className="w-full min-h-[80vh] flex flex-col items-center justify-center py-12 px-4 bg-white"
    >
      <motion.h1 
        className="text-5xl md:text-6xl font-bold mb-8 pt-20 text-center text-black"
      >
        Let's Connect
        <motion.span 
          className="block text-2xl md:text-3xl mt-2 font-normal text-gray-600"
        >
          Get in touch with our team
        </motion.span>
      </motion.h1>

      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl transform hover:scale-[1.02] transition-all duration-300 ease-in-out">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">Get in Touch</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="bg-gray-50 border border-gray-200 rounded-xl p-4 w-full focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all duration-300 hover:shadow-md"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="bg-gray-50 border border-gray-200 rounded-xl p-4 w-full focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all duration-300 hover:shadow-md"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-50 border border-gray-200 rounded-xl p-4 w-full focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all duration-300 hover:shadow-md"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="bg-gray-50 border border-gray-200 rounded-xl p-4 w-full focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all duration-300 hover:shadow-md resize-none"
              ></textarea>
              <button
                type="submit"
                className="bg-black text-white rounded-xl py-4 px-8 font-medium hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 hover:shadow-lg w-full md:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-black text-white p-8 rounded-2xl shadow-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-gray-400 mb-8">
                Fill up the form and our Team will get back to you within 24 hours.
              </p>

              <div className="grid gap-8">
                <div className="flex items-center space-x-4 transform hover:translate-x-2 transition-transform duration-300">
                  <Phone size={24} className="text-gray-400" />
                  <div>
                    <h3 className="font-medium text-lg">Phone</h3>
                    <p className="text-gray-400">+1(424) 535 3523</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 transform hover:translate-x-2 transition-transform duration-300">
                  <Mail size={24} className="text-gray-400" />
                  <div>
                    <h3 className="font-medium text-lg">Email</h3>
                    <p className="text-gray-400">hello@mail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 transform hover:translate-x-2 transition-transform duration-300">
                  <ExternalLink size={24} className="text-gray-400" />
                  <div>
                    <h3 className="font-medium text-lg">Support Ticket</h3>
                    <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                      Open Support Ticket
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex justify-center space-x-6">
                {['twitter', 'linkedin', 'dribbble', 'facebook'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-gray-400 hover:text-white transform hover:scale-125 transition-all duration-300"
                  >
                    <i className={`fab fa-${social} text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactFormAndInfo;