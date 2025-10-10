"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      name: "Денис Грошев",
      text: "Чёткий сервис! Нужно было где-то хранить шины после переезда в Симферополь. Нашел это объявление, быстро договорились по условиям. Энвер подъехал по адресу, на месте заключили договор, отдал шины. По окончании срока договора забрал шины в целости и сохранности. Рекомендую!",
      rating: 5,
      avatar: "https://10.img.avito.st/image/1/1.RBbXFLax_v8F01h3x35d_2G14vUF0-r9.zQkFmKZz6nKnAbk9TZ8NMct33L5tReInhWF0ZJCo0cQ?cqp=2.pGdjs5fBvl5-fB-fm84xxYDAkt8GM2Wgr1fOyxua9Q==?height=40&width=40",
      role: "Владелец Mazda CX-7",
    },
{
      name: "Виктория",
      text: "Отличная услуга! Энвер подъехал к подъезду дома в договоренное время, осмотрел шины, произвел фото фиксацию, спокойно ответил на поставленные вопросы. Составили договор на определенный срок хранения. Сам выгрузил и загрузил в автомобиль для перевозки. От меня, как заказчика, понадобилось только присутствие при передаче шин и оплата. Действительно очень полезная и важная услуга для девушек водителей !",
      rating: 5,
      avatar: "https://70.img.avito.st/image/1/1.gpsQk7axOHLCVJKZd9nxcaYyJHjCVCxw.ORqlS9PUqGmsJpWKD5cnz4BJbKa8S7mAVa7VHyYmePM?height=40&width=40",
      role: "Владелец Mitsubishi Lancer",
    },
{
      name: "Борис",
      text: "Энвер пунктуален , приехал по указанному мною адресу, забрал на хранение 4 шины, подписали договор хранения на 5 месяцев. Надеюсь на долговременное сотрудничество. С ним можно иметь дело",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Владелец Volkswagen Passat",
    },
  {
      name: "Сергей",
      text: "Приехали вовремя, все как договаривались по телефону. Мне сильно мешали колеса на лоджии. Рад, что быстро все прошло и в моем городе можно так хранить. Через год отзыв дополню, но пока исключительно положительные впечатления. Спасибо.",
      rating: 5,
      avatar: "https://40.img.avito.st/image/1/1.Tgd3urax9O6lfUYebsh_7cEb6OSlfeDs.q6JwuALwnhVUZ6EQI0JRzfNmZSLy2HE0U6lUs6YumlA?height=40&width=40",
      role: "Владелец Mercedes C-Class",
    },
    {
      name: "Лени",
      text: "Очень удобно, что сами приезжают забрать, для девочек очень удобная услуга) и есть договор.",
      rating: 5,
      avatar: "https://60.img.avito.st/image/1/1.XYFatbax52iIcnOUSYw2a-wU-2KIcvNq.p_XpMThC94NA8K5nx3lwrVyORcVN02arZiNstoFfhiw?height=40&width=40",
      role: "Владелец Skoda Yeti",
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
      name: "Арсен",
      text: "Очень удобная услуга, Вежливый исполнитель. Встреча состоялась быстро, без каких либо проблем👍🏻",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Владелец Volkswagen Passat",
    },
    {
      name: "Елена Морозова",
      text: "Пользуюсь услугами уже 3 года. Никаких проблем, всегда вежливое обслуживание и качественное хранение.",
      rating: 5,
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Владелец Volkswagen Polo",
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
    <section className="py-10 md:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Отзывы наших клиентов</h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            Более 100 довольных клиентов доверяют нам хранение своих шин
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="relative max-w-4xl mx-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {/* Main carousel container */}
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 mx-2 shadow-lg hover:shadow-xl transition-all duration-300">
                    {/* Rating stars */}
                    <div className="flex items-center justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current mr-1" />
                      ))}
                    </div>

                    {/* Quote */}
                    <div className="text-center mb-6">
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed italic font-medium">
                        "{testimonial.text}"
                      </p>
                    </div>

                    {/* Author info */}
                    <div className="flex items-center justify-center border-t border-gray-100 pt-4">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-4 border-2 border-blue-100 shadow-md"
                      />
                      <div className="text-center md:text-left">
                        <div className="font-bold text-gray-900 text-sm md:text-base">{testimonial.name}</div>
                        <div className="text-xs md:text-sm text-blue-600 font-medium">{testimonial.role}</div>
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
