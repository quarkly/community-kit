import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useOverrides } from '@quarkly/components';
import { Box, Text, Icon } from '@quarkly/widgets';
import { FiMenu, FiX } from 'react-icons/fi';

import ComponentNotice from './ComponentNotice';
import { isEmptyChildren } from './utils';

// There are several icons in the component
// Brought out separately, so that there is less duplication
const iconProps = {
    normal: {
        category: 'fi',
        defaultIcon: FiMenu,
        size: '24px',
        color: '--dark',
    },
    closed: {
        category: 'fi',
        defaultIcon: FiMenu,
    },
    open: {
        category: 'fi',
        defaultIcon: FiX,
    },
};

const overrides = {
    Button: {
        kind: 'Box',
    },
    'Button Text': {
        kind: 'Text',
        props: {
            children: 'menu',
        },
    },
    'Button Icon': {
        kind: 'Icon',
        props: iconProps.normal,
    },
    'Button Icon :open': {
        kind: 'Icon',
        props: iconProps.open,
    },
    'Button Icon :closed': {
        kind: 'Icon',
        props: iconProps.closed,
    },
    Wrapper: {
        kind: 'Box',
    },
    Overlay: {
        kind: 'Box',
    },
    Content: {
        kind: 'Box',
    },
    Children: {
        kind: 'Box',
    },
    Cross: {
        kind: 'Icon',
        props: iconProps.open,
    },
};

// Design styles differ 50/50
// Brought out separately, so that there is less duplication
const getContentStyles = ({
    breakpoint,
    menuPosition,
    animDuration,
    animFunction,
}) => {
    const baseStyles = {
        padding: menuPosition === 'near' ? '16px' : '48px 16px 24px',
        width: '100%',

        'align-items': 'center',
        'justify-content': 'space-between',
        'flex-direction': 'row',

        [`${breakpoint}-width`]: 'initial',
        [`${breakpoint}-min-width`]: '280px',
        [`${breakpoint}-min-height`]: '32px',
        [`${breakpoint}-align-items`]: 'flex-start',
        [`${breakpoint}-flex-direction`]: 'column',
        [`${breakpoint}-box-shadow`]: '--xxl',
    };
    const animStyles = {
        appear: {
            open: {
                [`${breakpoint}-transition`]: `
					visibility ${animDuration} step-start,
					opacity ${animDuration} ${animFunction}
				`,
                [`${breakpoint}-visibility`]: 'visible',
                [`${breakpoint}-opacity`]: '1',
            },
            closed: {
                [`${breakpoint}-transition`]: `
					visibility ${animDuration} step-end,
					opacity ${animDuration} ${animFunction}
				`,
                [`${breakpoint}-visibility`]: 'hidden',
                [`${breakpoint}-opacity`]: '0',
            },
        },
        shift: {
            base: {
                [`${breakpoint}-transition`]: `
					transform ${animDuration} ${animFunction}
				`,
            },
        },
    };

    switch (menuPosition) {
        case 'full':
            return {
                normal: {
                    ...baseStyles,

                    [`${breakpoint}-top`]: '0',
                    [`${breakpoint}-left`]: '0',
                    [`${breakpoint}-width`]: '100%',
                    [`${breakpoint}-height`]: '100%',
                    [`${breakpoint}-position`]: 'fixed',
                },
                open: animStyles.appear.open,
                closed: animStyles.appear.closed,
            };
        case 'left':
        case 'right':
            return {
                normal: {
                    ...baseStyles,

                    [`${breakpoint}-top`]: '0',
                    [`${breakpoint}-${
                        menuPosition === 'left' ? 'right' : 'left'
                    }`]: '100%',
                    [`${breakpoint}-padding-top`]: '38px',
                    [`${breakpoint}-width`]: '280px',
                    [`${breakpoint}-height`]: '100%',
                    [`${breakpoint}-position`]: 'fixed',
                },
                closed: {
                    ...animStyles.shift.base,
                    [`${breakpoint}-transform`]: 'translateX(0)',
                },
                open: {
                    ...animStyles.shift.base,
                    [`${breakpoint}-transform`]: `translateX(${
                        menuPosition === 'left' ? '100%' : '-100%'
                    })`,
                },
            };
        case 'near':
            return {
                normal: {
                    ...baseStyles,

                    [`${breakpoint}-top`]: '100%',
                    [`${breakpoint}-right`]: '0',
                    [`${breakpoint}-position`]: 'absolute',
                },
                open: animStyles.appear.open,
                closed: animStyles.appear.closed,
            };
        default:
            return {};
    }
};

// Get all styles by properties
const getStyles = ({
    breakpoint,
    menuPosition,
    animDuration,
    animFunction,
}) => ({
    Button: {
        'padding-right': '3px',
        'min-height': '0',
        'align-items': 'center',
        'align-self': 'flex-end',
        position: 'relative',
        cursor: 'pointer',

        display: 'none',
        [`${breakpoint}-display`]: 'inline-flex',
        [`${breakpoint}-flex`]: '0 0 auto',
        [`${breakpoint}-z-index`]: menuPosition === 'near' ? '2' : '1',
    },
    'Button Text': {
        margin: '0 .35em 0 0',
        'font-size': '14px',
        'user-select': 'none',
    },
    Wrapper: {
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        'z-index': '1',

        [`${breakpoint}-top`]: '0',
        [`${breakpoint}-left`]: '0',
        [`${breakpoint}-position`]:
            menuPosition === 'near' ? 'absolute' : 'fixed',
    },
    'Wrapper :open': {
        [`${breakpoint}-transition`]: `visibility ${animDuration} step-start`,
        [`${breakpoint}-visibility`]: 'visible',
    },
    'Wrapper :closed': {
        [`${breakpoint}-transition`]: `visibility ${animDuration} step-end`,
        [`${breakpoint}-visibility`]: 'hidden',
    },
    Overlay: {
        width: '100%',
        height: '100%',
        'background-color':
            menuPosition === 'near' ? 'transparent' : 'rgba(0,0,0, .5)',
        position: 'relative',
        display: 'none',
        'z-index': '1',

        [`${breakpoint}-top`]: '0',
        [`${breakpoint}-left`]: '0',
        [`${breakpoint}-position`]: 'fixed',
        [`${breakpoint}-display`]: 'block',
    },
    'Overlay :open': {
        [`${breakpoint}-transition`]: `
      visibility ${animDuration} step-start,
      opacity ${animDuration} ${animFunction}
    `,
        [`${breakpoint}-visibility`]: 'visible',
        [`${breakpoint}-opacity`]: '1',
    },
    'Overlay :closed': {
        [`${breakpoint}-transition`]: `
      visibility ${animDuration} step-end,
      opacity ${animDuration} ${animFunction}
    `,
        [`${breakpoint}-visibility`]: 'hidden',
        [`${breakpoint}-opacity`]: '0',
    },
    Content: {
        'max-width': '100vw',
        'max-height': '100vh',
        'background-color': 'white',
        'box-sizing': 'border-box',
        display: 'flex',
        'z-index': '2',

        ...getContentStyles({
            breakpoint,
            menuPosition,
            animDuration,
            animFunction,
        }).normal,
    },
    'Content :open': {
        ...getContentStyles({
            breakpoint,
            menuPosition,
            animDuration,
            animFunction,
        }).open,
    },
    'Content :closed': {
        ...getContentStyles({
            breakpoint,
            menuPosition,
            animDuration,
            animFunction,
        }).closed,
    },
    Children: {
        width: '100%',
    },
    Cross: {
        top: '16px',
        right: '16px',
        position: 'absolute',
        cursor: 'pointer',
        display: 'none',

        [`${breakpoint}-display`]: menuPosition === 'near' ? 'none' : 'block',
    },
});

const MobileSidePanel = ({
    breakpoint,
    menuPosition,
    animDuration,
    animFunction,
    ...props
}) => {
    const { override, children, rest } = useOverrides(props, overrides);

    const [isOpen, setOpen] = useState(false);

    const onToggle = useCallback(() => setOpen((prev) => !prev), []);
    const onOpen = useCallback(() => setOpen(true), []);
    const onClose = useCallback(() => setOpen(false), []);

    const isEmpty = useMemo(() => isEmptyChildren(children), [children]);

    const styles = useMemo(
        () =>
            getStyles({ breakpoint, menuPosition, animDuration, animFunction }),
        [breakpoint, menuPosition, animDuration, animFunction]
    );

    const statusOpen = isOpen || isEmpty ? ':open' : ':closed';
    const statusButtonOpen =
        menuPosition === 'near' && (isOpen || isEmpty) ? ':open' : ':closed';

    useEffect(() => {
        setOpen(isOpen || isEmpty);
    }, [setOpen, isOpen, isEmpty]);

    return (
        <Box
            min-width="100%"
            min-height="0"
            align-items="center"
            justify-content="flex-end"
            position="relative"
            display="flex"
            z-index="5"
            {...rest}
        >
            <Box
                onPointerDown={menuPosition === 'near' ? onToggle : onOpen}
                {...styles.Button}
                {...override('Button', `Button ${statusButtonOpen}`)}
            >
                <Text
                    {...styles['Button Text']}
                    {...override(
                        'Button Text',
                        `Button Text ${statusButtonOpen}`
                    )}
                />
                <Icon
                    {...override(
                        'Button Icon',
                        `Button Icon ${statusButtonOpen}`
                    )}
                />
            </Box>
            <Box
                {...styles.Wrapper}
                {...styles[`Wrapper ${statusOpen}`]}
                {...override('Wrapper', `Wrapper ${statusOpen}`)}
            >
                <Box
                    onPointerDown={onClose}
                    {...styles.Overlay}
                    {...styles[`Overlay ${statusOpen}`]}
                    {...override('Overlay', `Overlay ${statusOpen}`)}
                />
                <Box
                    {...styles.Content}
                    {...styles[`Content ${statusOpen}`]}
                    {...override('Content', `Content ${statusOpen}`)}
                >
                    <Icon
                        onPointerDown={onClose}
                        {...styles.Cross}
                        {...override('Cross')}
                    />
                    <Box
                        {...styles.Children}
                        {...override('Children', `Children ${statusOpen}`)}
                        display={isEmpty ? 'none' : undefined}
                    >
                        {children}
                    </Box>
                    {isEmpty && (
                        <ComponentNotice message="Drag any component here" />
                    )}
                </Box>
            </Box>
        </Box>
    );
};

const propInfo = {
    breakpoint: {
        title: {
            en: 'Switch mobile view on breakpoint',
            ru: 'Переключать мобильный вид на breakpoint',
        },
        control: 'input',
        type: 'text',
        variants: ['all', 'sm', 'md', 'lg'],
        category: 'Position',
        weight: 1,
    },
    menuPosition: {
        title: {
            en: 'Panel position in mobile view',
            ru: 'Положение панели в мобильном виде',
        },
        control: 'select',
        variants: [
            {
                title: {
                    en: 'Fullscreen',
                    ru: 'На весь экран',
                },
                value: 'full',
            },
            {
                title: {
                    en: 'Align Left',
                    ru: 'По левому краю',
                },
                value: 'left',
            },
            {
                title: {
                    en: 'Align Right',
                    ru: 'По правому краю',
                },
                value: 'right',
            },
            {
                title: {
                    en: 'Near the button',
                    ru: 'Возле кнопки',
                },
                value: 'near',
            },
        ],
        type: 'string',
        category: 'Position',
        weight: 1,
    },
    animDuration: {
        title: {
            en: 'Duration of show/hide',
            ru: 'Длительность появления и скрытия',
        },
        control: 'input',
        type: 'text',
        variants: ['0s', '0.1s', '0.2s', '0.3s', '0.5s', '1s'],
        category: 'Animation',
        weight: 1,
    },
    animFunction: {
        title: {
            en: 'Animation timing function',
            ru: 'Функция сглаживания анимации',
        },
        control: 'input',
        variants: [
            'linear',
            'ease',
            'ease-in',
            'ease-out',
            'ease-in-out',
            'step-start',
            'step-end',
        ],
        type: 'text',
        category: 'Animation',
        weight: 1,
    },
};

const defaultProps = {
    breakpoint: 'md',
    menuPosition: 'near',
    animDuration: '.3s',
    animFunction: 'ease',
};

Object.assign(MobileSidePanel, {
    title: 'Mobile side panel',
    description: {
        en:
            'Container to hide menu or any other content in the mobile version of the site',
        ru:
            'Контейнер для скрытия меню или любого другого контента в мобильной версии сайта',
    },
    propInfo,
    defaultProps,
    overrides,
});

export default MobileSidePanel;
