"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      name: "Алексей Петров",
      text: "Отличный сервис! Уже второй год храню шины здесь. Всё всегда в порядке, персонал вежливый.",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Владелец BMW X5",
    },
    {
      name: "Мария Сидорова",
      text: "Очень удобно! Система позволяет отслеживать свои шины онлайн. Доставка работает отлично.",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Владелец Audi A4",
    },
    {
      name: "Дмитрий Козлов",
      text: "Рекомендую всем! Цены адекватные, качество на высоте. Особенно нравится что можно заказать дополнительные услуги.",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Владелец Toyota Camry",
    },
    {
      name: "Елена Морозова",
      text: "Пользуюсь услугами уже 3 года. Никаких проблем, всегда вежливое обслуживание и качественное хранение.",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Владелец Volkswagen Polo",
    },
    {
      name: "Сергей Волков",
      text: "Современный подход к хранению шин. Уведомления приходят вовремя, можно отслеживать статус онлайн.",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Владелец Mercedes C-Class",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 4000)

    return () => clearInterval(interval)
  }, [currentIndex, isAutoPlaying])

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-2">Отзывы клиентов</h2>
          <p className="text-sm md:text-lg text-gray-600">Что говорят о нас наши клиенты</p>
        </div>

        <div className="relative max-w-3xl mx-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {/* Main carousel container */}
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-4 md:p-6 mx-2 shadow-sm">
                    {/* Rating stars */}
                    <div className="flex items-center justify-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Quote */}
                    <div className="text-center mb-4">
                      <p className="text-gray-700 text-xs md:text-sm leading-relaxed italic">"{testimonial.text}"</p>
                    </div>

                    {/* Author info */}
                    <div className="flex items-center justify-center">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-3 border-2 border-white shadow-sm"
                      />
                      <div className="text-center md:text-left">
                        <div className="font-semibold text-gray-900 text-xs md:text-sm">{testimonial.name}</div>
                        <div className="text-xs text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-3 bg-white rounded-full p-1.5 md:p-2 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-3 bg-white rounded-full p-1.5 md:p-2 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-4 space-x-1.5">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-3 w-full bg-gray-200 rounded-full h-0.5 overflow-hidden">
            <div
              className="bg-blue-600 h-0.5 rounded-full transition-all duration-100 ease-linear"
              style={{
                width: isAutoPlaying ? "100%" : "0%",
                animation: isAutoPlaying ? "progress 4s linear infinite" : "none",
              }}
            />
          </div>
        </div>

        {/* Mobile swipe hint */}
        <div className="md:hidden text-center mt-3">
          <p className="text-xs text-gray-500">Свайпните для просмотра других отзывов</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </section>
  )
}
