export interface Certificate {
    id: number
    title: string
    description: string
    platform?: string
    imageUrl: string
    date: string
    verificationUrl?: string
}

export interface Course {
    title: string
    platform: string
    status: 'completed' | 'in-progress' | 'planned'
    progress?: number
}

export interface Achievement {
    title: string
    description: string
    date: string
    icon: string
}