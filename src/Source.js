import React from 'react';
import atomize from '@quarkly/atomize';

import ComponentNotice from './ComponentNotice';

const Source = atomize.source();

const SourceComponent = ({
    container,
    src,
    srcSet,
    typeMedia,
    typePicture,
    codecs,
    mediaInput,
    mediaSelect,
    sizes,
    children,
    ...props
}) => {
    let type = '';

    if (container !== 'picture') {
        type = `${typeMedia || ''}${
            typeMedia && codecs ? `; codecs='${codecs}'` : ''
        }`;
    } else {
        type = typePicture || '';
    }

    return container ? (
        <Source
            {...props}
            src={src}
            srcSet={srcSet}
            type={type}
            media={container !== 'picture' ? mediaInput || mediaSelect : ''}
            sizes={container !== 'picture' ? sizes : ''}
        />
    ) : (
        <ComponentNotice
            message={
                'Этот компонент должен быть внутри "Picture", "Audio" или "Video"'
            }
            {...props}
        />
    );
};

const propInfo = {
    src: {
        title: 'Ссылка на аудио или видео файл',
        control: 'input',
        type: 'text',
        category: 'Audio / Video',
        weight: 1,
    },
    typeMedia: {
        title: 'MIME-тип аудио или видео контента',
        control: 'input',
        variants: [
            'video/mp4',
            'video/webm',
            'video/ogg',
            'audio/mpeg',
            'audio/midi',
            'audio/wav',
            'audio/ogg',
        ],
        type: 'text',
        category: 'Audio / Video',
        weight: 1,
    },
    codecs: {
        title: 'Аудио или видео кодеки',
        description: {
            en: 'Audio and video codecs (comma-separated, optional)',
            ru: 'Аудио и видео кодеки (через запятую, опционально)',
        },
        control: 'input',
        type: 'text',
        category: 'Audio / Video',
        weight: 1,
    },
    srcSet: {
        title: 'Источники изображений',
        description: {
            en: 'One or more image sources with descriptors',
            ru: 'Один или несколько источников изображений с дескрипторами',
        },
        control: 'srcSet',
        multiply: true,
        category: 'Picture',
        weight: 1,
    },
    sizes: {
        title: 'Размеры контейнера',
        description: {
            en: 'Image slot sizes from srcSet for different breakpoints',
            ru:
                'Размеры контейнера изображения из srcSet для различных брейкпоинтов',
        },
        control: 'sizes',
        multiply: true,
        category: 'Picture',
        weight: 1,
    },
    mediaSelect: {
        title: 'Категория устройства',
        description: {
            en: 'General category of the device',
            ru: 'Общая категория устройства',
        },
        control: 'select',
        variants: [
            {
                title: {
                    en: 'All',
                    ru: 'Все',
                },
                value: 'all',
            },
            {
                title: {
                    en: 'Print',
                    ru: 'Печать',
                },
                value: 'print',
            },
            {
                title: {
                    en: 'Screen',
                    ru: 'Экран',
                },
                value: 'screen',
            },
            {
                title: {
                    en: 'Speech',
                    ru: 'Речь',
                },
                value: 'speech',
            },
        ],
        category: 'Picture',
        weight: 0.4,
    },
    mediaInput: {
        title: 'Медиа запрос для вывода изображения',
        description: {
            en: "Media query of the resource's intended media",
            ru: 'Медиа запрос, согласно которому будет выводиться изображение',
        },
        control: 'input',
        type: 'text',
        category: 'Picture',
        weight: 0.6,
    },
    typePicture: {
        title: 'MIME-тип изображения',
        description: {
            en: 'MIME image type',
            ru: 'MIME-тип изображения',
        },
        control: 'input',
        variants: [
            'image/webp',
            'image/png',
            'image/bmp',
            'image/jpeg',
            'image/gif',
            'image/tiff',
            'image/pict',
        ],
        category: 'Picture',
        weight: 1,
    },
};

const defaultProps = {
    mediaSelect: 'all',
};

export default atomize(SourceComponent)(
    {
        name: 'Source',
        description: {
            en:
                'Indicates several media resources for Picture, Video, and Audio components',
            ru:
                'Указывает несколько медиа-ресурсов для компонентов Picture, Video и Audio',
        },
        propInfo,
    },
    defaultProps
);
