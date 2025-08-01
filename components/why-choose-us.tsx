import { Thermometer, Shield, Bell, Headphones, Eye, CheckCircle, Clock, Trophy } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Thermometer,
      title: "Климат-контроль",
      description: "Оптимальные условия",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
      borderColor: "border-blue-200",
    },
    {
      icon: Shield,
      title: "Безопасность",
      description: "100% гарантия сохранности",
      bgColor: "bg-green-50",
      iconColor: "text-green-500",
      borderColor: "border-green-200",
    },
    {
      icon: Eye,
      title: "24/7 охрана",
      description: "Круглосуточное видеонаблюдение",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-500",
      borderColor: "border-purple-200",
    },
    {
      icon: Bell,
      title: "Напоминания",
      description: "Автоматические уведомления",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-500",
      borderColor: "border-orange-200",
    },
    {
      icon: Headphones,
      title: "Поддержка",
      description: "Круглосуточная помощь",
      bgColor: "bg-red-50",
      iconColor: "text-red-500",
      borderColor: "border-red-200",
    },
    {
      icon: CheckCircle,
      title: "Качество",
      description: "Профессиональный сервис",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-500",
      borderColor: "border-indigo-200",
    },
    {
      icon: Clock,
      title: "Быстрое обслуживание",
      description: "Прием и выдача за 15 минут",
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-500",
      borderColor: "border-cyan-200",
    },
    {
      icon: Trophy,
      title: "Лучшие условия",
      description: "Оптимальная температура и влажность",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-500",
      borderColor: "border-amber-200",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Почему выбирают нас?</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Современный подход к хранению шин с использованием передовых технологий и индивидуальным сервисом
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`text-center p-3 md:p-6 rounded-xl border ${reason.bgColor} ${reason.borderColor} hover:shadow-md transition-all duration-300`}
            >
              <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-4 shadow-sm">
                <reason.icon className={`w-4 h-4 md:w-6 md:h-6 ${reason.iconColor}`} />
              </div>
              <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2 text-gray-900">{reason.title}</h3>
              <p className="text-xs md:text-sm text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
