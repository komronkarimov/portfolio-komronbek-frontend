import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { Achievement } from '@/types/education.types'
import SectionTitle from '@/components/common/SectionTitle'
import { FaTrophy, FaStar, FaMedal, FaAward, FaChartLine } from 'react-icons/fa'

const AcademicAchievements = () => {
    const { language } = useLanguage()

    const achievements: Achievement[] = [
        {
            title: language === 'ru'
                ? 'Отличная защита курсового проекта'
                : 'Excellent Course Project Defense',
            description: language === 'ru'
                ? 'Успешно защитил курсовой проект по веб-разработке с оценкой "отлично"'
                : 'Successfully defended a course project on web development with an "excellent" grade',
            date: '2024-01',
            icon: 'trophy',
        },
        {
            title: language === 'ru'
                ? 'Участник университетского хакатона'
                : 'University Hackathon Participant',
            description: language === 'ru'
                ? 'Принял участие в хакатоне по созданию веб-приложений, команда заняла 3-е место'
                : 'Participated in a hackathon on creating web applications, team took 3rd place',
            date: '2023-11',
            icon: 'medal',
        },
        {
            title: language === 'ru'
                ? 'Высокий средний балл'
                : 'High GPA',
            description: language === 'ru'
                ? 'Средний балл GPA: 4.5/5.0'
                : 'Grade Point Average: 4.5/5.0',
            date: '2024',
            icon: 'star',
        },
        {
            title: language === 'ru'
                ? 'Староста группы'
                : 'Group Leader',
            description: language === 'ru'
                ? 'Избран старостой группы, координирую учебную деятельность'
                : 'Elected as group leader, coordinating educational activities',
            date: '2023-09',
            icon: 'award',
        },
        {
            title: language === 'ru'
                ? 'Активный участник студенческих проектов'
                : 'Active Participant in Student Projects',
            description: language === 'ru'
                ? 'Регулярно участвую в университетских IT-проектах и конкурсах'
                : 'Regularly participate in university IT projects and competitions',
            date: '2023-2024',
            icon: 'chart',
        },
    ]

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'trophy':
                return <FaTrophy size={32} className="text-yellow-500" />
            case 'medal':
                return <FaMedal size={32} className="text-orange-500" />
            case 'star':
                return <FaStar size={32} className="text-blue-500" />
            case 'award':
                return <FaAward size={32} className="text-purple-500" />
            case 'chart':
                return <FaChartLine size={32} className="text-green-500" />
            default:
                return <FaTrophy size={32} className="text-yellow-500" />
        }
    }

    return (
        <section className="section-padding bg-dark-secondary">
            <div className="container-custom">
                <SectionTitle
                    title={language === 'ru' ? 'Академические достижения' : 'Academic Achievements'}
                    subtitle={language === 'ru'
                        ? 'Успехи в учебе и участие в студенческой жизни'
                        : 'Academic success and participation in student life'
                    }
                />

                <div className="max-w-4xl mx-auto">
                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-blue via-primary-purple to-transparent hidden md:block" />

                        {/* Achievements */}
                        <div className="space-y-8">
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    className="relative flex gap-6"
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {/* Icon */}
                                    <div className="relative z-10">
                                        <motion.div
                                            className="w-16 h-16 bg-dark border-2 border-primary-blue rounded-full flex items-center justify-center"
                                            whileHover={{ scale: 1.2, rotate: 360 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {getIcon(achievement.icon)}
                                        </motion.div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 pb-8">
                                        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10
                                  hover:border-primary-blue/50 hover:shadow-lg hover:shadow-primary-blue/20
                                  transition-all">
                                            <div className="flex items-start justify-between gap-4 mb-3">
                                                <h3 className="text-lg font-bold">{achievement.title}</h3>
                                                <span className="text-sm text-light-secondary whitespace-nowrap">
                                                    {achievement.date}
                                                </span>
                                            </div>
                                            <p className="text-light-secondary">{achievement.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Future Goals */}
                    <motion.div
                        className="mt-12 p-8 bg-gradient-primary/10 rounded-2xl border border-primary-blue/20 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-4 text-gradient">
                            {language === 'ru' ? 'Планы на будущее' : 'Future Plans'}
                        </h3>
                        <p className="text-lg text-light-secondary max-w-2xl mx-auto">
                            {language === 'ru'
                                ? 'Продолжаю активно развиваться, участвую в конференциях и хакатонах, планирую получить международные сертификации и опыт стажировки за рубежом.'
                                : 'I continue to actively develop, participate in conferences and hackathons, plan to obtain international certifications and internship experience abroad.'
                            }
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default AcademicAchievements