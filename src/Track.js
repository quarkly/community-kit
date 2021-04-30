import React from 'react';
import atomize from '@quarkly/atomize';

import ComponentNotice from './ComponentNotice';

const Track = atomize.track();

const TrackComponent = ({
    container,
    src,
    srclang,
    kind,
    label,
    isDefault,
    children,
    ...props
}) => {
    return container ? (
        <Track
            {...props}
            default={isDefault || undefined}
            src={src}
            srclang={srclang}
            kind={kind}
            label={label}
        />
    ) : (
        <ComponentNotice
            message={'This component should be inside Audio or Video'}
            {...props}
        />
    );
};

const propInfo = {
    src: {
        title: {
            en: 'File link',
            ru: 'Ссылка на файл',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    isDefault: {
        title: {
            en: 'Set default',
            ru: 'Использовать по умолчанию',
        },
        control: 'checkbox',
        category: 'Main',
        weight: 1,
    },
    srclang: {
        title: {
            en: 'Track language',
            ru: 'Язык дорожки',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    kind: {
        title: {
            en: 'Track purpose',
            ru: 'Назначение дорожки',
        },
        control: 'select',
        variants: [
            {
                title: {
                    en: 'Subtitles',
                    ru: 'Субтитры',
                },
                value: 'subtitles',
            },
            {
                title: {
                    en: 'Captions',
                    ru: 'Подписи',
                },
                value: 'captions',
            },
            {
                title: {
                    en: 'Descriptions',
                    ru: 'Описания',
                },
                value: 'descriptions',
            },
            {
                title: {
                    en: 'Chapters',
                    ru: 'Главы',
                },
                value: 'chapters',
            },
            {
                title: {
                    en: 'Metadata',
                    ru: 'Метаданные',
                },
                value: 'metadata',
            },
        ],
        category: 'Main',
        weight: 1,
    },
    label: {
        title: {
            en: 'Displayed title',
            ru: 'Отображаемое название',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
};

const defaultProps = {
    srclang: 'en',
    kind: 'subtitles',
};

Object.assign(TrackComponent, {
    title: 'Track',
    description: {
        en: 'This component allows you to add a synchronized text track',
        ru: 'Компонент для добавления синхронизированной текстовой дорожки',
    },
    propInfo,
    defaultProps,
})

export default TrackComponent;
