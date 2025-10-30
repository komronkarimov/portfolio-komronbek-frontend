import { motion } from 'framer-motion'

const AdminDashboard = () => {
    return (
        <div className="min-h-screen bg-gradient-dark pt-24 pb-16">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                            <h3 className="text-xl font-bold mb-2">Projects</h3>
                            <p className="text-3xl font-bold text-gradient">6</p>
                        </div>
                        <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                            <h3 className="text-xl font-bold mb-2">Blog Posts</h3>
                            <p className="text-3xl font-bold text-gradient">4</p>
                        </div>
                        <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                            <h3 className="text-xl font-bold mb-2">Messages</h3>
                            <p className="text-3xl font-bold text-gradient">12</p>
                        </div>
                    </div>
                    <div className="mt-8 p-8 bg-white/5 rounded-2xl border border-white/10 text-center">
                        <p className="text-light-secondary">
                            Admin functionality will be implemented in future updates
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default AdminDashboard