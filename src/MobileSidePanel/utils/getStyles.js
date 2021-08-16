import getContentStyles from './getContentStyles';

// Get all styles by properties
const getStyles = ({
    breakpoint,
    menuPosition,
    animDuration,
    animFunction,
    isNear,
}) => ({
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
        [`${breakpoint}-display`]: 'inline-flex',
        [`${breakpoint}-flex`]: '0 0 auto',
        [`${breakpoint}-z-index`]: isNear ? '2' : '1',
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

        [`${breakpoint}-top`]: '0',
        [`${breakpoint}-left`]: '0',
        [`${breakpoint}-position`]: isNear ? 'absolute' : 'fixed',
    },
    'Wrapper :open': {
        [`${breakpoint}-transition`]: `visibility ${animDuration} step-start`,
        [`${breakpoint}-visibility`]: 'visible',
    },
    'Wrapper :closed': {
        [`${breakpoint}-transition`]: `visibility ${animDuration} step-end`,
        [`${breakpoint}-visibility`]: 'hidden',
    },
    Overlay: {
        width: '100%',
        height: '100%',
        'background-color': isNear ? 'transparent' : 'rgba(0,0,0, .5)',
        position: 'relative',
        display: 'none',
        'z-index': '1',

        [`${breakpoint}-top`]: '0',
        [`${breakpoint}-left`]: '0',
        [`${breakpoint}-position`]: 'fixed',
        [`${breakpoint}-display`]: 'block',
    },
    'Overlay :open': {
        [`${breakpoint}-transition`]: `
      visibility ${animDuration} step-start,
      opacity ${animDuration} ${animFunction}
    `,
        [`${breakpoint}-visibility`]: 'visible',
        [`${breakpoint}-opacity`]: '1',
    },
    'Overlay :closed': {
        [`${breakpoint}-transition`]: `
      visibility ${animDuration} step-end,
      opacity ${animDuration} ${animFunction}
    `,
        [`${breakpoint}-visibility`]: 'hidden',
        [`${breakpoint}-opacity`]: '0',
    },
    Content: {
        'max-width': '100vw',
        'max-height': '100vh',
        'background-color': 'white',
        'box-sizing': 'border-box',
        display: 'flex',
        'z-index': '2',

        ...getContentStyles({
            breakpoint,
            menuPosition,
            animDuration,
            animFunction,
            isNear,
        }).normal,
    },
    'Content :open': {
        ...getContentStyles({
            breakpoint,
            menuPosition,
            animDuration,
            animFunction,
            isNear,
        }).open,
    },
    'Content :closed': {
        ...getContentStyles({
            breakpoint,
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

        [`${breakpoint}-display`]: isNear ? 'none' : 'block',
    },
});

export default getStyles;
