## 📖 Подробный обзор

Простое меню для вашего сайта.

## ⚙️ Использование

Добавьте компонент на страницу и измените значение свойства `Максимальная вложенность` при необходимости.

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств                         |   По умолчанию    |          Пример           |
| :--------------------------------------- | :---------------: | :-----------------------: |
| Максимальная вложенность                 |        `1`        |            `5`            |
| Корневая страница                        |      `root`       | `Название вашей страницы` |
| Не выделять родительские активные пункты |     `Отмечен`     |       `Не отмечен`        |
| Режим фильтрации                         | `Скрыть страницы` |    `Показать страницы`    |
| Список страниц                           |       `[]`        |   `['/index', '/page']`   |

### В коде (для разработчиков)

| Названия свойств                         |   Название в коде    |    Тип    | По умолчанию |          Пример           |
| :--------------------------------------- | :------------------: | :-------: | :----------: | :-----------------------: |
| Максимальная вложенность                 |       `depth`        | `string`  |     `1`      |            `5`            |
| Корневая страница                        |       `rootId`       | `string`  |    `root`    | `Название вашей страницы` |
| Не выделять родительские активные пункты | `exact-active-match` | `boolean` |    `true`    |          `false`          |
| Режим фильтрации                         |     `filterMode`     |  `enum`   |  `exclude`   |         `include`         |
| Список страниц                           |    `filterPages`     | `string`  |              |      `/index,/page`       |

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/blob/master/src/Menu)

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
