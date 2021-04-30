import React, {
    useLayoutEffect,
    useEffect,
    useRef,
    useState,
    forwardRef,
} from 'react';
import atomize from '@quarkly/atomize';
import { Box } from '@quarkly/widgets';
import useResizeObserver from '@react-hook/resize-observer';

const useSize = (target) => {
    const [size, setSize] = useState({
        width: 1,
        height: 1,
    });
    useLayoutEffect(() => {
        if (!target.current) return;
        setSize(target.current.getBoundingClientRect());
    }, [target.current]);
    useResizeObserver(target, (entry) => setSize(entry.contentRect));
    return size;
};

const SVG = atomize.svg();

const shapes = {
    square: forwardRef(function square({ offset, size, ...props }, ref) {
        const side = Math.min(size.width, size.height);

        return (
            <rect
                ref={ref}
                x={(size.width - side + offset) / 2}
                y={(size.height - side + offset) / 2}
                width={side - offset}
                height={side - offset}
                {...props}
            />
        );
    }),
    line: forwardRef(function line({ offset, size, ...props }, ref) {
        if (props.strokeLinecap === 'butt') {
            offset = 0;
        }
        return (
            <line
                ref={ref}
                x1={offset / 2}
                y1={size.height / 2}
                x2={size.width - offset / 2}
                y2={size.height / 2}
                {...props}
            />
        );
    }),
    rectangle: forwardRef(function rectangle({ offset, size, ...props }, ref) {
        return (
            <rect
                ref={ref}
                x={offset / 2}
                y={offset / 2}
                width={size.width - offset}
                height={size.height - offset}
                {...props}
            />
        );
    }),
    ellipse: forwardRef(function ellipse({ offset, size, ...props }, ref) {
        return (
            <ellipse
                ref={ref}
                cx={size.width / 2}
                cy={size.height / 2}
                rx={(size.width - offset) / 2}
                ry={(size.height - offset) / 2}
                {...props}
            />
        );
    }),
    circle: forwardRef(function circle({ offset, size, ...props }, ref) {
        const diameter = Math.min(size.width, size.height);
        return (
            <circle
                ref={ref}
                cx={size.width / 2}
                cy={size.height / 2}
                r={(diameter - offset) / 2}
                {...props}
            />
        );
    }),
};

const getOffset = ({ computedWidth, size }) => {
    const width = parseFloat(computedWidth);

    if (!computedWidth.endsWith('%')) {
        return width;
    }

    // https://oreillymedia.github.io/Using_SVG/extras/ch05-percentages.html#resize-eye-figure
    const diagonal = Math.hypot(size.width, size.height) / Math.SQRT2;

    return (diagonal * width) / 100;
};

const SVGShape = ({
    type,
    stroke,
    strokeWidth,
    strokeOpacity,
    strokeLinecap,
    strokeDasharray,
    fill,
    fillOpacity,
    ...props
}) => {
    const shapeRef = useRef(null);
    const mainRef = useRef(null);
    const size = useSize(mainRef);
    const [offset, setOffset] = useState(0);

    const Shape = shapes[type];

    const shapeProps = {
        stroke,
        strokeWidth,
        strokeOpacity,
        strokeLinecap,
        strokeDasharray,
        fill,
        fillOpacity,
    };

    useEffect(() => {
        if (!shapeRef.current) return;
        const computedWidth = getComputedStyle(shapeRef.current).strokeWidth;

        const newOffset = getOffset({ computedWidth, size });
        setOffset(newOffset);
    }, [strokeWidth, type, size]);

    return (
        <Box
            position="relative"
            height="200px"
            width="100%"
            ref={mainRef}
            {...props}
        >
            <SVG
                xmlns="http://www.w3.org/2000/svg"
                viewBox={`0 0 ${size.width} ${size.height}`}
                position="absolute"
                top="0"
                left="0"
                width={size.width}
                height={size.height}
            >
                <Shape
                    ref={shapeRef}
                    offset={offset}
                    size={size}
                    {...shapeProps}
                />
            </SVG>
        </Box>
    );
};

const propInfo = {
    type: {
        title: {
            en: 'Shape type',
            ru: 'Тип формы',
        },
        control: 'select',
        variants: [
            {
                title: {
                    en: 'Line',
                    ru: 'Линия',
                },
                value: 'line',
            },
            {
                title: {
                    en: 'Ellipse',
                    ru: 'Овал',
                },
                value: 'ellipse',
            },
            {
                title: {
                    en: 'Circle',
                    ru: 'Круг',
                },
                value: 'circle',
            },
            {
                title: {
                    en: 'Rectangle',
                    ru: 'Прямоугольник',
                },
                value: 'rectangle',
            },
            {
                title: {
                    en: 'Square',
                    ru: 'Квадрат',
                },
                value: 'square',
            },
        ],
        category: 'Main',
        weight: 1,
    },
    stroke: {
        title: {
            en: 'Stroke color',
            ru: 'Цвет обводки',
        },
        control: 'color',
        category: 'SVG Styles',
        weight: 0.5,
    },
    strokeWidth: {
        title: {
            en: 'Stroke thickness',
            ru: 'Толщина обводки',
        },
        control: 'input',
        type: 'text',
        category: 'SVG Styles',
        weight: 0.5,
    },
    strokeOpacity: {
        title: {
            en: 'Stroke opacity',
            ru: 'Прозрачность обводки',
        },
        control: 'input',
        type: 'text',
        category: 'SVG Styles',
        weight: 0.5,
    },
    strokeLinecap: {
        title: {
            en: 'Stroke shape',
            ru: 'Форма обводки',
        },
        control: 'select',
        variants: ['butt', 'round', 'square'],
        category: 'SVG Styles',
        weight: 0.5,
    },
    strokeDasharray: {
        title: {
            en: 'Dashed stroke',
            ru: 'Пунктирная обводка',
        },
        control: 'input',
        type: 'text',
        category: 'SVG Styles',
        weight: 0.5,
    },
    fill: {
        title: {
            en: 'Shape color',
            ru: 'Цвет фигуры',
        },
        control: 'color',
        category: 'SVG Styles',
        weight: 0.5,
    },
    fillOpacity: {
        title: {
            en: 'Shape opacity',
            ru: 'Прозрачность фигуры',
        },
        control: 'input',
        type: 'text',
        category: 'SVG Styles',
        weight: 0.5,
    },
};

const defaultProps = {
    type: 'circle',
    stroke: '#000000',
    strokeWidth: '8',
    strokeOpacity: '1',
    strokeLinecap: 'round',
    strokeDasharray: '30',
    fill: '--color-primary',
    fillOpacity: '1',
};

Object.assign(SVGShape, {
    title: 'SVG Shape',
    description: {
        en: 'This component helps you create simple SVG shapes',
        ru: 'Компонент для создания простых SVG фигур',
    },
    propInfo,
    defaultProps,
});

export default SVGShape;
