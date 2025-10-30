import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { useBlogFilter } from '@/contexts/BlogFilterContext'
import { blogService } from '@/services/blogService'
import { BlogPost } from '@/types/blog.types'
import BlogCard from './BlogCard'
import Loader from '@/components/common/Loader'
import { FaSearch } from 'react-icons/fa'

const BlogGrid = () => {
    const { language } = useLanguage()
    const { searchQuery, setSearchQuery, selectedTag, selectedCategory, setSelectedCategory, setSelectedTag } = useBlogFilter()
    const [posts, setPosts] = useState<BlogPost[]>([])
    const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true)
                const data = await blogService.getAll()
                console.log('Fetched blog posts:', data) // Для отладки
                setPosts(data)
                setFilteredPosts(data)
            } catch (error) {
                console.error('Error fetching blog posts:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchPosts()
    }, [])

    // Filter posts by search, tag, and category
    useEffect(() => {
        console.log('Filtering - searchQuery:', searchQuery, 'selectedTag:', selectedTag, 'selectedCategory:', selectedCategory) // Для отладки

        let filtered = [...posts]

        // Filter by search query
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase().trim()
            filtered = filtered.filter(post =>
                post.title.toLowerCase().includes(query) ||
                post.excerpt.toLowerCase().includes(query) ||
                post.content?.toLowerCase().includes(query) ||
                post.tags.some(tag => tag.toLowerCase().includes(query))
            )
        }

        // Filter by tag
        if (selectedTag) {
            filtered = filtered.filter(post => post.tags.includes(selectedTag))
        }

        // Filter by category
        if (selectedCategory) {
            filtered = filtered.filter(post => post.category === selectedCategory)
        }

        console.log('Filtered posts:', filtered) // Для отладки
        setFilteredPosts(filtered)
    }, [searchQuery, selectedTag, selectedCategory, posts])

    if (loading) {
        return (
            <div className="flex justify-center py-20">
                <Loader size="lg" text={language === 'ru' ? 'Загрузка статей...' : 'Loading articles...'} />
            </div>
        )
    }

    return (
        <div>
            {/* Search Bar */}
            <div className="relative mb-8">
                <input
                    type="text"
                    placeholder={language === 'ru' ? 'Поиск статей...' : 'Search articles...'}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-6 py-4 pl-12 bg-white/5 border border-white/10 rounded-lg
                   text-white placeholder-light-secondary
                   focus:outline-none focus:border-primary-blue focus:ring-2 
                   focus:ring-primary-blue/20 transition-all"
                />
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-light-secondary" />

                {/* Clear search button */}
                {searchQuery && (
                    <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-light-secondary hover:text-white"
                    >
                        ✕
                    </button>
                )}
            </div>

            {/* Active Filters */}
            {(selectedTag || selectedCategory) && (
                <div className="flex flex-wrap gap-2 mb-6">
                    {selectedTag && (
                        <div className="px-4 py-2 bg-primary-blue/20 text-primary-blue rounded-full text-sm flex items-center gap-2">
                            {language === 'ru' ? 'Тег:' : 'Tag:'} {selectedTag}
                            <button
                                onClick={() => setSelectedTag(null)}
                                className="hover:text-white"
                            >
                                ✕
                            </button>
                        </div>
                    )}
                    {selectedCategory && (
                        <div className="px-4 py-2 bg-primary-purple/20 text-primary-purple rounded-full text-sm flex items-center gap-2">
                            {language === 'ru' ? 'Категория:' : 'Category:'} {selectedCategory}
                            <button
                                onClick={() => setSelectedCategory(null)}
                                className="hover:text-white"
                            >
                                ✕
                            </button>
                        </div>
                    )}
                </div>
            )}

            {/* Posts Grid */}
            {filteredPosts.length === 0 ? (
                <motion.div
                    className="text-center py-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <div className="text-6xl mb-4">📝</div>
                    <h3 className="text-2xl font-bold mb-2">
                        {language === 'ru' ? 'Статьи не найдены' : 'No articles found'}
                    </h3>
                    <p className="text-light-secondary mb-4">
                        {language === 'ru'
                            ? 'Попробуйте изменить поисковый запрос или фильтры'
                            : 'Try changing the search query or filters'
                        }
                    </p>
                    <button
                        onClick={() => {
                            setSearchQuery('')
                            setSelectedTag(null)
                            setSelectedCategory(null)
                        }}
                        className="btn-primary"
                    >
                        {language === 'ru' ? 'Сбросить фильтры' : 'Reset filters'}
                    </button>
                </motion.div>
            ) : (
                <>
                    <div className="space-y-8">
                        {filteredPosts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <BlogCard post={post} onTagClick={setSelectedTag} />
                            </motion.div>
                        ))}
                    </div>

                    {/* Results Count */}
                    <div className="text-center mt-8 text-light-secondary">
                        {language === 'ru'
                            ? `Найдено статей: ${filteredPosts.length}`
                            : `Articles found: ${filteredPosts.length}`
                        }
                    </div>
                </>
            )}
        </div>
    )
}

export default BlogGrid