## 📖 Detailed overview

Компонент для добавления виджета сообщества VK.

## 🎬 Live Demo

[Live demo link](https://quarkly-ui-components.netlify.app/vkpages/)

## ⚙️ Usage

Добавьте компонент на страницу и посмотрите как он работает в режиме превью.

### Режимы отображения

Свойство `View` отвечает за режим отображения содержимого виджета. Существую три варианта:

-   `Members` - Отображать участников сообщества;
-   `News` - Отображать стену сообщества;
-   `Only name` - Отображать только название сообщества.

### Расширенный режим

Свойство `Extended mode` отвечает за расширенный режим. В этом режиме добавляется кнопка «Мне нравится» и фотография сообщества.

## 🧩 Components and Props

| Props Name       |   Type   |                             Description                              |   Default   |   Example   |
| ---------------- | :------: | :------------------------------------------------------------------: | :---------: | :---------: |
| Color Button     | `string` |                             Цвет кнопки                              |  `#5181B8`  |  `#fdfdfd`  |
| Element ID       | `string` | ID элемента, который будет являться контейнером для блока сообщества | `vk_groups` |  `some_id`  |
| Group ID         | `number` |                       Идентификатор сообщества                       |     `-`     | `123456789` |
| Background Color | `string` |                            Фон компонента                            |   `#fff`    |   `blue`    |
| Color Text       | `string` |                             Цвет текста                              |   `#000`    |   `#fff`    |
| View             | `enum `  |              Что отображать [Members, News, Only name]               |  `Members`  | `Only name` |
| Dont use cover   | `bool `  |                   Не отображать обложки сообщества                   |   `false`   |   `true`    |
| Extended mode    | `bool `  |                      Включает расширенный режим                      |   `false`   |   `true`    |

## 🗓 Changelog

-   16/03/2021 (v1.0)
    -   Первая версия

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you can’t stand missing. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://feedback.quarkly.io/communities/1-quarkly-forum/categories/7-components/topics)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](./LICENSE).
