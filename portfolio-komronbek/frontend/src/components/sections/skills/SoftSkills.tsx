import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { SOFT_SKILLS } from '@/utils/constants'
import SectionTitle from '@/components/common/SectionTitle'

const SoftSkills = () => {
    const { language } = useLanguage()

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 20,
            },
        },
    }

    return (
        <section className="section-padding">
            <div className="container-custom">
                <SectionTitle
                    title={language === 'ru' ? 'Soft Skills' : 'Soft Skills'}
                    subtitle={language === 'ru'
                        ? 'Личностные качества и навыки межличностного общения'
                        : 'Personal qualities and interpersonal communication skills'
                    }
                />

            

                {/* Grid Layout Alternative */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {SOFT_SKILLS.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group"
                        >
                            <div className="h-full p-6 bg-white/5 backdrop-blur-lg rounded-2xl 
                            border border-white/10 hover:border-primary-blue/50
                            hover:shadow-lg hover:shadow-primary-blue/20
                            transition-all duration-300 text-center">
                                <motion.div
                                    className="text-4xl mb-3 inline-block"
                                    whileHover={{
                                        rotate: 360,
                                        scale: 1.2,
                                    }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {skill.icon}
                                </motion.div>
                                <h3 className="text-sm font-semibold group-hover:text-gradient transition-all">
                                    {language === 'ru' ? skill.name : skill.nameEn}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default SoftSkills