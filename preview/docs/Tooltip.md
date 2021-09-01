## 📖 Detailed overview

The container component shows a text tooltip when you mouse over the content.

## ⚙️ Usage

Add the component to the page and drop another component, for example, `Text`, inside it. Then see how it works in the preview mode.

### Auto position change

If the `Auto position change` prop is enabled, the tooltip will automatically change its position if there's not enough space. All indents will be taken into account.

## 🧩 Components and Props

### In the interface

| Prop name                |  Default  |   Example   |
| :----------------------- | :-------: | :---------: |
| Show Tooltip             | `Always`  | `On hover`  |
| Tooltip position         |   `Top`   |  `Bottom`   |
| Edges indent             |    `0`    |    `2px`    |
| Content indent           |   `4px`   |    `8px`    |
| Tooltip background color | `#000000` |  `#ffffff`  |
| Show the arrow           | `Checked` | `Unchecked` |
| Arrow size (px)          |   `8px`   |   `12px`    |
| Auto position change     | `Checked` | `Unchecked` |

### In the code (for developers)

| Prop name                |    Name in the code     |   Type    |  Default  |  Example  |
| :----------------------- | :---------------------: | :-------: | :-------: | :-------: |
| Show Tooltip             |   `tooltipStatusProp`   |  `enum`   | `always`  |  `hover`  |
| Tooltip position         |  `tooltipPositionProp`  |  `enum`   |   `top`   | `bottom`  |
| Edges indent             |   `tooltipOffsetProp`   | `string`  |    `0`    |   `2px`   |
| Content indent           |   `contentOffsetProp`   | `string`  |   `4px`   |   `8px`   |
| Tooltip background color |   `tooltipColorProp`    | `string`  | `#000000` | `#ffffff` |
| Show the arrow           |    `arrowStatusProp`    | `boolean` |  `true`   |  `false`  |
| Arrow size (px)          |     `arrowSizeProp`     | `string`  |   `8px`   |  `12px`   |
| Auto position change     | `tooltipAutoChangeProp` | `boolean` |  `true`   |  `false`  |

#### The 'Show Tooltip' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| Always             |     `always`     |
| On hover           |     `hover`      |

#### The 'Tooltip position' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| Top                |      `top`       |
| Right              |     `right`      |
| Bottom             |     `bottom`     |
| Left               |      `left`      |

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/tree/master/src/Tooltip)

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
