import { isAfter, isSameDay, isBefore } from 'date-fns';
import getCellOverrides from './getCellOverrides';

const buttonModifiers = ({
    date,
    mode,
    isDisabled,
    isOutside,
    isSelected,
    range,
}) => {
    const overrides = [];

    if (isDisabled) {
        overrides.push('DateButton Disabled');
        return overrides;
    }

    if (isOutside) {
        overrides.push('DateButton Outside');
    }

    if (mode === 'single') {
        if (isSelected) {
            overrides.push('DateButton Selected');
        }

        return overrides;
    }

    if (mode === 'range') {
        const [fromSelected, toSelected] = range.selected;

        let from;
        let to;
        let isToHovered = false;
        let isFromHovered = false;

        /**
         * Обработка ховера
         * Если конец диапазона не выбран, то ориентируемся на ховер
         */
        if (toSelected) {
            from = fromSelected;
            to = toSelected;
        } else if (
            isAfter(range.hovered, fromSelected) ||
            isSameDay(range.hovered, fromSelected)
        ) {
            from = fromSelected;
            to = range.hovered;
            isToHovered = true;
        } else if (isBefore(range.hovered, fromSelected)) {
            from = range.hovered;
            to = fromSelected;
            isFromHovered = true;
        } else {
            // Для обработки клавиатуры (когда нет даты с ховером)
            from = fromSelected;
            to = null;
        }

        const isFrom = isSameDay(date, from);
        const isTo = isSameDay(date, to);
        const isInRange = isAfter(date, from) && isBefore(date, to);
        const isSingleRange = isFrom && isTo;

        if (isInRange || isFrom || isTo) {
            overrides.push('DateButton Range');
            if (isInRange) return overrides;
        }

        if (isSingleRange) {
            overrides.push(
                'DateButton OneDay Range',
                ...(isToHovered ? ['DateButton OneDay Range Hovered'] : [])
            );
            return overrides;
        }

        if (isFrom || isTo) {
            const endType = isFrom ? 'From' : 'To';
            const isHovered = isFrom ? isFromHovered : isToHovered;

            overrides.push(
                'DateButton End Range',
                `DateButton ${endType} Range`,
                ...(isHovered
                    ? [
                          'DateButton End Range Hovered',
                          `DateButton ${endType} Range Hovered`,
                      ]
                    : [])
            );
        }

        return overrides;
    }
};

const getButtonOverrides = ({
    date,
    colIdx,
    rowIdx,
    mode,
    isDisabled,
    isOutside,
    isSelected,
    range,
}) => {
    const cell = { colIdx, rowIdx };
    const overrides = [
        ...getCellOverrides('DateButton', cell),
        ...buttonModifiers({
            date,
            mode,
            isDisabled,
            isOutside,
            isSelected,
            range,
        }),
        `DateButton ${rowIdx * 10 + colIdx + 1}`,
    ];

    return overrides;
};

export default getButtonOverrides;
