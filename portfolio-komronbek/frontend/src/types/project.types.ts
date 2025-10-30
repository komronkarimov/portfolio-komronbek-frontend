export type ProjectCategory = 'website' | 'webapp' | 'python' | 'learning' | 'all'

export interface Project {
    id: number
    title: string
    slug: string
    description: string
    shortDescription: string
    imageUrl: string
    demoUrl?: string
    githubUrl?: string
    technologies: string[]
    category: ProjectCategory
    featured: boolean
    features?: string[]
    createdAt: string
    updatedAt: string
}

export interface ProjectFilters {
    category?: ProjectCategory
    featured?: boolean
    search?: string
}