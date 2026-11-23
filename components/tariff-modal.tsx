"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X, Phone, MessageCircle, CircleCheck as CheckCircle, TriangleAlert as AlertTriangle, Sparkles } from "lucide-react"
import { CALL_PHONE, CALL_PHONE_RAW, getWhatsAppUrl, getTelegramUrl } from "@/lib/contacts"
import { reachGoal, GOAL_PHONE_CLICK, GOAL_WHATSAPP_CLICK, GOAL_TELEGRAM_CLICK, GOAL_ORDER_SUBMIT } from "@/lib/analytics"
import { WhatsAppIcon, TelegramIcon } from "@/components/icons"

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
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | "warning" | null
    message: string
  }>({ type: null, message: "" })
  const [isVisible, setIsVisible] = useState(false)

  // Анимация появления
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [isOpen])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const getMessengerText = () => {
    const tariffInfo = tariff ? `тариф "${tariff.name}" (${tariff.price})` : "сезонное хранение шин"
    let text = `Здравствуйте! Меня интересует ${tariffInfo} в Симферополе.`
    if (formData.name || formData.phone) {
      text += ` Мои контакты: ${formData.name || ""} ${formData.phone || ""}`.trim()
    }
    return text
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch("/api/send-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          tariff: tariff,
        }),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        reachGoal(GOAL_ORDER_SUBMIT, {
          tariff: tariff?.name,
          price: tariff?.price,
        })

        setSubmitStatus({
          type: result.warning ? "warning" : "success",
          message: result.message,
        })

        // Показываем сообщение на 4 секунды, затем закрываем модал
        setTimeout(() => {
          setFormData({ name: "", phone: "" })
          setSubmitStatus({ type: null, message: "" })
          onClose()
        }, 4000)
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Произошла ошибка при отправке заявки",
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus({
        type: "error",
        message: `Произошла ошибка соединения. Попробуйте позвонить нам напрямую: ${CALL_PHONE}`,
      })
    }

    setIsSubmitting(false)
  }

  const handleClose = () => {
    if (!isSubmitting) {
      setIsVisible(false)
      setTimeout(() => {
        setFormData({ name: "", phone: "" })
        setSubmitStatus({ type: null, message: "" })
        onClose()
      }, 300)
    }
  }

  if (!isOpen || !tariff) return null

  return (
    <div
      className={`fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`bg-white rounded-2xl max-w-sm w-full mx-4 relative overflow-hidden shadow-2xl transform transition-all duration-300 ${
          isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          disabled={isSubmitting}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Success State */}
        {submitStatus.type === "success" && (
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 flex flex-col items-center justify-center p-6 z-20">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-4 shadow-lg animate-bounce">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Заявка отправлена!</h3>
            <p className="text-gray-600 text-center text-sm leading-relaxed">{submitStatus.message}</p>
            <div className="mt-4 flex items-center text-xs text-green-600 font-medium">
              <CheckCircle className="w-4 h-4 mr-1" />
              Скоро свяжемся с вами
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-3 shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">Бронирование тарифа</h3>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-2.5 mb-2">
              <div className="font-semibold text-blue-600 text-sm">{tariff.name}</div>
              <div className="text-base font-bold text-gray-900">{tariff.price}</div>
            </div>
            <p className="text-gray-600 text-xs">{tariff.description}</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Error/Warning Message */}
            {submitStatus.type && submitStatus.type !== "success" && (
              <div
                className={`p-3 rounded-lg flex items-center text-xs ${
                  submitStatus.type === "warning"
                    ? "bg-amber-50 text-amber-700 border border-amber-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
              >
                <AlertTriangle className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>{submitStatus.message}</span>
              </div>
            )}

            <div className="space-y-3">
              <div>
                <Label htmlFor="modal-name" className="text-gray-700 font-medium text-xs mb-1 block">
                  Ваше имя
                </Label>
                <Input
                  id="modal-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Как к вам обращаться?"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="h-10 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-0 transition-colors text-sm"
                />
              </div>

              <div>
                <Label htmlFor="modal-phone" className="text-gray-700 font-medium text-xs mb-1 block">
                  Номер телефона
                </Label>
                <Input
                  id="modal-phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="h-10 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-0 transition-colors text-sm"
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-10 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm"
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                  Отправляем заявку...
                </div>
              ) : (
                <div className="flex items-center">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Оформить заявку
                </div>
              )}
            </Button>

            {/* Alternative Contact Methods with Prefilled Text */}
            <div className="space-y-3">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-100"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-3 bg-white text-gray-500 text-xs">или напишите / позвоните нам</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {/* WhatsApp with prefilled message */}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="h-10 hover:bg-emerald-50 hover:border-emerald-300 rounded-lg transition-all duration-200 bg-white text-emerald-600 border-emerald-300 border flex items-center justify-center p-1 text-xs"
                  onClick={() => {
                    reachGoal(GOAL_WHATSAPP_CLICK, { source: "tariff_modal", tariff: tariff.name })
                    window.open(getWhatsAppUrl(getMessengerText()), "_blank")
                  }}
                  title="Написать в WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4 mr-1 text-emerald-600" />
                  <span>WhatsApp</span>
                </Button>

                {/* Telegram with prefilled message */}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="h-10 hover:bg-sky-50 hover:border-sky-300 rounded-lg transition-all duration-200 text-sky-600 bg-white border-sky-300 border flex items-center justify-center p-1 text-xs"
                  onClick={() => {
                    reachGoal(GOAL_TELEGRAM_CLICK, { source: "tariff_modal", tariff: tariff.name })
                    window.open(getTelegramUrl(getMessengerText()), "_blank")
                  }}
                  title="Написать в Telegram"
                >
                  <TelegramIcon className="w-4 h-4 mr-1 text-sky-600" />
                  <span>Telegram</span>
                </Button>

                {/* Direct Phone Call */}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="h-10 hover:bg-blue-50 hover:border-blue-300 rounded-lg transition-all duration-200 bg-white text-blue-600 border-blue-300 border flex items-center justify-center p-1 text-xs"
                  onClick={() => {
                    reachGoal(GOAL_PHONE_CLICK, { source: "tariff_modal", tariff: tariff.name })
                    window.open(`tel:${CALL_PHONE_RAW}`)
                  }}
                  title={`Позвонить: ${CALL_PHONE}`}
                >
                  <Phone className="w-4 h-4 mr-1 text-blue-600" />
                  <span>Звонок</span>
                </Button>
              </div>
            </div>
          </form>

          {/* Privacy Notice */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-400 leading-relaxed">
              Нажимая &quot;Оформить заявку&quot;, вы соглашаетесь с{" "}
              <span className="text-blue-500 hover:text-blue-600 cursor-pointer">обработкой персональных данных</span>
            </p>
          </div>

          {/* Benefits */}
          <div className="mt-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-2">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <div className="text-blue-600 font-bold text-xs">БЕСПЛАТНО</div>
                <div className="text-xs text-gray-600">Вывоз шин</div>
              </div>
              <div>
                <div className="text-purple-600 font-bold text-xs">24/7</div>
                <div className="text-xs text-gray-600">Контроль</div>
              </div>
              <div>
                <div className="text-green-600 font-bold text-xs">100%</div>
                <div className="text-xs text-gray-600">Гарантия</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
