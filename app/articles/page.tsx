import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, User, ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import TariffSelector from "@/components/tariff-selector"

export const metadata: Metadata = {
  title: "Полезные статьи о хранении шин | OtelShin - Советы экспертов",
  description:
    "Полезные статьи и советы экспертов о правильном хранении шин, выборе сезонной резины, уходе за колесами. Профессиональные рекомендации от OtelShin.",
  keywords:
    "статьи о шинах, хранение шин советы, сезонная резина, уход за шинами, OtelShin блог, автомобильные шины",
}

export default function ArticlesPage() {
  const articles = [
    {
      id: 1,
      title: "Как правильно хранить шины: полное руководство",
      excerpt: "Узнайте все секреты правильного хранения шин, чтобы продлить их срок службы и сохранить качество.",
      date: "2024-01-15",
      author: "Эксперт OtelShin",
      readTime: "1 мин",
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400",
      slug: "kak-pravilno-hranit-shiny",
    },
    {
      id: 2,
      title: "Когда менять летние шины на зимние в Крыму",
      excerpt: "Оптимальные сроки смены шин в климатических условиях Крыма и Симферополя.",
      date: "2024-01-10",
      author: "Эксперт OtelShin",
      readTime: "3 мин",
      image: "https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=400",
      slug: "kogda-menyat-shiny-v-krymu",
    },
    {
      id: 3,
      title: "5 признаков того, что шины пора менять",
      excerpt: "Как определить износ шин и понять, когда пришло время покупать новые.",
      date: "2024-01-05",
      author: "Эксперт OtelShin",
      readTime: "2 мин",
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400",
      slug: "priznaki-iznosa-shin",
    },
    {
      id: 4,
      title: "забота о ваших колесах в OtelShin.ru",
      excerpt: "Каждый год дважды автовладельцы сталкиваются с одной и той же проблемой:",
      date: "2024-01-05",
      author: "Эксперт OtelShin",
      readTime: "4 мин",
      image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=400",
      slug: "zabota-o-shinah",
    },
  ]

  return (
    <div className="py-12 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Полезные статьи о шинах
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Экспертные советы и рекомендации по выбору, использованию и хранению автомобильных шин от специалистов OtelShin
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-video bg-gray-200 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{new Date(article.date).toLocaleDateString('ru-RU')}</span>
                  <span className="mx-2">•</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{article.readTime}</span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-2" />
                    <span>{article.author}</span>
                  </div>
                  
                  <Link
                    href={`/articles/${article.slug}`}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
                  >
                    Читать
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Tariff Selector */}
        <TariffSelector />
      </div>
    </div>
  )
}
