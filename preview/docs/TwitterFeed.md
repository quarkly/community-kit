## 📖 Detailed overview

The Twitter Timeline widget is an easy way to embed tweets from your account into your website in a compact, linear view.

## ⚙️ Usage

Add the component to the page and specify the `Name or link to the user page`.

## 🧩 Components and Props

### In the interface

| Prop name                         |    Default    |   Example   |
| :-------------------------------- | :-----------: | :---------: |
| Name or link to the user page     | `@quarklyapp` | `@username` |
| Limit the number of tweets (1-20) |      `1`      |    `20`     |
| Hide header                       |    `false`    |   `true`    |
| Hide footer                       |    `false`    |   `true`    |
| Hide widget borders               |    `false`    |   `true`    |
| Hide widget background            |    `false`    |   `true`    |
| Hide widget background            |    `false`    |   `true`    |
| Tweet border color (#HEX only)    |      `-`      |   `#000`    |
| ARIA live politeness              |   `polite`    | `assertive` |

### In the code (for developers)

| Prop name                         | Name in the code |   Type    |    Default    |   Example   |
| :-------------------------------- | :--------------: | :-------: | :-----------: | :---------: |
| Name or link to the user page     |    `account`     | `string`  | `@quarklyapp` | `@username` |
| Limit the number of tweets (1-20) |     `writer`     | `string`  |      `1`      |    `20`     |
| Hide header                       |    `targets`     | `boolean` |    `false`    |   `true`    |
| Hide footer                       |      `sum`       | `boolean` |    `false`    |   `true`    |
| Hide widget borders               |   `buttonText`   | `boolean` |    `false`    |   `true`    |
| Hide widget background            |    `payment`     | `boolean` |    `false`    |   `true`    |
| Hide widget background            |      `fio`       | `boolean` |    `false`    |   `true`    |
| Tweet border color (#HEX only)    |     `email`      | `string`  |      `-`      |   `#000`    |
| ARIA live politeness              |     `phone`      |  `enum`   |   `polite`    | `assertive` |

#### The 'ARIA live politeness' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| Polite             |     `polite`     |
| Assertive          |   `assertive`    |
| Rude               |      `rude`      |

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/tree/master/src/TwitterFeed)

## 🗓 Changelog

-   16/06/2021 (v1.0)
-   First version

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you would like to see added. Feel free to share what you’re working on - we'd **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/SuF9vCMJGW)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](./LICENSE).
