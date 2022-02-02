export default {
    delay: {
        title: {
            en: 'Delay',
            ru: 'Задержка',
        },
        control: 'input',
    },
    speed: {
        title: {
            en: 'Speed',
            ru: 'Скорость',
        },
        control: 'input',
        type: 'number',
    },
    direction: {
        title: {
            en: 'Direction',
            ru: 'Направление',
        },
        control: 'select',
        variants: [
            {
                title: {
                    en: 'Left',
                    ru: 'Влево',
                },
                value: 'left',
            },
            {
                title: {
                    en: 'Right',
                    ru: 'Вправо',
                },
                value: 'right',
            },
        ],
    },
    pauseOnHover: {
        title: {
            en: 'Pause on hover',
            ru: 'Пауза при наведении',
        },
        control: 'checkbox',
    },
    pauseOnClick: {
        title: {
            en: 'Pause on click',
            ru: 'Пауза при клике',
        },
        control: 'checkbox',
    },
};
