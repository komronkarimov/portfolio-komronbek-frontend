// import api from './api'
import { Project, ProjectFilters } from '@/types/project.types'
// import { ApiResponse } from '@/types/common.types'

// Mock data for development
const mockProjects: Project[] = [
    {
        id: 1,
        title: 'Лендинг для кофейни',
        slug: 'coffee-landing',
        description: 'Современный адаптивный одностраничный сайт для кофейни с анимациями, интерактивным меню и формой бронирования столиков. Реализована галерея с фильтрацией, карта с местоположением и интеграция с социальными сетями.',
        shortDescription: 'Адаптивный одностраничный сайт с меню, галереей и формой бронирования столиков',
        imageUrl: 'https://avatars.mds.yandex.net/i?id=c914a3d6b72a0454009c4ce95a94dae5417270e3-5224518-images-thumbs&n=13',
        demoUrl: '#',
        githubUrl: '#',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'SCSS', 'Gulp'],
        category: 'website',
        featured: true,
        features: [
            'Parallax эффекты при прокрутке',
            'Гладкая прокрутка к секциям',
            'Интерактивное меню с фильтрацией',
            'Форма бронирования с валидацией',
            'Адаптивная галерея Lightbox',
            'Интеграция с Google Maps',
        ],
        createdAt: '2024-01-15',
        updatedAt: '2024-01-20',
    },
    {
        id: 2,
        title: 'Персональное портфолио для фотографа',
        slug: 'photographer-portfolio',
        description: 'Минималистичное портфолио с галереей работ, разделенной по категориям. Реализована функция лайков, комментариев и возможность скачивания фотографий в высоком разрешении.',
        shortDescription: 'Минималистичное портфолио с галереей работ и контактной формой',
        imageUrl: 'https://avatars.mds.yandex.net/i?id=ae65457f3cb48ca694d1fd1dcc01c3a2f11de1a3-12420713-images-thumbs&n=13 ',
        demoUrl: '#',
        githubUrl: '#',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Lightbox', 'AOS'],
        category: 'website',
        featured: true,
        features: [
            'Адаптивная галерея с фильтрацией',
            'Lazy loading для изображений',
            'Анимации при прокрутке',
            'Форма обратной связи',
            'SEO оптимизация',
        ],
        createdAt: '2024-02-10',
        updatedAt: '2024-02-15',
    },
    {
        id: 3,
        title: 'Веб-приложение Task Manager',
        slug: 'task-manager',
        description: 'Полнофункциональное приложение для управления задачами с возможностью создания, редактирования, удаления и отметки выполнения. Реализована система приоритетов, категорий и поиска.',
        shortDescription: 'Приложение для управления задачами с CRUD операциями',
        imageUrl: 'https://avatars.mds.yandex.net/i?id=a3105baf0729404305017cd5ccb6ddd243bdcea9-15273796-images-thumbs&n=13',
        githubUrl: '#',
        technologies: ['Python', 'Flask', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
        category: 'webapp',
        featured: false,
        features: [
            'CRUD операции для задач',
            'Система приоритетов',
            'Фильтрация по категориям',
            'Поиск задач',
            'Аутентификация пользователей',
            'Responsive дизайн',
        ],
        createdAt: '2024-03-01',
        updatedAt: '2024-03-10',
    },
    {
        id: 4,
        title: 'Калькулятор с расширенными функциями',
        slug: 'advanced-calculator',
        description: 'Веб-калькулятор с научными функциями, историей вычислений и возможностью сохранения результатов. Поддерживает различные темы оформления.',
        shortDescription: 'Веб-калькулятор с научными функциями и историей вычислений',
        imageUrl: 'https://avatars.mds.yandex.net/i?id=be7246ed372d7132a711f42ae3f7c11066b7dcde-16333491-images-thumbs&n=13',
        demoUrl: '#',
        githubUrl: '#',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        category: 'learning',
        featured: false,
        features: [
            'Научные функции',
            'История вычислений',
            'Темная/светлая тема',
            'Keyboard support',
            'Обработка ошибок',
        ],
        createdAt: '2023-12-20',
        updatedAt: '2023-12-25',
    },
    {
        id: 5,
        title: 'Landing Page для IT-стартапа',
        slug: 'startup-landing',
        description: 'Современный лендинг с анимациями, формой подписки на рассылку, интеграцией с социальными сетями и блоком отзывов клиентов.',
        shortDescription: 'Современный лендинг с анимациями и формой подписки',
        imageUrl: 'https://avatars.mds.yandex.net/i?id=faafef82e3bd49ff0853aeab430bc094-4420695-images-thumbs&n=13',
        demoUrl: '#',
        githubUrl: '#',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'AOS', 'EmailJS'],
        category: 'website',
        featured: true,
        features: [
            'AOS анимации при скролле',
            'Форма подписки на рассылку',
            'Слайдер отзывов',
            'Счетчики достижений',
            'SEO оптимизация',
            'Интеграция с соцсетями',
        ],
        createdAt: '2024-01-25',
        updatedAt: '2024-02-01',
    },
    {
        id: 6,
        title: 'Игра "Угадай число" на Python',
        slug: 'guess-number-game',
        description: 'Консольная игра с уровнями сложности, подсчетом попыток и таблицей рекордов. Реализован алгоритм бинарного поиска для режима компьютер vs компьютер.',
        shortDescription: 'Консольная игра с уровнями сложности и подсчетом попыток',
        imageUrl: 'https://avatars.mds.yandex.net/i?id=957c3b1038875905eab0ca45874dbc1aaab3a8f8-8210081-images-thumbs&n=13',
        githubUrl: '#',
        technologies: ['Python'],
        category: 'python',
        featured: false,
        features: [
            'Три уровня сложности',
            'Подсчет количества попыток',
            'Таблица рекордов',
            'Режим компьютер vs компьютер',
            'Обработка исключений',
        ],
        createdAt: '2023-11-15',
        updatedAt: '2023-11-20',
    },
]

export const projectsService = {
    async getAll(filters?: ProjectFilters): Promise<Project[]> {
        try {
            // For development, return mock data
            let filteredProjects = [...mockProjects]

            if (filters?.category && filters.category !== 'all') {
                filteredProjects = filteredProjects.filter(p => p.category === filters.category)
            }

            if (filters?.featured !== undefined) {
                filteredProjects = filteredProjects.filter(p => p.featured === filters.featured)
            }

            if (filters?.search) {
                const searchLower = filters.search.toLowerCase()
                filteredProjects = filteredProjects.filter(p =>
                    p.title.toLowerCase().includes(searchLower) ||
                    p.description.toLowerCase().includes(searchLower) ||
                    p.technologies.some(t => t.toLowerCase().includes(searchLower))
                )
            }

            return filteredProjects

            // Production code:
            // return await api.get<Project[]>('/projects', { params: filters })
        } catch (error) {
            console.error('Error fetching projects:', error)
            return mockProjects // Fallback to mock data
        }
    },

    async getBySlug(slug: string): Promise<Project | null> {
        try {
            // For development, return mock data
            const project = mockProjects.find(p => p.slug === slug)
            return project || null

            // Production code:
            // return await api.get<Project>(`/projects/${slug}`)
        } catch (error) {
            console.error('Error fetching project:', error)
            return null
        }
    },

    async getFeatured(): Promise<Project[]> {
        try {
            // For development, return featured mock data
            return mockProjects.filter(p => p.featured)

            // Production code:
            // return await api.get<Project[]>('/projects/featured')
        } catch (error) {
            console.error('Error fetching featured projects:', error)
            return []
        }
    },
}