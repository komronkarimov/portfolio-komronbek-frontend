/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string
    readonly VITE_APP_NAME: string
    readonly VITE_APP_DESCRIPTION: string
    readonly VITE_TELEGRAM_BOT_TOKEN: string
    readonly VITE_TELEGRAM_CHAT_ID: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}