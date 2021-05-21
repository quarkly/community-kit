export default function rootReducer(state, action) {
    switch (action.type) {
        case 'SET_DATA':
            return { ...state, ...action.payload };
        case 'INC':
            return {
                ...state,
                counter: state.counter + 1,
            };
        default:
            return state;
    }
}
