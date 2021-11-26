import React from 'react';
import { Box, Placeholder } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import { useTabs } from '../TabsFull';
import ComponentNotice from '../ComponentNotice';
import { isEmptyChildren } from '../utils';
import overrides from './props/overrides';

const TabsFullBody = (props) => {
    const { override, children, rest } = useOverrides(props, overrides);
    const context = useTabs();

    return (
        <Box {...rest}>
            {context ? (
                <Box {...override('Wrapper')}>
                    {children}
                    {isEmptyChildren(children) && (
                        <Placeholder message="Drop TabsFullContent here" />
                    )}
                </Box>
            ) : (
                <ComponentNotice message="Place this component inside TabsFull" />
            )}
        </Box>
    );
};

Object.assign(TabsFullBody, {
    title: 'TabsFullBody',
    description: {
        en:
            'Container for TabsFullContent. This component must be located inside TabsFull',
        ru:
            'Контейнер для TabsFullContent. Этот компонент должен располагаться внутри TabsFull',
    },
    overrides,
});

export default TabsFullBody;
