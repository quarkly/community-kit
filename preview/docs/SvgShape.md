## 📖 Detailed overview

This component helps you create simple SVG shapes.

## ⚙️ Usage

Add the component to the page and see how it works in the preview mode.

### Shape types

In the component props you can change the shape type:

-   Rectangle
-   Line
-   Ellipsis
-   Circle
-   Square

## 🧩 Components and Props

### In the interface

| Prop name          |      Default      |  Example  |
| :----------------- | :---------------: | :-------: |
| Shape type         |    `rectangle`    | `square`  |
| Stroke color       |     `#000000`     | `#ffffff` |
| Stroke thickness   |        `1`        |    `0`    |
| Stroke opacity     |        `1`        |    `0`    |
| Stroke shape       |      `round`      |  `butt`   |
| Dashed stroke      |        `-`        |    `-`    |
| Shape type color   | `--color-primary` |  `#000`   |
| Shape type opacity |        `1`        |    `0`    |

### In the code (for developers)

| Prop name          | Name in the code  |   Type   |      Default      |  Example  |
| :----------------- | :---------------: | :------: | :---------------: | :-------: |
| Shape type         |      `type`       |  `enum`  |    `rectangle`    | `square`  |
| Stroke color       |     `stroke`      | `string` |     `#000000`     | `#FFFFFF` |
| Stroke thickness   |   `strokeWidth`   | `string` |        `1`        |    `0`    |
| Stroke opacity     |  `strokeOpacity`  | `string` |        `1`        |    `0`    |
| Stroke shape       |  `strokeLinecap`  |  `enum`  |      `round`      |  `butt`   |
| Dashed stroke      | `strokeDasharray` | `string` |        `-`        |    `-`    |
| Shape type color   |      `fill`       | `string` | `--color-primary` | `#000000` |
| Shape type opacity |   `fillOpacity`   | `string` |        `1`        |    `0`    |

#### The 'Shape type' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| Line               |      `line`      |
| Ellipse            |    `ellipse`     |
| Circle             |     `circle`     |
| Rectangle          |   `rectangle`    |
| Square             |     `square`     |

#### The 'Stroke shape' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| Butt               |      `butt`      |
| Round              |     `round`      |
| Square             |     `square`     |

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/blob/master/src/SvgShape.js)

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

Licensed under the [MIT License](./LICENSE).
