import { useState, useEffect } from 'react'

interface UseTypingEffectProps {
    words: string[]
    typingSpeed?: number
    deletingSpeed?: number
    delayBetweenWords?: number
}

export const useTypingEffect = ({
    words,
    typingSpeed = 100,
    deletingSpeed = 50,
    delayBetweenWords = 2000,
}: UseTypingEffectProps) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const [currentText, setCurrentText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const word = words[currentWordIndex]

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Typing
                if (currentText.length < word.length) {
                    setCurrentText(word.substring(0, currentText.length + 1))
                } else {
                    // Word completed, wait then start deleting
                    setTimeout(() => setIsDeleting(true), delayBetweenWords)
                }
            } else {
                // Deleting
                if (currentText.length > 0) {
                    setCurrentText(word.substring(0, currentText.length - 1))
                } else {
                    // Word deleted, move to next
                    setIsDeleting(false)
                    setCurrentWordIndex((prev) => (prev + 1) % words.length)
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed)

        return () => clearTimeout(timeout)
    }, [currentText, currentWordIndex, isDeleting, words, typingSpeed, deletingSpeed, delayBetweenWords])

    return currentText
}