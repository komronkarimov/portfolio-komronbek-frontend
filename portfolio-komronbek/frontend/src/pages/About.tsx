import { Helmet } from 'react-helmet-async'
import { useLanguage } from '@/contexts/LanguageContext'
import PageHero from '@/components/common/AboutPageHero'
import MainBio from '@/components/sections/about/MainBio'
import PersonalQualities from '@/components/sections/about/PersonalQualities'
import Interests from '@/components/sections/about/Interests'
import CareerGoals from '@/components/sections/about/CareerGoals'

const About = () => {
    const { language } = useLanguage()

    return (
        <>
            <Helmet>
                <title>
                    {language === 'ru'
                        ? 'Обо мне | Комронбек Каримов'
                        : 'About Me | Komronbek Karimov'}
                </title>
                <meta
                    name="description"
                    content={language === 'ru'
                        ? 'Узнайте больше о Комронбеке Каримове - веб-разработчике из Москвы, студенте Московского Политеха'
                        : 'Learn more about Komronbek Karimov - web developer from Moscow, Moscow Polytech student'
                    }
                />
            </Helmet>

            <PageHero/>
            <MainBio />
            <PersonalQualities />
            <Interests />
            <CareerGoals />
        </>
    )
}

export default About