## 📖 Подробный обзор

Навигация с помощью хлебной крошки предоставляет список ссылок на все предыдущие (родительские) страницы, по которым пользователь перешёл, и показывает текущую открытую страницу на вашем веб-сайте.

## ⚙️ Использование

1. Создайте вложенность из двух и более страниц.
2. Добавьте компонент на любую вложенную страницу.
3. При необходимости, измените на панели Props корневую страницу на любую из родительских.
   Список ссылок в компоненте будет начинаться с выбранной страницы.

**Внимание**:

-   Этот компонент должен быть на вложенной странице.
-   Переход по ссылкам будет работать только на опубикованном сайте.

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств  | По умолчанию |   Пример   |
| :---------------- | :----------: | :--------: |
| Корневая страница |     `-`      | `/foo/bar` |
| Разделитель       |     `/`      |    `-`     |

### В коде (для разработчиков)

| Названия свойств  | Название в коде |   Тип    | По умолчанию |   Пример   |
| :---------------- | :-------------: | :------: | :----------: | :--------: |
| Корневая страница |   `rootPath`    | `string` |     `-`      | `/foo/bar` |
| Разделитель       |   `separator`   | `string` |     `/`      |    `-`     |

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/tree/master/src/Breadcrumbs)

## 🗓 Changelog

-   30/06/2021 (v1.0)
-   Первая версия

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you would like to see added. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](./LICENSE).
