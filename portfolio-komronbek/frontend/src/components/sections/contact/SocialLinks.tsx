import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { SOCIAL_LINKS } from '@/utils/constants'
import SectionTitle from '@/components/common/SectionTitle'
import {
    FaGithub,
    FaLinkedin,
    FaTelegram,
    FaInstagram,
    FaEnvelope
} from 'react-icons/fa'
import { FaVk } from 'react-icons/fa6'

const SocialLinks = () => {
    const { language } = useLanguage()

    const socialNetworks = [
        {
            name: 'GitHub',
            url: SOCIAL_LINKS.github,
            icon: <FaGithub size={32} />,
            color: 'hover:bg-gray-700',
            description: language === 'ru' ? 'Мои проекты и код' : 'My projects and code',
        },
        {
            name: 'LinkedIn',
            url: SOCIAL_LINKS.linkedin,
            icon: <FaLinkedin size={32} />,
            color: 'hover:bg-blue-700',
            description: language === 'ru' ? 'Профессиональная сеть' : 'Professional network',
        },
        {
            name: 'Telegram',
            url: SOCIAL_LINKS.telegram,
            icon: <FaTelegram size={32} />,
            color: 'hover:bg-blue-500',
            description: language === 'ru' ? 'Быстрая связь' : 'Quick contact',
        },
        {
            name: 'VK',
            url: SOCIAL_LINKS.vk,
            icon: <FaVk size={32} />,
            color: 'hover:bg-blue-600',
            description: language === 'ru' ? 'Социальная сеть' : 'Social network',
        },
        {
            name: 'Instagram',
            url: SOCIAL_LINKS.instagram,
            icon: <FaInstagram size={32} />,
            color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600',
            description: language === 'ru' ? 'Фото и истории' : 'Photos and stories',
        },
        {
            name: 'Email',
            url: SOCIAL_LINKS.email,
            icon: <FaEnvelope size={32} />,
            color: 'hover:bg-red-600',
            description: language === 'ru' ? 'Написать письмо' : 'Send email',
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
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 },
        },
    }

    return (
        <section className="mt-16">
            <SectionTitle
                title={language === 'ru' ? 'Найдите меня в социальных сетях' : 'Find Me on Social Media'}
                align="center"
            />

            <motion.div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {socialNetworks.map((social, index) => (
                    <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={itemVariants}
                        whileHover={{ y: -10, scale: 1.05 }}
                        className={`group p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10
                     hover:border-primary-blue/50 transition-all text-center ${social.color}`}
                    >
                        <div className="flex justify-center mb-3 text-white group-hover:scale-110 transition-transform">
                            {social.icon}
                        </div>
                        <h3 className="font-semibold mb-1">{social.name}</h3>
                        <p className="text-xs text-light-secondary">{social.description}</p>
                    </motion.a>
                ))}
            </motion.div>
        </section>
    )
}

export default SocialLinks