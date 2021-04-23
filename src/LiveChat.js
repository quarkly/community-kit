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
                    group={group || ''}
                    chatBetweenGroups={chatBetweenGroups}
                />
            ) : (
                <ComponentNotice message="Добавьте license на панели Props" />
            )}
        </Box>
    );
};

const propInfo = {
    license: {
        title: {
            en: 'License ID',
            ru: 'ID лицензии',
        },
        control: 'input',
        type: 'number',
        category: 'Main',
        weight: 1,
    },
    group: {
        title: 'Номер группы',
        control: 'input',
        type: 'number',
        category: 'Main',
        weight: 1,
    },
    chatBetweenGroups: {
        title: 'Сессии чатов между группами',
        control: 'checkbox',
        category: 'Main',
        weight: 1,
    },
};

const defaultProps = {
    chatBetweenGroups: false,
};

export default Object.assign(LiveChatComp, {
    title: 'LiveChat',
    description: {
        en: 'LiveChat widget for your application',
    },
    propInfo,
    defaultProps,
});
