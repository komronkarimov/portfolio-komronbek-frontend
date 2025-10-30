// frontend/src/components/sections/home/HeroSection.tsx

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTypingEffect } from '@/hooks/useTypingEffect'
import Button from '@/components/common/Button'
import ParticlesBackground from '@/components/animations/ParticlesBackground'
import { FaDownload, FaArrowRight } from 'react-icons/fa'
import profilePhoto from './profile.jpg'
import resume from './resume.pdf'
const HeroSection = () => {
    const { language, t } = useLanguage()

    // Placeholder для фото профиля
    // const profilePhoto = `https://ui-avatars.com/api/?name=Komronbek+Karimov&size=400&background=0a0e27&color=00d4ff&bold=true&format=svg`

    const dynamicWords = language === 'ru'
        ? ['адаптивные веб-сайты', 'интерактивные интерфейсы', 'современные веб-приложения', 'эффективный код']
        : ['responsive websites', 'interactive interfaces', 'modern web applications', 'efficient code']

    const typedText = useTypingEffect({ words: dynamicWords })

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
                            className="text-primary-blue text-lg mb-4"
                            variants={itemVariants}
                        >
                            {t('home.greeting')}
                        </motion.p>

                        <motion.h1
                            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                            variants={itemVariants}
                        >
                            <span className="text-gradient">{t('home.name')}</span>
                        </motion.h1>

                        <motion.p
                            className="text-xl md:text-2xl text-light-secondary mb-8"
                            variants={itemVariants}
                        >
                            {t('home.subtitle')}
                        </motion.p>

                        <motion.div
                            className="text-lg md:text-xl mb-8 h-8"
                            variants={itemVariants}
                        >
                            <span className="text-light-secondary">
                                {language === 'ru' ? 'Я создаю ' : 'I create '}
                            </span>
                            <span className="text-gradient font-semibold">
                                {typedText}
                                <span className="animate-blink">|</span>
                            </span>
                        </motion.div>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            variants={itemVariants}
                        >
                            <Button
                                to="/portfolio"
                                variant="primary"
                                size="lg"
                            >
                                {t('home.cta.portfolio')}
                                <FaArrowRight className="ml-2" />
                            </Button>
                            <Button
                                href={resume}
                                variant="secondary"
                                size="lg"
                                external
                            >
                                {t('home.cta.resume')}
                                <FaDownload className="ml-2" />
                            </Button>
                        </motion.div>
                    </div>

                    {/* Profile Photo */}
                    <motion.div
                        className="relative flex justify-center lg:justify-end"
                        variants={itemVariants}
                    >
                        <div className="relative">
                            {/* Animated border */}
                            <motion.div
                                className="absolute inset-0 rounded-full bg-gradient-primary"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                            />

                            {/* Photo container */}
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-dark m-1">
                                <img
                                    src={profilePhoto}
                                    alt="Komronbek Karimov"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Floating elements */}
                            <motion.div
                                className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-lg"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <span className="text-2xl">👨‍💻</span>
                            </motion.div>

                            <motion.div
                                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-lg"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 2.5, repeat: Infinity }}
                            >
                                <span className="text-2xl">🚀</span>
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
    )
}

export default HeroSection