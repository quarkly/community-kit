## 📖 Подробный обзор

Компонент является картинкой с подписью. При клике на картинку она открывается на полный экран.

## ⚙️ Использование

Добавьте компонент на страницу и посмотрите как он работает в режиме превью.

### Изображение

Чтобы заменить изображение на другое, нужно указать его через свойство `Ссылка на изображение`.

### Показать lightbox

Свойство может понадобится при редактировании элементов, которые появляются при открытии lightbox.

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств      |                                                                                          По умолчанию                                                                                          |             Пример             |
| :-------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------: |
| Ссылка на изображение | [`Watermelon salad with feta`](https://images.unsplash.com/photo-1649825319037-f30ea5b611c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80) | `Ссылка на другое изображение` |
| Размер                |                                                                                            `Scale`                                                                                             |          `Real size`           |
| Длительность          |                                                                                            `300ms`                                                                                             |            `700ms`             |
| Функция сглаживания   |                                                                                             `ease`                                                                                             |           `ease-in`            |
| Показывать подпись    |                                                                                           `Отмечен`                                                                                            |          `Не отмечен`          |
| Показать Lightbox     |                                                                                          `Не отмечен`                                                                                          |           `Отмечен`            |
| Показать Button :open |                                                                                          `Не отмечен`                                                                                          |           `Отмечен`            |

### В коде (для разработчиков)

| Названия свойств      | Название в коде  |    Тип    |                                                                                          По умолчанию                                                                                          |             Пример             |
| :-------------------- | :--------------: | :-------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------: |
| Ссылка на изображение |      `src`       | `string`  | [`Watermelon salad with feta`](https://images.unsplash.com/photo-1649825319037-f30ea5b611c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80) | `Ссылка на другое изображение` |
| Размер                |      `size`      |  `enum`   |                                                                                            `Scale`                                                                                             |          `Real size`           |
| Длительность          |   `dureation`    | `string`  |                                                                                            `300ms`                                                                                             |            `700ms`             |
| Функция сглаживания   | `timingFunction` | `string`  |                                                                                             `ease`                                                                                             |           `ease-in`            |
| Показывать подпись    |  `showCaption`   | `boolean` |                                                                                           `Отмечен`                                                                                            |          `Не отмечен`          |
| Показать lightbox     |  `showLightbox`  | `boolean` |                                                                                          `Не отмечен`                                                                                          |           `Отмечен`            |

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/blob/master/src/ImageViewer)

## 🗓 Changelog

-   21/04/2022 (v1.0)
-   Первая версия

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you would like to see added. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](https://raw.githubusercontent.com/quarkly/community-kit/master/LICENSE).
