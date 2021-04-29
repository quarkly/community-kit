import { changePrevSlide, changeNextSlide } from './async-actions';

const asyncActionsHandlers = {
    CHANGE_PREV_SLIDE: changePrevSlide,
    CHANGE_NEXT_SLIDE: changeNextSlide,
};

export default asyncActionsHandlers;
