import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import Button from '@/components/common/Button'
import { FaArrowRight, FaRocket } from 'react-icons/fa'

const CTASection = () => {
    const { language, t } = useLanguage()

    return (
        <section className="section-padding relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/20 via-primary-purple/20 to-primary-blue/20" />

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute -top-40 -right-40 w-80 h-80 bg-primary-blue/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-purple/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1,
                    }}
                />
            </div>

            <div className="container-custom relative z-10">
                <motion.div
                    className="text-center max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Icon */}
                    <motion.div
                        className="flex justify-center mb-8"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary-blue/30">
                            <FaRocket size={40} className="text-white" />
                        </div>
                    </motion.div>

                    {/* Title */}
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-gradient">{t('home.cta2.title')}</span>
                    </h2>

                    {/* Description */}
                    <p className="text-xl text-light-secondary mb-8">
                        {t('home.cta2.description')}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 mb-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="text-3xl font-bold text-gradient">20+</div>
                            <div className="text-sm text-light-secondary">
                                {language === 'ru' ? 'Проектов' : 'Projects'}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="text-3xl font-bold text-gradient">95%</div>
                            <div className="text-sm text-light-secondary">
                                {language === 'ru' ? 'Довольных клиентов' : 'Happy Clients'}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="text-3xl font-bold text-gradient">24/7</div>
                            <div className="text-sm text-light-secondary">
                                {language === 'ru' ? 'Поддержка' : 'Support'}
                            </div>
                        </motion.div>
                    </div>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <Button
                            to="/contact"
                            variant="primary"
                            size="lg"
                            className="group"
                        >
                            {t('home.cta2.button')}
                            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            to="/portfolio"
                            variant="secondary"
                            size="lg"
                        >
                            {language === 'ru' ? 'Смотреть портфолио' : 'View Portfolio'}
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default CTASection