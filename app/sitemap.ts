import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.otelshin.ru"

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contacts`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/dogovor`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ]

  const articleSlugs = [
    "gde-hranit-kolesa-v-mnogoetazhkah-simferopol",
    "shinnyj-servis-dlya-devushek-simferopol",
    "sezonnoe-hranenie-shin-kievskij-rajon-simferopol",
    "chernenie-i-konservaciya-shin-chem-obrabatyvat",
    "hranenie-shin-s-diskami-i-bez-gost-pravila",
    "podgotovka-k-pereobuvke-v-krymu-dostavka-k-boksu",
    "kak-pravilno-hranit-shiny",
    "kogda-menyat-shiny-v-krymu",
    "priznaki-iznosa-shin",
    "zabota-o-shinah",
  ]

  const articleRoutes: MetadataRoute.Sitemap = articleSlugs.map((slug) => ({
    url: `${baseUrl}/articles/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }))

  return [...staticRoutes, ...articleRoutes]
}
