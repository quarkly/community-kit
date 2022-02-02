import React from 'react';
import { Box, Placeholder } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import { useTabs } from '../TabsFull/utils';
import ComponentNotice from '../ComponentNotice';
import { isEmptyChildren } from '../utils';
import { overrides, propInfo } from './props';

const TabsFullContent = ({ tabId, ...props }) => {
    const { override, children, rest } = useOverrides(props, overrides);

    const context = useTabs();
    const isHidden = context?.currentTabId !== tabId;

    return (
        <Box role="tabpanel" hidden={isHidden} {...rest}>
            {context ? (
                <Box {...override('Wrapper')}>
                    {!isHidden && children}
                    {isEmptyChildren(children) && (
                        <Placeholder message="Drop content here" />
                    )}
                </Box>
            ) : (
                <ComponentNotice message="Place this component inside TabFullBody" />
            )}
        </Box>
    );
};

Object.assign(TabsFullContent, {
    title: 'TabsFullContent',
    description: {
        en:
            'A container for content that will be displayed when the desired tab is clicked. This component must be located inside TabFullBody.',
        ru:
            'Контейнер для контента, который будет показываться при клике на нужную вкладку. Этот компонент должен располагаться внутри TabFullBody.',
    },
    propInfo,
    overrides,
});

export default TabsFullContent;
