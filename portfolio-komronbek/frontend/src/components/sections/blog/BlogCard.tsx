import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BlogPost } from '@/types/blog.types'
import { formatDate } from '@/utils/helpers'
import { useLanguage } from '@/contexts/LanguageContext'
import { FaCalendar, FaClock, FaEye, FaArrowRight } from 'react-icons/fa'

interface BlogCardProps {
    post: BlogPost
    onTagClick?: (tag: string) => void
}

const BlogCard = ({ post, onTagClick }: BlogCardProps) => {
    const { language } = useLanguage()

    return (
        <motion.article
            className="group bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10
               hover:border-primary-blue/50 hover:shadow-xl hover:shadow-primary-blue/20
               transition-all duration-300"
            whileHover={{ y: -5 }}
        >
            <div className="grid md:grid-cols-3 gap-6">
                {/* Image */}
                <Link
                    to={`/blog/${post.slug}`}
                    className="relative h-64 md:h-full overflow-hidden"
                >
                    <img
                        src={post.coverImage || `https://via.placeholder.com/400x300/0a0e27/00d4ff?text=${encodeURIComponent(post.title)}`}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                </Link>

                {/* Content */}
                <div className="md:col-span-2 p-6">
                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-light-secondary mb-4">
                        <span className="flex items-center gap-2">
                            <FaCalendar className="text-primary-blue" />
                            {formatDate(post.createdAt, language === 'ru' ? 'ru-RU' : 'en-US')}
                        </span>
                        <span className="flex items-center gap-2">
                            <FaClock className="text-primary-blue" />
                            {post.readTime} {language === 'ru' ? 'мин' : 'min'}
                        </span>
                        <span className="flex items-center gap-2">
                            <FaEye className="text-primary-blue" />
                            {post.views}
                        </span>
                    </div>

                    {/* Title */}
                    <Link to={`/blog/${post.slug}`}>
                        <h2 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-all">
                            {post.title}
                        </h2>
                    </Link>

                    {/* Excerpt */}
                    <p className="text-light-secondary mb-4 line-clamp-3">
                        {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, index) => (
                            <button
                                key={index}
                                onClick={() => onTagClick?.(tag)}
                                className="px-3 py-1 bg-white/5 text-primary-blue rounded-full text-xs 
                         hover:bg-gradient-primary hover:text-white transition-all"
                            >
                                #{tag}
                            </button>
                        ))}
                    </div>

                    {/* Read More */}
                    <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-primary-blue hover:text-primary-purple 
                     font-semibold group/link transition-colors"
                    >
                        {language === 'ru' ? 'Читать далее' : 'Read more'}
                        <FaArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </motion.article>
    )
}

export default BlogCard