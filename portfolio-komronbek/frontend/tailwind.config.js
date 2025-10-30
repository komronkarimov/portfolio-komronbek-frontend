/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    blue: '#00d4ff',
                    purple: '#a855f7',
                },
                dark: {
                    DEFAULT: '#0a0e27',
                    secondary: '#000000',
                },
                light: {
                    DEFAULT: '#f8f9fa',
                    secondary: '#b0b0b0',
                },
            },
            fontFamily: {
                sans: ['Inter', 'Segoe UI', 'sans-serif'],
                heading: ['Montserrat', 'Raleway', 'sans-serif'],
                mono: ['Fira Code', 'Courier New', 'monospace'],
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #00d4ff 0%, #a855f7 100%)',
                'gradient-dark': 'linear-gradient(180deg, #0a0e27 0%, #000000 100%)',
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-in-out',
                'slide-up': 'slideUp 0.8s ease-in-out',
                'slide-down': 'slideDown 0.8s ease-in-out',
                'slide-left': 'slideLeft 0.8s ease-in-out',
                'slide-right': 'slideRight 0.8s ease-in-out',
                'float': 'float 3s ease-in-out infinite',
                'typing': 'typing 3.5s steps(40, end)',
                'blink': 'blink 0.7s infinite',
                'scale-in': 'scaleIn 0.4s ease-in-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideDown: {
                    '0%': { opacity: '0', transform: 'translateY(-30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideLeft: {
                    '0%': { opacity: '0', transform: 'translateX(30px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                slideRight: {
                    '0%': { opacity: '0', transform: 'translateX(-30px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                typing: {
                    '0%': { width: '0' },
                    '100%': { width: '100%' },
                },
                blink: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.9)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}