import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import Card from '@/components/common/Card'
import SectionTitle from '@/components/common/SectionTitle'
import { FaCode, FaPython, FaMobileAlt, FaPalette, FaDatabase, FaRocket } from 'react-icons/fa'

const WhatIDo = () => {
    const { language, t } = useLanguage()

    const services = [
        {
            icon: <FaCode size={48} />,
            title: language === 'ru' ? 'Frontend Development' : 'Frontend Development',
            description: language === 'ru'
                ? 'Создаю адаптивные и красивые пользовательские интерфейсы с использованием HTML5, CSS3, JavaScript и современных фреймворков'
                : 'Creating responsive and beautiful user interfaces using HTML5, CSS3, JavaScript and modern frameworks',
            technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'],
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            icon: <FaPython size={48} />,
            title: language === 'ru' ? 'Backend & Python' : 'Backend & Python',
            description: language === 'ru'
                ? 'Разрабатываю функциональность на Python, работаю с базами данных и логикой приложений'
                : 'Developing functionality with Python, working with databases and application logic',
            technologies: ['Python', 'Flask', 'Node.js', 'Express', 'API'],
            gradient: 'from-green-500 to-yellow-500',
        },
        {
            icon: <FaMobileAlt size={48} />,
            title: language === 'ru' ? 'Responsive Design' : 'Responsive Design',
            description: language === 'ru'
                ? 'Гарантирую отличный вид сайтов на всех устройствах и экранах любого размера'
                : 'Ensuring great look on all devices and screens of any size',
            technologies: ['Mobile-First', 'Flexbox', 'Grid', 'Media Queries'],
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            icon: <FaDatabase size={48} />,
            title: language === 'ru' ? 'Базы данных' : 'Databases',
            description: language === 'ru'
                ? 'Проектирую и оптимизирую структуры баз данных, пишу эффективные SQL-запросы'
                : 'Designing and optimizing database structures, writing efficient SQL queries',
            technologies: ['MySQL', 'PostgreSQL', 'Prisma ORM'],
            gradient: 'from-orange-500 to-red-500',
        },
        {
            icon: <FaPalette size={48} />,
            title: language === 'ru' ? 'UI/UX Design' : 'UI/UX Design',
            description: language === 'ru'
                ? 'Создаю интуитивные и привлекательные интерфейсы с фокусом на пользовательский опыт'
                : 'Creating intuitive and attractive interfaces with focus on user experience',
            technologies: ['Figma', 'Wireframing', 'Prototyping'],
            gradient: 'from-indigo-500 to-purple-500',
        },
        {
            icon: <FaRocket size={48} />,
            title: language === 'ru' ? 'Оптимизация' : 'Optimization',
            description: language === 'ru'
                ? 'Оптимизирую производительность сайтов для быстрой загрузки и лучшего SEO'
                : 'Optimizing website performance for fast loading and better SEO',
            technologies: ['SEO', 'Performance', 'Lighthouse', 'Core Web Vitals'],
            gradient: 'from-teal-500 to-green-500',
        },
    ]

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
    }

    return (
        <section className="section-padding bg-gradient-dark">
            <div className="container-custom">
                <SectionTitle
                    title={t('home.whatIDo.title')}
                    subtitle={language === 'ru'
                        ? 'Полный спектр услуг для создания современных веб-решений'
                        : 'Full range of services for creating modern web solutions'
                    }
                    gradient
                />

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {services.map((service, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="h-full group hover:border-primary-blue/50">
                                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} 
                              flex items-center justify-center mb-6 text-white
                              group-hover:scale-110 transition-transform duration-300`}>
                                    {service.icon}
                                </div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-all duration-300">
                                    {service.title}
                                </h3>

                                <p className="text-light-secondary mb-4">
                                    {service.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {service.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-white/5 rounded-full text-xs border border-white/10
                               hover:border-primary-blue/50 transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default WhatIDo