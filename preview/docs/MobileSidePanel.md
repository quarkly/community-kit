## 📖 Detailed overview

Компонент скрывает свое содержимое в мобильной версии сайта и отображает по клику на кнопку. В этот компонент можно вложить другие компоненты.

## 🎬 Live Demo

[Live demo link](https://quarkly-ui-components.netlify.app/mobilesidepanel/)

## ⚙️ Usage

Добавьте компонент на страницу и поместите в него другой компонент. Затем, посмотрите как он работает в режиме превью в мобильной версии.

### Положение панели

Положение панели можно изменить с помощью свойства `Mobile Panel Position`. Можно выбрать одно из следующих значений:

-   full - Панель занимает всю ширину и высоту экрана;
-   left - Панель располагается слева;
-   right - Панель располагается справа;
-   near - Панель располагается на своем месте.

## 🧩 Components and Props

| Props Name                 |   Type    |                         Description                         | Default |  Example  |
| -------------------------- | :-------: | :---------------------------------------------------------: | :-----: | :-------: |
| Show/Hide Duration         | `string ` |          Продолжительность анимации показа/скрытия          | `0.3s`  |  `0.5s`   |
| Show/Hide Easing Function  |  `enum`   |                  Скорость течения анимации                  | `ease`  | `ease-in` |
| Mobile Version Breackpoint | `string`  |    Брейкпоинт, меньше которого изменять на мобильный вид    |  `md`   |   `sm`    |
| Mobile Panel Position      |  `enum`   | Позиция панели в мобильной версии [full, left, right, near] | `near`  |  `left`   |

## 🗓 Changelog

 - 16/03/2021 (v1.0)
 - Первая версия

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you can’t stand missing. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://feedback.quarkly.io/communities/1-quarkly-forum/categories/7-components/topics)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](./LICENSE).
