## 📖 Detailed overview

Компонент представляет из себя SVG фигуру. Подходит для создания простых фигур с индивидуальным размером, цветом и т.п.

## 🎬 Live Demo

[Live demo link](https://quarkly-ui-components.netlify.app/svgshape/)

## ⚙️ Usage

Добавьте компонент на страницу и посмотрите как он работает.

### Тип фигуры

В параметрах компонента можно поменять фигуру. За это отвечает свойство `Type`, в которой доступны следующие фигуры:

-   rectangle - Прямоугольник
-   line - Линия
-   ellipse - Эллипс
-   circle - Круг
-   square - Квадрат

## 🧩 Components and Props

| Props Name       |   Type   |      Default      | Description                                          |
| :--------------- | :------: | :---------------: | :--------------------------------------------------- |
| Type             | `enum `  |   `rectangle `    | Тип формы (rectangle, line, ellipse, circle, square) |
| Stroke           | `string` |      `#000`       | Цвет рамки                                           |
| Srtoke Width     | `number` |        `1`        | Толщина рамки (в px)                                 |
| Stroke Ppacity   | `number` |        `1`        | Прозрачность рамки                                   |
| Stroke Linecap   |  `enum`  |      `butt`       | Форма рамки (butt, round, square)                    |
| Stroke Dasharray | `string` |      `none`       | Заполненность рамки                                  |
| Fill             | `string` | `--color-primary` | Цвет фигуры                                          |
| Fill Opacity     | `number` |        `1`        | Прозрачность фигуры                                  |

## 🗓 Changelog

    - 09/04/2021 (v1.0)
    - Первая версия

## 📮 Feedback

If you encountered a bug, please contact us so we can fix it promptly. We’re rapidly developing, so don’t hesitate to send us your feedback and request new features you can’t stand missing. Feel free to share what you’re working on - we **love** to see what you’re building with Quarkly!

[Help with components](https://feedback.quarkly.io/communities/1-quarkly-forum/categories/7-components/topics)

[We're on Discord](https://discord.gg/f9KhSMGX)

[Our Twitter](https://twitter.com/quarklyapp)

[dev@quarkly.io](mailto:dev@quarkly.io)

## 📝 License

Licensed under the [MIT License](./LICENSE).
