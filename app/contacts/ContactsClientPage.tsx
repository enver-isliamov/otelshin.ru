"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Clock } from "lucide-react"
import { CALL_PHONE, CALL_PHONE_RAW, MESSENGER_PHONE, MAX_URL, getWhatsAppUrl, getTelegramUrl } from "@/lib/contacts"
import { reachGoal, GOAL_PHONE_CLICK, GOAL_WHATSAPP_CLICK, GOAL_TELEGRAM_CLICK, GOAL_MAX_CLICK } from "@/lib/analytics"
import { WhatsAppIcon, TelegramIcon, MaxIcon } from "@/components/icons"

export default function ContactsClientPage() {
  const contactMessage = "Здравствуйте! Хочу узнать про сезонное хранение шин в Симферополе."

  const contactMethods = [
    {
      icon: Phone,
      title: "Телефон (звонки)",
      value: CALL_PHONE,
      link: `tel:${CALL_PHONE_RAW}`,
      description: "Основной рабочий номер для звонков",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      linkColor: "text-blue-600 hover:text-blue-700",
      onClick: () => reachGoal(GOAL_PHONE_CLICK, { location: "contacts_page_card" }),
    },
    {
      icon: MaxIcon,
      title: "Мессенджер MAX",
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
        {/* Hero Section */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">Контакты OtelShin</h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Свяжитесь с нами любым удобным способом: по телефону, в мессенджере MAX, WhatsApp или Telegram. 
            Бесплатно приедем к вашему дому или офису в Симферополе и заберем шины на хранение.
          </p>
        </div>

        {/* Quick Contact Methods */}
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
                  <p className="font-medium text-gray-900 mb-2">{method.value}</p>
                )}
              </div>
              <p className="text-xs text-gray-600 mt-2">{method.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Additional Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 lg:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Почему стоит выбрать OtelShin?</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Вывоз шин от дома/офиса БЕСПЛАТНО
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Контроль условий хранения 24/7
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  Личный кабинет для отслеживания
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
                  Автоматические напоминания
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                  Более 100 довольных клиентов в Симферополе
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                  Официальный договор ответственного хранения
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Connect Box */}
          <div className="bg-white rounded-xl p-6 lg:p-8 shadow-md border border-gray-100 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Быстрая связь с OtelShin</h3>
              <p className="text-gray-600 text-sm mb-6">
                Выберите удобный канал связи. Мы оперативно ответим и согласуем время бесплатного забора шин.
              </p>
            </div>

            <div className="space-y-3">
              {/* Call */}
              <Button
                asChild
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-[1.02] shadow-sm"
              >
                <a
                  href={`tel:${CALL_PHONE_RAW}`}
                  onClick={() => reachGoal(GOAL_PHONE_CLICK, { location: "contacts_page_cta" })}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Позвонить: {CALL_PHONE}
                </a>
              </Button>

              {/* MAX Messenger */}
              <Button
                asChild
                size="lg"
                className="w-full bg-violet-600 hover:bg-violet-700 text-white transition-all duration-300 hover:scale-[1.02] shadow-sm"
              >
                <a
                  href={MAX_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => reachGoal(GOAL_MAX_CLICK, { location: "contacts_page_cta" })}
                >
                  <MaxIcon className="w-4 h-4 mr-2" />
                  Написать в MAX ({CALL_PHONE})
                </a>
              </Button>

              {/* WhatsApp */}
              <Button
                asChild
                size="lg"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white transition-all duration-300 hover:scale-[1.02] shadow-sm"
              >
                <a
                  href={getWhatsAppUrl(contactMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => reachGoal(GOAL_WHATSAPP_CLICK, { location: "contacts_page_cta" })}
                >
                  <WhatsAppIcon className="w-4 h-4 mr-2" />
                  Написать в WhatsApp ({MESSENGER_PHONE})
                </a>
              </Button>

              {/* Telegram */}
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-sky-500 text-sky-600 hover:bg-sky-50 transition-all duration-300 hover:scale-[1.02] bg-white"
              >
                <a
                  href={getTelegramUrl(contactMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => reachGoal(GOAL_TELEGRAM_CLICK, { location: "contacts_page_cta" })}
                >
                  <TelegramIcon className="w-4 h-4 mr-2 text-sky-500" />
                  Написать в Telegram (@EnrikeTomas)
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
