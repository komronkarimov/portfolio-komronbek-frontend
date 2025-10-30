import { motion } from 'framer-motion'
import { useTypingEffect } from '@/hooks/useTypingEffect'
import ParticlesBackground from '@/components/animations/ParticlesBackground'
import {
    FaEnvelope,
    FaPhone,
    FaTelegram,
    FaLinkedin,
    FaGithub,
    FaComments,
    FaHandshake,
    FaClock,
    FaCheckCircle
} from 'react-icons/fa'
import { FaVk } from 'react-icons/fa6'

interface ContactPageHeroProps {
    language: 'ru' | 'en'
    responseTime?: string
    availableChannels?: number
    openProjects?: number
}

const ContactPageHero = ({
    language,
    responseTime = '24h',
    availableChannels = 6,
    openProjects = 5
}: ContactPageHeroProps) => {
    // Typing effect для тем общения
    const contactTopics = language === 'ru'
        ? ['Фриланс-проекты', 'Сотрудничество', 'Стажировки', 'Вопросы', 'Обратная связь']
        : ['Freelance Projects', 'Collaboration', 'Internships', 'Questions', 'Feedback']

    const typedText = useTypingEffect({ words: contactTopics, typingSpeed: 80, deletingSpeed: 40 })

    // Каналы связи для орбитальной визуализации
    const contactChannels = [
        {
            icon: <FaEnvelope />,
            name: 'Email',
            color: 'from-blue-600 to-cyan-500',
            position: { angle: 0 },
        },
        {
            icon: <FaTelegram />,
            name: 'Telegram',
            color: 'from-blue-500 to-blue-600',
            position: { angle: 60 },
        },
        {
            icon: <FaPhone />,
            name: language === 'ru' ? 'Телефон' : 'Phone',
            color: 'from-green-600 to-emerald-500',
            position: { angle: 120 },
        },
        {
            icon: <FaLinkedin />,
            name: 'LinkedIn',
            color: 'from-blue-700 to-blue-800',
            position: { angle: 180 },
        },
        {
            icon: <FaGithub />,
            name: 'GitHub',
            color: 'from-gray-700 to-gray-900',
            position: { angle: 240 },
        },
        {
            icon: <FaVk />,
            name: 'VK',
            color: 'from-blue-600 to-indigo-600',
            position: { angle: 300 },
        },
    ]

    // Плавающие иконки
    const floatingIcons = [
        { icon: <FaEnvelope />, color: 'text-blue-400', delay: 0 },
        { icon: <FaTelegram />, color: 'text-blue-500', delay: 0.5 },
        { icon: <FaPhone />, color: 'text-green-400', delay: 1 },
        { icon: <FaComments />, color: 'text-purple-400', delay: 1.5 },
        { icon: <FaHandshake />, color: 'text-yellow-400', delay: 2 },
        { icon: <FaCheckCircle />, color: 'text-emerald-400', delay: 2.5 },
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
                    className="absolute top-1/2 right-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"
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
                            {language === 'ru' ? '💬 Давайте обсудим ваш проект' : '💬 Let\'s Discuss Your Project'}
                        </motion.p>

                        <motion.h1
                            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                            variants={itemVariants}
                        >
                            <span className="text-gradient">
                                {language === 'ru' ? 'Связаться' : 'Get In Touch'}
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-xl md:text-2xl text-light-secondary mb-8"
                            variants={itemVariants}
                        >
                            {language === 'ru'
                                ? 'Открыт для новых возможностей и сотрудничества'
                                : 'Open for new opportunities and collaboration'}
                        </motion.p>

                        <motion.div
                            className="text-lg md:text-xl mb-8 min-h-[2rem]"
                            variants={itemVariants}
                        >
                            <span className="text-light-secondary">
                                {language === 'ru' ? 'Обсудим: ' : 'Discuss: '}
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
                                <div className="text-3xl font-bold text-gradient">{responseTime}</div>
                                <div className="text-sm text-light-secondary">
                                    {language === 'ru' ? 'Ответ' : 'Response'}
                                </div>
                            </div>
                            <div className="p-4 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-primary-blue/50 transition-all">
                                <div className="text-3xl font-bold text-gradient">{availableChannels}+</div>
                                <div className="text-sm text-light-secondary">
                                    {language === 'ru' ? 'Каналов' : 'Channels'}
                                </div>
                            </div>
                            <div className="p-4 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-primary-blue/50 transition-all">
                                <div className="text-3xl font-bold text-gradient">{openProjects}</div>
                                <div className="text-sm text-light-secondary">
                                    {language === 'ru' ? 'Проектов' : 'Projects'}
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Tags */}
                        <motion.div
                            className="flex flex-wrap gap-3 justify-center lg:justify-start"
                            variants={itemVariants}
                        >
                            {[
                                language === 'ru' ? 'Быстрый ответ' : 'Quick Response',
                                language === 'ru' ? 'Доступен' : 'Available',
                                language === 'ru' ? 'Фриланс' : 'Freelance',
                                language === 'ru' ? 'Удаленно' : 'Remote'
                            ].map((tag, index) => (
                                <motion.span
                                    key={index}
                                    className="px-4 py-2 bg-gradient-primary/20 backdrop-blur-lg rounded-full text-sm font-semibold border border-primary-blue/30"
                                    whileHover={{ scale: 1.1, borderColor: 'rgb(59, 130, 246)' }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    #{tag}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>

                    {/* Contact Visualization */}
                    <motion.div
                        className="relative flex justify-center lg:justify-end"
                        variants={itemVariants}
                    >
                        <div className="relative w-80 h-80 md:w-96 md:h-96">
                            {/* Central Contact Hub */}
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
                                            '0 0 60px rgba(34, 197, 94, 0.5)',
                                            '0 0 30px rgba(59, 130, 246, 0.5)',
                                        ]
                                    }}
                                    transition={{
                                        rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                                        boxShadow: { duration: 3, repeat: Infinity }
                                    }}
                                >
                                    {/* Pulse Effect */}
                                    <motion.div
                                        className="absolute inset-0 opacity-20"
                                        animate={{
                                            scale: [1, 1.2, 1],
                                            opacity: [0.2, 0.4, 0.2],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                        }}
                                        style={{
                                            background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)',
                                        }}
                                    />

                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <FaComments className="text-5xl text-white mb-2 relative z-10" />
                                    </motion.div>
                                    <div className="text-sm font-bold text-white relative z-10 text-center">
                                        {language === 'ru' ? 'Свяжитесь' : 'Contact'}
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Orbiting Contact Channels */}
                            {contactChannels.map((channel, index) => {
                                const angle = channel.position.angle
                                const radius = 150

                                return (
                                    <motion.div
                                        key={index}
                                        className="absolute cursor-pointer group"
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
                                            scale: 1.3,
                                            zIndex: 50,
                                        }}
                                    >
                                        <div className={`w-20 h-20 bg-gradient-to-br ${channel.color} rounded-2xl p-3 shadow-xl text-white border-2 border-white/20 flex items-center justify-center`}>
                                            <div className="text-3xl">{channel.icon}</div>
                                        </div>

                                        {/* Tooltip */}
                                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-dark/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
                                            {channel.name}
                                        </div>
                                    </motion.div>
                                )
                            })}

                            {/* Floating Icons */}
                            {floatingIcons.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={`absolute ${item.color} text-3xl`}
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
                                        delay: item.delay,
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    {item.icon}
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
                                className="absolute inset-0 border border-green-500/10 rounded-full"
                                style={{ margin: '12%' }}
                                animate={{ rotate: -360 }}
                                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                            />

                            {/* Connection Lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                                {contactChannels.map((channel, index) => {
                                    const angle = channel.position.angle
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

                            {/* Online Badge */}
                            <motion.div
                                className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full px-4 py-2 shadow-xl"
                                animate={{
                                    y: [0, -5, 0],
                                    boxShadow: [
                                        '0 10px 30px rgba(34, 197, 94, 0.3)',
                                        '0 10px 40px rgba(34, 197, 94, 0.5)',
                                        '0 10px 30px rgba(34, 197, 94, 0.3)',
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <div className="flex items-center gap-2 text-white text-sm font-bold">
                                    <motion.div
                                        className="w-2 h-2 bg-white rounded-full"
                                        animate={{ opacity: [1, 0.3, 1] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    />
                                    {language === 'ru' ? 'Онлайн' : 'Online'}
                                </div>
                            </motion.div>

                            {/* Response Time Badge */}
                            <motion.div
                                className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-3 shadow-xl"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                whileHover={{ scale: 1.2, rotate: 360 }}
                            >
                                <FaClock className="text-white text-xl" />
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
                        <p className="text-sm mb-2">
                            {language === 'ru' ? 'Способы связи' : 'Contact Methods'}
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

export default ContactPageHero