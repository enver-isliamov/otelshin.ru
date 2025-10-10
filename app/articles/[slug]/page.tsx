import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Calendar, User, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import TariffSelector from "@/components/tariff-selector"

// Данные статей (в реальном проекте это может быть база данных)
const articles = {
  "kak-pravilno-hranit-shiny": {
    title: "Как правильно хранить шины: полное руководство",
    content: `
      <h2>Основные правила хранения шин</h2>
      <p>Правильное хранение шин - это залог их долговечности и безопасности. Неправильное хранение может привести к деформации, растрескиванию и потере эксплуатационных свойств.</p>
      
      <h3>1. Подготовка к хранению</h3>
      <p>Перед помещением шин на хранение необходимо:</p>
      <ul>
        <li>Тщательно очистить от грязи и камней</li>
        <li>Проверить давление (для шин с дисками)</li>
        <li>Обработать специальными составами</li>
      </ul>

      <h3>2. Условия хранения</h3>
      <p>Идеальные условия для хранения шин:</p>
      <ul>
        <li>Температура: от -30°C до +35°C</li>
        <li>Влажность: 50-80%</li>
        <li>Отсутствие прямых солнечных лучей</li>
        <li>Хорошая вентиляция</li>
      </ul>

      <h3>3. Способы хранения</h3>
      <p>В зависимости от типа шин выбирается способ хранения:</p>
      <ul>
        <li><strong>Шины без дисков:</strong> вертикально, с периодическим поворотом</li>
        <li><strong>Шины с дисками:</strong> горизонтально или подвешенными</li>
      </ul>
    `,
    date: "2024-01-15",
    author: "Эксперт OtelShin",
    readTime: "5 мин",
    image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  "kogda-menyat-shiny-v-krymu": {
    title: "Когда менять летние шины на зимние в Крыму",
    content: `
      <h2>Особенности климата Крыма</h2>
      <p>Крым имеет умеренно-континентальный климат с мягкой зимой, что создает особые условия для использования автомобильных шин.</p>
      
      <h3>Оптимальные сроки замены</h3>
      <p>В Симферополе и других городах Крыма рекомендуется:</p>
      <ul>
        <li><strong>Переход на зимние шины:</strong> конец ноября - начало декабря</li>
        <li><strong>Переход на летние шины:</strong> середина - конец марта</li>
      </ul>

      <h3>Факторы, влияющие на выбор времени</h3>
      <ul>
        <li>Среднесуточная температура ниже +7°C</li>
        <li>Прогноз погоды на ближайшие недели</li>
        <li>Интенсивность использования автомобиля</li>
      </ul>
    `,
    date: "2024-01-10",
    author: "Эксперт OtelShin",
    readTime: "3 мин",
    image: "https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  "priznaki-iznosa-shin": {
    title: "5 признаков того, что шины пора менять",
    content: `
      <h2>Когда пора менять шины?</h2>
      <p>Своевременная замена шин - это вопрос безопасности. Изношенные шины увеличивают тормозной путь и снижают управляемость автомобиля.</p>
      
      <h3>1. Глубина протектора</h3>
      <p>Минимально допустимая глубина протектора:</p>
      <ul>
        <li>Летние шины: 1.6 мм</li>
        <li>Зимние шины: 4 мм</li>
      </ul>

      <h3>2. Неравномерный износ</h3>
      <p>Признаки проблем с подвеской или развал-схождением.</p>

      <h3>3. Трещины и порезы</h3>
      <p>Видимые повреждения боковины или протектора.</p>

      <h3>4. Возраст шин</h3>
      <p>Рекомендуется замена через 6-10 лет независимо от износа.</p>

      <h3>5. Вибрация при движении</h3>
      <p>Может указывать на деформацию или дисбаланс.</p>
    `,
    date: "2024-01-05",
    author: "Эксперт OtelShin",
    readTime: "4 мин",
    image: "https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
}

type ArticleParams = {
  slug: string
}

export async function generateMetadata({ params }: { params: ArticleParams }): Promise<Metadata> {
  const article = articles[params.slug as keyof typeof articles]
  
  if (!article) {
    return {
      title: "Статья не найдена | OtelShin",
    }
  }

  return {
    title: `${article.title} | OtelShin`,
    description: article.content.replace(/<[^>]*>/g, '').substring(0, 160),
  }
}

export default function ArticlePage({ params }: { params: ArticleParams }) {
  const article = articles[params.slug as keyof typeof articles]

  if (!article) {
    notFound()
  }

  return (
    <div className="py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/articles">
              <Button variant="outline" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Назад к статьям
              </Button>
            </Link>
          </div>

          {/* Article Header */}
          <div className="mb-8">
            <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden mb-6">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{new Date(article.date).toLocaleDateString('ru-RU')}</span>
              <span className="mx-2">•</span>
              <User className="w-4 h-4 mr-1" />
              <span>{article.author}</span>
              <span className="mx-2">•</span>
              <Clock className="w-4 h-4 mr-1" />
              <span>{article.readTime}</span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {article.title}
            </h1>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>

          {/* Tariff Selector */}
          <TariffSelector />
        </div>
      </div>
    </div>
  )
}