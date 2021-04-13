import React, {
    useState,
    useEffect,
    useMemo,
    useRef,
    useCallback,
} from 'react';
import { Box } from '@quarkly/widgets';

const elementInViewport = (el) => {
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
    revers,
    duration,
    numberSuffix,
    numberPrefix,
    ...props
}) => {
    const refCounter = useRef(null);
    const [onView, setOnView] = useState(false);
    const [currentNumber, setCurrentNumber] = useState(
        revers ? endingNumber : startingNumber
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
                if (revers) {
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
    }, [revers, currentNumber, onView, startingNumber, endingNumber]);

    return (
        <Box text-align="center" font-size="58px" {...props} ref={refCounter}>
            {`${numberPrefix}${currentNumber}${numberSuffix}`}
        </Box>
    );
};

const propInfo = {
    startingNumber: {
        title: 'Starting Number',
        description: {
            en: 'Начальное число',
        },
        control: 'input',
        category: 'Main',
        weight: 0.5,
    },
    endingNumber: {
        title: 'Ending Number',
        description: {
            en: 'Конечное число',
        },
        control: 'input',
        category: 'Main',
        weight: 0.5,
    },
    revers: {
        title: 'Revers',
        description: {
            en: 'Возврастание / Убывание',
        },
        control: 'checkbox',
        category: 'Main',
        weight: 0.5,
    },
    duration: {
        title: 'Duration Animation',
        description: {
            en: 'Продолжительность анимации',
        },
        control: 'input',
        category: 'Main',
        weight: 0.5,
    },
    numberSuffix: {
        title: 'Number Suffix',
        description: {
            en: 'Символ после числа',
        },
        control: 'input',
        category: 'Main',
        weight: 0.5,
    },
    numberPrefix: {
        title: 'Number Prefix',
        description: {
            en: 'Символ перед числом',
        },
        control: 'input',
        category: 'Main',
        weight: 0.5,
    },
};

const defaultProps = {
    startingNumber: '0',
    endingNumber: 100,
    revers: false,
    duration: 2000,
    numberSuffix: '',
    numberPrefix: '',
};

Object.assign(Counter, {
    propInfo,
    defaultProps,
});

export default Counter;
