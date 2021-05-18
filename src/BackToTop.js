import React, { useState, useEffect, useRef, useCallback } from 'react';
import easyScroll from 'easy-scroll';

import { useOverrides } from '@quarkly/components';
import { Button, Icon, Box } from '@quarkly/widgets';
import { MdKeyboardArrowUp } from 'react-icons/md';

const throttle = (fn, wait) => {
    let lastTime = 0;
    return (...args) => {
        const now = new Date();
        if (now - lastTime >= wait) {
            fn(...args);
            lastTime = now;
        }
    };
};

const useThrottle = (fn, wait = 100, cb) => {
    const throttled = throttle(fn, wait);
    return useCallback(throttled, cb);
};

const overrides = {
    Wrapper: {
        kind: 'Box',
    },
    Button: {
        kind: 'Button',
    },
    Icon: {
        kind: 'Icon',
    },
};

const ScrollToTop = ({
    showAfter,
    showAlways,
    duration,
    easingPreset,
    ...props
}) => {
    const { override, children, rest } = useOverrides(props, overrides);

    const [isScrolling, setScrolling] = useState(false);
    const [isShowButton, setShowButton] = useState(false);

    const containerRef = useRef(null);
    const buttonRef = useRef(null);

    const childrenContainer = children.filter(
        (child) => typeof child.type === 'object'
    );
    const isTargetContainer = !!childrenContainer.length;

    const handleScroll = useThrottle((e) => {
        const scrollTop = isTargetContainer
            ? e.target.scrollTop
            : window.pageYOffset;

        if (!isShowButton && scrollTop > showAfter) {
            setShowButton(true);
        } else if (isShowButton && scrollTop <= showAfter) {
            setShowButton(false);
            buttonRef.current.blur();
        }
    }, 100);

    const handleClick = () => {
        const scrollableDomEle = isTargetContainer
            ? containerRef.current
            : window;

        if (!isScrolling) {
            setScrolling(true);

            easyScroll({
                scrollableDomEle,
                direction: 'top',
                duration,
                easingPreset,
                onAnimationCompleteCallback: () => {
                    setScrolling(false);
                },
            });
        }
    };

    useEffect(() => {
        if (!isTargetContainer) {
            window.addEventListener('scroll', handleScroll);
        }
        return function cleanup() {
            if (!isTargetContainer) {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, [handleScroll]);

    return (
        <Box mih="0" pos="relative" {...rest}>
            <Box
                mih="0"
                mah="100vh"
                ovy="auto"
                d={isTargetContainer ? 'block' : 'none'}
                onScroll={handleScroll}
                ref={containerRef}
                {...override('Wrapper')}
            >
                {children}
            </Box>
            <Button
                b="15px"
                r="15px"
                p="0"
                w="40px"
                h="40px"
                c="--dark"
                bgc="--lightD2"
                focus-bxsh="none"
                bdrs="50%"
                jc="center"
                ai="center"
                pos={isTargetContainer ? 'absolute' : 'fixed'}
                v={isShowButton || showAlways ? 'visible' : 'hidden'}
                d="flex"
                z="1000"
                type="button"
                onClick={handleClick}
                ref={buttonRef}
                {...override('Button')}
            >
                <Icon
                    size="32px"
                    defaultIcon={MdKeyboardArrowUp}
                    category="md"
                    {...override('Icon')}
                />
            </Button>
        </Box>
    );
};

const propInfo = {
    showAfter: {
        title: {
            en: 'Show button after (in px)',
            ru: 'Показать кнопку через (в px)',
        },
        control: 'text',
        category: 'Button',
        weight: 1,
    },
    showAlways: {
        title: {
            en: 'Show button always',
            ru: 'Показывать кнопку всегда',
        },
        control: 'checkbox',
        category: 'Button',
        weight: 1,
    },
    duration: {
        title: {
            en: 'Animation duration',
            ru: 'Продолжительность анимации',
        },
        control: 'text',
        category: 'Animation',
        weight: 1,
    },
    easingPreset: {
        title: {
            en: 'Animation timing function',
            ru: 'Функция сглаживания анимации',
        },
        control: 'select',
        variants: [
            'linear',
            'easeInQuad',
            'easeOutQuad',
            'easeInOutQuad',
            'easeInCubic',
            'easeOutCubic',
            'easeInOutCubic',
            'easeInQuart',
            'easeOutQuart',
            'easeInOutQuart',
            'easeInQuint',
            'easeOutQuint',
            'easeInOutQuint',
        ],
        category: 'Animation',
        weight: 1,
    },
};

const defaultProps = {
    showAfter: 100,
    showAlways: false,
    duration: 1000,
    easingPreset: 'easeInOutQuad',
};

export default Object.assign(ScrollToTop, {
    title: 'Scroll to Top',
    description: {
        en:
            'Help users easily return to the top of the long page with a single click',
        ru:
            'Помогите пользователям легко вернуться к началу страницы одним кликом мыши',
    },
    propInfo,
    defaultProps,
    overrides,
});
