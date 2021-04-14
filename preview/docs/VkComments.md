## 📖 Detailed overview

Компонент показывает форму с комментариями сообщества VK.

## 🎬 Live Demo

[Live demo link](https://quarkly-ui-components.netlify.app/vkcomment/)

## ⚙️ Usage

Добавьте компонент на страницу, укажите ваш `VK App ID` и посмотрите как он работает в режиме превью.

### Приложение FaceBook

Для работы компонента, необходимо сначала создать виджет комментария на сайте VK. Сделать это можно по этой ссылке: [VK Comment](https://vk.com/dev/Comments)


## 🧩 Components and Props

| Props Name   |   Type    |                            Description                            | Default |  Example  |
| ------------ | :-------: | :---------------------------------------------------------------: | :-----: | :-------: |
| Graffiti     |  `bool`   |                 Возможность прикрепления граффити                 | `true`  |  `false`  |
| Photo        |  `bool`   |               Возможность прикрепления изображений                | `true`  |  `false`  |
| Audio        |  `bool`   |                  Возможность прикрепления аудио                   | `true`  |  `false`  |
| Video        |  `bool`   |                  Возможность прикрепления видео                   | `true`  |  `false`  |
| Link         |  `bool`   |                  Возможность прикрепления ссылок                  | `true`  |  `false`  |
| VK App ID    | `string ` |                            ID виджета                             | `none`  | `1234567` |
| Page ID      | `string ` |                 Внутренний идентификатор страницы                 | `none`  | `some_id` |
| Limit        | `number`  |  Максимальное число комментариев на странице. (мин: 5, мак: 100)  |   `5`   |   `20`    |
| Auto Publish |  `bool`   |  Aвтоматически публиковать комментарии на странице пользователя   | `false` |  `true`   |
| No Realtime  |  `bool`   |     Обновлять ленту комментариев в режиме реального времени.      | `false` |  `true`   |
| Page URL     | `string`  | URL страницы, ссылка на которую будет прикреплена к комментарtrue | `none`  |    `-`    |

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
