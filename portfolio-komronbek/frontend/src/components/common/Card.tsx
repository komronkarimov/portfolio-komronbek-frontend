import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
    children: ReactNode
    className?: string
    hover?: boolean
    glass?: boolean
    gradient?: boolean
    onClick?: () => void
}

const Card = ({
    children,
    className = '',
    hover = true,
    glass = false,
    gradient = false,
    onClick
}: CardProps) => {
    const baseStyles = 'rounded-2xl p-6 transition-all duration-300'

    const variants = {
        default: 'bg-white/5 backdrop-blur-lg border border-white/10',
        glass: 'bg-white/10 backdrop-blur-md border border-white/20 shadow-xl',
        gradient: 'bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20',
    }

    const hoverStyles = hover
        ? 'hover:shadow-xl hover:shadow-primary-blue/20 hover:-translate-y-1'
        : ''

    const selectedVariant = gradient ? 'gradient' : glass ? 'glass' : 'default'

    return (
        <motion.div
            className={`${baseStyles} ${variants[selectedVariant]} ${hoverStyles} ${className}`}
            onClick={onClick}
            whileHover={hover ? { scale: 1.02 } : undefined}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            {children}
        </motion.div>
    )
}

export default Card