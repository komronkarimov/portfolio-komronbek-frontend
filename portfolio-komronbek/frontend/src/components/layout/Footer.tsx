import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { NAV_LINKS, SOCIAL_LINKS, PERSONAL_INFO } from '@/utils/constants'
import {
    FaGithub,
    FaLinkedin,
    FaTelegram,
    FaInstagram,
    FaEnvelope,
    FaMapMarkerAlt,
    FaHeart,
    FaCoffee
} from 'react-icons/fa'
import { FaVk } from 'react-icons/fa6'

const Footer = () => {
    const { language } = useLanguage()
    const currentYear = new Date().getFullYear()

    const socialIcons = {
        github: <FaGithub size={20} />,
        linkedin: <FaLinkedin size={20} />,
        telegram: <FaTelegram size={20} />,
        vk: <FaVk size={20} />,
        instagram: <FaInstagram size={20} />,
        email: <FaEnvelope size={20} />,
    }

    return (
        <footer className="bg-gradient-dark border-t border-white/10">
            <div className="container-custom py-12 lg:py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

                    {/* About Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-xl font-bold mb-4 text-gradient">
                            {language === 'ru' ? 'Комронбек Каримов' : 'Komronbek Karimov'}
                        </h3>
                        <p className="text-light-secondary mb-4">
                            {language === 'ru'
                                ? 'Создаю современные сайты и веб-приложения.'
                                : 'Creating modern websites and web applications.'
                            }
                        </p>
                        <div className="flex gap-3">
                            {Object.entries(SOCIAL_LINKS).map(([key, url]) => (
                                <a
                                    key={key}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center
                           text-light-secondary hover:bg-gradient-primary hover:text-white
                           transition-all duration-300 hover:scale-110"
                                    aria-label={key}
                                >
                                    {socialIcons[key as keyof typeof socialIcons]}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h4 className="text-lg font-semibold mb-4">
                            {language === 'ru' ? 'Быстрые ссылки' : 'Quick Links'}
                        </h4>
                        <ul className="space-y-2">
                            {NAV_LINKS.slice(0, 4).map(link => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className="text-light-secondary hover:text-primary-blue transition-colors inline-flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-4"></span>
                                        {language === 'ru' ? link.labelRu : link.labelEn}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h4 className="text-lg font-semibold mb-4">
                            {language === 'ru' ? 'Услуги' : 'Services'}
                        </h4>
                        <ul className="space-y-2">
                            <li className="text-light-secondary">
                                {language === 'ru' ? '✨ Веб-разработка' : '✨ Web Development'}
                            </li>
                            <li className="text-light-secondary">
                                {language === 'ru' ? '📱 Адаптивный дизайн' : '📱 Responsive Design'}
                            </li>
                            <li className="text-light-secondary">
                                {language === 'ru' ? '🚀 Оптимизация сайтов' : '🚀 Website Optimization'}
                            </li>
                            <li className="text-light-secondary">
                                {language === 'ru' ? '🛠️ Техподдержка' : '🛠️ Technical Support'}
                            </li>
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h4 className="text-lg font-semibold mb-4">
                            {language === 'ru' ? 'Контакты' : 'Contact'}
                        </h4>
                        <div className="space-y-3">
                            <a
                                href={`mailto:${PERSONAL_INFO.email}`}
                                className="flex items-center gap-3 text-light-secondary hover:text-primary-blue transition-colors"
                            >
                                <FaEnvelope className="flex-shrink-0" />
                                <span className="text-sm break-all">{PERSONAL_INFO.email}</span>
                            </a>
                            <div className="flex items-center gap-3 text-light-secondary">
                                <FaMapMarkerAlt className="flex-shrink-0" />
                                <span className="text-sm">
                                    {language === 'ru' ? PERSONAL_INFO.location : PERSONAL_INFO.locationEn}
                                </span>
                            </div>
                        </div>

                        {/* Newsletter Form */}
                        <div className="mt-6">
                            <p className="text-sm text-light-secondary mb-2">
                                {language === 'ru' ? 'Подпишитесь на обновления' : 'Subscribe to updates'}
                            </p>
                            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder={language === 'ru' ? 'Ваш email' : 'Your email'}
                                    className="input-field flex-1 py-2 text-sm"
                                />
                                <button type="submit" className="btn-primary px-4 py-2 text-sm">
                                    {language === 'ru' ? 'OK' : 'OK'}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-light-secondary text-sm text-center md:text-left">
                            © {currentYear} {language === 'ru' ? 'Комронбек Каримов. Все права защищены.' : 'Komronbek Karimov. All rights reserved.'}
                        </p>
                        <p className="text-light-secondary text-sm flex items-center gap-2">
                            {language === 'ru' ? 'Разработано с' : 'Made with'}
                            <FaHeart className="text-red-500 animate-pulse" />
                            {language === 'ru' ? 'и' : 'and'}
                            <FaCoffee className="text-yellow-500" />
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer