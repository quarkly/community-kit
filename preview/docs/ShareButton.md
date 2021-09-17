## 📖 Detailed overview

The Share button lets your site visitors quickly navigate to your account or social media group.

## ⚙️ Usage

1. Add the component to the page.
2. Choose the `Service` where the user will be taken to.
3. Specify the `Site link`, `Site title`, and `Description`.
4. See how it works in the preview mode.

**Attention**: When opening a link in a pop-up window, you can specify it's width and height. However, some services may change the size and position of a pop-up window when loading it.

### List of available services:

Below please see the table with allowed properties for each social network.

| Services      | Site title | Description | Comment | Hashtag |
| :------------ | :--------: | :---------: | :-----: | :-----: |
| Facebook      |            |             |   `+`   |   `+`   |
| Twitter       |            |             |   `+`   |         |
| Telegram      |            |             |   `+`   |         |
| WhatsApp      |            |             |   `+`   |         |
| LinkedIn      |            |             |         |         |
| VK            |    `+`     |             |         |         |
| Odnoklassniki |    `+`     |     `+`     |         |         |
| Reddit        |    `+`     |             |         |         |
| Tumblr        |            |     `+`     |         |         |
| Viber         |            |             |   `+`   |         |
| Line          |    `+`     |     `+`     |   `+`   |   `+`   |
| Weibo         |    `+`     |             |         |         |
| Pocket        |            |             |         |         |

## 🧩 Components and Props

### In the interface

| Prop name               |                     Default                      |                   Example                    |
| :---------------------- | :----------------------------------------------: | :------------------------------------------: |
| Site link               |              `https://quarkly.io/`               |            `https://twitter.com/`            |
| Site title              |                    `Quarkly`                     |                  `Twitter`                   |
| Description             | `Design tool for creating websites and web apps` |   `Twitter is what’s happening right now`    |
| Comment                 |                       `–`                        | `Life’s not about a job, it’s about purpose` |
| Hashtag                 |                       `–`                        |                  `#twitter`                  |
| Service                 |                    `Facebook`                    |                  `Twitter`                   |
| Width                   |                      `640`                       |                    `1280`                    |
| Height                  |                      `640`                       |                    `720`                     |
| Open in a pop-up window |                   `Unchecked`                    |                  `Checked`                   |

### In the code (for developers)

| Prop name               | Name in the code |   Type    |                     Default                      |                    Example                    |
| :---------------------- | :--------------: | :-------: | :----------------------------------------------: | :-------------------------------------------: |
| Site link               |      `url`       | `string`  |              `https://quarkly.io/`               |            `https://twitter.com/`             |
| Site title              |     `title`      | `string`  |                    `Quarkly`                     |                   `Twitter`                   |
| Description             |  `description`   | `string`  | `Design tool for creating websites and web apps` |    `Twitter is what’s happening right now`    |
| Comment                 |     `quote`      | `string`  |                       `–`                        | `FLife’s not about a job, it’s about purpose` |
| Hashtag                 |    `hashtag`     | `string`  |                       `–`                        |                  `#twitter`                   |
| Service                 |    `service`     |  `enum`   |                     `light`                      |                   `Twitter`                   |
| Width                   |  `windowWidth`   | `number`  |                      `640`                       |                    `1280`                     |
| Height                  |  `windowHeight`  | `number`  |                      `640`                       |                     `720`                     |
| Open in a pop-up window |     `popup`      | `boolean` |                     `false`                      |                    `true`                     |

#### The 'Service' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| Facebook           |    `Facebook`    |

The names of the `Service` property values fully match.

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/tree/master/src/ShareButton)

## 🗓 Changelog

-   06.08.2021 (v1.0)
-   Some changes

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you would like to see added. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/SuF9vCMJGW)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](https://raw.githubusercontent.com/quarkly/community-kit/master/LICENSE).
