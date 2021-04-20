## 📖 Detailed overview

Компонент представляет из себя карточку с картинкой, которую можно развернуть при клике или наведении на нее. На обратной стороне карточки, вы можете разместить любые другие компоненты.

## 🎬 Live Demo

[Live demo link](https://quarkly-ui-components.netlify.app/cardflip/)

## ⚙️ Usage

Добавьте компонент на страницу и посмотрите как он работает в режиме превью.

### Поменять изображение карточки

Чтобы поменять изображение карточки, выберите встроенный компонент `Image` и измените ссылку в параметре `Src`.

### Соотношение сторон изображения

При выборе `auto` в свойстве `Aspect Ratio`, размер изображения будет равен размеру (высоте и ширине) компонента.

## 🧩 Components and Props

| Props Name      |   Type   |                            Description                             |  Default  |  Example  |
| --------------- | :------: | :----------------------------------------------------------------: | :-------: | :-------: |
| Flip Duration   | `number` |                Продолжительность анимации разворота                |  `1000`   |  `2000`   |
| Timing Function | `string` |                     Cкорость течения анимации                      |    `-`    | `ease-in` |
| Flip Trigger    |  `enum`  |            Действие, вызывающее анимацию [Click, Hover]            |  `Click`  |  `Hover`  |
| Flip Direction  |  `enum`  |       Направление разворота [toRight, toLeft, ToUp, toDown]        | `toRight` |  `ToUp`   |
| Aspect Ratio    |  `enum`  | Размер изображения в пропорциях [auto, 16:9, 4:3, 1:1, 3:4, 9:16 ] |  `auto`   |   `1:1`   |

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
