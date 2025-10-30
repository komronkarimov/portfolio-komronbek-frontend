import { ContactFormData } from '@/types/common.types'

const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`

export const telegramService = {
    async sendMessage(data: ContactFormData): Promise<{ success: boolean; message?: string }> {
        try {
            // Формируем сообщение
            const message = `
🔔 <b>Новое сообщение с сайта!</b>

👤 <b>Имя:</b> ${data.name}
📧 <b>Email:</b> ${data.email}
${data.subject ? `📋 <b>Тема:</b> ${data.subject}` : ''}

💬 <b>Сообщение:</b>
${data.message}

⏰ <b>Время:</b> ${new Date().toLocaleString('ru-RU')}
            `.trim()

            const response = await fetch(TELEGRAM_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text: message,
                    parse_mode: 'HTML',
                }),
            })

            const result = await response.json()

            if (result.ok) {
                return { success: true, message: 'Message sent successfully' }
            } else {
                console.error('Telegram API Error:', result)
                return { success: false, message: result.description || 'Failed to send message' }
            }
        } catch (error) {
            console.error('Error sending message to Telegram:', error)
            return { success: false, message: 'Network error' }
        }
    },

    // Проверка подключения к боту
    async checkBotConnection(): Promise<boolean> {
        try {
            const response = await fetch(
                `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getMe`
            )
            const result = await response.json()
            return result.ok
        } catch (error) {
            console.error('Bot connection error:', error)
            return false
        }
    },
}