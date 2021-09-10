## 📖 Подробный обзор

reCAPTCHA is a free service that protects your site from spam and abuse. It uses advanced risk analysis techniques to tell humans and bots apart.

## ⚙️ Использование

1. [Зарегистрируйте ключи reCAPTCHAv2 API](https://www.google.com/recaptcha/admin/create). Во время регистрации обязательно нужно выбрать 'Тип reCAPTCHA': `reCAPTCHA v2`.
2. В поле домены добавьте `quarkly.io` и свой домен, который будет использован при публикации сайта. Позже, домены можно будет изменить.
3. Скопируйте ПЕРВЫЙ (публичный) API ключ.
4. Добавьте ключ в свойство `sitekey`.

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств | По умолчанию |                             Пример                              |
| :--------------- | :----------: | :-------------------------------------------------------------: |
| API Ключ         |     `-`      | [`Ваш API Ключ`](https://www.google.com/recaptcha/admin/create) |
| Тема             |  `Светлая`   |                            `Темная`                             |
| Размер           |  `Обычный`   |                          `Компактный`                           |

### В коде (для разработчиков)

| Названия свойств | Название в коде |   Тип    | По умолчанию |                             Пример                              |
| :--------------- | :-------------: | :------: | :----------: | :-------------------------------------------------------------: |
| API Ключ         |    `sitekey`    | `string` |     `-`      | [`Ваш API Ключ`](https://www.google.com/recaptcha/admin/create) |
| Тема             |     `theme`     |  `enum`  |   `light`    |                             `dark`                              |
| Размер           |     `size`      |  `enum`  |   `normal`   |                            `compact`                            |

#### Значения свойства 'Тема'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| Светлая                   |     `light`     |
| Темная                    |     `dark`      |

#### Значения свойства 'Размер'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| Обычный                   |    `normal`     |
| Компактный                |    `compact`    |

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/tree/master/src/ReCaptcha)

## 🗓 Changelog

-   06.08.2021 (v1.0)
-   Some changes

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you would like to see added. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/SuF9vCMJGW)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](https://raw.githubusercontent.com/quarkly/community-kit/master/LICENSE).
