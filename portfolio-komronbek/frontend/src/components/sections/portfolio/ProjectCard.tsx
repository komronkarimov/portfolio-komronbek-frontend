import { motion } from 'framer-motion'
import { Project } from '@/types/project.types'
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa'

interface ProjectCardProps {
    project: Project
    onClick: () => void
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
    return (
        <motion.div
            className="group relative bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden
               border border-white/10 hover:border-primary-blue/50
               hover:shadow-xl hover:shadow-primary-blue/20
               transition-all duration-300 cursor-pointer h-full flex flex-col"
            whileHover={{ y: -5 }}
            onClick={onClick}
        >
            {/* Project Image */}
            <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent z-10" />
                <img
                    src={project.imageUrl || `https://via.placeholder.com/400x250/0a0e27/00d4ff?text=${encodeURIComponent(project.title)}`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay with Links */}
                <div className="absolute inset-0 bg-dark/90 opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 z-20 flex items-center justify-center gap-4">
                    {project.demoUrl && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg 
                       flex items-center justify-center text-white 
                       hover:bg-primary-blue transition-colors"
                            aria-label="View demo"
                        >
                            <FaExternalLinkAlt size={18} />
                        </a>
                    )}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg 
                       flex items-center justify-center text-white 
                       hover:bg-primary-blue transition-colors"
                            aria-label="View code"
                        >
                            <FaGithub size={18} />
                        </a>
                    )}
                    <button
                        className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg 
                     flex items-center justify-center text-white 
                     hover:bg-primary-blue transition-colors"
                        aria-label="View details"
                    >
                        <FaEye size={18} />
                    </button>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                    <div className="absolute top-4 left-4 z-20">
                        <span className="px-3 py-1 bg-gradient-primary text-white text-xs font-semibold rounded-full">
                            ⭐ Featured
                        </span>
                    </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 bg-dark/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/20">
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Project Content */}
            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-all">
                    {project.title}
                </h3>

                <p className="text-light-secondary text-sm mb-4 flex-1 line-clamp-3">
                    {project.shortDescription}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-white/5 text-primary-blue 
                       rounded-full text-xs font-medium border border-white/10"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 3 && (
                        <span className="px-3 py-1 text-light-secondary text-xs">
                            +{project.technologies.length - 3}
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard