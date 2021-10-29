import React from 'react';
import { Box } from '@quarkly/widgets';

const TabsFullBody = ({ children, ...props }) => (
    <Box {...props}>{children}</Box>
);

Object.assign(TabsFullBody, {
    title: 'TabsFullBody',
    description: {
        ru:
            'Контейнер для TabsFullContent. Этот компонент должен располагаться внутри TabsFull',
    },
});

export default TabsFullBody;
