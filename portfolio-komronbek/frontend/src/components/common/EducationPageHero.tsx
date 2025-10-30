import { motion } from 'framer-motion'
import { useTypingEffect } from '@/hooks/useTypingEffect'
import ParticlesBackground from '@/components/animations/ParticlesBackground'
import {
    FaGraduationCap,
    FaCertificate,
    FaBook,
    FaTrophy,
    FaLaptopCode,
    FaUniversity,
    FaAward,
    FaStar
} from 'react-icons/fa'
import { SiCoursera, SiUdemy } from 'react-icons/si'

interface EducationPageHeroProps {
    language: 'ru' | 'en'
    certificatesCount?: number
    coursesCount?: number
    achievementsCount?: number
}

const EducationPageHero = ({
    language,
    certificatesCount = 5,
    coursesCount = 8,
    achievementsCount = 5
}: EducationPageHeroProps) => {
    // Typing effect для образовательных достижений
    const educationAchievements = language === 'ru'
        ? ['Студент 2 курса', 'Средний балл 4.5/5.0', '5+ Сертификатов', '8+ Онлайн курсов', 'Активное обучение']
        : ['2nd Year Student', 'GPA 4.5/5.0', '5+ Certificates', '8+ Online Courses', 'Active Learning']

    const typedText = useTypingEffect({ words: educationAchievements, typingSpeed: 80, deletingSpeed: 40 })

    // Образовательные элементы для визуализации
    const educationElements = [
        {
            icon: <FaUniversity />,
            name: language === 'ru' ? 'Университет' : 'University',
            color: 'from-blue-600 to-blue-400',
            position: { angle: 0 },
            description: language === 'ru' ? 'Московский Политех' : 'Moscow Polytech'
        },
        {
            icon: <FaCertificate />,
            name: language === 'ru' ? 'Сертификаты' : 'Certificates',
            color: 'from-purple-600 to-purple-400',
            position: { angle: 72 },
            description: `${certificatesCount}+`
        },
        {
            icon: <FaBook />,
            name: language === 'ru' ? 'Курсы' : 'Courses',
            color: 'from-green-600 to-green-400',
            position: { angle: 144 },
            description: `${coursesCount}+`
        },
        {
            icon: <FaTrophy />,
            name: language === 'ru' ? 'Достижения' : 'Achievements',
            color: 'from-yellow-600 to-yellow-400',
            position: { angle: 216 },
            description: `${achievementsCount}+`
        },
        {
            icon: <FaLaptopCode />,
            name: language === 'ru' ? 'Практика' : 'Practice',
            color: 'from-pink-600 to-pink-400',
            position: { angle: 288 },
            description: language === 'ru' ? '2+ года' : '2+ years'
        },
    ]

    // Платформы обучения
    const learningPlatforms = [
        { icon: <SiCoursera />, color: 'text-blue-400', delay: 0 },
        { icon: <SiUdemy />, color: 'text-purple-400', delay: 0.5 },
        { icon: <FaBook />, color: 'text-green-400', delay: 1 },
        { icon: <FaCertificate />, color: 'text-orange-400', delay: 1.5 },
        { icon: <FaAward />, color: 'text-yellow-400', delay: 2 },
        { icon: <FaStar />, color: 'text-pink-400', delay: 2.5 },
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
                    className="absolute top-1/3 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"
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
                            {language === 'ru' ? '🎓 Мой путь в обучении' : '🎓 My Learning Journey'}
                        </motion.p>

                        <motion.h1
                            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                            variants={itemVariants}
                        >
                            <span className="text-gradient">
                                {language === 'ru' ? 'Образование' : 'Education'}
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-xl md:text-2xl text-light-secondary mb-8"
                            variants={itemVariants}
                        >
                            {language === 'ru'
                                ? 'Академический путь и профессиональное развитие'
                                : 'Academic path and professional development'}
                        </motion.p>

                        <motion.div
                            className="text-lg md:text-xl mb-8 min-h-[2rem]"
                            variants={itemVariants}
                        >
                            <span className="text-light-secondary">
                                {language === 'ru' ? 'Статус: ' : 'Status: '}
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
                                <div className="text-3xl font-bold text-gradient">{certificatesCount}</div>
                                <div className="text-sm text-light-secondary">
                                    {language === 'ru' ? 'Сертификатов' : 'Certificates'}
                                </div>
                            </div>
                            <div className="p-4 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-primary-blue/50 transition-all">
                                <div className="text-3xl font-bold text-gradient">{coursesCount}</div>
                                <div className="text-sm text-light-secondary">
                                    {language === 'ru' ? 'Курсов' : 'Courses'}
                                </div>
                            </div>
                            <div className="p-4 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-primary-blue/50 transition-all">
                                <div className="text-3xl font-bold text-gradient">4.5</div>
                                <div className="text-sm text-light-secondary">
                                    GPA
                                </div>
                            </div>
                        </motion.div>

                        {/* Learning Path Badges */}
                        <motion.div
                            className="flex flex-wrap gap-3 justify-center lg:justify-start"
                            variants={itemVariants}
                        >
                            {[
                                language === 'ru' ? 'Бакалавр' : 'Bachelor',
                                language === 'ru' ? '2 курс' : '2nd Year',
                                language === 'ru' ? 'Онлайн обучение' : 'Online Learning',
                                language === 'ru' ? 'Самообразование' : 'Self-Education'
                            ].map((tag, index) => (
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

                    {/* Education Visualization */}
                    <motion.div
                        className="relative flex justify-center lg:justify-end"
                        variants={itemVariants}
                    >
                        <div className="relative w-80 h-80 md:w-96 md:h-96">
                            {/* Central Education Hub */}
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
                                        <div className="absolute inset-0" style={{
                                            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                                            backgroundSize: '10px 10px'
                                        }} />
                                    </div>

                                    <FaGraduationCap className="text-5xl text-white mb-2 relative z-10" />
                                    <div className="text-sm font-bold text-white relative z-10 text-center">
                                        {language === 'ru' ? 'Непрерывное' : 'Continuous'}
                                        <br />
                                        {language === 'ru' ? 'обучение' : 'Learning'}
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Orbiting Education Elements */}
                            {educationElements.map((element, index) => {
                                const angle = element.position.angle
                                const radius = 150

                                return (
                                    <motion.div
                                        key={index}
                                        className={`absolute cursor-pointer group`}
                                        style={{
                                            left: '50%',
                                            top: '50%',
                                        }}
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{
                                            scale: 1,
                                            opacity: 1,
                                            x: [
                                                Math.cos((angle * Math.PI) / 180) * radius - 40,
                                                Math.cos(((angle + 360) * Math.PI) / 180) * radius - 40,
                                            ],
                                            y: [
                                                Math.sin((angle * Math.PI) / 180) * radius - 40,
                                                Math.sin(((angle + 360) * Math.PI) / 180) * radius - 40,
                                            ],
                                        }}
                                        transition={{
                                            scale: { duration: 0.5, delay: index * 0.1 },
                                            opacity: { duration: 0.5, delay: index * 0.1 },
                                            x: { duration: 20, repeat: Infinity, ease: 'linear' },
                                            y: { duration: 20, repeat: Infinity, ease: 'linear' },
                                        }}
                                        whileHover={{
                                            scale: 1.2,
                                            zIndex: 50,
                                        }}
                                    >
                                        <div className={`w-20 h-20 bg-gradient-to-br ${element.color} rounded-2xl p-3 shadow-xl text-white border-2 border-white/20 flex flex-col items-center justify-center`}>
                                            <div className="text-2xl mb-1">{element.icon}</div>
                                            <div className="text-[10px] font-bold text-center leading-tight">
                                                {element.description}
                                            </div>
                                        </div>

                                        {/* Tooltip */}
                                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-dark/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
                                            {element.name}
                                        </div>
                                    </motion.div>
                                )
                            })}

                            {/* Floating Platform Icons */}
                            {learningPlatforms.map((platform, index) => (
                                <motion.div
                                    key={index}
                                    className={`absolute ${platform.color} text-3xl`}
                                    style={{
                                        left: `${15 + (index % 3) * 35}%`,
                                        top: `${5 + Math.floor(index / 3) * 45}%`,
                                    }}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{
                                        opacity: [0.2, 0.6, 0.2],
                                        scale: [1, 1.3, 1],
                                        y: [0, -25, 0],
                                    }}
                                    transition={{
                                        delay: platform.delay,
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    {platform.icon}
                                </motion.div>
                            ))}

                            {/* Orbit Rings */}
                            <motion.div
                                className="absolute inset-0 border-2 border-dashed border-primary-blue/20 rounded-full"
                                style={{ margin: '18%' }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                            />
                            <motion.div
                                className="absolute inset-0 border border-primary-purple/10 rounded-full"
                                style={{ margin: '12%' }}
                                animate={{ rotate: -360 }}
                                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                            />

                            {/* Connection Lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                                {educationElements.map((element, index) => {
                                    const angle = element.position.angle
                                    const radius = 150
                                    return (
                                        <motion.line
                                            key={index}
                                            x1="50%"
                                            y1="50%"
                                            x2={`calc(50% + ${Math.cos((angle * Math.PI) / 180) * radius}px)`}
                                            y2={`calc(50% + ${Math.sin((angle * Math.PI) / 180) * radius}px)`}
                                            stroke="rgba(59, 130, 246, 0.15)"
                                            strokeWidth="1"
                                            strokeDasharray="3,3"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{ pathLength: 1, opacity: 1 }}
                                            transition={{ delay: 1 + index * 0.1, duration: 0.8 }}
                                        />
                                    )
                                })}
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
                            {language === 'ru' ? 'Узнать больше' : 'Learn More'}
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

export default EducationPageHero