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

### YooMoneyDonateForm

| Prop name                         |   Type    | Description                                                                  |      Default       |             Example             |
| :-------------------------------- | :-------: | :--------------------------------------------------------------------------- | :----------------: | :-----------------------------: |
| YooMoney wallet ID                | `string`  | YooMoney wallet ID (required field)                                          |    `undefined`     |          `1234567890`           |
| Who specifies the transfer reason | `string`  | Who specifies the transfer reason (required field)                           |      `seller`      |             `buyer`             |
| Transfer reason                   | `string`  | Transfer reason (required field, if `Seller` is selected)                    | `Help the project` |     `For the site hosting`      |
| Amount                            | `string`  | Transfer amount by default                                                   |        `0`         |              `250`              |
| Button text                       |  `enum`   | Button text { `11`: Transfer, `12`: Send, `13`: Give away, `14`: Donate}     |        `11`        |              `14`               |
| Use credit card                   | `boolean` | Transfer funds via a credit card (extra fee may be charged)                  |      `false`       |             `true`              |
| Request sender's full name        | `boolean` | Request sender's full name during the transfer and then email it             |      `false`       |             `true`              |
| Request sender's email            | `boolean` | Request sender's email address during the transfer and then email it         |      `false`       |             `true`              |
| Request sender's phone number     | `boolean` | Request sender's phone number during the transfer and then email it          |      `false`       |             `true`              |
| Request sender's address          | `boolean` | Request sender's address during the transfer and then email it               |      `false`       |             `true`              |
| Request sender's comments         | `boolean` | Request sender's comments during the transfer and then email it              |      `false`       |             `true`              |
| Tip for sender                    | `string`  | Tips for the sender on what to specify in the form                           |        `-`         | `Your comments and suggestions` |
| Go to the page after transfer     | `string`  | After transfer, go to the specified page                                     |        `-`         |    `https://yourdomain.name`    |
| Mobile version                    | `boolean` | Check the form on a big screen: it may stretch to the full width of the page |      `false`       |             `true`              |

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
