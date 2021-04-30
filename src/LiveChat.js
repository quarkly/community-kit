import React from 'react';
import LiveChat from 'react-livechat';
import { Box } from '@quarkly/widgets';

import ComponentNotice from './ComponentNotice';

const LiveChatComponent = ({ license, group, chatBetweenGroups, ...props }) => {
    return (
        <Box {...props}>
            {license ? (
                <LiveChat
                    license={license}
                    group={group || ''}
                    chatBetweenGroups={chatBetweenGroups}
                />
            ) : (
                <ComponentNotice message="Add your License ID in the Props panel" />
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
        title: {
            en: 'Group number',
            ru: 'Номер группы',
        },
        control: 'input',
        type: 'number',
        category: 'Main',
        weight: 1,
    },
    chatBetweenGroups: {
        title: {
            en: 'Chat sessions between groups',
            ru: 'Сессии чатов между группами',
        },
        control: 'checkbox',
        category: 'Main',
        weight: 1,
    },
};

const defaultProps = {
    chatBetweenGroups: false,
};

Object.assign(LiveChatComponent, {
    title: 'LiveChat',
    description: {
        en: 'This component is for adding the LiveChat widget',
        ru: 'Компонент для добавления виджета LiveChat',
    },
    propInfo,
    defaultProps,
});

export default LiveChatComponent;
