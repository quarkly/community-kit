import React, { useCallback, useLayoutEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { Box } from '@quarkly/widgets';
import { propInfo, defaultProps } from './props';

import { waitDOMLoaded, useUpdateEffect } from '../utils';

const Lottie = ({
    path,
    loop,
    isStopped,
    isPaused,
    firstFrame,
    lastFrame,
    forceUpdate,
    speed,
    renderer,
    ...props
}) => {
    const ref = useRef();
    const animRef = useRef(null);

    const { width, height } = props;

    const playFromTheBeginning = useCallback(() => {
        if (!animRef.current) return;
        if (!!firstFrame || !!lastFrame) {
            animRef.current.playSegments(
                [
                    parseInt(firstFrame || 0, 10),
                    parseInt(lastFrame || animRef.current.totalFrames, 10),
                ],
                forceUpdate
            );
        } else {
            animRef.current.resetSegments(forceUpdate);
            animRef.current.play();
        }
    }, [firstFrame, lastFrame, forceUpdate]);

    const loadAnimation = async () => {
        animRef.current?.destroy();

        animRef.current = lottie.loadAnimation({
            container: ref.current,
            autoplay: false,
            renderer,
            loop,
            path,
        });
        animRef.current.setSpeed(speed);

        await waitDOMLoaded(animRef.current);

        if (isStopped) {
            animRef.current?.stop();
        } else if (isPaused) {
            animRef.current?.pause();
        } else {
            playFromTheBeginning();
        }
    };

    // Reload animation when the route or rendering method is changed
    useLayoutEffect(() => {
        if (!path || !renderer) return;
        loadAnimation();
        // eslint-disable-next-line
    }, [path, renderer]);

    // Update container size (only for html and canvas)
    useUpdateEffect(() => {
        if (renderer !== 'svg') {
            animRef.current.resize();
        }
    }, [width, height, renderer]);

    // Toggle animation loop
    useUpdateEffect(() => {
        if (!animRef.current) return;

        animRef.current.loop = loop;
        if (loop && animRef.current.isPaused) {
            playFromTheBeginning();
        }
    }, [loop, playFromTheBeginning]);

    // Start, pause and stop animation
    useUpdateEffect(() => {
        if (isStopped) {
            animRef.current?.stop();
        } else if (isPaused) {
            animRef.current?.pause();
        } else {
            animRef.current?.play();
        }
    }, [isStopped, isPaused]);

    // Relaunch animation when the frame range is changed
    useUpdateEffect(() => {
        playFromTheBeginning();
    }, [playFromTheBeginning, firstFrame, lastFrame, forceUpdate]);

    // Change animation speed
    useUpdateEffect(() => {
        animRef.current?.setSpeed(speed);
    }, [speed]);

    return (
        <Box
            ref={ref}
            margin="0 auto"
            outline="none"
            overflow="hidden"
            position={renderer === 'html' && 'relative'}
            {...props}
        />
    );
};

Object.assign(Lottie, {
    title: 'Lottie',
    description: {
        en:
            'This component is used for adding lightweight and scalable Lottie animations to your website',
        ru:
            'Компонент для добавления легких и масштабируемых анимаций Lottie для вашего сайта',
    },
    propInfo,
    defaultProps,
});

export default Lottie;
