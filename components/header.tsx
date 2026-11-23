"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Circle } from "lucide-react"
import { CALL_PHONE, CALL_PHONE_RAW, getWhatsAppUrl, getTelegramUrl } from "@/lib/contacts"
import { reachGoal, GOAL_PHONE_CLICK, GOAL_WHATSAPP_CLICK, GOAL_TELEGRAM_CLICK } from "@/lib/analytics"
import { WhatsAppIcon, TelegramIcon } from "@/components/icons"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const headerMessage = "Здравствуйте! Хочу узнать про сезонное хранение шин в Симферополе."

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-md transform rotate-12 relative overflow-hidden">
                <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center transform -rotate-12">
                  <Circle className="w-4 h-4 text-blue-600" />
                </div>
                <div className="absolute inset-0 -top-1 -left-1 w-3 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform rotate-45 animate-shimmer"></div>
              </div>
            </div>
            <span className="text-xl font-bold">
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

          {/* Phone, Messengers and CTA - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={`tel:${CALL_PHONE_RAW}`}
              onClick={() => reachGoal(GOAL_PHONE_CLICK, { location: "header_desktop" })}
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors font-medium text-sm"
              title="Позвонить в OtelShin"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>{CALL_PHONE}</span>
            </a>

            {/* WhatsApp */}
            <a
              href={getWhatsAppUrl(headerMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => reachGoal(GOAL_WHATSAPP_CLICK, { location: "header_desktop" })}
              className="w-8 h-8 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm"
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
              className="w-8 h-8 rounded-full bg-sky-500 hover:bg-sky-600 text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm"
              title="Написать в Telegram (@EnrikeTomas / +7 978 070-36-65)"
            >
              <TelegramIcon className="w-4 h-4" />
            </a>

            <Link
              href="/#pricing"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 inline-flex items-center shadow-sm text-sm"
            >
              Забронировать
            </Link>
          </div>

          {/* Mobile Actions: Phone + Messengers + Booking Button */}
          <div className="md:hidden flex items-center space-x-2">
            <a
              href={`tel:${CALL_PHONE_RAW}`}
              onClick={() => reachGoal(GOAL_PHONE_CLICK, { location: "header_mobile" })}
              className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center transition-transform active:scale-95"
              title="Позвонить"
            >
              <Phone className="w-4 h-4" />
            </a>

            <a
              href={getWhatsAppUrl(headerMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => reachGoal(GOAL_WHATSAPP_CLICK, { location: "header_mobile" })}
              className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center transition-transform active:scale-95 shadow-sm"
              title="WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>

            <a
              href={getTelegramUrl(headerMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => reachGoal(GOAL_TELEGRAM_CLICK, { location: "header_mobile" })}
              className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center transition-transform active:scale-95 shadow-sm"
              title="Telegram"
            >
              <TelegramIcon className="w-4 h-4" />
            </a>

            <Link
              href="/#pricing"
              className="bg-blue-600 hover:bg-blue-700 text-white px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-300"
            >
              Забронировать
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
