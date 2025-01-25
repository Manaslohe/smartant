import React from 'react';
import { motion } from 'framer-motion';
import { LampContainer } from './ui/lamp';

const AboutSection = () => {
  return (
    <section className="w-full bg-black relative z-50">
      <div className="w-full min-h-screen flex flex-col justify-center">
        
        <LampContainer className="relative pt-96">
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 pt-64 bg-gradient-to-br from-slate-200 to-slate-400 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            About Us
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 max-w-4xl mx-auto px-4"
          >
            <div className="text-center space-y-8 text-slate-300">
              <p className="text-lg md:text-xl">
                With 10 years of experience in technology, people management, and process optimization, we've successfully delivered impactful projects across diverse sectors - from women's education to cutting-edge solutions. 
              </p>
              <p className="text-lg md:text-xl">
                Driven by a passion for innovation and expertise, we leverage the latest advancements to address complex challenges and empower businesses, organizations, and communities to thrive.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="p-6 rounded-xl backdrop-blur-sm backdrop-brightness-125 border border-slate-800">
                  <h3 className="text-xl font-semibold mb-3 text-slate-200">Our Journey</h3>
                  <p className="text-slate-400">
                    A story of consistent growth and adaptation, leveraging innovation to drive meaningful change.
                  </p>
                </div>
                <div className="p-6 rounded-xl backdrop-blur-sm backdrop-brightness-125 border border-slate-800">
                  <h3 className="text-xl font-semibold mb-3 text-slate-200">Our Mission</h3>
                  <p className="text-slate-400">
                    Improving systems, processes, and technology to ensure businesses, organizations, and communities thrive.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </LampContainer>
      </div>
    </section>
  );
};

export default AboutSection;