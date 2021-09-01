## 📖 Detailed overview

reCAPTCHA is a free service that protects your site from spam and abuse. It uses advanced risk analysis techniques to tell humans and bots apart.

## ⚙️ Usage

1. [Register reCAPTCHAv2 API keys](https://www.google.com/recaptcha/admin/create). During the registration, choose this reCAPTCHA type: `reCAPTCHA v2`.
2. In the domain field, add `quarkly.io` and your domain name that you're going to use when publishing the site. You can change domains at any time later
3. Copy the FIRST (public) API key
4. Add the key to the `sitekey` property

## 🧩 Components and Props

### In the interface

| Prop name      | Default  |                             Example                             |
| :------------- | :------: | :-------------------------------------------------------------: |
| Client API key |   `-`    | [`Your API Key`](https://www.google.com/recaptcha/admin/create) |
| Theme          | `Light`  |                             `Dark`                              |
| Size           | `Normal` |                            `Compact`                            |

### In the code (for developers)

| Prop name      | Name in the code |   Type   | Default  |                             Example                             |
| :------------- | :--------------: | :------: | :------: | :-------------------------------------------------------------: |
| Client API key |    `sitekey`     | `string` |   `-`    | [`Your API Key`](https://www.google.com/recaptcha/admin/create) |
| Theme          |     `theme`      |  `enum`  | `light`  |                             `dark`                              |
| Size           |      `size`      |  `enum`  | `normal` |                            `compact`                            |

#### The 'Theme' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| Light              |     `light`      |
| Dark               |      `dark`      |

#### The 'Size' property values

| User-friendly name | Name in the code |
| :----------------- | :--------------: |
| Normal             |     `normal`     |
| Compact            |    `compact`     |

## 🗄 GitHub

[Link to GitHub](https://github.com/quarkly/community-kit/tree/master/src/ReCaptcha)

## 🗓 Changelog

-   06.08.2021 (v1.0)
-   Сhanges

## 📮 Feedback

If you want to see some new features added or found an issue, please contact us! And, of course, we're excited to see your creations based on this component. So, send us those, too!

Find me on Twitter: @author [author@contact.mail](mailto:author@contact.mail)

## 📝 License

Licensed under the [MIT License](./LICENSE).
