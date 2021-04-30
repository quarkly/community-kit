## 📖 Detailed overview

Multi-level menu, in which subpages are combined into a named group.

## 🎬 Live Demo

[Live demo link](https://quarkly-catalog.netlify.app/mobilesidepanel/)

## ⚙️ Usage

Add component to the page and change the attribute value `Maximum nesting` if that is necessary.

### Changing the root page

The `Root page ID` prop allows you to specify the page for which the menu will be generated.
You can copy the ID of the current page in the address bar.
For example, the page ID of the URL `https://quarkly.io/project/12345/page/67890` is at the end of the URL, i.e. `67890`.

## 🧩 Components and Props

| Названия свойств               |   Type   |    Default     |   Example   |
| :----------------------------- | :------: | :------------: | :---------: |
| Maximum nesting                | `number` |      `10`      |     `5`     |
| Root page ID                   | `string` |     `root`     |   `67890`   |
| Condition of groups by default |  `enum`  | `expandActive` | `expandAll` |

## 🗓 Changelog

-   21/04/2021 (v1.0)
-   First version

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you can’t stand missing. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](./LICENSE).
