"use client"

import { MessengerButtonsFull } from "@/components/messenger-buttons"

export default function AboutCTA() {
  const message = "Здравствуйте! Хочу узнать подробнее о компании OtelShin и хранении шин."

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 lg:p-12 text-center">
      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Хотите узнать больше о OtelShin?</h2>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        Свяжитесь с нами для получения подробной консультации о наших услугах и условиях хранения шин в Симферополе
      </p>
      <div className="max-w-sm mx-auto">
        <MessengerButtonsFull message={message} location="about_cta" />
      </div>
    </div>
  )
}
