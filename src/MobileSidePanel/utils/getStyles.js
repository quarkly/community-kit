import getContentStyles from './getContentStyles';

// Get all styles by properties
const getStyles = ({
    breakpoint,
    menuPosition,
    animDuration,
    animFunction,
    isNear,
}) => {
    const breakpointModifier = breakpoint !== 'all' ? `${breakpoint}-` : '';
    return {
        Button: {
            'padding-right': '3px',
            'min-height': '0',
            'align-items': 'center',
            'flex-direction':
                menuPosition === 'left' || menuPosition === 'nearRight'
                    ? 'row-reverse'
                    : 'row',
            position: 'relative',
            cursor: 'pointer',

            display: 'none',
            [`${breakpointModifier}display`]: 'inline-flex',
            [`${breakpointModifier}flex`]: '0 0 auto',
            [`${breakpointModifier}z-index`]: isNear ? '2' : '1',
        },
        'Button Text': {
            margin: '0 .35em 0 0',
            'font-size': '14px',
            'user-select': 'none',
        },
        Wrapper: {
            width: '100%',
            height: '100%',
            position: 'relative',
            display: 'flex',
            'z-index': '1',

            [`${breakpointModifier}top`]: '0',
            [`${breakpointModifier}left`]: '0',
            [`${breakpointModifier}position`]: isNear ? 'absolute' : 'fixed',
        },
        'Wrapper :open': {
            [`${breakpointModifier}transition`]: `visibility ${animDuration} step-start`,
            [`${breakpointModifier}visibility`]: 'visible',
        },
        'Wrapper :closed': {
            [`${breakpointModifier}transition`]: `visibility ${animDuration} step-end`,
            [`${breakpointModifier}visibility`]: 'hidden',
        },
        Overlay: {
            width: '100%',
            height: '100%',
            'background-color': isNear ? 'transparent' : 'rgba(0,0,0, .5)',
            position: 'relative',
            display: 'none',
            'z-index': '1',

            [`${breakpointModifier}top`]: '0',
            [`${breakpointModifier}left`]: '0',
            [`${breakpointModifier}position`]: 'fixed',
            [`${breakpointModifier}display`]: 'block',
        },
        'Overlay :open': {
            [`${breakpointModifier}transition`]: `
      visibility ${animDuration} step-start,
      opacity ${animDuration} ${animFunction}
    `,
            [`${breakpointModifier}visibility`]: 'visible',
            [`${breakpointModifier}opacity`]: '1',
        },
        'Overlay :closed': {
            [`${breakpointModifier}transition`]: `
      visibility ${animDuration} step-end,
      opacity ${animDuration} ${animFunction}
    `,
            [`${breakpointModifier}visibility`]: 'hidden',
            [`${breakpointModifier}opacity`]: '0',
        },
        Content: {
            'max-width': '100vw',
            'max-height': '100vh',
            'background-color': 'white',
            'box-sizing': 'border-box',
            display: 'flex',
            'z-index': '2',

            ...getContentStyles({
                breakpointModifier,
                menuPosition,
                animDuration,
                animFunction,
                isNear,
            }).normal,
        },
        'Content :open': {
            ...getContentStyles({
                breakpointModifier,
                menuPosition,
                animDuration,
                animFunction,
                isNear,
            }).open,
        },
        'Content :closed': {
            ...getContentStyles({
                breakpointModifier,
                menuPosition,
                animDuration,
                animFunction,
                isNear,
            }).closed,
        },
        Children: {
            width: '100%',
        },
        Cross: {
            top: '16px',
            right: '16px',
            position: 'absolute',
            cursor: 'pointer',
            display: 'none',

            [`${breakpointModifier}display`]: isNear ? 'none' : 'block',
        },
    };
};

export default getStyles;
