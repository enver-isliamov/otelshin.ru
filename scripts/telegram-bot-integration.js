// 🤖 ПОЛНАЯ НАСТРОЙКА TELEGRAM БОТА ДЛЯ OTELSHIN

console.log(`
🚀 НАСТРОЙКА TELEGRAM ИНТЕГРАЦИИ ДЛЯ OTELSHIN

📋 ПЛАН ДЕЙСТВИЙ:
1. Создание и настройка бота
2. Настройка Webhook на Vercel
3. Создание API endpoint
4. Тестирование интеграции
5. Мониторинг и логирование

═══════════════════════════════════════════════════════════════
`)

// ШАГ 1: Создание бота
console.log(`
🤖 ШАГ 1: СОЗДАНИЕ TELEGRAM БОТА

1. Откройте Telegram и найдите @BotFather
2. Отправьте команду: /newbot
3. Введите имя бота: OtelShin Bot
4. Введите username: @otelshin_bot (или любой доступный)
5. Сохраните полученный токен!

ПРИМЕР ТОКЕНА: 123456789:ABCdefGHIjklMNOpqrsTUVwxyz

6. Настройте бота:
   /setdescription - Бот для приема заявок на хранение шин
   /setabouttext - OtelShin - профессиональное хранение шин в Симферополе
   /setuserpic - загрузите логотип компании
`)

// ШАГ 2: Получение Chat ID
console.log(`
💬 ШАГ 2: ПОЛУЧЕНИЕ CHAT ID МЕНЕДЖЕРА

1. Менеджер должен написать боту команду /start
2. Перейдите по ссылке (замените YOUR_TOKEN):
   https://api.telegram.org/botYOUR_TOKEN/getUpdates

3. Найдите в ответе:
   "chat": {"id": 123456789, "first_name": "Manager"}
   
4. Сохраните это число (123456789) - это Chat ID менеджера
`)

// ШАГ 3: Настройка в Vercel
console.log(`
⚙️ ШАГ 3: НАСТРОЙКА ПЕРЕМЕННЫХ В VERCEL

1. Зайдите в панель вашего проекта на vercel.com
2. Settings → Environment Variables
3. Добавьте переменные:

   TELEGRAM_BOT_TOKEN = ваш_токен_бота
   TELEGRAM_CHAT_ID = chat_id_менеджера
   TELEGRAM_WEBHOOK_SECRET = случайная_строка_для_безопасности

4. Нажмите Save и Redeploy проект
`)

// Функция для настройки Webhook
async function setupWebhook() {
  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const webhookUrl = `https://otelshin.vercel.app/api/telegram-webhook`

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/setWebhook`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: webhookUrl,
        allowed_updates: ["message"],
        drop_pending_updates: true,
      }),
    })

    const result = await response.json()
    console.log("Webhook setup result:", result)

    if (result.ok) {
      console.log("✅ Webhook успешно настроен!")
    } else {
      console.log("❌ Ошибка настройки Webhook:", result.description)
    }
  } catch (error) {
    console.error("❌ Ошибка:", error)
  }
}

// Функция для отправки тестового сообщения
async function sendTestMessage() {
  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  const testMessage = `🧪 <b>Тест интеграции OtelShin</b>

✅ Бот успешно настроен и готов к работе!
📅 Время: ${new Date().toLocaleString("ru-RU")}

🚗 Теперь все заявки с сайта будут приходить сюда автоматически.`

  try {
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
      console.log("✅ Тестовое сообщение отправлено!")
    } else {
      console.log("❌ Ошибка отправки:", result.description)
    }
  } catch (error) {
    console.error("❌ Ошибка сети:", error)
  }
}

console.log(`
🔧 ШАГ 4: ДОПОЛНИТЕЛЬНЫЕ НАСТРОЙКИ

1. КОМАНДЫ БОТА (отправьте @BotFather):
   /setcommands
   
   start - Начать работу с ботом
   help - Помощь и информация
   status - Статус системы
   stats - Статистика заявок

2. НАСТРОЙКА МЕНЮ:
   /setmenubutton
   Текст: "Сайт OtelShin"
   URL: https://otelshin.vercel.app

3. ПРИВАТНОСТЬ:
   /setprivacy - Disabled (чтобы бот видел все сообщения в группах)

4. ГРУППА ДЛЯ ЗАЯВОК (опционально):
   - Создайте группу "OtelShin Заявки"
   - Добавьте бота в группу
   - Сделайте бота администратором
   - Используйте ID группы вместо личного чата
`)

console.log(`
📊 ШАГ 5: МОНИТОРИНГ И АНАЛИТИКА

Рекомендуемые сервисы для отслеживания:

1. 📈 АНАЛИТИКА БОТА:
   - @BotAnalytics_bot - статистика использования
   - @Botan_bot - детальная аналитика

2. 🔔 МОНИТОРИНГ:
   - UptimeRobot - проверка доступности
   - Sentry - отслеживание ошибок

3. 📝 ЛОГИРОВАНИЕ:
   - Vercel Functions Logs
   - Telegram Bot API logs
`)

// Экспорт функций для использования
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    setupWebhook,
    sendTestMessage,
  }
}

console.log(`
🎯 ИТОГОВЫЙ ЧЕКЛИСТ:

□ Создал бота через @BotFather
□ Получил токен бота
□ Получил Chat ID менеджера  
□ Добавил переменные в Vercel
□ Настроил Webhook
□ Протестировал отправку сообщений
□ Настроил команды бота
□ Добавил мониторинг

🚀 ГОТОВО! Теперь все заявки с сайта OtelShin будут автоматически приходить в Telegram!
`)
