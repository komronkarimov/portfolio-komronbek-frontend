import { useEffect, useRef, useState } from 'react'

interface ScrollAnimationOptions {
    threshold?: number
    rootMargin?: string
    triggerOnce?: boolean
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
    const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options

    const ref = useRef<HTMLElement>(null)
    const [isVisible, setIsVisible] = useState(false)
    const [hasAnimated, setHasAnimated] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        if (hasAnimated && triggerOnce) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    if (triggerOnce) {
                        setHasAnimated(true)
                        observer.unobserve(element)
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false)
                }
            },
            { threshold, rootMargin }
        )

        observer.observe(element)

        return () => {
            if (element) {
                observer.unobserve(element)
            }
        }
    }, [threshold, rootMargin, triggerOnce, hasAnimated])

    return { ref, isVisible }
}