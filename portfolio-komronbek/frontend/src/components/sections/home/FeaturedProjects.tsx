import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { projectsService } from '@/services/projectsService'
import { Project } from '@/types/project.types'
import Card from '@/components/common/Card'
import Button from '@/components/common/Button'
import SectionTitle from '@/components/common/SectionTitle'
import Loader from '@/components/common/Loader'
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa'

const FeaturedProjects = () => {
    const { language, t } = useLanguage()
    const [projects, setProjects] = useState<Project[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await projectsService.getFeatured()
                setProjects(data.slice(0, 3)) // Show only 3 featured projects
            } catch (error) {
                console.error('Error fetching projects:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchProjects()
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    }

    if (loading) {
        return (
            <section className="section-padding">
                <div className="container-custom flex justify-center">
                    <Loader size="lg" text={language === 'ru' ? 'Загрузка проектов...' : 'Loading projects...'} />
                </div>
            </section>
        )
    }

    return (
        <section className="section-padding bg-dark-secondary">
            <div className="container-custom">
                <SectionTitle
                    title={t('home.featured.title')}
                    subtitle={language === 'ru'
                        ? 'Некоторые из моих последних работ и учебных проектов'
                        : 'Some of my recent works and educational projects'
                    }
                />

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {projects.map((project) => (
                        <motion.div key={project.id} variants={itemVariants}>
                            <Card className="h-full flex flex-col group">
                                {/* Project Image */}
                                <div className="relative h-48 -m-6 mb-6 overflow-hidden rounded-t-2xl">
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent z-10" />
                                    <img
                                        src={project.imageUrl || `https://via.placeholder.com/400x250/0a0e27/00d4ff?text=${project.title}`}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4 z-20 flex gap-2">
                                        {project.demoUrl && (
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 bg-dark/80 backdrop-blur-sm rounded-lg flex items-center justify-center
                                 text-white hover:bg-primary-blue transition-colors"
                                                aria-label="View demo"
                                            >
                                                <FaExternalLinkAlt size={16} />
                                            </a>
                                        )}
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 bg-dark/80 backdrop-blur-sm rounded-lg flex items-center justify-center
                                 text-white hover:bg-primary-blue transition-colors"
                                                aria-label="View code"
                                            >
                                                <FaGithub size={16} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Project Content */}
                                <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-all">
                                    {project.title}
                                </h3>

                                <p className="text-light-secondary mb-4 flex-1">
                                    {project.shortDescription}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-gradient-primary/10 text-primary-blue 
                               rounded-full text-xs font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 4 && (
                                        <span className="px-3 py-1 text-light-secondary text-xs">
                                            +{project.technologies.length - 4}
                                        </span>
                                    )}
                                </div>

                                {/* View Details Button */}
                                <Button
                                    to={`/portfolio#${project.slug}`}
                                    variant="ghost"
                                    size="sm"
                                    className="group/btn"
                                >
                                    {language === 'ru' ? 'Подробнее' : 'View Details'}
                                    <FaArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                </Button>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All Projects Button */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <Button to="/portfolio" variant="primary" size="lg">
                        {t('home.featured.viewAll')}
                        <FaArrowRight className="ml-2" />
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}

export default FeaturedProjects