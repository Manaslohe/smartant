"use client";
import React, { useRef, useState } from 'react';
import { Phone, Mail, ExternalLink, Copy, Check } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";

const ContactFormAndInfo = () => {
  const formRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: formRef,
    offset: ["start end", "center center"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 15,
    restDelta: 0.001
  });

  const formOpacity = useTransform(
    smoothProgress,
    [0, 0.5],
    [0, 1]
  );

  const formY = useTransform(
    smoothProgress,
    [0, 0.5],
    [50, 0]
  );

  const headingScale = useTransform(
    smoothProgress,
    [0.1, 0.3],
    [0.9, 1]
  );

  const cardLeftX = useTransform(
    smoothProgress,
    [0.2, 0.5],
    [-50, 0]
  );

  const cardRightX = useTransform(
    smoothProgress,
    [0.2, 0.5],
    [50, 0]
  );

  const [copiedText, setCopiedText] = useState(null);

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopiedText(label);
        setTimeout(() => setCopiedText(null), 2000);
      })
      .catch((err) => console.error('Failed to copy: ', err));
  };

  return (
    <motion.div 
      ref={formRef}
      style={{ 
        opacity: formOpacity,
      }}
      className="w-full min-h-[90vh] flex flex-col items-center justify-center py-16 px-4 bg-white relative"
    >
      <motion.div
        style={{
          scale: headingScale,
          y: formY
        }}
        className="relative z-10 text-center space-y-4 mb-10"
      >
        <motion.h2 
          className="text-4xl md:text-6xl lg:text-8xl font-bold text-gray-800"
        >
          Let's Connect
        </motion.h2>
        <motion.h3 
          className="text-xl md:text-2xl font-semibold text-gray-600/90"
        >
          Get in touch with our team
        </motion.h3>
        <motion.p className="max-w-3xl mx-auto text-base md:text-lg text-gray-600/80 leading-relaxed">
          Have a project in mind? Fill out our form, and we'll get back to you within 24 hours.
          We're excited to hear about your ideas and help bring them to life.
        </motion.p>
      </motion.div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {/* Contact Form */}
          <motion.div
            style={{ x: cardLeftX }}
            className="bg-white p-8 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 transform transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)]"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800 relative inline-block">
              Get in Touch
              <div className="absolute -bottom-2 left-0 h-1 w-16 bg-[#00c8e8] rounded-full"></div>
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="bg-gray-50 border border-gray-200 rounded-xl p-4 w-full focus:outline-none focus:ring-2 focus:ring-[#00c8e8]/50 focus:border-transparent transition-all duration-300 hover:shadow-md"
                  />
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#00c8e8] group-hover:w-full transition-all duration-300"></div>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="bg-gray-50 border border-gray-200 rounded-xl p-4 w-full focus:outline-none focus:ring-2 focus:ring-[#00c8e8]/50 focus:border-transparent transition-all duration-300 hover:shadow-md"
                  />
                </div>
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-gray-50 border border-gray-200 rounded-xl p-4 w-full focus:outline-none focus:ring-2 focus:ring-[#00c8e8]/50 focus:border-transparent transition-all duration-300 hover:shadow-md"
                />
              </div>
              <div className="relative">
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="bg-gray-50 border border-gray-200 rounded-xl p-4 w-full focus:outline-none focus:ring-2 focus:ring-[#00c8e8]/50 focus:border-transparent transition-all duration-300 hover:shadow-md resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-[#00a5ff] to-[#00c8e8] text-white rounded-xl py-4 px-8 font-medium hover:opacity-90 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#00c8e8]/20 w-full md:w-auto flex items-center justify-center"
              >
                <span>Send Message</span>
                <svg className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            style={{ x: cardRightX }}
            className="bg-[#171818] text-white p-8 rounded-2xl shadow-xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00a5ff]/5 to-[#00c8e8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-[#00c8e8]/10 blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6 relative inline-block">
                Contact Information
                <div className="absolute -bottom-2 left-0 h-1 w-16 bg-[#00c8e8] rounded-full"></div>
              </h2>
              <p className="text-gray-400 mb-10">
                Fill up the form and our Team will get back to you within 24 hours.
              </p>

              <div className="grid gap-8">
                <motion.div 
                  whileHover={{ x: 8 }}
                  className="flex items-center space-x-4 transition-all duration-300"
                >
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                    <Phone size={20} className="text-[#00c8e8]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-lg">Phone</h3>
                    <div className="flex items-center gap-2 group">
                      <a href="tel:+917391052849" className="text-gray-400 hover:text-[#00c8e8] transition-colors">
                        +91 7391052849
                      </a>
                      <button 
                        onClick={() => copyToClipboard("+917391052849", "phone1")}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Copy phone number"
                      >
                        {copiedText === "phone1" ? (
                          <Check size={16} className="text-green-400" />
                        ) : (
                          <Copy size={16} className="text-gray-400 hover:text-[#00c8e8]" />
                        )}
                      </button>
                    </div>
                    <div className="flex items-center gap-2 group mt-1">
                      <a href="tel:+919420718136" className="text-gray-400 hover:text-[#00c8e8] transition-colors">
                        +91 9420718136
                      </a>
                      <button 
                        onClick={() => copyToClipboard("+919420718136", "phone2")}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Copy phone number"
                      >
                        {copiedText === "phone2" ? (
                          <Check size={16} className="text-green-400" />
                        ) : (
                          <Copy size={16} className="text-gray-400 hover:text-[#00c8e8]" />
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 8 }}
                  className="flex items-center space-x-4 transition-all duration-300"
                >
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                    <Mail size={20} className="text-[#00c8e8]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-lg">Email</h3>
                    <div className="flex items-center gap-2 group">
                      <a href="mailto:smartantpmc@gmail.com" className="text-gray-400 hover:text-[#00c8e8] transition-colors">
                        smartantpmc@gmail.com
                      </a>
                      <button 
                        onClick={() => copyToClipboard("smartantpmc@gmail.com", "email")}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Copy email"
                      >
                        {copiedText === "email" ? (
                          <Check size={16} className="text-green-400" />
                        ) : (
                          <Copy size={16} className="text-gray-400 hover:text-[#00c8e8]" />
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 8 }}
                  className="flex items-center space-x-4 transition-all duration-300"
                >
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                    <ExternalLink size={20} className="text-[#00c8e8]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Support Ticket</h3>
                    <a href="#" className="text-[#00c8e8] hover:text-[#00a5ff] transition-colors duration-300">
                      Open Support Ticket
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {copiedText && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[#171818] text-white px-6 py-3 rounded-lg shadow-lg border border-[#00c8e8]/20 flex items-center gap-2 z-50"
          >
            <Check size={18} className="text-green-400" />
            <span>Copied to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ContactFormAndInfo;