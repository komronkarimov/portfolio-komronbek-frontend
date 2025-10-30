import { motion } from 'framer-motion'
import { useTypingEffect } from '@/hooks/useTypingEffect'
import ParticlesBackground from '@/components/animations/ParticlesBackground'
import {
    FaReact,
    FaNode,
    FaPython,
    FaDatabase,
    FaGitAlt,
    FaHtml5,
    FaJs
} from 'react-icons/fa'
import {
    SiTypescript,
    SiTailwindcss,
} from 'react-icons/si'

interface SkillsPageHeroProps {
    language: 'ru' | 'en'
}

const SkillsPageHero = ({ language }: SkillsPageHeroProps) => {
    // Typing effect для технологий
    const technologies = language === 'ru'
        ? ['React & TypeScript', 'Node.js & Python', 'MySQL & PostgreSQL', 'Tailwind CSS', 'Git & GitHub']
        : ['React & TypeScript', 'Node.js & Python', 'MySQL & PostgreSQL', 'Tailwind CSS', 'Git & GitHub']

    const typedText = useTypingEffect({ words: technologies, typingSpeed: 80, deletingSpeed: 40 })

    // Массив технологий для орбитальной анимации
    const orbitingSkills = [
        { icon: <FaReact />, name: 'React', color: 'from-cyan-500 to-blue-500', delay: 0 },
        { icon: <SiTypescript />, name: 'TypeScript', color: 'from-blue-600 to-blue-400', delay: 0.5 },
        { icon: <FaNode />, name: 'Node.js', color: 'from-green-600 to-green-400', delay: 1 },
        { icon: <FaPython />, name: 'Python', color: 'from-blue-500 to-yellow-500', delay: 1.5 },
        { icon: <SiTailwindcss />, name: 'Tailwind', color: 'from-teal-500 to-cyan-400', delay: 2 },
        { icon: <FaDatabase />, name: 'Database', color: 'from-orange-500 to-red-500', delay: 2.5 },
        { icon: <FaGitAlt />, name: 'Git', color: 'from-orange-600 to-red-600', delay: 3 },
        { icon: <FaHtml5 />, name: 'HTML5', color: 'from-orange-500 to-red-400', delay: 3.5 },
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
                    className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
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
                            {language === 'ru' ? '💻 Мой технологический арсенал' : '💻 My Technology Arsenal'}
                        </motion.p>

                        <motion.h1
                            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                            variants={itemVariants}
                        >
                            <span className="text-gradient">
                                {language === 'ru' ? 'Навыки' : 'Skills'}
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-xl md:text-2xl text-light-secondary mb-8"
                            variants={itemVariants}
                        >
                            {language === 'ru'
                                ? 'Технологии, инструменты и soft skills'
                                : 'Technologies, tools and soft skills'}
                        </motion.p>

                        <motion.div
                            className="text-lg md:text-xl mb-8 min-h-[2rem]"
                            variants={itemVariants}
                        >
                            <span className="text-light-secondary">
                                {language === 'ru' ? 'Владею: ' : 'Proficient in: '}
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
                            <div className="p-4 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
                                <div className="text-3xl font-bold text-gradient">15+</div>
                                <div className="text-sm text-light-secondary">
                                    {language === 'ru' ? 'Технологий' : 'Technologies'}
                                </div>
                            </div>
                            <div className="p-4 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
                                <div className="text-3xl font-bold text-gradient">0 </div>
                                <div className="text-sm text-light-secondary">
                                    {language === 'ru' ? 'Без опыт' : 'With no experience'}
                                </div>
                            </div>
                            <div className="p-4 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
                                <div className="text-3xl font-bold text-gradient">85%</div>
                                <div className="text-sm text-light-secondary">
                                    {language === 'ru' ? 'Ср. уровень' : 'Avg Level'}
                                </div>
                            </div>
                        </motion.div>

                        {/* Quick Skills Tags */}
                        <motion.div
                            className="flex flex-wrap gap-2 justify-center lg:justify-start"
                            variants={itemVariants}
                        >
                            {['Frontend', 'Backend', 'Database', 'DevOps', 'UI/UX'].map((tag, index) => (
                                <motion.span
                                    key={index}
                                    className="px-4 py-2 bg-gradient-primary/20 backdrop-blur-lg rounded-full text-sm font-semibold border border-primary-blue/30"
                                    whileHover={{ scale: 1.1, borderColor: 'rgb(59, 130, 246)' }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>

                    {/* Orbiting Skills Visualization */}
                    <motion.div
                        className="relative flex justify-center lg:justify-end"
                        variants={itemVariants}
                    >
                        <div className="relative w-80 h-80 md:w-96 md:h-96">
                            {/* Center Hub */}
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center"
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ duration: 1, ease: 'easeOut' }}
                            >
                                <motion.div
                                    className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center shadow-2xl shadow-primary-blue/50 border-4 border-dark"
                                    animate={{
                                        rotate: 360,
                                        boxShadow: [
                                            '0 0 30px rgba(59, 130, 246, 0.5)',
                                            '0 0 60px rgba(139, 92, 246, 0.5)',
                                            '0 0 30px rgba(59, 130, 246, 0.5)',
                                        ]
                                    }}
                                    transition={{
                                        rotate: { duration: 30, repeat: Infinity, ease: 'linear' },
                                        boxShadow: { duration: 3, repeat: Infinity }
                                    }}
                                >
                                    <div className="text-center">
                                        <FaJs className="text-5xl text-white mb-1 mx-auto" />
                                        <div className="text-xs font-bold text-white">Tech Stack</div>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Orbiting Technology Icons */}
                            {orbitingSkills.map((skill, index) => {
                                const angle = (index / orbitingSkills.length) * 360
                                const radius = 150

                                return (
                                    <motion.div
                                        key={index}
                                        className={`absolute w-16 h-16 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center shadow-xl text-white text-3xl cursor-pointer`}
                                        style={{
                                            left: '50%',
                                            top: '50%',
                                        }}
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{
                                            scale: 1,
                                            opacity: 1,
                                            x: [
                                                Math.cos((angle * Math.PI) / 180) * radius - 32,
                                                Math.cos(((angle + 360) * Math.PI) / 180) * radius - 32,
                                            ],
                                            y: [
                                                Math.sin((angle * Math.PI) / 180) * radius - 32,
                                                Math.sin(((angle + 360) * Math.PI) / 180) * radius - 32,
                                            ],
                                        }}
                                        transition={{
                                            scale: { duration: 0.5, delay: skill.delay * 0.1 },
                                            opacity: { duration: 0.5, delay: skill.delay * 0.1 },
                                            x: { duration: 25, repeat: Infinity, ease: 'linear' },
                                            y: { duration: 25, repeat: Infinity, ease: 'linear' },
                                        }}
                                        whileHover={{
                                            scale: 1.3,
                                            rotate: 180,
                                            zIndex: 50,
                                        }}
                                    >
                                        {skill.icon}
                                    </motion.div>
                                )
                            })}

                            {/* Orbit Rings */}
                            <motion.div
                                className="absolute inset-0 border-2 border-dashed border-white/10 rounded-full"
                                style={{ margin: '20%' }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                            />
                            <motion.div
                                className="absolute inset-0 border border-white/5 rounded-full"
                                style={{ margin: '15%' }}
                                animate={{ rotate: -360 }}
                                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                            />
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
                            {language === 'ru' ? 'Листайте вниз' : 'Scroll down'}
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

export default SkillsPageHero