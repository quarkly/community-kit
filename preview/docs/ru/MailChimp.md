## 📖 Подробный обзор

Этот компонент поможет вам отправить данные формы в Mailchimp.

## ⚙️ Использование

1.  Добавьте компонент на страницу
2.  Укажите `Ссылку на форму` на панели Props;

    Чтобы сделать это, перейдите в Signup forms > Embedded forms

    И найдите следующие строки:

    ```
    <div id="mc_embed_signup">
    <form action="ССЫЛКА_НА_ФОРМУ" ... />
    ```

3.  Посмотрите как он работает в режиме превью

## 🧩 Компоненты и свойства

### В интерфейсе

| Prop Name | Default |                                            Example                                             |
| :-------- | :-----: | :--------------------------------------------------------------------------------------------: |
| URL       |   `-`   | `https://fsb.us6.list-manage.com/subscribe/post?u=xxxxxxxxxxxxxxxxxxxxxxxxx&amp;id=xxxxxxxxxx` |

### В коде (для разработчиков)

| Prop Name | Name in the code |   Type   | Default |                                            Example                                             |
| :-------- | :--------------: | :------: | :-----: | :--------------------------------------------------------------------------------------------: |
| URL       |      `url`       | `string` |   `-`   | `https://fsb.us6.list-manage.com/subscribe/post?u=xxxxxxxxxxxxxxxxxxxxxxxxx&amp;id=xxxxxxxxxx` |

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
