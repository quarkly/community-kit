## 📖 Подробный обзор

Текстовое поле для выбора диапазона дат. Используйте этот компонент в формах, где пользователь должен ввести диапазон дат.

## 🧩 Компоненты и свойства

Добавьте компонент на страницу и посмотрите как он работает в режиме превью.

### Формат даты

`Формат даты` записывается с помощью специальных символов.
Например:

| Шаблон |             Результат              |
|:-------|:----------------------------------:|
| d      |        `1`, `2`, ..., `31`         |
| dd     |       `01`, `02`, ..., `31`        |
| MMM    |      `Jan`, `Feb`, ..., `Dec`      |
| eeee   | `Monday`, `Tuesday`, ..., `Sunday` |

Полный список можно узнать [по ссылке](https://date-fns.org/docs/format).

### В интерфейсе

| Названия свойств   | По умолчанию |    Пример    |
|:-------------------|:------------:|:------------:|
| Формат даты        | `dd.MM.yyyy` | `yyyy-MM-dd` |
| Закрыть при выборе |  `Отмечен`   | `Не отмечен` |
| Выключен           | `Не отмечен` |  `Отмечен`   |

### В коде (для разработчиков)

| Названия свойств   |  Название в коде   |    Тип    | По умолчанию |    Пример    |
|:-------------------|:------------------:|:---------:|:------------:|:------------:|
| Формат даты        |   `formatString`   | `string`  | `dd.MM.yyyy` | `yyyy-MM-dd` |
| Закрыть при выборе | `closeOnSelection` | `boolean` |    `true`    |   `false`    |
| Выключен           |     `disabled`     | `boolean` |   `false`    |    `true`    |


## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/tree/master/src/DateRangeInput)

## 🗓 Changelog

-   29/09/2021 (v1.0)
-   Первая версия

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you can’t stand missing. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](https://raw.githubusercontent.com/quarkly/community-kit/master/LICENSE).
