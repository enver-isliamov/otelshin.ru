import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, User, ArrowRight, Clock, Sparkles } from "lucide-react"
import TariffSelector from "@/components/tariff-selector"
import { articlesData } from "@/lib/articles-data"

export const metadata: Metadata = {
  title: "Полезные статьи и советы о хранении шин в Симферополе | OtelShin",
  description:
    "Экспертные статьи о правильном сезонном хранении шин в Симферополе, детейлинге резины, советах для жителей многоэтажек и девушек-автомобилисток. Рекомендации специалистов OtelShin.",
  keywords:
    "статьи о шинах, хранение шин Симферополь советы, детейлинг шин, сезонная резина Крым, уход за шинами, OtelShin блог, хранение шин Киевский район",
  alternates: {
    canonical: "https://www.otelshin.ru/articles",
  },
}

export default function ArticlesPage() {
  const articlesList = Object.values(articlesData)

  return (
    <div className="py-12 lg:py-20 bg-gray-50/50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>База знаний OtelShin • Симферополь</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-extrabold text-gray-900 mb-4 lg:mb-6 tracking-tight">
            Полезные статьи о хранении и уходе за шинами
          </h1>
          <p className="text-base lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Советы экспертов для водителей Симферополя: как защитить резину от старения, почему нельзя захламлять балкон и как переобуваться без очередей и тяжестей.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {articlesList.map((article) => (
            <article
              key={article.slug}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-[16/10] bg-gray-100 overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-xs font-medium">
                    {article.category}
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center text-xs text-gray-500 mb-3">
                    <Calendar className="w-3.5 h-3.5 mr-1 text-gray-400" />
                    <span>{new Date(article.date).toLocaleDateString("ru-RU")}</span>
                    <span className="mx-2">•</span>
                    <Clock className="w-3.5 h-3.5 mr-1 text-gray-400" />
                    <span>{article.readTime}</span>
                  </div>

                  <h2 className="text-lg font-bold text-gray-900 mb-2.5 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {article.title}
                  </h2>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0 border-t border-gray-50 mt-auto flex items-center justify-between">
                <div className="flex items-center text-xs text-gray-500">
                  <User className="w-3.5 h-3.5 mr-1 text-gray-400" />
                  <span>{article.author}</span>
                </div>

                <Link
                  href={`/articles/${article.slug}`}
                  className="text-blue-600 hover:text-blue-700 font-semibold text-xs inline-flex items-center"
                >
                  Читать
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
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
