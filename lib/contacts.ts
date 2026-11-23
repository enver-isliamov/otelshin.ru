/**
 * Centralized contact information for OtelShin
 */

// Основной номер для телефонных звонков (указан в шапке сайта)
export const CALL_PHONE = "+7 (979) 066-20-89"
export const CALL_PHONE_RAW = "+79790662089"

// Номер для мессенджеров WhatsApp и Telegram (+7 978 070-36-65)
export const MESSENGER_PHONE = "+7 (978) 070-36-65"
export const MESSENGER_PHONE_RAW = "79780703665"
export const TELEGRAM_USERNAME = "EnrikeTomas"

// Мессенджер MAX (привязан к рабочему номеру в шапке +7 979 066-20-89)
export const MAX_PHONE = "+7 (979) 066-20-89"
// Персональная ссылка на профиль в MAX (при наличии прямой ссылки вида https://max.ru/u/...)
export const MAX_URL = process.env.NEXT_PUBLIC_MAX_URL || "https://max.ru"

const DEFAULT_MESSAGE = "Здравствуйте! Хочу узнать про сезонное хранение шин в Симферополе."

/**
 * Генерирует прямую ссылку в WhatsApp с предзаполненным сообщением
 */
export function getWhatsAppUrl(message: string = DEFAULT_MESSAGE): string {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${MESSENGER_PHONE_RAW}?text=${encoded}`
}

/**
 * Генерирует прямую ссылку в Telegram с предзаполненным сообщением
 */
export function getTelegramUrl(message: string = DEFAULT_MESSAGE): string {
  const encoded = encodeURIComponent(message)
  return `https://t.me/${TELEGRAM_USERNAME}?text=${encoded}`
}

/**
 * Ссылка на мессенджер MAX
 */
export function getMaxUrl(): string {
  return MAX_URL
}
