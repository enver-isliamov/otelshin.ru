import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import MobileBottomNav from "@/components/mobile-bottom-nav"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "OtelShin - Профессиональное хранение шин в Симферополе | Тарифы от 500₽/месяц",
  description:
    "Решаем проблему хранения ваших Шин, Колес, Дисков, Резины, Покрышек в Симферополе. Вывоз шин прямо от дома или офиса БЕСПЛАТНО. Климат-контроль 24/7, личный кабинет. ☎️ +7 (978) 070-36-65",
  keywords:
    "хранение шин Симферополь, сезонное хранение шин, шиномонтаж Симферополь, автосервис, OtelShin, хранение колес, хранение резины",
  authors: [{ name: "OtelShin" }],
  creator: "OtelShin",
  publisher: "OtelShin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "OtelShin - Профессиональное хранение шин в Симферополе",
    description: "Современный сервис хранения шин в Симферополе с вывозом на дом. Тарифы от 500₽/месяц",
    type: "website",
    locale: "ru_RU",
    url: "https://otelshin.vercel.app",
    siteName: "OtelShin",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OtelShin - хранение шин в Симферополе",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OtelShin - Профессиональное хранение шин в Симферополе",
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
    title: "OtelShin",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
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
        <meta name="apple-mobile-web-app-title" content="OtelShin" />
        <meta name="application-name" content="OtelShin" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-tap-highlight" content="no" />

<!-- Yandex.Metrika counter -->
<script type="text/javascript">
    (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym');

    ym(97808515, 'init', {webvisor:true, clickmap:true, accurateTrackBounce:true, trackLinks:true});
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/97808515" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->



        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "OtelShin",
              description: "Профессиональное хранение шин в Симферополе",
              url: "https://otelshin.vercel.app",
              telephone: "+79780703665",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Симферополь",
                addressCountry: "RU",
              },
              openingHours: "Mo-Su 09:00-22:00",
              priceRange: "500-700 RUB",
              serviceArea: {
                "@type": "City",
                name: "Симферополь",
              },
            }),
          }}
        />
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
