"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Сколько стоит сезонное хранение шин в Симферополе?",
      answer:
        "Стоимость хранения комплекта из 4 шин зависит от радиуса: R13–R16 — 500 ₽ в месяц, R17–R19 — 600 ₽ в месяц, R20 и более — 700 ₽ в месяц. Вывоз шин от вашего подъезда, дома, офиса или шиномонтажа осуществляется БЕСПЛАТНО при сдаче на сезон.",
    },
    {
      question: "Откуда вы можете забрать шины? Нужно ли мне их носить?",
      answer:
        "Мы забираем шины из любого удобного для вас места: от подъезда дома, из офиса, с паркинга или прямо из бокса шиномонтажа, где вы переобулись. Вам не нужно пачкать руки и поднимать тяжести — наш специалист сделает всю погрузку сам.",
    },
    {
      question: "Как быстро вы приезжаете по Симферополю?",
      answer:
        "Мы выезжаем во все районы Симферополя и ближайшие пригороды. Среднее время подачи машины на экспресс-забор составляет от 30 минут с момента подтверждения заявки.",
    },
    {
      question: "Что входит в детейлинг-уход и чернение резины?",
      answer:
        "Комплекс включает бесконтактную глубокую мойку от дорожной и тормозной грязи, полную сушку и консервацию специальным полимерным составом. Это защищает резину от пересыхания, микротрещин и ультрафиолета. Стоимость за 4 колеса: R13–R16 — 600 ₽, R17–R19 — 800 ₽, R20+ — 1 000 ₽.",
    },
    {
      question: "Как забрать колеса, когда придет время переобуваться?",
      answer:
        "Вам не нужно везти грязные колеса в своем багажнике. Вы можете заказать платную доставку чистых колес ко времени прямо к боксу вашего шиномонтажа в черте города всего за 500 ₽, либо мы бесплатно запишем вас к проверенным мастерам-партнерам без очередей.",
    },
    {
      question: "В каких условиях хранятся шины?",
      answer:
        "Шины хранятся в закрытом чистом сухом помещении с климат-контролем при постоянной температуре +10...+20°C и влажности 50-70%, вдали от прямых солнечных лучей и химикатов, в строгом соответствии с ГОСТ правилами сезонного хранения колес.",
    },
    {
      question: "Заключается ли официальный договор?",
      answer:
        "Да. С каждым клиентом оформляется официальный договор ответственного хранения и акт приема-передачи с фиксацией состояния резины. Все условия прозрачны и юридически защищены.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Schema.org FAQPage for Google, Yandex and AI search engines
  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <section className="py-12 md:py-16 bg-white w-full max-w-full overflow-hidden" id="faq">
      {/* Schema.org Injection for AI Search Bots */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Часто задаваемые вопросы</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-balance">
            Все, что нужно знать о хранении шин в OtelShin
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto text-balance">
            Ответы на популярные вопросы об условиях хранения, бесплатном вывозе и тарифах в Симферополе
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="border border-gray-200/80 rounded-2xl overflow-hidden transition-all duration-200 hover:border-blue-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between space-x-4 bg-gray-50/50 hover:bg-blue-50/30 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-sm md:text-base leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "transform rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 py-4 bg-white text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
