import React, {
    useState,
    useEffect,
    useRef,
    useCallback,
    useMemo,
} from 'react';
import { Box } from '@quarkly/widgets';

class StepTimer extends EventTarget {
    constructor(delay, interval, steps) {
        super();

        this.delay = delay || 0;
        this.interval = interval || 1000;
        this.steps = steps || 10;
        this.currentStep = 0;

        this.intervalId = null;
        this.timeoutId = null;
    }

    get isRunning() {
        return this.timeoutId !== null || this.intervalId !== null;
    }

    start() {
        if (this.timeoutId || this.intervalId) {
            console.warn('Timer is already running. Stop it first'); // eslint-disable-line
            return;
        }

        this.timeoutId = setTimeout(() => {
            this.intervalId = setInterval(() => {
                if (this.currentStep <= this.steps) {
                    this.currentStep += 1;
                    const event = new CustomEvent('step', {
                        detail: this.currentStep,
                    });
                    this.dispatchEvent(event);
                } else {
                    this.stop();
                }
            }, this.interval);
        }, this.delay);
    }

    stop() {
        clearTimeout(this.timeoutId);
        clearInterval(this.intervalId);
        this.timeoutId = null;
        this.intervalId = null;
        this.currentStep = 0;
    }
}

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

function useCounter(direction, startingNumber, endingNumber) {
    const [number, setNumber] = useState(0);
    const step = useCallback(
        () =>
            setNumber((currentNumber) => {
                if (direction === 'reverse' && currentNumber > startingNumber) {
                    return currentNumber - 1;
                }
                if (currentNumber < endingNumber) {
                    return currentNumber + 1;
                }

                return currentNumber;
            }),
        [direction, startingNumber, endingNumber]
    );

    useEffect(() => {
        setNumber(direction === 'reverse' ? endingNumber : startingNumber);
    }, [direction, startingNumber, endingNumber]);

    return [number, step];
}

const startOnHooks = {
    onScreen: useCallOnScreenIntersection,
    onLoad: useCallOnPageLoad,
};

const Counter = ({
    startOn,
    delay,
    startingNumber,
    endingNumber,
    direction,
    duration,
    numberSuffix,
    numberPrefix,
    ...props
}) => {
    startingNumber = parseInt(startingNumber, 10) || 0;
    endingNumber = parseInt(endingNumber, 10) || 10;
    const useSignal = startOnHooks[startOn] || startOnHooks.onScreen;

    const [currentNumber, step] = useCounter(
        direction,
        startingNumber,
        endingNumber
    );

    const [startCount, stopCount] = useMemo(() => {
        const interval = Math.abs(duration / (endingNumber - startingNumber));
        const steps = Math.abs(endingNumber - startingNumber);
        const stepTimer = new StepTimer(delay, interval, steps);

        stepTimer.addEventListener('step', () => step());

        return [
            () => {
                stepTimer.start();
            },
            () => stepTimer.stop(),
        ];
    }, [duration, endingNumber, startingNumber, delay, step]);

    const refCounter = useRef(null);
    useSignal(startCount, refCounter);

    useEffect(() => {
        return () => stopCount();
    }, [stopCount]);

    return (
        <Box text-align="center" font-size="58px" {...props} ref={refCounter}>
            {`${numberPrefix}${currentNumber}${numberSuffix}`}
        </Box>
    );
};

const propInfo = {
    startingNumber: {
        title: {
            en: 'Start value',
            ru: 'Начальное число',
        },
        control: 'input',
        type: 'number',
        category: 'Main',
        weight: 0.5,
    },
    endingNumber: {
        title: {
            en: 'End value',
            ru: 'Конечное число',
        },
        control: 'input',
        type: 'number',
        category: 'Main',
        weight: 0.5,
    },
    direction: {
        title: {
            en: 'Count direction',
            ru: 'Направление отсчёта',
        },
        control: 'radio-group',
        variants: [
            {
                title: {
                    en: 'Normal',
                    ru: 'Возрастание',
                },
                value: 'normal',
            },
            {
                title: {
                    en: 'Reverse',
                    ru: 'Убывание',
                },
                value: 'reverse',
            },
        ],
        category: 'Main',
        weight: 1,
    },
    startOn: {
        title: {
            en: 'Count start',
            ru: 'Начало отсчёта',
        },
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
        title: {
            en: 'Count duration',
            ru: 'Длительность отсчёта',
        },
        control: 'input',
        type: 'number',
        category: 'Main',
        weight: 1,
    },
    delay: {
        title: {
            en: 'Count delay',
            ru: 'Задержка отсчёта',
        },
        control: 'input',
        type: 'number',
        category: 'Main',
        weight: 1,
    },
    numberSuffix: {
        title: {
            en: 'Text after value',
            ru: 'Текст после числа',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    numberPrefix: {
        title: {
            en: 'Text before value',
            ru: 'Текст перед числом',
        },
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
};

const defaultProps = {
    startOn: 'onScreen',
    startingNumber: 0,
    endingNumber: 100,
    direction: 'normal',
    duration: 2000,
    numberSuffix: '',
    numberPrefix: '',
    delay: 0,
};

Object.assign(Counter, {
    title: 'Counter',
    description: {
        en: 'This component is a counter that increases or decreases to a certain value',
        ru: 'Компонент представляет из себя счетчик, который увеличивается или уменьшается до определенного значения',
    },
    propInfo,
    defaultProps,
});

export default Counter;
