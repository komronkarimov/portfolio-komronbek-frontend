import { useLanguage } from '@/contexts/LanguageContext'

const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage()

    return (
        <div className="flex items-center gap-2">
            <button
                onClick={() => setLanguage('ru')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-all ${language === 'ru'
                    ? 'bg-white/10 text-primary-blue'
                    : 'text-light-secondary hover:text-white'
                    }`}
            >
                <span className="text-sm font-medium">RU</span>
            </button>
            <button
                onClick={() => setLanguage('en')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-all ${language === 'en'
                    ? 'bg-white/10 text-primary-blue'
                    : 'text-light-secondary hover:text-white'
                    }`}
            >
                <span className="text-sm font-medium">EN</span>
            </button>
        </div>
    )
}

export default LanguageSwitcher