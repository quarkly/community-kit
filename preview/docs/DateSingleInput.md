## 📖 Detailed overview

This component is a text field for selecting the date. Use it in forms where the user must enter a date.

## 🧩 Components and Props

Add the component to the page and check how it works in the preview mode.

### Date format

`Date format` must be written with special format strings. For example:

| Format |               Result               |
|:------ |:----------------------------------:|
| d      |        `1`, `2`, ..., `31`         |
| dd     |       `01`, `02`, ..., `31`        |
| MMM    |      `Jan`, `Feb`, ..., `Dec`      |
| eeee   | `Monday`, `Tuesday`, ..., `Sunday` |

See the full list at [link](https://date-fns.org/docs/format).

### In the interface

| Prop names         |   Default    |   Example    |
|:------------------ |:------------:|:------------:|
| Date format        | `dd.MM.yyyy` | `yyyy-MM-dd` |
| Close by selecting |  `Checked`   | `Unchecked`  |
| Closed             | `Unchecked`  |  `Checked`   |

### In the code (for developers)

| Prop names         |  Name in the code  |   Type    |   Default    |   Example    |
|:------------------ |:------------------:|:---------:|:------------:|:------------:|
| Date format        |   `formatString`   | `string`  | `dd.MM.yyyy` | `yyyy-MM-dd` |
| Close by selecting | `closeOnSelection` | `boolean` |    `true`    |   `false`    |
| Closed             |     `disabled`     | `boolean` |   `false`    |    `true`    |


## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/tree/master/src/DateSingleInput)

## 🗓 Changelog

-   29/09/2021 (v1.0)
-   First version

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re developing all the time, so don’t hesitate to send us your feedback and request new features you would like to see added. Feel free to share what you’re working on - we'd **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](https://raw.githubusercontent.com/quarkly/community-kit/master/LICENSE).
