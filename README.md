
EasyReserve — это сервис бронирования столиков в ресторане с возможностью выбора даты, времени, количества гостей и блюд из меню.
🚀 Технологии
    •	Frontend:
        o	React, TypeScript
        o	Redux Toolkit, React Router, React Slick, Ant Design
        o	Vite (для сборки)
        o	TailwindCSS (для стилизации)
    •	Backend:
        o	Node.js, Express
        o	Sequelize ORM, PostgreSQL
        o	JSON Web Tokens (JWT) для авторизации
        o	Multer для обработки файлов
    •	Утилиты:
        o	Nodemon (для разработки)


📦 Установка и запуск

1. Клонируйте репозиторий

        git clone https://github.com/your-username/EasyReserve.git
        cd EasyReserve

2. Установите зависимости
        Для фронтенда:
            Перейдите в папку с клиентом и установите зависимости:

            cd client
            npm install
            
        Для бэкенда:
        Перейдите в папку с сервером и установите зависимости:

        cd backend
        npm install

3. Настройка базы данных

    Для работы с PostgreSQL необходимо выполнить несколько шагов:
    1.	Установите PostgreSQL (если еще не установлен):
        o	Скачайте и установите PostgreSQL для вашей операционной системы.

    2.	Создайте базу данных:
        o	После установки PostgreSQL запустите командную строку или консоль PostgreSQL и создайте базу данных для проекта:

            CREATE DATABASE easyreserve;

    3.	Настройте подключение к базе данных:
        o	В .env файле в корне проекта добавьте следующие параметры для подключения к базе данных:

            DB_HOST=localhost
            DB_PORT=5432
            DB_USER=your_username
            DB_PASSWORD=your_password
            DB_NAME=easyreserve
    4.	Замените your_username и your_password на ваши актуальные данные для подключения.
    5.	Синхронизация моделей:
        o	После настройки базы данных и подключения, выполните команду для синхронизации моделей с базой данных (если используете Sequelize):

            cd backend
            npx sequelize-cli db:migrate
    6.	Это создаст необходимые таблицы в вашей базе данных.
    4. Запуск проекта
        Для фронтенда:
            Чтобы запустить клиентскую часть, выполните команду:

            cd client
            npm run dev
        Для бэкенда:
            Чтобы запустить серверную часть в режиме разработки, используйте:

            cd backend
            npm run dev
        Теперь, если все настроено правильно, сервер будет доступен по адресу http://localhost:5000, а клиент — по адресу http://localhost:3000.
📋 Как использовать
1.	Перейдите на главную страницу для бронирования столика.
2.	Выберите дату и время.
3.	Укажите количество гостей.
4.	Выберите блюда из меню.
5.	Система автоматически порекомендует напитки к выбранным блюдам.

📝 API
Пример запроса на создание брони:

POST /api/reservation
{
  "date": "2024-11-12",
  "time": "18:00",
  "guests": 4,
  "menuItems": ["sushi", "pizza"]
}

Пример ответа:
json

{
  "reservation": "success",
  "drinkRecommendation": ["red wine", "whiskey"]
}
💡 Структура проекта
Backend:
•	server.js — основной серверный файл.
•	routes — маршруты для API (например, бронирование, меню).
•	models — модели данных для базы данных.
•	controllers — логика обработки запросов.
Frontend:
•	src/components — компоненты интерфейса.
•	src/pages — страницы приложения.
•	src/redux — состояние приложения с использованием Redux.
•	src/styles — стили с использованием TailwindCSS.


