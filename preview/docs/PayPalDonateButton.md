## 📖 Detailed overview

A simple button to collect donations to your PayPal account.

## ⚙️ Usage

1.  Add the component to the page
2.  Specify `Your PayPal ID or email`
3.  Add the `Tracking ID` and `Product or service price`
4.  See how it works on the published site

**Attention:** the form submission and redirect to PayPal are available only on the published site.

By default, the `Link to the button image` has the `https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif` value.

## 🧩 Components and Props

### In the interface

| Prop Name                         |               Default               |          Example           |
| :-------------------------------- | :---------------------------------: | :------------------------: |
| Open in a new window              |              `Checked`              |        `Unchecked`         |
| Link to the button image          | `https://www.paypalobjects.com/...` |    `Link to your image`    |
| Your PayPal ID or email           |                 `-`                 | `Your PayPal ID or email`  |
| Product description               |                 `-`                 | `Your product description` |
| Tracking ID                       |                 `-`                 |     `Your tracking ID`     |
| Product / service price or number |                 `-`                 |           `100`            |
| Currency code                     |                `USD`                |           `EUR`            |

### In the code (for developers)

| Prop Name                         | Name in the code |   Type    |               Default               |          Example           |
| :-------------------------------- | :--------------: | :-------: | :---------------------------------: | :------------------------: |
| Open in a new window              |     `newTab`     | `boolean` |               `true`                |          `false`           |
| Link to the button image          |  `buttonImage`   |  `image`  | `https://www.paypalobjects.com/...` |    `Link to your image`    |
| Your PayPal ID or email           |    `business`    | `string`  |                 `-`                 | `Your PayPal ID or email`  |
| Product description               |    `itemName`    | `string`  |                 `-`                 | `Your product description` |
| Tracking ID                       |   `itemNumber`   | `string`  |                 `-`                 |     `Your tracking ID`     |
| Product / service price or number |     `amount`     | `string`  |                 `-`                 |           `100`            |
| Currency code                     |  `currencyCode`  | `string`  |                `USD`                |           `EUR`            |

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/tree/master/src/PayPalDonateButton)

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
