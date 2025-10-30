// src/components/common/LanguageSEO.tsx
import { Helmet } from 'react-helmet-async'
import { useLanguage } from '@/contexts/LanguageContext' // твой контекст

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://example.com'

export default function LanguageSEO() {
    const { language } = useLanguage() // 'ru' | 'en'
    const path = window.location.pathname

    const hrefLangs = [
        { lang: 'ru', href: `${SITE_URL}/ru${path}`.replace(/\/+/, '/') },
        { lang: 'en', href: `${SITE_URL}/en${path}`.replace(/\/+/, '/') },
        // x-default укажем на RU (или EN)
    ]

    return (
        <Helmet>
            <html lang={language} />
            {hrefLangs.map(x => (
                <link key={x.lang} rel="alternate" hrefLang={x.lang} href={x.href} />
            ))}
            <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/${path}`.replace(/\/+/, '/')} />
        </Helmet>
    )
}
