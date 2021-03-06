## 📖 Подробный обзор

Лента с изображениями, которую можно листать нажатием на стрелки или точки.
Для изображений можно показывать заголовок, описание и ссылку на страницу.

## ⚙️ Использование

Добавьте компонент на страницу и посмотрите как он работает в режиме превью.

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств                            |        По умолчанию        |           Пример            |
| :------------------------------------------ | :------------------------: | :-------------------------: |
| Количество слайдов                          |            `4`             |             `2`             |
| Соотношение сторон                          |           `16:9`           |            `1:1`            |
| Использовать в качестве слайдов             |           `Box`            |           `Link`            |
| Показать стрелки                            |         `Отмечен`          |        `Не отмечен`         |
| Показать точки                              |         `Отмечен`          |        `Не отмечен`         |
| Функция сглаживания анимации                |          `linear`          |           `easy`            |
| Длительность анимации                       |           `0.5s`           |            `1s`             |
| Показать заголовок                          |         `Отмечен`          |        `Не отмечен`         |
| Показать описание                           |         `Отмечен`          |        `Не отмечен`         |
| Показать кнопку                             |         `Отмечен`          |        `Не отмечен`         |
| Автоматическое переключение слайдов         |         `Отмечен`          |        `Не отмечен`         |
| Тип автоматического переключения слайдов    | `Бесконечное переключение` | `Остановиться на последнем` |
| Интервал переключения слайдов               |            `1s`            |            `2s`             |
| Задержка перед началом переключения слайдов |            `0s`            |            `5s`             |
| Пауза переключения слайдов при клике        |            `5s`            |            `10s`            |

### В коде (для разработчиков)

| Названия свойств                            |    Название в коде     |    Тип    | По умолчанию | Пример  |
| :------------------------------------------ | :--------------------: | :-------: | :----------: | :-----: |
| Количество слайдов                          |      `slidesProp`      | `string`  |     `4`      |   `2`   |
| Соотношение сторон                          |     `aspectRatio`      |  `enum`   |    `16:9`    |  `1:1`  |
| Использовать в качестве слайдов             |    `slidesWrapper`     |  `enum`   |    `box`     | `link`  |
| Показать стрелки                            |      `showArrows`      | `boolean` |    `true`    | `false` |
| Показать точки                              |       `showDots`       | `boolean` |    `true`    | `false` |
| Функция сглаживания анимации                |     `functionProp`     | `string`  |   `linear`   | `easy`  |
| Длительность анимации                       |     `durationProp`     | `string`  |    `0.5s`    |  `1s`   |
| Показать заголовок                          |       `showHead`       | `boolean` |    `true`    | `false` |
| Показать описание                           |       `showText`       | `boolean` |    `true`    | `false` |
| Показать кнопку                             |       `showLink`       | `boolean` |    `true`    | `false` |
| Автоматическое переключение слайдов         |       `autoPlay`       | `boolean` |    `true`    | `false` |
| Тип автоматического переключения слайдов    |   `autoPlayBehavior`   |  `enum`   |  `infinite`  | `range` |
| Интервал переключения слайдов               | `autoPlayIntervalProp` | `string`  |     `1s`     |  `2s`   |
| Задержка перед началом переключения слайдов |  `autoPlayDelayProp`   | `string`  |     `0s`     |  `5s`   |
| Пауза переключения слайдов при клике        |  `autoPlayPauseProp`   | `string`  |     `5s`     |  `10s`  |

#### Значения свойства 'Соотношение сторон'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| 16:9                      |     `16:9`      |

Значения свойства `Соотношение сторон` полностью совпадают с их пользовательскими названиями.

#### Значения свойства 'Использовать в качестве слайдов'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| Box                       |      `box`      |
| Link                      |     `link`      |

#### Значения свойства 'Тип автоматического переключения слайдов'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| Бесконечное переключение  |   `infinite`    |
| Остановиться на последнем |     `range`     |

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/tree/master/src/Carousel)

## 🗓 Changelog

-   12.05.2021 (v1.1)
-   21.04.2021 (v1.0)
-   Первая версия

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you can’t stand missing. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](https://raw.githubusercontent.com/quarkly/community-kit/master/LICENSE).
