## 📖 Detailed overview

Используйте, чтобы указать нескольких медиа-ресурсов. Является дочерним элементом компонентов `Picture`, `Audio` и `Video`. Браузер может выбрать из предложенных, в зависимости от того какой он кодек или носитель он поддерживает.

## 🎬 Live Demo

[Live demo link](https://quarkly-ui-components.netlify.app/video/)

## ⚙️ Usage

Добавьте внутрь компонента `Video`, `Audio` или `Picture`.

### SrcSet и Sizes

Параметры `SrcSet` и `Sizes` позволяют явно определить размер и само изображение, которые должны быть использованы, в зависимости от условий `Media query`. Подробнее об этом можно прочитать здесь: [developer.mozilla.org](https://developer.mozilla.org/ru/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

## 🧩 Components and Props

| Props Name  |   Type   | Default | Description                                                                                               |
| :---------- | :------: | :-----: | :-------------------------------------------------------------------------------------------------------- |
| Src         | `string` |   `-`   | Ссылка на видео или аудио файл                                                                            |
| Type        |  `enum`  | `none`  | MIME-тип видео или аудио (video/mp4, video/webm, video/ogg, audio/mpeg, audio/midi, audio/wav, audio/ogg) |
| Codesc      | `string` | `none`  | Значение видео или аудиокодека                                                                            |
| Srcset      | `string` | `none`  | Ссылка на изображение                                                                                     |
| Sizes       | `string` | `none`  | Размеры изображения при разных размерах экрана                                                            |
| Device      |  `enum`  |  `all`  | Тип устройства для медиа запроса (all, braille, handheld, print, screen, speech, projection, tty, tv)     |
| Media query | `string` | `none`  | Mедиа-запрос, согласно которому будет выводиться изображение                                              |
| Type        |  `enum`  | `none`  | MIME-тип изображения (image/webp, image/png, image/bmp, image/jpeg, image/giff, image/tiff, image/pict)   |

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
