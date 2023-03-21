## 📖 Подробный обзор

Многоуровневое меню, в котором вложенные страницы объединяются в именованную группу.

## ⚙️ Использование

Добавьте компонент на страницу и измените значение свойство `Максимальная вложенность` при необходимости.

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств             |           По умолчанию            |        Пример         |
| :--------------------------- | :-------------------------------: | :-------------------: |
| Максимальная вложенность     |               `10`                |          `5`          |
| Корневая страница            |                `-`                |        `index`        |
| Состояние групп по умолчанию | `Раскрыть перед активным пунктом` | `Раскрыть все группы` |
| Режим фильтрации             |         `Скрыть страницы`         |  `Показать страницы`  |
| Список страниц               |               `[]`                | `['/index', '/page']` |

### В коде (для разработчиков)

| Названия свойств             | Название в коде |   Тип    |  По умолчанию  |     Пример     |
| :--------------------------- | :-------------: | :------: | :------------: | :------------: |
| Максимальная вложенность     |     `depth`     | `string` |      `10`      |      `5`       |
| Корневая страница            |     `root`      | `string` |      `-`       |    `index`     |
| Состояние групп по умолчанию |   `tabState`    |  `enum`  | `expandActive` |  `expandAll`   |
| Режим фильтрации             |  `filterMode`   |  `enum`  |   `exclude`    |   `include`    |
| Список страниц               |  `filterPages`  | `string` |                | `/index,/page` |

#### Значения свойства 'Состояние групп по умолчанию'

| Пользовательское название       | Название в коде |
| :------------------------------ | :-------------: |
| Свернуть все группы             |  `collapseAll`  |
| Раскрыть перед активным пунктом | `expandActive`  |
| Раскрыть все группы             |   `expandAll`   |
| Держать все вкладки раскрытыми  | `keepExpanded`  |

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/blob/master/src/MenuWithGroups)

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
