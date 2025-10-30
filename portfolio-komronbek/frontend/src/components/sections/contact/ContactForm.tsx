import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { useLanguage } from '@/contexts/LanguageContext'
import { contactService } from '@/services/contactService'
import { ContactFormData } from '@/types/common.types'
import Card from '@/components/common/Card'
import Button from '@/components/common/Button'
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle, FaTelegram } from 'react-icons/fa'

const ContactForm = () => {
    const { language } = useLanguage()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState<string>('')

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>()

    const onSubmit = async (data: ContactFormData) => {
        try {
            setIsSubmitting(true)
            setSubmitStatus('idle')
            setErrorMessage('')

            const response = await contactService.sendMessage(data)

            if (response.success) {
                setSubmitStatus('success')
                reset()

                // Reset success message after 5 seconds
                setTimeout(() => {
                    setSubmitStatus('idle')
                }, 5000)
            } else {
                setSubmitStatus('error')
                setErrorMessage(response.message || 'Unknown error')
            }
        } catch (error) {
            console.error('Error sending message:', error)
            setSubmitStatus('error')
            setErrorMessage(
                language === 'ru'
                    ? 'Произошла ошибка при отправке. Попробуйте связаться через Telegram.'
                    : 'An error occurred. Please try contacting via Telegram.'
            )
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <Card className="h-full">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">
                        {language === 'ru' ? 'Отправить сообщение' : 'Send Message'}
                    </h2>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold mb-2">
                            {language === 'ru' ? 'Ваше имя' : 'Your Name'} <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="name"
                            type="text"
                            {...register('name', {
                                required: language === 'ru' ? 'Имя обязательно' : 'Name is required',
                                minLength: {
                                    value: 2,
                                    message: language === 'ru' ? 'Минимум 2 символа' : 'Minimum 2 characters'
                                }
                            })}
                            className={`input-field ${errors.name ? 'input-error' : ''}`}
                            placeholder={language === 'ru' ? 'Иван Иванов' : 'John Doe'}
                            disabled={isSubmitting}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                <FaExclamationCircle size={12} />
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold mb-2">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="email"
                            type="email"
                            {...register('email', {
                                required: language === 'ru' ? 'Email обязателен' : 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: language === 'ru' ? 'Неверный формат email' : 'Invalid email format'
                                }
                            })}
                            className={`input-field ${errors.email ? 'input-error' : ''}`}
                            placeholder="your.email@example.com"
                            disabled={isSubmitting}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                <FaExclamationCircle size={12} />
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Subject */}
                    <div>
                        <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                            {language === 'ru' ? 'Тема' : 'Subject'}
                        </label>
                        <input
                            id="subject"
                            type="text"
                            {...register('subject')}
                            className="input-field"
                            placeholder={language === 'ru' ? 'Тема сообщения' : 'Message subject'}
                            disabled={isSubmitting}
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-semibold mb-2">
                            {language === 'ru' ? 'Сообщение' : 'Message'} <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="message"
                            rows={6}
                            {...register('message', {
                                required: language === 'ru' ? 'Сообщение обязательно' : 'Message is required',
                                minLength: {
                                    value: 20,
                                    message: language === 'ru' ? 'Минимум 20 символов' : 'Minimum 20 characters'
                                }
                            })}
                            className={`input-field resize-none ${errors.message ? 'input-error' : ''}`}
                            placeholder={language === 'ru'
                                ? 'Расскажите о вашем проекте или вопросе...'
                                : 'Tell me about your project or question...'
                            }
                            disabled={isSubmitting}
                        />
                        {errors.message && (
                            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                <FaExclamationCircle size={12} />
                                {errors.message.message}
                            </p>
                        )}
                    </div>

                    {/* Success/Error Messages */}
                    <AnimatePresence mode="wait">
                        {submitStatus === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3"
                            >
                                <FaCheckCircle className="text-green-500 flex-shrink-0" size={20} />
                                <p className="text-green-500 text-sm">
                                    {language === 'ru'
                                        ? '✅ Ваше сообщение успешно отправлено. Я свяжусь с вами в ближайшее время.'
                                        : '✅ Your message has been sent via Telegram. I will contact you soon.'
                                    }
                                </p>
                            </motion.div>
                        )}

                        {submitStatus === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3"
                            >
                                <FaExclamationCircle className="text-red-500 flex-shrink-0" size={20} />
                                <div className="text-red-500 text-sm">
                                    <p className="font-semibold mb-1">
                                        {language === 'ru'
                                            ? 'Произошла ошибка при отправке сообщения.'
                                            : 'An error occurred while sending the message.'
                                        }
                                    </p>
                                    {errorMessage && (
                                        <p className="text-xs opacity-80">{errorMessage}</p>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        variant="primary"
                        fullWidth
                        loading={isSubmitting}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                {language === 'ru' ? 'Отправка в Telegram...' : 'Sending to Telegram...'}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                    className="ml-2"
                                >
                                    <FaTelegram />
                                </motion.div>
                            </>
                        ) : (
                            <>
                                {language === 'ru' ? 'Отправить в Telegram' : 'Send to Telegram'}
                                <FaPaperPlane className="ml-2" />
                            </>
                        )}
                    </Button>
                </form>
            </Card>
        </motion.div>
    )
}

export default ContactForm