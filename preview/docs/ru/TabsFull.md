## 📖 Подробный обзор

Вкладки позволяют легко переключаться между между контентом, разбитым на несколько определённых частей.

## ⚙️ Использование

1. Добавьте компонент на страницу
2. Добавьте `TabsFullHead` и `TabsFullBody` внутрь компонента
3. Добавьте `TabsFullButton` внутрь `TabsFullHead`
4. Добавьте `TabsFullContent` внутрь `TabsFullBody`
5. Укажите соответствующие `ID Вкладки` у `TabsFullButton` и `TabsFullContent`, чтобы связать кнопки вкладок с их контентом.
6. Добавьте компоненты внутрь `TabsFullButton` и `TabsFullContent`
7. Посмотрите как он работает в режиме превью

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств     | По умолчанию |     Пример      |
| :------------------- | :----------: | :-------------: |
| Вкладка по умолчанию |     `-`      |       `1`       |
| Выравнивание вкладок |  `В начало`  | `На всю ширину` |
| Отображение          |     `1`      |       `0`       |

### В коде (для разработчиков)

| Названия свойств     | Название в коде |   Тип    | По умолчанию |    Пример    |
| :------------------- | :-------------: | :------: | :----------: | :----------: |
| Вкладка по умолчанию |  `defaultTab`   | `string` |     `-`      |     `1`      |
| Выравнивание вкладок |     `align`     |  `enum`  |   `start`    | `full width` |
| Отображение          |  `orientation`  |  `enum`  | `horizontal` |  `vertical`  |

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/blob/master/src/TabsFull)

## 🗓 Changelog

-   02/11/2021 (v1.0)
-   Первая версия

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you would like to see added. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](https://raw.githubusercontent.com/quarkly/community-kit/master/LICENSE).
