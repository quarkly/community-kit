## 📖 Detailed overview

Form for accepting payments to YooMoney.

## ⚙️ Usage

1.  Add the component to the page
2.  Specify the YooMoney wallet ID
3.  Add the amount and comments
4.  Select the button text
5.  See how it works in the preview mode

### Getting started

Add the YooMoney wallet ID to the `YooMoney wallet ID` property. To find out the ID, click here [https://yoomoney.ru/start](https://yoomoney.ru/start). If `Seller` is selected in the `specifies the transfer reason` property, specify the `Transfer reason` in the corresponding input field. Specify the default `Amount`. The user can change it during payment.

### Button text

By default, there are 4 button text options in the YooMoney form: `Transfer`, `Send`, `Send`, `Donate`. You can choose them with the `Button text` property using their IDs:

-   `11` - "Transfer"
-   `12` - "Send"
-   `13` - "Give away"
-   `14` - "Donate"

### Collecting info during the transfer

During the transfer, you can ask the sender their full name, email, phone number, and address. To request all this, enable the corresponding properties from the `"INFO"` category.

## 🧩 Components and Props

### In the interface

| Prop name                         |   Default   |             Example             |
| :-------------------------------- | :---------: | :-----------------------------: |
| YooMoney wallet ID                |     `-`     |            `123456`             |
| Who specifies the transfer reason |  `seller`   |             `buyer`             |
| Transfer reason                   |     `-`     |     `For the site hosting`      |
| Amount                            |     `-`     |              `250`              |
| Button text                       |    `11`     |              `14`               |
| Use credit card                   | `Unchecked` |            `Checked`            |
| Request sender's full name        | `Unchecked` |            `Checked`            |
| Request sender's email            | `Unchecked` |            `Checked`            |
| Request sender's phone number     | `Unchecked` |            `Checked`            |
| Request sender's address          | `Unchecked` |            `Checked`            |
| Request sender's comments         | `Unchecked` |            `Checked`            |
| Tip for sender                    |     `-`     | `Your comments and suggestions` |
| Go to the page after transfer     |     `-`     |    `https://yourdomain.name`    |
| Mobile version                    | `Unchecked` |            `Checked`            |

### In the code (for developers)

| Prop name                         | Name in the code |   Type    | Default  |             Example             |
| :-------------------------------- | :--------------: | :-------: | :------: | :-----------------------------: |
| YooMoney wallet ID                |    `account`     | `string`  |   `-`    |            `123456`             |
| Who specifies the transfer reason |     `writer`     |  `enum`   | `seller` |             `buyer`             |
| Transfer reason                   |    `targets`     | `string`  |   `-`    |     `For the site hosting`      |
| Amount                            |      `sum`       | `string`  |   `-`    |               `-`               |
| Button text                       |   `buttonText`   |  `enum`   |   `11`   |              `14`               |
| Use credit card                   |    `payment`     | `boolean` | `false`  |             `true`              |
| Request sender's full name        |      `fio`       | `boolean` | `false`  |             `true`              |
| Request sender's email            |     `email`      | `boolean` | `false`  |             `true`              |
| Request sender's phone number     |     `phone`      | `boolean` | `false`  |             `true`              |
| Request sender's address          |    `address`     | `boolean` | `false`  |             `true`              |
| Request sender's comments         |    `comment`     | `boolean` | `false`  |             `true`              |
| Tip for sender                    |      `hint`      | `string`  |   `-`    | `Your comments and suggestions` |
| Go to the page after transfer     |   `successURL`   | `string`  |   `-`    |    `https://yourdomain.name`    |
| Mobile version                    | `mobilePayment`  | `boolean` | `false`  |             `true`              |

#### The 'Who specifies the transfer reason' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| Seller             |     `seller`     |
| Buyer              |     `buyer`      |

#### The 'Button text' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| Transfer           |       `11`       |
| Send               |       `12`       |
| Give away          |       `13`       |
| Donate             |       `14`       |

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/tree/master/src/YoomoneyDonateForm)

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
