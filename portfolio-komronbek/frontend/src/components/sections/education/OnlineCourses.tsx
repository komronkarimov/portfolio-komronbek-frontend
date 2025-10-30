import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { Course } from '@/types/education.types'
import SectionTitle from '@/components/common/SectionTitle'
import ProgressBar from '@/components/common/ProgressBar'
import { FaCheckCircle, FaSpinner, FaClock } from 'react-icons/fa'

const OnlineCourses = () => {
    const { language } = useLanguage()

    const courses: Course[] = [
        {
            title: 'JavaScript для начинающих',
            platform: 'Coursera',
            status: 'completed',
        },
        {
            title: 'MySQL: от основ к продвинутым запросам',
            platform: 'Udemy',
            status: 'completed',
        },
        {
            title: 'UI/UX дизайн для разработчиков',
            platform: 'Skillshare',
            status: 'in-progress',
            progress: 65,
        },
        {
            title: 'Основы SEO',
            platform: 'Google Digital Garage',
            status: 'completed',
        },
        {
            title: 'Алгоритмы и структуры данных',
            platform: 'Stepik',
            status: 'in-progress',
            progress: 45,
        },
        {
            title: 'React - The Complete Guide',
            platform: 'Udemy',
            status: 'in-progress',
            progress: 30,
        },
    ]

    const getStatusIcon = (status: Course['status']) => {
        switch (status) {
            case 'completed':
                return <FaCheckCircle className="text-green-500" />
            case 'in-progress':
                return <FaSpinner className="text-blue-500" />
            case 'planned':
                return <FaClock className="text-yellow-500" />
        }
    }

    const getStatusText = (status: Course['status']) => {
        switch (status) {
            case 'completed':
                return language === 'ru' ? 'Завершен' : 'Completed'
            case 'in-progress':
                return language === 'ru' ? 'В процессе' : 'In Progress'
        }
    }

    const getStatusColor = (status: Course['status']) => {
        switch (status) {
            case 'completed':
                return 'text-green-500'
            case 'in-progress':
                return 'text-blue-500'
            case 'planned':
                return 'text-yellow-500'
        }
    }

    return (
        <section className="section-padding">
            <div className="container-custom">
                <SectionTitle
                    title={language === 'ru' ? 'Онлайн-курсы и самообразование' : 'Online Courses & Self-Education'}
                    subtitle={language === 'ru'
                        ? 'Непрерывное обучение для расширения навыков'
                        : 'Continuous learning to expand skills'
                    }
                />

                <div className="max-w-4xl mx-auto">
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 mb-12">
                        <motion.div
                            className="text-center p-6 bg-green-500/10 rounded-2xl border border-green-500/30"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-3xl font-bold text-green-500 mb-2">
                                {courses.filter(c => c.status === 'completed').length}
                            </div>
                            <div className="text-sm text-light-secondary">
                                {language === 'ru' ? 'Завершено' : 'Completed'}
                            </div>
                        </motion.div>

                        <motion.div
                            className="text-center p-6 bg-blue-500/10 rounded-2xl border border-blue-500/30"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="text-3xl font-bold text-blue-500 mb-2">
                                {courses.filter(c => c.status === 'in-progress').length}
                            </div>
                            <div className="text-sm text-light-secondary">
                                {language === 'ru' ? 'В процессе' : 'In Progress'}
                            </div>
                        </motion.div>

                      
                    </div>

                    {/* Courses List */}
                    <div className="space-y-4">
                        {courses.map((course, index) => (
                            <motion.div
                                key={index}
                                className="p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10
                         hover:border-primary-blue/50 transition-all"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ x: 5 }}
                            >
                                <div className="flex items-start justify-between gap-4 mb-3">
                                    <div className="flex-1">
                                        <h3 className="font-semibold mb-1">{course.title}</h3>
                                        <p className="text-sm text-light-secondary">{course.platform}</p>
                                    </div>
                                    <div className={`flex items-center gap-2 text-sm font-semibold ${getStatusColor(course.status)}`}>
                                        {getStatusIcon(course.status)}
                                        <span>{getStatusText(course.status)}</span>
                                    </div>
                                </div>

                                {/* Progress Bar for In-Progress Courses */}
                                {course.status === 'in-progress' && course.progress !== undefined && (
                                    <ProgressBar
                                        value={course.progress}
                                        showPercentage={true}
                                        color="primary"
                                    />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OnlineCourses