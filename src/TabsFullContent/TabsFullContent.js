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
        tabId: {
            title: {
                en: 'Tab ID',
                ru: 'ID Вкладки',
            },
            description: {
                en:
                    'ID of the tab that is displayed when this button is clicked',
                ru: 'ID вкладки, которая отображается при нажатии этой кнопки',
            },
            control: 'input',
        },
    },
};

Object.assign(TabsFullContent, {
    title: 'TabsFullContent',
    description: {
        en:
            'A container for content that will be displayed when the desired tab is clicked. This component must be located inside',
        ru:
            'Контейнер для контента, который будет показываться при клике на нужную вкладку. Этот компонент должен располагаться внутри TabFullBody.',
    },
    propInfo,
});

export default TabsFullContent;
