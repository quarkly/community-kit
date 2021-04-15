## 📖 Detailed overview

Компонент для анимирования одного или нескольких элементов.

## 🎬 Live Demo

[Live demo link](https://quarkly-ui-components.netlify.app/animation/)

## ⚙️ Usage

Добавьте компонент на страницу и поместите в него другой элемент, который желаете анимировать.

### Включить анимацию

При активации свойства `Play animation`, анимация будет вызыватся атоматически, без дополнительных действий.

## 🧩 Components and Props

| Props Name         |   Type   |               Description               |  Default   |  Example  |
| ------------------ | :------: | :-------------------------------------: | :--------: | :-------: |
| Trigger            |  `enum`  |      Действие, вызывающее анимацию      |    `-`     |  `click`  |
| Animation type     |  `enum`  |              Тип анимации               | `Fade Out` | `Fade In` |
| Iteration Count    |  `enum`  | Повторяемость анимации [once, infinity] | `infinity` |  `once`   |
| Timing function    | `string` |        Cкорость течения анимации        |   `none`   | `linear`  |
| Duration           | `string` |       Продолжительность анимации        |    `1s`    |   `3s`    |
| Delay before start | `string` |     Задержка перед началом анимации     |    `0S`    |   `1s`    |
| Play animation     |  `bool`  |       Включить анимацию для теста       |  `false`   |  `true`   |

## 🗓 Changelog

- 16/03/2021 (v1.0)
  - Первая версия

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you would like to see added. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://feedback.quarkly.io/communities/1-quarkly-forum/categories/7-components/topics)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](./LICENSE).
