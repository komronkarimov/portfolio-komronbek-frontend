import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

type Language = 'ru' | 'en'

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const { i18n, t } = useTranslation()
    const [language, setLanguageState] = useState<Language>(() => {
        const saved = localStorage.getItem('language')
        return (saved as Language) || 'ru'
    })

    const setLanguage = (lang: Language) => {
        setLanguageState(lang)
        i18n.changeLanguage(lang)
        localStorage.setItem('language', lang)
        document.documentElement.lang = lang
    }

    useEffect(() => {
        i18n.changeLanguage(language)
        document.documentElement.lang = language
    }, [language, i18n])

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider')
    }
    return context
}