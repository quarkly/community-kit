import React from 'react';
import LiveChat from 'react-livechat';
import { Box } from '@quarkly/widgets';

import ComponentNotice from './ComponentNotice';

const LiveChatComp = ({ license, group, chatBetweenGroups, ...props }) => {
    return (
        <Box {...props}>
            {license ? (
                <LiveChat
                    license={license}
                    group={group}
                    chatBetweenGroups={chatBetweenGroups === 'enable'}
                />
            ) : (
                <ComponentNotice message="Добавьте license на панели Props" />
            )}
        </Box>
    );
};

const propInfo = {
    license: {
        title: 'License ID:',
        control: 'number',
        type: 'number',
        category: 'Main',
        weight: 1,
    },
    group: {
        title: 'Group number:',
        control: 'number',
        type: 'number',
        category: 'Main',
        weight: 1,
    },
    chatBetweenGroups: {
        title: 'Chat sessions between groups:',
        control: 'radio-group',
        variants: ['enable', 'disable'],
        type: 'text',
        category: 'Main',
        weight: 1,
    },
};

const defaultProps = {
    license: '',
    group: '',
    chatBetweenGroups: '',
};

export default Object.assign(LiveChatComp, {
    title: 'LiveChat',
    description: {
        en: 'LiveChat widget for your application',
    },
    propInfo,
    defaultProps,
});
