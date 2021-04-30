## 📖 Detailed overview

Компонент для добавления синхронизированной текстовой дорожки. Является дочерним компонентом для `Audio` и `Video`.
Текстовая дорожка обычно содержит субтитры на разных языках, комментарии, заголовки и т.д.

## 🎬 Live Demo

[Live demo link](https://quarkly-catalog.netlify.app/video/)

## ⚙️ Usage

1.  Добавьте внутрь компонента `Audio` или `Video`
2.  Укажите `Ссылку на файл` на панели Props
3.  Посмотрите как он работает в режиме превью

### Расширение файла

Файл с текстовой дорожкой должен иметь расширение `.vtt`

### Дорожка по умолчанию

Свойство `Использовать по умолчанию` указывает, что текущая дорожка предпочтительна.
Только для одной дорожки можно применить это свойство.

## 🧩 Components and Props

| Названия свойств          |   Type   |   Default   |
| :------------------------ | :------: | :---------: |
| Ссылка на файл            | `string` |     `-`     |
| Использовать по умолчанию |  `bool`  |   `false`   |
| Язык дорожки              | `string` |    `en`     |
| Назначение дорожки        |  `enum`  | `subtitles` |
| Отображаемое название     | `string` |   `none`    |

## 🗓 Changelog

-   21/04/2021 (v1.0)
-   Первая версия

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you would like to see added. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](./LICENSE).
