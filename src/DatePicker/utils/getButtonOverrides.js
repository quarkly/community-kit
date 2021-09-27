import { isAfter, isSameDay, isBefore } from 'date-fns';
import getCellOverrides from './getCellOverrides';

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
    const overrides = [...getCellOverrides('DateButton', cell)];

    if (isDisabled) {
        overrides.push(...getCellOverrides('DateButton Disabled', cell));

        return overrides;
    }

    if (isOutside) {
        overrides.push(...getCellOverrides('DateButton Outside', cell));
    }

    if (mode === 'single') {
        if (isSelected) {
            overrides.push(...getCellOverrides('DateButton Selected', cell));
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
            overrides.push(...getCellOverrides('DateButton Range', cell));
            if (isInRange) return overrides;
        }

        if (isSingleRange) {
            overrides.push(
                ...getCellOverrides('DateButton OneDay Range', cell),
                ...(isToHovered
                    ? [
                          ...getCellOverrides(
                              'DateButton OneDay Range Hovered',
                              cell
                          ),
                      ]
                    : [])
            );
            return overrides;
        }

        if (isFrom || isTo) {
            const endType = isFrom ? 'From' : 'To';
            const isHovered = isFrom ? isFromHovered : isToHovered;

            overrides.push(
                ...getCellOverrides('DateButton End Range', cell),
                ...getCellOverrides(`DateButton ${endType} Range`, cell),
                ...(isHovered
                    ? [
                          ...getCellOverrides(
                              'DateButton End Range Hovered',
                              cell
                          ),
                          ...getCellOverrides(
                              `DateButton ${endType} Range Hovered`,
                              cell
                          ),
                      ]
                    : [])
            );
        }

        return overrides;
    }
};

export default getButtonOverrides;
