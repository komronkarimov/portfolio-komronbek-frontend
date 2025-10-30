import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import Card from '@/components/common/Card'
import SectionTitle from '@/components/common/SectionTitle'
import { FaCode, FaUtensils, FaPlane } from 'react-icons/fa'

const Interests = () => {
    const { language } = useLanguage()

    const interests = [
        {
            icon: <FaCode size={48} />,
            title: language === 'ru' ? 'Программирование' : 'Programming',
            emoji: '💻',
            description: language === 'ru'
                ? 'Главная страсть и область саморазвития. Люблю изучать новые технологии, создавать полезные проекты и решать сложные задачи. Каждый день стараюсь узнать что-то новое.'
                : 'Main passion and area of self-development. I love learning new technologies, creating useful projects and solving complex problems. I try to learn something new every day.',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            icon: <FaUtensils size={48} />,
            title: language === 'ru' ? 'Кулинария' : 'Cooking',
            emoji: '🍳',
            description: language === 'ru'
                ? 'Готовлю для семьи и друзей, экспериментирую с рецептами разных кухонь мира. Особенно люблю итальянскую и азиатскую кухни. Кулинария для меня - это творчество и способ расслабиться.'
                : 'I cook for family and friends, experimenting with recipes from different world cuisines. I especially love Italian and Asian cuisines. Cooking for me is creativity and a way to relax.',
            image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
            gradient: 'from-orange-500 to-red-500',
        },
        {
            icon: <FaPlane size={48} />,
            title: language === 'ru' ? 'Путешествия' : 'Travel',
            emoji: '✈️',
            description: language === 'ru'
                ? 'Исследую новые места и культуры, расширяя кругозор и находя вдохновение. Мечтаю посетить все континенты и познакомиться с разными традициями и образами жизни.'
                : 'I explore new places and cultures, broadening my horizons and finding inspiration. I dream of visiting all continents and getting to know different traditions and ways of life.',
            image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800',
            gradient: 'from-purple-500 to-pink-500',
        },
    ]

    return (
        <section className="section-padding">
            <div className="container-custom">
                <SectionTitle
                    title={language === 'ru' ? 'Интересы и хобби' : 'Interests & Hobbies'}
                    subtitle={language === 'ru'
                        ? 'То, что вдохновляет меня помимо кода'
                        : 'What inspires me besides code'
                    }
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {interests.map((interest, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <Card className="h-full overflow-hidden group">
                                {/* Image */}
                                <div className="relative h-48 -m-6 mb-6 overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${interest.gradient} opacity-80 z-10`} />
                                    <img
                                        src={interest.image}
                                        alt={interest.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center z-20">
                                        <motion.div
                                            className="text-white"
                                            whileHover={{ scale: 1.2, rotate: 360 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            {interest.icon}
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                                    {interest.title}
                                    <span className="text-2xl">{interest.emoji}</span>
                                </h3>
                                <p className="text-light-secondary leading-relaxed">
                                    {interest.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Interests