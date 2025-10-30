import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { blogService } from '@/services/blogService'
import { BlogPost as BlogPostType } from '@/types/blog.types'
import Loader from '@/components/common/Loader'
import { formatDate } from '@/utils/helpers'
import {
    FaCalendar,
    FaClock,
    FaEye,
    FaArrowLeft,
    FaShareAlt,
    FaFacebook,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa'

const BlogPost = () => {
    const { slug } = useParams<{ slug: string }>()
    const { language } = useLanguage()
    const [post, setPost] = useState<BlogPostType | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPost = async () => {
            if (!slug) return

            try {
                setLoading(true)
                const data = await blogService.getBySlug(slug)
                setPost(data)

                // Increment views
                if (data) {
                    await blogService.incrementViews(data.id)
                }
            } catch (error) {
                console.error('Error fetching blog post:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchPost()
    }, [slug])

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader size="lg" text={language === 'ru' ? 'Загрузка статьи...' : 'Loading article...'} />
            </div>
        )
    }

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">404</h1>
                    <p className="text-xl text-light-secondary mb-6">
                        {language === 'ru' ? 'Статья не найдена' : 'Article not found'}
                    </p>
                    <Link to="/blog" className="btn-primary">
                        {language === 'ru' ? 'Вернуться к блогу' : 'Back to Blog'}
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <>
            <Helmet>
                <title>{post.title} | {language === 'ru' ? 'Блог' : 'Blog'}</title>
                <meta name="description" content={post.excerpt} />
            </Helmet>

            <article className="pt-24 pb-16">
                {/* Hero Section */}
                <div className="relative h-96 mb-12">
                    <img
                        src={post.coverImage || `https://via.placeholder.com/1200x400/0a0e27/00d4ff?text=${encodeURIComponent(post.title)}`}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/50" />

                    <div className="absolute bottom-0 left-0 right-0 container-custom pb-12">
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 text-white hover:text-primary-blue 
                       transition-colors mb-6"
                        >
                            <FaArrowLeft />
                            {language === 'ru' ? 'Вернуться к блогу' : 'Back to Blog'}
                        </Link>

                        <motion.h1
                            className="text-4xl md:text-5xl font-bold mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            {post.title}
                        </motion.h1>

                        <div className="flex flex-wrap items-center gap-6 text-light-secondary">
                            <span className="flex items-center gap-2">
                                <FaCalendar className="text-primary-blue" />
                                {formatDate(post.createdAt, language === 'ru' ? 'ru-RU' : 'en-US')}
                            </span>
                            <span className="flex items-center gap-2">
                                <FaClock className="text-primary-blue" />
                                {post.readTime} {language === 'ru' ? 'мин чтения' : 'min read'}
                            </span>
                            <span className="flex items-center gap-2">
                                <FaEye className="text-primary-blue" />
                                {post.views} {language === 'ru' ? 'просмотров' : 'views'}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid lg:grid-cols-4 gap-12">
                            {/* Main Content */}
                            <div className="lg:col-span-3">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {post.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-4 py-2 bg-gradient-primary/10 text-primary-blue 
                               rounded-lg text-sm border border-primary-blue/30"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Article Content */}
                                <div
                                    className="prose prose-invert prose-lg max-w-none
                           prose-headings:font-bold prose-headings:text-gradient
                           prose-p:text-light prose-p:leading-relaxed
                           prose-a:text-primary-blue prose-a:no-underline hover:prose-a:text-primary-purple
                           prose-code:text-primary-blue prose-code:bg-white/5 prose-code:px-2 prose-code:py-1 prose-code:rounded
                           prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10
                           prose-img:rounded-2xl"
                                    dangerouslySetInnerHTML={{ __html: post.content }}
                                />

                                {/* Share Section */}
                                <div className="mt-12 pt-8 border-t border-white/10">
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <FaShareAlt className="text-primary-blue" />
                                        {language === 'ru' ? 'Поделиться статьей' : 'Share Article'}
                                    </h3>
                                    <div className="flex gap-4">
                                        <button className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center
                                   hover:scale-110 transition-transform">
                                            <FaFacebook size={20} />
                                        </button>
                                        <button className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center
                                   hover:scale-110 transition-transform">
                                            <FaTwitter size={20} />
                                        </button>
                                        <button className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center
                                   hover:scale-110 transition-transform">
                                            <FaLinkedin size={20} />
                                        </button>
                                    </div>
                                </div>

                                {/* Navigation */}
                                <div className="mt-12 flex justify-between">
                                    <Link
                                        to="/blog"
                                        className="btn-secondary"
                                    >
                                        <FaArrowLeft className="mr-2" />
                                        {language === 'ru' ? 'Все статьи' : 'All Articles'}
                                    </Link>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <aside className="lg:col-span-1">
                                <div className="sticky top-24 space-y-6">
                                    {/* Author */}
                                    <div className="p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
                                        <img
                                            src="https://sun1-47.userapi.com/s/v1/ig2/v59_tJI8L7Cx5bG-PA5DjX2ys2QqpQKaiW-azXrOtglvQOwSx5qsAV0AqBS6ZE9ta6k7nUxZWChR4PZ4sGIpiZ4D.jpg?quality=95&crop=310,679,1233,1233&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080&ava=1&u=Grzmg3MoVe9wDoU42UKsf1H8iO2dh58mhK7C35sEIJk&cs=200x200"
                                            alt="Komronbek Karimov"
                                            className="w-20 h-20 rounded-full mx-auto mb-4"
                                        />
                                        <h3 className="text-center font-bold mb-2">
                                            {language === 'ru' ? 'Комронбек Каримов' : 'Komronbek Karimov'}
                                        </h3>
                                        <p className="text-sm text-light-secondary text-center">
                                            {language === 'ru'
                                                ? 'Веб-разработчик и студент'
                                                : 'Web Developer & Student'
                                            }
                                        </p>
                                    </div>

                                    {/* Table of Contents (Optional) */}
                                    <div className="p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
                                        <h3 className="font-bold mb-4">
                                            {language === 'ru' ? 'Содержание' : 'Table of Contents'}
                                        </h3>
                                        <ul className="space-y-2 text-sm">
                                            <li>
                                                <a href="#" className="text-light-secondary hover:text-primary-blue transition-colors">
                                                    {language === 'ru' ? 'Введение' : 'Introduction'}
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="text-light-secondary hover:text-primary-blue transition-colors">
                                                    {language === 'ru' ? 'Основная часть' : 'Main Content'}
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="text-light-secondary hover:text-primary-blue transition-colors">
                                                    {language === 'ru' ? 'Заключение' : 'Conclusion'}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default BlogPost