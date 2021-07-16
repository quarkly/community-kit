## 📖 Detailed overview

Контейнер для скрытия меню или любого другого контента в мобильной версии сайта.
Чтобы показать контент, необходимо нажать на кнопку меню.

## 🎬 Live Demo

[Live demo link](https://quarkly-catalog.netlify.app/mobilesidepanel/)

## ⚙️ Usage

1.  Добавьте компонент на страницу
2.  Поместите в него любой другой компонент
3.  Выберите breakpoint для переключения в мобильный вид
4.  Проверьте работу в режиме превью на выбранном breakpoint

### Положение панели

Cвойство `Положение панели в мобильном виде` позволяет выбрать положение панели относительно viewport или кнопки меню.
Можно выбрать одно из следующих значений:

-   full - На весь экран;
-   left - По левому краю экрана;
-   right - По правому краю экрана;
-   near - Слева от кнопки;
-   nearRight - Справа от кнопки.

## 🧩 Components and Props

| Названия свойств                        |   Type   | Default |  Example  |
| :-------------------------------------- | :------: | :-----: | :-------: |
| Переключать мобильный вид на breakpoint | `string` |  `md`   |   `sm`    |
| Положение панели в мобильном виде       |  `enum`  | `near`  |  `left`   |
| Функция сглаживания анимации            |  `enum`  | `ease`  | `ease-in` |
| Длительность появления и скрытия        | `string` | `0.3s`  |  `0.5s`   |

## 🗓 Changelog

-   21/04/2021 (v1.0)
-   Первая версия

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you can’t stand missing. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://community.quarkly.io/c/requests/11)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](https://raw.githubusercontent.com/quarkly/community-kit/master/LICENSE).
