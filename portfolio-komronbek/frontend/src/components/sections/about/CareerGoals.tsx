import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { useLanguage } from '@/contexts/LanguageContext'
import SectionTitle from '@/components/common/SectionTitle'
import { FaGraduationCap, FaBriefcase, FaRocket, FaStar, FaGlobeAmericas } from 'react-icons/fa'

const CareerGoals = () => {
    const { language } = useLanguage()

    const translations = {
        ru: {
            title: 'Карьерные цели',
            subtitle: 'Мой путь развития и профессиональные амбиции',
            metaDescription: 'Карьерные цели и план профессионального развития full-stack разработчика: от студента до лидера в IT. Стажировки, международный опыт, рост в веб-разработке.',
            keywords: 'карьерные цели разработчика, full-stack developer карьера, план развития программиста, IT карьера, веб-разработчик',
        },
        en: {
            title: 'Career Goals',
            subtitle: 'My development path and professional ambitions',
            metaDescription: 'Career goals and professional development plan of a full-stack developer: from student to IT leader. Internships, international experience, web development growth.',
            keywords: 'developer career goals, full-stack developer career, programmer development plan, IT career, web developer',
        }
    }

    const t = translations[language]

    const timeline = [
        {
            year: '2025',
            title: language === 'ru' ? 'Сейчас' : 'Now',
            description: language === 'ru'
                ? 'Студент 2 курса + активный фриланс. Создаю портфолио, изучаю новые технологии: React, Next.js, TypeScript'
                : '2nd year student + active freelance. Building portfolio, learning new technologies: React, Next.js, TypeScript',
            icon: <FaGraduationCap aria-hidden="true" />,
            color: 'text-green-500',
            current: true,
            keywords: 'студент программист, фриланс разработчик, React портфолио',
        },
        {
            year: '2026',
            title: language === 'ru' ? 'Ближайшая цель' : 'Near Goal',
            description: language === 'ru'
                ? 'Получение опыта в российских IT-компаниях, расширение портфолио, изучение React Native и мобильной разработки'
                : 'Getting experience in Russian IT companies, expanding portfolio, learning React Native and mobile development',
            icon: <FaBriefcase aria-hidden="true" />,
            color: 'text-blue-500',
            current: false,
            keywords: 'опыт в IT компании, React Native разработчик, мобильная разработка',
        },
        {
            year: '2027',
            title: language === 'ru' ? 'Международный опыт' : 'International Experience',
            description: language === 'ru'
                ? 'Стажировка или программа обмена за рубежом (Европа/США/ОАЭ), работа в международных проектах'
                : 'Internship or exchange program abroad (Europe/USA/UAE), working on international projects',
            icon: <FaGlobeAmericas aria-hidden="true" />,
            color: 'text-purple-500',
            current: false,
            keywords: 'стажировка программиста, международный опыт разработчика, программа обмена IT',
        },
        {
            year: '2028-2030',
            title: language === 'ru' ? 'Профессиональный рост' : 'Professional Growth',
            description: language === 'ru'
                ? 'Позиция senior full-stack разработчика в международной компании, работа над масштабными проектами, менторство'
                : 'Senior full-stack developer position in an international company, working on large-scale projects, mentoring',
            icon: <FaRocket aria-hidden="true" />,
            color: 'text-orange-500',
            current: false,
            keywords: 'senior full-stack developer, международная IT компания, менторство программистов',
        },
        {
            year: language === 'ru' ? 'Долгосрочно' : 'Long-term',
            title: language === 'ru' ? 'Большие амбиции' : 'Big Ambitions',
            description: language === 'ru'
                ? 'Создание собственных SaaS продуктов, технологический стартап или позиция Tech Lead в крупной компании'
                : 'Creating own SaaS products, tech startup or Tech Lead position in a large company',
            icon: <FaStar aria-hidden="true" />,
            color: 'text-yellow-500',
            current: false,
            keywords: 'SaaS продукты, технологический стартап, Tech Lead, основатель стартапа',
        },
    ]

    // Структурированные данные Schema.org
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Your Name", // Замените на ваше имя
        "jobTitle": "Full-Stack Developer",
        "description": t.metaDescription,
        "knowsAbout": [
            "React",
            "Next.js",
            "TypeScript",
            "Full-Stack Development",
            "Web Development",
            "JavaScript",
            "Frontend Development",
            "Backend Development"
        ],
        "hasOccupation": {
            "@type": "Occupation",
            "name": "Full-Stack Developer",
            "skills": "React, Next.js, TypeScript, Node.js"
        }
    }

    // Структурированные данные для временной шкалы
    const timelineStructuredData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": t.title,
        "description": t.subtitle,
        "itemListElement": timeline.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Event",
                "name": item.title,
                "description": item.description,
                "startDate": item.year.includes('-') ? item.year.split('-')[0] : item.year
            }
        }))
    }

    return (
        <>
            {/* React Helmet для meta-тегов */}
            <Helmet>
                {/* Основные meta-теги */}
                <title>{t.title} | Full-Stack Developer Portfolio</title>
                <meta name="description" content={t.metaDescription} />
                <meta name="keywords" content={t.keywords} />

                {/* Open Graph */}
                <meta property="og:title" content={`${t.title} | Full-Stack Developer`} />
                <meta property="og:description" content={t.metaDescription} />
                <meta property="og:type" content="profile" />
                <meta property="og:locale" content={language === 'ru' ? 'ru_RU' : 'en_US'} />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${t.title} | Full-Stack Developer`} />
                <meta name="twitter:description" content={t.metaDescription} />

                {/* Canonical URL */}
                <link rel="canonical" href={`${window.location.origin}/${language}/career-goals`} />

                {/* Альтернативные языки */}
                <link rel="alternate" hrefLang="ru" href={`${window.location.origin}/ru/career-goals`} />
                <link rel="alternate" hrefLang="en" href={`${window.location.origin}/en/career-goals`} />
                <link rel="alternate" hrefLang="x-default" href={`${window.location.origin}/en/career-goals`} />

                {/* Структурированные данные */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(timelineStructuredData)}
                </script>
            </Helmet>

            <section
                className="section-padding bg-gradient-dark overflow-hidden"
                aria-labelledby="career-goals-heading"
                itemScope
                itemType="https://schema.org/AboutPage"
            >
                <div className="container-custom">
                    <SectionTitle
                        title={t.title}
                        subtitle={t.subtitle}
                        gradient
                    />

                    {/* Скрытый H1 для SEO */}
                    <h1 id="career-goals-heading" className="sr-only">
                        {t.title}: {t.subtitle}
                    </h1>

                    <div className="max-w-4xl mx-auto">
                        {/* Timeline */}
                        <nav
                            className="relative overflow-hidden"
                            aria-label={language === 'ru' ? 'Временная шкала карьерных целей' : 'Career goals timeline'}
                            itemProp="mainContentOfPage"
                        >
                            {/* Vertical Line */}
                            <div
                                className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-blue via-primary-purple to-transparent"
                                aria-hidden="true"
                            />

                            {/* Timeline Items */}
                            <ol className="list-none p-0 m-0 relative">
                                {timeline.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        className="relative mb-16 last:mb-0"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ delay: index * 0.15, duration: 0.5 }}
                                    >
                                        <div className="flex items-center relative">
                                            {/* Left Side - четные индексы (0, 2, 4) */}
                                            {index % 2 === 0 ? (
                                                <>
                                                    <div className="w-[calc(50%-1.2rem)] pr-6">
                                                        <motion.article
                                                            className={`p-6 bg-white/5 backdrop-blur-lg rounded-2xl border ${item.current
                                                                ? 'border-primary-blue shadow-lg shadow-primary-blue/20'
                                                                : 'border-white/10'
                                                                } text-right`}
                                                            whileHover={{
                                                                scale: 1.02,
                                                                borderColor: item.current ? 'rgb(59, 130, 246)' : 'rgba(255, 255, 255, 0.2)'
                                                            }}
                                                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                                            itemScope
                                                            itemType="https://schema.org/Event"
                                                        >
                                                            <time
                                                                className={`text-sm font-bold ${item.color} mb-2 block`}
                                                                dateTime={item.year.replace('Долгосрочно', '2030').replace('Long-term', '2030')}
                                                                itemProp="startDate"
                                                            >
                                                                {item.year}
                                                            </time>

                                                            <h2 className="text-xl font-bold mb-2" itemProp="name">
                                                                {item.title}
                                                            </h2>

                                                            <p className="text-light-secondary text-sm leading-relaxed" itemProp="description">
                                                                {item.description}
                                                            </p>

                                                            <meta itemProp="keywords" content={item.keywords} />

                                                            {item.current && (
                                                                <span
                                                                    className="inline-block mt-3 px-3 py-1 bg-primary-blue/20 text-primary-blue text-xs rounded-full"
                                                                    itemProp="eventStatus"
                                                                >
                                                                    {language === 'ru' ? 'Текущий этап' : 'Current stage'}
                                                                </span>
                                                            )}
                                                        </motion.article>
                                                    </div>
                                                    <div className="w-[calc(50%-2rem)]" aria-hidden="true" />
                                                </>
                                            ) : (
                                                // Right Side - нечетные индексы (1, 3)
                                                <>
                                                    <div className="w-[calc(50%-0.1em)]" aria-hidden="true" />
                                                    <div className="w-[calc(50%-2rem)] pl-11">
                                                        <motion.article
                                                            className={`p-6 bg-white/5 backdrop-blur-lg rounded-2xl border ${item.current
                                                                ? 'border-primary-blue shadow-lg shadow-primary-blue/20'
                                                                : 'border-white/10'
                                                                } text-left`}
                                                            whileHover={{
                                                                scale: 1.02,
                                                                borderColor: item.current ? 'rgb(59, 130, 246)' : 'rgba(255, 255, 255, 0.2)'
                                                            }}
                                                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                                            itemScope
                                                            itemType="https://schema.org/Event"
                                                        >
                                                            <time
                                                                className={`text-sm font-bold ${item.color} mb-2 block`}
                                                                dateTime={item.year.replace('Долгосрочно', '2030').replace('Long-term', '2030')}
                                                                itemProp="startDate"
                                                            >
                                                                {item.year}
                                                            </time>

                                                            <h2 className="text-xl font-bold mb-2" itemProp="name">
                                                                {item.title}
                                                            </h2>

                                                            <p className="text-light-secondary text-sm leading-relaxed" itemProp="description">
                                                                {item.description}
                                                            </p>

                                                            <meta itemProp="keywords" content={item.keywords} />

                                                            {item.current && (
                                                                <span
                                                                    className="inline-block mt-3 px-3 py-1 bg-primary-blue/20 text-primary-blue text-xs rounded-full"
                                                                    itemProp="eventStatus"
                                                                >
                                                                    {language === 'ru' ? 'Текущий этап' : 'Current stage'}
                                                                </span>
                                                            )}
                                                        </motion.article>
                                                    </div>
                                                </>
                                            )}

                                            {/* Center Icon - остается по центру */}
                                            <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                                                <motion.div
                                                    className={`w-14 h-14 rounded-full flex items-center justify-center ${item.current
                                                        ? 'bg-gradient-primary shadow-lg shadow-primary-blue/50'
                                                        : 'bg-dark border-2 border-white/20'
                                                        }`}
                                                    whileHover={{
                                                        rotate: 180,
                                                        boxShadow: item.current
                                                            ? '0 0 30px rgba(59, 130, 246, 0.6)'
                                                            : '0 0 20px rgba(255, 255, 255, 0.3)'
                                                    }}
                                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                                    role="img"
                                                    aria-label={`${language === 'ru' ? 'Иконка' : 'Icon'}: ${item.title}`}
                                                >
                                                    <span className={`text-xl ${item.current ? 'text-white' : item.color}`}>
                                                        {item.icon}
                                                    </span>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </motion.li>
                                ))}
                            </ol>
                        </nav>

                        {/* Motivational Quote */}
                        <motion.aside
                            className="text-center mt-16"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            aria-label={language === 'ru' ? 'Мотивационная цитата' : 'Motivational quote'}
                        >
                            <blockquote
                                className="p-8 bg-gradient-primary/10 rounded-2xl border border-primary-blue/20"
                                itemScope
                                itemType="https://schema.org/Quotation"
                            >
                                <p className="text-xl italic mb-4" itemProp="text">
                                    {language === 'ru'
                                        ? '"Успех — это не конечная точка, а постоянное движение вперед"'
                                        : '"Success is not a destination, but a continuous journey forward"'
                                    }
                                </p>
                                <footer className="text-light-secondary">
                                    <cite itemProp="creator">
                                        — {language === 'ru' ? 'Мой девиз' : 'My motto'}
                                    </cite>
                                </footer>
                            </blockquote>
                        </motion.aside>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CareerGoals