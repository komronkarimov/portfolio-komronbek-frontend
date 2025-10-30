// import api from './api'
import { BlogPost } from '@/types/blog.types'

// Mock data for development
const mockBlogPosts: BlogPost[] = [
    {
        id: 1,
        title: '5 советов для начинающих веб-разработчиков',
        slug: '5-tips-for-beginner-developers',
        excerpt: 'Практические советы для тех, кто только начинает свой путь в веб-разработке',
        content: `
      <h2>Введение</h2>
      <p>Начать карьеру в веб-разработке может быть сложно, но эти советы помогут вам на пути к успеху...</p>
      
      <h3>1. Изучайте основы</h3>
      <p>HTML, CSS и JavaScript - это фундамент веб-разработки. Не спешите переходить к фреймворкам...</p>
      
      <h3>2. Практикуйтесь каждый день</h3>
      <p>Даже 30 минут ежедневной практики дадут больше результата, чем марафоны по выходным...</p>
      
      <h3>3. Создавайте проекты</h3>
      <p>Теория важна, но настоящее обучение происходит, когда вы создаете реальные проекты...</p>
      
      <h3>4. Читайте чужой код</h3>
      <p>GitHub - отличный источник для изучения того, как другие разработчики решают задачи...</p>
      
      <h3>5. Не бойтесь ошибок</h3>
      <p>Ошибки - это нормальная часть процесса обучения. Важно учиться на них...</p>
    `,
        coverImage: 'https://i0.wp.com/meoshop.ru/wp-content/uploads/2022/07/Programmirovanie.jpg?fit=2262%2C1506&ssl=1',
        category: 'Веб-разработка',
        tags: ['webdev', 'beginners', 'tips'],
        createdAt: '2024-01-15',
        readTime: 5,
        views: 234,
    },
    {
        id: 2,
        title: 'Как я создал своё первое портфолио',
        slug: 'how-i-created-portfolio',
        content: `
      <h2>История создания</h2>
      <p>Создание собственного портфолио - важный шаг для любого разработчика...</p>
      
      <h3>Выбор технологий</h3>
      <p>Я выбрал React + TypeScript + Tailwind CSS по следующим причинам...</p>
      
      <h3>Дизайн и UX</h3>
      <p>Минималистичный дизайн с акцентом на проекты и навыки...</p>
      
      <h3>Оптимизация производительности</h3>
      <p>Lazy loading, code splitting и другие техники...</p>
    `,
        excerpt: 'История создания этого сайта, выбор технологий и дизайнерских решений.',
        coverImage: 'https://avatars.mds.yandex.net/i?id=e4c11c79e1f7dd806ceb8110bf54b075_l-3742206-images-thumbs&n=13',
        category: 'Веб-разработка',
        tags: ['portfolio', 'design', 'html', 'css', 'react'],
        views: 189,
        readTime: 7,
        createdAt: '2024-02-05',
    },
    {
        id: 3,
        title: 'Python vs JavaScript: что выбрать новичку?',
        slug: 'python-vs-javascript',
        content: `
      <h2>Сравнение двух популярных языков</h2>
      <p>И Python, и JavaScript отлично подходят для начинающих, но у каждого есть свои особенности...</p>
      
      <h3>Python</h3>
      <p>Простой синтаксис, отличная документация, широкое применение...</p>
      
      <h3>JavaScript</h3>
      <p>Незаменим для веб-разработки, огромное сообщество, много вакансий...</p>
      
      <h3>Мой выбор</h3>
      <p>Я решил изучать оба языка параллельно...</p>
    `,
        excerpt: 'Сравнение двух популярных языков программирования для начинающих разработчиков.',
        coverImage: 'https://avatars.mds.yandex.net/i?id=c71c1daeb8ad4a32173ed44195b724de_l-8269337-images-thumbs&n=13',
        category: 'Советы и трюки',
        tags: ['python', 'javascript', 'comparison', 'programming'],
        views: 312,
        readTime: 8,
        createdAt: '2024-03-01',
        updatedAt: '2024-03-01',
    },
    {
        id: 4,
        title: 'Мой опыт обучения в Московском Политехе',
        slug: 'moscow-polytech-experience',
        content: `
      <h2>Поступление и первые впечатления</h2>
      <p>Выбор университета и специальности был непростым решением...</p>
      
      <h3>Программа обучения</h3>
      <p>Прикладная информатика - это сочетание теории и практики...</p>
      
      <h3>Студенческая жизнь</h3>
      <p>Помимо учебы, университет предлагает много возможностей для развития...</p>
    `,
        excerpt: 'Делюсь впечатлениями о программе "Прикладная информатика" и студенческой жизни.',
        coverImage: 'https://avatars.mds.yandex.net/get-altay/1485972/2a000001694d0d946696f2ef5312bf4d0c95/orig',
        tags: ['university', 'education', 'moscow', 'студенчество'],
        category: 'Учебные материалы',
        views: 156,
        readTime: 6,
        createdAt: '2024-02-20',
        updatedAt: '2024-02-20',
    },
]

export const blogService = {
    async getAll(): Promise<BlogPost[]> {
        try {
            // For development, return mock data
            return mockBlogPosts

            // Production code:
            // return await api.get<BlogPost[]>('/blog')
        } catch (error) {
            console.error('Error fetching blog posts:', error)
            return mockBlogPosts
        }
    },

    async getBySlug(slug: string): Promise<BlogPost | null> {
        try {
            // For development, return mock data
            const post = mockBlogPosts.find(p => p.slug === slug)
            return post || null

            // Production code:
            // return await api.get<BlogPost>(`/blog/${slug}`)
        } catch (error) {
            console.error('Error fetching blog post:', error)
            return null
        }
    },

    async incrementViews(id: number): Promise<void> {
        try {
            // For development, just log
            console.log(`Incrementing views for post ${id}`)

            // Production code:
            // await api.post(`/blog/${id}/view`)
        } catch (error) {
            console.error('Error incrementing views:', error)
        }
    },
}