export interface ApiResponse<T> {
    data: T
    message?: string
    error?: string
    success: boolean
}

export interface PaginatedResponse<T> {
    data: T[]
    page: number
    pageSize: number
    total: number
    totalPages: number
}

export interface ContactFormData {
    name: string
    email: string
    subject?: string
    message: string
}

export interface SocialLink {
    name: string
    url: string
    icon: string
}

export interface SEOProps {
    title: string
    description: string
    keywords?: string
    image?: string
    url?: string
}

export interface TelegramResponse {
    ok: boolean
    result?: any
    description?: string
}