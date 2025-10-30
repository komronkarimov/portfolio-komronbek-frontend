import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { Project } from '@/types/project.types'
import Modal from '@/components/common/Modal'
import Button from '@/components/common/Button'
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaCalendar } from 'react-icons/fa'
import { formatDate } from '@/utils/helpers'

interface ProjectModalProps {
    project: Project | null
    isOpen: boolean
    onClose: () => void
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
    const { language } = useLanguage()

    if (!project) return null

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <div className="space-y-6">
                {/* Project Image */}
                <div className="relative h-80 -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-2xl">
                    <img
                        src={project.imageUrl || `https://via.placeholder.com/800x400/0a0e27/00d4ff?text=${encodeURIComponent(project.title)}`}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />

                    {/* Project Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                        <motion.h2
                            className="text-4xl font-bold mb-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            {project.title}
                        </motion.h2>
                        <div className="flex items-center gap-4 text-sm text-light-secondary">
                            <span className="flex items-center gap-2">
                                <FaCalendar />
                                {formatDate(project.createdAt, language === 'ru' ? 'ru-RU' : 'en-US')}
                            </span>
                            <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full">
                                {project.category}
                            </span>
                            {project.featured && (
                                <span className="px-3 py-1 bg-gradient-primary rounded-full">
                                    ⭐ Featured
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div>
                    <h3 className="text-xl font-bold mb-3">
                        {language === 'ru' ? 'Описание проекта' : 'Project Description'}
                    </h3>
                    <p className="text-light leading-relaxed">
                        {project.description}
                    </p>
                </div>

                {/* Features */}
                {project.features && project.features.length > 0 && (
                    <div>
                        <h3 className="text-xl font-bold mb-3">
                            {language === 'ru' ? 'Основные функции' : 'Key Features'}
                        </h3>
                        <ul className="space-y-2">
                            {project.features.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-start gap-3"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                    <span className="text-light-secondary">{feature}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Technologies */}
                <div>
                    <h3 className="text-xl font-bold mb-3">
                        {language === 'ru' ? 'Использованные технологии' : 'Technologies Used'}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                            <motion.span
                                key={index}
                                className="px-4 py-2 bg-gradient-primary/10 text-primary-blue 
                         rounded-lg text-sm font-medium border border-primary-blue/30"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </div>

                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/10">
                    {project.demoUrl && (
                        <Button
                            href={project.demoUrl}
                            external
                            variant="primary"
                            className="flex-1 justify-center"
                        >
                            <FaExternalLinkAlt className="mr-2" />
                            {language === 'ru' ? 'Посмотреть демо' : 'View Demo'}
                        </Button>
                    )}
                    {project.githubUrl && (
                        <Button
                            href={project.githubUrl}
                            external
                            variant="secondary"
                            className="flex-1 justify-center"
                        >
                            <FaGithub className="mr-2" />
                            {language === 'ru' ? 'Посмотреть код' : 'View Code'}
                        </Button>
                    )}
                </div>
            </div>
        </Modal>
    )
}

export default ProjectModal