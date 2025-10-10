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
            <div className="mt-4 flex items-center text-xs text-gray-500">
              <Sparkles className="w-4 h-4 mr-2" />
              Окно закроется автоматически
            </div>
          </div>
        )}

        {/* Header */}
        <div className="p-4 pb-2">
          <div className="text-center">
            <div className="inline-flex items-center px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium mb-2">
              Выбранный тариф
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">{tariff.name}</h3>
            <div className="flex items-center justify-center mb-1">
              <span className="text-xl font-bold text-blue-600">{tariff.price}</span>
              <span className="text-gray-500 ml-1 text-sm">₽/месяц</span>
            </div>
            <p className="text-xs text-gray-600 bg-gray-50 rounded-lg px-2 py-1">{tariff.description}</p>
          </div>
        </div>

        

        {/* Tariff Card */}

        {/* Status Message */}
        {submitStatus.type && submitStatus.type !== "success" && (
          <div className="mx-4 mb-3">
            <div
              className={`p-3 rounded-lg flex items-start space-x-2 ${
                submitStatus.type === "warning"
                  ? "bg-amber-50 border border-amber-200"
                  : "bg-red-50 border border-red-200"
              }`}
            >
              <AlertTriangle
                className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                  submitStatus.type === "warning" ? "text-amber-600" : "text-red-600"
                }`}
              />
              <div>
                <p
                  className={`text-xs font-medium ${
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
        <div className="px-4 pb-3">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-4">
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
                  placeholder="+7 (999) 123-45-67"
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

            {/* Alternative Contact Methods */}
            <div className="space-y-3">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-100"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-3 bg-white text-gray-500 text-xs">или свяжитесь напрямую</span>
                </div>
              </div>

              <div className="flex gap-2 justify-center">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="w-12 h-10 hover:bg-blue-50 hover:border-blue-300 rounded-lg transition-all duration-200 bg-transparent text-blue-600 border-blue-300 border p-0"
                  onClick={() => window.open("tel:+79780703665")}
                >
                  <Phone className="w-4 h-4" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="w-12 h-10 hover:bg-green-50 hover:border-green-300 rounded-lg transition-all duration-200 text-green-600 bg-green-50 border-green-300 border p-0"
                  onClick={() => window.open("https://t.me/EnrikeTomas")}
                >
                  <MessageCircle className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </form>

          {/* Privacy Notice */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-400 leading-relaxed">
              Нажимая "Оформить заявку", вы соглашаетесь с{" "}
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
