import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import Card from '@/components/common/Card'
import {
    FaMapMarkerAlt,
    FaBirthdayCake,
    FaUniversity,
    FaBriefcase
} from 'react-icons/fa'

const QuickFacts = () => {
    const { language } = useLanguage()

    const facts = [
        {
            icon: <FaMapMarkerAlt size={32} className="text-primary-blue" />,
            title: language === 'ru' ? 'Местоположение' : 'Location',
            value: language === 'ru' ? 'Москва, Россия' : 'Moscow, Russia',
            emoji: '🌍',
        },
        {
            icon: <FaBirthdayCake size={32} className="text-primary-purple" />,
            title: language === 'ru' ? 'Возраст' : 'Age',
            value: language === 'ru' ? '20 лет' : '20 years old',
            emoji: '🎂',
        },
        {
            icon: <FaUniversity size={32} className="text-green-500" />,
            title: language === 'ru' ? 'Университет' : 'University',
            value: language === 'ru' ? 'Московский Политех' : 'Moscow Polytech',
            emoji: '🎓',
        },
        {
            icon: <FaBriefcase size={32} className="text-yellow-500" />,
            title: language === 'ru' ? 'Статус' : 'Status',
            value: language === 'ru' ? 'Открыт для фриланса' : 'Open for freelance',
            emoji: '💼',
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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    }

    return (
        <section className="section-padding bg-light/5">
            <div className="container-custom">
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {facts.map((fact, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="text-center h-full">
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                                        {fact.icon}
                                    </div>
                                </div>
                                <h3 className="text-sm text-light-secondary mb-2">{fact.title}</h3>
                                <p className="text-lg font-semibold flex items-center justify-center gap-2">
                                    {fact.value}
                                    <span className="text-xl">{fact.emoji}</span>
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default QuickFacts