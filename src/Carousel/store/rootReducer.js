import {
    init,
    clickNumb,
    setSlide,
    setData,
    deinitAP,
    deinit,
} from './rootActions';

export default function reducer(state, action) {
    switch (action.type) {
        case 'INIT':
            return init(state, action);
        case 'CLICK_NUMB':
            return clickNumb(state, action);
        case 'SET_SLIDE':
            return setSlide(state, action);
        case 'SET_DATA':
            return setData(state, action);
        case 'DEINIT_AUTOPLAY':
            return deinitAP(state, action);
        case 'DEINIT':
            return deinit(state, action);
        default:
            return state;
    }
}
