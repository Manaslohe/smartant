"use client";
import React from "react";
import { motion } from "framer-motion";
import { PinContainer } from "./PinContainer";

const ProjectSection = () => {
  const projects = [
    {
      title: "Rotable Ventures",
      description: "A modern restaurant platform crafted with React, offering an immersive dining experience and smooth customer onboarding. Features elegant UI and responsive design.",
      imageUrl: "/rotable.png",
      websiteUrl: "https://rotable.vercel.app/"
    },
    {
      title: "Fitart - Your Fitness Journey",
      description: "A cutting-edge fitness platform that revolutionizes workout tracking.featuring personalized activity recommendations and seamless subscription handling.",
      imageUrl: "/fitart.png",
      websiteUrl: "https://fitart.in/"
    },
    {
      title: "Cricket Association for the Blind",
      description: "An innovative, fully accessible platform empowering visually impaired cricket enthusiasts. Built with React, featuring WCAG compliance, seamless UPI payments, and screen reader optimization.",
      imageUrl: "/cvba.png",
      websiteUrl: "https://www.blindcricketvidarbha.in/"
    }
  ];

  return (
    <section className="w-full bg-black/95 relative z-30 py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-b from-black/0 via-[#00c8e8]/5 to-black/0"
      />
      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 md:mb-10"
        >
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white">
            Our Projects
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-400/90">
            Transforming Ideas into Digital Reality
          </h3>
          <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-400/80 leading-relaxed">
            Explore our portfolio of innovative solutions that showcase our commitment to excellence. 
            From responsive web applications to accessibility-focused platforms, 
            we craft digital experiences that make a difference.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="h-[24rem] md:h-[30rem] w-full flex items-center justify-center"
            >
              <PinContainer title={project.title} href={project.websiteUrl}>
                <div className="flex basis-full flex-col p-4 tracking-tight w-[20rem] md:w-[24rem] bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-lg">
                  <h3 className="text-lg md:text-xl !pb-3 !m-0 font-bold text-white/90">
                    {project.title}
                  </h3>
                  <div className="text-sm md:text-base !mb-4 md:!mb-6 !p-0 font-normal">
                    <span className="text-gray-300">
                      {project.description}
                    </span>
                  </div>
                  <div className="w-full rounded-lg overflow-hidden border border-white/10">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </PinContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
