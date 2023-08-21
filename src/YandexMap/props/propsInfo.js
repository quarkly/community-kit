export default {
    apikey: {
        title: {
            en: 'API Key',
            ru: 'API Ключ',
        },
        control: 'input',
        type: 'text',
        category: ' Main',
        weight: 1,
    },
    zoomValue: {
        title: {
            en: 'Map scale',
            ru: 'Масштаб карты',
        },
        description: {
            en: 'Map scale. Available values from 0 to 19',
            ru: 'Масштаб карты. Доступны значения от 0 до 19',
        },
        control: 'input',
        type: 'number',
        weight: 1,
    },
    latitudeCenter: {
        title: {
            en: 'Latitude',
            ru: 'Широта',
        },
        control: 'input',
        type: 'number',
        category: 'Center',
        weight: 0.5,
    },
    longitudeCenter: {
        title: {
            en: 'Longitude',
            ru: 'Долгота',
        },
        control: 'input',
        type: 'number',
        category: 'Center',
        weight: 0.5,
    },
    searchControl: {
        title: {
            en: 'Search',
            ru: 'Поиск',
        },
        control: 'checkbox',
        category: 'Controls',
        weight: 0.5,
    },
    fullscreenControl: {
        title: {
            en: 'Full screen view',
            ru: 'Полноэкранный вид',
        },
        control: 'checkbox',
        category: 'Controls',
        weight: 0.5,
    },
    geolocationControl: {
        title: {
            en: 'Geo',
            ru: 'Геопозиция',
        },
        control: 'checkbox',
        category: 'Controls',
        weight: 0.5,
    },
    zoomControl: {
        title: {
            en: 'Scale',
            ru: 'Масштабирование',
        },
        control: 'checkbox',
        category: 'Controls',
        weight: 0.5,
    },
    trafficControl: {
        title: {
            en: 'Traffic',
            ru: 'Показывать пробки',
        },
        control: 'checkbox',
        category: 'Controls',
        weight: 0.5,
    },
    rulerControl: {
        title: {
            en: 'Ruler',
            ru: 'Показывать линейку',
        },
        control: 'checkbox',
        category: 'Controls',
        weight: 0.5,
    },
    typeSelectorContol: {
        title: {
            en: 'Layers options',
            ru: 'Показывать варианты слоев',
        },
        control: 'checkbox',
        category: 'Controls',
        weight: 0.5,
    },
    lang: {
        title: {
            en: 'Localization',
            ru: 'Локализация',
        },
        control: 'input',
        type: 'text',
        variants: ['ru-RU', 'en_US', 'en_RU', 'ru_UA', 'uk_UA', 'tr_TR'],
        weight: 0.5,
    },
};
