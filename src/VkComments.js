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
                <ComponentNotice message="Добавьте ID вашего приложения VK на панели props" />
            )}
        </Box>
    );
};

const propInfo = {
    apiId: {
        title: 'ID приложения VK',
        control: 'input',
        type: 'text',
        category: ' Main',
        weight: 1,
    },
    pageId: {
        title: 'ID страницы VK',
        control: 'input',
        type: 'text',
        category: ' Main',
        weight: 1,
    },
    limit: {
        title: 'Макс. комментариев',
        control: 'input',
        type: 'text',
        category: 'Advanced',
        weight: 0.5,
    },
    autoPublish: {
        title: 'Автопубликация',
        control: 'checkbox',
        category: 'Advanced',
        weight: 0.5,
    },
    realtime: {
        title: 'Обновлять в реальном времени',
        control: 'checkbox',
        category: 'Advanced',
        weight: 0.5,
    },
    pageUrl: {
        title: 'Ссылка на страницу с виджетом',
        control: 'input',
        type: 'text',
        category: 'Advanced',
        weight: 0.5,
    },
    attachGraffiti: {
        title: 'Добавлять граффити',
        control: 'checkbox',
        category: 'Attach',
        weight: 0.5,
    },
    attachPhoto: {
        title: 'Добавлять фотографии',
        control: 'checkbox',
        category: 'Attach',
        weight: 0.5,
    },
    attachAudio: {
        title: 'Добавлять аудио',
        control: 'checkbox',
        category: 'Attach',
        weight: 0.5,
    },
    attachVideo: {
        title: 'Добавлять видео',
        control: 'checkbox',
        category: 'Attach',
        weight: 0.5,
    },
    attachLink: {
        title: 'Добавлять ссылки',
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
    propInfo,
    defaultProps,
});

export default VKComments;
