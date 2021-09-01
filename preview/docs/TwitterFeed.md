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
| Hide header                       |  `Unchecked`  |  `Checked`  |
| Hide footer                       |  `Unchecked`  |  `Checked`  |
| Hide widget borders               |  `Unchecked`  |  `Checked`  |
| Hide widget background            |  `Unchecked`  |  `Checked`  |
| Hide scroll bar                   |  `Unchecked`  |  `Checked`  |
| Tweet border color (#HEX only)    |      `-`      |  `#000000`  |
| ARIA live politeness              |   `polite`    | `assertive` |

### In the code (for developers)

| Prop name                         | Name in the code |   Type    |    Default    |   Example   |
| :-------------------------------- | :--------------: | :-------: | :-----------: | :---------: |
| Name or link to the user page     |  `dataProvider`  | `string`  | `@quarklyapp` | `@username` |
| Limit the number of tweets (1-20) |   `tweetLimit`   | `string`  |      `1`      |    `20`     |
| Hide header                       |    `noheader`    | `boolean` |    `false`    |   `true`    |
| Hide footer                       |    `nofooter`    | `boolean` |    `false`    |   `true`    |
| Hide widget borders               |   `noborders`    | `boolean` |    `false`    |   `true`    |
| Hide widget background            |  `transparent`   | `boolean` |    `false`    |   `true`    |
| Hide scroll bar                   |  `noscrollbar`   | `boolean` |    `false`    |   `true`    |
| Tweet border color (#HEX only)    |  `tweetBorder`   | `string`  |      `-`      |  `#000000`  |
| ARIA live politeness              |   `ariaPolite`   |  `enum`   |   `polite`    | `assertive` |

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
