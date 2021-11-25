// Design styles differ 50/50
// Brought out separately, so that there is less duplication
const getContentStyles = ({
    breakpointModifier,
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

        [`${breakpointModifier}width`]: 'initial',
        [`${breakpointModifier}min-width`]: '280px',
        [`${breakpointModifier}min-height`]: '32px',
        [`${breakpointModifier}align-items`]: 'flex-start',
        [`${breakpointModifier}flex-direction`]: 'column',
        [`${breakpointModifier}box-shadow`]: '--xxl',
    };
    const animStyles = {
        appear: {
            open: {
                [`${breakpointModifier}transition`]: `
					visibility ${animDuration} step-start,
					opacity ${animDuration} ${animFunction}
				`,
                [`${breakpointModifier}visibility`]: 'visible',
                [`${breakpointModifier}opacity`]: '1',
            },
            closed: {
                [`${breakpointModifier}transition`]: `
					visibility ${animDuration} step-end,
					opacity ${animDuration} ${animFunction}
				`,
                [`${breakpointModifier}visibility`]: 'hidden',
                [`${breakpointModifier}opacity`]: '0',
            },
        },
        shift: {
            base: {
                [`${breakpointModifier}transition`]: `
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

                    [`${breakpointModifier}top`]: '0',
                    [`${breakpointModifier}left`]: '0',
                    [`${breakpointModifier}width`]: '100%',
                    [`${breakpointModifier}height`]: '100%',
                    [`${breakpointModifier}position`]: 'fixed',
                },
                open: animStyles.appear.open,
                closed: animStyles.appear.closed,
            };
        case 'left':
        case 'right':
            return {
                normal: {
                    ...baseStyles,

                    [`${breakpointModifier}top`]: '0',
                    [`${breakpointModifier}${
                        menuPosition === 'left' ? 'right' : 'left'
                    }`]: '100%',
                    [`${breakpointModifier}padding-top`]: '38px',
                    [`${breakpointModifier}width`]: '280px',
                    [`${breakpointModifier}height`]: '100%',
                    [`${breakpointModifier}position`]: 'fixed',
                },
                closed: {
                    ...animStyles.shift.base,
                    [`${breakpointModifier}transform`]: 'translateX(0)',
                },
                open: {
                    ...animStyles.shift.base,
                    [`${breakpointModifier}transform`]: `translateX(${
                        menuPosition === 'left' ? '100%' : '-100%'
                    })`,
                },
            };
        case 'near':
            return {
                normal: {
                    ...baseStyles,

                    [`${breakpointModifier}top`]: '100%',
                    [`${breakpointModifier}right`]: '0',
                    [`${breakpointModifier}position`]: 'absolute',
                },
                open: animStyles.appear.open,
                closed: animStyles.appear.closed,
            };
        case 'nearRight':
            return {
                normal: {
                    ...baseStyles,

                    [`${breakpointModifier}top`]: '100%',
                    [`${breakpointModifier}left`]: '0',
                    [`${breakpointModifier}position`]: 'absolute',
                },
                open: animStyles.appear.open,
                closed: animStyles.appear.closed,
            };
        default:
            return {};
    }
};

export default getContentStyles;
