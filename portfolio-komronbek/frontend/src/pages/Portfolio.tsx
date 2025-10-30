import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLanguage } from '@/contexts/LanguageContext'
import { PortfolioFilterProvider } from '@/contexts/PortfolioFilterContext'
import PortfolioPageHero from '@/components/common/PortfolioPageHero'
import ProjectFilter from '@/components/sections/portfolio/ProjectFilter'
import ProjectGrid from '@/components/sections/portfolio/ProjectGrid'
import { projectsService } from '@/services/projectsService'

const Portfolio = () => {
    const { language } = useLanguage()
    const [projectsCount, setProjectsCount] = useState(0)

    useEffect(() => {
        const fetchProjectsCount = async () => {
            try {
                const projects = await projectsService.getAll()
                setProjectsCount(projects.length)
            } catch (error) {
                console.error('Error fetching projects count:', error)
            }
        }

        fetchProjectsCount()
    }, [])

    return (
        <PortfolioFilterProvider>
            <Helmet>
                <title>
                    {language === 'ru'
                        ? 'Портфолио | Комронбек Каримов'
                        : 'Portfolio | Komronbek Karimov'}
                </title>
                <meta
                    name="description"
                    content={language === 'ru'
                        ? 'Примеры моих работ: веб-сайты, веб-приложения и Python проекты'
                        : 'Examples of my work: websites, web applications and Python projects'
                    }
                />
                <meta
                    name="keywords"
                    content="portfolio, web development, projects, React, TypeScript, Python"
                />
                <meta property="og:title" content={language === 'ru' ? 'Портфолио' : 'Portfolio'} />
                <meta property="og:description" content={language === 'ru'
                    ? 'Примеры моих работ: веб-сайты, веб-приложения и Python проекты'
                    : 'Examples of my work: websites, web applications and Python projects'
                } />
            </Helmet>

            {/* Hero Section */}
            <PortfolioPageHero language={language} projectsCount={projectsCount} />

            {/* Projects Section */}
            <section className="section-padding bg-dark-secondary">
                <div className="container-custom">
                    <ProjectFilter />
                    <ProjectGrid />
                </div>
            </section>
        </PortfolioFilterProvider>
    )
}

export default Portfolio