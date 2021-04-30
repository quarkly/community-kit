import React, { useState, useEffect, useMemo } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { useTheme } from 'styled-components';
import VK, { Group } from 'react-vk';
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

const hexColor = new RegExp(/^#[0-9A-F]{6}$/, 'i');
const useColor = (theme) => (rawColor, defaultColor) =>
    useMemo(() => {
        const isVariable = rawColor.substring(0, 2) === '--';
        const color = isVariable
            ? theme.color[rawColor.substring(2)]
            : rawColor;
        return hexColor.test(color) ? color.substring(1) : defaultColor;
    }, [theme, rawColor, defaultColor]);

const VkPageComponent = ({
    background,
    mode,
    colorBground,
    colorPrimary,
    colorAccent,
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

    const color1 = getColor(colorBground, 'FFFFFF');
    const color2 = getColor(colorPrimary, '000000');
    const color3 = getColor(colorAccent, '5181B8');

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
                <ComponentNotice message="Add your VK community ID in the Props panel" />
            )}
        </Box>
    );
};

const propInfo = {
    groupId: {
        title: {
            en: 'VK community ID',
            ru: 'Идентификатор сообщества',
        },
        control: 'input',
        type: 'text',
        category: ' Main',
        weight: 1,
    },
    elementId: {
        title: {
            en: 'Widget container ID',
            ru: 'Идентификатор контейнера',
        },
        control: 'input',
        type: 'text',
        category: 'Widget',
        weight: 1,
    },
    colorBground: {
        title: {
            en: 'Widget background color',
            ru: 'Цвет фона виджета',
        },
        control: 'color',
        category: 'Widget',
        weight: 1,
    },
    colorPrimary: {
        title: {
            en: 'Widget text color',
            ru: 'Цвет текста виджета',
        },
        control: 'color',
        category: 'Widget',
        weight: 1,
    },
    colorAccent: {
        title: {
            en: 'Widget link color',
            ru: 'Цвет ссылок виджета',
        },
        control: 'color',
        category: 'Button',
        weight: 1,
    },
    mode: {
        title: {
            en: 'What to display in the widget',
            ru: 'Что отображать в виджете',
        },
        control: 'select',
        variants: [
            {
                title: {
                    en: 'Display the community members',
                    ru: 'Члены сообщества',
                },
                value: 3,
            },
            {
                title: {
                    en: 'Display the community wall',
                    ru: 'Новости',
                },
                value: 4,
            },
            {
                title: {
                    en: 'Display only the community name',
                    ru: 'Только название',
                },
                value: 1,
            },
        ],
        category: 'Widget',
        weight: 1,
    },
    noCover: {
        title: {
            en: "Don't display the community cover photo",
            ru: 'Не отображать обложки сообщества',
        },
        control: 'checkbox',
        category: 'Widget',
        weight: 1,
    },
    wide: {
        title: {
            en: 'Enable advanced mode',
            ru: 'Включить расширенный режим',
        },
        control: 'checkbox',
        category: 'Widget',
        weight: 1,
    },
};

const defaultProps = {
    elementId: 'vk_groups',
    colorBground: '#FFFFFF',
    colorPrimary: '#000000',
    colorAccent: '#5181B8',
    mode: 3,
    noCover: false,
    wide: false,
    width: 'auto',
};

Object.assign(VkPageComponent, {
    propInfo,
    defaultProps,
});

export default VkPageComponent;
