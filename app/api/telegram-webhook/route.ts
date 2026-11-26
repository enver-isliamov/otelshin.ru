import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Логируем входящие сообщения для отладки
    console.log("Telegram webhook received:", body)

    // Здесь можно обрабатывать входящие сообщения от пользователей
    // Например, автоответы, команды бота и т.д.

    if (body.message) {
      const chatId = body.message.chat.id
      const text = body.message.text
      const userName = body.message.from.first_name

      // Обработка команд
      if (text === "/start") {
        await sendTelegramMessage(
          chatId,
          `
👋 Привет, ${userName}!

Я бот компании OtelShin - профессионального сервиса хранения шин в Симферополе.

🚗 Что я умею:
• Принимать заявки с сайта
• Отправлять уведомления менеджеру
• Предоставлять информацию о тарифах

🌐 Наш сайт: https://www.otelshin.ru
📞 Телефон: +7 (979) 066-20-89

Для получения помощи напишите /help
        `,
        )
      }

      if (text === "/help") {
        await sendTelegramMessage(
          chatId,
          `
📋 ПОМОЩЬ - OtelShin Bot

🔧 Доступные команды:
/start - Начать работу с ботом
/help - Эта справка
/tariffs - Показать тарифы
/contact - Контактная информация

📞 Связь с нами:
• Телефон: +7 (979) 066-20-89
• Telegram: @EntikeTomas
• Сайт: https://otelshin.tu

🕒 Режим работы: Ежедневно 9:00-22:00
        `,
        )
      }

      if (text === "/tariffs") {
        await sendTelegramMessage(
          chatId,
          `
💰 ТАРИФЫ ХРАНЕНИЯ ШИН - OtelShin

🔹 R13-R15: 500₽/месяц
   Хранение с дисками: +100₽

🔸 R16-R19: 600₽/месяц (Популярный)
   Хранение с дисками: +100₽

🔹 R20+: 700₽/месяц
   Хранение с дисками: +100₽
   Внедорожник: +100₽

✅ Что включено:
• Вывоз от дома БЕСПЛАТНО
• Личный кабинет
• Контроль условий 24/7
• Автоматические напоминания

🌐 Оформить заявку: https://www.otelshin.ru
        `,
        )
      }
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Telegram webhook error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

async function sendTelegramMessage(chatId: number, text: string) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN

  if (!botToken) {
    console.error("TELEGRAM_BOT_TOKEN not found")
    return
  }

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "HTML",
      }),
    })

    if (!response.ok) {
      console.error("Failed to send Telegram message:", await response.text())
    }
  } catch (error) {
    console.error("Error sending Telegram message:", error)
  }
}

export async function GET() {
  return NextResponse.json({
    status: "OtelShin Telegram Bot is running",
    timestamp: new Date().toISOString(),
  })
}
