## 📖 Detailed overview

Компонент для добавления кнопки «Нравится» Facebook.

## 🎬 Live Demo

[Live demo link](https://quarkly-catalog.netlify.app/fblike/)

## ⚙️ Usage

 1. Добавьте компонент на страницу
 2. Укажите ID вашего приложения Facebook
 3. Укажите ссылку на вашу страницу

### Приложение FaceBook

Для работы компонента требуется создание приложения FaceBook. Сделать это можно по этой ссылке: [FaceBook APP](https://developers.facebook.com/apps)

### Контент для детей

Если ваш веб-сайт или онлайн-сервис содержит контент для детей до 13 лет, активируйте параметр `Сайт для детей`.
Подробнее об этом можно почитать на странице [FaceBook Kid](https://developers.facebook.com/docs/plugins/restrictions).

### UTM-метка

Название UTM-метки должно:
 - иметь длину не более 50 символов;
 - состоять из буквенно-цифровых символов
 - содержать только символы +/=-.:_

## 🧩 Components and Props

| Названия свойств             | Type      | Default           | Example                   |
| :--------------------------- | :-------: | :---------------: | :-----------------------: |
| ID приложения Facebook       | `number`  |        `-`        |        `1234567890`       |
| Ссылка на страницу           | `string`  |        `-`        | `https://yourdomain.name` |
| Язык загружаемого компонента |  `enum`   |     `English`     |         `Русский`         |
| Цветовая схема               |  `enum`   |      `Light`      |           `Dark`          |
| Кнопка "Поделиться"          |  `enum`   |      `Hide`       |           `Show`          |
| Макет                        |  `enum`   | `Стандартный вид` |      `Простая кнопка`     |
| Размер кнопки                |  `enum`   |      `Small`      |          `Large`          |
| Действие по клику            |  `enum`   |      `Like`       |        `Recommend`        |
| Сайт для детей               | `boolean` |      `false`      |           `true`          |
| UTM-метка                    | `string`  |        `-`        |         `utm12345`        |

## 🗓 Changelog

 - 21/04/2021 (v1.0)
 - Первая версия

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you would like to see added. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](./LICENSE).
