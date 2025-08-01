import { Car, Package, Shield, Clock } from "lucide-react"

export default function OurServicesGrid() {
  const services = [
    {
      icon: Car,
      title: "Хранение шин",
      description: "Профессиональное сезонное хранение в оптимальных условиях",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      icon: Package,
      title: "Доставка",
      description: "Удобная доставка шин к вам домой или в автосервис",
      bgColor: "bg-green-50",
      iconColor: "text-green-500",
    },
    {
      icon: Shield,
      title: "Мойка шин",
      description: "Профессиональная мойка и подготовка к хранению",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-500",
    },
    {
      icon: Clock,
      title: "Поддержка",
      description: "Круглосуточная поддержка и консультации специалистов",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-500",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-lg text-gray-600">Полный спектр услуг для автовладельцев в одном месте</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} rounded-xl p-6 text-center hover:shadow-md transition-all duration-300`}
            >
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-sm">
                <service.icon className={`w-6 h-6 ${service.iconColor}`} />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
