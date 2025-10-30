// src/components/common/SEO.tsx
import { Helmet } from 'react-helmet-async'

type SEOProps = {
    title?: string
    description?: string
    image?: string            // относительный путь или абсолютная ссылка
    url?: string              // если не передать — соберём из SITE_URL + pathname
    type?: 'website' | 'article'
    noIndex?: boolean
    locale?: string           // 'ru_RU' | 'en_US'
    alternateLocales?: string[] // напр. ['en_US']
    // SEO-расширения при необходимости
    keywords?: string
}

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://example.com'
const APP_NAME = import.meta.env.VITE_APP_NAME || 'Portfolio'
const APP_DESC = import.meta.env.VITE_APP_DESCRIPTION || 'Personal portfolio'

export default function SEO({
    title,
    description,
    image = '/images/og-default.png',
    url,
    type = 'website',
    noIndex = false,
    locale = 'ru_RU',
    alternateLocales = ['en_US'],
    keywords,
}: SEOProps) {
    const fullUrl = url || SITE_URL + window.location.pathname
    const fullImage = image.startsWith('http') ? image : SITE_URL + image
    const finalTitle = title ? `${title} — ${APP_NAME}` : APP_NAME
    const finalDesc = description || APP_DESC

    return (
        <Helmet>
            <title>{finalTitle}</title>
            <meta name="description" content={finalDesc} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={fullUrl} />

            {/* Indexing */}
            {noIndex && <meta name="robots" content="noindex,nofollow" />}

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={finalTitle} />
            <meta property="og:description" content={finalDesc} />
            <meta property="og:image" content={fullImage} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:site_name" content={APP_NAME} />
            <meta property="og:locale" content={locale} />
            {alternateLocales.map(l => (
                <meta key={l} property="og:locale:alternate" content={l} />
            ))}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={finalTitle} />
            <meta name="twitter:description" content={finalDesc} />
            <meta name="twitter:image" content={fullImage} />
            {/* при наличии @username: <meta name="twitter:site" content="@username" /> */}
        </Helmet>
    )
}
