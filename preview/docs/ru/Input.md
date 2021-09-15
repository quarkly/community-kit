## 📖 Подробный обзор

Компонент для добавления поля ввода в форму.

## ⚙️ Использование

1.  Добавьте компонент Form на страницу
2.  Добавьте компонент Input в компонент Form
3.  Укажите свойство `name` и остальные, при необходимости
4.  Посмотрите как он работает в режиме превью

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств | По умолчанию |          Пример          |
| :--------------- | :----------: | :----------------------: |
| Name             |     `-`      |          `name`          |
| Type             |    `text`    |         `number`         |
| Placeholder      |     `-`      |        `Ваше имя`        |
| Default value    |     `-`      |          `Джон`          |
| Autocomplete     | `Не отмечен` |        `Отмечен`         |
| AutoFocus        | `Не отмечен` |        `Отмечен`         |
| Required         | `Не отмечен` |        `Отмечен`         |
| Disabled         | `Не отмечен` |        `Отмечен`         |
| List             |     `-`      | `ID элемента <datalist>` |
| Pattern          |     `-`      |       `[0-9]{10}`        |
| Max length       |     `-`      |           `10`           |
| Min              |     `-`      |           `0`            |
| Max              |     `-`      |          `100`           |

### В коде (для разработчиков)

| Названия свойств | Название в коде |    Тип    | По умолчанию |          Пример          |
| :--------------- | :-------------: | :-------: | :----------: | :----------------------: |
| Name             |     `title`     | `string`  |     `-`      |          `name`          |
| Type             |     `type`      |  `enum`   |    `text`    |         `number`         |
| Placeholder      |  `placeholder`  | `string`  |     `-`      |        `Ваше имя`        |
| Default value    | `defaultValue`  | `string`  |     `-`      |          `Джон`          |
| Autocomplete     | `autocomplete`  | `boolean` |   `false`    |          `true`          |
| AutoFocus        |   `autoFocus`   | `boolean` |   `false`    |          `true`          |
| Required         |   `required`    | `boolean` |   `false`    |          `true`          |
| Disabled         |   `disabled`    | `boolean` |   `false`    |          `true`          |
| List             |     `list`      | `string`  |     `-`      | `ID элемента <datalist>` |
| Pattern          |    `pattern`    | `string`  |     `-`      |       `[0-9]{10}`        |
| Max length       |   `maxlength`   | `number`  |     `-`      |           `10`           |
| Min              |      `min`      | `number`  |     `-`      |           `0`            |
| Max              |      `max`      | `number`  |     `-`      |          `100`           |

#### Значения свойства 'Type'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| text                      |     `text`      |

Значения свойства `Type` полностью совпадают с их пользовательскими названиями.

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/blob/master/src/Input/Input.js)

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
