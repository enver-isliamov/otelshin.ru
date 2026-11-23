import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import TariffSelector from "@/components/tariff-selector"
import { articlesData } from "@/lib/articles-data"

type ArticleParams = {
  slug: string
}

export async function generateMetadata({ params }: { params: Promise<ArticleParams> }): Promise<Metadata> {
  const { slug } = await params
  const article = articlesData[slug]

  if (!article) {
    return {
      title: "Статья не найдена | OtelShin",
    }
  }

  return {
    title: `${article.title} | OtelShin Симферополь`,
    description: article.description || article.excerpt,
    alternates: {
      canonical: `https://otelshin.ru/articles/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: `https://otelshin.ru/articles/${article.slug}`,
      images: [
        {
          url: article.image,
          width: 800,
          height: 500,
          alt: article.title,
        },
      ],
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(articlesData).map((slug) => ({ slug }))
}

export default async function ArticlePage({ params }: { params: Promise<ArticleParams> }) {
  const { slug } = await params
  const article = articlesData[slug]

  if (!article) {
    notFound()
  }

  // Schema.org Article metadata for Google, Yandex and AI indexing
  const schemaArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image,
    author: {
      "@type": "Organization",
      name: "OtelShin",
      url: "https://otelshin.ru",
    },
    publisher: {
      "@type": "Organization",
      name: "OtelShin",
      logo: {
        "@type": "ImageObject",
        url: "https://otelshin.ru/placeholder-logo.png",
      },
    },
    datePublished: article.date,
    dateModified: article.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://otelshin.ru/articles/${article.slug}`,
    },
  }

  return (
    <div className="py-10 lg:py-16 bg-white">
      {/* Schema.org Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }}
      />

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb / Back Button */}
          <div className="mb-6">
            <Link href="/articles">
              <Button variant="outline" size="sm" className="rounded-xl border-gray-200 text-gray-700 hover:bg-gray-50">
                <ArrowLeft className="w-4 h-4 mr-1.5" />
                Все статьи
              </Button>
            </Link>
          </div>

          {/* Article Header */}
          <div className="mb-8">
            <div className="aspect-[16/9] bg-gray-100 rounded-2xl overflow-hidden mb-6 shadow-sm border border-gray-100">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-wrap items-center text-xs sm:text-sm text-gray-500 mb-4 gap-y-2">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1 text-gray-400" />
                <span>{new Date(article.date).toLocaleDateString("ru-RU")}</span>
              </div>
              <span className="mx-2.5 text-gray-300">•</span>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1 text-gray-400" />
                <span>{article.readTime}</span>
              </div>
              <span className="mx-2.5 text-gray-300">•</span>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1 text-gray-400" />
                <span>{article.author}</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              {article.title}
            </h1>
          </div>

          {/* Article HTML Content */}
          <div
            className="prose prose-blue prose-base sm:prose-lg max-w-none mb-12 text-gray-700 leading-relaxed 
              prose-headings:font-bold prose-headings:text-gray-900 prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
              prose-h3:text-lg sm:prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
              prose-ul:my-4 prose-li:my-1.5 prose-strong:text-gray-900"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Tariff Selector & CTA */}
          <div className="pt-8 border-t border-gray-100">
            <TariffSelector />
          </div>
        </div>
      </div>
    </div>
  )
}
