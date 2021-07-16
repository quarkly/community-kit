import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useOverrides } from '@quarkly/components';
import { Box, Text, Icon } from '@quarkly/widgets';

import { propInfo, defaultProps, overrides } from './props';
import ComponentNotice from '../ComponentNotice';
import { isEmptyChildren } from '../utils';

// Design styles differ 50/50
// Brought out separately, so that there is less duplication
const getContentStyles = ({
    breakpoint,
    menuPosition,
    animDuration,
    animFunction,
    isNear,
}) => {
    const baseStyles = {
        padding: isNear ? '16px' : '48px 16px 24px',
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
        case 'nearRight':
            return {
                normal: {
                    ...baseStyles,

                    [`${breakpoint}-top`]: '100%',
                    [`${breakpoint}-left`]: '0',
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
    isNear,
}) => ({
    Button: {
        'padding-right': '3px',
        'min-height': '0',
        'align-items': 'center',
        'align-self': 'flex-end',
        'flex-direction':
            menuPosition === 'left' || menuPosition === 'nearRight'
                ? 'row-reverse'
                : 'row',
        position: 'relative',
        cursor: 'pointer',

        display: 'none',
        [`${breakpoint}-display`]: 'inline-flex',
        [`${breakpoint}-flex`]: '0 0 auto',
        [`${breakpoint}-z-index`]: isNear ? '2' : '1',
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
        [`${breakpoint}-position`]: isNear ? 'absolute' : 'fixed',
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
        'background-color': isNear ? 'transparent' : 'rgba(0,0,0, .5)',
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
            isNear,
        }).normal,
    },
    'Content :open': {
        ...getContentStyles({
            breakpoint,
            menuPosition,
            animDuration,
            animFunction,
            isNear,
        }).open,
    },
    'Content :closed': {
        ...getContentStyles({
            breakpoint,
            menuPosition,
            animDuration,
            animFunction,
            isNear,
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

        [`${breakpoint}-display`]: isNear ? 'none' : 'block',
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
    const isNear = useMemo(
        () => menuPosition === 'near' || menuPosition === 'nearRight',
        [menuPosition]
    );

    const onToggle = useCallback(() => setOpen((prev) => !prev), []);
    const onOpen = useCallback(() => setOpen(true), []);
    const onClose = useCallback(() => setOpen(false), []);

    const isEmpty = useMemo(() => isEmptyChildren(children), [children]);

    const styles = useMemo(
        () =>
            getStyles({
                breakpoint,
                menuPosition,
                animDuration,
                animFunction,
                isNear,
            }),
        [breakpoint, menuPosition, animDuration, animFunction, isNear]
    );

    const statusOpen = isOpen || isEmpty ? ':open' : ':closed';
    const statusButtonOpen =
        isNear && (isOpen || isEmpty) ? ':open' : ':closed';

    useEffect(() => {
        setOpen(isOpen || isEmpty);
    }, [setOpen, isOpen, isEmpty]);

    return (
        <Box
            flex="1 1 auto"
            width="100%"
            min-width="0px"
            min-height="0px"
            align-items="center"
            justify-content={
                menuPosition === 'left' || menuPosition === 'nearRight'
                    ? 'flex-start'
                    : 'flex-end'
            }
            position="relative"
            display="flex"
            z-index="5"
            {...rest}
        >
            <Box
                onPointerDown={isNear ? onToggle : onOpen}
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
