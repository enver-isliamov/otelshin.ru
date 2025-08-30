"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X, Phone, MessageCircle, CheckCircle, AlertTriangle, Sparkles } from "lucide-react"

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
        message: "Произошла ошибка соединения. Попробуйте позвонить нам: +7 (978) 070-36-65",
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
        className={`bg-white rounded-3xl max-w-lg w-full mx-4 relative overflow-hidden shadow-2xl transform transition-all duration-300 ${
          isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          disabled={isSubmitting}
          className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success State */}
        {submitStatus.type === "success" && (
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 flex flex-col items-center justify-center p-8 z-20">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-lg animate-bounce">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">Заявка отправлена!</h3>
            <p className="text-gray-600 text-center leading-relaxed max-w-sm">{submitStatus.message}</p>
            <div className="mt-6 flex items-center text-sm text-gray-500">
              <Sparkles className="w-4 h-4 mr-2" />
              Окно закроется автоматически
            </div>
          </div>
        )}

        

        {/* Tariff Card */}
        <div className="relative -mt-4 mx-4 mb-6">
          <div className="bg-white p-4 shadow-xl border border-gray-100 rounded-xl">
            <div className="text-center">
              <div className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-3">
                Выбранный тариф
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tariff.name}</h3>
              <div className="flex items-center justify-center mb-2">
                <span className="text-2xl font-bold text-blue-600">{tariff.price}</span>
                <span className="text-gray-500 ml-1">₽/месяц</span>
              </div>
              <p className="text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2">{tariff.description}</p>
            </div>
          </div>
        </div>

        {/* Status Message */}
        {submitStatus.type && submitStatus.type !== "success" && (
          <div className="mx-4 mb-4">
            <div
              className={`p-4 rounded-xl flex items-start space-x-3 ${
                submitStatus.type === "warning"
                  ? "bg-amber-50 border border-amber-200"
                  : "bg-red-50 border border-red-200"
              }`}
            >
              <AlertTriangle
                className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                  submitStatus.type === "warning" ? "text-amber-600" : "text-red-600"
                }`}
              />
              <div>
                <p
                  className={`text-sm font-medium ${
                    submitStatus.type === "warning" ? "text-amber-800" : "text-red-800"
                  }`}
                >
                  {submitStatus.message}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Form */}
        <div className="px-4 pb-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-4">
              <div>
                <Label htmlFor="modal-name" className="text-gray-700 font-medium text-sm mb-2 block">
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
                  className="h-12 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition-colors"
                />
              </div>

              <div>
                <Label htmlFor="modal-phone" className="text-gray-700 font-medium text-sm mb-2 block">
                  Номер телефона
                </Label>
                <Input
                  id="modal-phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+7 (999) 123-45-67"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="h-12 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition-colors"
                />
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                  Отправляем заявку...
                </div>
              ) : (
                <div className="flex items-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Оформить заявку
                </div>
              )}
            </Button>

            {/* Alternative Contact Methods */}
            <div className="space-y-3">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">или свяжитесь напрямую</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="h-10 hover:bg-blue-50 hover:border-blue-300 rounded-xl transition-all duration-200 font-medium bg-transparent text-amber-600 border-orange-400 border text-sm"
                  onClick={() => window.open("tel:+79780703665")}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Позвонить
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="h-10 hover:bg-green-50 hover:border-green-300 rounded-xl transition-all duration-200 font-medium text-sky-600 bg-sky-50 border-sky-400 border text-sm"
                  onClick={() => window.open("https://t.me/EnrikeTomas")}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Telegram
                </Button>
              </div>
            </div>
          </form>

          {/* Privacy Notice */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500 leading-relaxed">
              Нажимая "Оформить заявку", вы соглашаетесь с{" "}
              <span className="text-blue-600 hover:text-blue-700 cursor-pointer">обработкой персональных данных</span>
            </p>
          </div>

          {/* Benefits */}
          <div className="mt-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-3">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-blue-600 font-bold text-sm">БЕСПЛАТНО</div>
                <div className="text-xs text-gray-600">Вывоз шин</div>
              </div>
              <div>
                <div className="text-purple-600 font-bold text-sm">24/7</div>
                <div className="text-xs text-gray-600">Контроль</div>
              </div>
              <div>
                <div className="text-green-600 font-bold text-sm">100%</div>
                <div className="text-xs text-gray-600">Гарантия</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
