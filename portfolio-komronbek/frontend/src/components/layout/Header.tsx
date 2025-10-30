import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import Navigation from './Navigation'
import MobileMenu from './MobileMenu'
import LanguageSwitcher from './LanguageSwitcher'

const Header = () => {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { language } = useLanguage()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false)
    }, [])

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                        ? 'bg-dark/95 backdrop-blur-lg shadow-lg h-16'
                        : 'bg-dark/80 backdrop-blur-sm h-20'
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container-custom h-full flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="relative group"
                    >
                        <span className="text-2xl md:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                            КК
                        </span>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        <Navigation />
                        <LanguageSwitcher />
                        <Link
                            to="/contact"
                            className="btn-primary px-6 py-2 text-sm"
                        >
                            {language === 'ru' ? 'Связаться' : 'Contact'}
                        </Link>
                    </div>

                    {/* Mobile Menu Controls */}
                    <div className="flex lg:hidden items-center gap-4">
                        <LanguageSwitcher />
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-white p-2 hover:text-primary-blue transition-colors"
                            aria-label="Toggle menu"
                        >
                            <motion.svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {mobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </motion.svg>
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
                )}
            </AnimatePresence>
        </>
    )
}

export default Header