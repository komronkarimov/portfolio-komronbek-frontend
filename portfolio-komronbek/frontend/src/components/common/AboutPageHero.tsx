import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTypingEffect } from '@/hooks/useTypingEffect'
import ParticlesBackground from '@/components/animations/ParticlesBackground'
import { FaGraduationCap, FaBriefcase, FaRocket, FaStar, FaGlobeAmericas, FaCode, FaLightbulb, FaUserGraduate, FaChartLine } from 'react-icons/fa'

const CareerGoals = () => {
    const { language } = useLanguage()

    const translations = {
        ru: {
            greeting: 'Мой путь в IT',
            title: 'Карьерные цели',
            subtitle: 'От студента до профессионала',
            metaDescription: 'Карьерные цели и план профессионального развития full-stack разработчика: от студента до лидера в IT. Стажировки, международный опыт, рост в веб-разработке.',
            keywords: 'карьерные цели разработчика, full-stack developer карьера, план развития программиста, IT карьера, веб-разработчик',
            roles: [
                { title: 'Студент', icon: <FaUserGraduate />, color: 'from-blue-500 to-cyan-500' },
                { title: 'Разработчик', icon: <FaCode />, color: 'from-purple-500 to-pink-500' },
                { title: 'Энтузиаст', icon: <FaLightbulb />, color: 'from-orange-500 to-yellow-500' }
            ],
            timelineTitle: 'Моя дорожная карта',
            timelineSubtitle: 'Шаги к достижению целей'
        },
        en: {
            greeting: 'My IT Journey',
            title: 'Career Goals',
            subtitle: 'From Student to Professional',
            metaDescription: 'Career goals and professional development plan of a full-stack developer: from student to IT leader. Internships, international experience, web development growth.',
            keywords: 'developer career goals, full-stack developer career, programmer development plan, IT career, web developer',
            roles: [
                { title: 'Student', icon: <FaUserGraduate />, color: 'from-blue-500 to-cyan-500' },
                { title: 'Developer', icon: <FaCode />, color: 'from-purple-500 to-pink-500' },
                { title: 'Enthusiast', icon: <FaLightbulb />, color: 'from-orange-500 to-yellow-500' }
            ],
            timelineTitle: 'My Roadmap',
            timelineSubtitle: 'Steps to achieving goals'
        }
    }

    const t = translations[language]

    // Typing effect для карьерных амбиций
    const careerGoals = language === 'ru'
        ? ['senior Full-Stack Developer', 'tech Lead', 'создатель SaaS продуктов', 'международный опыт']
        : ['senior Full-Stack Developer', 'tech Lead', 'SaaS Product Creator', 'international Experience']

    const typedText = useTypingEffect({ words: careerGoals, typingSpeed: 100, deletingSpeed: 50 })

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
        <>
            <Helmet>
                <title>{t.title} | Full-Stack Developer Portfolio</title>
                <meta name="description" content={t.metaDescription} />
                <meta name="keywords" content={t.keywords} />
                <meta property="og:title" content={`${t.title} | Full-Stack Developer`} />
                <meta property="og:description" content={t.metaDescription} />
                <meta property="og:type" content="profile" />
                <meta property="og:locale" content={language === 'ru' ? 'ru_RU' : 'en_US'} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${t.title} | Full-Stack Developer`} />
                <meta name="twitter:description" content={t.metaDescription} />
                <link rel="canonical" href={`${window.location.origin}/${language}/career-goals`} />
                <link rel="alternate" hrefLang="ru" href={`${window.location.origin}/ru/career-goals`} />
                <link rel="alternate" hrefLang="en" href={`${window.location.origin}/en/career-goals`} />
                <link rel="alternate" hrefLang="x-default" href={`${window.location.origin}/en/career-goals`} />
            </Helmet>

            {/* Hero Section */}
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
                                {t.greeting}
                            </motion.p>

                            <motion.h1
                                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                                variants={itemVariants}
                            >
                                <span className="text-gradient">{t.title}</span>
                            </motion.h1>

                            <motion.p
                                className="text-xl md:text-2xl text-light-secondary mb-8"
                                variants={itemVariants}
                            >
                                {t.subtitle}
                            </motion.p>

                            <motion.div
                                className="text-lg md:text-xl mb-8 min-h-[2rem]"
                                variants={itemVariants}
                            >
                                <span className="text-light-secondary">
                                    {language === 'ru' ? 'Стремлюсь стать ' : 'Aiming to become '}
                                </span>
                                <span className="text-gradient font-semibold">
                                    {typedText}
                                    <span className="animate-blink">|</span>
                                </span>
                            </motion.div>

                            {/* Role Badges */}
                            <motion.div
                                className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
                                variants={itemVariants}
                            >
                                {t.roles.map((role, index) => (
                                    <motion.div
                                        key={index}
                                        className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${role.color} rounded-full text-white font-semibold shadow-lg`}
                                        whileHover={{ scale: 1.1, y: -5 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                    >
                                        <span className="text-xl">{role.icon}</span>
                                        <span>{role.title}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Career Visualization */}
                        <motion.div
                            className="relative flex justify-center lg:justify-end"
                            variants={itemVariants}
                        >
                            <div className="relative">
                                {/* Animated border */}
                                <motion.div
                                    className="absolute inset-0 rounded-3xl bg-gradient-primary"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                                />

                                {/* Career Chart Container */}
                                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden border-4 border-dark m-1 bg-gradient-to-br from-dark via-dark-lighter to-dark">
                                    {/* Central Icon */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <motion.div
                                            className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center shadow-2xl"
                                            animate={{
                                                scale: [1, 1.1, 1],
                                                rotate: [0, 360]
                                            }}
                                            transition={{
                                                scale: { duration: 2, repeat: Infinity },
                                                rotate: { duration: 20, repeat: Infinity, ease: 'linear' }
                                            }}
                                        >
                                            <FaChartLine className="text-5xl text-white" />
                                        </motion.div>
                                    </div>

                                    {/* Orbiting Icons */}
                                    {[
                                        { icon: <FaGraduationCap />, angle: 0, color: 'from-green-500 to-emerald-500' },
                                        { icon: <FaBriefcase />, angle: 72, color: 'from-blue-500 to-cyan-500' },
                                        { icon: <FaGlobeAmericas />, angle: 144, color: 'from-purple-500 to-pink-500' },
                                        { icon: <FaRocket />, angle: 216, color: 'from-orange-500 to-red-500' },
                                        { icon: <FaStar />, angle: 288, color: 'from-yellow-500 to-amber-500' },
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className={`absolute w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-xl text-white text-2xl`}
                                            style={{
                                                left: '50%',
                                                top: '50%',
                                            }}
                                            animate={{
                                                x: [
                                                    Math.cos((item.angle * Math.PI) / 180) * 120 - 32,
                                                    Math.cos(((item.angle + 360) * Math.PI) / 180) * 120 - 32,
                                                ],
                                                y: [
                                                    Math.sin((item.angle * Math.PI) / 180) * 120 - 32,
                                                    Math.sin(((item.angle + 360) * Math.PI) / 180) * 120 - 32,
                                                ],
                                            }}
                                            transition={{
                                                duration: 20,
                                                repeat: Infinity,
                                                ease: 'linear',
                                                delay: index * 0.5,
                                            }}
                                            whileHover={{ scale: 1.2, rotate: 180 }}
                                        >
                                            {item.icon}
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Floating Stats */}
                                <motion.div
                                    className="absolute -top-4 -right-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-4 shadow-2xl"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <div className="text-white text-center">
                                        <div className="text-3xl font-bold"></div>
                                        <div className="text-xs">{language === 'ru' ? 'Без опыта' : 'With no experience'}</div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="absolute -bottom-4 -left-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-4 shadow-2xl"
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 2.5, repeat: Infinity }}
                                >
                                    <div className="text-white text-center">
                                        <div className="text-3xl font-bold">∞</div>
                                        <div className="text-xs">{language === 'ru' ? 'Амбиции' : 'Ambitions'}</div>
                                    </div>
                                </motion.div>
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
                            <p className="text-sm mb-2">{language === 'ru' ? 'Листайте вниз' : 'Scroll down'}</p>
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
        </>
    )
}

export default CareerGoals