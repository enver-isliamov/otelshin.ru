// 🚀 БЫСТРАЯ НАСТРОЙКА TELEGRAM ИНТЕГРАЦИИ ДЛЯ OTELSHIN

console.log(`
🤖 ПОШАГОВАЯ НАСТРОЙКА TELEGRAM БОТА

═══════════════════════════════════════════════════════════════

📋 ЧТО НУЖНО СДЕЛАТЬ:

1️⃣ СОЗДАТЬ БОТА
2️⃣ ПОЛУЧИТЬ ТОКЕН
3️⃣ ПОЛУЧИТЬ CHAT ID
4️⃣ ДОБАВИТЬ В VERCEL
5️⃣ ПРОТЕСТИРОВАТЬ

═══════════════════════════════════════════════════════════════
`)

// Шаг 1: Создание бота
console.log(`
🤖 ШАГ 1: СОЗДАНИЕ TELEGRAM БОТА

1. Откройте Telegram
2. Найдите @BotFather
3. Отправьте: /newbot
4. Введите имя: OtelShin Support Bot
5. Введите username: @otelshin_support_bot (или любой свободный)
6. СОХРАНИТЕ ТОКЕН! Он выглядит так:
   123456789:ABCdefGHIjklMNOpqrsTUVwxyz

✅ Токен получен? Переходите к шагу 2
`)

// Шаг 2: Получение Chat ID
console.log(`
💬 ШАГ 2: ПОЛУЧЕНИЕ CHAT ID

1. Менеджер должен написать боту /start
2. Откройте в браузере (замените YOUR_TOKEN на ваш токен):
   
   https://api.telegram.org/botYOUR_TOKEN/getUpdates
   
3. Найдите в JSON ответе:
   "chat": {"id": 123456789}
   
4. Скопируйте это число (123456789)

✅ Chat ID получен? Переходите к шагу 3
`)

// Шаг 3: Добавление в Vercel
console.log(`
⚙️ ШАГ 3: НАСТРОЙКА В VERCEL

1. Зайдите на vercel.com в ваш проект
2. Settings → Environment Variables
3. Добавьте две переменные:

   Name: TELEGRAM_BOT_TOKEN
   Value: ваш_токен_бота
   
   Name: TELEGRAM_CHAT_ID  
   Value: ваш_chat_id

4. Нажмите Save
5. Redeploy проект (Deployments → ... → Redeploy)

✅ Переменные добавлены? Переходите к шагу 4
`)

// Функция для тестирования
async function testTelegramIntegration() {
  console.log(`
🧪 ШАГ 4: ТЕСТИРОВАНИЕ

Выполните этот код в консоли браузера на вашем сайте:
`)

  const testCode = `
// Тест API статуса
fetch('/api/send-order')
  .then(r => r.json())
  .then(data => {
    console.log('API Status:', data);
    if (data.telegram_configured) {
      console.log('✅ Telegram настроен правильно!');
    } else {
      console.log('❌ Telegram не настроен. Проверьте переменные окружения.');
    }
  });

// Тест отправки заявки
fetch('/api/send-order', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Тест Тестович',
    phone: '+7 (999) 123-45-67',
    tariff: { name: 'R16-R19', price: '600', description: 'Тестовая заявка' }
  })
})
.then(r => r.json())
.then(data => {
  console.log('Test Order Result:', data);
  if (data.success) {
    console.log('✅ Заявка отправлена успешно!');
  } else {
    console.log('❌ Ошибка отправки:', data.error);
  }
});
`

  console.log(testCode)
}

// Шаг 5: Проверка работы
console.log(`
✅ ШАГ 5: ФИНАЛЬНАЯ ПРОВЕРКА

1. Откройте ваш сайт
2. Нажмите "Выбрать тариф" 
3. Заполните форму тестовыми данными
4. Отправьте заявку
5. Проверьте Telegram - должно прийти сообщение

═══════════════════════════════════════════════════════════════

🎯 ВОЗМОЖНЫЕ ПРОБЛЕМЫ И РЕШЕНИЯ:

❌ "Telegram credentials not found"
   → Проверьте переменные в Vercel
   → Убедитесь что сделали Redeploy

❌ "Telegram API error: Unauthorized"  
   → Проверьте правильность токена
   → Убедитесь что бот создан

❌ "Telegram API error: Chat not found"
   → Менеджер должен написать боту /start
   → Проверьте правильность Chat ID

❌ Заявка не приходит в Telegram
   → Проверьте что бот не заблокирован
   → Убедитесь что Chat ID правильный

═══════════════════════════════════════════════════════════════

🔧 ДОПОЛНИТЕЛЬНЫЕ КОМАНДЫ ДЛЯ @BotFather:

/setdescription - Бот для приема заявок на хранение шин OtelShin
/setabouttext - OtelShin - профессиональное хранение шин в Симферополе  
/setuserpic - загрузите логотип компании
/setcommands - start,help,contact

═══════════════════════════════════════════════════════════════

✨ ГОТОВО! Теперь все заявки будут автоматически приходить в Telegram!

Если что-то не работает - проверьте логи в Vercel:
Functions → View Function Logs
`)

// Экспорт для использования
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    testTelegramIntegration,
  }
}
