import React from 'react';
import { Box } from '@quarkly/widgets';
import { useTabs } from '../TabsFull';

const TabsFullContent = ({ children, tabId, ...props }) => {
    const { currentTabId } = useTabs();
    const isHidden = currentTabId !== tabId;

    return (
        <Box role="tabpanel" hidden={isHidden} {...props}>
            {children}
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
