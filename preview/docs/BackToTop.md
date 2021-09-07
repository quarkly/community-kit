## 📖 Detailed overview

This component contains a button placed in the bottom right corner of the screen. When you click it, the page will automatically scroll to the top.

## ⚙️ Usage

Add the component to the page. Please note that when you add the component, it won't be visible. To check if the component works in the builder, set a height limit at the top in the canvas parameters. You can also publish the site and check the component there.

### Always show button

The `Show Button Always` prop makes a button always visible on scroll. You may need this property for editing the button.

## 🧩 Components and Props

### In the interface

| Prop Name                 |     Default     |  Example  |
| :------------------------ | :-------------: | :-------: |
| Show button after (in px) |      `100`      |   `200`   |
| Show button always        |   `Unchecked`   | `Checked` |
| Animation duration        |     `1000`      |  `15000`  |
| Animation timing function | `easeInOutQuad` | `linear`  |

### In the code (for developers)

| Prop Name                 | Name in the code |   Type    |     Default     | Example  |
| :------------------------ | :--------------: | :-------: | :-------------: | :------: |
| Show button after (in px) |   `showAfter`    | `string`  |      `100`      |  `200`   |
| Show button always        |   `showAlways`   | `boolean` |     `false`     |  `true`  |
| Animation duration        |    `duration`    | `string`  |     `1000`      | `15000`  |
| Animation timing function |  `easingPreset`  |  `enum`   | `easeInOutQuad` | `linear` |

#### The 'Animation easing preset' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| linear             |     `linear`     |

The names of the `Animation easing preset` property values fully match.

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/blob/master/src/BackToTop.js)

## 🗓 Changelog

-   16/03/2021 (v1.0)
-   First version

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you can’t stand missing. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://feedback.quarkly.io/communities/1-quarkly-forum/categories/7-components/topics)

[We're on Discord](https://discord.gg/SuF9vCMJGW)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](https://raw.githubusercontent.com/quarkly/community-kit/master/LICENSE).
