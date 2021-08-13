## 📖 Detailed overview

Use this component to add a <0>Like</0> button on Facebook.

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

### In the interface

| Prop name          |     Default     |          Example          |
| :----------------- | :-------------: | :-----------------------: |
| Facebook app ID    |       `-`       |         `123456`          |
| Link to the page   |       `-`       | `https://yourdomain.name` |
| Component language |    `English`    |         `Russian`         |
| Color scheme       |     `Light`     |          `Dark`           |
| ´Share´ button     |     `Hide`      |          `Show`           |
| Layout             | `Standard view` |      `Simple button`      |
| Button size        |     `Small`     |          `Large`          |
| On click action    |     `Like`      |        `Recommend`        |
| Made for kids      |     `false`     |          `true`           |
| UTM tag            |       `-`       |        `utm12345`         |

### In the code (for developers)

| Prop name          | Name in the code  |   Type    |  Default   |          Example          |
| :----------------- | :---------------: | :-------: | :--------: | :-----------------------: |
| Facebook app ID    |      `appId`      | `string`  |    `-`     |         `123456`          |
| Link to the page   |      `href`       | `string`  |    `-`     | `https://yourdomain.name` |
| Component language |    `language`     |  `enum`   |  `en_US`   |          `ru_RU`          |
| Color scheme       |   `colorScheme`   |  `enum`   |  `Light`   |          `Dark`           |
| ´Share´ button     |    `showShare`    |  `enum`   |   `Hide`   |          `Show`           |
| Layout             |     `layout`      |  `enum`   | `standard` |        `box_count`        |
| Button size        |      `size`       |  `enum`   |  `Small`   |          `Large`          |
| On click action    |     `action`      |  `enum`   |   `Like`   |        `Recommend`        |
| Made for kids      | `kidDirectedSite` | `boolean` |  `false`   |          `true`           |
| UTM tag            |    `referral`     | `string`  |    `-`     |        `utm12345`         |

#### The 'Component language' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| English            |     `en_US`      |
| Russian            |     `ru_RU`      |

#### The 'Color scheme' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| Light              |     `light`      |
| Dark               |      `dark`      |

#### The '´Share´ button' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| Show               |      `show`      |
| Hide               |      `hide`      |

#### The 'Layout' property values

| User-friendly name     | Name in the code |
| :--------------------- | :--------------: |
| Default layout         |    `standard`    |
| Container with counter |   `box_count`    |
| Button with counter    |  `button_count`  |
| Simple button          |     `button`     |

#### The 'Button size' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| Small              |     `small`      |
| Large              |     `large`      |

#### The 'On click action' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| Like               |      `like`      |
| Recommend          |   `recommend`    |

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/blob/master/src/FbLike.js)

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
