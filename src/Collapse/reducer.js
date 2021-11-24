const reducer = (state, action) => {
    const { type } = action;

    switch (type) {
        case 'TOGGLE':
            if (state.destination !== 'none') return state;

            return {
                ...state,
                destination: state.isOpen ? 'close' : 'open',
            };
        case 'COLLAPSING':
            return {
                ...state,
                isCollapsing: true,
            };
        case 'COLLAPSE_END':
            return {
                ...state,
                isCollapsing: false,
                isOpen: state.destination === 'open',
                destination: 'none',
            };
        default:
            throw new Error('Unexpected action in Collapse reducer!');
    }
};

export default reducer;
