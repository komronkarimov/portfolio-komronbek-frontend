import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import SectionTitle from '@/components/common/SectionTitle'
import { FaPlus, FaMinus } from 'react-icons/fa'

const FAQ = () => {
    const { language } = useLanguage()
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const faqs = [
        {
            question: language === 'ru'
                ? 'Какие проекты вы принимаете на фриланс?'
                : 'What projects do you accept for freelance?',
            answer: language === 'ru'
                ? 'Я работаю над веб-сайтами (landing pages, многостраничные сайты, портфолио), небольшими веб-приложениями, адаптивной версткой и доработкой существующих проектов. Открыт для долгосрочного сотрудничества.'
                : 'I work on websites (landing pages, multi-page sites, portfolios), small web applications, responsive layout and refinement of existing projects. Open to long-term cooperation.',
        },
        {
            question: language === 'ru'
                ? 'Сколько времени занимает разработка проекта?'
                : 'How long does project development take?',
            answer: language === 'ru'
                ? 'Зависит от сложности. Простой landing page — 3-7 дней, многостраничный сайт — 1-3 недели, веб-приложение — от 2-4 недель. Обсуждаю сроки индивидуально для каждого проекта.'
                : 'It depends on complexity. Simple landing page - 3-7 days, multi-page site - 1-3 weeks, web application - from 2-4 weeks. I discuss deadlines individually for each project.',
        },
        {
            question: language === 'ru'
                ? 'Какова ваша ставка?'
                : 'What is your rate?',
            answer: language === 'ru'
                ? 'Я предлагаю гибкие цены в зависимости от проекта и его сложности. Свяжитесь со мной для обсуждения деталей и получения индивидуального предложения.'
                : 'I offer flexible prices depending on the project and its complexity. Contact me to discuss details and get a personalized offer.',
        },
        {
            question: language === 'ru'
                ? 'Вы работаете удаленно?'
                : 'Do you work remotely?',
            answer: language === 'ru'
                ? 'Да, я работаю полностью удаленно и готов к сотрудничеству с клиентами из любой точки мира. Комфортно работаю в разных часовых поясах и использую современные инструменты для коммуникации.'
                : 'Yes, I work completely remotely and am ready to cooperate with clients from anywhere in the world. I work comfortably in different time zones and use modern communication tools.',
        },
        {
            question: language === 'ru'
                ? 'Вы предоставляете поддержку после завершения проекта?'
                : 'Do you provide support after project completion?',
            answer: language === 'ru'
                ? 'Да, я предоставляю техническую поддержку и небольшие правки в течение 2 недель после сдачи проекта бесплатно. Долгосрочная поддержка и обновления обсуждаются отдельно.'
                : 'Yes, I provide technical support and minor fixes within 2 weeks after project delivery for free. Long-term support and updates are discussed separately.',
        },
    ]

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="mt-16">
            <SectionTitle
                title={language === 'ru' ? 'Часто задаваемые вопросы' : 'Frequently Asked Questions'}
                align="center"
            />

            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden"
                    >
                        {/* Question */}
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full p-6 flex items-center justify-between text-left
                       hover:bg-white/5 transition-colors"
                        >
                            <span className="font-semibold pr-8">{faq.question}</span>
                            <motion.div
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="flex-shrink-0"
                            >
                                {openIndex === index ? (
                                    <FaMinus className="text-primary-blue" />
                                ) : (
                                    <FaPlus className="text-primary-blue" />
                                )}
                            </motion.div>
                        </button>

                        {/* Answer */}
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-6 text-light-secondary leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default FAQ