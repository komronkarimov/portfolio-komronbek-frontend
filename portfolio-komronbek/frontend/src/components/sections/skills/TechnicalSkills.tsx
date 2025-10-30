import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { SKILLS_DATA } from '@/utils/constants'
import Card from '@/components/common/Card'
import SectionTitle from '@/components/common/SectionTitle'
import ProgressBar from '@/components/common/ProgressBar'
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaReact, FaNode, FaDatabase, FaGitAlt } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiMysql, SiPostgresql, SiPrisma } from 'react-icons/si'

const TechnicalSkills = () => {
    const { language } = useLanguage()
    const [activeCategory, setActiveCategory] = useState(0)

    const skillIcons: { [key: string]: JSX.Element } = {
        'HTML5': <FaHtml5 size={32} className="text-orange-500" />,
        'CSS3': <FaCss3Alt size={32} className="text-blue-500" />,
        'JavaScript (ES6)': <FaJs size={32} className="text-yellow-500" />,
        'TypeScript': <SiTypescript size={32} className="text-blue-600" />,
        'React': <FaReact size={32} className="text-cyan-500" />,
        'Tailwind CSS': <SiTailwindcss size={32} className="text-teal-500" />,
        'Python': <FaPython size={32} className="text-blue-400" />,
        'Node.js': <FaNode size={32} className="text-green-500" />,
        'MySQL': <SiMysql size={32} className="text-blue-600" />,
        'PostgreSQL': <SiPostgresql size={32} className="text-blue-500" />,
        'Prisma ORM': <SiPrisma size={32} className="text-indigo-500" />,
        'Git/GitHub': <FaGitAlt size={32} className="text-orange-600" />,
        'Responsive Design': <FaHtml5 size={32} className="text-purple-500" />,
        'UI/UX Principles': <FaReact size={32} className="text-pink-500" />,
        'SEO Basics': <FaDatabase size={32} className="text-green-600" />,
    }

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
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 },
        },
    }

    return (
        <section className="section-padding bg-dark-secondary">
            <div className="container-custom">
                <SectionTitle
                    title={language === 'ru' ? 'Технические навыки' : 'Technical Skills'}
                    subtitle={language === 'ru'
                        ? 'Мой технологический стек и уровень владения каждым инструментом'
                        : 'My technology stack and proficiency level for each tool'
                    }
                />

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {SKILLS_DATA.map((category, index) => (
                        <motion.button
                            key={index}
                            onClick={() => setActiveCategory(index)}
                            className={`px-6 py-3 rounded-lg font-semibold transition-all ${activeCategory === index
                                    ? 'bg-gradient-primary text-white shadow-lg shadow-primary-blue/30'
                                    : 'bg-white/5 text-light-secondary hover:bg-white/10'
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category.category}
                        </motion.button>
                    ))}
                </div>

                {/* Skills Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    key={activeCategory}
                >
                    {SKILLS_DATA[activeCategory].skills.map((skill, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="h-full group hover:border-primary-blue/50">
                                <div className="flex items-start gap-4">
                                    {/* Icon */}
                                    <motion.div
                                        className="flex-shrink-0"
                                        whileHover={{ scale: 1.2, rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {skillIcons[skill.name] || <FaDatabase size={32} className="text-primary-blue" />}
                                    </motion.div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-3">
                                            <h3 className="text-lg font-bold group-hover:text-gradient transition-all">
                                                {skill.name}
                                            </h3>
                                            <span className="text-primary-blue font-semibold">
                                                {skill.level}%
                                            </span>
                                        </div>

                                        {/* Progress Bar */}
                                        <ProgressBar
                                            value={skill.level}
                                            showPercentage={false}
                                            animated={true}
                                        />

                                        {/* Description */}
                                        <p className="text-sm text-light-secondary mt-3">
                                            {skill.description}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Overall Progress Summary */}
                <motion.div
                    className="mt-12 p-8 bg-gradient-primary/10 rounded-2xl border border-primary-blue/20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold mb-6 text-center text-gradient">
                        {language === 'ru' ? 'Общая статистика' : 'Overall Statistics'}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-gradient mb-2">
                                {SKILLS_DATA.reduce((acc, cat) => acc + cat.skills.length, 0)}
                            </div>
                            <div className="text-light-secondary">
                                {language === 'ru' ? 'Всего навыков' : 'Total Skills'}
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-gradient mb-2">
                                {Math.round(
                                    SKILLS_DATA.reduce((acc, cat) =>
                                        acc + cat.skills.reduce((sum, skill) => sum + skill.level, 0), 0
                                    ) / SKILLS_DATA.reduce((acc, cat) => acc + cat.skills.length, 0)
                                )}%
                            </div>
                            <div className="text-light-secondary">
                                {language === 'ru' ? 'Средний уровень' : 'Average Level'}
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-gradient mb-2">
                                2+
                            </div>
                            <div className="text-light-secondary">
                                {language === 'ru' ? 'Года опыта' : 'Years Experience'}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default TechnicalSkills