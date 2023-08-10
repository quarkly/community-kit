## 📖 Подробный обзор

Настраиваемая карусель с отображением любого типа контента.

## ⚙️ Использование

Добавьте компонент на страницу и посмотрите как он работает в режиме превью.

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств                |  По умолчанию  |    Пример    |
| :------------------------------ | :------------: | :----------: |
|                                 |   **Slides**   |              |
| Количество слайдов              |      `4`       |     `2`      |
| Использовать в качестве слайдов |     `Box`      |  `LinkBox`   |
|                                 | **Navigation** |              |
| Показывать стрелки              |  `Arrows In`   | `Arrows Out` |
| Показывать пагинацию            |  `Labels In`   |  `Dots in`   |
| Перетаскиваемый                 |   `Отмечен`    | `Не отмечен` |
| Бесконечный режим               |   `Отмечен`    | `Не отмечен` |
| Управление клавиатурой          |   `Отмечен`    | `Не отмечен` |
|                                 |  **Autoplay**  |              |
| Автоматическая прокрутка        |  `Не отмечен`  |  `Отмечен`   |
| Скорость                        |    `1500ms`    |     `5s`     |
| Пауза при наведении             |   `Отмечен`    | `Не отмечен` |
| Показывать кнопку               |  `Не отмечен`  |  `Отмечен`   |
|                                 | **Animation**  |              |
| Эффект                          |    `Slide`     |    `Fade`    |
| Длительность                    |     `0.5s`     |     `1s`     |
| Функция                         |     `ease`     |   `linear`   |

### В коде (для разработчиков)

| Названия свойств                |   Название в коде    |      Тип       | По умолчанию |   Пример    |
| :------------------------------ | :------------------: | :------------: | :----------: | :---------: |
|                                 |                      |   **Slides**   |              |             |
| Количество слайдов              |    `slidesCount`     |    `number`    |     `4`      |     `2`     |
| Использовать в качестве слайдов |                      |     `enum`     |    `Box`     |  `LinkBox`  |
|                                 |                      | **Navigation** |              |             |
| Показывать стрелки              |     `showArrows`     |     `enum`     |  `arrowsin`  | `arrowsout` |
| Показывать пагинацию            |   `showPagination`   |     `enum`     | `Labels In`  |  `Dots in`  |
| Перетаскиваемый                 |     `draggable`      |   `boolean`    |    `true`    |   `false`   |
| Бесконечный режим               |    `infinityMode`    |   `boolean`    |    `true`    |   `false`   |
| Управление клавиатурой          |  `keyboardControl`   |   `boolean`    |    `true`    |   `false`   |
|                                 |                      |  **Autoplay**  |              |             |
| Автоматическая прокрутка        |      `autoPlay`      |   `boolean`    |              |             |
| Скорость                        |   `autoPlaySpeed`    |    `string`    |   `1500ms`   |    `5s`     |
| Пауза при наведении             | `autoPlayHoverPause` |   `boolean`    |    `true`    |   `false`   |
| Показывать кнопку               | `showAutoPlayButton` |   `boolean`    |   `false`    |   `true`    |
|                                 |                      | **Animation**  |              |             |
| Эффект                          |       `effect`       |     `enum`     |   `Slide`    |   `Fade`    |
| Длительность                    |    `animDuration`    |    `string`    |    `0.5s`    |    `1s`     |
| Функция                         |    `animFunction`    |    `string`    |    `ease`    |  `linear`   |

#### Значения свойства 'Использовать в качестве слайдов'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| Box                       |      `box`      |
| LinkBox                   |    `linkbox`    |

#### Значения свойства 'Показывать стрелки'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| None                      |     `none`      |
| Arrows In                 |   `arrowsin`    |
| Arrows Out                |   `arrowsout`   |

#### Значения свойства 'Показывать пагинацию'

| Пользовательское название | Название в коде  |
| :------------------------ | :--------------: |
| None                      |      `none`      |
| Labels In                 |    `labelsin`    |
| Labels Out                |   `labelsout`    |
| Thumbnails In             |  `thumbnailsin`  |
| Thumbnails Out            | `thumbnailsout`  |
| Dots in                   |     `dotsin`     |
| Dots out                  |    `dotsout`     |
| Dynamic dots in           | `dynamicdotsin`  |
| Dynamic dots out          | `dynamicdotsout` |
| Fraction in               |   `fractionin`   |
| Fraction out              |  `fractionout`   |
| Progress                  |    `progress`    |

#### Значения свойства 'Эффект'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| Slide                     |     `slide`     |
| Fade                      |     `fade`      |

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/tree/master/src/BoxCarousel)

## 🗓 Changelog

-   16.05.2023 (v1.0)
-   Первая версия

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you can’t stand missing. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](https://raw.githubusercontent.com/quarkly/community-kit/master/LICENSE).
