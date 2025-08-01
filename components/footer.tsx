"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Circle } from "lucide-react"

export default function Footer() {
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
            <p className="text-gray-400 mb-4">
              Профессиональное хранение шин в Симферополе с современной системой управления
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
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
                <Link href="/contacts" className="text-gray-400 hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:+79780703665" className="text-gray-400 hover:text-white">
                  +7 (978) 070-36-65
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="https://t.me/EntikeTomas" className="text-gray-400 hover:text-white">
                  @EntikeTomas
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-blue-400 mt-1" />
                <div className="text-gray-400">
                  <p>г. Симферополь</p>
                  <p className="text-xs">Выезжаем по всему городу</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Режим работы</h3>
            <div className="flex items-start space-x-2">
              <Clock className="w-4 h-4 text-blue-400 mt-1" />
              <div className="text-gray-400">
                <p>Ежедневно: 9:00 - 22:00</p>
                <p className="text-xs">Всегда на связи</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 OtelShin. Все права защищены.</p>
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
