## 📖 Detailed overview

Компонент представляет из себя видеопроигрыватель сервиса Youtube.

## 🎬 Live Demo

[Live demo link](https://quarkly-ui-components.netlify.app/youtube/)

## ⚙️ Usage

Добавьте компонент на страницу и посмотрите как он работает в режиме превью.

### Варианты работы

- `Fast and low traffic` - Сначала отображается только превью, а затем подгружается видео (iframe) ютуба;
- `Standard` - Стандартный iframe.

### Автоматическая остановка видео

Свойство `End` отвечает за остановку видео, после истечения определенного количества секунд. Время измеряется с начала видео, а не со значения свойтва `Start`

## 🧩 Components and Props

| Props Name |   Type    |                     Description                     |        Default         |   Example   |
| ---------- | :-------: | :-------------------------------------------------: | :--------------------: | :---------: |
| Variant    |  `enum`   |  Варианты работы [Fast and low traffic, Standart]   | `fast and low traffic` | `Standart`  |
| Src        | `string`  |          Ссылка на видео ролик из YouTube           |          `-`           |     `-`     |
| Alt        | `string`  |                 Альтернативное имя                  |       `My Video`       | `Some Name` |
| Loop       |  `bool`   | Воспроизводить видео с начала, после его завершения |        `false`         |   `true`    |
| Autoplay   |  `bool`   |        Автоматическое воспроизведение видео         |        `false`         |   `true`    |
| Start      | `number ` |    Начать воспроизведение с определенной секунды    |          `0`           |    `20`     |
| End        | `number ` | Количество секунд, после которой видео остановится  |         `none`         |    `60`     |

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
