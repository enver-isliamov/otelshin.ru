import type { Metadata } from "next"
import { Car, Wrench, Package, Check, Phone, MessageCircle, Droplets, ShieldCheck, Truck, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import FAQSection from "@/components/faq-section"
import { CALL_PHONE, CALL_PHONE_RAW, getWhatsAppUrl, getTelegramUrl } from "@/lib/contacts"

export const metadata: Metadata = {
  title: "Услуги сезонного хранения шин в Симферополе | Бесплатный забор от подъезда",
  description:
    "Полный спектр услуг хранения шин в Симферополе: бесплатный вывоз от дома/офиса, экспресс-забор в Киевском районе, комплекс «Мойка + Сушка + Детейлинг-чернение», доставка в шиномонтаж. Тарифы от 500 ₽/мес. ☎️ +7 (979) 066-20-89",
  keywords:
    "услуги хранения шин Симферополь, сезонное хранение шин, хранение колес Симферополь, OtelShin услуги, шиномонтаж Симферополь, хранение резины, отель шин, шинный отель, склад шин, забор шин от дома, детейлинг шин Симферополь, Киевский район хранение шин",
  authors: [{ name: "OtelShin" }],
  creator: "OtelShin",
  publisher: "OtelShin",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://otelshin.ru/services",
  },
}

export default function ServicesPage() {
  const mainServices = [
    {
      icon: Package,
      title: "Сезонное хранение шин и дисков",
      description: "Бережное хранение в сухом отапливаемом помещении с климат-контролем по ГОСТ правилам.",
      features: [
        "Контроль температуры и влажности 24/7",
        "Индивидуальная маркировка и стеллажи",
        "Официальный договор ответственного хранения",
        "Защита от прямых солнечных лучей и деформации",
      ],
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Truck,
      title: "Бесплатный забор от подъезда",
      description: "Вам не нужно таскать тяжелые колеса: специалист сам спустит, погрузит и увезет их.",
      features: [
        "Бесплатный выезд по всему Симферополю",
        "Киевский район — подача от 30 минут",
        "Забор у дома, офиса или бокса шиномонтажа",
        "Доставка чистых колес к мастеру за 500 ₽",
      ],
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      icon: Droplets,
      title: "Детейлинг-уход и защита резины",
      description: "Профессиональная подготовка колес к долгому хранению и защита от старения.",
      features: [
        "Комплекс «Мойка + Сушка + Чернение»",
        "Консервация полимерным кондиционером",
        "Бесплатный замер протектора и фотоотчет",
        "Плотные пакеты для чистоты багажника",
      ],
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
  ]

  const detailingPrices = [
    { radius: "R13–R16 (Легковые)", price: "600 ₽", note: "за комплект из 4 шин" },
    { radius: "R17–R19 (Кроссоверы)", price: "800 ₽", note: "за комплект из 4 шин" },
    { radius: "R20+ (Внедорожники)", price: "1 000 ₽", note: "за комплект из 4 шин" },
  ]

  const tariffs = [
    {
      name: "R13–R16 (Стандарт)",
      price: "500",
      description: "Хранение с дисками: +100 ₽/мес",
      popular: false,
    },
    {
      name: "R17–R19 (Премиум)",
      price: "600",
      description: "Хранение с дисками: +100 ₽/мес",
      popular: true,
    },
    {
      name: "R20+ (Внедорожники)",
      price: "700",
      description: "Хранение с дисками: +100 ₽/мес",
      popular: false,
    },
  ]

  const advantages = [
    "Бесплатный забор от подъезда — вам не нужно поднимать тяжести",
    "Особенно быстрый выезд в Киевском районе Симферополя",
    "Официальный юридический договор ответственного хранения",
    "Постоянная температура и влажность на складе",
    "Бесплатный замер протектора и фотоотчет в мессенджер",
    "Доставка чистых колес к боксу вашего шиномонтажа ко времени",
  ]

  const servicesMessage = "Здравствуйте! Хочу узнать про услуги хранения и детейлинга шин в Симферополе."

  return (
    <div className="py-12 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Симферополь • Выездной мобильный сервис
          </span>
          <h1 className="text-3xl lg:text-5xl font-extrabold text-gray-900 mb-4 lg:mb-6 tracking-tight">
            Услуги хранения шин с забором от дома
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Полный цикл заботы о ваших колесах: бережный забор у подъезда, мойка, сушка, консервация и правильное сезонное хранение в Симферополе.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {mainServices.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} rounded-2xl p-6 lg:p-8 hover:shadow-lg transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm">
                  <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h2>
                <p className="text-sm text-gray-600 mb-5 leading-relaxed">{service.description}</p>
                <ul className="space-y-2.5 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-700 font-medium">
                      <Check className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Detailing Care Block */}
        <div className="bg-gradient-to-br from-gray-900 to-blue-950 text-white rounded-3xl p-8 lg:p-12 mb-16 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest bg-blue-900/60 px-3 py-1 rounded-full border border-blue-700/50">
                Премиум-уход
              </span>
              <h2 className="text-2xl lg:text-4xl font-extrabold mt-3 mb-2">
                Комплекс «Мойка + Сушка + Детейлинг-чернение»
              </h2>
              <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
                Очищаем резину от тормозного налета, высушиваем и консервируем полимером. Колеса возвращаются глубокого черного матового цвета, как из автосалона, и защищены от микротрещин.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {detailingPrices.map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-5 text-center border border-white/10">
                  <h3 className="font-semibold text-sm text-blue-200 mb-1">{item.radius}</h3>
                  <div className="text-2xl lg:text-3xl font-extrabold text-white mb-1">{item.price}</div>
                  <div className="text-xs text-gray-400">{item.note}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-300">
              <span className="flex items-center">
                <Check className="w-4 h-4 text-emerald-400 mr-1.5" />
                Инспекция протектора: БЕСПЛАТНО
              </span>
              <span className="flex items-center">
                <Check className="w-4 h-4 text-emerald-400 mr-1.5" />
                Плотные пакеты: 350 ₽/комплект
              </span>
              <span className="flex items-center">
                <Check className="w-4 h-4 text-emerald-400 mr-1.5" />
                Доставка к боксу мастера: 500 ₽
              </span>
            </div>
          </div>
        </div>

        {/* Tariffs Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">Базовые тарифы на хранение</h2>
            <p className="text-sm md:text-base text-gray-600">
              Бесплатный забор от подъезда в Симферополе включен при сдаче шин на сезон
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {tariffs.map((tariff, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-sm border transition-all duration-300 relative text-center ${
                  tariff.popular ? "ring-2 ring-blue-600 shadow-md border-transparent" : "border-gray-200"
                }`}
              >
                {tariff.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Популярный
                    </span>
                  </div>
                )}
                <h3 className="text-lg font-bold text-gray-900 mb-1">{tariff.name}</h3>
                <div className="text-3xl font-extrabold text-gray-900 mb-1">
                  {tariff.price} <span className="text-base font-normal text-gray-500">₽</span>
                </div>
                <p className="text-xs text-gray-500 mb-2">за месяц</p>
                <p className="text-xs text-blue-600 font-medium">{tariff.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <FAQSection />

        {/* Why Choose Us */}
        <div className="my-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">Преимущества сервиса OtelShin</h2>
            <p className="text-sm md:text-base text-gray-600">
              Создано для максимального комфорта девушек и жителей многоэтажных домов Симферополя
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                <Check className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 font-medium">{advantage}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Готовы сдать шины на хранение прямо сейчас?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-8 max-w-xl mx-auto">
            Свяжитесь с нами: согласуем время и бесплатно заберем колеса от вашего подъезда в Симферополе.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300 hover:scale-105 shadow-sm w-full sm:w-auto"
            >
              <a href={`tel:${CALL_PHONE_RAW}`}>
                <Phone className="w-4 h-4 mr-2" />
                Позвонить: {CALL_PHONE}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-all duration-300 hover:scale-105 shadow-sm w-full sm:w-auto"
            >
              <a
                href={getWhatsAppUrl(servicesMessage)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Написать в WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-sky-500 text-sky-600 hover:bg-sky-50 font-semibold transition-all duration-300 hover:scale-105 bg-white w-full sm:w-auto"
            >
              <a
                href={getTelegramUrl(servicesMessage)}
                target="_blank"
                rel="noopener noreferrer"
              >
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
