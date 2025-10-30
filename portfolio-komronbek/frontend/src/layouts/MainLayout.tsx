import { Outlet } from 'react-router-dom'
import { useScrollToTop } from '@/hooks/useScrollToTop'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BackToTop from '@/components/common/BackToTop'

const MainLayout = () => {
    useScrollToTop()

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-20">
                <Outlet />
            </main>
            <Footer />
            <BackToTop />
        </div>
    )
}

export default MainLayout