## 📖 Detailed overview

This component helps create a group of Radio components.

## ⚙️ Usage

1.  Add the Form component to the page
2.  Add the RadioGroup component to the Form component
3.  Add the Radio components to the RadioGroup component
4.  Specify the `Name` and others if necessary for the RadioGroup component
5.  Specify the `Value` property for each Radio component
6.  See how it works in the preview mode

## 🧩 Components and Props

### In the interface

| Prop names     |   Default   |  Example  |
| :------------- | :---------: | :-------: |
| Name           |     `-`     |  `name`   |
| Default value  |     `-`     |  `John`   |
| Required field | `Unchecked` | `Checked` |

### In the code (for developers)

| Prop names     | Name in the code |    Type    | Default |              Example              |
| :------------- | :--------------: | :--------: | :-----: | :-------------------------------: |
| Name           |      `name`      |  `string`  |   `-`   |              `name`               |
| Default value  |  `defaultValue`  |  `string`  |   `-`   |              `John`               |
| Required field |    `required`    | `boolean`  | `false` |              `true`               |
| -              |     `value`      |   `name`   |   `-`   |                `5`                |
| -              |    `onChange`    | `function` |   `-`   | `(e) => setValue(e.target.value)` |

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/blob/master/src/RadioGroup)

## 🗓 Changelog

-   21/04/2021 (v1.0)
-   First version

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re developing all the time, so don’t hesitate to send us your feedback and request new features you would like to see added. Feel free to share what you’re working on - we'd **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](https://raw.githubusercontent.com/quarkly/community-kit/master/LICENSE).
