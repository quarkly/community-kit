// Design styles differ 50/50
// Brought out separately, so that there is less duplication
const getContentStyles = ({
    breakpoint,
    menuPosition,
    animDuration,
    animFunction,
    isNear,
}) => {
    const baseStyles = {
        padding: isNear ? '16px' : '48px 16px 24px',
        width: '100%',
        'overflow-x': 'hidden',
        'overflow-y': 'auto',

        'align-items': 'center',
        'justify-content': 'space-between',
        'flex-direction': 'row',

        [`${breakpoint}-width`]: 'initial',
        [`${breakpoint}-min-width`]: '280px',
        [`${breakpoint}-min-height`]: '32px',
        [`${breakpoint}-align-items`]: 'flex-start',
        [`${breakpoint}-flex-direction`]: 'column',
        [`${breakpoint}-box-shadow`]: '--xxl',
    };
    const animStyles = {
        appear: {
            open: {
                [`${breakpoint}-transition`]: `
					visibility ${animDuration} step-start,
					opacity ${animDuration} ${animFunction}
				`,
                [`${breakpoint}-visibility`]: 'visible',
                [`${breakpoint}-opacity`]: '1',
            },
            closed: {
                [`${breakpoint}-transition`]: `
					visibility ${animDuration} step-end,
					opacity ${animDuration} ${animFunction}
				`,
                [`${breakpoint}-visibility`]: 'hidden',
                [`${breakpoint}-opacity`]: '0',
            },
        },
        shift: {
            base: {
                [`${breakpoint}-transition`]: `
					transform ${animDuration} ${animFunction}
				`,
            },
        },
    };

    switch (menuPosition) {
        case 'full':
            return {
                normal: {
                    ...baseStyles,

                    [`${breakpoint}-top`]: '0',
                    [`${breakpoint}-left`]: '0',
                    [`${breakpoint}-width`]: '100%',
                    [`${breakpoint}-height`]: '100%',
                    [`${breakpoint}-position`]: 'fixed',
                },
                open: animStyles.appear.open,
                closed: animStyles.appear.closed,
            };
        case 'left':
        case 'right':
            return {
                normal: {
                    ...baseStyles,

                    [`${breakpoint}-top`]: '0',
                    [`${breakpoint}-${
                        menuPosition === 'left' ? 'right' : 'left'
                    }`]: '100%',
                    [`${breakpoint}-padding-top`]: '38px',
                    [`${breakpoint}-width`]: '280px',
                    [`${breakpoint}-height`]: '100%',
                    [`${breakpoint}-position`]: 'fixed',
                },
                closed: {
                    ...animStyles.shift.base,
                    [`${breakpoint}-transform`]: 'translateX(0)',
                },
                open: {
                    ...animStyles.shift.base,
                    [`${breakpoint}-transform`]: `translateX(${
                        menuPosition === 'left' ? '100%' : '-100%'
                    })`,
                },
            };
        case 'near':
            return {
                normal: {
                    ...baseStyles,

                    [`${breakpoint}-top`]: '100%',
                    [`${breakpoint}-right`]: '0',
                    [`${breakpoint}-position`]: 'absolute',
                },
                open: animStyles.appear.open,
                closed: animStyles.appear.closed,
            };
        case 'nearRight':
            return {
                normal: {
                    ...baseStyles,

                    [`${breakpoint}-top`]: '100%',
                    [`${breakpoint}-left`]: '0',
                    [`${breakpoint}-position`]: 'absolute',
                },
                open: animStyles.appear.open,
                closed: animStyles.appear.closed,
            };
        default:
            return {};
    }
};

export default getContentStyles;
