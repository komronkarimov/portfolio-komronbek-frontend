import { createContext, useContext, useState, ReactNode } from 'react'

type FilterValue = 'all' | 'website' | 'web-app' | 'python' | string

interface PortfolioFilterContextType {
    activeFilter: FilterValue
    setActiveFilter: (filter: FilterValue) => void
    searchQuery: string
    setSearchQuery: (query: string) => void
}

const PortfolioFilterContext = createContext<PortfolioFilterContextType | undefined>(undefined)

export const PortfolioFilterProvider = ({ children }: { children: ReactNode }) => {
    const [activeFilter, setActiveFilter] = useState<FilterValue>('all')
    const [searchQuery, setSearchQuery] = useState('')

    return (
        <PortfolioFilterContext.Provider
            value={{
                activeFilter,
                setActiveFilter,
                searchQuery,
                setSearchQuery,
            }}
        >
            {children}
        </PortfolioFilterContext.Provider>
    )
}

export const usePortfolioFilter = () => {
    const context = useContext(PortfolioFilterContext)
    if (context === undefined) {
        throw new Error('usePortfolioFilter must be used within PortfolioFilterProvider')
    }
    return context
}