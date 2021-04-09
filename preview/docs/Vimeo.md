## 📖 Detailed overview

Компонент представляет из себя видеопроигрыватель сервиса Vimeo.

## 🎬 Live Demo

[Live demo link](https://quarkly-ui-components.netlify.app/vimeo/)

## ⚙️ Usage

Добавьте компонент на страницу и посмотрите как он работает в режиме превью.

### Воспроизведение в режиме фона

За это отвечает свойство `Play Background`. Если свойство содержит `true`, то видео будет воспроизводиться в режиме фоне. То есть, скрываются элементы управления, включается автовоспроизведение и видео зацикливается.

## 🧩 Components and Props

| Props Name      |   Type    |   Default   | Description                                                   |
| :-------------- | :-------: | :---------: | :------------------------------------------------------------ |
| Color           | `string`  |  `#00ADEF`  | Цвета элементов проигрывателя                                 |
| Enable          |  `bool`   |   `true`    | Показать элементы управления проигрывателя                    |
| Autopause       |  `bool`   |   `true`    | Автоматически останавливать видео при воспроизведении другого |
| Autoplay        |  `bool`   |   `false`   | Автоматическое воспроизведение видео                          |
| Show Portrait   |  `bool`   |   `true`    | Отображать портрет владельца видео                            |
| Show Title      |  `bool `  |   `true`    | Показать название видео                                       |
| Show Byline     |  `bool `  |   `true`    | Отображать имя владельца видео                                |
| Responsive      |  `bool `  |   `true`    | Растянуть проигрыватель на всю ширину                         |
| Video ID or URL | `string ` | `187987907` | ID или URL видео из Vimeo                                     |
| Start           | `number ` |   `none`    | Начать воспроизведение с определенной секунды                 |
| Loop            |  `bool `  |   `false`   | Воспроизводить видео с начала, после его завершения           |
| Muted           |  `bool `  |   `false`   | Отключить звук видео                                          |
| Play Background |  `bool `  |   `false`   | Воспроизведение в фоновом режиме                              |
| Volume          | `number ` |     `1`     | Громкость звука (диапазон от 0 до 1)                          |

## 🗓 Changelog

    - 09/04/2021 (v1.0)
    - Первая версия

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you can’t stand missing. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://feedback.quarkly.io/communities/1-quarkly-forum/categories/7-components/topics)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](./LICENSE).
