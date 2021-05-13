import { init, prevSlide, nextSlide } from './asyncActions';

const asyncHandlers = {
    ASYNC_INIT: init,
    PREV_SLIDE: prevSlide,
    NEXT_SLIDE: nextSlide,
};

export default asyncHandlers;
