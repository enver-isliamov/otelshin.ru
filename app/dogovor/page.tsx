import type { Metadata } from "next"
import Link from "next/link"
import TariffSelector from "@/components/tariff-selector"

export const metadata: Metadata = {
  title: "Договор — OtelShin",
  description: "Договор оказания услуг хранения шин. Текст договора будет добавлен позже.",
  alternates: {
    canonical: "https://otelshin.vercel.app/dogovor",
  },
}

export default function DogovorPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
          <h1 className="text-2xl lg:text-3xl font-bold mb-4">Договор оказания услуг хранения шин</h1>

          <p className="text-gray-600 mb-4">
            Здесь будет размещён полный текст договора между OtelShin и клиентом. Вы можете заменить этот текст
            на ваш окончательный вариант договора в файле app/dogovor/page.tsx.
          </p>

          <section className="mb-4">
            <h2 className="font-semibold mb-2">1. Общие положения</h2>
            <p className="text-gray-600">Текст раздела «Общие положения» будет добавлен здесь.</p>
          </section>

          <section className="mb-4">
            <h2 className="font-semibold mb-2">2. Услуги и оплата</h2>
            <p className="text-gray-600">Текст раздела «Услуги и оплата» будет добавлен здесь.</p>
          </section>

          {/* Tariff selector (повторяет блок "Выберите тариф хранения" с других страниц) */}
          <div className="mt-6">
            <TariffSelector />
          </div>

          <div className="mt-6 flex space-x-4">
            <Link href="/about" className="text-blue-600 hover:underline">О нас</Link>
            <Link href="/contacts" className="text-blue-600 hover:underline">Контакты</Link>
          </div>
        </div>
      </div>
    </div>
  )
}