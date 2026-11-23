import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Google-Extended",
          "YandexRenderResourcesBot",
          "YandexBot",
          "Googlebot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://otelshin.ru/sitemap.xml",
    host: "https://otelshin.ru",
  }
}
