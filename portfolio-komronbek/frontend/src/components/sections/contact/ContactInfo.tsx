import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { PERSONAL_INFO } from '@/utils/constants'
import Card from '@/components/common/Card'
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaClock
} from 'react-icons/fa'

const ContactInfo = () => {
    const { language } = useLanguage()

    interface ContactMethod {
        icon: JSX.Element
        title: string
        value: string
        link?: string // Сделайте опциональным
        color: string
    }

    const contactMethods: ContactMethod[] = [
        {
            icon: <FaEnvelope size={24} />,
            title: 'Email',
            value: PERSONAL_INFO.email,
            link: `mailto:${PERSONAL_INFO.email}`,
            color: 'text-blue-500',
        },

        {
            icon: <FaPhone size={24} />,
            title: language === 'ru' ? 'Телефон' : 'Phone',
            value: PERSONAL_INFO.phone,
            link: `tel:${PERSONAL_INFO.phone}`,
            color: 'text-green-500',
        },
        {
            icon: <FaMapMarkerAlt size={24} />,
            title: language === 'ru' ? 'Местоположение' : 'Location',
            value: language === 'ru' ? PERSONAL_INFO.location : PERSONAL_INFO.locationEn,
            link: 'https://maps.google.com/?q=Moscow',
            color: 'text-red-500',
        },
        {
            icon: <FaClock size={24} />,
            title: language === 'ru' ? 'Доступность' : 'Availability',
            value: language === 'ru' ? 'Пн-Пт, 10:00 - 20:00 МСК' : 'Mon-Fri, 10:00 - 20:00 MSK',
            color: 'text-purple-500',
        },
    ]

    return (
        <div className="space-y-6">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-bold mb-4">
                    {language === 'ru' ? 'Контактная информация' : 'Contact Information'}
                </h2>
                <p className="text-light-secondary mb-8">
                    {language === 'ru'
                        ? 'Свяжитесь со мной удобным для вас способом. Обычно отвечаю в течение 24 часов.'
                        : 'Contact me in a way that is convenient for you. I usually respond within 24 hours.'
                    }
                </p>
            </motion.div>

            {contactMethods.map((method, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                >
                    <Card className="group hover:border-primary-blue/50">
                        {method.link ? (
                            <a
                                href={method.link}
                                target={method.link.startsWith('http') ? '_blank' : undefined}
                                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="flex items-center gap-4"
                            >
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center 
                        bg-white/5 group-hover:bg-gradient-primary transition-all ${method.color}`}>
                                    {method.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold mb-1">{method.title}</h3>
                                    <p className="text-sm text-light-secondary group-hover:text-primary-blue transition-colors">
                                        {method.value}
                                    </p>
                                </div>
                            </a>
                        ) : (
                            <div className="flex items-center gap-4">
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center 
                        bg-white/5 ${method.color}`}>
                                    {method.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold mb-1">{method.title}</h3>
                                    <p className="text-sm text-light-secondary">
                                        {method.value}
                                    </p>
                                </div>
                            </div>
                        )}
                    </Card>
                </motion.div>
            ))}

            {/* Response Time */}
            <motion.div
                className="p-6 bg-gradient-primary/10 rounded-2xl border border-primary-blue/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
            >
                <h3 className="font-bold mb-2 text-gradient">
                    ⚡ {language === 'ru' ? 'Быстрый ответ' : 'Quick Response'}
                </h3>
                <p className="text-sm text-light-secondary">
                    {language === 'ru'
                        ? 'Стараюсь отвечать на все сообщения в течение 24 часов в рабочие дни'
                        : 'I try to respond to all messages within 24 hours on business days'
                    }
                </p>
            </motion.div>
        </div>
    )
}

export default ContactInfo