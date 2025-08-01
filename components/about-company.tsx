import { Button } from "@/components/ui/button"

export default function AboutCompany() {
  const stats = [
    { label: "Клиентов", value: "100+", color: "text-blue-500" },
    { label: "Лет опыта", value: "5+", color: "text-green-500" },
    { label: "Гарантия", value: "100%", color: "text-purple-500" },
    { label: "Контроль", value: "24/7", color: "text-orange-500" },
  ]

  return (
    <section className="py-12 md:py-16 bg-white" data-section="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">О компании OtelShin</h2>
            <div className="space-y-4 text-gray-600 mb-8">
              <p className="text-sm md:text-base leading-relaxed">
                Мы специализируемся на профессиональном хранении шин с 2019 года. За это время мы обслужили более 100
                клиентов и заработали репутацию надежного партнера в сфере автомобильных услуг.
              </p>
              <p className="text-sm md:text-base leading-relaxed">
                Наша современная складская база оснащена системами контроля климата, видеонаблюдения и
                автоматизированной системой для удобного управления заказами.
              </p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">Узнать больше</Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 md:p-6 rounded-xl text-center hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
