"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import TariffModal from "@/components/tariff-modal"

export default function PricingSection() {
  const [selectedTariff, setSelectedTariff] = useState<{
    name: string
    price: string
    description: string
  } | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const plans = [
    {
      name: "R13-R15",
      price: "500",
      period: "за месяц",
      description: "Хранение с дисками: +100₽",
      features: [
        "Личный кабинет",
        "Вывоз на склад за наш счет",
        "Автоматические напоминания",
        "Запись на шиномонтаж к партнерам",
        "Контроль условий хранения",
      ],
      popular: false,
    },
    {
      name: "R16-R19",
      price: "600",
      period: "за месяц",
      description: "Хранение с дисками: +100₽",
      features: [
        "Личный кабинет",
        "Вывоз на склад за наш счет",
        "Автоматические напоминания",
        "Запись на шиномонтаж к партнерам",
        "Контроль условий хранения",
      ],
      popular: true,
    },
    {
      name: "R20+",
      price: "700",
      period: "за месяц",
      description: "Хранение с дисками: +100₽",
      features: [
        "Личный кабинет",
        "Вывоз на склад за наш счет",
        "Автоматические напоминания",
        "Запись на шиномонтаж к партнерам",
        "Контроль условий хранения",
        "Внедорожник: +100₽ к тарифу",
      ],
      popular: false,
    },
  ]

  const handleTariffSelect = (plan: (typeof plans)[0]) => {
    setSelectedTariff({
      name: plan.name,
      price: plan.price,
      description: plan.description,
    })
    setIsModalOpen(true)
  }

  return (
    <>
      <section className="py-12 md:py-16 bg-gray-50" data-section="pricing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Тарифы хранения</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Выберите подходящий тариф в зависимости от размера ваших шин
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 relative ${
                  plan.popular ? "ring-2 ring-blue-500 md:scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium relative overflow-hidden">
                      <span className="relative z-10">Популярный</span>
                      <div className="absolute inset-0 -top-1 -left-1 w-4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-shimmer"></div>
                    </span>
                  </div>
                )}

                <div className="text-center mb-4 md:mb-6 pt-2">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                    {plan.price} <span className="text-base font-normal text-gray-600">₽</span>
                  </div>
                  <p className="text-sm text-gray-600">{plan.period}</p>
                  <p className="text-xs text-blue-600 mt-1 font-medium">{plan.description}</p>
                </div>

                <ul className="space-y-2 mb-4 md:mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs md:text-sm text-gray-600">
                      <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden group ${
                    plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-900 hover:bg-gray-800"
                  }`}
                  onClick={() => handleTariffSelect(plan)}
                >
                  <span className="relative z-10">Выбрать тариф</span>
                  <div className="absolute inset-0 -top-1 -left-1 w-4 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:animate-shimmer"></div>
                </Button>
              </div>
            ))}
          </div>

          {/* Additional Services Info */}
          <div className="mt-8 md:mt-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">Дополнительные услуги</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Приём/выдача */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    Приём/выдача шин
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex justify-between">
                      <span>В рабочее время со склада</span>
                      <span className="font-medium text-green-600">БЕСПЛАТНО</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Доставка по городу</span>
                      <span className="font-medium">500₽</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Вывоз шин от дома/офиса</span>
                      <span className="font-medium text-green-600">БЕСПЛАТНО</span>
                    </li>
                  </ul>
                </div>

                {/* Дополнительно */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                    Дополнительно
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex justify-between">
                      <span>Мойка колёс</span>
                      <span className="font-medium">200₽/комплект</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Упаковка в пакеты</span>
                      <span className="font-medium">350₽/комплект</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Запись на шиномонтаж к партнерам</span>
                      <span className="font-medium text-green-600">БЕСПЛАТНО</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes shimmer {
            0% { transform: translateX(-100%) -skew-x-12; }
            100% { transform: translateX(300%) -skew-x-12; }
          }
          .animate-shimmer {
            animation: shimmer 2s infinite;
          }
        `}</style>
      </section>

      <TariffModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} tariff={selectedTariff} />
    </>
  )
}
