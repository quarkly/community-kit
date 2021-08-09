## 📖 Detailed overview

reCAPTCHA is a free service that protects your site from spam and abuse. It uses advanced risk analysis techniques to tell humans and bots apart.

## ⚙️ Usage

1. [Зарегистрируйте ключи reCAPTCHAv2 API](https://www.google.com/recaptcha/admin/create). Во время регистрации обязательно нужно выбрать 'Тип reCAPTCHA': `reCAPTCHA v2`.
2. В поле домены добавьте `quarkly.io` и свой домен, который будет использован при публикации сайта. Позже, домены можно будет изменить.
3. Скопируйте ПЕРВЫЙ (публичный) API ключ.
4. Добавьте ключ в свойство `sitekey`.

## 🧩 Components and Props

| Props Name |   Type   | Default  |  Example  |
| ---------- | :------: | :------: | :-------: |
| API Ключ   | `string` |   `-`    | `123456`  |
| Тема       |  `enum`  | `light`  |  `dark`   |
| Размер     |  `enum`  | `normal` | `compact` |

## 🗓 Changelog

-   06.08.2021 (v1.0)
-   Some changes

## 📮 Feedback

If you want to see some new features added or found an issue, please contact us! And, of course, we're excited to see your creations based on tis component. So, send us those, too!

Find me on Twitter: @author
[author@contact.mail](mailto:author@contact.mail)

## 📝 License

Licensed under the [MIT License](./LICENSE).
