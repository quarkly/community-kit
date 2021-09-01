## 📖 Подробный обзор

Компонент для добавления карты сервиса "Яндекс.Карты"

## ⚙️ Использование

Добавьте компонент на страницу, укажите `API Key` и посмотрите как он работает в режиме превью.

### ApiKey

Получить `API Key` можно по [инструкции](https://yandex.ru/blog/mapsapi/novye-pravila-dostupa-k-api-kart).

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств  | По умолчанию |                                      Пример                                       |
| :---------------- | :----------: | :-------------------------------------------------------------------------------: |
| API Ключ          |     `-`      | [`Ваш API Ключ`](https://yandex.ru/blog/mapsapi/novye-pravila-dostupa-k-api-kart) |
| Масштаб карты     |     `9`      |                                        `5`                                        |
| Широта            | `40.714599`  |                                    `60.714599`                                    |
| Долгота           | `-74.002791` |                                   `-34.002791`                                    |
| Поиск             | `Не отмечен` |                                     `Отмечен`                                     |
| Полноэкранный вид | `Не отмечен` |                                     `Отмечен`                                     |
| Геопозиция        | `Не отмечен` |                                     `Отмечен`                                     |
| Масштабирование   | `Не отмечен` |                                     `Отмечен`                                     |
| Пробки            | `Не отмечен` |                                     `Отмечен`                                     |
| Линейка           | `Не отмечен` |                                     `Отмечен`                                     |
| Варианты слоев    | `Не отмечен` |                                     `Отмечен`                                     |

### В коде (для разработчиков)

| Названия свойств  |   Название в коде    |    Тип    | По умолчанию |                                      Пример                                       |
| :---------------- | :------------------: | :-------: | :----------: | :-------------------------------------------------------------------------------: |
| API Ключ          |       `apikey`       | `string`  |     `-`      | [`Ваш API Ключ`](https://yandex.ru/blog/mapsapi/novye-pravila-dostupa-k-api-kart) |
| Масштаб карты     |     `zoomValue`      | `string`  |     `9`      |                                        `5`                                        |
| Широта            |   `latitudeCenter`   | `string`  | `40.714599`  |                                    `60.714599`                                    |
| Долгота           |  `longitudeCenter`   | `string`  | `-74.002791` |                                   `-34.002791`                                    |
| Поиск             |   `searchControl`    | `boolean` |   `false`    |                                      `true`                                       |
| Полноэкранный вид | `fullscreenControl`  | `boolean` |   `false`    |                                      `true`                                       |
| Геопозиция        | `geolocationControl` | `boolean` |   `false`    |                                      `true`                                       |
| Масштабирование   |    `zoomControl`     | `boolean` |   `false`    |                                      `true`                                       |
| Пробки            |   `trafficControl`   | `boolean` |   `false`    |                                      `true`                                       |
| Линейка           |    `rulerControl`    | `boolean` |   `false`    |                                      `true`                                       |
| Варианты слоев    | `typeSelectorContol` | `boolean` |   `false`    |                                      `true`                                       |

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/tree/master/src/YandexMap)

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

Licensed under the [MIT License](https://raw.githubusercontent.com/quarkly/community-kit/master/LICENSE).
