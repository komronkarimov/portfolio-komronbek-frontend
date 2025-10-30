import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import Card from '@/components/common/Card'
import SectionTitle from '@/components/common/SectionTitle'
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Testimonials = () => {
    const { language } = useLanguage()
    const [currentIndex, setCurrentIndex] = useState(0)

    const testimonials = [
        {
            id: 1,
            name: language === 'ru' ? 'Александр Петров' : 'Alexander Petrov',
            role: language === 'ru' ? 'Владелец кофейни' : 'Coffee Shop Owner',
            avatar: 'https://ui-avatars.com/api/?name=AP&background=0a0e27&color=00d4ff',
            rating: 5,
            text: language === 'ru'
                ? 'Комронбек создал для нас потрясающий сайт! Адаптивный дизайн работает идеально на всех устройствах, а клиенты постоянно хвалят удобство бронирования столиков онлайн. Рекомендую!'
                : 'Komronbek created an amazing website for us! The responsive design works perfectly on all devices, and customers constantly praise the convenience of booking tables online. Highly recommend!',
        },
        {
            id: 2,
            name: language === 'ru' ? 'Мария Иванова' : 'Maria Ivanova',
            role: language === 'ru' ? 'Фотограф' : 'Photographer',
            avatar: 'https://ui-avatars.com/api/?name=MI&background=0a0e27&color=a855f7',
            rating: 5,
            text: language === 'ru'
                ? 'Отличная работа! Портфолио получилось именно таким, как я хотела - минималистичным и элегантным. Галерея работает быстро, а система фильтрации очень удобная.'
                : 'Excellent work! The portfolio turned out exactly as I wanted - minimalist and elegant. The gallery works fast, and the filtering system is very convenient.',
        },
        {
            id: 3,
            name: language === 'ru' ? 'Дмитрий Смирнов' : 'Dmitry Smirnov',
            role: language === 'ru' ? 'Преподаватель МПУ' : 'MPU Teacher',
            avatar: 'https://ui-avatars.com/api/?name=DS&background=0a0e27&color=00d4ff',
            rating: 5,
            text: language === 'ru'
                ? 'Комронбек - один из самых талантливых и трудолюбивых студентов. Его проекты всегда выполнены на высоком уровне, с вниманием к деталям и современными подходами.'
                : 'Komronbek is one of the most talented and hardworking students. His projects are always completed at a high level, with attention to detail and modern approaches.',
        },
    ]

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <section className="section-padding bg-gradient-dark">
            <div className="container-custom">
                <SectionTitle
                    title={language === 'ru' ? 'Отзывы' : 'Testimonials'}
                    subtitle={language === 'ru'
                        ? 'Что говорят о моей работе клиенты и преподаватели'
                        : 'What clients and teachers say about my work'
                    }
                />

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Navigation Buttons */}
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full
                       w-12 h-12 bg-white/10 rounded-full flex items-center justify-center
                       text-white hover:bg-white/20 transition-colors z-10
                       hidden md:flex"
                            aria-label="Previous testimonial"
                        >
                            <FaChevronLeft />
                        </button>

                        <button
                            onClick={nextTestimonial}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full
                       w-12 h-12 bg-white/10 rounded-full flex items-center justify-center
                       text-white hover:bg-white/20 transition-colors z-10
                       hidden md:flex"
                            aria-label="Next testimonial"
                        >
                            <FaChevronRight />
                        </button>

                        {/* Testimonial Card */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card glass className="text-center p-8 md:p-12">
                                    {/* Quote Icon */}
                                    <div className="flex justify-center mb-6">
                                        <FaQuoteLeft size={40} className="text-primary-blue/30" />
                                    </div>

                                    {/* Rating Stars */}
                                    <div className="flex justify-center gap-1 mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar
                                                key={i}
                                                size={20}
                                                className={i < testimonials[currentIndex].rating
                                                    ? 'text-yellow-500'
                                                    : 'text-white/20'
                                                }
                                            />
                                        ))}
                                    </div>

                                    {/* Testimonial Text */}
                                    <p className="text-lg md:text-xl text-light mb-8 italic">
                                        "{testimonials[currentIndex].text}"
                                    </p>

                                    {/* Author Info */}
                                    <div className="flex items-center justify-center gap-4">
                                        <img
                                            src={testimonials[currentIndex].avatar}
                                            alt={testimonials[currentIndex].name}
                                            className="w-16 h-16 rounded-full border-2 border-primary-blue/30"
                                        />
                                        <div className="text-left">
                                            <h4 className="font-semibold text-lg">
                                                {testimonials[currentIndex].name}
                                            </h4>
                                            <p className="text-light-secondary">
                                                {testimonials[currentIndex].role}
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        </AnimatePresence>

                        {/* Dots Indicator */}
                        <div className="flex justify-center gap-2 mt-8">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                            ? 'w-8 bg-gradient-primary'
                                            : 'bg-white/30 hover:bg-white/50'
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Mobile Navigation */}
                        <div className="flex justify-center gap-4 mt-6 md:hidden">
                            <button
                                onClick={prevTestimonial}
                                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center
                         text-white hover:bg-white/20 transition-colors"
                                aria-label="Previous testimonial"
                            >
                                <FaChevronLeft />
                            </button>
                            <button
                                onClick={nextTestimonial}
                                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center
                         text-white hover:bg-white/20 transition-colors"
                                aria-label="Next testimonial"
                            >
                                <FaChevronRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials