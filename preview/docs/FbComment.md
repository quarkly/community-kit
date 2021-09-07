## 📖 Detailed overview

This component allows you to add a comment form for Facebook.

## ⚙️ Usage

1.  Add the component to the page
2.  Specify your Facebook app ID
3.  Specify the link to comments

### Facebook app

For the component to work, create a Facebook application. To do this, follow the link: [Facebook APP](https://developers.facebook.com/apps)

### Changing props in the builder

If you change the component properties in the builder, you may need to update the layout or the entire page.

## 🧩 Components and Props

### In the interface

| Prop name                  |  Default  |                        Example                        |
| :------------------------- | :-------: | :---------------------------------------------------: |
| Facebook app ID            |    `-`    | [`Your app ID`](https://developers.facebook.com/apps) |
| Link to comments           |    `-`    |                  `Link to comments`                   |
| The language of the widget | `English` |                       `Russian`                       |

### In the code (for developers)

| Prop name                  | Name in the code |   Type   | Default |                        Example                        |
| :------------------------- | :--------------: | :------: | :-----: | :---------------------------------------------------: |
| Facebook app ID            |     `appId`      | `string` |   `-`   | [`Your app ID`](https://developers.facebook.com/apps) |
| Link to comments           |      `href`      | `string` |   `-`   |                  `Link to comments`                   |
| The language of the widget |    `language`    |  `enum`  | `en_US` |                        `ru_RU`                        |

#### The 'The language of the widget' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| English            |     `en_US`      |
| Russian            |     `ru_RU`      |

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/blob/master/src/FbComment.js)

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
