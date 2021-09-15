## 📖 Detailed overview

Компонент для добавления многострочного поля ввода в форму.

## ⚙️ Usage

1.  Добавьте компонент Form на страницу
2.  Добавьте компонент Textarea в компонент Form
3.  Укажите свойство `name` и остальные, при необходимости
4.  Посмотрите как он работает в режиме превью

## 🧩 Components and Props

### In the interface

| Prop Name     |           Default            |     Example     |
| :------------ | :--------------------------: | :-------------: |
| Name          |             `-`              |     `name`      |
| Placeholder   |             `-`              |   `Your name`   |
| Default value |             `-`              |     `John`      |
| Resize        | `По горизонтали и вертикали` | `Не изменяются` |
| AutoFocus     |         `Unchecked`          |    `Checked`    |
| Required      |         `Unchecked`          |    `Checked`    |
| Disabled      |         `Unchecked`          |    `Checked`    |
| Max length    |             `-`              |      `10`       |

### In the code (for developers)

| Prop Name     | Name in the code |   Type    | Default |   Example   |
| :------------ | :--------------: | :-------: | :-----: | :---------: |
| Name          |     `title`      | `string`  |   `-`   |   `name`    |
| Placeholder   |  `placeholder`   | `string`  |   `-`   | `Your name` |
| Default value |  `defaultValue`  | `string`  |   `-`   |   `John`    |
| Resize        |     `resize`     |  `enum`   | `both`  |   `none`    |
| AutoFocus     |   `autoFocus`    | `boolean` | `false` |   `true`    |
| Required      |    `required`    | `boolean` | `false` |   `true`    |
| Disabled      |    `disabled`    | `boolean` | `false` |   `true`    |
| Max length    |   `maxlength`    | `number`  |   `-`   |    `10`     |

#### The 'Resize' property values

| User-friendly name         | Name in the code |
| :------------------------- | :--------------: |
| По горизонтали и вертикали |      `both`      |
| Только по горизонтали      |   `horizontal`   |
| Только по вертикали        |    `vertical`    |
| Не изменяются              |      `none`      |

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/blob/master/src/Textarea/Textarea.js)

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
