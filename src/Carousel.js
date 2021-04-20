import React, {
    useState,
    useEffect,
    useMemo,
    useCallback,
    useRef,
} from 'react';

import { Box, Text, Link, Icon, Image } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';

const overrides = {
    Slides: {
        kind: 'Box',
        props: {
            position: 'relative',
            display: 'flex',
            overflow: 'visible',
        },
    },
    Slide: {
        kind: 'Box',
        props: {
            height: '100px',
            flex: '0 0 100%',
            'box-sizing': 'border-box',
            position: 'relative',
            display: 'block',
        },
    },
    'Slide Image': {
        kind: 'Image',
        props: {
            src:
                'https://uploads.quarkly.io/molecules/default-picture-1200.png',
            'object-fit': 'cover',

            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            position: 'absolute',
            display: 'block',
            'z-index': '1',
        },
    },
    'Slide Content': {
        kind: 'Box',
        props: {
            top: '50%',
            left: '50%',
            width: 'auto',
            height: 'auto',
            'max-width': '100%',
            'max-height': '100%',
            transform: 'translate(-50%, -50%)',
            'text-align': 'center',
            'box-sizing': 'border-box',
            position: 'absolute',
            display: 'block',
            'z-index': '2',
        },
    },
    'Slide Head': {
        kind: 'Text',
        props: {
            children: 'Header',

            font: '--font-headline3',
            color: '--color-light',
        },
    },
    'Slide Text': {
        kind: 'Text',
        props: {
            children:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

            font: '--font-base',
            color: '--color-light',
        },
    },
    'Slide Link': {
        kind: 'Link',
        props: {
            children: 'Link',

            margin: '8px 0 16px',
            padding: '8px 24px',
            font: '--font-base',
            'text-decoration': 'none',
            color: '--color-light',
            background: '--color-primary',
            'border-radius': '2px',
            outline: 'none',
            'box-sizing': 'border-box',
            display: 'inline-block',
            'user-select': 'none',
            cursor: 'pointer',

            'focus-box-shadow': '0 0 0 2px --color-primary',
        },
    },
    Arrows: {
        kind: 'Box',
        props: {
            width: '100%',
            height: '0px',
            'min-height': '0px',
        },
    },
    Arrow: {
        kind: 'Box',
        props: {
            top: '0',
            width: '33.33%',
            height: '100%',
            'align-items': 'center',
            transition: 'opacity .3s ease',
            position: 'absolute',
            display: 'flex',
            cursor: 'pointer',
            'z-index': '5',

            opacity: '0.67',
            'hover-opacity': '1',
        },
    },
    'Arrow Prev': {
        props: {
            left: '0',
            'justify-content': 'flex-start',
            background: `
				linear-gradient(
					to right,
					rgba(0,0,0,0.33) 0,
					rgba(0,0,0,0) 100%)
					rgba(0,0,0,0)
			`,
        },
    },
    'Arrow Next': {
        props: {
            right: '0',
            'justify-content': 'flex-end',
            background: `
				linear-gradient(
					to left,
					rgba(0,0,0,0.33) 0,
					rgba(0,0,0,0) 100%)
					rgba(0,0,0,0)
			`,
        },
    },
    'Arrow Icon': {
        kind: 'Icon',
        props: {
            category: 'md',
            size: '52px',
            color: '--color-light',

            position: 'relative',
        },
    },
    'Arrow Icon Prev': {
        props: {
            icon: 'MdKeyboardArrowLeft',
            left: '7.5%',
        },
    },
    'Arrow Icon Next': {
        props: {
            icon: 'MdKeyboardArrowRight',
            right: '7.5%',
        },
    },
    Points: {
        kind: 'Box',
        props: {
            bottom: '0',
            left: '0',
            width: '100%',
            height: '48px',
            'align-items': 'center',
            'justify-content': 'center',
            position: 'absolute',
            display: 'flex',
            'z-index': '6',
        },
    },
    Point: {
        kind: 'Box',
        props: {
            'min-width': '0',
            'min-height': '0',
            transition: 'opacity .3s ease',
            'align-items': 'center',
            'justify-content': 'center',
            display: 'flex',
            cursor: 'pointer',

            opacity: '0.67',
            'hover-opacity': '1',
        },
    },
    'Point Icon': {
        kind: 'Icon',
        props: {
            category: 'go',
            icon: 'GoPrimitiveDot',
            size: '16px',

            padding: '1px',
            color: '--color-light',
            transition: 'transform .3s ease',
            transform: 'scale(1)',
            'hover-transform': 'scale(1.5)',
        },
    },
    'Point :active': {
        props: {
            opacity: '1',
        },
    },
    'Point Icon :active': {
        props: {
            transform: 'scale(1.5)',
            color: '--color-primary',
        },
    },
};

const Slide = ({
    index,
    slides,
    numb,
    width,
    height,
    showHead,
    showText,
    showLink,
    override,
}) => {
    const clearOverrides = useMemo(
        () =>
            (index === 0 || index === slides + 1) && {
                'data-qoverride': undefined,
            },
        [index]
    );

    const slideOverrides = {
        slide: {
            ...override('Slide', `Slide ${numb}`),
            ...clearOverrides,
        },
        image: {
            ...override('Slide Image', `Slide Image ${numb}`),
            ...clearOverrides,
        },
        content: {
            ...override('Slide Content', `Slide Content ${numb}`),
            ...clearOverrides,
        },
        head: {
            ...override('Slide Head', `Slide Head ${numb}`),
            ...clearOverrides,
        },
        text: {
            ...override('Slide Text', `Slide Text ${numb}`),
            ...clearOverrides,
        },
        link: {
            ...override('Slide Link', `Slide Link ${numb}`),
            ...clearOverrides,
        },
    };

    const widthStyles = useMemo(
        () => ({
            width,
            'min-width': width,
            'max-width': width,
        }),
        [width]
    );
    const heightStyles = useMemo(
        () =>
            height !== 'auto' && {
                height,
                'min-height': height,
                'max-height': height,
            },
        [height]
    );

    return (
        <Box {...slideOverrides.slide} {...widthStyles} {...heightStyles}>
            <Image {...slideOverrides.image} />
            {(showHead || showText || showLink) && (
                <Box {...slideOverrides.content}>
                    {showHead && <Text {...slideOverrides.head} />}
                    {showText && <Text {...slideOverrides.text} />}
                    {showLink && <Link {...slideOverrides.link} />}
                </Box>
            )}
        </Box>
    );
};

const Arrow = ({ direction, clickFunc, override }) => {
    return (
        <Box {...override('Arrow', `Arrow ${direction}`)} onClick={clickFunc}>
            <Icon {...override('Arrow Icon', `Arrow Icon ${direction}`)} />
        </Box>
    );
};

const Point = ({ numb, active, clickFunc, override }) => {
    const clickEvent = () => clickFunc(numb);

    return (
        <Box
            {...override(
                'Point',
                `Point ${numb}`,
                numb === active && 'Point :active'
            )}
            onClick={clickEvent}
        >
            <Icon
                {...override(
                    'Point Icon',
                    `Point Icon ${numb}`,
                    numb === active && 'Point Icon :active'
                )}
            />
        </Box>
    );
};

let animateTimer;

const CarouselComponent = ({
    slidesProp,
    aspectRatio,
    durationProp,
    functionProp,
    showArrows,
    showDots,
    showHead,
    showText,
    showLink,
    ...props
}) => {
    const { override, rest } = useOverrides(props, overrides);

    const sliderRef = useRef(null);
    const [{ width, height }, setSize] = useState({
        width: 'auto',
        height: 'auto',
    });

    const [{ active, position, animate, lock }, setSlide] = useState({
        active: 1,
        position: 100,
        animate: true,
        lock: false,
    });

    const slides = useMemo(
        () => (parseInt(slidesProp, 10) > 0 ? parseInt(slidesProp, 10) : 1),
        [slidesProp]
    );
    const duration = useMemo(
        () =>
            parseFloat(durationProp) > 0 ? parseFloat(durationProp) * 1000 : 0,
        [durationProp]
    );
    const list = useMemo(
        () => [slides, ...Array.from({ length: slides }, (v, i) => i + 1), 1],
        [slides]
    );

    const handleResize = useCallback(
        (el) => {
            const sliderWidth =
                el instanceof Element
                    ? el.offsetWidth
                    : el[0].contentRect.width;

            if (aspectRatio === 'auto') {
                setSize({
                    width: `${sliderWidth}px`,
                    height: 'auto',
                });
            } else {
                const [aspectWidth, aspectHeight] = aspectRatio.split(':');
                const sliderHeight = (sliderWidth / aspectWidth) * aspectHeight;
                setSize({
                    width: `${sliderWidth}px`,
                    height: `${sliderHeight}px`,
                });
            }
        },
        [aspectRatio]
    );

    useEffect(() => {
        const resizer = new ResizeObserver(handleResize);
        resizer.observe(sliderRef.current);

        return () => {
            resizer.unobserve(sliderRef.current);
        };
    }, [sliderRef.current, aspectRatio]);

    const clickPrev = useCallback(() => {
        if (lock) return;

        const newActive = active > 1 ? active - 1 : slides;

        if (newActive === slides) {
            setSlide({
                active: newActive,
                position: 0,
                animate: true,
                lock: true,
            });
            clearTimeout(animateTimer);
            animateTimer = setTimeout(() => {
                setSlide({
                    active: newActive,
                    position: 100 * slides,
                    animate: false,
                    lock: false,
                });
            }, duration);
        } else {
            setSlide({
                active: newActive,
                position: 100 * newActive,
                animate: true,
                lock: false,
            });
        }
    }, [active, position, animate, lock]);

    const clickNext = useCallback(() => {
        if (lock) return;

        const newActive = active < slides ? active + 1 : 1;

        if (newActive === 1) {
            setSlide({
                active: newActive,
                position: 100 * (slides + 1),
                animate: true,
                lock: true,
            });
            clearTimeout(animateTimer);
            animateTimer = setTimeout(() => {
                setSlide({
                    active: newActive,
                    position: 100,
                    animate: false,
                    lock: false,
                });
            }, duration);
        } else {
            setSlide({
                active: newActive,
                position: 100 * newActive,
                animate: true,
                lock: false,
            });
        }
    }, [active, position, animate, lock]);

    const clickNumb = useCallback(
        (newActive) => {
            if (lock) return;

            setSlide({
                active: newActive,
                position: 100 * newActive,
                animate: true,
                lock: false,
            });
        },
        [active, position, animate, lock]
    );

    return (
        <Box {...rest} ref={sliderRef} overflow="hidden">
            <Box
                {...override('Slides')}
                transform={`translateX(-${position}%)`}
                transition={`transform ${
                    animate ? duration : 0
                }ms ${functionProp}`}
            >
                {list.map((numb, index) => (
                    <Slide
                        key={`${rest['data-qid']}-slide-${numb}-${index}`} // eslint-disable-line
                        index={index}
                        slides={slides}
                        numb={numb}
                        width={width}
                        height={height}
                        duration={duration}
                        showHead={showHead}
                        showText={showText}
                        showLink={showLink}
                        override={override}
                    />
                ))}
            </Box>
            {showArrows && (
                <Box {...override('Arrows')}>
                    <Arrow
                        direction="Prev"
                        clickFunc={clickPrev}
                        override={override}
                    />
                    <Arrow
                        direction="Next"
                        clickFunc={clickNext}
                        override={override}
                    />
                </Box>
            )}
            {showDots && (
                <Box {...override('Points')}>
                    {list.slice(1, -1).map((numb, idx) => (
                        <Point
                            key={`point-${idx}`} // eslint-disable-line
                            numb={numb}
                            active={active}
                            clickFunc={clickNumb}
                            override={override}
                        />
                    ))}
                </Box>
            )}
        </Box>
    );
};

const propInfo = {
    slidesProp: {
        title: 'Количество слайдов',
        control: 'input',
        type: 'text',
        category: 'Slides',
        weight: 0.5,
    },
    aspectRatio: {
        title: 'Соотношение сторон',
        control: 'select',
        variants: [
            {
                title: {
                    en: 'Auto',
                    ru: 'Авто',
                },
                value: 'auto',
            },
            '16:9',
            '4:3',
            '3:2',
            '1:1',
            '2:3',
            '3:4',
            '9:16',
        ],
        category: 'Slides',
        weight: 0.5,
    },
    showArrows: {
        title: 'Показывать стрелки',
        control: 'checkbox',
        category: 'Slider',
        weight: 0.5,
    },
    showDots: {
        title: 'Показывать точки',
        control: 'checkbox',
        category: 'Slider',
        weight: 0.5,
    },
    durationProp: {
        title: 'Длительность анимации',
        control: 'input',
        variants: ['0s', '0.1s', '0.2s', '0.3s', '0.5s', '1s'],
        type: 'text',
        category: 'Slider',
        weight: 0.5,
    },
    functionProp: {
        title: 'Функция анимации',
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
        category: 'Slider',
        weight: 0.5,
    },

    showHead: {
        title: 'Показывать заголовок',
        control: 'checkbox',
        category: 'Content',
        weight: 0.5,
    },
    showText: {
        title: 'Показывать описание',
        control: 'checkbox',
        category: 'Content',
        weight: 0.5,
    },
    showLink: {
        title: 'Показывать кнопку',
        control: 'checkbox',
        category: 'Content',
        weight: 0.5,
    },
};

const defaultProps = {
    slidesProp: '4',
    aspectRatio: '16:9',
    durationProp: '0.5s',
    functionProp: 'linear',
    showArrows: true,
    showDots: true,
    showHead: true,
    showText: true,
    showLink: true,

    position: 'relative',
    'align-self': 'normal',
};

Object.assign(CarouselComponent, {
    title: 'Carousel',
    propInfo,
    defaultProps,
    overrides,
});

export default CarouselComponent;
