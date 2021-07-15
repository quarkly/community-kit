## 📖 Detailed overview

This component is a counter that increases or decreases to a certain value.

## ⚙️ Usage

Add the component to the page and see how it works in the preview mode.

### Start and end values

The values in `Start value` and `End value` can be set and can be either positive or negative. It's important that the start value is smaller than the end value. If a countdown is required, select `Decrease` in the `Count direction` property, then the start value becomes the end value and the end value becomes the start value.

### Counter start

The counter will start automatically when it becomes visible in the window.

## 🧩 Components and Props

| Prop name                 |   Type   |    Default     |         Example          |
| :------------------------ | :------: | :------------: | :----------------------: |
| Count start               |  `enum`  | `On page load` | `On screen intersection` |
| Start value               | `number` |      `0`       |          `100`           |
| End value                 | `number` |     `100`      |          `200`           |
| Count direction           |  `enum`  |    `Normal`    |        `Reverse`         |
| Count duration            | `string` |      `2s`      |          `10s`           |
| Delay before count starts | `string` |      `0s`      |           `1s`           |
| Text after value          | `string` |      `-`       |           `%`            |
| Text before value         | `string` |      `-`       |           `$`            |

## 🗓 Changelog

-   21/04/2021 (v1.0)
-   First version

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you would like to see added. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/SuF9vCMJGW)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](https://raw.githubusercontent.com/quarkly/community-kit/master/LICENSE).
