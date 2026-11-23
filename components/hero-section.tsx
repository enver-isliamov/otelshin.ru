"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, MapPin, ShieldCheck, Heart } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50/40 text-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-transparent to-purple-50/20"></div>
      <div className="relative container mx-auto px-4 py-8 lg:py-16">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 text-blue-700 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-5 shadow-sm">
            <MapPin className="w-4 h-4 text-blue-600" />
            <span>Симферополь • Экспресс-выезд в Киевском районе от 30 минут</span>
          </div>

          {/* Main Heading */}
          <div className="mb-4">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold mb-3 tracking-tight leading-tight">
              Хранение шин в Симферополе <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                с бесплатным забором от подъезда
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 font-medium max-w-3xl mx-auto leading-relaxed">
              Вам не нужно таскать тяжелые грязные колеса, пачкать салон авто и захламлять балкон.
              Специалист сам приедет, погрузит и увезет шины в сухой теплый отель!
            </p>
          </div>

          {/* USP Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-600 mb-8 font-medium">
            <div className="flex items-center">
              <Sparkles className="w-4 h-4 text-blue-600 mr-1.5 flex-shrink-0" />
              <span>Чистый балкон и багажник</span>
            </div>
            <div className="flex items-center">
              <ShieldCheck className="w-4 h-4 text-emerald-600 mr-1.5 flex-shrink-0" />
              <span>Официальный договор</span>
            </div>
            <div className="flex items-center">
              <Heart className="w-4 h-4 text-rose-500 mr-1.5 flex-shrink-0" />
              <span>Забота о девушках и жителях многоэтажек</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center mb-8 lg:mb-12">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 lg:px-8 py-3 rounded-xl font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden group"
              onClick={() => {
                const pricingSection = document.querySelector('[data-section="pricing"]')
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              }}
            >
              <span className="relative z-10">Выбрать тариф от 500 ₽/мес</span>
              <ArrowRight className="ml-2 w-4 h-4 relative z-10" />
              <div className="absolute inset-0 -top-2 -left-2 w-6 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:animate-shimmer"></div>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-6 lg:px-8 py-3 rounded-xl font-medium bg-white transition-all duration-300 hover:scale-105"
              onClick={() => {
                const aboutSection = document.querySelector('[data-section="why-choose-us"]')
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth", block: "start" })
                } else {
                  window.location.href = "/services"
                }
              }}
            >
              Как это работает?
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-sm sm:max-w-md mx-auto bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-gray-100 shadow-sm">
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-blue-600 mb-0.5">0 ₽</div>
              <div className="text-[11px] sm:text-xs text-gray-500 font-medium">Бесплатный выезд</div>
            </div>
            <div className="text-center border-x border-gray-100">
              <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-emerald-600 mb-0.5">30 мин</div>
              <div className="text-[11px] sm:text-xs text-gray-500 font-medium">Киевский район</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-purple-600 mb-0.5">100%</div>
              <div className="text-[11px] sm:text-xs text-gray-500 font-medium">Без подъема тяжестей</div>
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
