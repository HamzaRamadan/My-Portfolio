import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaTrash, FaEdit } from 'react-icons/fa'

const ProjectCard = ({ project, index, onDelete, onEdit, showActions = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card overflow-hidden relative group"
    >
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold">{project.title}</h3>
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-4">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/90 rounded-full text-gray-800 hover:bg-white hover:scale-110 transition-all"
            >
              <FaGithub size={24} />
            </a>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/90 rounded-full text-gray-800 hover:bg-white hover:scale-110 transition-all"
            >
              <FaExternalLinkAlt size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
          {project.description}
        </p>
        
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
            >
              <FaGithub size={20} />
              <span>Code</span>
            </a>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
            >
              <FaExternalLinkAlt size={20} />
              <span>Live</span>
            </a>
          </div>
          
          {showActions && (
            <div className="flex space-x-2">
              <button
                onClick={() => onEdit(project)}
                className="p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all"
              >
                <FaEdit size={16} />
              </button>
              <button
                onClick={() => onDelete(project._id)}
                className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all"
              >
                <FaTrash size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard 