import React, { useState, useEffect, useMemo } from 'react';
import atomize from '@quarkly/atomize';
import VK, { Comments } from 'react-vk';
import { Box } from '@quarkly/widgets';
import useDeepCompareEffect from 'use-deep-compare-effect';

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
    norealtime,
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
            autoPublish: +autoPublish,
            norealtime: +norealtime,
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
                'Добавьте ваш VK App ID на панели props'
            )}
        </Box>
    );
};

const propInfo = {
    apiId: {
        title: 'VK App ID',
        control: 'input',
        category: 'System',
        description: {
            en:
                'ID of VK App. You can create your app on this url: vk.com/apps',
        },
    },
    pageId: {
        title: 'Page ID',
        control: 'input',
        category: 'System',
        description: {
            en:
                'ID of the page on your site. A random string of up to 128 characters or a number. Used if one article has several URLs',
        },
    },
    limit: {
        title: 'Limit',
        control: 'input',
        category: 'Widget',
        description: {
            en: 'Max number of comments on the page',
        },
    },
    autoPublish: {
        title: 'Auto Publish',
        control: 'checkbox',
        category: 'Widget',
        description: {
            en: "Automatically publish the comment to the user's VK page",
        },
    },
    norealtime: {
        title: 'No realtime',
        control: 'checkbox',
        category: 'Widget',
        description: {
            en: 'Disables realtime updates for the comments.',
        },
    },
    pageUrl: {
        title: 'Page URL',
        control: 'input',
        category: 'Widget',
        description: {
            en:
                "URL of the page, containing the widget. Comments that are automatically posted to the user's VK page link to this URL, if autoPublish is enabled.",
        },
    },
    attachGraffiti: {
        title: 'Graffiti',
        control: 'checkbox',
        category: 'Attach',
        description: {
            en: 'User can add graffiti to comment',
        },
    },
    attachPhoto: {
        title: 'Photo',
        control: 'checkbox',
        category: 'Attach',
        description: {
            en: 'User can add photo to comment',
        },
    },
    attachAudio: {
        title: 'Audio',
        control: 'checkbox',
        category: 'Attach',
        description: {
            en: 'User can add audio to comment',
        },
    },
    attachVideo: {
        title: 'Video',
        control: 'checkbox',
        category: 'Attach',
        description: {
            en: 'User can add video to comment',
        },
    },
    attachLink: {
        title: 'Link',
        control: 'checkbox',
        category: 'Attach',
        description: {
            en: 'User can add graffiti to comment',
        },
    },
};

const defaultProps = {
    pageId: '',
    elementId: 'vk_comments',

    limit: 5,
    autoPublish: false,
    norealtime: false,
    pageUrl: '',

    attachGraffiti: true,
    attachPhoto: true,
    attachAudio: true,
    attachVideo: true,
    attachLink: true,
};

export default atomize(VKComments)(
    {
        description: {
            en:
                'This enables VK users to comment on your materials without having to register on your site.',
        },
        propInfo,
    },
    defaultProps
);
