"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Circle } from "lucide-react"
import { CALL_PHONE, CALL_PHONE_RAW, MAX_URL, getWhatsAppUrl, getTelegramUrl } from "@/lib/contacts"
import { reachGoal, GOAL_PHONE_CLICK, GOAL_WHATSAPP_CLICK, GOAL_TELEGRAM_CLICK, GOAL_MAX_CLICK } from "@/lib/analytics"
import { WhatsAppIcon, TelegramIcon, MaxIcon } from "@/components/icons"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const headerMessage = "Здравствуйте! Хочу узнать про сезонное хранение шин в Симферополе."

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 w-full max-w-full overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <div className="relative">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-md transform rotate-12 relative overflow-hidden">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-md flex items-center justify-center transform -rotate-12">
                  <Circle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
                </div>
                <div className="absolute inset-0 -top-1 -left-1 w-3 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform rotate-45 animate-shimmer"></div>
              </div>
            </div>
            <span className="text-lg sm:text-xl font-bold whitespace-nowrap">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">ОТЕЛЬ</span>
              <span className="text-gray-900">ШИН</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Главная
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Услуги
            </Link>
            <Link href="/articles" className="text-gray-700 hover:text-blue-600 transition-colors">
              Блог
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              О нас
            </Link>
            <Link href="/dogovor" className="text-gray-700 hover:text-blue-600 transition-colors">
              Договор
            </Link>
            <Link href="/contacts" className="text-gray-700 hover:text-blue-600 transition-colors">
              Контакты
            </Link>
          </nav>

          {/* Desktop Contacts & CTA */}
          <div className="hidden md:flex items-center space-x-2.5 lg:space-x-3 flex-shrink-0">
            <a
              href={`tel:${CALL_PHONE_RAW}`}
              onClick={() => reachGoal(GOAL_PHONE_CLICK, { location: "header_desktop" })}
              className="flex items-center space-x-1.5 text-gray-700 hover:text-blue-600 transition-colors font-medium text-xs lg:text-sm whitespace-nowrap"
              title="Позвонить в OtelShin"
            >
              <Phone className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span>{CALL_PHONE}</span>
            </a>

            {/* MAX Messenger */}
            <a
              href={MAX_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => reachGoal(GOAL_MAX_CLICK, { location: "header_desktop" })}
              className="w-8 h-8 rounded-full bg-violet-600 hover:bg-violet-700 text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm flex-shrink-0"
              title="Мессенджер MAX (+7 979 066-20-89)"
            >
              <MaxIcon className="w-3.5 h-3.5" />
            </a>

            {/* WhatsApp */}
            <a
              href={getWhatsAppUrl(headerMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => reachGoal(GOAL_WHATSAPP_CLICK, { location: "header_desktop" })}
              className="w-8 h-8 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm flex-shrink-0"
              title="Написать в WhatsApp (+7 978 070-36-65)"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>

            {/* Telegram */}
            <a
              href={getTelegramUrl(headerMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => reachGoal(GOAL_TELEGRAM_CLICK, { location: "header_desktop" })}
              className="w-8 h-8 rounded-full bg-sky-500 hover:bg-sky-600 text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm flex-shrink-0"
              title="Написать в Telegram (@EnrikeTomas / +7 978 070-36-65)"
            >
              <TelegramIcon className="w-4 h-4" />
            </a>

            <Link
              href="/#pricing"
              className="bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-2 rounded-lg font-medium transition-all duration-300 inline-flex items-center shadow-sm text-xs lg:text-sm whitespace-nowrap"
            >
              Забронировать
            </Link>
          </div>

          {/* Mobile Actions: Phone + Messengers (Strictly no horizontal overflow) */}
          <div className="md:hidden flex items-center space-x-1 sm:space-x-1.5 flex-shrink-0">
            <a
              href={`tel:${CALL_PHONE_RAW}`}
              onClick={() => reachGoal(GOAL_PHONE_CLICK, { location: "header_mobile" })}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 transition-transform active:scale-95"
              title="Позвонить"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>

            {/* MAX Mobile */}
            <a
              href={MAX_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => reachGoal(GOAL_MAX_CLICK, { location: "header_mobile" })}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-violet-600 text-white flex items-center justify-center flex-shrink-0 transition-transform active:scale-95 shadow-sm"
              title="MAX"
            >
              <MaxIcon className="w-3 h-3" />
            </a>

            {/* WhatsApp Mobile */}
            <a
              href={getWhatsAppUrl(headerMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => reachGoal(GOAL_WHATSAPP_CLICK, { location: "header_mobile" })}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 transition-transform active:scale-95 shadow-sm"
              title="WhatsApp"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
            </a>

            {/* Telegram Mobile */}
            <a
              href={getTelegramUrl(headerMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => reachGoal(GOAL_TELEGRAM_CLICK, { location: "header_mobile" })}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-sky-500 text-white flex items-center justify-center flex-shrink-0 transition-transform active:scale-95 shadow-sm"
              title="Telegram"
            >
              <TelegramIcon className="w-3.5 h-3.5" />
            </a>

            <Link
              href="/#pricing"
              className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded-md text-[11px] font-semibold whitespace-nowrap flex-shrink-0 transition-colors"
            >
              Тарифы
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(200%) rotate(45deg); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </header>
  )
}
