import React, { useRef, useCallback } from 'react';
import { Box } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import { useTabs } from '../TabsFull';

const overrides = {
    Tab: {
        kind: 'Box',
    },
    'Unselected Tab': {
        kind: 'Box',
    },
    'Selected Tab': {
        kind: 'Box',
    },
};

const TabsFullButton = ({ tabId, ...props }) => {
    const ref = useRef();
    const { setTabId, currentTabId, align } = useTabs();
    const { override, children, rest } = useOverrides(props, overrides);

    const selected = currentTabId === tabId;

    const onClick = useCallback(() => {
        ref.current.scrollIntoView({
            block: 'nearest',
            behavior: 'smooth',
        });
        setTabId(tabId);
    }, [tabId]);

    return (
        <Box
            ref={ref}
            flex={align === 'full width' ? '0 1 100%' : '0 0 auto'}
            role="tab"
            tabIndex="-1"
            cursor="pointer"
            aria-selected={selected}
            onClick={onClick}
            {...rest}
        >
            <Box
                {...override(
                    'Tab',
                    `${selected ? 'Selected' : 'Unselected'} Tab`
                )}
            >
                {children}
            </Box>
        </Box>
    );
};

const propInfo = {
    tabId: {
        title: 'Tab ID',
        description: {
            en: 'The ID of the TabPanel to show when clicked.',
        },
        control: 'input',
    },
};

Object.assign(TabsFullButton, {
    title: 'TabsFullButton',
    descrition: {
        ru:
            'Вкладка (кнопка), при клике на которую показывается нужный контент. Этот компонент должен располагаться внутри TabFullHead. Не забудьте указать TabIndex такой же как и TabsFullContent который будет показываться при клике',
    },
    propInfo,
    overrides,
});

export default TabsFullButton;
