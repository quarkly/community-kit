import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useOverrides } from '@quarkly/components';
import { Box, Icon } from '@quarkly/widgets';
import scroll from './scrollblock';
import Video from './Video';

const overrides = {
    'Wrapper user element': {
        kind: 'Box',
        props: {
            display: 'inline-block',
            cursor: 'pointer',
        },
    },
    'Wrapper user element:disabled': {
        kind: 'Box',
        props: {
            opacity: '0.6',
        },
    },
    'Wrapper user element:active': {
        kind: 'Box',
        props: {
            opacity: '1',
        },
    },
    Overlay: {
        kind: 'Box',
        props: {
            position: 'fixed',
            bottom: 0,
            right: 0,
            left: 0,
            top: 0,
            background: 'rgba(0, 0, 0, .7)',
            display: 'flex',
            'justify-content': 'center',
            'align-items': 'center',
        },
    },
    'Overlay:open': {
        kind: 'Box',
        props: {
            opacity: 1,
            'z-index': 110,
            visibility: 'visible',
            'transition-property': 'opacity, visibility, z-index',
            'transition-duration': '.7s',
        },
    },
    'Overlay:close': {
        kind: 'Box',
        props: {
            opacity: 0,
            'z-index': -1,
            visibility: 'hidden',
            'transition-property': 'opacity, visibility, z-index',
            'transition-duration': '.7s',
        },
    },
    'Lightbox video': {
        kind: 'Video',
        props: {
            margin: '0 auto',
            'max-width': '80%',
            'max-height': '80%',
            'min-height': 0,
            'min-weight': 0,
        },
    },
    'Lightbox video:open': {
        kind: 'Video',
        props: {
            opacity: 1,
            'z-index': 110,
            visibility: 'visible',
            transform: 'scale(1)',
            'transition-property':
                'opacity, visibility, z-index, transform, max-height, max-width',
            'transition-duration': '.7s',
            'transition-timing-function': 'ease-in-out',
        },
    },
    'Lightbox video:close': {
        kind: 'Video',
        props: {
            opacity: 0,
            'z-index': -1,
            visibility: 'hidden',
            transform: 'scale(.9)',
            'transition-property':
                'opacity, visibility, z-index, transform, max-height, max-width',
            'transition-duration': '.7s',
            'transition-timing-function': 'ease-in-out',
        },
    },
    'Icon close': {
        kind: 'Icon',
        props: {
            position: 'absolute',
            top: '15px',
            right: '20px',
            size: '30px',
            color: '#fff',
            cursor: 'pointer',
            'z-index': '124',
            category: 'io',
            icon: 'IoMdClose',
        },
    },
};

// Остановка слушателя для дочерих элементов
const stopEventClick = (e) => {
    e.stopPropagation();
    e.cancelBubble = true; // для IE
};

const LightboxVideo = ({
    showImageProp,
    offScrollProp,
    offLightboxProp,
    ...props
}) => {
    const [isOpen, setOpen] = useState(showImageProp);
    const videoRef = useRef();

    const getChildRef = (ref) => {
        videoRef.current = ref.current;
    };

    useEffect(() => {
        setOpen(showImageProp);
        // В случае, когда отключаем Lighbox с помощью пропса, убираем блокировку скрола
        if (!showImageProp) {
            if (offScrollProp) scroll.enable();
        }
    }, [showImageProp, offScrollProp]);

    const openLightbox = useCallback(() => {
        if (offLightboxProp) return;
        setOpen(true);
        if (offScrollProp) scroll.disable();

        window.addEventListener('keydown', (e) => {
            if (e.keyCode === 27) {
                setOpen(false);
                videoRef.current.pause();
            }
        });
    }, [offLightboxProp, offScrollProp]);

    const closeLightbox = useCallback(() => {
        if (offLightboxProp) return;
        setOpen(false);
        if (offScrollProp) scroll.enable();
        videoRef.current.pause();
    }, [offLightboxProp, offScrollProp]);

    const { override, children, rest } = useOverrides(props, overrides, {});

    return (
        <Box {...rest}>
            <Box
                {...override(
                    'Wrapper user element',
                    `Wrapper user element${
                        offLightboxProp ? ':disabled' : ':active'
                    }`
                )}
                onClick={openLightbox}
            >
                {children}
            </Box>
            <Box
                onClick={closeLightbox}
                {...override(
                    'Overlay',
                    `Overlay${isOpen ? ':open' : ':close'}`
                )}
            >
                <Icon onClick={closeLightbox} {...override('Icon close')} />
                <Video
                    onClick={(e) => stopEventClick(e)}
                    getChildRef={getChildRef}
                    {...override(
                        'Lightbox video',
                        `Lightbox video${isOpen ? ':open' : ':close'}`
                    )}
                />
            </Box>
        </Box>
    );
};

const propInfo = {
    showImageProp: {
        title: 'Показать видео',
        description: {
            ru: 'Показать видео',
        },
        control: 'checkbox',
        category: 'Main',
        weight: 1,
    },
    offScrollProp: {
        title: 'Отключить скролл',
        description: {
            ru: 'Отключить скролл при показе видео',
        },
        control: 'checkbox',
        category: 'Main',
        weight: 1,
    },
    offLightboxProp: {
        title: 'Деактивировать Lightbox',
        description: {
            ru: 'Отключить показ видео при клике',
        },
        control: 'checkbox',
        category: 'Main',
        weight: 1,
    },
};

const defaultProps = {
    showImageProp: false,
    offScrollProp: false,
    offLightboxProp: false,
};

Object.assign(LightboxVideo, {
    overrides,
    propInfo,
    defaultProps,
});

export default LightboxVideo;
