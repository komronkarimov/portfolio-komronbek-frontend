import { motion } from 'framer-motion'

interface LoaderProps {
    size?: 'sm' | 'md' | 'lg'
    fullScreen?: boolean
    text?: string
}

const Loader = ({ size = 'md', fullScreen = false, text }: LoaderProps) => {
    const sizes = {
        sm: 'w-8 h-8',
        md: 'w-12 h-12',
        lg: 'w-16 h-16',
    }

    const loader = (
        <div className="flex flex-col items-center justify-center gap-4">
            <motion.div
                className={`${sizes[size]} relative`}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            >
                <div className="absolute inset-0 rounded-full border-4 border-white/20"></div>
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary-blue animate-spin"></div>
            </motion.div>
            {text && (
                <motion.p
                    className="text-light-secondary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    {text}
                </motion.p>
            )}
        </div>
    )

    if (fullScreen) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark/95 backdrop-blur-sm">
                {loader}
            </div>
        )
    }

    return loader
}

export default Loader