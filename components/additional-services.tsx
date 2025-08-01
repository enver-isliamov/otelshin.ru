import { Wrench, Car, Shield, Package } from "lucide-react"

export default function AdditionalServices() {
  const services = [
    {
      icon: Wrench,
      title: "Ремонт колес",
      description: "Профессиональный ремонт проколов и порезов",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      icon: Car,
      title: "Балансировка",
      description: "Точная балансировка колес на современном оборудовании",
      bgColor: "bg-green-50",
      iconColor: "text-green-500",
    },
    {
      icon: Shield,
      title: "Консервация",
      description: "Специальная обработка шин перед хранением",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-500",
    },
    {
      icon: Package,
      title: "Упаковка",
      description: "Профессиональная упаковка в специальные чехлы",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-500",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl ${service.bgColor} text-center hover:shadow-md transition-all duration-300`}
            >
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mx-auto mb-3 shadow-sm">
                <service.icon className={`w-5 h-5 ${service.iconColor}`} />
              </div>
              <h3 className="text-base font-semibold mb-2 text-gray-900">{service.title}</h3>
              <p className="text-xs text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
