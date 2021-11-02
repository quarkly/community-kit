const alignConvert = {
    start: 'Start',
    end: 'End',
    center: 'Center',
    'full width': 'Full-width',
};

const getHumanReadable = ({ align, selected, orientation }) => {
    const result = {
        align: undefined,
        state: undefined,
        orientation: undefined,
    };

    if (typeof align !== 'undefined') {
        result.align = `Align ${alignConvert[align]}`;
    }

    if (typeof selected !== 'undefined') {
        result.selected = selected ? ':selected' : ':unselected';
    }

    if (typeof orientation !== 'undefined') {
        result.orientation =
            orientation === 'horizontal' ? 'Horizontal' : 'Vertical';
    }

    return result;
};

export default getHumanReadable;
