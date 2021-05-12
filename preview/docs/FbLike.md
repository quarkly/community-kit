## 📖 Detailed overview

Use this component to add a <0>Like</0> button on Facebook.

## 🎬 Live Demo

[Live demo link](https://quarkly-catalog.netlify.app/fblike/)

## ⚙️ Usage

1.  Add the component to the page
2.  Specify your Facebook app ID
3.  Specify the link to your page

### Facebook app

For the component to work, create a Facebook application. To do this, follow the link: [Facebook APP](https://developers.facebook.com/apps)

### Made for kids content

If your website or online service is made for children under 13 years old, activate the `Made for kids` option. Read more about it on [Facebook Kid](https://developers.facebook.com/docs/plugins/restrictions).

### UTM tag

The UTM tag name must:

-   contain not more than 50 characters;
-   contain letters and numbers;
-   contain only the following special characters: +/=-.:\_

## 🧩 Components and Props

| Prop name          |   Type    |     Default     |          Example          |
| :----------------- | :-------: | :-------------: | :-----------------------: |
| Facebook app ID    | `number`  |       `-`       |       `1234567890`        |
| Link to the page   | `string`  |       `-`       | `https://yourdomain.name` |
| Component language |  `enum`   |    `English`    |         `Русский`         |
| Color scheme       |  `enum`   |     `Light`     |          `Dark`           |
| ´Share´ button     |  `enum`   |     `Hide`      |          `Show`           |
| Layout             |  `enum`   | `Standard view` |      `Simple button`      |
| Button size        |  `enum`   |     `Small`     |          `Large`          |
| On click action    |  `enum`   |     `Like`      |        `Recommend`        |
| Made for kids      | `boolean` |     `false`     |          `true`           |
| UTM tag            | `string`  |       `-`       |        `utm12345`         |

## 🗓 Changelog

-   21/04/2021 (v1.0)
-   First version

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you would like to see added. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](./LICENSE).
