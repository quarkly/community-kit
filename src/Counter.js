import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Box } from '@quarkly/widgets';

const elementInViewport = (el) => {
    if (!el) return false;

    let top = el.offsetTop;
    let left = el.offsetLeft;
    const width = el.offsetWidth;
    const height = el.offsetHeight;

    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }
    return (
        top < window.pageYOffset + window.innerHeight &&
        left < window.pageXOffset + window.innerWidth &&
        top + height > window.pageYOffset &&
        left + width > window.pageXOffset
    );
};

function useCallOnScreenIntersection(cb, elementRef) {
    const isCalled = useRef(false);

    const checkOnView = useCallback(() => {
        if (!isCalled.current && elementInViewport(elementRef.current)) {
            isCalled.current = true;
            cb();
            window.removeEventListener('scroll', checkOnView);
        }
    }, [cb, elementRef]);

    useEffect(() => {
        checkOnView();
        window.addEventListener('scroll', checkOnView);
        return () => {
            window.removeEventListener('scroll', checkOnView);
        };
    }, [checkOnView]);
}

function useCallOnPageLoad(cb) {
    const isCalled = useRef(false);

    useEffect(() => {
        if (isCalled.current) return;

        if (document.readyState === 'complete') {
            isCalled.current = true;
            cb();
            return;
        }
        const t = () => {
            isCalled.current = true;
            cb();
        };

        document.addEventListener('load', t);
        return () => document.removeEventListener('load', t);
    });
}

const startOnHooks = {
    onScreen: useCallOnScreenIntersection,
    onLoad: useCallOnPageLoad,
};

function getDurationOneStep(duration, endingNumber, startingNumber) {
    return duration / (endingNumber - startingNumber);
}

const Counter = ({
    startOn,
    startingNumber,
    endingNumber,
    direction,
    duration,
    numberSuffix,
    numberPrefix,
    ...props
}) => {
    const useSignal = startOnHooks[startOn] || startOnHooks.onScreen;
    const refCounter = useRef(null);
    const [start, setStart] = useState(false);
    const [currentNumber, setCurrentNumber] = useState(
        direction === 'reverse' ? endingNumber : startingNumber
    );

    const setStartCb = useCallback(() => setStart(true), []);

    useSignal(setStartCb, refCounter);

    useEffect(() => {
        const updateCount = setInterval(() => {
            if (start) {
                if (direction === 'reverse') {
                    if (currentNumber > startingNumber) {
                        setCurrentNumber(parseInt(currentNumber, 10) - 1);
                    } else {
                        clearInterval(updateCount);
                    }
                } else if (currentNumber < endingNumber) {
                    setCurrentNumber(parseInt(currentNumber, 10) + 1);
                } else {
                    clearInterval(updateCount);
                }
            }
        }, getDurationOneStep(duration, endingNumber, startingNumber));

        return () => {
            clearInterval(updateCount);
        };
    }, [
        duration,
        direction,
        currentNumber,
        start,
        startingNumber,
        endingNumber,
    ]);

    return (
        <Box text-align="center" font-size="58px" {...props} ref={refCounter}>
            {`${numberPrefix}${currentNumber}${numberSuffix}`}
        </Box>
    );
};

const propInfo = {
    startingNumber: {
        title: 'Начальное число',
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 0.5,
    },
    endingNumber: {
        title: 'Конечное число',
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 0.5,
    },
    direction: {
        title: 'Направление отсчёта',
        control: 'radio-group',
        variants: [
            {
                title: {
                    en: 'Возрастание',
                    ru: 'Возрастание',
                },
                value: 'normal',
            },
            {
                title: {
                    en: 'Убывание',
                    ru: 'Убывание',
                },
                value: 'reverse',
            },
        ],
        category: 'Main',
        weight: 1,
    },
    startOn: {
        title: 'Начало отсчёта',
        control: 'radio-group',
        variants: [
            {
                title: {
                    en: 'On screen intersection',
                    ru: 'При пересечении экрана',
                },
                value: 'onScreen',
            },
            {
                title: {
                    en: 'On page load',
                    ru: 'При загрузке страницы',
                },
                value: 'onLoad',
            },
        ],
        category: 'Main',
        weight: 1,
    },
    duration: {
        title: 'Длительность отсчёта',
        control: 'input',
        type: 'number',
        category: 'Main',
        weight: 1,
    },
    numberSuffix: {
        title: 'Текст после числа',
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    numberPrefix: {
        title: 'Текст перед числом',
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
};

const defaultProps = {
    startOn: 'onScreen',
    startingNumber: '0',
    endingNumber: 100,
    direction: 'normal',
    duration: 2000,
    numberSuffix: '',
    numberPrefix: '',
};

Object.assign(Counter, {
    propInfo,
    defaultProps,
});

export default Counter;
