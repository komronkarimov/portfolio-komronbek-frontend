import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { Certificate } from '@/types/education.types'
import Card from '@/components/common/Card'
import Modal from '@/components/common/Modal'
import SectionTitle from '@/components/common/SectionTitle'
import { FaCertificate, FaExternalLinkAlt, FaCalendar } from 'react-icons/fa'
import { formatDate } from '@/utils/helpers'

const Certificates = () => {
    const { language } = useLanguage()
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null)

    // Mock certificates data
    const certificates: Certificate[] = [
        {
            id: 1,
            title: language === 'ru'
                ? 'Сертификат продвинутого уровня программирования'
                : 'Advanced Programming Certificate',
            description: language === 'ru'
                ? 'Подтверждает владение языками программирования на продвинутом уровне'
                : 'Confirms proficiency in programming languages at an advanced level (excluding JavaScript - intermediate level)',
            platform: language === 'ru' ? 'Московский Политех' : 'Moscow Polytech',
            imageUrl: 'https://static.vecteezy.com/system/resources/previews/047/379/404/non_2x/hands-typing-on-a-laptop-displaying-code-in-a-dimly-lit-cafe-with-a-warm-ambient-background-portraying-a-modern-tech-workspace-environment-free-photo.jpg',
            date: '2024-01-15',
            verificationUrl: '#',
        },
        {
            id: 2,
            title: language === 'ru'
                ? 'Веб-разработка: HTML, CSS и JavaScript'
                : 'Web Development: HTML, CSS and JavaScript',
            description: language === 'ru'
                ? 'Полный курс по созданию адаптивных веб-сайтов с нуля'
                : 'Complete course on creating responsive websites from scratch',
            platform: 'Coursera',
            imageUrl: 'https://avatars.mds.yandex.net/i?id=781dc543cc45a4208d2b2aba0ae96482_l-8744112-images-thumbs&n=13',
            date: '2023-11-20',
            verificationUrl: '#',
        },
        {
            id: 3,
            title: language === 'ru'
                ? 'Python для начинающих и продвинутых'
                : 'Python for Beginners and Advanced',
            description: language === 'ru'
                ? 'Изучение Python от основ до продвинутых концепций: ООП, работа с файлами, веб-фреймворки'
                : 'Learning Python from basics to advanced concepts: OOP, file handling, web frameworks',
            platform: 'Udemy',
            imageUrl: 'https://avatars.mds.yandex.net/i?id=36c5376e3b857f355eedbee0bebe190f_l-9144630-images-thumbs&n=13',
            date: '2023-09-10',
            verificationUrl: '#',
        },
        {
            id: 4,
            title: language === 'ru'
                ? 'Адаптивный веб-дизайн'
                : 'Responsive Web Design',
            description: language === 'ru'
                ? 'Принципы создания сайтов, адаптирующихся под любые устройства'
                : 'Principles of creating websites that adapt to any devices',
            platform: 'freeCodeCamp',
            imageUrl: 'https://avatars.mds.yandex.net/i?id=b0a6a3a87d2776ed42d62d0baa7b6c99_l-9182287-images-thumbs&n=13',
            date: '2023-08-05',
            verificationUrl: '#',
        },
        {
            id: 5,
            title: language === 'ru'
                ? 'Git и GitHub для совместной разработки'
                : 'Git and GitHub for Collaborative Development',
            description: language === 'ru'
                ? 'Version control, работа с репозиториями, командная разработка'
                : 'Version control, working with repositories, team development',
            platform: 'Stepik',
            imageUrl: 'https://i.pinimg.com/originals/a0/c0/bc/a0c0bcdfeedf076ee4d6d4ccc437d169.png',
            date: '2023-07-15',
            verificationUrl: '#',
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
        <section className="section-padding bg-gradient-dark">
            <div className="container-custom">
                <SectionTitle
                    title={language === 'ru' ? 'Сертификаты' : 'Certificates'}
                    subtitle={language === 'ru'
                        ? 'Подтверждённые навыки и пройденные курсы'
                        : 'Confirmed skills and completed courses'
                    }
                    gradient
                />

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {certificates.map((cert) => (
                        <motion.div key={cert.id} variants={itemVariants}>
                            <Card className="h-full group cursor-pointer" hover onClick={() => setSelectedCert(cert)}>
                                {/* Certificate Image */}
                                <div className="relative h-48 -m-6 mb-6 overflow-hidden rounded-t-2xl">
                                    <img
                                        src={cert.imageUrl}
                                        alt={cert.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />

                                    {/* Platform Badge */}
                                    {cert.platform && (
                                        <div className="absolute top-4 right-4">
                                            <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/20">
                                                {cert.platform}
                                            </span>
                                        </div>
                                    )}

                                    {/* Certificate Icon */}
                                    <div className="absolute bottom-4 left-4">
                                        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                                            <FaCertificate size={24} className="text-white" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-bold mb-2 group-hover:text-gradient transition-all">
                                    {cert.title}
                                </h3>

                                <p className="text-sm text-light-secondary mb-4 line-clamp-2">
                                    {cert.description}
                                </p>

                                {/* Date */}
                                <div className="flex items-center gap-2 text-sm text-light-secondary">
                                    <FaCalendar className="text-primary-blue" />
                                    <span>{formatDate(cert.date, language === 'ru' ? 'ru-RU' : 'en-US')}</span>
                                </div>

                                {/* View Button */}
                                <div className="mt-4 pt-4 border-t border-white/10">
                                    <button className="text-primary-blue hover:text-primary-purple transition-colors font-semibold text-sm flex items-center gap-2">
                                        {language === 'ru' ? 'Посмотреть сертификат' : 'View Certificate'}
                                        <FaExternalLinkAlt size={12} />
                                    </button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Certificate Modal */}
                {selectedCert && (
                    <Modal
                        isOpen={!!selectedCert}
                        onClose={() => setSelectedCert(null)}
                        size="lg"
                    >
                        <div className="space-y-6">
                            {/* Certificate Image */}
                            <div className="relative">
                                <img
                                    src={selectedCert.imageUrl}
                                    alt={selectedCert.title}
                                    className="w-full rounded-lg"
                                />
                            </div>

                            {/* Details */}
                            <div>
                                <h2 className="text-2xl font-bold mb-2">{selectedCert.title}</h2>
                                {selectedCert.platform && (
                                    <p className="text-light-secondary mb-4">
                                        {language === 'ru' ? 'Платформа:' : 'Platform:'} {selectedCert.platform}
                                    </p>
                                )}
                                <p className="text-light leading-relaxed mb-4">
                                    {selectedCert.description}
                                </p>
                                <div className="flex items-center gap-2 text-sm text-light-secondary">
                                    <FaCalendar className="text-primary-blue" />
                                    <span>
                                        {language === 'ru' ? 'Дата получения:' : 'Date issued:'} {' '}
                                        {formatDate(selectedCert.date, language === 'ru' ? 'ru-RU' : 'en-US')}
                                    </span>
                                </div>
                            </div>

                            {/* Verification Link */}
                            {selectedCert.verificationUrl && (
                                <a
                                    href={selectedCert.verificationUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary w-full text-center"
                                >
                                    {language === 'ru' ? 'Проверить подлинность' : 'Verify Certificate'}
                                    <FaExternalLinkAlt className="ml-2" />
                                </a>
                            )}
                        </div>
                    </Modal>
                )}
            </div>
        </section>
    )
}

export default Certificates