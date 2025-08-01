import { User, Clock } from "lucide-react"

export default function AdditionalInfo() {
  const infoItems = [
    {
      icon: User,
      title: "Личный кабинет",
      description: "Информация о Ваших шинах доступна онлайн",
    },
    {
      icon: Clock,
      title: "Гибкий возврат",
      description: "Забирайте шины в любой момент",
    },
  ]

  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Что еще стоит знать?</h2>
          </div>

          <div className="space-y-3">
            {infoItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
