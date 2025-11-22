import fs from "fs"
import path from "path"
import type { Metadata } from "next"
import Link from "next/link"
import TariffSelector from "@/components/tariff-selector"

export const metadata: Metadata = {
  title: "Договор — OtelShin",
  description: "Договор оказания услуг хранения шин. Текст договора загружается из файла.",
  alternates: {
    canonical: "https://otelshin.vercel.app/dogovor",
  },
}

const dogovorPath = path.join(process.cwd(), "app", "dogovor", "Dogovor.md")
let contractText = ""
try {
  contractText = fs.readFileSync(dogovorPath, "utf8")
} catch (err) {
  // If file is missing on main, avoid build failure — show placeholder and log
  console.error("Dogovor.md not found:", err)
  contractText = "Текст договора временно недоступен."
}

export default function DogovorPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
          <h1 className="text-2xl lg:text-3xl font-bold mb-4">Договор оказания услуг хранения шин</h1>

          <pre className="whitespace-pre-wrap text-sm text-gray-700 bg-gray-50 p-4 rounded-md">
            {contractText}
          </pre>

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