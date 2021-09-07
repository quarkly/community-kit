## 📖 Detailed overview

Use this component to create a parallax effect for the background image.

## ⚙️ Usage

1.  Add the component to the page
2.  Set the page height limit in the builder
3.  See how it works in the preview mode

### Display in the builder

For the component to work properly in the builder, set the height limit in the page parameters.

## 🧩 Components and Props

### In the interface

| Prop name       |    Default     |       Example        |
| :-------------- | :------------: | :------------------: |
| Image           |      `-`       | `Link to your image` |
| Image size      |    `cover`     |        `100%`        |
| Image alignment |    `Center`    |        `Left`        |
| Repeat image    | `Don't repeat` |       `Repeat`       |
| Scroll speed    |     `0.5`      |         `1`          |
| Scroll inertia  |      `1`       |         `2`          |

### In the code (for developers)

| Prop name       |  Name in the code   |   Type   |   Default   |       Example        |
| :-------------- | :-----------------: | :------: | :---------: | :------------------: |
| Image           |     `imageURL`      | `string` |     `-`     | `Link to your image` |
| Image size      |     `imageSize`     | `string` |   `cover`   |        `100%`        |
| Image alignment |   `imagePosition`   |  `enum`  |  `Center`   |        `Left`        |
| Repeat image    |    `imageRepeat`    |  `enum`  | `no-repeat` |       `repeat`       |
| Scroll speed    |  `scrollSpeedProp`  | `number` |    `0.5`    |         `1`          |
| Scroll inertia  | `scrollInertiaProp` | `number` |     `1`     |         `2`          |

#### The 'Image alignment' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| Left               |      `left`      |
| Center             |     `center`     |
| Right              |     `right`      |

#### The 'Repeat image' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| Repeat             |     `repeat`     |
| Don't repeat       |   `no-repeat`    |

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/blob/master/src/BgImageParallax.js)

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
