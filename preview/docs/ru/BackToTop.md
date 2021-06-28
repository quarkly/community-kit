## 📖 Detailed overview

Компонент состоит из кнопки, которая расположена в правом нижнем углу экрана. При нажатии на нее, страница автоматически прокрутится в самое начало.

## 🎬 Live Demo

[Live demo link](https://quarkly-ui-components.netlify.app/backtotop/)

## ⚙️ Usage

Добавьте компонент на страницу. Отмечу, что при добавлении компонент визуально не отобразится. Чтобы проверить работоспособность компонента в конструкторе, задайте сверху в параметрах холста ограничение по высоте. Также, вы можете опубликовать сайт и проверить там.

### Принудительный показ кнопки

Свойство `Show Button Always` отвечает за принудительный показ кнопки всегда. Свойство может понадобится при редактировании кнопки.

## 🧩 Components and Props

| Props Name              |   Type    |                           Description                            |     Default     | Example  |
| ----------------------- | :-------: | :--------------------------------------------------------------: | :-------------: | :------: |
| Animation Duration      | `number ` |                Продолжительность анимации (в мс)                 |     `1000`      | `15000`  |
| Animation Easing Preset |  `enum`   |               Автоматическое воспроизведение аудио               | `easeInOutQuad` | `linear` |
| Show Button After       | `number`  | Показать кнопку, после прокрутки на заданное количество пикселей |      `100`      |  `200`   |
| Show Button Always      |  `bool`   |                     Показывать кнопку всегда                     |     `false`     |  `true`  |

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

Licensed under the [MIT License](https://raw.githubusercontent.com/quarkly/community-kit/master/LICENSE).
