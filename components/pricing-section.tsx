"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Sparkles, Shield, Truck, Droplets } from "lucide-react"
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
      name: "R13–R16 (Стандарт)",
      price: "500",
      period: "за месяц",
      description: "Легковые и компактные автомобили",
      features: [
        "Бесплатный забор от подъезда",
        "Киевский район — подача от 30 мин",
        "Официальный договор хранения",
        "Бесплатный замер остатка протектора",
        "Сухой склад с климат-контролем",
        "Хранение с дисками: +100 ₽/мес",
      ],
      popular: false,
    },
    {
      name: "R17–R19 (Премиум)",
      price: "600",
      period: "за месяц",
      description: "Седаны D/E-класса и городские кроссоверы",
      features: [
        "Бесплатный забор от подъезда",
        "Киевский район — подача от 30 мин",
        "Официальный договор хранения",
        "Фотоотчет и проверка на грыжи/проколы",
        "Сухой склад с климат-контролем",
        "Хранение с дисками: +100 ₽/мес",
      ],
      popular: true,
    },
    {
      name: "R20+ (Внедорожники)",
      price: "700",
      period: "за месяц",
      description: "Крупные внедорожники и тяжелые шины",
      features: [
        "Бесплатный забор от подъезда",
        "Киевский район — подача от 30 мин",
        "Официальный договор хранения",
        "Полный осмотр и фотофиксация",
        "Специальные усиленные стеллажи",
        "Хранение с дисками: +100 ₽/мес",
      ],
      popular: false,
    },
  ]

  const handleTariffSelect = (plan: (typeof plans)[0]) => {
    setSelectedTariff({
      name: plan.name,
      price: `${plan.price} ₽/мес`,
      description: plan.description,
    })
    setIsModalOpen(true)
  }

  return (
    <>
      <section id="pricing" className="py-12 md:py-16 bg-gray-50" data-section="pricing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Тарифы хранения шин</h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              Вам не нужно носить тяжелые колеса — специалист сам приедет к вашему подъезду в Симферополе
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 relative flex flex-col justify-between ${
                  plan.popular ? "ring-2 ring-blue-600 md:scale-105 shadow-md" : "border border-gray-100"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                      Выбор клиентов
                    </span>
                  </div>
                )}

                <div>
                  <div className="text-center mb-6 pt-2">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{plan.name}</h3>
                    <div className="text-3xl font-extrabold text-gray-900 mb-1">
                      {plan.price} <span className="text-base font-medium text-gray-500">₽</span>
                    </div>
                    <p className="text-xs text-gray-500 font-medium">{plan.period}</p>
                    <p className="text-xs text-blue-600 mt-1 font-medium">{plan.description}</p>
                  </div>

                  <ul className="space-y-2.5 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs md:text-sm text-gray-600">
                        <Check className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className={`w-full text-sm font-semibold py-2.5 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-md ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-gray-900 hover:bg-gray-800 text-white"
                  }`}
                  onClick={() => handleTariffSelect(plan)}
                >
                  Выбрать тариф
                </Button>
              </div>
            ))}
          </div>

          {/* Additional Services Info */}
          <div className="mt-10 md:mt-16 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
              <div className="text-center mb-6">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
                  Сервис и забота
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-2">
                  Дополнительные услуги и детейлинг
                </h3>
                <p className="text-xs md:text-sm text-gray-600 max-w-xl mx-auto mt-1">
                  Сдавайте шины на сезонное хранение в идеальном состоянии — возвращаем чистыми и обработанными
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {/* Детейлинг-уход */}
                <div className="bg-gradient-to-br from-blue-50/50 to-indigo-50/30 rounded-xl p-5 border border-blue-100/60">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center text-base">
                    <Droplets className="w-5 h-5 text-blue-600 mr-2" />
                    Комплекс «Мойка + Сушка + Чернение»
                  </h4>
                  <p className="text-xs text-gray-600 mb-3">
                    Глубокая очистка от тормозной пыли, сушка и консервация полимерным кондиционером (защита от старения и трещин):
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex justify-between items-center py-1 border-b border-blue-100/50">
                      <span>Комплект 4 шины (R13–R16)</span>
                      <span className="font-bold text-gray-900">600 ₽</span>
                    </li>
                    <li className="flex justify-between items-center py-1 border-b border-blue-100/50">
                      <span>Комплект 4 шины (R17–R19)</span>
                      <span className="font-bold text-gray-900">800 ₽</span>
                    </li>
                    <li className="flex justify-between items-center py-1 border-b border-blue-100/50">
                      <span>Комплект 4 шины (R20+)</span>
                      <span className="font-bold text-gray-900">1 000 ₽</span>
                    </li>
                    <li className="flex justify-between items-center py-1">
                      <span>Плотные прочные пакеты</span>
                      <span className="font-bold text-gray-900">350 ₽/компл.</span>
                    </li>
                  </ul>
                </div>

                {/* Забор и логистика */}
                <div className="bg-gradient-to-br from-emerald-50/50 to-teal-50/30 rounded-xl p-5 border border-emerald-100/60">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center text-base">
                    <Truck className="w-5 h-5 text-emerald-600 mr-2" />
                    Забор, доставка и безопасность
                  </h4>
                  <p className="text-xs text-gray-600 mb-3">
                    Вам не придется пачкать багажник и тратить личное время на поездки:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex justify-between items-center py-1 border-b border-emerald-100/50">
                      <span>Вывоз от подъезда / дома</span>
                      <span className="font-bold text-emerald-600">БЕСПЛАТНО</span>
                    </li>
                    <li className="flex justify-between items-center py-1 border-b border-emerald-100/50">
                      <span>Замер протектора + фотоотчет</span>
                      <span className="font-bold text-emerald-600">БЕСПЛАТНО</span>
                    </li>
                    <li className="flex justify-between items-center py-1 border-b border-emerald-100/50">
                      <span>Запись к партнерам без очередей</span>
                      <span className="font-bold text-emerald-600">БЕСПЛАТНО</span>
                    </li>
                    <li className="flex justify-between items-center py-1">
                      <span>Доставка в ваш шиномонтаж</span>
                      <span className="font-bold text-gray-900">500 ₽</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TariffModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} tariff={selectedTariff} />
    </>
  )
}
