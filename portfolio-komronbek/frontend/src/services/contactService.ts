import { ContactFormData } from '@/types/common.types'
import { telegramService } from './telegramService'

export const contactService = {
    async sendMessage(data: ContactFormData): Promise<{ success: boolean; message?: string }> {
        try {
            // Отправка в Telegram
            const telegramResult = await telegramService.sendMessage(data)

            if (telegramResult.success) {
                // Опционально: можно также сохранить в базу данных или отправить email
                // await emailService.sendMessage(data)
                // await databaseService.saveMessage(data)

                return { success: true, message: 'Message sent successfully' }
            } else {
                return {
                    success: false,
                    message: telegramResult.message || 'Failed to send message'
                }
            }
        } catch (error) {
            console.error('Contact service error:', error)
            return { success: false, message: 'An error occurred while sending the message' }
        }
    },
}