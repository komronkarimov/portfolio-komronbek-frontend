// frontend/src/components/sections/skills/ToolsAndSoftware.tsx

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import SectionTitle from '@/components/common/SectionTitle'
import {
    FaGithub,
    FaFigma,
    FaChrome,
    FaTrello,
    FaSlack,
    FaDocker,
    FaCode // ← Используем для VS Code
} from 'react-icons/fa'
import {
    SiPycharm,
    SiMysql,
    SiPostman,
    SiNotion,
    SiVercel,
    SiNetlify,
    SiVite
} from 'react-icons/si'

const ToolsAndSoftware = () => {
    const { language } = useLanguage()

    const tools = [
        {
            category: language === 'ru' ? 'Разработка' : 'Development',
            items: [
                { name: 'VS Code', icon: <FaCode size={48} />, color: 'text-blue-500' }, // ← ИЗМЕНЕНО
                { name: 'PyCharm', icon: <SiPycharm size={48} />, color: 'text-green-500' },
                { name: 'Git/GitHub', icon: <FaGithub size={48} />, color: 'text-white' },
                { name: 'Vite', icon: <SiVite size={48} />, color: 'text-purple-500' },
            ],
        },
        {
            category: language === 'ru' ? 'Дизайн' : 'Design',
            items: [
                { name: 'Figma', icon: <FaFigma size={48} />, color: 'text-purple-400' },
                { name: 'Chrome DevTools', icon: <FaChrome size={48} />, color: 'text-yellow-500' },
            ],
        },
        {
            category: language === 'ru' ? 'База данных' : 'Database',
            items: [
                { name: 'MySQL Workbench', icon: <SiMysql size={48} />, color: 'text-blue-600' },
                { name: 'Postman', icon: <SiPostman size={48} />, color: 'text-orange-500' },
            ],
        },
        {
            category: language === 'ru' ? 'Управление проектами' : 'Project Management',
            items: [
                { name: 'Trello', icon: <FaTrello size={48} />, color: 'text-blue-500' },
                { name: 'Notion', icon: <SiNotion size={48} />, color: 'text-white' },
                { name: 'Slack', icon: <FaSlack size={48} />, color: 'text-purple-500' },
            ],
        },
        {
            category: language === 'ru' ? 'Деплой и хостинг' : 'Deploy & Hosting',
            items: [
                { name: 'Vercel', icon: <SiVercel size={48} />, color: 'text-white' },
                { name: 'Netlify', icon: <SiNetlify size={48} />, color: 'text-teal-500' },
                { name: 'Docker', icon: <FaDocker size={48} />, color: 'text-blue-400' },
            ],
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

    const categoryVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    }

    return (
        <section className="section-padding bg-dark-secondary">
            <div className="container-custom">
                <SectionTitle
                    title={language === 'ru' ? 'Инструменты и софт' : 'Tools & Software'}
                    subtitle={language === 'ru'
                        ? 'Программы и сервисы, которые я использую в работе'
                        : 'Programs and services I use in my work'
                    }
                />

                <motion.div
                    className="space-y-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {tools.map((category, catIndex) => (
                        <motion.div key={catIndex} variants={categoryVariants}>
                            {/* Category Title */}
                            <h3 className="text-2xl font-bold mb-6 text-gradient">
                                {category.category}
                            </h3>

                            {/* Tools Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {category.items.map((tool, toolIndex) => (
                                    <motion.div
                                        key={toolIndex}
                                        className="group"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: toolIndex * 0.1 }}
                                        whileHover={{ y: -5 }}
                                    >
                                        <div className="h-full p-6 bg-white/5 backdrop-blur-lg rounded-2xl 
                                  border border-white/10 hover:border-primary-blue/50
                                  hover:shadow-lg hover:shadow-primary-blue/20
                                  transition-all duration-300">
                                            {/* Icon */}
                                            <motion.div
                                                className={`flex justify-center mb-4 grayscale group-hover:grayscale-0 transition-all ${tool.color}`}
                                                whileHover={{ scale: 1.2, rotate: 360 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                {tool.icon}
                                            </motion.div>

                                            {/* Name */}
                                            <h4 className="text-center font-semibold group-hover:text-primary-blue transition-colors">
                                                {tool.name}
                                            </h4>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Learning More */}
                <motion.div
                    className="mt-16 text-center p-8 bg-gradient-primary/10 rounded-2xl border border-primary-blue/20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold mb-4">
                        {language === 'ru' ? '📚 Постоянное обучение' : '📚 Continuous Learning'}
                    </h3>
                    <p className="text-lg text-light-secondary max-w-2xl mx-auto">
                        {language === 'ru'
                            ? 'Регулярно изучаю новые инструменты и технологии, чтобы оставаться в курсе последних трендов в веб-разработке. Всегда открыт к освоению новых платформ и фреймворков.'
                            : 'Regularly study new tools and technologies to stay up to date with the latest trends in web development. Always open to learning new platforms and frameworks.'
                        }
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default ToolsAndSoftware