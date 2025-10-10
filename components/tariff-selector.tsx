"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import TariffModal from "@/components/tariff-modal"

export default function TariffSelector() {
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
      description: "Хранение с дисками: +100₽",
      popular: false,
    },
    {
      name: "R16-R19", 
      price: "600",
      description: "Хранение с дисками: +100₽",
      popular: true,
    },
    {
      name: "R20+",
      price: "700", 
      description: "Хранение с дисками: +100₽",
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
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 lg:p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Выберите тариф хранения</h2>
          <p className="text-gray-600">Профессиональное хранение шин в Симферополе</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 relative ${
                plan.popular ? "ring-2 ring-blue-500" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Популярный
                  </span>
                </div>
              )}

              <div className="text-center mb-4 pt-2">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{plan.name}</h3>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {plan.price} <span className="text-sm font-normal text-gray-600">₽/мес</span>
                </div>
                <p className="text-xs text-blue-600">{plan.description}</p>
              </div>

              <Button
                className="w-full text-sm"
                variant={plan.popular ? "default" : "outline"}
                onClick={() => handleTariffSelect(plan)}
              >
                Выбрать
              </Button>
            </div>
          ))}
        </div>
      </div>

      <TariffModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} tariff={selectedTariff} />
    </>
  )
}