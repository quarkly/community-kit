import React, { useEffect, useRef, useMemo, useCallback } from 'react';
import { Box } from '@quarkly/widgets';
import { parseTime } from '../utils';
import { useCounter, useViewport, usePageLoad } from './hooks';
import { propInfo, defaultProps } from './props';

const startTriggerHooks = {
    onViewport: useViewport,
    onPageLoad: usePageLoad,
};

const Counter = ({
    startTrigger,
    startProp,
    endProp,
    direction,
    durationProp,
    delayProp,
    textAfter,
    textBefore,
    ...props
}) => {
    const startNumb = useMemo(() => parseInt(startProp, 10) || 0, [startProp]);
    const endNumb = useMemo(() => parseInt(endProp, 10) || 0, [endProp]);
    const duration = useMemo(
        () => parseTime(durationProp, defaultProps.durationProp),
        [durationProp]
    );
    const delay = useMemo(() => parseTime(delayProp, defaultProps.delayProp), [
        delayProp,
    ]);

    const componentRef = useRef(null);
    const counterRef = useRef({
        currentStep: direction === 'normal' ? startNumb : endNumb,
    });

    const [curNumb, step] = useCounter(startNumb, endNumb, direction);

    const useSignal =
        startTriggerHooks[startTrigger] || startTriggerHooks.onPageLoad;

    const steps = useMemo(() => Math.abs(endNumb - startNumb), [
        startNumb,
        endNumb,
    ]);
    const interval = useMemo(() => Math.abs(duration / steps), [
        steps,
        duration,
    ]);

    const start = useCallback(
        ({ current }) => {
            if (current.timeoutId || current.intervalId) return;

            current.timeoutId = setTimeout(() => {
                current.intervalId = setInterval(() => {
                    if (current.currentStep <= steps) {
                        current.currentStep += 1;

                        step();
                    } else {
                        stop({ current });
                    }
                }, interval);
            }, delay);
        },
        [steps, interval, delay]
    );

    const stop = useCallback(({ current }) => {
        clearTimeout(current.timeoutId);
        clearInterval(current.intervalId);
        current.timeoutId = null;
        current.intervalId = null;
        current.currentStep = 0;
    }, []);

    useSignal(() => start(counterRef), componentRef);

    useEffect(() => {
        return () => stop(counterRef);
    }, [stop]);

    return (
        <Box text-align="center" font-size="58px" {...props} ref={componentRef}>
            {`${textBefore}${curNumb}${textAfter}`}
        </Box>
    );
};

Object.assign(Counter, {
    title: 'Counter',
    description: {
        en:
            'This component is a counter that increases or decreases to a certain value',
        ru:
            'Компонент представляет из себя счетчик, который увеличивается или уменьшается до определенного значения',
    },
    propInfo,
    defaultProps,
});

export default Counter;
