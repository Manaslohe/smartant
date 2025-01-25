"use client";
import React from "react";
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
    <section className="py-10 md:py-20 min-h-screen bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-10 md:mb-20">
          <h2 className="text-4xl md:text-8xl mt-8 md:mt-16 font-bold text-white">
            Our Projects
          </h2>
          <h3 className="text-2xl font-semibold text-gray-400">
            Transforming Ideas into Digital Reality
          </h3>
          <p className="max-w-3xl mx-auto text-lg text-gray-400">
            Explore our portfolio of innovative solutions that showcase our commitment to excellence. 
            From responsive web applications to accessibility-focused platforms, 
            we craft digital experiences that make a difference.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="h-[32rem] md:h-[35rem] w-full flex items-center justify-center">
              <PinContainer title={project.title} href={project.websiteUrl}>
                <div className="flex basis-full flex-col p-4 tracking-tight w-[20rem] md:w-[24rem] bg-zinc-900 rounded-lg">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
