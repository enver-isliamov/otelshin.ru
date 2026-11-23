"use client"

import { Phone, MapPin } from "lucide-react"
import { CALL_PHONE, CALL_PHONE_RAW, MESSENGER_PHONE, MAX_URL, getWhatsAppUrl, getTelegramUrl } from "@/lib/contacts"
import { reachGoal, GOAL_PHONE_CLICK, GOAL_WHATSAPP_CLICK, GOAL_TELEGRAM_CLICK, GOAL_MAX_CLICK } from "@/lib/analytics"
import { WhatsAppIcon, TelegramIcon, MaxIcon } from "@/components/icons"
import { MessengerButtonsFull } from "@/components/messenger-buttons"

export default function ContactsClientPage() {
  const contactMessage = "Здравствуйте! Хочу узнать про сезонное хранение шин в Симферополе."

  const contactMethods = [
    {
      icon: Phone,
      title: "Телефон",
      value: CALL_PHONE,
      link: `tel:${CALL_PHONE_RAW}`,
      description: "Звонки, основной номер",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      linkColor: "text-blue-600 hover:text-blue-700",
      onClick: () => reachGoal(GOAL_PHONE_CLICK, { location: "contacts_page_card" }),
    },
    {
      icon: MaxIcon,
      title: "MAX",
      value: CALL_PHONE,
      link: MAX_URL,
      description: "Чат по рабочему номеру",
      bgColor: "bg-violet-50",
      iconColor: "text-violet-600",
      linkColor: "text-violet-600 hover:text-violet-700",
      isExternal: true,
      onClick: () => reachGoal(GOAL_MAX_CLICK, { location: "contacts_page_card" }),
    },
    {
      icon: WhatsAppIcon,
      title: "WhatsApp",
      value: MESSENGER_PHONE,
      link: getWhatsAppUrl(contactMessage),
      description: "Консультация и бронирование",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      linkColor: "text-emerald-600 hover:text-emerald-700",
      isExternal: true,
      onClick: () => reachGoal(GOAL_WHATSAPP_CLICK, { location: "contacts_page_card" }),
    },
    {
      icon: TelegramIcon,
      title: "Telegram",
      value: "@EnrikeTomas",
      link: getTelegramUrl(contactMessage),
      description: "Быстрые ответы в мессенджере",
      bgColor: "bg-sky-50",
      iconColor: "text-sky-600",
      linkColor: "text-sky-600 hover:text-sky-700",
      isExternal: true,
      onClick: () => reachGoal(GOAL_TELEGRAM_CLICK, { location: "contacts_page_card" }),
    },
    {
      icon: MapPin,
      title: "Адрес",
      value: "г. Симферополь",
      link: "",
      description: "Бесплатный выезд по городу",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      linkColor: "text-purple-600",
    },
  ]

  return (
    <div className="py-12 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">Контакты OtelShin</h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Свяжитесь с нами любым удобным способом: по телефону, в MAX, WhatsApp или Telegram.
            Бесплатно приедем к вашему дому или офису в Симферополе и заберем шины на хранение.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 mb-12 lg:mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`${method.bgColor} rounded-xl p-4 lg:p-6 text-center hover:shadow-lg transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <method.icon className={`w-6 h-6 ${method.iconColor}`} />
                </div>
                <h2 className="font-semibold text-gray-900 mb-2">{method.title}</h2>
                {method.link ? (
                  <a
                    href={method.link}
                    target={method.isExternal ? "_blank" : undefined}
                    rel={method.isExternal ? "noopener noreferrer" : undefined}
                    onClick={method.onClick}
                    className={`font-medium ${method.linkColor} block mb-2 break-words`}
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="font-medium text-gray-700 mb-2">{method.value}</p>
                )}
                <p className="text-xs text-gray-500">{method.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Why Us */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 lg:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Почему выбирают OtelShin</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              {[
                "Вывоз шин от дома/офиса БЕСПЛАТНО",
                "Контроль условий хранения 24/7",
                "Личный кабинет для отслеживания",
                "Автоматические напоминания",
                "Более 100 довольных клиентов в Симферополе",
                "Официальный договор ответственного хранения",
              ].map((item, i) => (
                <li key={i} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Connect */}
          <div className="bg-white rounded-xl p-6 lg:p-8 shadow-md border border-gray-100 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Быстрая связь с OtelShin</h3>
              <p className="text-gray-600 text-sm mb-6">
                Выберите удобный канал. Оперативно ответим и согласуем время бесплатного забора шин.
              </p>
            </div>
            <MessengerButtonsFull message={contactMessage} location="contacts_page_cta" />
          </div>
        </div>
      </div>
    </div>
  )
}
