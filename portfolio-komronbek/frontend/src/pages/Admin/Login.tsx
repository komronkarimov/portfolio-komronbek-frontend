import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaLock, FaUser } from 'react-icons/fa'

const AdminLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // TODO: Implement login logic
        console.log('Login:', { email, password })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-dark">
            <motion.div
                className="w-full max-w-md p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gradient mb-2">Admin Login</h1>
                    <p className="text-light-secondary">Access admin dashboard</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-semibold mb-2">Email</label>
                        <div className="relative">
                            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-light-secondary" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg
                         text-white placeholder-light-secondary
                         focus:outline-none focus:border-primary-blue transition-all"
                                placeholder="admin@example.com"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-2">Password</label>
                        <div className="relative">
                            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-light-secondary" />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg
                         text-white placeholder-light-secondary
                         focus:outline-none focus:border-primary-blue transition-all"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn-primary w-full">
                        Sign In
                    </button>
                </form>
            </motion.div>
        </div>
    )
}

export default AdminLogin