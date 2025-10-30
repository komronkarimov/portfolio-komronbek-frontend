import { useState, useEffect } from 'react'

export const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const media = window.matchMedia(query)

        if (media.matches !== matches) {
            setMatches(media.matches)
        }

        const listener = (event: MediaQueryListEvent) => {
            setMatches(event.matches)
        }

        if (media.addEventListener) {
            media.addEventListener('change', listener)
        } else {
            media.addListener(listener)
        }

        return () => {
            if (media.removeEventListener) {
                media.removeEventListener('change', listener)
            } else {
                media.removeListener(listener)
            }
        }
    }, [matches, query])

    return matches
}

// Preset breakpoints
export const useBreakpoint = () => {
    const isMobile = useMediaQuery('(max-width: 639px)')
    const isTablet = useMediaQuery('(min-width: 640px) and (max-width: 1023px)')
    const isDesktop = useMediaQuery('(min-width: 1024px)')
    const isLargeDesktop = useMediaQuery('(min-width: 1536px)')

    return {
        isMobile,
        isTablet,
        isDesktop,
        isLargeDesktop,
    }
}