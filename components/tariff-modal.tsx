"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X, Phone, MessageCircle } from "lucide-react"

interface TariffModalProps {
  isOpen: boolean
  onClose: () => void
  tariff: {
    name: string
    price: string
    description: string
  } | null
}

export default function TariffModal({ isOpen, onClose, tariff }: TariffModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const sendToTelegram = async (message: string) => {
    const botToken = "YOUR_BOT_TOKEN" // Замените на токен вашего бота
    const chatId = "@EnrikeTomas" // ID чата менеджера

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "HTML",
        }),
      })

      return response.ok
    } catch (error) {
      console.error("Ошибка отправки в Telegram:", error)
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const message = `🚗 <b>Новая заявка на хранение шин</b>

📋 <b>Тариф:</b> ${tariff?.name}
💰 <b>Стоимость:</b> ${tariff?.price}₽/месяц
📝 <b>Описание:</b> ${tariff?.description}

👤 <b>Клиент:</b> ${formData.name}
📞 <b>Телефон:</b> ${formData.phone}

⏰ <b>Время заявки:</b> ${new Date().toLocaleString("ru-RU")}`

    // Попытка отправить в Telegram
    const telegramSent = await sendToTelegram(message)

    if (telegramSent) {
      alert("Заявка успешно отправлена! Менеджер свяжется с вами в ближайшее время.")
    } else {
      // Fallback - показать информацию для ручной отправки
      alert(`Заявка принята! 
      
Тариф: ${tariff?.name}
Имя: ${formData.name}
Телефон: ${formData.phone}

Мы свяжемся с вами в ближайшее время.`)
    }

    setFormData({ name: "", phone: "" })
    setIsSubmitting(false)
    onClose()
  }

  if (!isOpen || !tariff) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full mx-4 relative overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 pb-8">
          <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors">
            <X className="w-6 h-6" />
          </button>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Оформить заявку</h2>
            <p className="text-blue-100">Выбранный тариф</p>
          </div>
        </div>

        {/* Tariff Info */}
        <div className="bg-blue-50 -mt-4 mx-6 rounded-xl p-4 mb-6 border border-blue-100">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-1">{tariff.name}</h3>
            <div className="text-2xl font-bold text-blue-600 mb-1">
              {tariff.price} <span className="text-base font-normal text-gray-600">₽/месяц</span>
            </div>
            <p className="text-sm text-gray-600">{tariff.description}</p>
          </div>
        </div>

        {/* Form */}
        <div className="px-6 pb-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="modal-name" className="text-gray-700 font-medium">
                Ваше имя *
              </Label>
              <Input
                id="modal-name"
                name="name"
                type="text"
                required
                placeholder="Введите ваше имя"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <Label htmlFor="modal-phone" className="text-gray-700 font-medium">
                Номер телефона *
              </Label>
              <Input
                id="modal-phone"
                name="phone"
                type="tel"
                required
                placeholder="+7 (___) ___-__-__"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="pt-4 space-y-3">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Отправляем..." : "Оформить заявку"}
              </Button>

              <div className="flex space-x-2">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50 py-2 rounded-xl transition-all duration-300 bg-transparent"
                  onClick={() => window.open("tel:+79780703665")}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Позвонить
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 border-green-600 text-green-600 hover:bg-green-50 py-2 rounded-xl transition-all duration-300 bg-transparent"
                  onClick={() => window.open("https://t.me/EntikeTomas")}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Telegram
                </Button>
              </div>
            </div>
          </form>

          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              Нажимая "Оформить заявку", вы соглашаетесь с обработкой персональных данных
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
