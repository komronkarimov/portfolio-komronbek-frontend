import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { PERSONAL_INFO } from '@/utils/constants'
import Card from '@/components/common/Card'
import profilePhoto from './profile-full.jpg'
import {
    FaMapMarkerAlt,
    FaBirthdayCake,
    FaFlag,
    FaUniversity,
    FaBook,
    FaCalendar
} from 'react-icons/fa'

const MainBio = () => {
    const { language } = useLanguage()

    const bioInfo = [
        {
            icon: <FaMapMarkerAlt />,
            label: language === 'ru' ? 'Местоположение' : 'Location',
            value: language === 'ru' ? PERSONAL_INFO.location : PERSONAL_INFO.locationEn
        },
        {
            icon: <FaBirthdayCake />,
            label: language === 'ru' ? 'Возраст' : 'Age',
            value: `${PERSONAL_INFO.age} ${language === 'ru' ? 'лет' : 'years old'}`
        },
        {
            icon: <FaFlag />,
            label: language === 'ru' ? 'Гражданство' : 'Citizenship',
            value: language === 'ru' ? PERSONAL_INFO.citizenship : PERSONAL_INFO.citizenshipEn
        },
        {
            icon: <FaUniversity />,
            label: language === 'ru' ? 'Университет' : 'University',
            value: language === 'ru' ? PERSONAL_INFO.university : PERSONAL_INFO.universityEn
        },
        {
            icon: <FaBook />,
            label: language === 'ru' ? 'Специальность' : 'Specialty',
            value: language === 'ru' ? PERSONAL_INFO.specialty : PERSONAL_INFO.specialtyEn
        },
        {
            icon: <FaCalendar />,
            label: language === 'ru' ? 'Курс' : 'Year',
            value: language === 'ru' ? PERSONAL_INFO.course : PERSONAL_INFO.courseEn
        },
    ]

    const bioTexts = {
        ru: {
            title: 'Моя история',
            paragraphs: [
                'Меня зовут Комронбек Каримов, и я студент второго курса Московского Политехнического Университета по специальности «Прикладная информатика». Моя страсть к программированию началась еще в школе, когда я впервые создал простую веб-страницу и увидел, как оживает мой код. С тех пор я не переставал учиться и совершенствовать свои навыки в веб-разработке.',
                'Я родился и вырос в многоязычной среде, что научило меня адаптироваться и находить общий язык с людьми из разных культур. Сейчас я учусь в Москве, где активно развиваюсь как веб-разработчик, совмещая учебу с самообразованием и фриланс-проектами.',
                'Моя цель — стать профессиональным full-stack разработчиком и получить опыт работы в международных IT-компаниях. Я мечтаю о стажировках или программах обмена в Европе, США или странах Ближнего Востока, где я смогу улучшить свои технические и коммуникативные навыки, работая над реальными проектами.',
                'Помимо программирования, я увлекаюсь кулинарией — люблю готовить для семьи и друзей, экспериментируя с разными кухнями мира. Также я страстный путешественник, который хочет исследовать мир и узнавать новые культуры. Верю, что технологии могут сделать мир лучше, и хочу быть частью этого процесса.'
            ]
        },
        en: {
            title: 'My Story',
            paragraphs: [
                'My name is Komronbek Karimov, and I am a second-year student at Moscow Polytechnic University majoring in Applied Informatics. My passion for programming began in school when I first created a simple web page and saw my code come to life. Since then, I have never stopped learning and improving my web development skills.',
                'I was born and raised in a multilingual environment, which taught me to adapt and find common ground with people from different cultures. Now I study in Moscow, where I actively develop as a web developer, combining studies with self-education and freelance projects.',
                'My goal is to become a professional full-stack developer and gain experience working in international IT companies. I dream of internships or exchange programs in Europe, the USA, or Middle Eastern countries, where I can improve my technical and communication skills while working on real projects.',
                'Besides programming, I am passionate about cooking - I love to cook for family and friends, experimenting with different world cuisines. I am also an avid traveler who wants to explore the world and learn about new cultures. I believe that technology can make the world a better place, and I want to be part of this process.'
            ]
        }
    }

    const texts = language === 'ru' ? bioTexts.ru : bioTexts.en

    return (
        <section className="section-padding bg-dark-secondary">
            <div className="container-custom">
                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Left Column - Photo and Info */}
                    <motion.div
                        className="lg:col-span-2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Card className="sticky top-24">
                            {/* Profile Photo */}
                            <div className="relative mb-6">
                                <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                                    <img
                                        src={profilePhoto}
                                        alt="Komronbek Karimov"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.src = ``
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
                                </div>
                            </div>

                            {/* Name and Title */}
                            <h2 className="text-2xl font-bold text-gradient text-center mb-2">
                                {language === 'ru' ? PERSONAL_INFO.name : PERSONAL_INFO.nameEn}
                            </h2>
                            <p className="text-light-secondary text-center mb-6">
                                {language === 'ru' ? PERSONAL_INFO.title : PERSONAL_INFO.titleEn}
                            </p>

                            {/* Personal Info List */}
                            <div className="space-y-3">
                                {bioInfo.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start gap-3"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <span className="text-primary-blue mt-1">{item.icon}</span>
                                        <div className="flex-1">
                                            <p className="text-xs text-light-secondary">{item.label}</p>
                                            <p className="text-sm">{item.value}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </Card>
                    </motion.div>

                    {/* Right Column - Bio Text */}
                    <motion.div
                        className="lg:col-span-3"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold mb-8">{texts.title}</h2>

                        <div className="space-y-6">
                            {texts.paragraphs.map((paragraph, index) => (
                                <motion.p
                                    key={index}
                                    className="text-lg text-light leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                >
                                    {paragraph}
                                </motion.p>
                            ))}
                        </div>

                        {/* Fun Facts */}
                        <motion.div
                            className="mt-12 p-6 bg-gradient-primary/10 rounded-2xl border border-primary-blue/20"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <h3 className="text-xl font-bold mb-4 text-gradient">
                                {language === 'ru' ? 'Интересные факты' : 'Fun Facts'}
                            </h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <span>☕</span>
                                    <span>{language === 'ru'
                                        ? 'Выпиваю 3-4 чашки кофе в день'
                                        : 'Drink 3-4 cups of coffee per day'}</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span>🌍</span>
                                    <span>{language === 'ru'
                                        ? 'Говорю на 4 языках'
                                        : 'Speak 4 languages'}</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span>⌨️</span>
                                    <span>{language === 'ru'
                                        ? 'Печатаю со скоростью 80+ слов/мин'
                                        : 'Type at 80+ words per minute'}</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span>🎮</span>
                                    <span>{language === 'ru'
                                        ? 'Люблю стратегические игры'
                                        : 'Love strategy games'}</span>
                                </li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default MainBio