import { motion } from 'framer-motion'
import { useTypingEffect } from '@/hooks/useTypingEffect'
import ParticlesBackground from '@/components/animations/ParticlesBackground'
import {
    FaLaptopCode,
    FaGlobe,
    FaPython,
    FaReact,
    FaMobileAlt,
    FaServer,
    FaDatabase,
    FaRocket
} from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiNextdotjs } from 'react-icons/si'

interface PortfolioPageHeroProps {
    language: 'ru' | 'en'
    projectsCount?: number
}

const PortfolioPageHero = ({ language, projectsCount = 0 }: PortfolioPageHeroProps) => {
    // Typing effect для типов проектов
    const projectTypes = language === 'ru'
        ? ['Веб-приложения', 'Веб-сайты', 'Python проекты', 'Full-Stack решения', 'UI/UX дизайн']
        : ['Web Applications', 'Websites', 'Python Projects', 'Full-Stack Solutions', 'UI/UX Design']

    const typedText = useTypingEffect({ words: projectTypes, typingSpeed: 80, deletingSpeed: 40 })

    // Категории проектов для визуализации
    const projectCategories = [
        {
            icon: <FaGlobe />,
            name: language === 'ru' ? 'Веб-сайты' : 'Websites',
            color: 'from-blue-500 to-cyan-500',
            count: '5+',
            position: { x: -140, y: -100 }
        },
        {
            icon: <FaLaptopCode />,
            name: language === 'ru' ? 'Веб-приложения' : 'Web Apps',
            color: 'from-purple-500 to-pink-500',
            count: '8+',
            position: { x: 140, y: -100 }
        },
        {
            icon: <FaPython />,
            name: 'Python',
            color: 'from-yellow-500 to-orange-500',
            count: '3+',
            position: { x: -140, y: 100 }
        },
        {
            icon: <FaMobileAlt />,
            name: language === 'ru' ? 'Мобильные' : 'Mobile',
            color: 'from-green-500 to-emerald-500',
            count: '2+',
            position: { x: 140, y: 100 }
        },
    ]

    // Технологии для плавающих иконок
    const floatingTechs = [
        { icon: <FaReact />, color: 'text-cyan-400', delay: 0 },
        { icon: <SiTypescript />, color: 'text-blue-500', delay: 0.5 },
        { icon: <SiNextdotjs />, color: 'text-white', delay: 1 },
        { icon: <SiTailwindcss />, color: 'text-teal-400', delay: 1.5 },
        { icon: <FaServer />, color: 'text-green-400', delay: 2 },
        { icon: <FaDatabase />, color: 'text-orange-400', delay: 2.5 },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
            {/* Particles Background */}
            <ParticlesBackground />

            {/* Geometric shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-primary-blue/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-primary-purple/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, -50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />
                <motion.div
                    className="absolute top-1/3 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </div>

            <div className="container-custom relative z-10">
                <motion.div
                    className="grid lg:grid-cols-2 gap-12 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Text Content */}
                    <div className="text-center lg:text-left">
                        <motion.p
                            className="text-primary-blue text-lg mb-4 font-semibold"
                            variants={itemVariants}
                        >
                            {language === 'ru' ? '🚀 Мои работы' : '🚀 My Work'}
                        </motion.p>

                        <motion.h1
                            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                            variants={itemVariants}
                        >
                            <span className="text-gradient">
                                {language === 'ru' ? 'Портфолио' : 'Portfolio'}
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-xl md:text-2xl text-light-secondary mb-8"
                            variants={itemVariants}
                        >
                            {language === 'ru'
                                ? 'Примеры работ и учебных проектов'
                                : 'Examples of work and educational projects'}
                        </motion.p>

                        <motion.div
                            className="text-lg md:text-xl mb-8 min-h-[2rem]"
                            variants={itemVariants}
                        >
                            <span className="text-light-secondary">
                                {language === 'ru' ? 'Специализация: ' : 'Specialization: '}
                            </span>
                            <span className="text-gradient font-semibold">
                                {typedText}
                                <span className="animate-blink">|</span>
                            </span>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            className="grid grid-cols-3 gap-4 mb-8"
                            variants={itemVariants}
                        >
                            <div className="p-4 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-primary-blue/50 transition-all">
                                <div className="text-3xl font-bold text-gradient">{projectsCount}+</div>
                                <div className="text-sm text-light-secondary">
                                    {language === 'ru' ? 'Проектов' : 'Projects'}
                                </div>
                            </div>
                            <div className="p-4 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-primary-blue/50 transition-all">
                                <div className="text-3xl font-bold text-gradient">4</div>
                                <div className="text-sm text-light-secondary">
                                    {language === 'ru' ? 'Категории' : 'Categories'}
                                </div>
                            </div>
                            <div className="p-4 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-primary-blue/50 transition-all">
                                <div className="text-3xl font-bold text-gradient">10+</div>
                                <div className="text-sm text-light-secondary">
                                    {language === 'ru' ? 'Технологий' : 'Tech Stack'}
                                </div>
                            </div>
                        </motion.div>

                        {/* Quick Filter Tags */}
                        <motion.div
                            className="flex flex-wrap gap-3 justify-center lg:justify-start"
                            variants={itemVariants}
                        >
                            {['All', 'Featured', 'Recent', 'Web Apps'].map((tag, index) => (
                                <motion.span
                                    key={index}
                                    className="px-4 py-2 bg-gradient-primary/20 backdrop-blur-lg rounded-full text-sm font-semibold border border-primary-blue/30 cursor-pointer"
                                    whileHover={{ scale: 1.1, borderColor: 'rgb(59, 130, 246)' }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>

                    {/* Projects Visualization */}
                    <motion.div
                        className="relative flex justify-center lg:justify-end"
                        variants={itemVariants}
                    >
                        <div className="relative w-80 h-80 md:w-96 md:h-96">
                            {/* Central Project Hub */}
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center"
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ duration: 1, ease: 'easeOut' }}
                            >
                                <motion.div
                                    className="w-40 h-40 bg-gradient-primary rounded-3xl flex flex-col items-center justify-center shadow-2xl shadow-primary-blue/50 border-4 border-dark relative overflow-hidden"
                                    animate={{
                                        rotate: [0, 5, -5, 0],
                                        boxShadow: [
                                            '0 0 30px rgba(59, 130, 246, 0.5)',
                                            '0 0 60px rgba(139, 92, 246, 0.5)',
                                            '0 0 30px rgba(59, 130, 246, 0.5)',
                                        ]
                                    }}
                                    transition={{
                                        rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                                        boxShadow: { duration: 3, repeat: Infinity }
                                    }}
                                >
                                    {/* Background Pattern */}
                                    <div className="absolute inset-0 opacity-10">
                                        <div className="grid grid-cols-3 gap-1 h-full p-2">
                                            {[...Array(9)].map((_, i) => (
                                                <div key={i} className="bg-white rounded" />
                                            ))}
                                        </div>
                                    </div>

                                    <FaRocket className="text-5xl text-white mb-2 relative z-10" />
                                    <div className="text-sm font-bold text-white relative z-10">
                                        {projectsCount}+ {language === 'ru' ? 'Проектов' : 'Projects'}
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Category Cards */}
                            {projectCategories.map((category, index) => (
                                <motion.div
                                    key={index}
                                    className={`absolute w-28 h-28 bg-gradient-to-br ${category.color} rounded-2xl p-4 shadow-xl text-white cursor-pointer border-2 border-white/20`}
                                    style={{
                                        left: '50%',
                                        top: '50%',
                                        marginLeft: category.position.x - 56,
                                        marginTop: category.position.y - 56,
                                    }}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{
                                        delay: 0.5 + index * 0.15,
                                        type: 'spring',
                                        stiffness: 200
                                    }}
                                    whileHover={{
                                        scale: 1.15,
                                        rotate: 10,
                                        zIndex: 50,
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                                    }}
                                >
                                    <div className="text-3xl mb-1">{category.icon}</div>
                                    <div className="text-xs font-bold mb-1">{category.name}</div>
                                    <div className="text-xs opacity-80">{category.count}</div>
                                </motion.div>
                            ))}

                            {/* Floating Tech Icons */}
                            {floatingTechs.map((tech, index) => (
                                <motion.div
                                    key={index}
                                    className={`absolute ${tech.color} text-2xl`}
                                    style={{
                                        left: `${20 + (index % 3) * 30}%`,
                                        top: `${10 + Math.floor(index / 3) * 40}%`,
                                    }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{
                                        opacity: [0.3, 0.7, 0.3],
                                        scale: [1, 1.2, 1],
                                        y: [0, -20, 0],
                                    }}
                                    transition={{
                                        delay: tech.delay,
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    {tech.icon}
                                </motion.div>
                            ))}

                            {/* Connection Lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                                {projectCategories.map((_, index) => (
                                    <motion.line
                                        key={index}
                                        x1="50%"
                                        y1="50%"
                                        x2={`calc(50% + ${projectCategories[index].position.x}px)`}
                                        y2={`calc(50% + ${projectCategories[index].position.y}px)`}
                                        stroke="rgba(59, 130, 246, 0.2)"
                                        strokeWidth="2"
                                        strokeDasharray="5,5"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 1 }}
                                        transition={{ delay: 1 + index * 0.1, duration: 0.8 }}
                                    />
                                ))}
                            </svg>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 1 }}
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-light-secondary text-center"
                    >
                        <p className="text-sm mb-2">
                            {language === 'ru' ? 'Смотрите проекты' : 'View Projects'}
                        </p>
                        <div className="w-6 h-10 border-2 border-light-secondary rounded-full mx-auto relative">
                            <motion.div
                                className="w-1.5 h-1.5 bg-light-secondary rounded-full absolute left-1/2 -translate-x-1/2 top-2"
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default PortfolioPageHero