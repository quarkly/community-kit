import React, { useCallback, useMemo, useEffect, useRef } from 'react';

import atomize from '@quarkly/atomize';
import { useOverrides } from '@quarkly/components';
import { Box } from '@quarkly/widgets';

const overrides = {
    Bground: {
        kind: 'Bground',
    },
    Content: {
        kind: 'Content',
    },
};

const useAnimationFrame = (cb) => {
    const requestRef = useRef();
    const prevTimeRef = useRef();

    const animate = (time) => {
        if (prevTimeRef.current !== undefined) {
            cb(time - prevTimeRef.current);
        }
        prevTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, []);
};

const Content = atomize.div``;
const Bground = atomize.div`
  will-change: transform;
  transform: translate3d(0, 0, 0);
`;

const BgImageParallax = ({
    imageURL,
    imageSize,
    imagePosition,
    imageRepeat,
    scrollSpeedProp,
    scrollInertiaProp,
    scrollDirection,
    ...props
}) => {
    const { override, children, rest } = useOverrides(props, overrides);
    const wrapperRef = useRef();
    const bgroundRef = useRef();
    const bgroundPos = useRef({});

    const scrollSpeed = useMemo(() => {
        const numb = parseFloat(scrollSpeedProp);
        return !Number.isNaN(numb) ? Math.abs(numb) : 1;
    }, [scrollSpeedProp]);

    const scrollInertia = useMemo(() => {
        const numb = parseInt(scrollInertiaProp, 10);
        return numb > 1 ? numb : 1;
    }, [scrollInertiaProp]);

    const updateParallaxTop = () => {
        if (!wrapperRef.current) return;
        const { top, height } = wrapperRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isInViewport = top < windowHeight && top + height >= 0;

        if (!isInViewport) return;

        const direction = 1; // scrollDirection === 'inverse' ? -1 : 1;
        const scrollShift = top * (direction * scrollSpeed - 1);
        const windowShift =
            windowHeight * (scrollSpeed > 1 ? scrollSpeed - 1 : 0);

        bgroundPos.current.scrollTop = scrollShift - windowShift;
    };

    const setParallaxHeight = useCallback(() => {
        if (!wrapperRef.current) return;
        const { height } = wrapperRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const shiftHeight = windowHeight * Math.abs(1 - scrollSpeed);
        const imageHeight = height * scrollSpeed + shiftHeight;

        bgroundRef.current.style.height = `${imageHeight}px`;
    }, [wrapperRef.current]);

    useEffect(() => {
        document.addEventListener('scroll', updateParallaxTop);
        return function cleanup() {
            document.removeEventListener('scroll', updateParallaxTop);
        };
    }, [wrapperRef.current, scrollSpeed, scrollInertia]);

    useEffect(() => {
        updateParallaxTop();
        setParallaxHeight();
    }, [wrapperRef.current, bgroundRef.current, scrollSpeed, scrollInertia]);

    useAnimationFrame(() => {
        if (!bgroundRef.current) return;

        const { scrollTop, bgroundTop = scrollTop - 1 } = bgroundPos.current;

        if (scrollTop && scrollTop !== bgroundTop) {
            if (scrollInertia === 1) {
                bgroundPos.current.bgroundTop = scrollTop;
            } else {
                bgroundPos.current.bgroundTop =
                    bgroundTop + (scrollTop - bgroundTop) / scrollInertia;
            }
            bgroundRef.current.style.transform = `translate3d(0, ${bgroundPos.current.bgroundTop}px, 0)`;
        }
    });

    return (
        <Box ref={wrapperRef} overflow="hidden" position="relative" {...rest}>
            <Bground
                ref={bgroundRef}
                top="0"
                right="0"
                bottom="0"
                left="0"
                width="100%"
                height="100%"
                position="absolute"
                z-index="1"
                background={`transparent url(${imageURL}) ${imagePosition} top/${imageSize} ${imageRepeat}`}
                {...override('Bground')}
            />
            <Content position="relative" z-index="2" {...override('Content')}>
                {children}
            </Content>
        </Box>
    );
};

const propInfo = {
    imageURL: {
        title: 'Изображение',
        control: 'image',
        category: 'Image',
        weight: 1,
    },
    imageSize: {
        title: 'Размер изображения',
        control: 'input',
        variants: ['cover', '100%', '150%', '200%', '250%'],
        category: 'Image',
        weight: 0.5,
    },
    imagePosition: {
        title: 'Выравнивание изображения',
        control: 'radio-group',
        variants: ['left', 'center', 'right'],
        category: 'Image',
        weight: 0.5,
    },
    imageRepeat: {
        title: 'Повтор изображения',
        control: 'radio-group',
        variants: ['repeat', 'no-repeat'],
        category: 'Image',
        weight: 1,
    },
    scrollSpeedProp: {
        title: 'Скорость прокрутки',
        control: 'input',
        variants: ['0', '0.25', '0.5', '0.75', '1', '2', '5', '10'],
        category: 'Scroll',
        weight: 0.5,
    },
    scrollInertiaProp: {
        title: 'Инерция прокрутки',
        control: 'input',
        variants: ['1', '2', '5', '10'],
        category: 'Scroll',
        weight: 0.5,
    },
    // scrollDirection: {
    //   title: 'Направление прокрутки',
    //   control: 'radio-group',
    //   variants: ['normal', 'inverse'],
    //   category: 'Scroll',
    //   weight: 1
    // },
};

const defaultProps = {
    imageURL: '',
    imageSize: 'cover',
    imagePosition: 'center',
    imageRepeat: 'no-repeat',
    scrollSpeedProp: '0.5',
    scrollInertiaProp: '1',
    // scrollDirection: 'normal',
};

export default Object.assign(BgImageParallax, {
    propInfo,
    defaultProps,
    overrides,
});
