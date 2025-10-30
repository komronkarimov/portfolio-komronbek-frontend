import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { PERSONAL_QUALITIES } from '@/utils/constants'
import Card from '@/components/common/Card'
import SectionTitle from '@/components/common/SectionTitle'

const PersonalQualities = () => {
    const { language } = useLanguage()

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
        <section className="section-padding bg-gradient-dark">
            <div className="container-custom">
                <SectionTitle
                    title={language === 'ru' ? 'Личные качества' : 'Personal Qualities'}
                    subtitle={language === 'ru'
                        ? 'Черты характера, которые помогают мне в работе и жизни'
                        : 'Character traits that help me in work and life'
                    }
                />

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {PERSONAL_QUALITIES.map((quality, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="h-full text-center group hover:border-primary-blue/50">
                                <motion.div
                                    className="text-5xl mb-4"
                                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {quality.icon}
                                </motion.div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-all">
                                    {language === 'ru' ? quality.title : quality.titleEn}
                                </h3>
                                <p className="text-light-secondary">
                                    {language === 'ru' ? quality.description : quality.descriptionEn}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default PersonalQualities