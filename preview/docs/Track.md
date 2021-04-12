## 📖 Detailed overview

Используйте, чтобы указать текстовую дорожку для видео или аудио. Является дочерним элементом компонентов `Video` и `Audio`. Такая дорожка обычно содержит субтитры на разных языках, комментарии, заголовки и др.

## 🎬 Live Demo

[Live demo link](https://quarkly-ui-components.netlify.app/video/)

## ⚙️ Usage

Добавьте внутрь компонента `Video` или `Audio`.

### Default

Путь к дорожке задается в поле `Src`. Текстовая дорожка должна иметь формат (.vtt).

### Default

Параметр `Default` указывает, что данная дорожка предпочтительна и должна быть выбрана по умолчанию. Только одна дорожка может иметь default.

## 🧩 Components and Props

| Props Name |   Type   |   Default   | Description                                                         |
| :--------- | :------: | :---------: | :------------------------------------------------------------------ |
| Src        | `string` |     `-`     | Путь к файлу с текстовой дорожкой                                   |
| Default    |  `bool`  |   `false`   | Дорожка по умолчанию                                                |
| SrcLang    | `string` |    `en`     | Язык дорожки                                                        |
| Kind       |  `enum`  | `subtitles` | Тип дорожки (subtitles, captions, descriptions, chapters, metadata) |
| Label      | `string` |   `none`    | Отображаемое название дорожки                                       |

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
