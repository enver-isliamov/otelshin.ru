"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Circle } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Otel</span>
              <span className="text-gray-900">Shin</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Главная
            </Link>
            <Link href="/articles" className="text-gray-700 hover:text-blue-600 transition-colors">
              Статьи
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Услуги
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              О нас
            </Link>
            <Link href="/contacts" className="text-gray-700 hover:text-blue-600 transition-colors">
              Контакты
            </Link>
          </nav>

          {/* Phone and CTA - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+79780703665" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
              <Phone className="w-4 h-4" />
              <span>+7 (978) 070-36-65</span>
            </a>
            <Button
              className="bg-blue-600 hover:bg-blue-700 transition-all duration-300"
              onClick={() => {
                const pricingSection = document.querySelector('[data-section="pricing"]')
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              }}
            >
              Забронировать
            </Button>
          </div>

          {/* Mobile CTA Button */}
          <div className="md:hidden">
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 transition-all duration-300"
              onClick={() => {
                const pricingSection = document.querySelector('[data-section="pricing"]')
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              }}
            >
              Забронировать
            </Button>
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
