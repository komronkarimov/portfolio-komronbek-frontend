import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Переводы
const resources = {
    ru: {
        translation: {
            // Navigation
            nav: {
                home: 'Главная',
                about: 'Обо мне',
                skills: 'Навыки',
                portfolio: 'Портфолио',
                education: 'Образование',
                blog: 'Блог',
                contact: 'Контакты',
            },
            // Home Page
            home: {
                greeting: 'Привет! Я',
                name: 'Комронбек Каримов',
                subtitle: 'Веб-разработчик | Python-разработчик',
                dynamic: {
                    websites: 'адаптивные веб-сайты',
                    interfaces: 'интерактивные интерфейсы',
                    webapps: 'современные веб-приложения',
                    code: 'эффективный код',
                },
                cta: {
                    portfolio: 'Посмотреть портфолио',
                    resume: 'Скачать резюме',
                },
                quickFacts: {
                    title: 'Быстрые факты',
                    location: 'Москва, Россия',
                    age: '20 лет',
                    university: 'Московский Политех',
                    status: 'Открыт для фриланса',
                },
                whatIDo: {
                    title: 'Что я делаю',
                    frontend: {
                        title: 'Frontend Development',
                        description: 'Создаю адаптивные и красивые пользовательские интерфейсы с использованием HTML5, CSS3, JavaScript',
                    },
                    backend: {
                        title: 'Backend & Python',
                        description: 'Разрабатываю функциональность на Python, работаю с базами данных и логикой приложений',
                    },
                    responsive: {
                        title: 'Responsive Design',
                        description: 'Гарантирую отличный вид сайтов на всех устройствах и экранах',
                    },
                },
                featured: {
                    title: 'Избранные проекты',
                    viewAll: 'Смотреть все проекты',
                },
                cta2: {
                    title: 'Готовы начать проект?',
                    description: 'Свяжитесь со мной для обсуждения вашего проекта или возможности сотрудничества',
                    button: 'Связаться со мной',
                },
            },
            // Common
            common: {
                readMore: 'Подробнее',
                viewDemo: 'Демо',
                viewCode: 'Код',
                loading: 'Загрузка...',
                error: 'Произошла ошибка',
                success: 'Успешно!',
            },
        },
    },
    en: {
        translation: {
            // Navigation
            nav: {
                home: 'Home',
                about: 'About',
                skills: 'Skills',
                portfolio: 'Portfolio',
                education: 'Education',
                blog: 'Blog',
                contact: 'Contact',
            },
            // Home Page
            home: {
                greeting: 'Hi! I am',
                name: 'Komronbek Karimov',
                subtitle: 'Web Developer | Python Developer',
                dynamic: {
                    websites: 'responsive websites',
                    interfaces: 'interactive interfaces',
                    webapps: 'modern web applications',
                    code: 'efficient code',
                },
                cta: {
                    portfolio: 'View Portfolio',
                    resume: 'Download Resume',
                },
                quickFacts: {
                    title: 'Quick Facts',
                    location: 'Moscow, Russia',
                    age: '20 years old',
                    university: 'Moscow Polytechnic',
                    status: 'Open for freelance',
                },
                whatIDo: {
                    title: 'What I Do',
                    frontend: {
                        title: 'Frontend Development',
                        description: 'I create responsive and beautiful user interfaces using HTML5, CSS3, JavaScript',
                    },
                    backend: {
                        title: 'Backend & Python',
                        description: 'I develop functionality with Python, work with databases and application logic',
                    },
                    responsive: {
                        title: 'Responsive Design',
                        description: 'I guarantee great look on all devices and screens',
                    },
                },
                featured: {
                    title: 'Featured Projects',
                    viewAll: 'View All Projects',
                },
                cta2: {
                    title: 'Ready to Start a Project?',
                    description: 'Contact me to discuss your project or collaboration opportunity',
                    button: 'Contact Me',
                },
            },
            // Common
            common: {
                readMore: 'Read More',
                viewDemo: 'Demo',
                viewCode: 'Code',
                loading: 'Loading...',
                error: 'An error occurred',
                success: 'Success!',
            },
        },
    },
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'ru',
        fallbackLng: 'ru',
        interpolation: {
            escapeValue: false,
        },
    })

export default i18n