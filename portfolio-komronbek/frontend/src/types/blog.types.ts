export interface BlogPost {
    id: number
    title: string
    slug: string
    excerpt: string
    content: string
    coverImage: string
    category?: string 
    tags: string[]
    createdAt: string
    updatedAt?: string
    readTime: number
    views: number
    author?: {
        name: string
        avatar?: string
    }
}

export interface BlogCategory {
    name: string
    slug: string
    count: number
}