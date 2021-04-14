## 📖 Detailed overview

Компонент представляет из себя счетчик, который может увеличиваться или уменьшаться до определенного значения.

## 🎬 Live Demo

[Live demo link](https://quarkly-ui-components.netlify.app/counter/)

## ⚙️ Usage

Добавьте компонент на страницу и посмотрите как он работает в режиме превью.

### Начальное и конечное значение

Значения в параметрах `Starting Number` и `Ending Number` можно задать отрицательными. Главное, чтобы начальное значение было меньше конечного. В случае, если нужен обратный отсчет, активируйте параметр `Revers`, тогда начальное значение станет конечным, а конечное начальным.

### Запуск счетчика

Счетчик запустится атоматически, как только попадет в поле видимости окна.

## 🧩 Components and Props

| Props Name         |   Type   |        Description         | Default | Example |
| ------------------ | :------: | :------------------------: | :-----: | :-----: |
| Starting Number    | `number` |     Начальное значение     |   `0`   |  `-43`  |
| Ending Number      | `number` |     Конечное значение      |  `100`  |  `300`  |
| Revers             |  `bool`  |   Возрастание / Убывание   | `false` | `true`  |
| Duration Animation | `number` | Продолжительность анимации | `2000`  | `3000`  |
| Number Suffix      | `string` |     Символ после числа     | `none`  |   `%`   |
| Number Prefix      |  `enum`  |    Символ перед числом     | `none`  |   `$`   |

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
