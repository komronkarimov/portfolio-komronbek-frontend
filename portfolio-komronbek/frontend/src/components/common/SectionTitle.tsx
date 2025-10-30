import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionTitleProps {
    title: string
    subtitle?: string
    align?: 'left' | 'center' | 'right'
    gradient?: boolean
    children?: ReactNode
}

const SectionTitle = ({
    title,
    subtitle,
    align = 'center',
    gradient = false,
    children
}: SectionTitleProps) => {
    const alignClasses = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
    }

    return (
        <motion.div
            className={`mb-12 ${alignClasses[align]}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${gradient ? 'text-gradient' : ''
                }`}>
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg text-light-secondary max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
            {children}
        </motion.div>
    )
}

export default SectionTitle