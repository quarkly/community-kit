import { init, changePrevSlide, changeNextSlide } from './async-actions';

const asyncActionsHandlers = {
    ASYNC_INIT: init,
    CHANGE_PREV_SLIDE: changePrevSlide,
    CHANGE_NEXT_SLIDE: changeNextSlide,
};

export default asyncActionsHandlers;
