## 📖 Detailed overview

Компонент для добавления поля ввода в форму.

## ⚙️ Usage

1.  Добавьте компонент Form на страницу
2.  Добавьте компонент Input в компонент Form
3.  Укажите свойство `name` и остальные, при необходимости
4.  Посмотрите как он работает в режиме превью

## 🧩 Components and Props

### In the interface

| Prop Name     |   Default   |         Example          |
| :------------ | :---------: | :----------------------: |
| Name          |     `-`     |          `name`          |
| Type          |   `text`    |         `number`         |
| Placeholder   |     `-`     |       `Your name`        |
| Default value |     `-`     |          `John`          |
| Autocomplete  | `Unchecked` |        `Checked`         |
| AutoFocus     | `Unchecked` |        `Checked`         |
| Required      | `Unchecked` |        `Checked`         |
| Disabled      | `Unchecked` |        `Checked`         |
| List          |     `-`     | `ID элемента <datalist>` |
| Pattern       |     `-`     |       `[0-9]{10}`        |
| Max length    |     `-`     |           `10`           |
| Min           |     `-`     |           `0`            |
| Max           |     `-`     |          `100`           |

### In the code (for developers)

| Prop Name     | Name in the code |   Type    | Default |         Example          |
| :------------ | :--------------: | :-------: | :-----: | :----------------------: |
| Name          |     `title`      | `string`  |   `-`   |          `name`          |
| Type          |      `type`      |  `enum`   | `text`  |         `number`         |
| Placeholder   |  `placeholder`   | `string`  |   `-`   |       `Your name`        |
| Default value |  `defaultValue`  | `string`  |   `-`   |          `John`          |
| Autocomplete  |  `autocomplete`  | `boolean` | `false` |          `true`          |
| AutoFocus     |   `autoFocus`    | `boolean` | `false` |          `true`          |
| Required      |    `required`    | `boolean` | `false` |          `true`          |
| Disabled      |    `disabled`    | `boolean` | `false` |          `true`          |
| List          |      `list`      | `string`  |   `-`   | `ID элемента <datalist>` |
| Pattern       |    `pattern`     | `string`  |   `-`   |       `[0-9]{10}`        |
| Max length    |   `maxlength`    | `number`  |   `-`   |           `10`           |
| Min           |      `min`       | `number`  |   `-`   |           `0`            |
| Max           |      `max`       | `number`  |   `-`   |          `100`           |

#### The 'Type' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| text               |      `text`      |

The names of the `Type` property values fully match.

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/blob/master/src/Input/Input.js)

## 🗓 Changelog

-   21/04/2021 (v1.0)
-   First version

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you would like to see added. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](https://raw.githubusercontent.com/quarkly/community-kit/master/LICENSE).
