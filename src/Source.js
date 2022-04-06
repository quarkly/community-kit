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
            media={container === 'picture' ? mediaInput || mediaSelect : ''}
            sizes={container === 'picture' ? sizes : ''}
        />
    ) : (
        <ComponentNotice
            message={'This component should be inside Picture, Audio or Video'}
            {...props}
        />
    );
};

const propInfo = {
    src: {
        title: {
            en: 'Audio or video file link',
            ru: 'Ссылка на аудио или видео файл',
        },
        control: 'input',
        type: 'text',
        category: 'Audio / Video',
        weight: 1,
    },
    typeMedia: {
        title: {
            en: 'MIME type audio or video',
            ru: 'MIME-тип аудио или видео контента',
        },
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
        title: {
            en: 'Audio and video codecs',
            ru: 'Аудио или видео кодеки',
        },
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
        title: {
            en: 'Image sources',
            ru: 'Источники изображений',
        },
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
        title: {
            en: 'Container size',
            ru: 'Размеры контейнера',
        },
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
        title: {
            en: 'Device category',
            ru: 'Категория устройства',
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
        title: {
            en: 'Media query for image download',
            ru: 'Медиа запрос для вывода изображения',
        },
        control: 'input',
        type: 'text',
        category: 'Picture',
        weight: 0.6,
    },
    typePicture: {
        title: {
            en: 'MIME type image',
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

Object.assign(SourceComponent, {
    title: 'Source',
    description: {
        en: 'This component helps you add multiple media sources',
        ru: 'Компонент для добавления нескольких медиа-ресурсов',
    },
    propInfo,
    defaultProps,
});

export default SourceComponent;
