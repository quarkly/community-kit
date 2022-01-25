export default {
    delay: {
        title: {
            en: 'Delay',
        },
        control: 'input',
    },
    speed: {
        title: {
            en: 'Speed',
        },
        control: 'input',
        type: 'number',
    },
    direction: {
        title: {
            en: 'Direction',
        },
        control: 'select',
        variants: [
            {
                title: {
                    en: 'Left',
                },
                value: 'left',
            },
            {
                title: {
                    en: 'Right',
                },
                value: 'right',
            },
        ],
    },
    pauseOnHover: {
        title: {
            en: 'Pause on hover',
        },
        control: 'checkbox',
    },
    pauseOnClick: {
        title: {
            en: 'Pause on click',
        },
        control: 'checkbox',
    },
};
