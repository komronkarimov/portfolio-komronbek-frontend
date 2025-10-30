import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { PERSONAL_INFO } from '@/utils/constants'
import Card from '@/components/common/Card'
import {
    FaGraduationCap,
    FaCalendar,
    FaMapMarkerAlt,
    FaBook,
    FaCode,
    FaDatabase,
    FaChartLine
} from 'react-icons/fa'

const University = () => {
    const { language } = useLanguage()

    const subjects = [
        {
            icon: <FaCode />,
            name: language === 'ru' ? 'Программирование на Python' : 'Python Programming',
            color: 'text-blue-500'
        },
        {
            icon: <FaCode />,
            name: language === 'ru' ? 'Веб-технологии (HTML, CSS, JavaScript)' : 'Web Technologies (HTML, CSS, JavaScript)',
            color: 'text-orange-500'
        },
        {
            icon: <FaDatabase />,
            name: language === 'ru' ? 'Базы данных (SQL, MySQL)' : 'Databases (SQL, MySQL)',
            color: 'text-green-500'
        },
        {
            icon: <FaBook />,
            name: language === 'ru' ? 'Алгоритмы и структуры данных' : 'Algorithms and Data Structures',
            color: 'text-purple-500'
        },
        {
            icon: <FaChartLine />,
            name: language === 'ru' ? 'Анализ больших данных' : 'Big Data Analysis',
            color: 'text-cyan-500'
        },
        {
            icon: <FaCode />,
            name: language === 'ru' ? 'Основы компьютерных сетей' : 'Computer Networks Basics',
            color: 'text-pink-500'
        },
    ]

    return (
        <section className="section-padding bg-dark-secondary">
            <div className="container-custom">
                <motion.div
                    className="max-w-5xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Card className="overflow-hidden" gradient>
                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* University Logo/Image */}
                            <div className="lg:col-span-1">
                                <div className="relative h-68 lg:h-full bg-gradient-primary rounded-2xl overflow-hidden flex items-center justify-center">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/20 to-primary-purple/20" />
                                    <img
                                        src="https://i2020.otzovik.com/2020/04/13/9816611/img/36686_57052743.jpeg"
                                        alt=""
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* University Info */}
                            <div className="lg:col-span-2">
                                <div className="flex items-start gap-3 mb-6">
                                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                                        <FaGraduationCap size={24} className="text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold mb-2">
                                            {language === 'ru' ? PERSONAL_INFO.university : PERSONAL_INFO.universityEn}
                                        </h2>
                                        <p className="text-light-secondary">
                                            {language === 'ru' ? PERSONAL_INFO.specialty : PERSONAL_INFO.specialtyEn}
                                        </p>
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                                    <div className="flex items-center gap-3">
                                        <FaCalendar className="text-primary-blue" />
                                        <div>
                                            <p className="text-xs text-light-secondary">
                                                {language === 'ru' ? 'Период обучения' : 'Study Period'}
                                            </p>
                                            <p className="font-semibold">
                                                2023 – {language === 'ru' ? 'настоящее время' : 'present'}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <FaMapMarkerAlt className="text-primary-blue" />
                                        <div>
                                            <p className="text-xs text-light-secondary">
                                                {language === 'ru' ? 'Местоположение' : 'Location'}
                                            </p>
                                            <p className="font-semibold">
                                                {language === 'ru' ? 'Москва, Россия' : 'Moscow, Russia'}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <FaBook className="text-primary-blue" />
                                        <div>
                                            <p className="text-xs text-light-secondary">
                                                {language === 'ru' ? 'Курс' : 'Year'}
                                            </p>
                                            <p className="font-semibold">
                                                {language === 'ru' ? PERSONAL_INFO.course : PERSONAL_INFO.courseEn}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <FaGraduationCap className="text-primary-blue" />
                                        <div>
                                            <p className="text-xs text-light-secondary">
                                                {language === 'ru' ? 'Степень' : 'Degree'}
                                            </p>
                                            <p className="font-semibold">
                                                {language === 'ru' ? 'Бакалавр' : 'Bachelor'}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-light leading-relaxed mb-6">
                                    {language === 'ru'
                                        ? 'Программа сочетает теоретическую информатику с практическими навыками в области веб-разработки, алгоритмов, баз данных и анализа больших данных. Активно участвую в проектной работе и самообразовании для углубления знаний.'
                                        : 'The program combines theoretical computer science with practical skills in web development, algorithms, databases and big data analysis. Actively participate in project work and self-education to deepen knowledge.'
                                    }
                                </p>

                                {/* Current Status */}
                                <div className="p-4 bg-gradient-primary/10 rounded-lg border border-primary-blue/30">
                                    <p className="text-sm">
                                        <span className="font-semibold text-primary-blue">
                                            {language === 'ru' ? 'Статус:' : 'Status:'}
                                        </span>{' '}
                                        {language === 'ru'
                                            ? 'Активный студент, средний балл: 4.5/5.0'
                                            : 'Active student, GPA: 4.5/5.0'
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Subjects */}
                        <div className="mt-8 pt-8 border-t border-white/10">
                            <h3 className="text-xl font-bold mb-6">
                                {language === 'ru' ? 'Основные изучаемые дисциплины' : 'Main Subjects Studied'}
                            </h3>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {subjects.map((subject, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-center gap-3 p-3 bg-white/5 rounded-lg 
                             hover:bg-white/10 transition-colors"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ x: 5 }}
                                    >
                                        <span className={`${subject.color} text-xl`}>
                                            {subject.icon}
                                        </span>
                                        <span className="text-sm">{subject.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}

export default University