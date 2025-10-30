import { Helmet } from 'react-helmet-async'
import { useLanguage } from '@/contexts/LanguageContext'
import EducationPageHero from '@/components/common/EducationPageHero'
import University from '@/components/sections/education/University'
import Certificates from '@/components/sections/education/Certificates'
import OnlineCourses from '@/components/sections/education/OnlineCourses'
import AcademicAchievements from '@/components/sections/education/AcademicAchievements'

const Education = () => {
    const { language } = useLanguage()

    return (
        <>
            <Helmet>
                <title>
                    {language === 'ru'
                        ? 'Образование | Комронбек Каримов'
                        : 'Education | Komronbek Karimov'}
                </title>
                <meta
                    name="description"
                    content={language === 'ru'
                        ? 'Образование, сертификаты и академические достижения Комронбека Каримова'
                        : 'Education, certificates and academic achievements of Komronbek Karimov'
                    }
                />
                <meta
                    name="keywords"
                    content="education, certificates, online courses, Moscow Polytech, web development"
                />
                <meta property="og:title" content={language === 'ru' ? 'Образование' : 'Education'} />
                <meta property="og:description" content={language === 'ru'
                    ? 'Образование, сертификаты и академические достижения'
                    : 'Education, certificates and academic achievements'
                } />
            </Helmet>

            {/* Hero Section */}
            <EducationPageHero
                language={language}
                certificatesCount={5}
                coursesCount={8}
                achievementsCount={5}
            />

            {/* Education Sections */}
            <University />
            <Certificates />
            <OnlineCourses />
            <AcademicAchievements />
        </>
    )
}

export default Education