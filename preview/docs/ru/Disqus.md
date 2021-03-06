## 📖 Подробный обзор

Компонент для встраивания виджета с формой комментариев Disqus.

## ⚙️ Использование

1.  Добавьте компонент на страницу
2.  Укажите `Идентификатор обсуждения`, `URL-адрес обсуждения` и `Заголовок обсуждения` на панели Props
3.  Посмотрите как компонент работает в режиме превью

### URL-адрес обсуждения

Если значение свойства `URL-адрес обсуждения` оставить пустым, автоматически применится URL адрес текущей станицы c компонентом.
Так как URL-адреса в констуркторе и на опубликованном сайте отличаются, рекомендуем задать уникальный URL вручную, чтобы отображалась общая форма комментариев.

### Идентификаторы

Идентификатор, URL-адрес и заголовок обсуждения создаются и сохраняются при добавлении первого комментария.
Подробнее об этом можно прочитать [тут](https://help.disqus.com/en/articles/1717111-what-s-a-shortname).

### Имя вашей ленты (Shortname)

Для получения `Имени вашей ленты` (Shortname):

1.  Зарегистрируйтесь на сайте [Disqus](https://disqus.com/profile/signup/)
2.  Перейдите на [страницу создания Disqus](https://disqus.com/admin/create) комментария для вашего сайта

    ![Создать Disqus для вашего сайта](https://test-upl.quarkly.io/60474504627982001eb71a51/images/1.png?v=2021-04-22T09:20:49.350Z)

3.  Перейдите в глобальные настройки профиля, где вы можете найти `Имя вашей ленты` (Shortname) вашего сайта.

    ![Shortname](https://test-upl.quarkly.io/60474504627982001eb71a51/images/2.png?v=2021-04-22T09:21:10.280Z)

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств     | По умолчанию |            Пример             |
| :------------------- | :----------: | :---------------------------: |
| ID обсуждения        |     `-`      |    `ID вашего обсуждения`     |
| URL-адрес обсуждения |     `-`      | `URL-адрес вашего обсуждения` |
| Заголовок обсуждения |     `-`      | `Заголовок вашего обсуждения` |
| Имя вашей ленты      |     `-`      |       `Имя вашей ленты`       |
| Язык виджета         |     `en`     |             `de`              |

### В коде (для разработчиков)

| Названия свойств     | Название в коде  |   Тип    | По умолчанию |            Пример             |
| :------------------- | :--------------: | :------: | :----------: | :---------------------------: |
| ID обсуждения        | `identifierProp` | `string` |     `-`      |    `ID вашего обсуждения`     |
| URL-адрес обсуждения |    `urlProp`     | `string` |     `-`      | `URL-адрес вашего обсуждения` |
| Заголовок обсуждения |   `titleProp`    | `string` |     `-`      | `Заголовок вашего обсуждения` |
| Имя вашей ленты      | `shortnameProp`  | `string` |     `-`      |       `Имя вашей ленты`       |
| Язык виджета         |  `languageProp`  | `string` |     `en`     |             `de`              |

#### Значения свойства 'Язык виджета'

| Пользовательское название | Название в коде |
| :------------------------ | :-------------: |
| Английский                |      `en`       |
| Немецкий                  |      `de`       |
| Французский               |      `fr`       |
| Русский                   |      `ru`       |

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/blob/master/src/Disqus.js)

## 🗓 Changelog

-   21/04/2021 (v1.0)
-   Первая версия

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you would like to see added. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](https://raw.githubusercontent.com/quarkly/community-kit/master/LICENSE).
