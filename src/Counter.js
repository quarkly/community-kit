import React, {
    useState,
    useEffect,
    useMemo,
    useRef,
    useCallback,
} from 'react';
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

const Counter = ({
    startingNumber,
    endingNumber,
    direction,
    duration,
    numberSuffix,
    numberPrefix,
    ...props
}) => {
    const refCounter = useRef(null);
    const [onView, setOnView] = useState(false);
    const [currentNumber, setCurrentNumber] = useState(
        direction === 'reverse' ? endingNumber : startingNumber
    );

    const getDurationOneStep = useMemo(
        () => duration / (endingNumber - startingNumber),
        [duration, endingNumber, startingNumber]
    );

    const checkOnView = useCallback(() => {
        if (!onView) {
            if (elementInViewport(refCounter.current)) {
                setOnView(true);
                window.removeEventListener('scroll', checkOnView);
            }
        }
    }, [onView]);

    useEffect(() => {
        checkOnView();
        window.addEventListener('scroll', checkOnView);
        return () => {
            window.removeEventListener('scroll', checkOnView);
        };
    }, [refCounter.current]);

    useEffect(() => {
        const updateCount = setInterval(() => {
            if (onView) {
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
        }, getDurationOneStep);

        return () => {
            clearInterval(updateCount);
        };
    }, [direction, currentNumber, onView, startingNumber, endingNumber]);

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
                value: 'normal'
            },
            {
                title: {
                    en: 'Убывание',
                    ru: 'Убывание',
                },
                value: 'reverse'
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
