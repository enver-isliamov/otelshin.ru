"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X, CircleCheck as CheckCircle, TriangleAlert as AlertTriangle, Sparkles } from "lucide-react"
import { CALL_PHONE, CALL_PHONE_RAW } from "@/lib/contacts"
import { reachGoal, GOAL_ORDER_SUBMIT } from "@/lib/analytics"
import { MessengerButtonsCompact } from "@/components/messenger-buttons"

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
  const [formData, setFormData] = useState({ name: "", phone: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | "warning" | null
    message: string
  }>({ type: null, message: "" })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) setIsVisible(true)
    else setIsVisible(false)
  }, [isOpen])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: formData.name, phone: formData.phone, tariff }),
      })
      const result = await response.json()

      if (response.ok && result.success) {
        reachGoal(GOAL_ORDER_SUBMIT, { tariff: tariff?.name, price: tariff?.price })
        setSubmitStatus({ type: result.warning ? "warning" : "success", message: result.message })
        setTimeout(() => {
          setFormData({ name: "", phone: "" })
          setSubmitStatus({ type: null, message: "" })
          onClose()
        }, 4000)
      } else {
        setSubmitStatus({ type: "error", message: result.error || "Произошла ошибка при отправке заявки" })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus({
        type: "error",
        message: `Ошибка соединения. Позвоните напрямую: ${CALL_PHONE}`,
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
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-white transition-all duration-200 shadow-lg disabled:opacity-50"
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
          <div className="text-center mb-5">
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
            {/* Error/Warning */}
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

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-11 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Отправляем заявку...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Оформить заявку
                </>
              )}
            </button>

            {/* Alternative: messenger buttons */}
            <div className="space-y-2">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-100" />
                </div>
                <div className="relative flex justify-center">
                  <span className="px-3 bg-white text-gray-500 text-xs">или свяжитесь напрямую</span>
                </div>
              </div>
              <MessengerButtonsCompact
                message={getMessengerText()}
                location="tariff_modal"
              />
            </div>
          </form>

          {/* Privacy */}
          <p className="mt-4 text-xs text-gray-400 text-center leading-relaxed">
            Нажимая &quot;Оформить заявку&quot;, вы соглашаетесь с{" "}
            <span className="text-blue-500 hover:text-blue-600 cursor-pointer">обработкой персональных данных</span>
          </p>

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
