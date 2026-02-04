import type { Metadata } from "next"
import ContactsClientPage from "./ContactsClientPage"

export const metadata: Metadata = {
  title: "Контакты OtelShin - Хранение шин в Симферополе | Телефон, адрес, режим работы",
  description:
    "Свяжитесь с OtelShin для хранения шин в Симферополе. ☎️ +7 (979) 066-20-89, Telegram @EnrikeTomas. Работаем ежедневно 9:00-22:00. Выезжаем по всему городу.",
  keywords: "OtelShin контакты, телефон хранение шин Симферополь, адрес OtelShin, режим работы, связаться OtelShin",
  authors: [{ name: "OtelShin" }],
  creator: "OtelShin",
  publisher: "OtelShin",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Контакты OtelShin - Хранение шин в Симферополе",
    description: "Свяжитесь с нами: ☎️ +7 (979) 066-20-89, Telegram @EnrikeTomas. Работаем ежедневно 9:00-22:00",
    type: "website",
    locale: "ru_RU",
    siteName: "OtelShin",
  },
  alternates: {
    canonical: "https://www.otelshin.ru/contacts",
  },
}

export default function ContactsPage() {
  return <ContactsClientPage />
}
