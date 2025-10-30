import { createContext, useContext, useState, ReactNode } from 'react'

interface BlogFilterContextType {
    searchQuery: string
    setSearchQuery: (query: string) => void
    selectedTag: string | null
    setSelectedTag: (tag: string | null) => void
    selectedCategory: string | null
    setSelectedCategory: (category: string | null) => void
}

const BlogFilterContext = createContext<BlogFilterContextType | undefined>(undefined)

export const BlogFilterProvider = ({ children }: { children: ReactNode }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedTag, setSelectedTag] = useState<string | null>(null)
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

    return (
        <BlogFilterContext.Provider
            value={{
                searchQuery,
                setSearchQuery,
                selectedTag,
                setSelectedTag,
                selectedCategory,
                setSelectedCategory,
            }}
        >
            {children}
        </BlogFilterContext.Provider>
    )
}

export const useBlogFilter = () => {
    const context = useContext(BlogFilterContext)
    if (context === undefined) {
        throw new Error('useBlogFilter must be used within BlogFilterProvider')
    }
    return context
}