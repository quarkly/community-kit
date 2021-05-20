import { initAutoPlay, clickPrev, clickNext } from './asyncActions';

const asyncHandlers = {
    INIT_AUTOPLAY: initAutoPlay,
    CLICK_PREV: clickPrev,
    CLICK_NEXT: clickNext,
};

export default asyncHandlers;
