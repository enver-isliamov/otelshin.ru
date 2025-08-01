"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Clock, ArrowRight } from "lucide-react"

export default function ContactCTA() {
  const workSteps = [
    {
      step: "1",
      title: "Приём",
      description: "Осмотр, фотофиксация, оформление документов",
      color: "bg-blue-500",
    },
    {
      step: "2",
      title: "Подготовка",
      description: "Маркировка, размещение на стеллажах",
      color: "bg-green-500",
    },
    {
      step: "3",
      title: "Хранение",
      description: "Контроль условий, периодические проверки. Доступ в личный кабинет",
      color: "bg-purple-500",
    },
    {
      step: "4",
      title: "Выдача",
      description: "Уведомление, подготовка, передача клиенту / шиномонтаж",
      color: "bg-orange-500",
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Готовы сдать шины на хранение?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Свяжитесь с нами удобным способом. Поможем выбрать тариф и ответим на все вопросы.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* How We Work */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Как мы работаем</h3>

              <div className="space-y-4">
                {workSteps.map((step, index) => (
                  <div key={index} className="flex items-center group">
                    <div
                      className={`w-10 h-10 ${step.color} text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0`}
                    >
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                    {index < workSteps.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-gray-400 ml-4 group-hover:text-gray-600 transition-colors" />
                    )}
                  </div>
                ))}
              </div>

              {/* Working Hours */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center mb-3">
                  <Clock className="w-5 h-5 mr-3 text-blue-600" />
                  <h4 className="font-semibold text-gray-900">Режим работы</h4>
                </div>
                <p className="text-gray-600 ml-8">Ежедневно с 9:00 до 22:00</p>
              </div>
            </div>

            {/* Contact & CTA */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Свяжитесь с нами</h3>

                {/* Quick Action Buttons */}
                <div className="space-y-4 mb-6">
                  <Button
                    asChild
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 h-12 w-full transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden group"
                  >
                    <a href="tel:+79780703665">
                      <span className="relative z-10 flex items-center justify-center">
                        <Phone className="w-4 h-4 mr-2" />
                        Быстрый звонок
                      </span>
                      <div className="absolute inset-0 -top-1 -left-1 w-4 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:animate-shimmer"></div>
                    </a>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50 h-12 w-full bg-transparent transition-all duration-300 hover:scale-105"
                  >
                    <a href="https://t.me/EntikeTomas">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Написать в Telegram
                    </a>
                  </Button>
                </div>

                {/* Help Text */}
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-center text-sm text-gray-600">Поможем выбрать тариф и рассчитаем стоимость</p>
                </div>
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
  )
}
