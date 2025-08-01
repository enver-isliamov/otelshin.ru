import { type NextRequest, NextResponse } from "next/server"

export async function GET() {
  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  // Проверяем конфигурацию
  const config = {
    telegram_bot_token_exists: !!botToken,
    telegram_chat_id_exists: !!chatId,
    bot_token_format: botToken ? botToken.includes(":") : false,
    chat_id_format: chatId ? !isNaN(Number(chatId)) || chatId.startsWith("@") : false,
  }

  if (!botToken || !chatId) {
    return NextResponse.json({
      status: "error",
      message: "Telegram не настроен",
      config,
      instructions: {
        step1: "Создайте бота через @BotFather",
        step2: "Получите токен бота",
        step3: "Получите Chat ID менеджера",
        step4: "Добавьте TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID в Vercel Environment Variables",
        step5: "Сделайте Redeploy проекта",
      },
    })
  }

  // Тестируем отправку сообщения
  try {
    const testMessage = `🧪 <b>Тест интеграции OtelShin</b>

✅ Telegram бот настроен правильно!
📅 Время теста: ${new Date().toLocaleString("ru-RU")}

🚗 Теперь все заявки с сайта будут приходить автоматически.

<i>Это тестовое сообщение можно удалить.</i>`

    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: testMessage,
        parse_mode: "HTML",
      }),
    })

    const result = await response.json()

    if (result.ok) {
      return NextResponse.json({
        status: "success",
        message: "Telegram настроен правильно! Тестовое сообщение отправлено.",
        config,
        telegram_response: result,
      })
    } else {
      return NextResponse.json({
        status: "error",
        message: "Ошибка Telegram API",
        config,
        telegram_error: result,
        possible_solutions: {
          unauthorized: "Проверьте правильность токена бота",
          chat_not_found: "Менеджер должен написать боту /start",
          bot_blocked: "Разблокируйте бота в Telegram",
        },
      })
    }
  } catch (error) {
    return NextResponse.json({
      status: "error",
      message: "Ошибка сети при обращении к Telegram",
      config,
      error: error instanceof Error ? error.message : "Unknown error",
    })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { test_name, test_phone } = await request.json()

    const testOrder = {
      name: test_name || "Тест Тестович",
      phone: test_phone || "+7 (999) 123-45-67",
      tariff: {
        name: "R16-R19",
        price: "600",
        description: "Тестовая заявка из API",
      },
    }

    // Используем основной API для отправки
    const response = await fetch(`${request.nextUrl.origin}/api/send-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testOrder),
    })

    const result = await response.json()

    return NextResponse.json({
      status: response.ok ? "success" : "error",
      message: response.ok ? "Тестовая заявка отправлена" : "Ошибка отправки тестовой заявки",
      test_data: testOrder,
      api_response: result,
    })
  } catch (error) {
    return NextResponse.json({
      status: "error",
      message: "Ошибка при отправке тестовой заявки",
      error: error instanceof Error ? error.message : "Unknown error",
    })
  }
}
