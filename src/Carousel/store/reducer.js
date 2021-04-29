import { init, setSlide, clickNumb, setParam } from './actions';

export default function rootReducer(state, action) {
    switch (action.type) {
        case 'INIT':
            return init(state, action);
        case 'SET_SLIDE':
            return setSlide(state, action);
        case 'CLICK_NUMB':
            return clickNumb(state, action);
        case 'SET_PARAM':
            return setParam(state, action);
        default:
            return state;
    }
}
