import { FiMenu, FiX } from 'react-icons/fi';

// There are several icons in the component
// Brought out separately, so that there is less duplication
const iconProps = {
    normal: {
        category: 'fi',
        defaultIcon: FiMenu,
        size: '24px',
        color: '--dark',
    },
    closed: {
        category: 'fi',
        defaultIcon: FiMenu,
    },
    open: {
        category: 'fi',
        defaultIcon: FiX,
    },
};

const overrides = {
    Button: {
        kind: 'Box',
    },
    'Button Text': {
        kind: 'Text',
        props: {
            children: 'menu',
        },
    },
    'Button Icon': {
        kind: 'Icon',
        props: iconProps.normal,
    },
    'Button Icon :open': {
        kind: 'Icon',
        props: iconProps.open,
    },
    'Button Icon :closed': {
        kind: 'Icon',
        props: iconProps.closed,
    },
    Wrapper: {
        kind: 'Box',
    },
    Overlay: {
        kind: 'Box',
    },
    Content: {
        kind: 'Box',
    },
    Children: {
        kind: 'Box',
    },
    Cross: {
        kind: 'Icon',
        props: iconProps.open,
    },
};

export default overrides;
