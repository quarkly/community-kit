import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

export default {
    DateButton: {
        kind: 'DateButton',
        props: {
            height: 30,
            width: 30,
            padding: 0,
            color: 'black',
            border: 'none',
            font: 'inherit',
            'border-radius': 7,
            'background-color': 'transparent',
            'text-align': 'center',
            'vertical-align': 'middle',
            'hover-background-color': '--lightD1',
            'focus-box-shadow': 'none',
            'focus-background-color': '--lightD1',
            'active-background-color': '--lightD2',
        },
    },
    'DateButton Outside': {
        props: {
            color: '--greyD2',
        },
    },
    'DateButton Disabled': {
        props: {
            color: '--grey',
            filter: 'opacity(0.25)',
            'focus-border': '1px solid',
            'hover-background-color': 'transparent',
            'focus-background-color': 'transparend',
            'background-color': 'transparent',
        },
    },
    'DateButton Selected': {
        props: {
            color: '--light',
            'background-color': '--primary',
            'active-background-color': '--primary',
            'hover-background-color': '--primary',
            'focus-background-color': '--primary',
        },
    },
    'DateButton Range': {
        props: {
            'background-color': '--lightD1',
            'active-background-color': '--lightD1',
            'hover-background-color': '--lightD1',
            'focus-background-color': '--lightD1',
            'border-radius': 0,
        },
    },
    'DateButton OneDay Range': {
        props: {
            color: '--light',
            'background-color': '--primary',
            'active-background-color': '--primary',
            'hover-background-color': '--primary',
            'focus-background-color': '--primary',
            'border-radius': 7,
        },
    },
    'DateButton End Range': {
        props: {
            color: '--light',
            'background-color': '--primary',
            'active-background-color': '--primary',
            'hover-background-color': '--primary',
            'focus-background-color': '--primary',
        },
    },
    'DateButton From Range': {
        props: {
            'border-radius': '50% 0 0 50%',
        },
    },
    'DateButton To Range': {
        props: {
            'border-radius': '0 50% 50% 0',
        },
    },
    'DateButton End Range Hovered': {
        props: {
            color: 'black',
            'background-color': '--lightD2',
            'active-background-color': '--lightD2',
            'hover-background-color': '--lightD2',
            'focus-background-color': '--lightD2',
        },
    },
    Caption: {
        props: {
            display: 'flex',
            'justify-content': 'space-between',
            width: '100%',
        },
    },
    'Caption Button': {
        kind: 'Button',
        props: {
            height: 30,
            width: 30,
            padding: 0,
            color: 'black',
            'background-color': 'transparent',
            'focus-box-shadow': 'none',
            'focus-background-color': '--lightD1',
            'hover-background-color': '--lightD1',
            'active-background-color': '--lightD2',
        },
    },
    'Caption Button Disabled': {
        props: {
            color: '--grey',
            background: 'transparent',
            'disabled-background-color': 'transparent',
            'focus-background-color': 'transparent',
            'hover-background-color': 'transparent',
            'active-background-color': 'transparent',
        },
    },
    'Caption Button Icon': {
        kind: 'Icon',
        props: {
            color: 'inherit',
            margin: 'auto',
            size: '20px',
        },
    },
    'Caption Button Icon Back': {
        kind: 'Icon',
        props: {
            category: 'ai',
            defaultIcon: AiOutlineArrowLeft,
        },
    },
    'Caption Button Icon Next': {
        kind: 'Icon',
        props: {
            category: 'ai',
            defaultIcon: AiOutlineArrowRight,
        },
    },
    Select: {
        kind: 'Select',
        props: {
            'background-color': 'transparent',
            'focus-background-color': '--lightD1',
            'hover-background-color': '--lightD1',
            'active-background-color': '--lightD2',
            border: 'none',
        },
    },
};
