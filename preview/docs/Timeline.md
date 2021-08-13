## 📖 Detailed overview

Timeline is one of the best ways of showig an action sequence in a compact and understandable way.

## ⚙️ Usage

Add the component to the page and check how it works in the preview mode.

### Elements alignment

The `Alignment on desktop` and `Alignment on mobile` props allow you to align elements the way you need on different devices.

By default, the following alignment options are available for the `Alignment on desktop` prop:

-   From left (staggered)
-   From right (staggered)
-   Left
-   Right

The value chosen in the `Alignment on mobile` prop will be applied for the breakpoint specified in the `Mobile view start with breakpoint` prop.

## 🧩 Components and Props

### In the interface

| Prop name                         | Default |         Example          |
| :-------------------------------- | :-----: | :----------------------: |
| Number of elements                |   `4`   |           `6`            |
| Alignment on desktop              | `Left`  | `From right (staggered)` |
| Alignment on mobile               | `Right` |          `Left`          |
| Mobile view start with breakpoint |  `sm`   |           `md`           |

### In the code (for developers)

| Prop name                         | Name in the code |   Type   |  Default   |  Example  |
| :-------------------------------- | :--------------: | :------: | :--------: | :-------: |
| Number of elements                |   `itemsProp`    | `string` |    `4`     |    `6`    |
| Alignment on desktop              |  `alignDesktop`  |  `enum`  | `fromLeft` | `toRight` |
| Alignment on mobile               |  `alignMobile`   |  `enum`  |  `toLeft`  | `toRight` |
| Mobile view start with breakpoint |   `breakpoint`   | `string` |    `sm`    |   `md`    |

#### The 'Alignment on mobile' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| Left               |     `toLeft`     |
| Right              |    `toRight`     |

#### The 'Alignment on desktop' property values

| User-friendly name     | Name in the code |
| :--------------------- | :--------------: |
| From left (staggered)  |    `fromLeft`    |
| From right (staggered) |   `fromRight`    |
| Left                   |     `toLeft`     |
| Right                  |    `toRight`     |

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/blob/master/src/Timeline.js)

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
