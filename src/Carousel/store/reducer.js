import { init, setSlide, clickNumb, setData, deinit } from './actions';

export default function rootReducer(state, action) {
    switch (action.type) {
        case 'INIT':
            return init(state, action);
        case 'SET_SLIDE':
            return setSlide(state, action);
        case 'CLICK_NUMB':
            return clickNumb(state, action);
        case 'SET_DATA':
            return setData(state, action);
        case 'DEINITI':
            return deinit(state, action);
        default:
            return state;
    }
}
