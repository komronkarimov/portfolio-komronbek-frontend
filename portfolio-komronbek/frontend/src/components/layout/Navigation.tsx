import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { NAV_LINKS } from '@/utils/constants'

const Navigation = () => {
    const { language } = useLanguage()

    return (
        <nav className="flex items-center gap-8">
            {NAV_LINKS.map((link, index) => (
                <motion.div
                    key={link.to}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <NavLink
                        to={link.to}
                        className={({ isActive }) =>
                            `relative text-sm font-medium transition-colors hover:text-primary-blue ${isActive ? 'text-primary-blue' : 'text-white'
                            }`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                {language === 'ru' ? link.labelRu : link.labelEn}
                                {isActive && (
                                    <motion.span
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-primary"
                                        layoutId="navbar-indicator"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </>
                        )}
                    </NavLink>
                </motion.div>
            ))}
        </nav>
    )
}

export default Navigation