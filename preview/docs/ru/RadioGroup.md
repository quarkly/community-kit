## 📖 Подробный обзор

Компонент для создания группы из компонентов Radio.

## ⚙️ Использование

1.  Добавьте компонент Form на страницу
2.  Добавьте компонент RadioGroup в компонент Form
3.  Добавьте компоненты Radio в компонент RadioGroup
4.  Укажите свойство `Имя поля` и остальные при необходимости для компонента RadioGroup
5.  Укажите свойство `Значение` для каждого компонента Radio
6.  Посмотрите как он работает в режиме превью

## 🧩 Компоненты и свойства

### В интерфейсе

| Названия свойств      | По умолчанию |  Пример   |
| :-------------------- | :----------: | :-------: |
| Имя поля              |     `-`      |  `name`   |
| Значение по умолчанию |     `-`      |  `Джон`   |
| Обязательное поле     | `Не отмечен` | `Отмечен` |

### В коде (для разработчиков)

| Названия свойств      | Название в коде |    Тип     | По умолчанию |              Пример               |
| :-------------------- | :-------------: | :--------: | :----------: | :-------------------------------: |
| Имя поля              |     `name`      |  `string`  |     `-`      |              `name`               |
| Значение по умолчанию | `defaultValue`  |  `string`  |     `-`      |              `Джон`               |
| Обязательное поле     |   `required`    | `boolean`  |   `false`    |              `true`               |
| -                     |     `value`     |   `name`   |     `-`      |                `5`                |
| -                     |   `onChange`    | `function` |     `-`      | `(e) => setValue(e.target.value)` |

## 🗄 GitHub

[Ссылка на GitHub](https://github.com/quarkly/community-kit/blob/master/src/RadioGroup)

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
