import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { LANGUAGE_SKILLS } from '@/utils/constants'
import Card from '@/components/common/Card'
import SectionTitle from '@/components/common/SectionTitle'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

const LanguageSkills = () => {
    const { language } = useLanguage()

    const renderStars = (count: number) => {
        const stars = []
        const fullStars = Math.floor(count)
        const hasHalfStar = count % 1 !== 0

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <FaStar className="text-yellow-500" />
                    </motion.div>
                )
            } else if (i === fullStars && hasHalfStar) {
                stars.push(
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <FaStarHalfAlt className="text-yellow-500" />
                    </motion.div>
                )
            } else {
                stars.push(
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <FaRegStar className="text-white/20" />
                    </motion.div>
                )
            }
        }
        return stars
    }

    return (
        <section className="section-padding bg-gradient-dark">
            <div className="container-custom">
                <SectionTitle
                    title={language === 'ru' ? 'Языковые навыки' : 'Language Skills'}
                    subtitle={language === 'ru'
                        ? 'Мультиязычность как преимущество в международной среде'
                        : 'Multilingualism as an advantage in international environment'
                    }
                    gradient
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {LANGUAGE_SKILLS.map((lang, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:border-primary-blue/50">
                                {/* Flag and Language Name */}
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-5xl">{lang.flag}</span>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold">
                                            {language === 'ru' ? lang.language : lang.languageEn}
                                        </h3>
                                        <p className="text-light-secondary">{lang.level}</p>
                                    </div>
                                </div>

                                {/* Stars Rating */}
                                <div className="flex gap-1 mb-4">
                                    {renderStars(lang.stars)}
                                </div>

                                {/* Description */}
                                <p className="text-light-secondary">{lang.description}</p>

                                {/* Progress Bar Visual */}
                                <div className="mt-4">
                                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-gradient-primary"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${(lang.stars / 5) * 100}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, ease: 'easeOut' }}
                                        />
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Language Benefits */}
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="inline-block p-6 bg-white/5 rounded-2xl border border-white/10">
                        <p className="text-lg text-light-secondary mb-2">
                            {language === 'ru'
                                ? '🌍 Свободно общаюсь на 4 языках'
                                : '🌍 Fluently communicate in 4 languages'}
                        </p>
                        <p className="text-sm text-light-secondary">
                            {language === 'ru'
                                ? 'Готов к работе в международных командах'
                                : 'Ready to work in international teams'}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default LanguageSkills