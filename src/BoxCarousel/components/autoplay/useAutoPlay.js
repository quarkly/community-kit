import { useRef, useLayoutEffect } from 'react';
import { useConstructorMode } from '@quarkly/widgets';
import EventEmitter from '../../utils/EventEmitter';

class AutoPlay extends EventEmitter {
    constructor(options) {
        super();

        this._enabled = false;

        this._isPaused = true;
        this._isInteractionPause = false;
        this._timeout = null;
        this._start = null;

        this.init(options);
    }

    get remaining() {
        return this._remaining;
    }

    get delay() {
        return this._delay;
    }

    get isPaused() {
        return this._isPaused;
    }

    get enabled() {
        return this._enabled;
    }

    init({ remaining, delay, swiper, enabled }) {
        this._remaining = remaining;
        this._delay = delay;
        this._swiper = swiper;
        this._enabled = enabled;

        if (this._enabled) {
            clearTimeout(this._timeout);
            this._start = null;
        }
    }

    pause(reset, isInteraction = false) {
        this._isInteractionPause = isInteraction;

        if (this._isPaused === true) return;

        this._isPaused = true;
        this.emit('pause');
        clearTimeout(this._timeout);
        if (reset) {
            this._remaining = this.delay;
        } else {
            this._remaining -= Date.now() - this._start;
        }
        this.emit('animate', ...this.getAnimateOptions());
    }

    resume() {
        if (!this._enabled) return;

        this._isPaused = false;
        this._isInteractionPause = null;
        this._start = Date.now();
        if (!this._swiper.params.loop && this._swiper.isEnd) {
            this.pause(true);
            return;
        }

        this.emit('resume');

        this.emit('animate', ...this.getAnimateOptions());

        const run = () => {
            this._swiper.loopFix();
            this._swiper.slideNext(this._swiper.params.speed, true, true);
        };

        clearTimeout(this._timeout);
        this._timeout = setTimeout(() => {
            this._remaining = this._delay;

            run();
            this.resume();
        }, this.remaining);
    }

    getAnimateOptions() {
        if (this._isPaused) {
            return [this.remaining, this.isPaused, this.remaining / this.delay];
        }

        const remaining = this.remaining - (new Date() - this._start);
        return [remaining, this.isPaused, remaining / this.delay];
    }

    hoverResume() {
        if (this._isInteractionPause) return;

        this.resume();
    }

    hoverPause() {
        if (this._isInteractionPause) return;

        this.pause();
    }
}

const useAutoPlay = (autoPlay, swiper, delay) => {
    const autoPlayRef = useRef(
        new AutoPlay({
            remaining: delay,
            delay,
            swiper,
        })
    );
    const mode = useConstructorMode();

    useLayoutEffect(() => {
        if (!swiper) return;

        autoPlayRef.current.init({
            remaining: delay,
            swiper,
            delay,
            enabled: autoPlay,
        });

        if (autoPlay && mode !== 'constructor') {
            setTimeout(() => autoPlayRef.current.resume(), 0);
        } else {
            autoPlayRef.current.pause(true);
        }
    }, [swiper, autoPlay, delay, mode]);

    useLayoutEffect(() => {
        if (!swiper) return;

        const sliderFirstMove = () => {
            autoPlayRef.current.pause(false, true);
        };

        const beforeTransitionStart = (_s, speed, internal) => {
            if (!internal) {
                autoPlayRef.current.pause(false, true);
            }
        };

        swiper.on('sliderFirstMove', sliderFirstMove);
        swiper.on('beforeTransitionStart', beforeTransitionStart);

        return () => {
            swiper.off('sliderFirstMove', sliderFirstMove);
            swiper.off('beforeTransitionStart', beforeTransitionStart);
        };
    }, [swiper, autoPlay]);

    return autoPlayRef.current;
};

export default useAutoPlay;
