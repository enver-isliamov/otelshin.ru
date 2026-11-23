"use client"

import { useEffect, Suspense } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { YANDEX_METRIKA_ID, reachGoal, GOAL_PHONE_CLICK, GOAL_WHATSAPP_CLICK, GOAL_TELEGRAM_CLICK, GOAL_MAX_CLICK } from "@/lib/analytics"

function MetrikaRouteTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Отслеживание смены страниц (SPA-роутинг в Next.js)
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.ym === "function") {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "")
      try {
        window.ym(YANDEX_METRIKA_ID, "hit", url)
      } catch (err) {
        console.warn("Metrika hit error:", err)
      }
    }
  }, [pathname, searchParams])

  // Глобальный перехватчик событий (автоцели в коде сайта)
  useEffect(() => {
    const handleGlobalClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      if (!target) return

      const anchor = target.closest("a") as HTMLAnchorElement | null
      if (!anchor) return

      const href = anchor.getAttribute("href") || ""

      // 1. Автоцель: клик по номеру телефона
      if (href.startsWith("tel:")) {
        reachGoal(GOAL_PHONE_CLICK, {
          href,
          page: window.location.pathname,
          auto_captured: true,
        })
        return
      }

      // 2. Автоцель: переход в мессенджер MAX
      if (href.includes("max.ru") || href.startsWith("max:")) {
        reachGoal(GOAL_MAX_CLICK, {
          href,
          page: window.location.pathname,
          auto_captured: true,
        })
        return
      }

      // 3. Автоцель: переход в WhatsApp
      if (href.includes("wa.me") || href.includes("whatsapp.com")) {
        reachGoal(GOAL_WHATSAPP_CLICK, {
          href,
          page: window.location.pathname,
          auto_captured: true,
        })
        return
      }

      // 4. Автоцель: переход в Telegram
      if (href.includes("t.me/") || href.startsWith("tg:")) {
        reachGoal(GOAL_TELEGRAM_CLICK, {
          href,
          page: window.location.pathname,
          auto_captured: true,
        })
        return
      }
    }

    const handleGlobalSubmit = (event: SubmitEvent) => {
      const form = event.target as HTMLFormElement | null
      if (!form) return

      reachGoal("form_submit", {
        form_id: form.id || form.getAttribute("name") || "unnamed_form",
        page: window.location.pathname,
        auto_captured: true,
      })
    }

    document.addEventListener("click", handleGlobalClick, { capture: true })
    document.addEventListener("submit", handleGlobalSubmit, { capture: true })

    return () => {
      document.removeEventListener("click", handleGlobalClick, { capture: true })
      document.removeEventListener("submit", handleGlobalSubmit, { capture: true })
    }
  }, [])

  return null
}

export default function MetrikaTracker() {
  return (
    <Suspense fallback={null}>
      <MetrikaRouteTracker />
    </Suspense>
  )
}
