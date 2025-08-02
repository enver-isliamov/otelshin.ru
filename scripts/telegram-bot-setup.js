// Инструкция по настройке Telegram бота для отправки заявок

console.log(`
🤖 НАСТРОЙКА TELEGRAM БОТА

1. Создайте бота:
   - Напишите @BotFather в Telegram
   - Отправьте команду /newbot
   - Придумайте имя и username для бота
   - Получите токен бота (например: 123456789:ABCdefGHIjklMNOpqrsTUVwxyz)

2. Получите Chat ID менеджера:
   - Менеджер должен написать боту любое сообщение
   - Перейдите по ссылке: https://api.telegram.org/bot[ВАШ_ТОКЕН]/getUpdates
   - Найдите "chat":{"id":123456789} - это Chat ID

3. Замените в коде:
   - В файле components/tariff-modal.tsx
   - Строка: const botToken = "YOUR_BOT_TOKEN"
   - Замените YOUR_BOT_TOKEN на токен вашего бота
   - Строка: const chatId = "@EnrikeTomas"
   - Замените на Chat ID (число) или оставьте username

4. Альтернативный способ (без бота):
   - Можно использовать готовый сервис типа Formspree
   - Или отправлять данные на ваш сервер
   - Или использовать mailto: ссылку

ПРИМЕР ГОТОВОГО КОДА:
const botToken = "123456789:ABCdefGHIjklMNOpqrsTUVwxyz"
const chatId = "987654321" // или "@EnrikeTomas"
`)

// Функция для тестирования отправки сообщений
async function testTelegramBot() {
  const botToken = "6473374979:AAH8OHCxWN2kO0ep9wrbLXolk2ys4__GLqg" // Замените на ваш токен
  const chatId = "@EnrikeTomas" // Замените на Chat ID

  const testMessage = `🧪 <b>Тестовое сообщение</b>

Это тест отправки заявок из CarMan.
Время: ${new Date().toLocaleString("ru-RU")}`

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
    console.log("Результат отправки:", result)

    if (result.ok) {
      console.log("✅ Сообщение успешно отправлено!")
    } else {
      console.log("❌ Ошибка:", result.description)
    }
  } catch (error) {
    console.error("❌ Ошибка сети:", error)
  }
}

// Раскомментируйте для тестирования:
// testTelegramBot()
