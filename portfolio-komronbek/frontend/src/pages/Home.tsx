import { Helmet } from 'react-helmet-async'
import HeroSection from '@/components/sections/home/HeroSection'
import QuickFacts from '@/components/sections/home/QuickFacts'
import WhatIDo from '@/components/sections/home/WhatIDo'
import FeaturedProjects from '@/components/sections/home/FeaturedProjects'
import Testimonials from '@/components/sections/home/Testimonials'
import CTASection from '@/components/sections/home/CTASection'

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Комронбек Каримов | Веб-разработчик | Портфолио</title>
                <meta name="description" content="Профессиональное портфолио веб-разработчика Комронбека Каримова. Создание современных адаптивных сайтов на HTML, CSS, JavaScript, Python." />
            </Helmet>

            <HeroSection />
            <QuickFacts />
            <WhatIDo />
            <FeaturedProjects />
            <Testimonials />
            <CTASection />
        </>
    )
}

export default Home