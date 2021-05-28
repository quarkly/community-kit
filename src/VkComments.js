import React, { useState, useEffect, useMemo } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';
import VK, { Comments } from 'react-vk';
import { Box } from '@quarkly/widgets';

import ComponentNotice from './ComponentNotice';

const useDebounce = (value, timeout, deep) => {
    const [state, setState] = useState(value);
    const comp = deep ? useDeepCompareEffect : useEffect;
    comp(() => {
        const handler = setTimeout(() => setState(value), timeout);
        return () => clearTimeout(handler);
    }, [value, timeout]);
    return state;
};

const attachToString = (x) => {
    const keys = Object.keys(x);
    return keys.every((k) => x[k])
        ? '*'
        : keys
              .filter((k) => x[k])
              .map((k) => k.substring(6).toLowerCase())
              .join();
};

const VKComments = ({
    apiId,
    pageId,
    elementId,
    width,
    height,
    limit,
    realtime,
    autoPublish,
    pageUrl,
    attachGraffiti,
    attachPhoto,
    attachAudio,
    attachLink,
    attachVideo,
    ...props
}) => {
    const dApiId = useDebounce(apiId, 1000);
    const dPageId = useDebounce(pageId, 1000);
    const dElementId = useDebounce(elementId, 1000);
    const attach = useMemo(() => {
        return attachToString({
            attachGraffiti,
            attachPhoto,
            attachAudio,
            attachLink,
            attachVideo,
        });
    }, [attachGraffiti, attachPhoto, attachAudio, attachLink, attachVideo]);

    const dOptions = useDebounce(
        {
            width,
            height,
            limit,
            attach,
            autoPublish: autoPublish ? 1 : 0,
            norealtime: realtime ? 0 : 1,
            pageUrl,
        },
        1000,
        true
    );

    const key = useMemo(
        () => dApiId + JSON.stringify(dOptions) + dPageId + dElementId,
        [dApiId, dOptions, dPageId, dElementId]
    );

    return (
        <Box {...props}>
            {dApiId ? (
                <VK key={key} apiId={dApiId}>
                    <Comments
                        elementId={dElementId}
                        pageId={dPageId}
                        options={dOptions}
                    />
                </VK>
            ) : (
                <ComponentNotice message="Add your VK app ID in the Props panel" />
            )}
        </Box>
    );
};

const propInfo = {
    apiId: {
        title: {
            en: 'VK app ID',
            ru: 'ID приложения VK',
        },
        control: 'input',
        type: 'text',
        category: ' Main',
        weight: 1,
    },
    pageId: {
        title: {
            en: 'VK page ID',
            ru: 'ID страницы VK',
        },
        control: 'input',
        type: 'text',
        category: ' Main',
        weight: 1,
    },
    limit: {
        title: {
            en: 'Max. comments',
            ru: 'Макс. комментариев',
        },
        control: 'input',
        type: 'text',
        category: 'Advanced',
        weight: 0.5,
    },
    autoPublish: {
        title: {
            en: 'Auto publishing',
            ru: 'Автопубликация',
        },
        control: 'checkbox',
        category: 'Advanced',
        weight: 0.5,
    },
    realtime: {
        title: {
            en: 'Update in real time',
            ru: 'Обновлять в реальном времени',
        },
        control: 'checkbox',
        category: 'Advanced',
        weight: 0.5,
    },
    pageUrl: {
        title: {
            en: 'Link to the page with the widget',
            ru: 'Ссылка на страницу с виджетом',
        },
        control: 'input',
        type: 'text',
        category: 'Advanced',
        weight: 0.5,
    },
    attachGraffiti: {
        title: {
            en: 'Add graffiti',
            ru: 'Добавлять граффити',
        },
        control: 'checkbox',
        category: 'Attach',
        weight: 0.5,
    },
    attachPhoto: {
        title: {
            en: 'Add photo',
            ru: 'Добавлять фотографии',
        },
        control: 'checkbox',
        category: 'Attach',
        weight: 0.5,
    },
    attachAudio: {
        title: {
            en: 'Add audio',
            ru: 'Добавлять аудио',
        },
        control: 'checkbox',
        category: 'Attach',
        weight: 0.5,
    },
    attachVideo: {
        title: {
            en: 'Add video',
            ru: 'Добавлять видео',
        },
        control: 'checkbox',
        category: 'Attach',
        weight: 0.5,
    },
    attachLink: {
        title: {
            en: 'Add link',
            ru: 'Добавлять ссылки',
        },
        control: 'checkbox',
        category: 'Attach',
        weight: 0.5,
    },
};

const defaultProps = {
    pageId: '',
    elementId: 'vk_comments',

    limit: 5,
    autoPublish: false,
    realtime: true,
    pageUrl: '',

    attachGraffiti: true,
    attachPhoto: true,
    attachAudio: true,
    attachVideo: true,
    attachLink: true,
};

Object.assign(VKComments, {
    title: 'VK Comments',
    description: {
        en: 'This component shows a form with VK community comments',
        ru: 'Компонент показывает форму с комментариями сообщества VK',
    },
    propInfo,
    defaultProps,
});

export default VKComments;
