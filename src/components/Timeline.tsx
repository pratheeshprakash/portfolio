import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import content from '../content/portfolio.json';
import ProjectModal from './ProjectModal';

const TimelineItem = ({ project, index, onProjectClick }: { 
  project: typeof content.projects[0], 
  index: number,
  onProjectClick: (project: typeof content.projects[0]) => void 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8 }}
      className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-8`}
    >
      <div className="w-1/2 px-4">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gray-800 rounded-lg overflow-hidden shadow-xl cursor-pointer"
          onClick={() => onProjectClick(project)}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-blue-400 mb-2">{project.year}</p>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  const [selectedProject, setSelectedProject] = useState<typeof content.projects[0] | null>(null);

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Projects
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-900" />
          {content.projects.map((project, index) => (
            <TimelineItem 
              key={project.id} 
              project={project} 
              index={index}
              onProjectClick={setSelectedProject}
            />
          ))}
        </div>
      </div>
      
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Timeline;