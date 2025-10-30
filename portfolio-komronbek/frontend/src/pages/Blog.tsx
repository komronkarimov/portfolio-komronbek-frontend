import { Helmet } from 'react-helmet-async'
import { useLanguage } from '@/contexts/LanguageContext'
import { BlogFilterProvider } from '@/contexts/BlogFilterContext'
import BlogPageHero from '@/components/common/BlogPageHero'
import BlogGrid from '@/components/sections/blog/BlogGrid'
import BlogSidebar from '@/components/sections/blog/BlogSidebar'

const Blog = () => {
    const { language } = useLanguage()

    return (
        <BlogFilterProvider>
            <Helmet>
                <title>
                    {language === 'ru'
                        ? 'Блог | Комронбек Каримов'
                        : 'Blog | Komronbek Karimov'}
                </title>
                <meta
                    name="description"
                    content={language === 'ru'
                        ? 'Статьи о веб-разработке, программировании и технологиях'
                        : 'Articles about web development, programming and technologies'
                    }
                />
                <meta
                    name="keywords"
                    content="blog, web development, programming, JavaScript, Python, React, tutorials"
                />
                <meta property="og:title" content={language === 'ru' ? 'Блог' : 'Blog'} />
                <meta property="og:description" content={language === 'ru'
                    ? 'Статьи о веб-разработке, программировании и технологиях'
                    : 'Articles about web development, programming and technologies'
                } />
            </Helmet>

            {/* Hero Section */}
            <BlogPageHero
                language={language}
                postsCount={12}
                categoriesCount={5}
                totalViews={1500}
            />

            {/* Blog Content */}
            <section className="section-padding bg-dark-secondary">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <BlogGrid />
                        </div>
                        <aside className="lg:col-span-1">
                            <BlogSidebar />
                        </aside>
                    </div>
                </div>
            </section>
        </BlogFilterProvider>
    )
}

export default Blog