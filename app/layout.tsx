import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import MobileBottomNav from "@/components/mobile-bottom-nav"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "CarMan - Профессиональное хранение шин в Симферополе",
  description:
    "Решаем проблему хранение ваших Шин, Колес, Дисков, Резины, Покрышек. Вывоз шины прямо от дома или офиса на наш счёт.",
  keywords: "хранение шин, шиномонтаж, Симферополь, сезонное хранение, автосервис, CarMan",
  authors: [{ name: "CarMan" }],
  creator: "CarMan",
  publisher: "CarMan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "CarMan - Профессиональное хранение шин",
    description: "Современный сервис хранения шин в Симферополе с вывозом на дом",
    type: "website",
    locale: "ru_RU",
    url: "https://carman.ru",
    siteName: "CarMan",
  },
  twitter: {
    card: "summary_large_image",
    title: "CarMan - Профессиональное хранение шин",
    description: "Современный сервис хранения шин в Симферополе с вывозом на дом",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "CarMan",
  },
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2563eb" },
    { media: "(prefers-color-scheme: dark)", color: "#1d4ed8" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CarMan" />
        <meta name="application-name" content="CarMan" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-tap-highlight" content="no" />
      </head>
      <body className={`${inter.className} pb-16 md:pb-0`}>
        <Header />
        <main>{children}</main>
        <div className="hidden md:block">
          <Footer />
        </div>
        <MobileBottomNav />
      </body>
    </html>
  )
}
