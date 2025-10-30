import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Portfolio from './pages/Portfolio'
import Education from './pages/Education'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import AdminLogin from './pages/Admin/Login'
import AdminDashboard from './pages/Admin/Dashboard'
import SEO from '@/components/common/SEO'


function App() {
    return (
        <>
            <SEO
                title="Главная"
                description="Портфолио Комронбека Каримова: проекты, навыки и образование."
                image="/images/og-home.png"
                locale="ru_RU"
                alternateLocales={['en_US']}
            />

            <LanguageProvider>
                <Router>
                    <Routes>
                        {/* Основные страницы */}
                        <Route path="/" element={<MainLayout />}>
                            <Route index element={<Home />} />
                            <Route path="about" element={<About />} />
                            <Route path="skills" element={<Skills />} />
                            <Route path="portfolio" element={<Portfolio />} />
                            <Route path="education" element={<Education />} />
                            <Route path="blog" element={<Blog />} />
                            <Route path="blog/:slug" element={<BlogPost />} />
                            <Route path="contact" element={<Contact />} />
                        </Route>

                        {/* Админ панель */}
                        <Route path="/admin/login" element={<AdminLogin />} />
                        <Route path="/admin/*" element={<AdminDashboard />} />
                    </Routes>
                </Router>
            </LanguageProvider>
        </>
    )
}

export default App