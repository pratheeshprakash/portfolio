import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ProjectModalProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-gray-800 p-4 border-b border-gray-700 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6">
            <div className="aspect-video mb-6">
              <iframe
                src={project.video}
                title={`${project.title} video`}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">Overview</h3>
              <p className="text-gray-300">{project.detailedOverview}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">Architecture</h3>
              <img
                src={project.architecture.url}
                alt={project.architecture.description}
                className="w-full rounded-lg"
              />
              <p className="text-sm text-gray-400 mt-2">{project.architecture.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;