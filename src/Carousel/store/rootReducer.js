import { clickNumb, setSlide, setData } from './rootActions';

export default function reducer(state, action) {
    switch (action.type) {
        case 'CLICK_NUMB':
            return clickNumb(state, action);
        case 'SET_SLIDE':
            return setSlide(state, action);
        case 'SET_DATA':
            return setData(state, action);
        default:
            return state;
    }
}
