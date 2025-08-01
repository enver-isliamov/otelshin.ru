import type { Metadata } from "next"
import { Users, Award, Shield, Clock, Phone, MessageCircle, Eye, Thermometer } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "О нас - CarMan",
  description: "Узнайте больше о нашей компании, команде и преимуществах хранения шин в Симферополе",
}

export default function AboutPage() {
  const stats = [
    { label: "Довольных клиентов", value: "100+", color: "text-blue-500", icon: Users },
    { label: "Лет опыта", value: "5+", color: "text-green-500", icon: Award },
    { label: "Гарантия сохранности", value: "100%", color: "text-purple-500", icon: Shield },
    { label: "Контроль условий", value: "24/7", color: "text-orange-500", icon: Clock },
  ]

  const advantages = [
    {
      icon: Thermometer,
      title: "Климат-контроль",
      description:
        "Современные складские помещения с контролем температуры и влажности для оптимальных условий хранения",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Eye,
      title: "Безопасность 24/7",
      description: "Система видеонаблюдения и контроля доступа обеспечивает полную безопасность ваших шин",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Users,
      title: "Профессиональная команда",
      description: "Опытные специалисты с более чем 5-летним стажем в сфере хранения и обслуживания шин",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Award,
      title: "Современные технологии",
      description: "Собственная автоматизированная система для удобного управления заказами и отслеживания",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ]

  return (
    <div className="py-12 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">О компании CarMan</h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Мы создали современный сервис хранения шин в Симферополе, который объединяет профессиональный подход,
            передовые технологии и заботу о каждом клиенте
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-4 lg:p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className={`text-2xl lg:text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-xs lg:text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Наша история</h2>
            <div className="space-y-4 text-gray-600">
              <p className="text-sm lg:text-base leading-relaxed">
                CarMan был основан в 2019 году с целью решить проблему сезонного хранения шин для автовладельцев
                Симферополя. Мы понимали, что многие сталкиваются с нехваткой места для хранения сменного комплекта шин.
              </p>
              <p className="text-sm lg:text-base leading-relaxed">
                За годы работы мы выросли от небольшого склада до современного автоматизированного комплекса с
                собственной системой, которая позволяет отслеживать каждый комплект шин и обеспечивать высокий уровень
                сервиса.
              </p>
              <p className="text-sm lg:text-base leading-relaxed">
                Сегодня нам доверяют более 100 клиентов, и мы продолжаем развиваться, внедряя новые технологии и
                расширяя спектр услуг.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 lg:p-8">
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">Наша миссия</h3>
            <p className="text-gray-600 mb-6 text-sm lg:text-base leading-relaxed">
              Обеспечить каждому автовладельцу удобное, безопасное и доступное решение для хранения шин, используя
              современные технологии и индивидуальный подход к каждому клиенту.
            </p>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Что нас отличает:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Вывоз шин от дома/офиса БЕСПЛАТНО</li>
                <li>• Личный кабинет для отслеживания</li>
                <li>• Автоматические напоминания</li>
                <li>• Контроль условий хранения 24/7</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Advantages */}
        <div className="mb-16">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Наши преимущества</h2>
            <p className="text-lg text-gray-600">Почему более 100 клиентов выбрали CarMan для хранения своих шин</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className={`${advantage.bgColor} rounded-xl p-6 hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <advantage.icon className={`w-6 h-6 ${advantage.color}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{advantage.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 lg:p-12 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Хотите узнать больше?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для получения подробной консультации о наших услугах и условиях хранения
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105"
            >
              <a href="tel:+79780703665">
                <Phone className="w-4 h-4 mr-2" />
                Позвонить сейчас
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50 transition-all duration-300 hover:scale-105 bg-transparent"
            >
              <a href="https://t.me/EntikeTomas">
                <MessageCircle className="w-4 h-4 mr-2" />
                Написать в Telegram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
