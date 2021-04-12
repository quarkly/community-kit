import React, { useMemo } from 'react';

import { useOverrides } from '@quarkly/components';
import { Box, Text, Icon } from '@quarkly/widgets';

const overrides = {
    Line: {
        kind: 'Box',
        props: {
            top: '0px',
            width: '2px',
            'min-width': '0px',
            height: '100%',
            'background-color': '--color-dark',
            position: 'absolute',
            opacity: '.1',
        },
    },
    Item: {
        kind: 'Box',
        props: {
            'box-sizing': 'border-box',
            position: 'relative',
        },
    },
    Point: {
        kind: 'Icon',
        props: {
            size: '40px',
            category: 'bs',
            icon: 'BsDot',

            top: '-8px',
            width: '40px',
            height: '40px',
            color: '--color-dark',
            position: 'absolute',
        },
    },
    Dates: {
        kind: 'Text',
        props: {
            children: '18:00 - 20:30',

            margin: '0 0 8px',
            font: '--font-base',
            color: '--color-darkL1',
        },
    },
    Title: {
        kind: 'Text',
        props: {
            children: 'Desktop vs mobile',

            margin: '0 0 6px',
            font: '--font-headline3',
            color: '--color-dark',
        },
    },
    Descr: {
        kind: 'Text',
        props: {
            children:
                'Fusce dapibus, tellus ac cursus commodo, tondor mauris condimentum fermentum.',

            margin: '0px',
            font: '--font-base',
            color: '--color-darkL2',
        },
    },
};

const getItemStyles = {
    fromLeft: (numb) => ({
        'padding-left': numb % 2 ? '30px' : '',
        'padding-right': numb % 2 ? '' : '30px',
        'padding-bottom': '15px',
        width: '50%',
        'align-self': numb % 2 ? 'flex-end' : 'flex-start',
        'text-align': numb % 2 ? 'left' : 'right',
    }),
    fromRight: (numb) => ({
        'padding-left': numb % 2 ? '' : '30px',
        'padding-right': numb % 2 ? '30px' : '',
        'padding-bottom': '15px',
        width: '50%',
        'align-self': numb % 2 ? 'flex-start' : 'flex-end',
        'text-align': numb % 2 ? 'right' : 'left',
    }),
    toLeft: () => ({
        'padding-left': '30px',
        'padding-right': '0px',
        'padding-bottom': '30px',
        width: '100%',
        'align-self': 'flex-start',
        'text-align': 'left',
    }),
    toRight: () => ({
        'padding-left': '0px',
        'padding-right': '30px',
        'padding-bottom': '30px',
        width: '100%',
        'align-self': 'flex-end',
        'text-align': 'right',
    }),
};

const getPointStyles = {
    fromLeft: (numb) => ({
        left: numb % 2 ? '-20px' : '',
        right: numb % 2 ? '' : '-20px',
    }),
    fromRight: (numb) => ({
        left: numb % 2 ? '' : '-20px',
        right: numb % 2 ? '-20px' : '',
    }),
    toLeft: () => ({
        left: '0',
        right: 'auto',
    }),
    toRight: () => ({
        left: 'auto',
        right: '0',
    }),
};

const getLineStyles = {
    fromLeft: () => ({
        left: '50%',
        right: 'auto',
        transform: 'translateX(-50%)',
    }),
    fromRight: () => ({
        left: 'auto',
        right: '50%',
        transform: 'translateX(50%)',
    }),
    toLeft: () => ({
        left: '2px',
        right: 'auto',
        transform: 'none',
    }),
    toRight: () => ({
        left: 'auto',
        right: '2px',
        transform: 'none',
    }),
};

const TimelineLine = ({ alignDesktop, alignMobile, breakpoint, override }) => {
    const desktopLineStyles = useMemo(() => {
        return getLineStyles[alignDesktop]();
    }, [alignDesktop]);
    const mobileLineStyles = useMemo(() => {
        const styles = getLineStyles[alignMobile]();

        return {
            [`${breakpoint}-left`]: styles.left,
            [`${breakpoint}-right`]: styles.right,
            [`${breakpoint}-transform`]: styles.transform,
        };
    }, [alignMobile, breakpoint]);

    return (
        <Box
            {...desktopLineStyles}
            {...mobileLineStyles}
            {...override('Line')}
        />
    );
};

const TimelineItem = ({
    numb,
    alignDesktop,
    alignMobile,
    breakpoint,
    override,
}) => {
    const desktopItemStyles = useMemo(() => {
        return getItemStyles[alignDesktop](numb);
    }, [alignDesktop]);
    const mobileItemStyles = useMemo(() => {
        const styles = getItemStyles[alignMobile](numb);

        return {
            [`${breakpoint}-padding-left`]: styles['padding-left'],
            [`${breakpoint}-padding-right`]: styles['padding-right'],
            [`${breakpoint}-padding-bottom`]: styles['padding-bottom'],
            [`${breakpoint}-width`]: styles.width,
            [`${breakpoint}-align-self`]: styles['align-self'],
            [`${breakpoint}-text-align`]: styles['text-align'],
        };
    }, [alignMobile, breakpoint]);

    const desktopPointStyles = useMemo(() => {
        return getPointStyles[alignDesktop](numb);
    }, [alignDesktop]);
    const mobilePointStyles = useMemo(() => {
        const styles = getPointStyles[alignMobile](numb);

        return {
            [`${breakpoint}-left`]: styles.left,
            [`${breakpoint}-right`]: styles.right,
        };
    }, [alignMobile, breakpoint]);

    const order = useMemo(() => (numb % 2 ? ':odd' : ':even'), [numb]);

    return (
        <Box
            {...desktopItemStyles}
            {...mobileItemStyles}
            {...override('Item', `Item ${order}`, `Item ${numb}`)}
        >
            <Icon
                {...desktopPointStyles}
                {...mobilePointStyles}
                {...override('Point', `Point ${order}`, `Point ${numb}`)}
            />
            <Text {...override('Dates', `Dates ${order}`, `Dates ${numb}`)} />
            <Text {...override('Title', `Title ${order}`, `Title ${numb}`)} />
            <Text {...override('Descr', `Descr ${order}`, `Descr ${numb}`)} />
        </Box>
    );
};

const Timeline = ({
    itemsProp,
    alignDesktop,
    alignMobile,
    breakpoint,
    ...props
}) => {
    const { override, rest } = useOverrides(props, overrides);

    const items = useMemo(
        () => (parseInt(itemsProp, 10) > 1 ? parseInt(itemsProp, 10) : 1),
        [itemsProp]
    );

    return (
        <Box {...rest}>
            <TimelineLine
                alignDesktop={alignDesktop}
                alignMobile={alignMobile}
                breakpoint={breakpoint}
                override={override}
            />
            {Array(items)
                .fill()
                .map((item, numb) => (
                    <TimelineItem
                        key={`item-${numb}`} // eslint-disable-line
                        numb={numb}
                        alignDesktop={alignDesktop}
                        alignMobile={alignMobile}
                        breakpoint={breakpoint}
                        override={override}
                    />
                ))}
        </Box>
    );
};

const propInfo = {
    itemsProp: {
        title: 'Количество карточек',
        control: 'input',
        type: 'number',
        category: 'Main',
        weight: 1,
    },
    alignDesktop: {
        title: 'Выравнивание карточек на десктопе',
        control: 'select',
        variants: [
            {
                title: {
                    en: 'Начиная с левой стороны',
                    ru: 'Начиная с левой стороны',
                },
                value: 'fromLeft',
            },
            {
                title: {
                    en: 'Начиная с правой стороны',
                    ru: 'Начиная с правой стороны',
                },
                value: 'fromRight',
            },
            {
                title: {
                    en: 'По левой стороне',
                    ru: 'По левой стороне',
                },
                value: 'toLeft',
            },
            {
                title: {
                    en: 'По правой стороне',
                    ru: 'По правой стороне',
                },
                value: 'toRight',
            },
        ],
        category: 'Main',
        weight: 1,
    },
    alignMobile: {
        title: 'Выравнивание карточек на мобильных',
        control: 'select',
        variants: [
            {
                title: {
                    en: 'По левой стороне',
                    ru: 'По левой стороне',
                },
                value: 'toLeft',
            },
            {
                title: {
                    en: 'По правой стороне',
                    ru: 'По правой стороне',
                },
                value: 'toRight',
            },
        ],
        category: 'Main',
        weight: 1,
    },
    breakpoint: {
        title: 'Мобильный вид начинается с breakpoint',
        control: 'input',
        variants: ['sm', 'md', 'lg'],
        type: 'text',
        category: 'Main',
        weight: 1,
    },
};

const defaultProps = {
    itemsProp: 4,
    alignDesktop: 'fromLeft',
    alignMobile: 'toLeft',
    breakpoint: 'sm',

    width: '100%',
    'max-width': '100%',
    'flex-direction': 'column',
    'box-sizing': 'border-box',
    position: 'relative',
    display: 'flex',
    'overflow-x': 'hidden',
    'overflow-y': 'visible',
};

export default Object.assign(Timeline, {
    title: 'Timeline',
    overrides,
    propInfo,
    defaultProps,
});
