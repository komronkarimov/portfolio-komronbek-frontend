// frontend/src/components/common/Button.tsx
import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
    children: ReactNode
    href?: string
    to?: string
    external?: boolean
    loading?: boolean
    fullWidth?: boolean
}

const Button = ({
    variant = 'primary',
    size = 'md',
    children,
    className = '',
    href,
    to,
    external = false,
    loading = false,
    fullWidth = false,
    disabled,
    ...props
}: ButtonProps) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
        primary: 'bg-gradient-primary text-white hover:shadow-2xl hover:shadow-primary-blue/50 hover:-translate-y-0.5',
        secondary: 'border-2 border-white text-white hover:bg-white hover:text-dark',
        outline: 'border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white',
        ghost: 'text-light-secondary hover:text-primary-blue hover:bg-white/5',
    }

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    }

    const buttonClass = `
    ${baseStyles} 
    ${variants[variant]} 
    ${sizes[size]} 
    ${fullWidth ? 'w-full' : ''} 
    ${className}
  `

    const content = (
        <>
            {loading && (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            )}
            {children}
        </>
    )

    if (to) {
        return (
            <Link to={to} className={buttonClass}>
                {content}
            </Link>
        )
    }

    if (href) {
        return (
            <a
                href={href}
                className={buttonClass}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
            >
                {content}
            </a>
        )
    }

    return (
        <button
            className={buttonClass}
            disabled={disabled || loading}
            {...props}
        >
            {content}
        </button>
    )
}

export default Button