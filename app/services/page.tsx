import type { Metadata } from "next"
import ServicesClient from "./ServicesClient"

export const metadata: Metadata = {
  title: "Услуги сезонного хранения шин в Симферополе | Бесплатный забор от подъезда",
  description:
    "Полный спектр услуг хранения шин в Симферополе: бесплатный вывоз от дома/офиса, экспресс-забор от 30 минут, комплекс «Мойка + Сушка + Детейлинг-чернение», доставка в шиномонтаж. Тарифы от 500 ₽/мес. ☎️ +7 (979) 066-20-89",
  keywords:
    "услуги хранения шин Симферополь, сезонное хранение шин, хранение колес Симферополь, OtelShin услуги, шиномонтаж Симферополь, хранение резины, отель шин, шинный отель, склад шин, забор шин от дома, детейлинг шин Симферополь",
  authors: [{ name: "OtelShin" }],
  creator: "OtelShin",
  publisher: "OtelShin",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.otelshin.ru/services" },
}

export default function ServicesPage() {
  return <ServicesClient />
}
