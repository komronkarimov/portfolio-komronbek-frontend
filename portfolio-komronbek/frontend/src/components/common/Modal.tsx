import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
    title?: string
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

const Modal = ({ isOpen, onClose, children, title, size = 'md' }: ModalProps) => {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    // Close on Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener('keydown', handleEscape)
        }

        return () => {
            document.removeEventListener('keydown', handleEscape)
        }
    }, [isOpen, onClose])

    const sizeClasses = {
        sm: 'max-w-md',
        md: 'max-w-2xl',
        lg: 'max-w-4xl',
        xl: 'max-w-6xl',
        full: 'max-w-7xl',
    }

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
    }

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 50 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 30,
            },
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            y: 50,
            transition: {
                duration: 0.2,
            },
        },
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        className="fixed inset-0 bg-dark/90 backdrop-blur-sm z-[9998]"
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={onClose}
                        aria-hidden="true"
                    />

                    {/* Modal Container - FIXED positioning и центрирование */}
                    <div className="fixed inset-0 z-[9999] overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            {/* Modal Content */}
                            <motion.div
                                className={`relative w-full ${sizeClasses[size]} bg-dark-lighter rounded-2xl shadow-2xl border border-white/10 overflow-hidden`}
                                variants={modalVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                onClick={(e) => e.stopPropagation()}
                                role="dialog"
                                aria-modal="true"
                                aria-labelledby={title ? 'modal-title' : undefined}
                            >
                                {/* Close Button */}
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center
                                             bg-white/5 hover:bg-white/10 rounded-lg transition-colors
                                             text-light-secondary hover:text-white"
                                    aria-label="Close modal"
                                >
                                    <FaTimes size={20} />
                                </button>

                                {/* Modal Body */}
                                <div className="p-6 max-h-[90vh] overflow-y-auto custom-scrollbar">
                                    {title && (
                                        <h2 id="modal-title" className="text-2xl font-bold mb-6 pr-10">
                                            {title}
                                        </h2>
                                    )}
                                    {children}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </>
            )}
        </AnimatePresence>
    )
}

export default Modal