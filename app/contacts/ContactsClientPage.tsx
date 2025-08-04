"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react"

export default function ContactsClientPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    alert("Сообщение отправлено! Мы свяжемся с вами в ближайшее время.")
    setFormData({ name: "", phone: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Телефон",
      value: "+7 (978) 070-36-65",
      link: "tel:+79780703665",
      description: "Всегда на связи",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      linkColor: "text-blue-600 hover:text-blue-700",
    },
    {
      icon: MessageCircle,
      title: "Telegram",
      value: "@EnrikeTomas",
      link: "https://t.me/EnrikeTomas",
      description: "Быстрые ответы в мессенджере",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      linkColor: "text-green-600 hover:text-green-700",
    },
    {
      icon: MapPin,
      title: "Адрес",
      value: "г. Симферополь",
      link: "",
      description: "Выезжаем по всему городу",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      linkColor: "text-purple-600 hover:text-purple-700",
    },
    {
      icon: Clock,
      title: "Режим работы",
      value: "Ежедневно: 9:00 - 22:00",
      link: "",
      description: "Работаем без выходных для вашего удобства",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      linkColor: "text-orange-600",
    },
  ]

  return (
    <div className="py-12 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">Контакты OtelShin</h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Свяжитесь с нами любым удобным способом. Мы всегда готовы ответить на ваши вопросы и помочь с выбором услуг
            по хранению шин в Симферополе.
          </p>
        </div>

        {/* Quick Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12 lg:mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`${method.bgColor} rounded-xl p-4 lg:p-6 text-center hover:shadow-lg transition-all duration-300`}
            >
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-3 shadow-sm">
                <method.icon className={`w-6 h-6 ${method.iconColor}`} />
              </div>
              <h2 className="font-semibold text-gray-900 mb-2">{method.title}</h2>
              {method.link ? (
                <a href={method.link} className={`font-medium ${method.linkColor} block mb-2`}>
                  {method.value}
                </a>
              ) : (
                <p className="font-medium text-gray-900 mb-2">{method.value}</p>
              )}
              <p className="text-xs text-gray-600">{method.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
         

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
                  Более 100 довольных клиентов
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                  5+ лет опыта в сфере хранения шин
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Быстрая связь с OtelShin</h3>
              <div className="space-y-3">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105"
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
                  className="w-full border-green-600 text-green-600 hover:bg-green-50 transition-all duration-300 hover:scale-105 bg-transparent"
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
      </div>
    </div>
  )
}
