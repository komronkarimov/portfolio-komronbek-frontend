// frontend/src/components/common/ProgressBar.tsx
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface ProgressBarProps {
    value: number
    max?: number
    label?: string
    showPercentage?: boolean
    color?: 'primary' | 'success' | 'warning' | 'danger'
    animated?: boolean
}

const ProgressBar = ({
    value,
    max = 100,
    label,
    showPercentage = true,
    color = 'primary',
    animated = true
}: ProgressBarProps) => {
    const [progress, setProgress] = useState(0)
    const { ref, isVisible } = useScrollAnimation()
    const percentage = Math.round((value / max) * 100)

    useEffect(() => {
        if (isVisible && animated) {
            const timer = setTimeout(() => {
                setProgress(percentage)
            }, 200)
            return () => clearTimeout(timer)
        } else if (!animated) {
            setProgress(percentage)
        }
    }, [isVisible, percentage, animated])

    const colors = {
        primary: 'bg-gradient-primary',
        success: 'bg-green-500',
        warning: 'bg-yellow-500',
        danger: 'bg-red-500',
    }

    return (
        <div ref={ref as React.RefObject<HTMLDivElement>} className="w-full">
            {(label || showPercentage) && (
                <div className="flex justify-between items-center mb-2">
                    {label && <span className="text-sm font-medium">{label}</span>}
                    {showPercentage && (
                        <span className="text-sm text-light-secondary">
                            {animated ? progress : percentage}%
                        </span>
                    )}
                </div>
            )}
            <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                    className={`h-full ${colors[color]} rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: `${animated ? progress : percentage}%` }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                />
            </div>
        </div>
    )
}

export default ProgressBar