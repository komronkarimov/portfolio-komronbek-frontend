import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { useBlogFilter } from '@/contexts/BlogFilterContext'
import { blogService } from '@/services/blogService'
import { BlogPost } from '@/types/blog.types'
import Card from '@/components/common/Card'
import { FaTag, FaNewspaper } from 'react-icons/fa'

const BlogSidebar = () => {
    const { language } = useLanguage()
    const { selectedTag, setSelectedTag, selectedCategory, setSelectedCategory } = useBlogFilter()
    const [posts, setPosts] = useState<BlogPost[]>([])
    const [categories, setCategories] = useState<{ name: string; count: number }[]>([])
    const [popularTags, setPopularTags] = useState<string[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await blogService.getAll()
                setPosts(data)

                // Extract unique categories with counts
                const categoryMap = new Map<string, number>()
                data.forEach(post => {
                    if (post.category) {
                        categoryMap.set(post.category, (categoryMap.get(post.category) || 0) + 1)
                    }
                })
                const cats = Array.from(categoryMap.entries()).map(([name, count]) => ({ name, count }))
                setCategories(cats)

                // Extract popular tags
                const tagMap = new Map<string, number>()
                data.forEach(post => {
                    post.tags.forEach(tag => {
                        tagMap.set(tag, (tagMap.get(tag) || 0) + 1)
                    })
                })
                const sortedTags = Array.from(tagMap.entries())
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 10)
                    .map(([tag]) => tag)
                setPopularTags(sortedTags)
            } catch (error) {
                console.error('Error fetching blog data:', error)
            }
        }

        fetchData()
    }, [])

    const recentPosts = posts.slice(0, 3)

    return (
        <div className="space-y-8 sticky top-24">
            {/* Categories */}
            <Card>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <FaNewspaper className="text-primary-blue" />
                    {language === 'ru' ? 'Категории' : 'Categories'}
                </h3>
                {categories.length > 0 ? (
                    <ul className="space-y-2">
                        {categories.map((category, index) => (
                            <motion.li
                                key={index}
                                className={`flex items-center justify-between py-2 px-3 rounded-lg cursor-pointer transition-all ${
                                    selectedCategory === category.name
                                        ? 'bg-gradient-primary text-white'
                                        : 'bg-white/5 hover:bg-white/10'
                                }`}
                                whileHover={{ x: 5 }}
                                onClick={() => setSelectedCategory(
                                    selectedCategory === category.name ? null : category.name
                                )}
                            >
                                <span>{category.name}</span>
                                <span className={selectedCategory === category.name ? 'text-white' : 'text-primary-blue font-semibold'}>
                                    {category.count}
                                </span>
                            </motion.li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-light-secondary text-sm">
                        {language === 'ru' ? 'Категории не найдены' : 'No categories found'}
                    </p>
                )}
            </Card>

            {/* Popular Tags */}
            <Card>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <FaTag className="text-primary-blue" />
                    {language === 'ru' ? 'Популярные теги' : 'Popular Tags'}
                </h3>
                {popularTags.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                        {popularTags.map((tag, index) => (
                            <motion.button
                                key={index}
                                className={`px-3 py-1 rounded-full text-xs transition-all ${
                                    selectedTag === tag
                                        ? 'bg-gradient-primary text-white'
                                        : 'bg-white/5 text-primary-blue hover:bg-gradient-primary hover:text-white'
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                            >
                                #{tag}
                            </motion.button>
                        ))}
                    </div>
                ) : (
                    <p className="text-light-secondary text-sm">
                        {language === 'ru' ? 'Теги не найдены' : 'No tags found'}
                    </p>
                )}
            </Card>

            {/* Recent Posts */}
            <Card>
                <h3 className="text-lg font-bold mb-4">
                    {language === 'ru' ? 'Последние статьи' : 'Recent Posts'}
                </h3>
                {recentPosts.length > 0 ? (
                    <ul className="space-y-4">
                        {recentPosts.map((post) => (
                            <motion.li
                                key={post.id}
                                className="pb-4 border-b border-white/10 last:border-0 cursor-pointer hover:text-primary-blue transition-colors"
                                whileHover={{ x: 5 }}
                            >
                                <a href={`/blog/${post.slug}`}>
                                    <h4 className="font-semibold mb-1 text-sm line-clamp-2">
                                        {post.title}
                                    </h4>
                                    <p className="text-xs text-light-secondary">
                                        {new Date(post.createdAt).toLocaleDateString(language === 'ru' ? 'ru-RU' : 'en-US')}
                                    </p>
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-light-secondary text-sm">
                        {language === 'ru' ? 'Статьи не найдены' : 'No posts found'}
                    </p>
                )}
            </Card>

            {/* Newsletter */}
            <Card className="bg-gradient-primary/10 border-primary-blue/30">
                <h3 className="text-lg font-bold mb-3">
                    {language === 'ru' ? '📧 Подписка' : '📧 Newsletter'}
                </h3>
                <p className="text-sm text-light-secondary mb-4">
                    {language === 'ru'
                        ? 'Получайте новые статьи на email'
                        : 'Get new articles by email'
                    }
                </p>
                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg
                     text-white placeholder-light-secondary
                     focus:outline-none focus:border-primary-blue transition-all"
                    />
                    <button className="btn-primary w-full text-sm">
                        {language === 'ru' ? 'Подписаться' : 'Subscribe'}
                    </button>
                </form>
            </Card>
        </div>
    )
}

export default BlogSidebar