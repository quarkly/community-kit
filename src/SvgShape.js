/* eslint-disable react/display-name */

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
        setSize(target.current.getBoundingClientRect());
    }, [target]);
    useResizeObserver(target, (entry) => setSize(entry.contentRect));
    return size;
};

const SVG = atomize.svg();

const shapes = {
    Square: forwardRef(({ offset, size, ...props }, ref) => {
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
    Line: forwardRef(({ offset, size, ...props }, ref) => {
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
    Rectangle: forwardRef(({ offset, size, ...props }, ref) => {
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
    Ellipse: forwardRef(({ offset, size, ...props }, ref) => {
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
    Circle: forwardRef(({ offset, size, ...props }, ref) => {
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
        category: 'Main',
        title: 'Type',
        description: {
            en: 'Variant of svg shape.',
        },
        control: 'select',
        variants: ['Line', 'Ellipse', 'Circle', 'Rectangle', 'Square'],
    },
    stroke: {
        category: 'SVG Styles',
        title: 'Stroke',
        description: {
            en:
                'The stroke property defines the color of a line, text or outline of an element.',
        },
        control: 'color',
    },
    strokeWidth: {
        category: 'SVG Styles',
        title: 'Stroke width',
        description: {
            en:
                'The stroke-width property defines the thickness of a line, text or outline of an element.',
        },
        control: 'input',
    },
    strokeOpacity: {
        category: 'SVG Styles',
        title: 'Stroke opacity',
        description: {
            en:
                'The stroke-opacity attribute is a presentation attribute defining the opacity of the paint color.',
        },
        control: 'input',
    },
    strokeLinecap: {
        category: 'SVG Styles',
        title: 'Stroke Linecap',
        description: {
            en:
                'The stroke-linecap property defines different types of endings to an open path.',
        },
        control: 'select',
        variants: ['butt', 'round', 'square'],
    },
    strokeDasharray: {
        category: 'SVG Styles',
        title: 'Stroke Dasharrray',
        description: {
            en: 'The stroke-dasharray property is used to create dashed lines.',
        },
        control: 'input',
    },
    fill: {
        category: 'SVG Styles',
        title: 'Fill',
        description: {
            en:
                'The fill attribute is a presentation attribute that defines the color used to paint the element',
        },
        control: 'color',
    },
    fillOpacity: {
        category: 'SVG Styles',
        title: 'Fill Opacity',
        description: {
            en:
                'The fill-opacity attribute is a presentation attribute defining the opacity of the paint.',
        },
        control: 'input',
    },
};

const defaultProps = {
    type: 'Circle',
    stroke: '#000000',
    strokeWidth: '8',
    strokeOpacity: '1',
    strokeLinecap: 'round',
    strokeDasharray: '30',
    fill: '--color-primary',
    fillOpacity: '1',
};

export default atomize(SVGShape)(
    {
        name: 'SVGShape',
        effects: {
            hover: ':hover',
        },
        description: {
            en:
                'This component displays a SVG shape (square, rectangle, circle, etc.)',
        },
        propInfo,
    },
    defaultProps
);
