## 📖 Detailed overview

Компонент для добавления кнопки «Нравится» FaceBook.

## 🎬 Live Demo

[Live demo link](https://quarkly-ui-components.netlify.app/fblike/)

## ⚙️ Usage

Добавьте компонент на страницу, укажите ID вашего приложения FaceBook и посмотрите как он работает в режиме превью.

### Приложение FaceBook

Для работы компонента, трубуется создание приложения FaceBook. Сделать это можно по этой ссылке: [FaceBook APP](https://developers.facebook.com/apps)

### Контент для детей

Если ваш веб-сайт или онлайн-сервис содержит контент для детей до 13 лет, активируйте параметр `Kid Directed Site`.
Подробнее об этом можно почитать здесь: [FaceBook Kid](https://developers.facebook.com/docs/plugins/restrictions)

## 🧩 Components and Props

| Props Name        |   Type    |                              Description                               |  Default   |   Example   |
| ----------------- | :-------: | :--------------------------------------------------------------------: | :--------: | :---------: |
| Referal           | `string`  |        Ярлык для отслеживания переходов (не более 50 символов)         |   `none`   |    `123`    |
| Color Scheme      |  `enum`   |                      Цветовая схема [light, dark]                      |  `light`   |   `dark`    |
| Share             |  `bool`   | Указывает, размещать ли кнопку "Поделиться" рядом с кнопкой "Нравится" |  `false`   |   `true`    |
| URL               | `string`  |    URL веб-страницы, которой люди будут ставить отметки "Нравится".    |   `none`   |     `-`     |
| Layout            |  `enum`   |           Макет [standart, button_count, button, box_count]            | `standart` | `box_count` |
| Size              |  `enum `  |                      Размер кнопки [large, small]                      |  `small`   |   `large`   |
| Action            |  `enum `  |                     Тип действия [like, recommend]                     |   `like`   | `recommend` |
| Kid Directed Site |  `bool `  |                           Контент для детей                            |  `false`   |   `true`    |
| Facebook App ID   | `number ` |                         ID приложения FaceBook                         |   `none`   | `12345678`  |
| Language          |  `enum `  |                        Язык [Русский, English]                         | `English`  |  `Русский`  |

## 🗓 Changelog

- 16/03/2021 (v1.0)
  - Первая версия

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you can’t stand missing. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://feedback.quarkly.io/communities/1-quarkly-forum/categories/7-components/topics)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](./LICENSE).
