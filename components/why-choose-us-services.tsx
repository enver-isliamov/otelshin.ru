import { Shield, Settings, Users } from "lucide-react"

export default function WhyChooseUsServices() {
  const reasons = [
    {
      icon: Shield,
      title: "Безопасное хранение",
      description: "Современные складские помещения с контролем температуры и влажности, видеонаблюдение 24/7",
    },
    {
      icon: Settings,
      title: "Удобное управление",
      description: "Собственная система для отслеживания ваших шин, уведомления и онлайн кабинет",
    },
    {
      icon: Users,
      title: "Профессиональный сервис",
      description: "Опытная команда специалистов, индивидуальный подход к каждому клиенту",
    },
  ]

  const stats = [
    { label: "Клиентов", value: "500+", color: "text-blue-500" },
    { label: "Лет опыта", value: "5+", color: "text-green-500" },
    { label: "Гарантия", value: "100%", color: "text-purple-500" },
    { label: "Контроль", value: "24/7", color: "text-orange-500" },
  ]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left side - Why choose us */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Почему выбирают OtelShin?</h2>
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{reason.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Company info + stats */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">О компании OtelShin</h2>
              <div className="space-y-4 text-gray-600 mb-6">
                <p className="text-sm md:text-base leading-relaxed">
                  Мы специализируемся на профессиональном хранении шин с 2019 года. За это время мы обслужили более 200
                  клиентов и заработали репутацию надежного партнера в сфере автомобильных услуг.
                </p>
                <p className="text-sm md:text-base leading-relaxed">
                  Наша современная складская база оснащена системами контроля климата и автоматизированной системой для удобного управления заказами.
                </p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-xl text-center hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
