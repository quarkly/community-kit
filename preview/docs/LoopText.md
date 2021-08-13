## 📖 Detailed overview

This component allows you to loop text in the header.

## ⚙️ Usage

Add the component to the page and see how it works in the preview mode.

### Edit slides

To replace the default text, select a component and change the values of the prop `Slider list` prop. To add or remove slides, use the "+" and "-" buttons.‎

Please note that the slides can't be removed by default. So just replace the default text.

## 🧩 Components and Props

### In the interface

| Prop name                                  |  Default  |      Example      |
| :----------------------------------------- | :-------: | :---------------: |
| Slider list                                |   `[]`    | `[first, second]` |
| Slideshow intervals                        |  `3000`   |      `1500`       |
| Delay before animation starts              |    `0`    |      `1000`       |
| Container change duration                  |   `150`   |       `50`        |
| Hide/show animation                        | `Checked` |    `Unchecked`    |
| Hide animation at the container boundaries | `Checked` |    `Unchecked`    |
| Forbid line breaking                       | `Checked` |    `Unchecked`    |

### In the code (for developers)

| Prop name                                  |   Name in the code   |   Type    | Default |      Example      |
| :----------------------------------------- | :------------------: | :-------: | :-----: | :---------------: |
| Slider list                                |       `slides`       | `string`  |  `[]`   | `[first, second]` |
| Slideshow intervals                        |    `intervalProp`    | `string`  | `3000`  |      `1500`       |
| Delay before animation starts              |     `delayProp`      | `string`  |   `0`   |      `1000`       |
| Container change duration                  | `adjustingSpeedProp` | `string`  |  `150`  |       `50`        |
| Hide/show animation                        |        `fade`        | `boolean` | `true`  |      `false`      |
| Hide animation at the container boundaries |        `mask`        | `boolean` | `true`  |      `false`      |
| Forbid line breaking                       |       `noWrap`       | `boolean` | `true`  |      `false`      |

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/blob/master/src/LoopText.js)

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
