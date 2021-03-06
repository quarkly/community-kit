## 📖 Подробный обзор

Вращающаяся карточка с изображением. Вращается по клику или наведению курсора.
На обратную сторону можно добавить любые другие компоненты.

## ⚙️ Использование

Добавьте компонент на страницу и посмотрите как он работает в режиме превью.

### Поменять изображение карточки

Чтобы изменить изображение карточки, выберите встроенный компонент `Image` и измените ссылку в параметре `Src`.

### Соотношение сторон изображения

Если выбрать значение `auto` в свойстве `Соотношение сторон`, размер изображения будет равен размеру (высоте и ширине) компонента.

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств             |            По умолчанию            |     Пример     |
| :--------------------------- | :--------------------------------: | :------------: |
| Триггер переворота           |             `По клику`             | `По наведению` |
| Напраление переворота        |              `Вправо`              |     `Вниз`     |
| Соотношение сторон           |             `Вручную`              |     `1:1`      |
| Функция сглаживания анимации | `cubic-bezier(.50,-0.35,.50,1.65)` |   `ease-in`    |
| Длительность анимации        |                `1s`                |     `0.5s`     |
| Перевернуть карточку         |            `Не отмечен`            |   `Отмечен`    |

### В коде (для разработчиков)

| Названия свойств             |   Название в коде    |    Тип    |            По умолчанию            |  Пример   |
| :--------------------------- | :------------------: | :-------: | :--------------------------------: | :-------: |
| Триггер переворота           |  `flipTriggerProp`   |  `enum`   |              `click`               |  `hover`  |
| Напраление переворота        | `flipDirectionProp`  |  `enum`   |             `toRight`              | `toDown`  |
| Соотношение сторон           |  `aspectRatioProp`   |  `enum`   |               `auto`               |   `1:1`   |
| Функция сглаживания анимации | `timingFunctionProp` | `string`  | `cubic-bezier(.50,-0.35,.50,1.65)` | `ease-in` |
| Длительность анимации        |  `flipDurationProp`  | `string`  |                `1s`                |  `0.5s`   |
| Перевернуть карточку         |   `isFlippedProp`    | `boolean` |              `false`               |  `true`   |

#### Значения свойства 'Триггер переворота'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| По клику                  |     `click`     |
| По наведению              |     `hover`     |

#### Значения свойства 'Напраление переворота'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| Вправо                    |    `toRight`    |
| Влево                     |    `toLeft`     |
| Вверх                     |     `toUp`      |
| Вниз                      |    `toDown`     |

#### Значения свойства 'Соотношение сторон'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| 16:9                      |     `16:9`      |

Значения свойства `Соотношение сторон` полностью совпадают с их пользовательскими названиями.

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/tree/master/src/CardFlip)

## 🗓 Changelog

-   21/04/2021 (v1.0)
-   Первая версия

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you can’t stand missing. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](https://raw.githubusercontent.com/quarkly/community-kit/master/LICENSE).
