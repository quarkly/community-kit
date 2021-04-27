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
            message={'Этот компонент должен быть внутри "Audio" или "Video"'}
            {...props}
        />
    );
};

const propInfo = {
    src: {
        title: 'Ссылка на файл',
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    isDefault: {
        title: 'Использовать по умолчанию',
        control: 'checkbox',
        category: 'Main',
        weight: 1,
    },
    srclang: {
        title: 'Язык дорожки',
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    kind: {
        title: 'Назначение дорожки',
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
        title: 'Отображаемое название',
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

export default atomize(TrackComponent)(
    {
        name: 'Track',
        description: {
            en: 'Indicates timed text tracks for Video, and Audio components',
            ru:
                'Указывает синхронизированные текстовые дорожки для компонентов Video и Audio',
        },
        propInfo,
    },
    defaultProps
);
