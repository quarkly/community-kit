## 📖 Подробный обзор

Tabs allow you to easily switch between content divided into several specific parts.

## ⚙️ Использование

1. Add the component to the page
2. Add the `TabsFullHead` component and the `TabsFullBody` component inside `TabsFull` component
3. Add the `TabsFullButton` component inside `TabsFullHead`
4. Add the `TabsFullContent` component inside `TabsFullBody`
5. Specify the corresponding `Tab ID` for `TabsFullButton` and `TabsFullContent`, to link the tab buttons with their content
6. Add the components inside the `TabsFullButton` и `TabsFullContent`
7. See how it works in the preview mode

## 🧩 Components and Props

### In the interface

| Prop Name   | Default |   Example    |
| :---------- | :-----: | :----------: |
| Default tab |   `-`   |     `1`      |
| Align       | `Start` | `Full width` |
| Orientation |   `1`   |     `0`      |

### In the code (for developers)

| Prop Name   | Name in the code |   Type   |   Default    |   Example    |
| :---------- | :--------------: | :------: | :----------: | :----------: |
| Default tab |   `defaultTab`   | `string` |     `-`      |     `1`      |
| Align       |     `align`      |  `enum`  |   `start`    | `full width` |
| Orientation |  `orientation`   |  `enum`  | `horizontal` |  `vertical`  |

#### The 'Orientation' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| Vertical           |    `vertical`    |
| Horizontal         |   `horizontal`   |

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/blob/master/src/TabsFull)

## 🗓 Changelog

-   02/11/2021 (v1.0)
-   First version

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you would like to see added. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](https://raw.githubusercontent.com/quarkly/community-kit/master/LICENSE).
