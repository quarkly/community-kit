## 📖 Detailed overview

This component shows a form with VK community comments.

## ⚙️ Usage

1.  Add the component to the page
2.  Enter the `VK app ID` and `VK page ID`
3.  See how it works in the preview mode

### VK app

For the component to work, create a comment widget on the VK site.
To do it, follow the link [VK Comment](https://vk.com/dev/Comments)

## 🧩 Components and Props

### In the interface

| Prop Name                        |   Default   |                     Example                     |
| :------------------------------- | :---------: | :---------------------------------------------: |
| VK app ID                        |     `-`     | [`Your VK app ID`](https://vk.com/dev/Comments) |
| VK page ID                       |     `-`     |                `Your VK page ID`                |
| Max. comments                    |     `5`     |                      `20`                       |
| Auto publishing                  | `Unchecked` |                    `Checked`                    |
| Update in real time              |  `Checked`  |                   `Unchecked`                   |
| Link to the page with the widget |     `-`     |               `Link to your page`               |
| Add graffiti                     |  `Checked`  |                   `Unchecked`                   |
| Add photo                        |  `Checked`  |                   `Unchecked`                   |
| Add audio                        |  `Checked`  |                   `Unchecked`                   |
| Add video                        |  `Checked`  |                   `Unchecked`                   |
| Add link                         |  `Checked`  |                   `Unchecked`                   |

### In the code (for developers)

| Prop Name                        | Name in the code |   Type    | Default |                     Example                     |
| :------------------------------- | :--------------: | :-------: | :-----: | :---------------------------------------------: |
| VK app ID                        |     `apiId`      | `string`  |   `-`   | [`Your VK app ID`](https://vk.com/dev/Comments) |
| VK page ID                       |     `pageId`     | `string`  |   `-`   |                `Your VK page ID`                |
| Max. comments                    |     `limit`      | `number`  |   `5`   |                      `20`                       |
| Auto publishing                  |  `autoPublish`   | `boolean` | `false` |                     `true`                      |
| Update in real time              |    `realtime`    | `boolean` | `true`  |                     `false`                     |
| Link to the page with the widget |    `pageUrl`     | `string`  |   `-`   |               `Link to your page`               |
| Add graffiti                     | `attachGraffiti` | `boolean` | `true`  |                     `false`                     |
| Add photo                        |  `attachPhoto`   | `boolean` | `true`  |                     `false`                     |
| Add audio                        |  `attachAudio`   | `boolean` | `true`  |                     `false`                     |
| Add video                        |  `attachVideo`   | `boolean` | `true`  |                     `false`                     |
| Add link                         |   `attachLink`   | `boolean` | `true`  |                     `false`                     |

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/blob/master/src/VkComments.js)

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
