export const YANDEX_METRIKA_ID = 97808515

export const GOAL_PHONE_CLICK = "phone_click"
export const GOAL_WHATSAPP_CLICK = "whatsapp_click"
export const GOAL_TELEGRAM_CLICK = "telegram_click"
export const GOAL_MAX_CLICK = "max_click"
export const GOAL_ORDER_SUBMIT = "order_submit"

declare global {
  interface Window {
    ym?: (counterId: number, method: string, target: string, params?: Record<string, any>) => void
  }
}

export function reachGoal(goalName: string, params?: Record<string, any>) {
  if (typeof window !== "undefined") {
    try {
      if (typeof window.ym === "function") {
        window.ym(YANDEX_METRIKA_ID, "reachGoal", goalName, params)
      } else {
        console.log(`[Metrika] reachGoal: ${goalName}`, params)
      }
    } catch (e) {
      console.warn("Metrika reachGoal error:", e)
    }
  }
}
