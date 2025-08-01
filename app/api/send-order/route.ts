import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, phone, telegram, tariff } = await request.json()

    // Валидация данных
    if (!name || !phone || !tariff) {
      return NextResponse.json({ error: "Не все обязательные поля заполнены" }, { status: 400 })
    }

    // Проверяем наличие Telegram credentials
    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!botToken || !chatId) {
      // Логируем заявку в консоль для разработки
      console.log("📋 НОВАЯ ЗАЯВКА (Telegram не настроен):", {
        name,
        phone,
        telegram: telegram || "не указан",
        tariff,
        timestamp: new Date().toISOString(),
      })

      // Возвращаем успех, но с предупреждением
      return NextResponse.json({
        success: true,
        message: "Заявка принята! Мы свяжемся с вами в ближайшее время.",
        warning: "telegram_not_configured",
      })
    }

    // Отправка в Telegram
    const telegramResult = await sendToTelegram({
      name,
      phone,
      telegram,
      tariff,
      botToken,
      chatId,
    })

    if (telegramResult.success) {
      // Логирование успешной заявки
      console.log("✅ Order sent successfully:", {
        name,
        phone,
        telegram: telegram || "не указан",
        tariff: tariff.name,
        timestamp: new Date().toISOString(),
      })

      return NextResponse.json({
        success: true,
        message: "Заявка успешно отправлена! Менеджер свяжется с вами в ближайшее время.",
      })
    } else {
      // Логируем ошибку, но не показываем пользователю техническую информацию
      console.error("❌ Telegram send failed:", telegramResult.error)

      // Сохраняем заявку в логах для ручной обработки
      console.log("📋 ЗАЯВКА ДЛЯ РУЧНОЙ ОБРАБОТКИ:", {
        name,
        phone,
        telegram: telegram || "не указан",
        tariff,
        timestamp: new Date().toISOString(),
        error: telegramResult.error,
      })

      return NextResponse.json({
        success: true,
        message: "Заявка принята! Мы обработаем её и свяжемся с вами в ближайшее время.",
        warning: "telegram_send_failed",
      })
    }
  } catch (error) {
    console.error("❌ Order API error:", error)

    return NextResponse.json(
      {
        error: "Произошла техническая ошибка. Пожалуйста, позвоните нам напрямую: +7 (978) 070-36-65",
      },
      { status: 500 },
    )
  }
}

async function sendToTelegram({
  name,
  phone,
  telegram,
  tariff,
  botToken,
  chatId,
}: {
  name: string
  phone: string
  telegram?: string
  tariff: { name: string; price: string; description: string }
  botToken: string
  chatId: string
}): Promise<{ success: boolean; error?: string }> {
  const telegramInfo = telegram ? `📱 <b>Telegram:</b> ${telegram}` : `📱 <b>Telegram:</b> <i>не указан</i>`

  const message = `🚗 <b>Новая заявка OtelShin</b>

📋 <b>Тариф:</b> ${tariff.name}
💰 <b>Стоимость:</b> ${tariff.price}₽/месяц
📝 <b>Описание:</b> ${tariff.description}

👤 <b>Клиент:</b> ${name}
📞 <b>Телефон:</b> <a href="tel:${phone.replace(/\D/g, "")}">${phone}</a>
${telegramInfo}

⏰ <b>Время заявки:</b> ${new Date().toLocaleString("ru-RU")}
🌐 <b>Источник:</b> Сайт OtelShin

<i>Свяжитесь с клиентом в ближайшее время!</i>`

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    })

    const result = await response.json()

    if (result.ok) {
      console.log("✅ Message sent to Telegram successfully")
      return { success: true }
    } else {
      console.error("❌ Telegram API error:", result)
      return {
        success: false,
        error: `Telegram API error: ${result.description || "Unknown error"}`,
      }
    }
  } catch (error) {
    console.error("❌ Network error sending to Telegram:", error)
    return {
      success: false,
      error: `Network error: ${error instanceof Error ? error.message : "Unknown error"}`,
    }
  }
}

// Добавляем GET endpoint для проверки статуса
export async function GET() {
  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  return NextResponse.json({
    status: "OtelShin Order API is running",
    telegram_configured: !!(botToken && chatId),
    timestamp: new Date().toISOString(),
  })
}
