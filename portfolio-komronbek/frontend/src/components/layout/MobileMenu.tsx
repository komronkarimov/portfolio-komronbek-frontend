import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { NAV_LINKS, SOCIAL_LINKS } from '@/utils/constants'
import { FaGithub, FaLinkedin, FaTelegram, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { FaVk } from 'react-icons/fa6'

interface MobileMenuProps {
    isOpen: boolean
    onClose: () => void
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
    const { language } = useLanguage()

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const menuVariants = {
        closed: { x: '100%' },
        open: { x: 0 },
    }

    const linkVariants = {
        closed: { opacity: 0, x: 50 },
        open: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.1,
            },
        }),
    }

    const socialIcons = {
        github: <FaGithub size={24} />,
        linkedin: <FaLinkedin size={24} />,
        telegram: <FaTelegram size={24} />,
        vk: <FaVk size={24} />,
        instagram: <FaInstagram size={24} />,
        email: <FaEnvelope size={24} />,
    }

    return (
        <>
            {/* Backdrop */}
            <motion.div
                className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            />

            {/* Menu */}
            <motion.div
                className="lg:hidden fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-dark border-l border-white/10 shadow-2xl"
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-white/10">
                        <h2 className="text-xl font-bold text-gradient">
                            {language === 'ru' ? 'Меню' : 'Menu'}
                        </h2>
                        <button
                            onClick={onClose}
                            className="text-white hover:text-primary-blue transition-colors"
                            aria-label="Close menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex-1 overflow-y-auto py-8 px-6">
                        <div className="space-y-4">
                            {NAV_LINKS.map((link, index) => (
                                <motion.div
                                    key={link.to}
                                    custom={index}
                                    variants={linkVariants}
                                    initial="closed"
                                    animate="open"
                                >
                                    <NavLink
                                        to={link.to}
                                        onClick={onClose}
                                        className={({ isActive }) =>
                                            `block py-3 px-4 rounded-lg text-lg font-medium transition-all ${isActive
                                                ? 'bg-gradient-primary text-white shadow-lg'
                                                : 'text-white hover:bg-white/5 hover:text-primary-blue'
                                            }`
                                        }
                                    >
                                        {language === 'ru' ? link.labelRu : link.labelEn}
                                    </NavLink>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <motion.div
                            custom={NAV_LINKS.length}
                            variants={linkVariants}
                            initial="closed"
                            animate="open"
                            className="mt-8"
                        >
                            <NavLink
                                to="/contact"
                                onClick={onClose}
                                className="btn-primary w-full text-center"
                            >
                                {language === 'ru' ? 'Связаться со мной' : 'Contact Me'}
                            </NavLink>
                        </motion.div>
                    </nav>

                    {/* Social Links */}
                    <div className="p-6 border-t border-white/10">
                        <p className="text-sm text-light-secondary mb-4">
                            {language === 'ru' ? 'Социальные сети' : 'Social Media'}
                        </p>
                        <div className="flex gap-4">
                            {Object.entries(SOCIAL_LINKS).map(([key, url]) => (
                                <a
                                    key={key}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-light-secondary hover:text-primary-blue transition-colors"
                                >
                                    {socialIcons[key as keyof typeof socialIcons]}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default MobileMenu