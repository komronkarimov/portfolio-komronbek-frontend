import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { usePortfolioFilter } from '@/contexts/PortfolioFilterContext'
import { projectsService } from '@/services/projectsService'
import { Project } from '@/types/project.types'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import Loader from '@/components/common/Loader'

const ProjectGrid = () => {
    const { language } = useLanguage()
    const { activeFilter, searchQuery } = usePortfolioFilter()
    const [projects, setProjects] = useState<Project[]>([])
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([])
    const [loading, setLoading] = useState(true)
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)

    // Fetch projects
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true)
                const data = await projectsService.getAll()
                console.log('Fetched projects:', data) // Для отладки
                setProjects(data)
                setFilteredProjects(data)
            } catch (error) {
                console.error('Error fetching projects:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchProjects()
    }, [])

    // Filter projects
    useEffect(() => {
        console.log('Filtering - activeFilter:', activeFilter, 'searchQuery:', searchQuery) // Для отладки

        let filtered = [...projects]

        // Filter by category
        if (activeFilter !== 'all') {
            filtered = filtered.filter(project => {
                console.log('Project category:', project.category, 'Filter:', activeFilter) // Для отладки
                return project.category === activeFilter
            })
        }

        // Filter by search query
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase().trim()
            filtered = filtered.filter(project =>
                project.title.toLowerCase().includes(query) ||
                project.description.toLowerCase().includes(query) ||
                project.shortDescription?.toLowerCase().includes(query) ||
                project.technologies.some(tech => tech.toLowerCase().includes(query))
            )
        }

        console.log('Filtered projects:', filtered) // Для отладки
        setFilteredProjects(filtered)
    }, [activeFilter, searchQuery, projects])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 },
        },
        exit: {
            opacity: 0,
            scale: 0.9,
            transition: { duration: 0.3 },
        },
    }

    if (loading) {
        return (
            <div className="flex justify-center py-20">
                <Loader size="lg" text={language === 'ru' ? 'Загрузка проектов...' : 'Loading projects...'} />
            </div>
        )
    }

    if (filteredProjects.length === 0) {
        return (
            <motion.div
                className="text-center py-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold mb-2">
                    {language === 'ru' ? 'Проекты не найдены' : 'No projects found'}
                </h3>
                <p className="text-light-secondary">
                    {language === 'ru'
                        ? 'Попробуйте изменить фильтр или поисковый запрос'
                        : 'Try changing the filter or search query'
                    }
                </p>
            </motion.div>
        )
    }

    return (
        <>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            layout
                            exit="exit"
                        >
                            <ProjectCard
                                project={project}
                                onClick={() => setSelectedProject(project)}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Project Modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />

            {/* Results Count */}
            <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <p className="text-light-secondary">
                    {language === 'ru'
                        ? `Найдено проектов: ${filteredProjects.length}`
                        : `Projects found: ${filteredProjects.length}`
                    }
                </p>
            </motion.div>
        </>
    )
}

export default ProjectGrid