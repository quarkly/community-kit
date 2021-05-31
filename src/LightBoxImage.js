import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useOverrides } from '@quarkly/components';
import { Box, Icon, Image } from '@quarkly/widgets';
import scroll from './scrollblock';

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
    'Lightbox image': {
        kind: 'Image',
        props: {
            margin: '0 auto',
            'max-width': '80%',
            'max-height': '80%',
            'min-height': 0,
            'min-weight': 0,
            src: 'http://placehold.it/800',
        },
    },
    'Lightbox image:open': {
        kind: 'Image',
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
    'Lightbox image:close': {
        kind: 'Image',
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
    'Lightbox image zoom:in': {
        kind: 'Image',
        props: {
            'max-width': '100%',
            'max-height': '100%',
            cursor: 'zoom-out',
        },
    },
    'Lightbox image zoom:out': {
        kind: 'Image',
        props: {
            'max-width': '80%',
            'max-height': '80%',
            cursor: 'zoom-in',
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

const getNaturalSize = (elem) => {
    return {
        width: elem.naturalWidth,
        height: elem.naturalHeight,
    };
};

const LightboxImage = ({
    showImageProp,
    offScrollProp,
    offLightboxProp,
    ...props
}) => {
    const [isOpen, setOpen] = useState(showImageProp);
    const [isBigSize, setBigSize] = useState(false);
    const [isZoom, setZoom] = useState(false);
    const imageRef = useRef();

    useEffect(() => {
        setOpen(showImageProp);
        // В случае, когда отключаем Lighbox с помощью пропса, убираем блокировку скрола
        if (!showImageProp) {
            if (offScrollProp) scroll.enable();
        }
    }, [showImageProp]);

    const openLightbox = useCallback(() => {
        if (offLightboxProp) return;

        setOpen(true);
        if (offScrollProp) scroll.disable();

        const naturalSizeImage = getNaturalSize(imageRef.current);
        if (naturalSizeImage.width > window.innerWidth) setBigSize(true);

        window.addEventListener('keydown', (e) => {
            if (e.keyCode === 27) {
                setZoom(false);
                setOpen(false);
            }
        });
    }, [offLightboxProp, offScrollProp]);

    const closeLightbox = useCallback(() => {
        if (offLightboxProp) return;
        setOpen(false);
        setZoom(false);
        if (offScrollProp) scroll.enable();
    }, [offLightboxProp, offScrollProp]);

    // Фукция зума
    const zoomImage = useCallback(
        (e) => {
            stopEventClick(e);
            const naturalSizeImage = getNaturalSize(imageRef.current);
            if (naturalSizeImage.width > window.innerWidth) setZoom(!isZoom);
        },
        [isZoom]
    );

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
                <Image
                    ref={imageRef}
                    onClick={(e) => zoomImage(e)}
                    {...override(
                        'Lightbox image',
                        `Lightbox image${isOpen ? ':open' : ':close'}`,
                        `Lightbox image zoom${
                            isZoom ? isBigSize && ':in' : isBigSize && ':out'
                        }`
                    )}
                />
            </Box>
        </Box>
    );
};

const propInfo = {
    showImageProp: {
        title: 'Показать изображение',
        description: {
            ru: 'Показать полное изображение',
        },
        control: 'checkbox',
        category: 'Main',
        weight: 1,
    },
    offScrollProp: {
        title: 'Отключить скролл',
        description: {
            ru: 'Отключить скролл при показе полного изображения',
        },
        control: 'checkbox',
        category: 'Main',
        weight: 1,
    },
    offLightboxProp: {
        title: 'Деактивировать Lightbox',
        description: {
            ru: 'Отключить показ изображения при клике',
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

Object.assign(LightboxImage, {
    overrides,
    propInfo,
    defaultProps,
});

export default LightboxImage;
