import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useOverrides } from '@quarkly/components';
import { Box, Text } from '@quarkly/widgets';

import ComponentNotice from './ComponentNotice';

const overrides = {
    Content: {
        kind: 'Box',
        props: {
            width: '100%',
            'min-height': '0px',
        },
    },
    Wrapper: {
        kind: 'Box',
        props: {
            width: 'max-content',
            display: 'flex',
            'align-items': 'center',
            'justify-content': 'center',
            'text-align': 'center',
            transition: 'opacity .8s, visibility .8s',
            'pointer-events': 'all',
            position: 'absolute',
        },
    },
    Title: {
        kind: 'Text',
        props: {
            children: 'Some text',

            margin: '0px',
            padding: '10px 15px',
            'max-width': '150px',
            'max-height': '100px',
            color: 'white',
            background: 'black',
            'word-break': 'break-word',
            'overflow-x': 'hidden',
        },
    },
    Arrow: {
        kind: 'Box',
        props: {
            margin: '0px',
            'min-width': '0px',
            'min-height': '0px',
            position: 'absolute',
            'z-index': '1',
        },
    },
};

// Рассчёт доступного пространства для каждой стороны
const checkDirections = {
    top: (prop) =>
        prop.wrapperRect.height +
            prop.arrowSizeNumb +
            prop.tooltipOffsetNumb +
            prop.arrowOffsetNumb <=
        prop.componentRect.top,
    right: (prop) =>
        prop.wrapperRect.width +
            prop.arrowSizeNumb +
            prop.tooltipOffsetNumb +
            prop.arrowOffsetNumb <=
        window.innerWidth - prop.componentRect.width - prop.componentRect.left,
    bottom: (prop) =>
        prop.wrapperRect.height +
            prop.arrowSizeNumb +
            prop.tooltipOffsetNumb +
            prop.arrowOffsetNumb <=
        window.innerHeight - prop.componentRect.height - prop.componentRect.top,
    left: (prop) =>
        prop.wrapperRect.width +
            prop.arrowSizeNumb +
            prop.tooltipOffsetNumb +
            prop.arrowOffsetNumb <=
        prop.componentRect.left,
};

// Порядок проверки мест, в зависимости от выбранной стороны
const orderDirections = {
    left: ['left', 'right', 'top', 'bottom'],
    right: ['right', 'left', 'top', 'bottom'],
    top: ['top', 'bottom', 'left', 'right'],
    bottom: ['bottom', 'top', 'left', 'right'],
};

// Варианты положения тултипа
const getWrapperPosition = {
    top: (props) => ({
        bottom: `calc(100% + ${props.arrowOffsetNumb}px + ${props.arrowSizeNumb}px)`,
    }),
    right: (props) => ({
        left: `calc(100% + ${props.arrowOffsetNumb}px + ${props.arrowSizeNumb}px)`,
    }),
    bottom: (props) => ({
        top: `calc(100% + ${props.arrowOffsetNumb}px + ${props.arrowSizeNumb}px)`,
    }),
    left: (props) => ({
        right: `calc(100% + ${props.arrowOffsetNumb}px + ${props.arrowSizeNumb}px)`,
    }),
};

// Варианты положения стрелки
const getArrowPosition = {
    top: (props) => ({
        bottom: `-${props.arrowSizeNumb}px`,
        'border-top': `calc(${props.arrowSizeNumb}px + ${pixelBug}px) solid ${props.tooltipColorProp}`,
        'border-right': `calc(${props.arrowSizeNumb}px + ${pixelBug}px) solid transparent`,
        'border-left': `calc(${props.arrowSizeNumb}px + ${pixelBug}px) solid transparent`,
    }),
    bottom: (props) => ({
        top: `-${props.arrowSizeNumb}px`,
        'border-bottom': `calc(${props.arrowSizeNumb}px + ${pixelBug}px) solid ${props.tooltipColorProp}`,
        'border-right': `calc(${props.arrowSizeNumb}px + ${pixelBug}px) solid transparent`,
        'border-left': `calc(${props.arrowSizeNumb}px + ${pixelBug}px) solid transparent`,
    }),
    left: (props) => ({
        right: `-${props.arrowSizeNumb}px`,
        'border-left': `calc(${props.arrowSizeNumb}px + ${pixelBug}px) solid ${props.tooltipColorProp}`,
        'border-top': `calc(${props.arrowSizeNumb}px + ${pixelBug}px) solid transparent`,
        'border-bottom': `calc(${props.arrowSizeNumb}px + ${pixelBug}px) solid transparent`,
    }),
    right: (props) => ({
        left: `-${props.arrowSizeNumb}px`,
        'border-right': `calc(${props.arrowSizeNumb}px + ${pixelBug}px) solid ${props.tooltipColorProp}`,
        'border-top': `calc(${props.arrowSizeNumb}px + ${pixelBug}px) solid transparent`,
        'border-bottom': `calc(${props.arrowSizeNumb}px + ${pixelBug}px) solid transparent`,
    }),
};

// Смещение на 1px, чтобы скрыть границу между стрелкой и текстом
const pixelBug = 1;

const TooltipBlock = ({
    wrapperRef,
    tooltipPosition,
    tooltipStatusProp,
    tooltipStatusShow,
    tooltipColorProp,
    arrowSizeNumb,
    arrowOffsetNumb,
    arrowStatusProp,
    override,
}) => {
    const wrapperPositionStyles = useMemo(() => {
        const position =
            getWrapperPosition[tooltipPosition] || getWrapperPosition.top;

        return position({
            arrowOffsetNumb,
            arrowSizeNumb,
        });
    }, [tooltipPosition, arrowOffsetNumb, arrowSizeNumb]);
    const wrapperShowStyles = useMemo(
        () => ({
            visibility:
                tooltipStatusProp === 'always' || tooltipStatusShow
                    ? 'visible '
                    : 'hidden',
            opacity:
                tooltipStatusProp === 'always' || tooltipStatusShow ? 1 : 0,
        }),
        [tooltipStatusProp, tooltipStatusShow]
    );

    const arrowPositionStyles = useMemo(
        () =>
            getArrowPosition[tooltipPosition]({
                tooltipColorProp,
                arrowSizeNumb,
            }),
        [tooltipPosition, tooltipColorProp, arrowSizeNumb]
    );
    const arrowShowStyles = useMemo(
        () => ({
            visibility: arrowStatusProp ? 'visible ' : 'hidden',
            opacity: arrowStatusProp ? 1 : 0,
        }),
        [arrowStatusProp]
    );

    return (
        <Box
            top="0%"
            left="0%"
            width="100%"
            height="100%"
            align-items="center"
            justify-content="center"
            pointer-events="none"
            position="absolute"
            display="flex"
        >
            <Box
                ref={wrapperRef}
                {...override('Wrapper')}
                {...wrapperPositionStyles}
                {...wrapperShowStyles}
            >
                <Text
                    {...override('Title')}
                    background-color={tooltipColorProp}
                />
                <Box
                    {...override('Arrow')}
                    {...arrowPositionStyles}
                    {...arrowShowStyles}
                />
            </Box>
        </Box>
    );
};

const TooltipComponent = ({
    tooltipPositionProp,
    tooltipOffsetProp,
    tooltipColorProp,
    tooltipStatusProp,
    tooltipAutoChangeProp,
    arrowSizeProp,
    arrowOffsetProp,
    arrowStatusProp,
    ...props
}) => {
    const { override, children, rest } = useOverrides(props, overrides);

    const [tooltipStatusShow, settooltipStatusShow] = useState(false);
    const [tooltipPosition, setTooltipDirection] = useState(
        tooltipPositionProp
    );
    const [isEmpty, setEmpty] = useState(false);

    const arrowSizeNumb = useMemo(() => {
        const isShowArrow = arrowStatusProp && parseInt(arrowSizeProp, 10) > 0;
        return isShowArrow ? parseInt(arrowSizeProp, 10) : 0;
    }, [arrowStatusProp, arrowSizeProp]);

    const arrowOffsetNumb = useMemo(() => {
        const isShowArrow =
            arrowStatusProp && !Number.isNaN(parseInt(arrowOffsetProp, 10));
        return isShowArrow ? parseInt(arrowOffsetProp, 10) : 0;
    }, [arrowStatusProp, arrowOffsetProp]);

    const componentRef = useRef(null);
    const wrapperRef = useRef(null);
    const contentRef = useRef(null);

    // Изменение положения тултипа при смене props
    useEffect(() => {
        setTooltipDirection(tooltipPositionProp);
    }, [tooltipPositionProp]);

    // Изменение положения тултипа при нехватке пространства
    useEffect(() => {
        // нет проверки на current в рефе
        const componentRect = componentRef.current.getBoundingClientRect();
        const wrapperRect = wrapperRef.current.getBoundingClientRect();

        const tooltipOffsetNumb = parseInt(tooltipOffsetProp, 10);

        if (tooltipAutoChangeProp) {
            setTooltipDirection(
                orderDirections[tooltipPositionProp].find((position) =>
                    checkDirections[position]({
                        componentRect,
                        wrapperRect,
                        tooltipOffsetNumb,
                        arrowSizeNumb,
                        arrowOffsetNumb,
                    })
                )
            );
        } else {
            setTooltipDirection(tooltipPositionProp);
        }
    }, [
        tooltipPositionProp,
        tooltipOffsetProp,
        tooltipAutoChangeProp,
        arrowOffsetProp,
        arrowSizeNumb,
    ]);

    // Если компонент пустой
    useEffect(() => {
        setEmpty(contentRef.current?.innerHTML === '<!--child placeholder-->');
    }, [children]);

    // Наведение курсора на компонент
    const showTooltip = () => {
        if (tooltipStatusProp === 'always') return;
        settooltipStatusShow(true);
    };

    // Отведение курсора из компонента
    const hideTooltip = () => {
        if (tooltipStatusProp === 'always') return;
        settooltipStatusShow(false);
    };

    const tooltipProps = {
        tooltipPosition,
        tooltipStatusProp,
        tooltipStatusShow,
        tooltipColorProp,
        arrowSizeNumb,
        arrowOffsetNumb,
        arrowStatusProp,
    };

    return (
        <Box
            ref={componentRef}
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
            position="relative"
            {...rest}
        >
            <TooltipBlock
                wrapperRef={wrapperRef}
                override={override}
                {...tooltipProps}
            />
            <Box ref={contentRef} {...override('Content')}>
                {children}
            </Box>
            {isEmpty && <ComponentNotice message={'Drag component here'} />}
        </Box>
    );
};

const propInfo = {
    tooltipPositionProp: {
        title: 'Положение Tooltip',
        description: {
            ru: 'С какой стороны должен располагаться Tooltip',
        },
        control: 'select',
        variants: [
            {
                title: {
                    en: 'Сверху',
                    ru: 'Сверху',
                },
                value: 'top',
            },
            {
                title: {
                    en: 'Справа',
                    ru: 'Справа',
                },
                value: 'right',
            },
            {
                title: {
                    en: 'Снизу',
                    ru: 'Снизу',
                },
                value: 'bottom',
            },
            {
                title: {
                    en: 'Слева',
                    ru: 'Слева',
                },
                value: 'left',
            },
        ],
        category: 'Tooltip',
        weight: 0.5,
    },
    tooltipOffsetProp: {
        title: 'Отступ от краев',
        description: {
            ru: 'Укажите отступ Tooltip относительно краев окна',
        },
        control: 'input',
        variants: ['0px', '4px', '8px', '16px', '24px'],
        type: 'text',
        category: 'Tooltip',
        weight: 0.5,
    },
    tooltipColorProp: {
        title: 'Цвет Tooltip',
        description: {
            ru: 'Выберите цвет для Tooltip',
        },
        control: 'color',
        category: 'Tooltip',
        weight: 1,
    },
    tooltipStatusProp: {
        title: 'Показывать Tooltip',
        description: {
            ru: 'Показывать Tooltip. Всегда или только при наведении',
        },
        control: 'radio-group',
        variants: [
            {
                title: {
                    en: 'Всегда',
                    ru: 'Всегда',
                },
                value: 'always',
            },
            {
                title: {
                    en: 'При наведении',
                    ru: 'При наведении',
                },
                value: 'hover',
            },
        ],
        category: 'Tooltip',
        weight: 1,
    },
    tooltipAutoChangeProp: {
        title: 'Автоматическая смена положения Tooltip',
        description: {
            ru: 'Автоматически изменять положение Tooltip при нехватке места',
        },
        control: 'checkbox',
        category: 'Tooltip',
        weight: 1,
    },
    arrowSizeProp: {
        title: 'Размер стрелочки (px)',
        description: {
            ru: 'Укажите размер стрелочки в пикселях',
        },
        control: 'input',
        variants: ['0px', '4px', '8px', '12px', '16px'],
        type: 'text',
        category: 'Arrow',
        weight: 0.5,
    },
    arrowOffsetProp: {
        title: 'Отступ до края (px)',
        description: {
            ru: 'Отступ до края компонента в пикселях',
        },
        control: 'input',
        variants: ['0px', '4px', '8px', '12px', '16px'],
        type: 'text',
        category: 'Arrow',
        weight: 0.5,
    },
    arrowStatusProp: {
        title: 'Показать стрелочку',
        description: {
            ru: 'Показать/Скрыть стрелочку',
        },
        control: 'checkbox',
        category: 'Arrow',
        weight: 1,
    },
};

const defaultProps = {
    tooltipPositionProp: 'top',
    tooltipColorProp: '--color-dark',
    tooltipAutoChangeProp: true,
    tooltipOffsetProp: '0',
    tooltipStatusProp: 'always',
    arrowSizeProp: '8px',
    arrowOffsetProp: '4px',
    arrowStatusProp: true,
};

Object.assign(TooltipComponent, {
    title: 'Tooltip',
    propInfo,
    defaultProps,
    overrides,
});

export default TooltipComponent;
