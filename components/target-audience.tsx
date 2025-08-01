import { User, Building, Truck } from "lucide-react"

export default function TargetAudience() {
  const audiences = [
    {
      icon: User,
      title: "Автовладельцы",
      description: "удобное хранение шин",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Building,
      title: "Автосервисы",
      description: "оптимизация пространства",
      iconColor: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Truck,
      title: "Компании по прокату",
      description: "управление автопарком",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ]

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Кому будут полезны наши услуги</h2>
        </div>

        <div className="max-w-md mx-auto space-y-3">
          {audiences.map((audience, index) => (
            <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div
                className={`w-10 h-10 ${audience.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}
              >
                <audience.icon className={`w-5 h-5 ${audience.iconColor}`} />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-gray-900">{audience.title}</h3>
                <p className="text-sm text-gray-600">{audience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
