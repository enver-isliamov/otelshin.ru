import { Heart, Building2, Clock } from "lucide-react"

export default function TargetAudience() {
  const audiences = [
    {
      icon: Heart,
      title: "Девушкам и автоледи",
      description: "Никаких тяжестей и грязных рук. Комплект шин весит 70+ кг — специалист сам аккуратно спустит, погрузит и увезет колеса прямо от вашего подъезда.",
      iconColor: "text-rose-600",
      bgColor: "bg-rose-50",
      badge: "Забота и комфорт",
    },
    {
      icon: Building2,
      title: "Жителям многоэтажек и ЖК",
      description: "Освободите свой балкон, кладовку и коридор от запаха резины и грязи. Сохраните чистоту, порядок и эстетику в квартире круглый год.",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50",
      badge: "Чистый балкон",
    },
    {
      icon: Clock,
      title: "Занятым автомобилистам",
      description: "Не тратьте время на поездки и погрузку. Особенно быстрый забор в Киевском районе (Москольцо, пр. Победы, Кечкеметская, Марьино) за 30 минут.",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50",
      badge: "Экономия времени",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Кому идеально подходит наш сервис</h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Мы берем на себя всю тяжелую и грязную работу, чтобы хранение колес в Симферополе приносило вам только спокойствие.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="bg-gray-50/70 border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:bg-white transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 ${audience.bgColor} rounded-xl flex items-center justify-center`}
                  >
                    <audience.icon className={`w-6 h-6 ${audience.iconColor}`} />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white border border-gray-200 text-gray-700">
                    {audience.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{audience.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{audience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
