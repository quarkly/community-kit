import { update, createAtom } from 'dotto.x';
import initialState from './initial-state';
import { parseTime } from '../../utils';
import { defaultProps } from '../props';

export class SliderContainer {
    constructor({
        slidesProp,
        durationProp,
        functionProp,
        autoPlay,
        autoPlayBehavior,
        autoPlayIntervalProp,
        autoPlayDelayProp,
        autoPlayPauseProp,
    }) {
        this.repository = createAtom(initialState);

        const slidesNumb =
            parseInt(slidesProp, 10) > 0 ? parseInt(slidesProp, 10) : 1;
        const slidesList = [
            slidesNumb,
            ...Array.from({ length: slidesNumb }, (_, i) => i + 1),
            1,
        ];
        const animDuration =
            parseFloat(durationProp) > 0 ? parseFloat(durationProp) * 1000 : 0;
        const animFunction = functionProp;

        const autoPlayInterval = parseTime(
            autoPlayIntervalProp,
            defaultProps.autoPlayIntervalProp
        );
        const autoPlayDelay = parseTime(
            autoPlayDelayProp,
            defaultProps.autoPlayDelayProp
        );
        const autoPlayPause = parseTime(
            autoPlayPauseProp,
            defaultProps.autoPlayPauseProp
        );
        if (autoPlay) {
            this.startAutoPlay();
        }

        this.update({
            slidesNumb,
            slidesList,
            animDuration,
            animFunction,

            autoPlay,
            autoPlayBehavior,
            autoPlayInterval,
            autoPlayDelay,
            autoPlayPause,
        });
    }

    update(value) {
        update(this.repository, (data) => ({ ...data, ...value }));
    }

    startAutoPlay() {
        const {
            autoPlayBehavior,
            autoPlayInterval,
            autoPlayDelay,
        } = this.repository.get();

        // Delay before auto play starts
        const autoPlayDelayIdTemp = setTimeout(() => {
            // auto play interval
            const autoPlayIntervalIdTemp = setInterval(() => {
                const {
                    slidesNumb,
                    active,
                    autoPlayPauseId,
                } = this.repository.get();

                // pass when auto play paused
                if (autoPlayPauseId) {
                    return;
                }

                if (autoPlayBehavior === 'range' && active >= slidesNumb) {
                    this.stopAutoPlay();
                    return;
                }

                this.nextSlide();
            }, autoPlayInterval);

            this.update({ autoPlayIntervalId: autoPlayIntervalIdTemp });
        }, autoPlayDelay);
        this.update({ autoPlayDelayId: autoPlayDelayIdTemp });
    }

    clickPrev() {
        this.pauseAutoPlay();
        this.prevSlide();
    }

    clickNext() {
        this.pauseAutoPlay();
        this.nextSlide();
    }

    clickNumb({ active }) {
        const { lock } = this.repository.get();
        if (lock) return;

        this.update({
            active,
            position: 100 * active,
            animate: true,
            lock: false,
        });
    }

    setSlide({ active, position, animate, lock }) {
        this.update({ active, position, animate, lock });
    }

    pauseAutoPlay() {
        const {
            autoPlay,
            autoPlayPause,
            autoPlayPauseId,
            lock,
        } = this.repository.get();

        if (!autoPlay || lock) return;

        clearTimeout(autoPlayPauseId);

        const autoPlayPauseIdTemp = setTimeout(() => {
            this.update({ autoPlayPauseId: null });
        }, autoPlayPause);

        this.update({ autoPlayPauseId: autoPlayPauseIdTemp });
    }

    stopAutoPlay() {
        const {
            autoPlayDelayId,
            autoPlayIntervalId,
            autoPlayPauseId,
        } = this.repository.get();

        clearTimeout(autoPlayPauseId);
        clearTimeout(autoPlayDelayId);
        clearInterval(autoPlayIntervalId);

        this.update({
            autoPlayIntervalId: null,
            autoPlayDelayId: null,
            autoPlayPauseId: null,
        });
    }

    prevSlide() {
        const {
            slidesNumb,
            animDuration,
            animTimeoutId,
            active,
            lock,
        } = this.repository.get();

        if (lock) return;

        const newActive = active > 1 ? active - 1 : slidesNumb;

        if (newActive === slidesNumb) {
            this.update({
                active: newActive,
                position: 0,
                animate: true,
                lock: true,
            });

            clearTimeout(animTimeoutId);

            const tId = setTimeout(() => {
                this.update({
                    active: newActive,
                    position: 100 * slidesNumb,
                    animate: false,
                    lock: false,
                });
            }, animDuration);
            this.update({
                animTimeoutId: tId,
            });
        } else {
            this.update({
                active: newActive,
                position: 100 * newActive,
                animate: true,
                lock: false,
            });
        }
    }

    nextSlide() {
        const {
            slidesNumb,
            animDuration,
            animTimeoutId,
            active,
            lock,
        } = this.repository.get();

        if (lock) return;

        const newActive = active < slidesNumb ? active + 1 : 1;

        if (newActive === 1) {
            clearTimeout(animTimeoutId);

            this.update({
                active: newActive,
                position: 100 * (slidesNumb + 1),
                animate: true,
                lock: true,
            });

            const tId = setTimeout(() => {
                this.update({
                    active: newActive,
                    position: 100,
                    animate: false,
                    lock: false,
                });
            }, animDuration);
            this.update({ animTimeoutId: tId });
        } else {
            this.update({
                active: newActive,
                position: 100 * newActive,
                animate: true,
                lock: false,
            });
        }
    }

    off() {
        const {
            animTimeoutId,
            autoPlayIntervalId,
            autoPlayDelayId,
            autoPlayPauseId,
        } = this.repository.get();

        clearTimeout(animTimeoutId);
        clearInterval(autoPlayIntervalId);
        clearTimeout(autoPlayDelayId);
        clearTimeout(autoPlayPauseId);

        this.repository.off();
    }
}
