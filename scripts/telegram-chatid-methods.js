// 🤖 СПОСОБЫ ПОЛУЧЕНИЯ CHAT ID ПОЛЬЗОВАТЕЛЕЙ

console.log(`
📋 МЕТОДЫ ПОЛУЧЕНИЯ CHAT ID ПОЛЬЗОВАТЕЛЕЙ

═══════════════════════════════════════════════════════════════

🎯 ТЕКУЩАЯ РЕАЛИЗАЦИЯ:
✅ Добавлено поле для ввода Telegram username
✅ Пользователь может указать @username
✅ Менеджер видит Telegram клиента в заявке
✅ Можно написать клиенту напрямую

═══════════════════════════════════════════════════════════════

🚀 ДОПОЛНИТЕЛЬНЫЕ МЕТОДЫ (для будущего развития):

1️⃣ TELEGRAM WEB APP
   - Самый элегантный способ
   - Пользователь открывает сайт через бота
   - Автоматически получаем Chat ID
   
2️⃣ TELEGRAM LOGIN WIDGET  
   - Кнопка "Войти через Telegram"
   - Официальный виджет от Telegram
   - Получаем полную информацию о пользователе

3️⃣ QR КОД / ПЕРСОНАЛЬНАЯ ССЫЛКА
   - Генерируем уникальную ссылку для каждого клиента
   - Клиент переходит в бота по ссылке
   - Бот связывает Chat ID с заявкой

4️⃣ DEEP LINKING
   - Ссылки вида t.me/bot?start=order_123
   - Автоматическая привязка заявки к Chat ID
   - Удобно для повторных клиентов

═══════════════════════════════════════════════════════════════
`)

// Пример реализации Telegram Web App (для будущего)
const telegramWebAppExample = `
// В HTML добавить:
<script src="https://telegram.org/js/telegram-web-app.js"></script>

// В JavaScript:
if (window.Telegram?.WebApp) {
  const tg = window.Telegram.WebApp;
  
  // Получаем данные пользователя
  const user = tg.initDataUnsafe?.user;
  
  if (user) {
    console.log('Chat ID:', user.id);
    console.log('Username:', user.username);
    console.log('Name:', user.first_name, user.last_name);
    
    // Автоматически заполняем форму
    setFormData({
      name: user.first_name + ' ' + (user.last_name || ''),
      telegram: '@' + user.username,
      chatId: user.id // Отправляем на сервер
    });
  }
  
  // Настраиваем интерфейс
  tg.expand();
  tg.MainButton.setText('Оформить заявку');
  tg.MainButton.show();
}
`

// Пример Telegram Login Widget
const telegramLoginWidgetExample = `
<!-- HTML -->
<script async src="https://telegram.org/js/telegram-widget.js?22" 
        data-telegram-login="otelshin_bot" 
        data-size="large" 
        data-onauth="onTelegramAuth(user)" 
        data-request-access="write">
</script>

<script>
function onTelegramAuth(user) {
  console.log('Telegram user:', user);
  
  // Заполняем форму данными из Telegram
  setFormData({
    name: user.first_name + ' ' + (user.last_name || ''),
    telegram: '@' + user.username,
    chatId: user.id,
    photoUrl: user.photo_url
  });
  
  // Отправляем на сервер
  fetch('/api/telegram-auth', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  });
}
</script>
`

// Пример Deep Linking
const deepLinkingExample = `
// Генерируем уникальную ссылку для заявки
const orderLink = \`https://t.me/otelshin_bot?start=order_\${orderId}\`;

// В боте обрабатываем команду /start
bot.onText(/\\/start order_(.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const orderId = match[1];
  
  // Связываем Chat ID с заявкой
  linkOrderToChat(orderId, chatId);
  
  bot.sendMessage(chatId, \`
🚗 Заявка №\${orderId} привязана к вашему аккаунту!

Теперь вы будете получать уведомления о статусе заказа прямо в Telegram.
  \`);
});
`

console.log(`
🔧 КАК ИСПОЛЬЗОВАТЬ ТЕКУЩУЮ РЕАЛИЗАЦИЮ:

1. Пользователь заполняет форму
2. Указывает свой @username в Telegram (необязательно)
3. Менеджер получает заявку с Telegram username
4. Менеджер может написать клиенту напрямую

💡 ПРЕИМУЩЕСТВА:
✅ Простота реализации
✅ Не требует дополнительных настроек
✅ Работает сразу
✅ Пользователь контролирует свои данные

📈 ДЛЯ УЛУЧШЕНИЯ КОНВЕРСИИ:
- Добавить подсказку "для быстрой связи"
- Показать преимущества указания Telegram
- Сделать поле более заметным
- Добавить валидацию username

═══════════════════════════════════════════════════════════════

🎯 СЛЕДУЮЩИЕ ШАГИ:

1. Протестировать текущую реализацию
2. Собрать статистику заполнения Telegram поля
3. При необходимости добавить Telegram Login Widget
4. Рассмотреть Telegram Web App для мобильных пользователей

═══════════════════════════════════════════════════════════════
`)

// Функция для валидации Telegram username
function validateTelegramUsername(username) {
  // Убираем @ если есть
  const cleanUsername = username.replace("@", "")

  // Проверяем формат: 5-32 символа, только буквы, цифры и подчеркивания
  const telegramUsernameRegex = /^[a-zA-Z0-9_]{5,32}$/

  return telegramUsernameRegex.test(cleanUsername)
}

// Функция для форматирования username
function formatTelegramUsername(username) {
  if (!username) return ""

  // Убираем лишние символы и добавляем @
  const clean = username.replace(/[^a-zA-Z0-9_]/g, "")
  return clean ? "@" + clean : ""
}

console.log(`
🧪 ТЕСТИРОВАНИЕ:

1. Откройте сайт
2. Выберите тариф
3. Заполните форму с Telegram username
4. Проверьте что заявка приходит с указанным Telegram
5. Попробуйте написать клиенту в Telegram

✅ Готово! Теперь вы можете получать Telegram username клиентов!
`)

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    validateTelegramUsername,
    formatTelegramUsername,
    telegramWebAppExample,
    telegramLoginWidgetExample,
    deepLinkingExample,
  }
}
