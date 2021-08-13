## 📖 Detailed overview

Use this component to animate one or several elements.

## ⚙️ Usage

Add the component to the page, then add a component you want to animate.

### Switch on animation

If you activate the `Force animation` prop, the animation will start automatically.

## 🧩 Components and Props

### In the interface

| Prop name                     |    Default     |  Example   |
| :---------------------------- | :------------: | :--------: |
| Animation trigger             | `When loading` | `On click` |
| Animation type                |   `Fade Out`   | `Fade In`  |
| Number of iterations          |     `Loop`     |   `Once`   |
| Animation timing function     |    `linear`    |   `ease`   |
| Hide/show animation duration  |      `1s`      |    `3s`    |
| Delay before animation starts |      `0s`      |    `1s`    |
| Force animation               |  `Unchecked`   | `Checked`  |

### In the code (for developers)

| Prop name                     | Name in the code |   Type    |  Default   |  Example  |
| :---------------------------- | :--------------: | :-------: | :--------: | :-------: |
| Animation trigger             |    `trigger`     |  `enum`   |  `onload`  |  `click`  |
| Animation type                |   `animation`    |  `enum`   | `Fade Out` | `Fade In` |
| Number of iterations          |   `iteration`    |  `enum`   | `infinity` |  `once`   |
| Animation timing function     | `timingFunction` | `string`  |  `linear`  |  `ease`   |
| Hide/show animation duration  |    `duration`    | `string`  |    `1s`    |   `3s`    |
| Delay before animation starts |     `delay`      | `string`  |    `0s`    |   `1s`    |
| Force animation               |      `test`      | `boolean` |  `false`   |  `true`   |

#### The 'Animation trigger' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| When loading       |     `onload`     |
| On click           |     `click`      |
| On hover           |     `hover`      |
| From top           |     `above`      |
| From bottom        |     `below`      |

#### The 'Animation type' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| Fade Out           |    `Fade Out`    |

The names of the `animation` property values fully match.

#### The 'Animation type' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| Once               |      `once`      |
| Loop               |    `infinite`    |

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/tree/master/src/Animation)

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
