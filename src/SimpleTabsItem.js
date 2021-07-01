import atomize from '@quarkly/atomize';
import { Box } from '@quarkly/widgets';
import React, { useEffect, useRef } from 'react';
import { useTabs } from './SimpleTabsList';

const SimpleTab = ({ index, ...props }) => {
    const ref = useRef();
    const { addTab, currentTab, removeTab } = useTabs();

    const tabId = props.tabId || props['data-qid'];

    useEffect(() => {
        addTab({ tabId, index });
        return () => removeTab({ tabId, index });
    }, [tabId, index, addTab, removeTab]);

    const isHidden = currentTab !== tabId;

    return <Box ref={ref} role="tabpanel" hidden={isHidden} {...props} />;
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

export default atomize(SimpleTab)({
    name: 'SimpleTab',
    description: {
        en:
            'Контейнер для ресурсов связанных с вкладкой. Должен располагаться внутри SimpleTabs',
    },
    propInfo,
});
