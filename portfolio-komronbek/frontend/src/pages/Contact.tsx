import { Helmet } from 'react-helmet-async'
import { useLanguage } from '@/contexts/LanguageContext'
import ContactPageHero from '@/components/common/ContactPageHero'
import ContactInfo from '@/components/sections/contact/ContactInfo'
import ContactForm from '@/components/sections/contact/ContactForm'
import SocialLinks from '@/components/sections/contact/SocialLinks'
import FAQ from '@/components/sections/contact/FAQ'

const Contact = () => {
    const { language } = useLanguage()

    return (
        <>
            <Helmet>
                <title>
                    {language === 'ru'
                        ? 'Контакты | Комронбек Каримов'
                        : 'Contact | Komronbek Karimov'}
                </title>
                <meta
                    name="description"
                    content={language === 'ru'
                        ? 'Свяжитесь со мной для обсуждения проектов и сотрудничества'
                        : 'Contact me to discuss projects and collaboration'
                    }
                />
            </Helmet>

            {/* Hero Section */}
            <ContactPageHero language={language} />

            {/* Contact Information and Form */}
            <section className="section-padding bg-dark-secondary">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        <ContactInfo />
                        <ContactForm />
                    </div>
                    <SocialLinks />
                    <FAQ />
                </div>
            </section>
        </>
    )
}

export default Contact