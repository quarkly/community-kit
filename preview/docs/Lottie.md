## 📖 Detailed overview

This component is used for adding lightweight and scalable Lottie animations to your website.

## ⚙️ Usage

Add the component to the page, provide a link to the animation file and see how it works in the builder.

By default, the `File path` property has the `https://assets2.lottiefiles.com/packages/lf20_ah1zbzo1.json` value.

## 🧩 Components and Props

### In the interface

| Prop names      |   Default    |   Example    |
| :-------------- | :----------: | :----------: |
| File path       |     `-`      |     `-`      |
| Render          |    `SVG`     |   `Canvas`   |
| First frame     |     `-`      |     `10`     |
| Last frame      |     `-`      |     `50`     |
| Force update    |  `Отмечен`   | `Не отмечен` |
| Loop animation  |  `Отмечен`   | `Не отмечен` |
| Pause animation | `Не отмечен` |  `Отмечен`   |
| Stop animation  | `Не отмечен` |  `Отмечен`   |
| Animation speed |     `1`      |    `0.5`     |

### In the code (for developers)

| Prop names      | Name in the code |   Type    | Default | Example  |
| :-------------- | :--------------: | :-------: | :-----: | :------: |
| File path       |      `path`      | `string`  |   `-`   |   `-`    |
| Render          |    `renderer`    |  `enum`   |  `SVG`  | `Canvas` |
| First frame     |   `firstFrame`   | `string`  |   `-`   |   `10`   |
| Last frame      |   `lastFrame`    | `string`  |   `-`   |   `50`   |
| Force update    |  `forceUpdate`   | `boolean` | `true`  | `false`  |
| Loop animation  |      `loop`      | `boolean` | `true`  | `false`  |
| Pause animation |    `isPaused`    | `boolean` | `false` |  `true`  |
| Stop animation  |   `isStopped`    | `boolean` | `false` |  `true`  |
| Animation speed |     `speed`      | `string`  |   `1`   |  `0.5`   |

#### The 'Render' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| SVG (Recommended)  |      `svg`       |
| Canvas             |     `canvas`     |
| HTML               |      `html`      |

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/tree/master/src/Lottie)

## 🗓 Changelog

-   30/06/2021 (v1.0)
-   First version

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you would like to see added. Feel free to share what you’re working on - we'd **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](./LICENSE).
