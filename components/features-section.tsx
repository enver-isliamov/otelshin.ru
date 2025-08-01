import { Shield, Clock, Trophy, Headphones } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "Гарантия безопасности",
      description: "100% сохранность ваших шин",
      bgColor: "bg-green-50",
      iconColor: "text-green-500",
      borderColor: "border-green-200",
    },
    {
      icon: Clock,
      title: "Быстрое обслуживание",
      description: "Прием и выдача за 15 минут",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
      borderColor: "border-blue-200",
    },
    {
      icon: Trophy,
      title: "Лучшие условия",
      description: "Оптимальная температура и влажность",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-500",
      borderColor: "border-purple-200",
    },
    {
      icon: Headphones,
      title: "Поддержка 24/7",
      description: "Всегда готовы помочь",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-500",
      borderColor: "border-orange-200",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`text-center p-3 md:p-6 rounded-xl border ${feature.bgColor} ${feature.borderColor} hover:shadow-md transition-all duration-300`}
            >
              <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-4 shadow-sm">
                <feature.icon className={`w-4 h-4 md:w-6 md:h-6 ${feature.iconColor}`} />
              </div>
              <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-xs md:text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
