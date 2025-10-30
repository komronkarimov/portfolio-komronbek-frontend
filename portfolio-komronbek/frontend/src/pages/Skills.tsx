import { Helmet } from 'react-helmet-async'
import { useLanguage } from '@/contexts/LanguageContext'
import SkillsPageHero from '@/components/common/SkillsPageHero'
import TechnicalSkills from '@/components/sections/skills/TechnicalSkills'
import SoftSkills from '@/components/sections/skills/SoftSkills'
import LanguageSkills from '@/components/sections/skills/LanguageSkills'
import ToolsAndSoftware from '@/components/sections/skills/ToolsAndSoftware'

const Skills = () => {
    const { language } = useLanguage()

    const metaData = {
        ru: {
            title: 'Навыки',
            description: 'Технические навыки, soft skills, языковые навыки и инструменты full-stack разработчика',
            keywords: 'навыки программирования, технический стек, React, TypeScript, Node.js, soft skills'
        },
        en: {
            title: 'Skills',
            description: 'Technical skills, soft skills, language skills and tools of a full-stack developer',
            keywords: 'programming skills, tech stack, React, TypeScript, Node.js, soft skills'
        }
    }

    const meta = metaData[language]

    return (
        <>
            <Helmet>
                <title>{meta.title} | Portfolio</title>
                <meta name="description" content={meta.description} />
                <meta name="keywords" content={meta.keywords} />
                <meta property="og:title" content={`${meta.title} | Portfolio`} />
                <meta property="og:description" content={meta.description} />
            </Helmet>

            {/* Hero Section */}
            <SkillsPageHero language={language} />

            {/* Technical Skills */}
            <TechnicalSkills />

            {/* Soft Skills */}
            <SoftSkills />

            {/* Language Skills */}
            <LanguageSkills />

            {/* Tools & Software */}
            <ToolsAndSoftware />
        </>
    )
}

export default Skills