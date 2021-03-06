## 📖 Detailed overview

This component allows you to add the Disqus widget with a specific comment.

## ⚙️ Usage

1.  Add the component to the page
2.  Specify the `Comment identifier` on the Props panel
3.  See how it works in the preview mode

### Comment identifier

You can get the comment identifier, for example, by following the `Share` link.

![Get the Comment ID](https://test-upl.quarkly.io/60474504627982001eb71a51/images/3.png?v=2021-04-22T09:46:00.296Z)

## 🧩 Components and Props

### In the interface

| Prop Name            |   Default   |      Example      |
| :------------------- | :---------: | :---------------: |
| Comment identifier   |     `-`     | `Your comment ID` |
| Show parent comment  | `Unchecked` |     `Checked`     |
| Comment block width  |   `100%`    |       `50%`       |
| Comment block height |   `200px`   |      `250px`      |

### In the code (for developers)

| Prop Name            | Name in the code |   Type    | Default |      Example      |
| :------------------- | :--------------: | :-------: | :-----: | :---------------: |
| Comment identifier   | `commentIDProp`  | `string`  |   `-`   | `Your comment ID` |
| Show parent comment  |  `showParrent`   | `boolean` | `false` |      `true`       |
| Comment block width  |   `widthProp`    | `string`  | `100%`  |       `50%`       |
| Comment block height |   `heightProp`   | `string`  | `200px` |      `250px`      |

## 🗄 GitHub

[Link GitHub](https://github.com/quarkly/community-kit/blob/master/src/DisqusComment.js)

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

Licensed under the [MIT License](https://raw.githubusercontent.com/quarkly/community-kit/master/LICENSE).
