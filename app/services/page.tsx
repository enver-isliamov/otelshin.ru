import type { Metadata } from "next"
import { Car, Wrench, Package, Check, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Услуги по хранению шин в Симферополе | OtelShin - Профессиональное сезонное хранение",
  description:
    "Полный спектр услуг по хранению шин в Симферополе от OtelShin. Климат-контроль, вывоз бесплатно, личный кабинет. Тарифы от 500₽/месяц. ☎️ +7 (978) 070-36-65",
  keywords:
    "услуги хранения шин Симферополь, сезонное хранение шин, хранение колес Симферополь, OtelShin услуги, шиномонтаж Симферополь, хранение резины",
  authors: [{ name: "OtelShin" }],
  creator: "OtelShin",
  publisher: "OtelShin",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Услуги по хранению шин в Симферополе | OtelShin",
    description: "Профессиональное хранение шин с климат-контролем. Вывоз бесплатно, тарифы от 500₽/месяц",
    type: "website",
    locale: "ru_RU",
    siteName: "OtelShin",
    images: [
      {
        url: "/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Услуги хранения шин OtelShin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Услуги по хранению шин в Симферополе | OtelShin",
    description: "Профессиональное хранение шин с климат-контролем. Вывоз бесплатно, тарифы от 500₽/месяц",
  },
  alternates: {
    canonical: "https://otelshin.vercel.app/services",
  },
}

export default function ServicesPage() {
  const mainServices = [
    {
      icon: Package,
      title: "Сезонное хранение шин",
      description: "Профессиональное хранение ваших шин в оптимальных условиях",
      features: [
        "Контроль температуры и влажности",
        "Индивидуальная маркировка",
        "Личный кабинет",
        "Автоматические напоминания",
      ],
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Car,
      title: "Приём и выдача",
      description: "Удобные варианты доставки и получения ваших шин",
      features: ["Вывоз от дома/офиса БЕСПЛАТНО", "Выдача со склада БЕСПЛАТНО", "Доставка по городу 500₽"],
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: Wrench,
      title: "Дополнительные услуги",
      description: "Расширенный пакет услуг для максимального удобства",
      features: ["Мойка колёс 200₽/комплект", "Упаковка в пакеты 350₽/комплект", "Запись на шиномонтаж БЕСПЛАТНО"],
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
  ]

  const tariffs = [
    {
      name: "R13-R15",
      price: "500",
      description: "Хранение с дисками: +100₽",
      popular: false,
    },
    {
      name: "R16-R19",
      price: "600",
      description: "Хранение с дисками: +100₽, Внедорожник: +100",
      popular: true,
    },
    {
      name: "R20+",
      price: "700",
      description: "Хранение с дисками: +100₽, Внедорожник: +100₽",
      popular: false,
    },
  ]

  const advantages = [
    "Современные складские помещения",
    "Контроль температуры и влажности 24/7",
    "Видеонаблюдение и охрана",
    "Собственная система управления",
    "Опытная команда специалистов",
    "Индивидуальный подход к каждому клиенту",
  ]

  return (
    <div className="py-12 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Услуги по хранению шин в Симферополе
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Полный спектр услуг по хранению шин с использованием современного оборудования и профессиональных технологий
            от компании OtelShin в Симферополе
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {mainServices.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} rounded-xl p-6 lg:p-8 hover:shadow-lg transition-all duration-300 border border-gray-100`}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4 shadow-sm">
                  <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">{service.title}</h2>
              </div>

              <p className="text-gray-600 mb-6">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tariffs Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Тарифы хранения шин</h2>
            <p className="text-lg text-gray-600">Выберите подходящий тариф в зависимости от размера ваших шин</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {tariffs.map((tariff, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 relative ${
                  tariff.popular ? "ring-2 ring-blue-500 scale-105" : ""
                }`}
              >
                {tariff.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Популярный
                    </span>
                  </div>
                )}

                <div className="text-center pt-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tariff.name}</h3>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {tariff.price} <span className="text-base font-normal text-gray-600">₽</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">за месяц</p>
                  <p className="text-xs text-blue-600 font-medium">{tariff.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Почему выбирают OtelShin?</h2>
            <p className="text-lg text-gray-600">Современный подход к хранению шин с гарантией качества</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{advantage}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 lg:p-12 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Готовы воспользоваться нашими услугами?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для консультации и выбора подходящего тарифа хранения шин в Симферополе
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
              <a href="https://t.me/EnrikeTomas">
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
