# Личный кабинет OtelShin

Система авторизации через Telegram для доступа к личному кабинету клиентов.

## Описание

Этот модуль обеспечивает:
- Авторизацию пользователей через Telegram Web App
- Проверку данных в Google Sheets
- Запрос номера телефона при необходимости
- Переадресацию в личный кабинет или админ панель

## Структура файлов

- `index.html` - Главная страница авторизации
- `auth.js` - Логика авторизации и взаимодействия с API
- `README.md` - Документация

## Конфигурация

В файле `auth.js` настроены следующие параметры:

```javascript
const CONFIG = {
    GOOGLE_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbx9JVpaW5WyaawgUWFrVquTh4SG6yOWw5g9_f3YLlXf3Oq_dZvnjKblTqZsQBlkSe9rAg/exec',
    ADMIN_CHAT_ID: '96609347',
    DASHBOARD_BASE_URL: 'https://id-preview--86de7c90-bfa2-4ea9-b1d2-216984f4b59d.lovable.app/dashboard'
};
```

## Логика работы

### Для администратора (Chat ID: 96609347)
1. Автоматическое перенаправление на Google Script для управления
2. Полный доступ к данным всех пользователей

### Для обычных пользователей
1. Проверка наличия пользователя в Google Sheets по Chat ID
2. Если пользователь найден:
   - Если есть номер телефона → переход в личный кабинет
   - Если нет номера телефона → запрос номера телефона
3. Если пользователь не найден → сообщение об ошибке

## API взаимодействие

### Проверка пользователя
```
GET {GOOGLE_SCRIPT_URL}?action=checkUser&chatId={chatId}
```

Ответ:
```json
{
    "found": true/false,
    "phone": "номер телефона или null"
}
```

### Сохранение номера телефона
```
POST {GOOGLE_SCRIPT_URL}
Content-Type: application/json

{
    "action": "updatePhone",
    "chatId": "chat_id_пользователя",
    "phone": "+7xxxxxxxxxx"
}
```

Ответ:
```json
{
    "success": true/false
}
```

## Формат авторизации в личном кабинете

Пользователи перенаправляются по ссылке:
```
{DASHBOARD_BASE_URL}?auth=telegram_{chatId}_{timestamp}
```

Пример:
```
https://id-preview--86de7c90-bfa2-4ea9-b1d2-216984f4b59d.lovable.app/dashboard?auth=telegram_507604784_1752052374379
```

## Деплой

Эта система предназначена для отдельного деплоя от основного сайта. 

Рекомендуемые платформы:
- Vercel
- Netlify
- GitHub Pages

## Безопасность

- Авторизация происходит только через Telegram Web App
- Проверка данных через защищенный Google Script
- Валидация номеров телефонов
- Временные токены для авторизации

## Требования к Google Script

Google Script должен поддерживать следующие действия:
1. `checkUser` - проверка существования пользователя по Chat ID
2. `updatePhone` - обновление номера телефона пользователя

## Тестирование

Для тестирования вне Telegram предусмотрен режим разработки с возможностью ввода Chat ID вручную.