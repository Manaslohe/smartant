"use client";
import React from "react";
import { PinContainer } from "./PinContainer";
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "./text-reveal-card";
import { useTheme } from '../context/ThemeContext';
import { cn } from "../lib/utils";

const ProjectSection = () => {
  const { theme } = useTheme();

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
    <section className={cn(
      "py-20 min-h-screen transition-colors duration-300",
      theme === 'dark' ? "bg-black" : "bg-gray-50"
    )}>
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-20">
          <h2 className={cn(
            "text-8xl mt-16 font-bold transition-colors duration-300",
            theme === 'dark' ? "text-white" : "text-gray-900"
          )}>
            Our Projects
          </h2>
          <h3 className={cn(
            "text-2xl font-semibold",
            theme === 'dark' ? "text-gray-400" : "text-gray-700"
          )}>
            Transforming Ideas into Digital Reality
          </h3>
          <p className={cn(
            "max-w-3xl mx-auto text-lg",
            theme === 'dark' ? "text-gray-400" : "text-gray-600"
          )}>
            Explore our portfolio of innovative solutions that showcase our commitment to excellence. 
            From responsive web applications to accessibility-focused platforms, 
            we craft digital experiences that make a difference.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="h-[35rem] w-full flex items-center justify-center">
              <PinContainer title={project.title} href={project.websiteUrl}>
                <div className="flex basis-full flex-col p-6 tracking-tight w-[24rem] h-[24rem]">
                  <h3 className={cn(
                    "text-xl !pb-3 !m-0 font-bold transition-colors duration-300",
                    theme === 'dark' ? "text-white" : "text-gray-900"
                  )}>
                    {project.title}
                  </h3>
                  <div className="text-base !mb-6 !p-0 font-normal">
                    <span className={theme === 'dark' ? "text-gray-400" : "text-gray-600"}>
                      {project.description}
                    </span>
                  </div>
                  <div className="flex-1 w-full rounded-lg overflow-hidden">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>

        {/* Modified Text Reveal Card section */}
        <div className="mt-32 mb-20">
          <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
            <TextRevealCard 
              text="Building Digital Excellence" 
              revealText="Crafting Future Solutions"
              className="w-[60rem] max-w-[95vw]" // Increased width and added max-width for responsiveness
            >
              <TextRevealCardTitle className="text-3xl"> {/* Increased title size */}
                Transform Your Vision Into Reality
              </TextRevealCardTitle>
              <TextRevealCardDescription className="max-w-2xl text-lg"> {/* Increased description width and font size */}
                From concept to deployment, we create innovative digital solutions 
                that drive business growth. Our expertise in modern web technologies 
                ensures your project stands out in today's competitive landscape.
              </TextRevealCardDescription>
            </TextRevealCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
