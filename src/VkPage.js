import React, { useState, useEffect, useMemo } from 'react';
import atomize from '@quarkly/atomize';
import { Box, Text } from '@quarkly/widgets';
import { useTheme } from 'styled-components';
import VK, { Group } from 'react-vk';
import useDeepCompareEffect from 'use-deep-compare-effect';
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

const isCssVar = (x) => x.substring(0, 2) === '--';
const hexColor = new RegExp(/^#[0-9A-F]{6}$/, 'i');

const modeConverter = {
    'Only name': 1,
    Members: 3,
    News: 4,
};

const useColor = (theme) => (rawColor, defaultColor) =>
    useMemo(() => {
        let color = rawColor;
        if (isCssVar(rawColor)) {
            color = theme.color[rawColor.substring(2)];
        }
        // return parse(color)?.hex?.substring(1) || defaultColor
        return hexColor.test(color) ? color.substring(1) : defaultColor;
    }, [theme, rawColor, defaultColor]);

const Page = ({
    background,
    viewMode,
    bgc,
    color,
    buttonColor,
    elementId,
    groupId,
    width,
    height,
    noCover,
    wide,
    ...props
}) => {
    const theme = useTheme();
    const getColor = useColor(theme);

    const color1 = getColor(bgc, 'FFF');
    const color2 = getColor(color, '000');
    const color3 = getColor(buttonColor, '5181B8');
    const mode = modeConverter[viewMode];

    const dOpt = useDebounce(
        {
            height,
            width,
            wide,
            no_cover: noCover,
            color1,
            color2,
            color3,
            mode,
        },
        1000,
        true
    );
    const dGroupId = useDebounce(parseInt(groupId, 10), 1000);
    const dElementId = useDebounce(elementId, 1000);

    const [key, setKey] = useState('');

    useEffect(() => {
        setKey(dGroupId + JSON.stringify(dOpt) + dElementId);
    }, [dGroupId, dOpt, dElementId]);

    return (
        <Box {...props}>
            {dGroupId ? (
                <VK key={key}>
                    <Group
                        elementId={dElementId}
                        groupId={dGroupId}
                        options={dOpt}
                    />
                </VK>
            ) : (
                <ComponentNotice message="Insert correct group id in props panel" />
            )}
        </Box>
    );
};

const propInfo = {
    elementId: {
        title: 'Element ID',
        control: 'input',
        category: 'System',
        description: {
            en: 'Unique id of html element.',
        },
    },
    groupId: {
        title: 'Group ID',
        type: 'number',
        control: 'input',
        category: 'Widget',
        description: {
            en:
                'Numeric group ID. Сheck vk.com/dev/Community for more information',
        },
    },
    bgc: {
        title: 'Background color',
        control: 'color',
        category: 'Widget',
        description: {
            en: 'Background color of widget',
        },
    },
    color: {
        title: 'Color',
        control: 'color',
        category: 'Widget',
        description: {
            en: 'Text color',
        },
    },
    buttonColor: {
        title: 'Color',
        control: 'color',
        category: 'Button',
        description: {
            en: 'Color of subscribe button and some other links',
        },
    },
    viewMode: {
        title: 'View',
        control: 'select',
        category: 'Widget',
        variants: ['Members', 'News', 'Only name'],
        description: {
            en: 'View mode of widget (what information will be displayed).',
        },
    },
    noCover: {
        title: "Don't use cover",
        control: 'checkbox',
        category: 'Widget',
        description: {
            en: 'Disable cover-image of group.',
        },
    },
    wide: {
        title: 'Extended mode',
        control: 'checkbox',
        category: 'Widget',
        description: {
            en: 'Extended display mode of widget (only for news).',
        },
    },
};

const defaultProps = {
    width: 'auto',
    groupId: 175635117,
    elementId: 'vk_groups',
    bgc: '#fff',
    color: '#000',
    buttonColor: '#5181B8',
    viewMode: 'Members',
    noCover: false,
    wide: false,
};

export default atomize(Page)(
    {
        description: {
            en:
                'A Community widget links your site with your VK community. Your users will be able to subscribe to your VK feed without leaving the page.',
        },
        propInfo,
    },
    defaultProps
);
