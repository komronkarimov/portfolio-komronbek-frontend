import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { usePortfolioFilter } from '@/hooks/usePortfolioFilter'
import { PROJECT_CATEGORIES } from '@/utils/constants'

const ProjectFilter = () => {
    const { language } = useLanguage()
    const { activeFilter, setActiveFilter, searchQuery, setSearchQuery } = usePortfolioFilter()

    return (
        <div className="mb-12">
            {/* Search Bar */}
            <motion.div
                className="mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="relative">
                    <input
                        type="text"
                        placeholder={language === 'ru' ? 'Поиск проектов...' : 'Search projects...'}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg
                     text-white placeholder-light-secondary
                     focus:outline-none focus:border-primary-blue focus:ring-2 
                     focus:ring-primary-blue/20 transition-all"
                    />
                    <svg
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-light-secondary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </motion.div>

            {/* Filter Buttons */}
            <motion.div
                className="flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {PROJECT_CATEGORIES.map((category, index) => (
                    <motion.button
                        key={category.value}
                        onClick={() => setActiveFilter(category.value)}
                        className={`px-6 py-3 rounded-lg font-semibold transition-all ${activeFilter === category.value
                                ? 'bg-gradient-primary text-white shadow-lg shadow-primary-blue/30'
                                : 'bg-white/5 text-light-secondary hover:bg-white/10 border border-white/10'
                            }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        {language === 'ru' ? category.labelRu : category.labelEn}
                    </motion.button>
                ))}
            </motion.div>
        </div>
    )
}

export default ProjectFilter