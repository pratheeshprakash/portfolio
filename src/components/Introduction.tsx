import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import * as Icons from 'lucide-react';
import content from '../content/portfolio.json';

const Introduction = () => {
  return (
    <section className="min-h-screen relative bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border border-gray-400" />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {content.personal.name}
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-400 mb-8">
            {content.personal.title}
          </h2>
          
          <div className="flex justify-center gap-8 mb-12">
            {content.personal.expertise.map((skill) => {
              const IconComponent = Icons[skill.icon as keyof typeof Icons];
              return (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center"
                >
                  <IconComponent className="w-12 h-12 text-blue-400 mb-2" />
                  <span className="text-gray-300">{skill.name}</span>
                </motion.div>
              );
            })}
          </div>

          <p className="text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            {content.personal.summary}
          </p>
        </motion.div>
      </div>

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
      >
        <ChevronDown className="w-8 h-8 text-blue-400" />
      </motion.div>
    </section>
  );
};

export default Introduction;