"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Circle } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30"></div>
      <div className="relative container mx-auto px-4 py-8 lg:py-12">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl transform rotate-12 relative overflow-hidden">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-xl flex items-center justify-center transform -rotate-12">
                  <Circle className="w-6 h-6 lg:w-8 lg:h-8 text-blue-600" />
                </div>
                {/* Shimmer effect */}
                <div className="absolute inset-0 -top-2 -left-2 w-6 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform rotate-45 animate-shimmer"></div>
              </div>
              <div className="absolute -top-1 -right-1 lg:-top-2 lg:-right-2 w-6 h-6 lg:w-8 lg:h-8 bg-green-400 rounded-full border-2 lg:border-3 border-white flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="mb-4">
            <h1 className="text-2xl lg:text-4xl font-bold mb-2">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">ХРАНЕНИЕ ШИН</span>
              <span className="text-gray-900"> в Симферополе</span>
            </h1>
            <h2 className="text-lg lg:text-2xl font-bold mb-2 text-gray-900 uppercase tracking-wide">
              ХРАНЕНИЕ КОЛЕС И ДИСКОВ 
            </h2>
            <div className="w-12 lg:w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Subtitle */}
          <h3 className="text-base lg:text-xl mb-2 text-gray-700 font-medium">OtelShin</h3>

          {/* Location */}
          <p className="text-sm lg:text-base mb-4 text-gray-600">
            Вывоз шин прямо от дома или офиса на наш счёт.
          </p>

          {/* Description */}
          <p className="text-sm lg:text-base mb-6 lg:mb-8 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Решаем проблему хранение ваших Шин, Колес, Дисков, Резины, Покрышек
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center mb-6 lg:mb-10">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 lg:px-8 py-2 lg:py-3 rounded-lg font-medium shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden group"
              onClick={() => {
                const pricingSection = document.querySelector('[data-section="pricing"]')
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              }}
            >
              <span className="relative z-10">Выбрать тариф</span>
              <ArrowRight className="ml-2 w-4 h-4 relative z-10" />
              <div className="absolute inset-0 -top-2 -left-2 w-6 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:animate-shimmer"></div>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-6 lg:px-8 py-2 lg:py-3 rounded-lg font-medium bg-white transition-all duration-300 hover:scale-105"
              onClick={() => {
                const aboutSection = document.querySelector('[data-section="about"]')
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              }}
            >
              Узнать больше
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-4 lg:gap-8 max-w-xs lg:max-w-md mx-auto">
            <div className="text-center">
              <div className="text-xl lg:text-3xl font-bold text-blue-600 mb-1">100+</div>
              <div className="text-xs lg:text-sm text-gray-500">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-xl lg:text-3xl font-bold text-green-600 mb-1">24/7</div>
              <div className="text-xs lg:text-sm text-gray-500">Контроль условий</div>
            </div>
            <div className="text-center">
              <div className="text-xl lg:text-3xl font-bold text-purple-600 mb-1">5+</div>
              <div className="text-xs lg:text-sm text-gray-500">Лет опыта</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(300%) rotate(45deg); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  )
}
