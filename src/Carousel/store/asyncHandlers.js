import {
    initAutoPlay,
    clickPrev,
    clickNext,
    touchStart,
    touchMove,
    touchEnd,
} from './asyncActions';

const asyncHandlers = {
    INIT_AUTOPLAY: initAutoPlay,
    CLICK_PREV: clickPrev,
    CLICK_NEXT: clickNext,
    TOUCH_START: touchStart,
    TOUCH_MOVE: touchMove,
    TOUCH_END: touchEnd,
};

export default asyncHandlers;
