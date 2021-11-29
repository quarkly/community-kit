import React, { useRef, useCallback, useMemo } from 'react';
import { Box, Placeholder } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import { useTabs, getHumanReadable } from '../TabsFull/utils';
import { propInfo, overrides } from './props';
import ComponentNotice from '../ComponentNotice';
import { isEmptyChildren } from '../utils';

const TabsFullButton = ({ tabId, ...props }) => {
    const ref = useRef();
    const { override, children, rest } = useOverrides(props, overrides);
    const context = useTabs();

    const { setTabId, currentTabId, align, orientation } = context || {};

    const selected = currentTabId === tabId;

    const onClick = useCallback(() => {
        ref.current.scrollIntoView({
            block: 'nearest',
            behavior: 'smooth',
        });
        setTabId?.(tabId);
    }, [setTabId, tabId]);

    const childrenIsEmpty = isEmptyChildren(children);

    const buttonStyles = useMemo(() => {
        if (
            typeof align === 'undefined' ||
            typeof orientation === 'undefined' ||
            typeof selected === 'undefined' ||
            childrenIsEmpty
        )
            return {};

        const {
            selected: selectedOverride,
            orientation: orientationOverride,
            align: alignOverride,
        } = getHumanReadable({
            selected,
            orientation,
            align,
        });

        return override(
            'Tab',
            `Tab ${orientationOverride}`,
            `Tab ${alignOverride}`,
            `Tab ${selectedOverride}`,
            `Tab ${orientationOverride} ${alignOverride}`,
            `Tab ${alignOverride} ${selectedOverride}`,
            `Tab ${orientationOverride} ${selectedOverride}`,
            `Tab ${orientationOverride} ${alignOverride} ${selectedOverride}`
        );
    }, [selected, orientation, align, childrenIsEmpty, override]);

    const mainStyles = useMemo(() => {
        return {
            flex: align === 'full width' && '0 1 100%',
            'align-items': align === 'full width' && 'center',
            margin: orientation === 'Vertical' ? '0 0 5px 0' : '0 5px 0 0',
        };
    }, [align, orientation]);

    return (
        <Box
            ref={ref}
            role="tab"
            tabIndex="-1"
            cursor="pointer"
            display="flex"
            aria-selected={selected}
            onClick={onClick}
            {...mainStyles}
            {...rest}
        >
            {context ? (
                <Box {...buttonStyles}>
                    {children}
                    {childrenIsEmpty && (
                        <Placeholder message="Drop content here" />
                    )}
                </Box>
            ) : (
                <ComponentNotice message="Place this component inside TabFullHead" />
            )}
        </Box>
    );
};

Object.assign(TabsFullButton, {
    title: 'TabsFullButton',
    description: {
        en:
            'A tab (button) that displays the desired content when clicked. This component must be located inside the TabFullHead',
        ru:
            'Вкладка (кнопка), при клике на которую показывается нужный контент. Этот компонент должен располагаться внутри TabFullHead',
    },
    propInfo,
    overrides,
});

export default TabsFullButton;
