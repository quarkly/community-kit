export default {
    path: {
        title: {
            en: 'File path',
            ru: 'Путь к файлу',
        },
        control: 'input',
        type: 'text',
        category: ' Main',
        weight: 1,
    },
    renderer: {
        title: {
            en: 'Render',
            ru: 'Отображение',
        },
        control: 'select',
        variants: [
            {
                title: {
                    en: 'SVG (Recommended)',
                    ru: 'SVG (Рекомендуется)',
                },
                value: 'svg',
            },
            { title: 'Canvas', value: 'canvas' },
            { title: 'HTML', value: 'html' },
        ],
        category: ' Main',
        weight: 1,
    },
    forceUpdate: {
        title: {
            en: 'Force update',
            ru: 'Принудительное обновление',
        },
        description: {
            en:
                'If enabled, the value update will be applied immediately. Otherwise, it will be applied after the end of the current segment',
            ru:
                'Если включена, обновление значений будет применяться сразу. Иначе – по завершении текущего сегмента.',
        },
        control: 'checkbox',
        category: 'Animation duration',
        weight: 0.5,
    },
    firstFrame: {
        title: {
            en: 'First frame',
            ru: 'Первый кадр',
        },
        description: {
            en:
                "The first frame of the animation. If it's not specified, the animation will be played from the beginning",
            ru:
                'Первый кадр анимации. Если не указан, анимация будет проигрываться с начала',
        },
        control: 'input',
        type: 'number',
        category: 'Animation duration',
        weight: 0.5,
    },
    lastFrame: {
        title: {
            en: 'Last frame',
            ru: 'Последний кадр',
        },
        description: {
            en:
                'The last frame of the animation. If specified, the animation will play to the end',
            ru:
                'Последний кадр анимации. Если указан, анимация будет проигрываться до конца',
        },
        control: 'input',
        type: 'number',
        category: 'Animation duration',
        weight: 0.5,
    },
    loop: {
        title: {
            en: 'Loop animation',
            ru: 'Зациклить анимацию',
        },
        control: 'checkbox',
        category: 'Controls',
        weight: 0.5,
    },
    isPaused: {
        title: {
            en: 'Pause animation',
            ru: 'Приостановить анимацию',
        },
        control: 'checkbox',
        category: 'Controls',
        weight: 0.5,
    },
    isStopped: {
        title: {
            en: 'Stop animation',
            ru: 'Остановить анимацию',
        },
        control: 'checkbox',
        category: 'Controls',
        weight: 0.5,
    },
    speed: {
        title: {
            en: 'Animation speed',
            ru: 'Скорость анимации',
        },
        description: {
            en:
                'Animation speed (1 = 100%). If the speed is negative, the animation will play in the opposite direction',
            ru:
                'Скорость анимации (1 = 100%). Если скорость отрицательная, анимация будет воспроизводиться в обратном направлении',
        },
        control: 'input',
        type: 'number',
        category: 'Controls',
    },
};
