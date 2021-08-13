## 📖 Detailed overview

The Share button lets your site visitors quickly navigate to your account or social media group.

## ⚙️ Usage

1. Add the component to the page.
2. Choose the `Service` where the user will be taken to.
3. Specify the `Site link`, `Site title`, and `Description`.
4. See how it works in the preview mode.

## 🧩 Components and Props

### In the interface

| Prop name               |                     Default                      |                 Example                 |
| :---------------------- | :----------------------------------------------: | :-------------------------------------: |
| Site link               |              `https://quarkly.io/`               |       `https://www.instagram.com`       |
| Site title              |                    `Quarkly`                     |               `Instagram`               |
| Description             | `Design tool for creating websites and web apps` | `Capture, edit & share photos & videos` |
| Comment                 |                       `–`                        |        `Follow me on Instagram`         |
| Hashtag                 |                       `–`                        |              `#instagram`               |
| Service                 |                    `Facebook`                    |               `Instagram`               |
| Width                   |                      `640`                       |                 `1280`                  |
| Высота                  |                      `640`                       |                  `720`                  |
| Open in a pop-up window |                   `Unchecked`                    |                `Checked`                |

### In the code (for developers)

| Prop name               | Name in the code |   Type    |                     Default                      |                 Example                 |
| :---------------------- | :--------------: | :-------: | :----------------------------------------------: | :-------------------------------------: |
| Site link               |      `url`       | `string`  |              `https://quarkly.io/`               |       `https://www.instagram.com`       |
| Site title              |     `title`      | `string`  |                    `Quarkly`                     |               `Instagram`               |
| Description             |  `description`   | `string`  | `Design tool for creating websites and web apps` | `Capture, edit & share photos & videos` |
| Comment                 |     `quote`      | `string`  |                       `–`                        |        `Follow me on Instagram`         |
| Hashtag                 |    `hashtag`     | `string`  |                       `–`                        |              `#instagram`               |
| Service                 |    `service`     |  `enum`   |                     `light`                      |                 `dark`                  |
| Width                   |  `windowWidth`   | `number`  |                      `640`                       |                 `1280`                  |
| Height                  |  `windowHeight`  | `number`  |                      `640`                       |                  `720`                  |
| Open in a pop-up window |     `popup`      | `boolean` |                     `false`                      |                 `true`                  |

#### The 'Service' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| Facebook           |    `Facebook`    |

Значения свойства `Сервис` полностью совпадают с их пользовательскими названиями.

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/tree/master/src/ReCaptcha)

## 🗓 Changelog

-   06.08.2021 (v1.0)
-   Some changes

## 📮 Feedback

If you want to see some new features added or found an issue, please contact us! And, of course, we're excited to see your creations based on this component. So, send us those, too!

Find me on Twitter: @author [author@contact.mail](mailto:author@contact.mail)

## 📝 License

Licensed under the [MIT License](./LICENSE).
