// API URLs
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

// App Info
export const APP_NAME = import.meta.env.VITE_APP_NAME || 'DevKomron Portfolio'
export const APP_DESCRIPTION = import.meta.env.VITE_APP_DESCRIPTION || 'Портфолио веб-разработчика'

// Personal Info
export const PERSONAL_INFO = {
    name: 'Комронбек Каримов',
    nameEn: 'Komronbek Karimov',
    title: 'Веб-разработчик',
    titleEn: 'Web Developer',
    age: 20,
    location: 'Москва, Россия',
    locationEn: 'Moscow, Russia',
    citizenship: 'Республика Таджикистан',
    citizenshipEn: 'Republic of Tajikistan',
    university: 'Московский Политехнический Университет',
    universityEn: 'Moscow Polytechnic University',
    specialty: 'Прикладная информатика (Computer Science). Большие и открытые данные',
    specialtyEn: 'Applied Informatics (Computer Science). Big and Open Data',
    course: '2-й курс',
    courseEn: '2nd year',
    email: 'komron.k.karimov@gmail.com',
    phone: '+7 (XXX) XXX-XX-XX',
}

// Social Links
export const SOCIAL_LINKS = {
    github: 'https://github.com/#',
    linkedin: '#',
    telegram: 'https://t.me/smm_komron',
    vk: 'https://vk.com/karimov_komron',
    instagram: 'https://instagram.com/smm_komrom',
    email: 'mailto:komron.k.karimov@gmail.com',
}

// Navigation Links
export const NAV_LINKS = [
    { to: '/', labelRu: 'Главная', labelEn: 'Home' },
    { to: '/about', labelRu: 'Обо мне', labelEn: 'About' },
    { to: '/skills', labelRu: 'Навыки', labelEn: 'Skills' },
    { to: '/portfolio', labelRu: 'Портфолио', labelEn: 'Portfolio' },
    { to: '/education', labelRu: 'Образование', labelEn: 'Education' },
    { to: '/blog', labelRu: 'Блог', labelEn: 'Blog' },
    { to: '/contact', labelRu: 'Контакты', labelEn: 'Contact' },
]

// Project Categories
export const PROJECT_CATEGORIES = [
    { value: 'all', labelRu: 'Все проекты', labelEn: 'All Projects' },
    { value: 'website', labelRu: 'Веб-сайты', labelEn: 'Websites' },
    { value: 'webapp', labelRu: 'Веб-приложения', labelEn: 'Web Apps' },
    { value: 'python', labelRu: 'Python проекты', labelEn: 'Python Projects' },
    { value: 'learning', labelRu: 'Учебные проекты', labelEn: 'Learning Projects' },
]

// Technologies
export const TECHNOLOGIES = {
    frontend: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Vite'],
    backend: ['Python', 'Node.js', 'Express', 'Flask'],
    database: ['MySQL', 'PostgreSQL'],
    tools: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman'],
}

// Skills Data
export const SKILLS_DATA = [
    {
        category: 'Frontend Development',
        skills: [
            { name: 'HTML5', level: 95, description: 'Семантическая верстка, accessibility, формы' },
            { name: 'CSS3', level: 95, description: 'Flexbox, Grid, анимации, preprocessors (SCSS)' },
            { name: 'JavaScript (ES6)', level: 70, description: 'DOM-манипуляции, async/await, модули' },
            { name: 'TypeScript', level: 65, description: 'Типизация, интерфейсы, generic типы' },
            { name: 'React', level: 75, description: 'Hooks, Context API, компонентный подход' },
            { name: 'Tailwind CSS', level: 85, description: 'Utility-first CSS, адаптивный дизайн' },
        ],
    },
    {
        category: 'Backend & Programming',
        skills: [
            { name: 'Python', level: 75, description: 'ООП, работа с файлами, веб-фреймворки' },
            { name: 'Node.js', level: 60, description: 'Express, REST API, асинхронность' },
        ],
    },
    {
        category: 'Базы данных',
        skills: [
            { name: 'MySQL', level: 60, description: 'SQL-запросы, проектирование таблиц' },
            { name: 'PostgreSQL', level: 55, description: 'Реляционные БД, миграции' },
        ],
    },
    {
        category: 'Инструменты',
        skills: [
            { name: 'Git/GitHub', level: 70, description: 'Version control, branch management' },
            { name: 'Responsive Design', level: 90, description: 'Mobile-first подход, media queries' },
            { name: 'UI/UX Principles', level: 65, description: 'User-centered design, прототипирование' },
            { name: 'SEO Basics', level: 60, description: 'Оптимизация мета-тегов, структура контента' },
        ],
    },
]

// Language Skills
export const LANGUAGE_SKILLS = [
    { language: 'Английский', languageEn: 'English', level: 'B2 (Intermediate)', stars: 4, description: 'Свободно читаю техническую документацию, общаюсь письменно и устно', flag: '🇬🇧' },
    { language: 'Русский', languageEn: 'Russian', level: 'Свободное владение', stars: 5, description: 'Живу и учусь в Москве, полное владение языком', flag: '🇷🇺' },
    { language: 'Таджикский', languageEn: 'Tajik', level: 'Свободное владение', stars: 5, description: 'Носитель языка', flag: '🇹🇯' },
    { language: 'Узбекский', languageEn: 'Uzbek', level: 'Родной язык', stars: 5, description: 'Родной язык', flag: '🇺🇿' },
]

// Soft Skills
export const SOFT_SKILLS = [
    { name: 'Быстрое обучение и адаптация', nameEn: 'Fast learning and adaptation', icon: '⚡' },
    { name: 'Problem solving & debugging', nameEn: 'Problem solving & debugging', icon: '🧩' },
    { name: 'Коммуникабельность', nameEn: 'Communication', icon: '💬' },
    { name: 'Командная работа', nameEn: 'Teamwork', icon: '🤝' },
    { name: 'Time management', nameEn: 'Time management', icon: '⏱️' },
    { name: 'Креативное мышление', nameEn: 'Creative thinking', icon: '🎨' },
    { name: 'Аналитический подход', nameEn: 'Analytical approach', icon: '📊' },
]

// Personal Qualities
export const PERSONAL_QUALITIES = [
    {
        title: 'Ответственность',
        titleEn: 'Responsibility',
        icon: '🎯',
        description: 'Всегда довожу проекты до конца, соблюдая сроки',
        descriptionEn: 'Always finish projects on time',
    },
    {
        title: 'Мотивация',
        titleEn: 'Motivation',
        icon: '🔥',
        description: 'Постоянно стремлюсь к росту и новым знаниям',
        descriptionEn: 'Constantly strive for growth and new knowledge',
    },
    {
        title: 'Пунктуальность',
        titleEn: 'Punctuality',
        icon: '⏰',
        description: 'Уважаю чужое время и всегда на связи',
        descriptionEn: 'Respect others\' time and always available',
    },
    {
        title: 'Креативность',
        titleEn: 'Creativity',
        icon: '💡',
        description: 'Нахожу нестандартные решения сложных задач',
        descriptionEn: 'Find creative solutions to complex problems',
    },
    {
        title: 'Адаптивность',
        titleEn: 'Adaptability',
        icon: '🌐',
        description: 'Легко адаптируюсь в мультикультурной среде',
        descriptionEn: 'Easily adapt in multicultural environment',
    },
    {
        title: 'Внимание к деталям',
        titleEn: 'Attention to detail',
        icon: '🔍',
        description: 'Забочусь о качестве кода и дизайна',
        descriptionEn: 'Care about code and design quality',
    },
]