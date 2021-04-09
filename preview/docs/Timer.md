## 📖 Detailed overview

Компонент представляет из себя таймер. В параметрах таймера вы можете задать дату и время окончания.
Компонент можно использовать, например, для временных акций сайта.

## 🎬 Live Demo

[Live demo link](https://quarkly-ui-components.netlify.app/timer/)

## ⚙️ Дата окончания

В параметре `«To Date»` допустимо указывать дату в следующих форматах: 05-06-2021, 05.06.2021, 05/06/2021

### Текст об окончании таймера

Параметр `«When Show Text»` регулирует, когда необходимо отображать текст об окончании таймера.
Допустимы следующие варианты:

-   always - Текст отображается всегда;
-   complete - Текст отобразится, когда время таймера закончится;
-   never - Тект не отображается никогда;

## 🧩 Components and Props

| Props Name     |   Type   |  Default   | Description                                                           |
| :------------- | :------: | :--------: | :-------------------------------------------------------------------- |
| To Date        | `string` |    `-`     | Дата окончания таймера (в формате дд-мм-гггг)                         |
| To Time        | `string` |    `-`     | Время окончания таймера (в формате чч:мм)                             |
| Show Days      |  `bool`  |   `true`   | Показать блок «Дни»                                                   |
| Show Hours     |  `bool`  |   `true`   | Показать блок «Часы»                                                  |
| Show Minutes   |  `bool`  |   `true`   | Показать блок «Минуты»                                                |
| Show Seconds   |  `bool`  |   `true`   | Показать блок «Секунды»                                               |
| When Show Text |  `enum`  | `complete` | Когда отображать текст об окончании таймера (always, complete, never) |

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
