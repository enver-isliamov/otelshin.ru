"use client"

/**
 * Единые кнопки мессенджеров — используются на всех страницах и в модальных окнах.
 * Два варианта: `full` (широкие, для CTA-секций) и `icon` (круглые, для шапки).
 */
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon, TelegramIcon, MaxIcon } from "@/components/icons"
import {
  CALL_PHONE,
  CALL_PHONE_RAW,
  MAX_URL,
  getWhatsAppUrl,
  getTelegramUrl,
} from "@/lib/contacts"
import {
  reachGoal,
  GOAL_PHONE_CLICK,
  GOAL_WHATSAPP_CLICK,
  GOAL_TELEGRAM_CLICK,
  GOAL_MAX_CLICK,
} from "@/lib/analytics"

// ─────────────────────────────────────────────────────────────────────────────
// Тип кнопок
// ─────────────────────────────────────────────────────────────────────────────
interface MessengerButtonsFullProps {
  /** Предзаполненный текст для мессенджеров */
  message: string
  /** Метка места для Метрики */
  location: string
  /** Показывать ли кнопку звонка */
  showPhone?: boolean
  /** Дополнительные классы контейнера */
  className?: string
}

/**
 * Полноширинные кнопки: Позвонить / MAX / WhatsApp / Telegram
 * Единый стиль h-12 с иконкой слева.
 */
export function MessengerButtonsFull({
  message,
  location,
  showPhone = true,
  className = "",
}: MessengerButtonsFullProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      {showPhone && (
        <Button
          asChild
          size="lg"
          className="h-12 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-200 hover:scale-[1.02] shadow-sm"
        >
          <a
            href={`tel:${CALL_PHONE_RAW}`}
            onClick={() => reachGoal(GOAL_PHONE_CLICK, { location })}
          >
            <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
            Позвонить: {CALL_PHONE}
          </a>
        </Button>
      )}

      {/* MAX */}
      <Button
        asChild
        size="lg"
        className="h-12 w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold transition-all duration-200 hover:scale-[1.02] shadow-sm"
      >
        <a
          href={MAX_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => reachGoal(GOAL_MAX_CLICK, { location })}
        >
          <MaxIcon className="w-5 h-5 mr-2 flex-shrink-0" />
          MAX
        </a>
      </Button>

      {/* WhatsApp */}
      <Button
        asChild
        size="lg"
        className="h-12 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-all duration-200 hover:scale-[1.02] shadow-sm"
      >
        <a
          href={getWhatsAppUrl(message)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => reachGoal(GOAL_WHATSAPP_CLICK, { location })}
        >
          <WhatsAppIcon className="w-5 h-5 mr-2 flex-shrink-0" />
          WhatsApp
        </a>
      </Button>

      {/* Telegram */}
      <Button
        asChild
        size="lg"
        className="h-12 w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold transition-all duration-200 hover:scale-[1.02] shadow-sm"
      >
        <a
          href={getTelegramUrl(message)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => reachGoal(GOAL_TELEGRAM_CLICK, { location })}
        >
          <TelegramIcon className="w-5 h-5 mr-2 flex-shrink-0" />
          Telegram
        </a>
      </Button>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Компактные 4 иконки для модальных окон
// ─────────────────────────────────────────────────────────────────────────────
interface MessengerButtonsCompactProps {
  message: string
  location: string
  className?: string
  onBeforeOpen?: () => void
}

/**
 * Компактные квадратные кнопки в ряд: MAX / WhatsApp / Telegram / Звонок
 * Единый стиль h-12 w-full в 4-колоночной сетке.
 */
export function MessengerButtonsCompact({
  message,
  location,
  className = "",
  onBeforeOpen,
}: MessengerButtonsCompactProps) {
  const open = (url: string) => {
    onBeforeOpen?.()
    window.open(url, "_blank")
  }

  return (
    <div className={`grid grid-cols-4 gap-2 ${className}`}>
      {/* MAX */}
      <button
        type="button"
        onClick={() => {
          reachGoal(GOAL_MAX_CLICK, { location })
          open(MAX_URL)
        }}
        title="MAX"
        className="h-12 rounded-xl bg-violet-600 hover:bg-violet-700 text-white flex flex-col items-center justify-center gap-0.5 transition-all duration-200 active:scale-95"
      >
        <MaxIcon className="w-5 h-5" />
        <span className="text-[10px] font-semibold leading-none">MAX</span>
      </button>

      {/* WhatsApp */}
      <button
        type="button"
        onClick={() => {
          reachGoal(GOAL_WHATSAPP_CLICK, { location })
          open(getWhatsAppUrl(message))
        }}
        title="WhatsApp"
        className="h-12 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white flex flex-col items-center justify-center gap-0.5 transition-all duration-200 active:scale-95"
      >
        <WhatsAppIcon className="w-5 h-5" />
        <span className="text-[10px] font-semibold leading-none">WA</span>
      </button>

      {/* Telegram */}
      <button
        type="button"
        onClick={() => {
          reachGoal(GOAL_TELEGRAM_CLICK, { location })
          open(getTelegramUrl(message))
        }}
        title="Telegram"
        className="h-12 rounded-xl bg-sky-500 hover:bg-sky-600 text-white flex flex-col items-center justify-center gap-0.5 transition-all duration-200 active:scale-95"
      >
        <TelegramIcon className="w-5 h-5" />
        <span className="text-[10px] font-semibold leading-none">TG</span>
      </button>

      {/* Звонок */}
      <a
        href={`tel:${CALL_PHONE_RAW}`}
        onClick={() => reachGoal(GOAL_PHONE_CLICK, { location })}
        title={`Позвонить: ${CALL_PHONE}`}
        className="h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex flex-col items-center justify-center gap-0.5 transition-all duration-200 active:scale-95"
      >
        <Phone className="w-5 h-5" />
        <span className="text-[10px] font-semibold leading-none">Звонок</span>
      </a>
    </div>
  )
}
