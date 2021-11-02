## 📖 Подробный обзор

Компонент для добавления многострочного поля ввода в форму.

## ⚙️ Использование

1.  Добавьте компонент Form на страницу
2.  Добавьте компонент Textarea в компонент Form
3.  Укажите свойство `name` и остальные, при необходимости
4.  Посмотрите как он работает в режиме превью

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств |         По умолчанию         |     Пример      |
| :--------------- | :--------------------------: | :-------------: |
| Name             |             `-`              |     `name`      |
| Placeholder      |             `-`              |   `Ваше имя`    |
| Default value    |             `-`              |     `Джон`      |
| Resize           | `По горизонтали и вертикали` | `Не изменяются` |
| AutoFocus        |         `Не отмечен`         |    `Отмечен`    |
| Required         |         `Не отмечен`         |    `Отмечен`    |
| Disabled         |         `Не отмечен`         |    `Отмечен`    |
| Max length       |             `-`              |      `10`       |

### В коде (для разработчиков)

| Названия свойств | Название в коде |    Тип    | По умолчанию |   Пример   |
| :--------------- | :-------------: | :-------: | :----------: | :--------: |
| Name             |     `title`     | `string`  |     `-`      |   `name`   |
| Placeholder      |  `placeholder`  | `string`  |     `-`      | `Ваше имя` |
| Default value    | `defaultValue`  | `string`  |     `-`      |   `Джон`   |
| Resize           |    `resize`     |  `enum`   |    `both`    |   `none`   |
| AutoFocus        |   `autoFocus`   | `boolean` |   `false`    |   `true`   |
| Required         |   `required`    | `boolean` |   `false`    |   `true`   |
| Disabled         |   `disabled`    | `boolean` |   `false`    |   `true`   |
| Max length       |   `maxlength`   | `number`  |     `-`      |    `10`    |

#### Значения свойства 'Resize'

| Пользовательское название  | Название в коде |
| :------------------------- | :-------------: |
| По горизонтали и вертикали |     `both`      |
| Только по горизонтали      |  `horizontal`   |
| Только по вертикали        |   `vertical`    |
| Не изменяются              |     `none`      |

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/blob/master/src/Textarea/Textarea.js)

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
