import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiUsers, FiTrendingUp } from 'react-icons/fi';
import { CardSpotlight } from './ui/card-spotlight';

const approaches = [
  {
    title: "Strategic Planning",
    description: "We begin by understanding your vision and creating comprehensive project roadmaps that ensure success",
    details: [
      "In-depth requirements analysis",
      "Clear project milestones",
      "Resource allocation planning",
      "Stakeholder alignment",
      "Risk assessment & mitigation",
      "Timeline definition"
    ],
    icon: <FiTarget className="w-6 h-6 md:w-8 md:h-8" />,
    color: "from-[#00c8e8]/20 to-blue-500/20"
  },
  {
    title: "Collaborative Execution",
    description: "We foster strong partnerships through transparent communication and collaborative problem-solving",
    details: [
      "Regular progress updates",
      "Cross-team coordination",
      "Clear communication channels",
      "Agile methodology",
      "Collaborative decision making",
      "Real-time problem solving"
    ],
    icon: <FiUsers className="w-6 h-6 md:w-8 md:h-8" />,
    color: "from-purple-500/20 to-blue-500/20"
  },
  {
    title: "Continuous Improvement",
    description: "We're committed to optimizing solutions that evolve with your business needs",
    details: [
      "Performance monitoring",
      "Scalability planning",
      "Regular evaluations",
      "Feedback integration",
      "Future-proof solutions",
      "Growth-focused updates"
    ],
    icon: <FiTrendingUp className="w-6 h-6 md:w-8 md:h-8" />,
    color: "from-[#00c8e8]/20 to-green-500/20"
  }
];

const ApproachCard = ({ title, description, details, icon, color, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    whileHover={{ y: -5 }}
    className="relative group h-full"
  >
    <CardSpotlight className="h-full">
      <div className="flex items-start space-x-4 mb-6 relative z-10">
        <div className={`p-2.5 md:p-3 rounded-lg bg-gradient-to-r ${color} text-[#00c8e8] border border-white/5`}>
          {icon}
        </div>
        <h3 className="text-xl md:text-2xl font-semibold text-slate-200 tracking-wide leading-tight">
          {title}
        </h3>
      </div>
      <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 relative z-10 leading-relaxed">
        {description}
      </p>
      <ul className="space-y-2 md:space-y-3">
        {details.map((detail, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + (i * 0.1) }}
            className="flex items-start text-gray-400 relative z-10 group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#171818] mr-3 mt-2"></span>
            <span className="text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors">
              {detail}
            </span>
          </motion.li>
        ))}
      </ul>
    </CardSpotlight>
  </motion.div>
);

const Approach = () => {
  return (
    <section id="approach" className="w-full bg-[#171818] relative z-50 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="absolute inset-0 bg-[#171818]/[0.01]"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 md:mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white">
            Our Approach
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-400/90">
            Strategic Planning for Digital Success
          </h3>
          <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-400/80 leading-relaxed">
            We believe that every project is a partnership, and our success depends on understanding 
            our client's goals, challenges, and vision. Through strategic planning, collaborative 
            execution, and continuous improvement, we deliver solutions that drive lasting success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {approaches.map((approach, index) => (
            <ApproachCard key={approach.title} {...approach} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
