import React from 'react';
import { Box, Placeholder } from '@quarkly/widgets';
import { useTabs } from '../TabsFull/utils';
import ComponentNotice from '../ComponentNotice';
import { isEmptyChildren } from '../utils';

const TabsFullContent = ({ children, tabId, ...props }) => {
    const context = useTabs();
    const isHidden = context?.currentTabId !== tabId;

    return (
        <Box display="contents">
            {context ? (
                <Box role="tabpanel" hidden={isHidden} {...props}>
                    {children}
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

const propInfo = {
    tabId: {
        title: 'Tab ID',
        description: {
            en: 'The ID of the TabPanel to show when clicked.',
        },
        control: 'input',
    },
};

Object.assign(TabsFullContent, {
    title: 'TabsFullContent',
    description: {
        ru:
            'Контейнер для контента, который будет показываться при клике на нужную вкладку. Должен располагаться внутри TabFullBody. Не забудьте указать TabIndex такой же как и TabsFullButton, на который надо будет кликать чтобы показать контент',
    },
    propInfo,
});

export default TabsFullContent;
