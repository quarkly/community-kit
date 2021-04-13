import React, { useReducer } from 'react';
import { Box } from '@quarkly/widgets';

const openItemsReducer = (state, action) => {
    switch (action.type) {
        case 'open':
            return [...state, action.idx];
        case 'close':
            return state.filter((idx) => idx !== action.idx);
        case 'toggle':
            return [action.idx];
        default:
            return state;
    }
};

const Accordion = ({ allowMultiple, allowToggle, children, ...rest }) => {
    const [openItems, openItemsUpdate] = useReducer(openItemsReducer, []);

    const onToggleOpen = ({ idx, open, disabled }) => {
        const // Открыт ли единственный последний элемент
            isOpenOneEl = openItems.length === 1;
        // Запрещать ли закрывать элементы по клику на них при отключенном allowToggle
        const isPreventDoubleClick =
            !allowMultiple && !allowToggle && open && isOpenOneEl;
        // Запрещать ли закрывать все элементы при отключенном allowMultiple
        const isRequireLastElOpen = !allowToggle && open && isOpenOneEl;
        // Выбираем действие, в зависимости от пропсов
        const state = allowMultiple ? 'open' : 'toggle';
        const type = !open ? state : 'close';

        // Если текущее действие нельзя выполнить
        if (isPreventDoubleClick || isRequireLastElOpen || disabled) {
            return;
        }

        openItemsUpdate({ type, idx });
    };

    return (
        <Box
            border="1px solid #BEC7CC"
            border-radius="4px"
            overflow="hidden"
            flex-direction="column"
            display="flex"
            {...rest}
        >
            {React.Children.map(children, (child) =>
                React.isValidElement(child)
                    ? React.cloneElement(child, {
                          openItems,
                          onToggleOpen,
                      })
                    : child
            )}
        </Box>
    );
};

const propInfo = {
    allowMultiple: {
        control: 'checkbox',
        category: 'Main',
        weight: '1',
    },
    allowToggle: {
        control: 'checkbox',
        category: 'Main',
        weight: '1',
    },
};

const defaultProps = {
    allowMultiple: true,
    allowToggle: true,
};

export default Object.assign(Accordion, {
    propInfo,
    defaultProps,
});
