"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    carNumber: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Оставить заявку</h2>
            <p className="text-lg text-gray-600">Заполните форму и мы свяжемся с вами для уточнения деталей</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">Имя *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="phone">Телефон *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="carNumber">Гос. номер</Label>
                <Input
                  id="carNumber"
                  name="carNumber"
                  type="text"
                  placeholder="А123БВ123"
                  value={formData.carNumber}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="service">Услуга</Label>
                <Input
                  id="service"
                  name="service"
                  type="text"
                  placeholder="Хранение шин"
                  value={formData.service}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="message">Сообщение</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Дополнительная информация..."
                value={formData.message}
                onChange={handleChange}
                className="mt-1"
                rows={4}
              />
            </div>

            <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
              Отправить заявку
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
