import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import MobileBottomNav from "@/components/mobile-bottom-nav"
import MetrikaTracker from "@/components/metrika-tracker"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.otelshin.ru"),
  title: {
    default: "ХРАНЕНИЕ ШИН в Симферополе — OtelShin | Бесплатный забор от подъезда, офиса или шиномонтажа",
    template: "%s | OtelShin",
  },
  description:
    "Сезонное хранение шин и колес в Симферополе от 500 ₽/мес. Бесплатный экспресс-выезд от 30 минут: заберем от подъезда, офиса, шиномонтажа или любого удобного места. Мойка, сушка и детейлинг-чернение.",
  keywords:
    "хранение шин Симферополь, сезонное хранение шин, отель шин Симферополь, шинный отель, хранение колес Симферополь, забор шин от дома Симферополь, вывоз шин Симферополь, где хранить резину Симферополь, детейлинг шин Симферополь, хранение резины цена Симферополь, OtelShin, шиномонтаж Симферополь",
  authors: [{ name: "OtelShin" }],
  creator: "OtelShin",
  publisher: "OtelShin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://www.otelshin.ru",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "ХРАНЕНИЕ ШИН в Симферополе — OtelShin",
    description:
      "Бесплатный вывоз колес от подъезда, офиса или шиномонтажа по всему Симферополю от 30 минут. Вам не нужно таскать тяжести и пачкать салон. Тарифы от 500 ₽/мес.",
    type: "website",
    locale: "ru_RU",
    url: "https://www.otelshin.ru",
    siteName: "OtelShin",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OtelShin - сезонное хранение шин в Симферополе",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ХРАНЕНИЕ ШИН в Симферополе — OtelShin",
    description: "Бесплатный вывоз колес прямо от подъезда, офиса или шиномонтажа по всему Симферополю.",
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
    title: "OtelShin",
  },
  verification: {
    yandex: "e239720fff026ba2",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2563eb" },
    { media: "(prefers-color-scheme: dark)", color: "#1d4ed8" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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
        <meta name="apple-mobile-web-app-title" content="OtelShin" />
        <meta name="application-name" content="OtelShin" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="yandex-verification" content="8e61cae97ecde44c" />

        {/* Structured Data (Schema.org) for LocalBusiness & Automotive Service without revealing private home address */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              name: "OtelShin — Шинный отель в Симферополе",
              alternateName: ["Отель Шин Симферополь", "OtelShin"],
              description:
                "Сервис сезонного хранения и детейлинг-ухода за шинами и колесами в Симферополе с бесплатным забором от подъезда, офиса или шиномонтажа. Экспресс-выезд от 30 минут.",
              url: "https://www.otelshin.ru",
              telephone: "+79790662089",
              priceRange: "500-1000 RUB",
              address: {
                "@type": "PostalAddress",
                addressLocality: "г. Симферополь",
                addressRegion: "Республика Крым",
                addressCountry: "RU",
              },
              areaServed: {
                "@type": "City",
                name: "Симферополь",
              },
              openingHours: "Mo-Su 09:00-21:00",
              sameAs: [
                "https://t.me/EnrikeTomas",
                "https://wa.me/79780703665",
                "https://max.ru",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Услуги сезонного хранения шин",
                itemListElement: [
                  {
                    "@type": "Offer",
                    name: "Хранение шин R13-R16 (Стандарт)",
                    price: "500",
                    priceCurrency: "RUB",
                    description: "Сезонное хранение шин до R16 в сухом климатическом помещении с бесплатным забором",
                  },
                  {
                    "@type": "Offer",
                    name: "Хранение шин R17-R19 (Премиум)",
                    price: "600",
                    priceCurrency: "RUB",
                    description: "Сезонное хранение шин для седанов и кроссоверов",
                  },
                  {
                    "@type": "Offer",
                    name: "Хранение шин R20+ (Внедорожники)",
                    price: "700",
                    priceCurrency: "RUB",
                    description: "Сезонное хранение шин больших диаметров",
                  },
                  {
                    "@type": "Offer",
                    name: "Комплекс «Мойка + Сушка + Детейлинг-чернение» (R13-R16)",
                    price: "600",
                    priceCurrency: "RUB",
                    description: "Профессиональная бесконтактная мойка, сушка и глубокая консервация полимерным составом",
                  },
                  {
                    "@type": "Offer",
                    name: "Комплекс «Мойка + Сушка + Детейлинг-чернение» (R17-R19)",
                    price: "800",
                    priceCurrency: "RUB",
                    description: "Мойка, сушка и чернение для кроссоверов",
                  },
                  {
                    "@type": "Offer",
                    name: "Комплекс «Мойка + Сушка + Детейлинг-чернение» (R20+)",
                    price: "1000",
                    priceCurrency: "RUB",
                    description: "Премиальный детейлинг-уход для больших внедорожников",
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} pb-16 md:pb-0`}>
        <MetrikaTracker />
        <Header />
        <main>{children}</main>
        <div className="hidden md:block">
          <Footer />
        </div>
        <MobileBottomNav />

        {/* Yandex.Metrika counter */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym');

              ym(97808515, 'init', {webvisor:true, clickmap:true, accurateTrackBounce:true, trackLinks:true});
            `,
          }}
        />
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/97808515" style={{ position: 'absolute', left: '-9999px' }} alt="" />
          </div>
        </noscript>
      </body>
    </html>
  )
}
