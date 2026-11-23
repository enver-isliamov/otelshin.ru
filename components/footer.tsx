"use client"

import Link from "next/link"
import { Phone, MapPin, Clock, Circle } from "lucide-react"
import { CALL_PHONE, CALL_PHONE_RAW, MESSENGER_PHONE, MAX_URL, getWhatsAppUrl, getTelegramUrl } from "@/lib/contacts"
import { reachGoal, GOAL_PHONE_CLICK, GOAL_WHATSAPP_CLICK, GOAL_TELEGRAM_CLICK, GOAL_MAX_CLICK } from "@/lib/analytics"
import { WhatsAppIcon, TelegramIcon, MaxIcon } from "@/components/icons"

export default function Footer() {
  const footerMessage = "Здравствуйте! Хочу узнать про сезонное хранение шин в Симферополе."

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-md transform rotate-12 relative overflow-hidden">
                  <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center transform -rotate-12">
                    <Circle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="absolute inset-0 -top-1 -left-1 w-3 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform rotate-45 animate-shimmer"></div>
                </div>
              </div>
              <span className="text-xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Otel</span>
                <span className="text-white">Shin</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Профессиональное хранение шин и дисков в Симферополе с бесплатным вывозом от дома или офиса.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="/dogovor" className="text-gray-400 hover:text-white transition-colors">
                  Договор
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="text-gray-400 hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm">
              {/* Phone */}
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href={`tel:${CALL_PHONE_RAW}`}
                  onClick={() => reachGoal(GOAL_PHONE_CLICK, { location: "footer" })}
                  className="text-gray-400 hover:text-white transition-colors"
                  title="Позвонить нам"
                >
                  {CALL_PHONE}
                </a>
              </li>

              {/* MAX */}
              <li className="flex items-center space-x-2">
                <MaxIcon className="w-4 h-4 text-violet-400 flex-shrink-0" />
                <a
                  href={MAX_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => reachGoal(GOAL_MAX_CLICK, { location: "footer" })}
                  className="text-gray-400 hover:text-violet-400 transition-colors"
                  title="MAX"
                >
                  MAX: {CALL_PHONE}
                </a>
              </li>

              {/* WhatsApp */}
              <li className="flex items-center space-x-2">
                <WhatsAppIcon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={getWhatsAppUrl(footerMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => reachGoal(GOAL_WHATSAPP_CLICK, { location: "footer" })}
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                  title="WhatsApp"
                >
                  WhatsApp: {MESSENGER_PHONE}
                </a>
              </li>

              {/* Telegram */}
              <li className="flex items-center space-x-2">
                <TelegramIcon className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a
                  href={getTelegramUrl(footerMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => reachGoal(GOAL_TELEGRAM_CLICK, { location: "footer" })}
                  className="text-gray-400 hover:text-sky-400 transition-colors"
                  title="Telegram"
                >
                  Telegram: @EnrikeTomas
                </a>
              </li>

              {/* Location */}
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>г. Симферополь</p>
                  <p className="text-xs text-gray-500">Бесплатный выезд по всему городу</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Режим работы</h3>
            <div className="flex items-start space-x-2 text-sm">
              <Clock className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
              <div className="text-gray-400">
                <p>Ежедневно: 9:00 - 21:00</p>
                <p className="text-xs text-gray-500 mt-1">Всегда на связи в мессенджерах</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} OtelShin. Хранение шин в Симферополе. Все права защищены.</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(200%) rotate(45deg); }
        }
        .animate-shimmer {
          animation: shimmer 4s infinite;
        }
      `}</style>
    </footer>
  )
}
