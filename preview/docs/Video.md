Видеопроигрыватель. Используйте его для встраивания видео контента на сайте.

## 🎬 Live Demo

[Live demo link](https://quarkly-ui-components.netlify.app/video/)

## ⚙️ Usage

Добавьте компонент на страницу и посмотрите как он работает в режиме превью.

### Вложенность

Компонент `Video` может содержать в себе компоненты `Source` и `Track`

### Заменить видео

Чтобы заменить видеофайл, задайте новое значение для свойства `Src`.

### Постер

Значение для свойства `Poster` можно оставить пустым, тогда постер будет сгенерирован автоматически из видео.

## 🧩 Components and Props

| Props Name    |   Type    | Default | Description                                        |
| :------------ | :-------: | :-----: | :------------------------------------------------- |
| Loop          |  `bool`   | `false` | Воспроизводить видео с начала после его завершения |
| Show controls |  `bool`   | `true`  | Показать элементы управления                       |
| Muted         |  `bool`   | `false` | Отключить звук                                     |
| Autoplay      |  `bool`   | `false` | Автоматическое воспроизведение видео               |
| Poster        | `string`  |   `-`   | Ссылка на изображение постера                      |
| Src           | `string ` |   `-`   | Прямая ссылка на видеофайл                         |
| PlayOnHover   |  `bool `  | `false` | Воспроизводить при наведении на видео              |

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
