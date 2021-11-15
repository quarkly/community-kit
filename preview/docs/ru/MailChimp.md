## 📖 Подробный обзор

Этот компонент поможет вам отправить данные формы в [Mailchimp](https://mailchimp.com/).

## ⚙️ Использование

1.  Добавьте компонент на страницу
2.  Укажите `URL формы` на панели Props;

    Чтобы сделать это, перейдите в Audience > Signup forms > Embedded forms.

    Нажмите на кнопку Generate Embed Code и найдите следующие строки:

    ```
    <div id="mc_embed_signup">
    <form action="URL формы" ... />
    ```

3.  Добавьте компонент Button.
4.  Добавьте и настройте компонент Input.

    | Названия свойств | Значение  |
    | :--------------- | :-------: |
    | name             |  `EMAIL`  |
    | type             |  `email`  |
    | required         | `Отмечен` |

5.  Посмотрите как он работает в режиме превью

Если нужно собирать другие сведения (кроме обязательной почты), то настройте Audience fields and \*|MERGE|\* tags.

Для этого перейдите в Audience > Signup forms > Settings > Audience fields and \*|MERGE|\* tags.

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств | По умолчанию |                                             Пример                                             |
| :--------------- | :----------: | :--------------------------------------------------------------------------------------------: |
| URL формы        |     `-`      | `https://fsb.us6.list-manage.com/subscribe/post?u=xxxxxxxxxxxxxxxxxxxxxxxxx&amp;id=xxxxxxxxxx` |

### В коде (для разработчиков)

| Названия свойств | Название в коде |   Тип    | По умолчанию |                                             Пример                                             |
| :--------------- | :-------------: | :------: | :----------: | :--------------------------------------------------------------------------------------------: |
| URL формы        |      `url`      | `string` |     `-`      | `https://fsb.us6.list-manage.com/subscribe/post?u=xxxxxxxxxxxxxxxxxxxxxxxxx&amp;id=xxxxxxxxxx` |

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/tree/master/src/MailChimp)

## 🗓 Changelog

-   21/04/2021 (v1.0)
-   Первая версия

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re developing all the time, so don’t hesitate to send us your feedback and request new features you would like to see added. Feel free to share what you’re working on - we'd **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/SuF9vCMJGW)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](https://raw.githubusercontent.com/quarkly/community-kit/master/LICENSE).
